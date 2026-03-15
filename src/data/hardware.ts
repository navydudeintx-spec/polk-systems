export type HardwareItem = {
    id: string;
    slug: string;
    name: string;
    shortLabel: string;
    title: string;
    subtitle: string;
    desc: string;
    image: string;
    href: string;
};

export const hardwareItems: HardwareItem[] = [
    {
        id: "01",
        slug: "brain",
        name: "The Brain",
        shortLabel: "The Brain",
        title: "The Brain",
        subtitle: "Of the House.",
        desc: "The brain of your home. Local compute, zero cloud sync.",
        image: "/the-node-core.jpg",
        href: "/brain",
    },
    {
        id: "02",
        slug: "vision",
        name: "The Vision",
        shortLabel: "The Vision",
        title: "The Vision",
        subtitle: "For Your Home.",
        desc: "Encrypted optics. Your home has never looked safer.",
        image: "/prod-cam-orange.png",
        href: "/vision",
    },
    {
        id: "03",
        slug: "aura",
        name: "The Aura",
        shortLabel: "The Aura",
        title: "The Aura",
        subtitle: "In Every Room.",
        desc: "Lighting that understands your day, naturally.",
        image: "/prod-light-orange.png",
        href: "/aura",
    },
    {
        id: "04",
        slug: "portal",
        name: "The Portal",
        shortLabel: "The Portal",
        title: "The Portal",
        subtitle: "At Every Entry.",
        desc: "Biometric access for physical peace of mind.",
        image: "/prod-lock-orange.png",
        href: "/portal",
    }
];
