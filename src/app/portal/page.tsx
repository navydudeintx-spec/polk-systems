import { notFound } from "next/navigation";
import { getHardwareItemBySlug } from "@/data/hardware";
import { HardwareDetailTemplate } from "@/components/core/HardwareDetailTemplate";

export default function PortalPage() {
    const item = getHardwareItemBySlug("portal");

    if (!item) {
        notFound();
    }

    return <HardwareDetailTemplate item={item} />;
}
