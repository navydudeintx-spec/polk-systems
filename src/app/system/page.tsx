import type { Metadata } from "next";
import SystemPageClient from "./system";

export const metadata: Metadata = {
  title: "The System | Polk Systems",
  description:
    "Explore the Polk Systems approach to a unified smart home system built around local-first control, elegant hardware choices, reliable automation, and long-term flexibility.",
};

export default function SystemPage() {
  return <SystemPageClient />;
}