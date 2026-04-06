"use client";

import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-brand-black min-h-screen text-brand-white selection:bg-brand-accent selection:text-black">
            {/* Background Texture */}
            <div className="fixed inset-0 polk-architectural-grid opacity-10 pointer-events-none z-0" />

            <section className="relative pt-48 pb-32 z-10">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="text-brand-accent text-[10px] font-black uppercase tracking-[0.4em] mb-8 block">
                            Protocol_Privacy
                        </span>

                        <h1 className="text-6xl md:text-[8vw] font-black uppercase tracking-tighter leading-[0.8] mb-12">
                            Privacy <br />
                            <span className="text-brand-white/20">Is The Product.</span>
                        </h1>

                        <div className="space-y-16 border-t border-white/10 pt-16">
                            <div className="border-l border-brand-accent/30 pl-8">
                                <p className="text-xl md:text-2xl text-brand-white/80 font-medium leading-relaxed">
                                    At Polk Systems, we design for local-first control and privacy-aware
                                    operation. This page explains how we handle information when you use
                                    our website, contact us, purchase services, or operate a Polk Systems
                                    installation in your home.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                <section>
                                    <h2 className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-6">
                                        01. Website Submissions
                                    </h2>
                                    <p className="text-sm font-black uppercase tracking-widest leading-loose text-white/60">
                                        When you submit a contact form, assessment request, scheduling
                                        request, or other inquiry through this website, we collect the
                                        information you choose to provide, such as your name, email
                                        address, phone number, address, project details, and message
                                        content. We use that information to respond to you, prepare
                                        estimates, schedule consultations, deliver requested information,
                                        and communicate about your project.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-6">
                                        02. Website Logs, Cookies, And Analytics
                                    </h2>
                                    <p className="text-sm font-black uppercase tracking-widest leading-loose text-white/60">
                                        Like most websites, our hosting providers and infrastructure may
                                        automatically create server logs containing technical data such as
                                        IP address, browser type, device type, referring pages, and access
                                        times. We may use essential cookies or similar technical tools
                                        needed to operate the website, improve reliability, protect against
                                        abuse, and understand whether the site is functioning properly. If
                                        analytics, spam filtering, form-delivery, or similar third-party
                                        website tools are used, those tools may process limited website
                                        interaction data in connection with their services.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-6">
                                        03. Installed Systems And Local Processing
                                    </h2>
                                    <p className="text-sm font-black uppercase tracking-widest leading-loose text-white/60">
                                        Polk Systems is built around local-first architecture. For supported
                                        local-first configurations, core automation logic, dashboards,
                                        device state, and system activity are designed to run on equipment
                                        installed inside your home rather than being routed through Polk
                                        Systems cloud infrastructure. In those local-first deployments, Polk
                                        Systems does not treat your home activity data as marketing data or
                                        monetize it.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-6">
                                        04. Third-Party Devices And Cloud Exceptions
                                    </h2>
                                    <p className="text-sm font-black uppercase tracking-widest leading-loose text-white/60">
                                        Some third-party devices, integrations, voice assistants, cameras,
                                        remote-access features, manufacturer apps, or customer-selected
                                        services may rely on external cloud services outside Polk Systems
                                        control. When a customer chooses or requires those services, data
                                        related to those devices or services may be processed by the
                                        applicable manufacturer or provider under that party&apos;s own
                                        privacy practices. Polk Systems does not sell or rent personal
                                        information to third parties for marketing purposes.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-6">
                                        05. Support Access
                                    </h2>
                                    <p className="text-sm font-black uppercase tracking-widest leading-loose text-white/60">
                                        Polk Systems does not routinely monitor the private activity inside
                                        your home. If support, troubleshooting, maintenance, migration,
                                        warranty service, or requested remote assistance is needed, Polk
                                        Systems may access limited system information necessary to diagnose,
                                        repair, update, or improve the installed system. Where practical,
                                        that access is performed with customer knowledge or authorization
                                        and is limited to the work required.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-6">
                                        06. Retention
                                    </h2>
                                    <p className="text-sm font-black uppercase tracking-widest leading-loose text-white/60">
                                        We retain website inquiries, customer communications, project
                                        records, invoices, configuration records, and related business
                                        documents for as long as reasonably necessary to respond to
                                        inquiries, perform services, maintain records, support installations,
                                        comply with legal obligations, resolve disputes, and enforce
                                        agreements. Data stored locally on your installed system remains
                                        primarily under your control, subject to the design of the devices
                                        and services you choose to use.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-6">
                                        07. Security
                                    </h2>
                                    <p className="text-sm font-black uppercase tracking-widest leading-loose text-white/60">
                                        We use commercially reasonable administrative, technical, and
                                        operational measures to protect information we handle through the
                                        website and during customer projects. No method of transmission,
                                        storage, or connected-device operation is perfectly secure, and no
                                        security measure can guarantee absolute protection. Customers also
                                        play an important role in security by maintaining their networks,
                                        credentials, physical access controls, and third-party accounts.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-6">
                                        08. Your Choices, Contact, And Updates
                                    </h2>
                                    <p className="text-sm font-black uppercase tracking-widest leading-loose text-white/60">
                                        You may contact Polk Systems to ask questions about the information
                                        you submitted through this website, request corrections, or request
                                        deletion where appropriate and legally permitted. For privacy-related
                                        inquiries, contact{" "}
                                        <a
                                            href="mailto:polk@polksystems.com"
                                            className="text-brand-accent hover:text-white transition-colors"
                                        >
                                            polk@polksystems.com
                                        </a>
                                        . We may update this policy from time to time to reflect changes in
                                        our website, services, vendors, legal requirements, or operating
                                        practices. The date below reflects the latest revision.
                                    </p>
                                </section>
                            </div>

                            <div className="pt-16 border-t border-white/10 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-white/20">
                                <span>Vault_Revision_02</span>
                                <span>Last updated: April 2026</span>
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </section>

            <Footer />
        </div>
    );
}