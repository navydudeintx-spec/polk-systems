"use server";

import { promises as fs } from "fs";
import path from "path";
import nodemailer from "nodemailer";
import { ESP, Automation, Delivery, CRM } from "./services/integrations";

export interface Lead {
    id: string;
    created_at: string;

    // Contact
    name: string;
    email: string;
    phone?: string;
    preferred_contact: "email" | "phone" | "either";

    // Qualifier
    project_type?: "new_build" | "retrofit" | "consultation";
    home_size?: string;
    room_count?: string;
    property_type?: string;

    // Interest
    systems?: string[];
    message?: string;

    // Tracking
    source: string;
    status: "new" | "contacted" | "qualified" | "closed";
}

const LEADS_FILE = path.join(process.cwd(), "data", "leads.json");

async function ensureDataDir() {
    const dir = path.dirname(LEADS_FILE);
    try {
        await fs.access(dir);
    } catch {
        await fs.mkdir(dir, { recursive: true });
    }
}

async function readLeads(): Promise<Lead[]> {
    await ensureDataDir();
    try {
        const data = await fs.readFile(LEADS_FILE, "utf-8");
        return JSON.parse(data);
    } catch {
        return [];
    }
}

async function writeLeads(leads: Lead[]) {
    await ensureDataDir();
    await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2));
}

function requiredEnv(name: string): string {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }
    return value;
}

function buildTransporter() {
    const host = requiredEnv("SMTP_HOST");
    const port = Number(requiredEnv("SMTP_PORT"));
    const secure = requiredEnv("SMTP_SECURE") === "true";
    const user = requiredEnv("SMTP_USER");
    const pass = requiredEnv("SMTP_PASS");

    return nodemailer.createTransport({
        host,
        port,
        secure,
        auth: {
            user,
            pass,
        },
    });
}

function formatSystems(systems?: string[]): string {
    if (!systems || systems.length === 0) return "None selected";

    const labels: Record<string, string> = {
        lighting: "Smart Lighting",
        climate: "Climate Control",
        security: "Security",
        audio: "Whole-Home Audio",
        shading: "Automated Shading",
        energy: "Energy Monitoring",
        network: "Network Infrastructure",
        theater: "Home Theater",
    };

    return systems.map((s) => labels[s] || s).join(", ");
}

async function sendLeadNotification(lead: Lead) {
    const transporter = buildTransporter();

    const to = requiredEnv("LEADS_TO");
    const from = requiredEnv("LEADS_FROM");

    const subject = `New Polk Systems lead: ${lead.name}`;

    const text = `
New website lead received

Name: ${lead.name}
Email: ${lead.email}
Phone: ${lead.phone || "Not provided"}
Preferred Contact: ${lead.preferred_contact}

Project Type: ${lead.project_type || "Not provided"}
Home Size: ${lead.home_size || "Not provided"}
Room Count: ${lead.room_count || "Not provided"}
Property Type: ${lead.property_type || "Not provided"}

Systems: ${formatSystems(lead.systems)}

Message:
${lead.message || "No message provided"}

Source: ${lead.source}
Created At: ${lead.created_at}
Lead ID: ${lead.id}
`.trim();

    const html = `
<div style="font-family:Arial,Helvetica,sans-serif; line-height:1.6; color:#111;">
  <h2 style="margin-bottom:16px;">New website lead received</h2>

  <table cellpadding="6" cellspacing="0" border="0" style="border-collapse:collapse;">
    <tr><td><strong>Name:</strong></td><td>${lead.name}</td></tr>
    <tr><td><strong>Email:</strong></td><td>${lead.email}</td></tr>
    <tr><td><strong>Phone:</strong></td><td>${lead.phone || "Not provided"}</td></tr>
    <tr><td><strong>Preferred Contact:</strong></td><td>${lead.preferred_contact}</td></tr>

    <tr><td><strong>Project Type:</strong></td><td>${lead.project_type || "Not provided"}</td></tr>
    <tr><td><strong>Home Size:</strong></td><td>${lead.home_size || "Not provided"}</td></tr>
    <tr><td><strong>Room Count:</strong></td><td>${lead.room_count || "Not provided"}</td></tr>
    <tr><td><strong>Property Type:</strong></td><td>${lead.property_type || "Not provided"}</td></tr>

    <tr><td><strong>Systems:</strong></td><td>${formatSystems(lead.systems)}</td></tr>
    <tr><td><strong>Source:</strong></td><td>${lead.source}</td></tr>
    <tr><td><strong>Created At:</strong></td><td>${lead.created_at}</td></tr>
    <tr><td><strong>Lead ID:</strong></td><td>${lead.id}</td></tr>
  </table>

  <div style="margin-top:20px;">
    <strong>Message:</strong>
    <div style="margin-top:8px; padding:12px; background:#f5f5f5; border:1px solid #ddd;">
      ${lead.message ? lead.message.replace(/\n/g, "<br />") : "No message provided"}
    </div>
  </div>
</div>
`.trim();

    await transporter.sendMail({
        from: `"Polk Systems Website" <${from}>`,
        to,
        replyTo: lead.email,
        subject,
        text,
        html,
    });
}

export async function submitLead(formData: {
    name: string;
    email: string;
    phone?: string;
    preferred_contact?: "email" | "phone" | "either";
    project_type?: string;
    home_size?: string;
    room_count?: string;
    property_type?: string;
    systems?: string[];
    message?: string;
    source?: string;
}): Promise<{ success: boolean; error?: string }> {
    if (!formData.name?.trim()) return { success: false, error: "Name is required" };
    if (!formData.email?.trim()) return { success: false, error: "Email is required" };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        return { success: false, error: "Invalid email address" };
    }

    const lead: Lead = {
        id: crypto.randomUUID(),
        created_at: new Date().toISOString(),
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone?.trim() || undefined,
        preferred_contact: formData.preferred_contact || "email",
        project_type: formData.project_type as Lead["project_type"],
        home_size: formData.home_size,
        room_count: formData.room_count,
        property_type: formData.property_type,
        systems: formData.systems,
        message: formData.message?.trim() || undefined,
        source: formData.source || "direct",
        status: "new",
    };

    try {
        // Save locally first
        const leads = await readLeads();
        leads.push(lead);
        await writeLeads(leads);

        // Send email notification
        await sendLeadNotification(lead);

        // Existing integrations
        const crmResult = await CRM.createLead({
            name: lead.name,
            email: lead.email,
            source: lead.source,
            status: "New",
        });

        if (crmResult.success) {
            await ESP.subscribe(lead.email, lead.name);
            await ESP.tag(lead.email, ["Web-Inquiry", lead.project_type || "General", "Polk-Website"]);
            await Automation.triggerWorkflow(lead.email, "welcome-series-v2");
            await Delivery.sendAsset(lead.email, "polk-systems-brochure.pdf");
            await CRM.scheduleFollowUp(crmResult.leadId, "call", 24);
        }

        console.log(`[LEAD SYSTEM] Successfully processed lead: ${lead.email}`);
        return { success: true };
    } catch (err) {
        console.error("[LEAD] Failed to process lead workflow:", err);
        return { success: false, error: "We saved your request, but email delivery failed. Please try again or contact us directly." };
    }
}

export async function getLeads(): Promise<Lead[]> {
    return readLeads();
}

export async function updateLeadStatus(
    id: string,
    status: Lead["status"]
): Promise<{ success: boolean }> {
    const leads = await readLeads();
    const idx = leads.findIndex((l) => l.id === id);
    if (idx === -1) return { success: false };
    leads[idx].status = status;
    await writeLeads(leads);
    return { success: true };
}