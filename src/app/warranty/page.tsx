import type { Metadata } from "next";
import WarrantyPageClient from "./warranty";

export const metadata: Metadata = {
  title: "Warranty | Polk Systems",
  description:
    "Review the Polk Systems warranty covering workmanship, eligible hardware support, service limitations, and the terms that apply to installed systems and related components.",
};

export default function WarrantyPage() {
  return <WarrantyPageClient />;
}