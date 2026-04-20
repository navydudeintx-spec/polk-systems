import type { Metadata } from "next";
import LicensePageClient from "./license";

export const metadata: Metadata = {
  title: "License | Polk Systems",
  description:
    "Review the Polk Systems license terms for software, system configuration, documentation, and permitted use of the services and materials provided with your installation.",
};

export default function LicensePage() {
  return <LicensePageClient />;
}