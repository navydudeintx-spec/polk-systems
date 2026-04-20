import type { Metadata } from "next";
import WhyWeAreDifferentPageClient from "./whywearedifferent";

export const metadata: Metadata = {
  title: "Why We Are Different | Polk Systems",
  description:
    "See what sets Polk Systems apart, from local-first design and thoughtful integration to elegant user experience, long-term flexibility, and a more refined approach to smart home technology.",
};

export default function WhyWeAreDifferentPage() {
  return <WhyWeAreDifferentPageClient />;
}