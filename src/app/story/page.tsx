import type { Metadata } from "next";
import StoryPageClient from "./story";

export const metadata: Metadata = {
  title: "Our Story | Polk Systems",
  description:
    "Learn the story behind Polk Systems, the values that shaped the company, and the local-first approach to building thoughtful, elegant smart home systems.",
};

export default function StoryPage() {
  return <StoryPageClient />;
}