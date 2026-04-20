import type { Metadata } from "next";
import PrivacyPageClient from "./privacy";

export const metadata: Metadata = {
  title: "Privacy | Polk Systems",
  description:
    "Review how Polk Systems approaches privacy, local-first system design, data handling, remote access options, and the protection of information used by your smart home system.",
};

export default function PrivacyPage() {
  return <PrivacyPageClient />;
}