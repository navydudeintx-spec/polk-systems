import { QuietAudit } from "@/components/core/QuietAudit";
import { Footer } from "@/components/layout/Footer";

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
