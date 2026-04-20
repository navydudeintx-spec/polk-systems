import type { Metadata } from "next";
import GettingStartedPageClient from "./gettingstarted";

export const metadata: Metadata = {
  title: "Getting Started | Polk Systems",
  description:
    "Start with Polk Systems by scheduling a private home assessment, reviewing your goals, and planning a local-first smart home system built around lighting, access control, cameras, comfort, and unified automation.",
};

export default function GettingStartedPage() {
  return <GettingStartedPageClient />;
}