import { notFound } from "next/navigation";
import { getHardwareItemBySlug } from "@/data/hardware";
import { HardwareDetailTemplate } from "@/components/core/HardwareDetailTemplate";

export default function AuraPage() {
    const item = getHardwareItemBySlug("aura");

    if (!item) {
        notFound();
    }

    return <HardwareDetailTemplate item={item} />;
}
