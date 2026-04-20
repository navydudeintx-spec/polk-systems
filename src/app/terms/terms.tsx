import type { Metadata } from "next";
import TermsPageClient from "./terms";

export const metadata: Metadata = {
  title: "Terms | Polk Systems",
  description:
    "Review the Polk Systems terms covering services, installations, estimates, payments, support, and the use of materials, software, and system configurations provided with your project.",
};

export default function TermsPage() {
  return <TermsPageClient />;
}