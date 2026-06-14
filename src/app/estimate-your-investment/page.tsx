import type { Metadata } from "next";
import EstimatePageClient from "./estimate";

export const metadata: Metadata = {
  title: "Estimate Your Investment | Polk Systems",
  description:
    "Get an estimate for your smart home project with Polk Systems. Schedule a private home assessment for lighting, access control, cameras, and local-first smart home automation.",
  alternates: {
    canonical: "/estimate-your-investment",
  },
};

export default function EstimatePage() {
  return <EstimatePageClient />;
}