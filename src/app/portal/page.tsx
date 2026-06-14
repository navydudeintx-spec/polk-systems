import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getHardwareItemBySlug } from "@/data/hardware";
import { HardwareDetailTemplate } from "@/components/core/HardwareDetailTemplate";

export const metadata: Metadata = {
  title: "Portal | Polk Systems",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PortalPage() {
    const item = getHardwareItemBySlug("portal");

    if (!item) {
        notFound();
    }

    return <HardwareDetailTemplate item={item} />;
}
