import { notFound } from "next/navigation";
import { getHardwareItemBySlug } from "@/data/hardware";
import { HardwareDetailTemplate } from "@/components/core/HardwareDetailTemplate";

export default function VisionPage() {
    const item = getHardwareItemBySlug("vision");

    if (!item) {
        notFound();
    }

    return <HardwareDetailTemplate item={item} />;
}
