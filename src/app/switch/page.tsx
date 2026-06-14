import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getHardwareItemBySlug } from "@/data/hardware";
import { HardwareDetailTemplate } from "@/components/core/HardwareDetailTemplate";

export const metadata: Metadata = {
  title: "Switch | Polk Systems",
  description:
    "The Polk Systems Switch is the local-first controller at the center of a reliable smart home system.",
  alternates: {
    canonical: "/switch",
  },
};

export default function SwitchPage() {
    const item = getHardwareItemBySlug("switch");

    if (!item) {
        notFound();
    }

    return <HardwareDetailTemplate item={item} />;
}
