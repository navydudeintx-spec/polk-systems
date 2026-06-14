import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getHardwareItemBySlug } from "@/data/hardware";
import { HardwareDetailTemplate } from "@/components/core/HardwareDetailTemplate";

export const metadata: Metadata = {
  title: "Vision | Polk Systems",
  description:
    "Privacy-focused camera and vision system options for a local-first smart home.",
  alternates: {
    canonical: "/vision",
  },
};

export default function VisionPage() {
    const item = getHardwareItemBySlug("vision");

    if (!item) {
        notFound();
    }

    return <HardwareDetailTemplate item={item} />;
}
