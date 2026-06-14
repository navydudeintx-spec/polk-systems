import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getHardwareItemBySlug } from "@/data/hardware";
import { HardwareDetailTemplate } from "@/components/core/HardwareDetailTemplate";

export const metadata: Metadata = {
  title: "The Brain | Polk Systems",
  description:
    "The Polk Systems Brain is the local-first controller at the center of a reliable smart home system.",
  alternates: {
    canonical: "/brain",
  },
};

export default function BrainPage() {
    const item = getHardwareItemBySlug("brain");

    if (!item) {
        notFound();
    }

    return <HardwareDetailTemplate item={item} />;
}
