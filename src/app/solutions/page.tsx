import type { Metadata } from "next";
import SolutionsPageClient from "./solutions";

export const metadata: Metadata = {
  title: "Solutions | Polk Systems",
  description:
    "Explore Polk Systems solutions for lighting, access control, cameras, comfort, energy, and unified local-first smart home automation designed around the way you live.",
};

export default function SolutionsPage() {
  return <SolutionsPageClient />;
}