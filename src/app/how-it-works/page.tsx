import type { Metadata } from "next";
import HowItWorksPageClient from "./hotitworks";

export const metadata: Metadata = {
  title: "How It Works | Polk Systems",
  description:
    "See how Polk Systems takes a smart home project from consultation to design, installation, integration, and long-term support with a local-first, unified approach.",
};

export default function HowItWorksPage() {
  return <HowItWorksPageClient />;
}