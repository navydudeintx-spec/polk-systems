import type { Metadata } from "next";
import { QuietAudit } from "@/components/core/QuietAudit";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Smart Home Audit | Polk Systems",
  description:
    "Request a quiet smart home audit from Polk Systems to identify automation, reliability, comfort, security, and privacy issues in your current setup.",
  alternates: {
    canonical: "/audit",
  },
};

export default function AuditPage() {
    return (
        <div className="bg-brand-black min-h-screen">
            <div className="pt-20">
                <QuietAudit />
            </div>
            <Footer />
        </div>
    );
}
