import type { Metadata } from "next";
import TechnologyPageClient from "./technology";

export const metadata: Metadata = {
  title: "Technology | Polk Systems",
  description:
    "Explore the technology behind Polk Systems, including local-first control, reliable hardware, thoughtful integration choices, and the foundation that powers a unified smart home experience.",
};

export default function TechnologyPage() {
  return <TechnologyPageClient />;
}