import { notFound } from "next/navigation";
import { getHardwareItemBySlug } from "@/data/hardware";
import { HardwareDetailTemplate } from "@/components/core/HardwareDetailTemplate";

export default function SwitchPage() {
    const item = getHardwareItemBySlug("switch");

    if (!item) {
        notFound();
    }

    return <HardwareDetailTemplate item={item} />;
}
