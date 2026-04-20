import type { Metadata } from "next";
import ProcessPageClient from "./process";

export const metadata: Metadata = {
  title: "Process | Polk Systems",
  description:
    "Learn the Polk Systems process from consultation and planning to installation, integration, testing, and long-term support for a refined local-first smart home experience.",
};

export default function ProcessPage() {
  return <ProcessPageClient />;
}