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
    pageEyebrow: string;
    heroIntro: string;
    detailEyebrow: string;
    detailTitle: string;
    detailAccent: string;
    detailBody: string;
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
        pageEyebrow: "System Core",
        heroIntro:
            "Built for fast, private local control. The Brain processes automations, device logic, and home routines inside the home instead of handing them off to the cloud.",
        detailEyebrow: "Latency_Check: 0.02ms",
        detailTitle: "Local Force.",
        detailAccent: "Zero Cloud.",
        detailBody:
            "Because your data is local, it is instantly accessible. You own the history, the automations, and the logic that runs your home.",
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
        pageEyebrow: "Private Security",
        heroIntro:
            "A smart home should not require a lesson every time someone walks into a room. We keep the familiar light switch at the center and let the automation support it.",
        detailEyebrow: "User_Interface: Light Switch",
        detailTitle: "Use The Switch.",
        detailAccent: "Get The Magic.",
        detailBody:
            "The biggest deal is simple: if you can use a light switch, you can use our automation. No confusing dashboards required for everyday living. The switch still works like a switch, while the home handles the rest.",
    },
    {
        id: "03",
        slug: "switch",
        name: "The Switch",
        shortLabel: "The Switch",
        title: "The Switch",
        subtitle: "Built Around You.",
        desc: "Smart lighting built around the switch everyone already understands.",
        image: "/prod-light-orange.png",
        href: "/switch",
        pageEyebrow: "Lighting Control",
        heroIntro:
            "A smart home should not require a lesson every time someone walks into a room. We keep the familiar light switch at the center and let the automation support it.",
        detailEyebrow: "User_Interface: Light Switch",
        detailTitle: "Use The Switch.",
        detailAccent: "Get The Magic.",
        detailBody:
            "The biggest deal is simple: if you can use a light switch, you can use our automation. No confusing dashboards required for everyday living. The switch still works like a switch, while the home handles the rest.",
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
        pageEyebrow: "Access Control",
        heroIntro:
            "The Portal is about trusted entry, simple control, and stronger confidence at the edge of the home. It connects access with automation in a cleaner way.",
        detailEyebrow: "Entry_State: Verified",
        detailTitle: "Trusted Entry.",
        detailAccent: "Smarter Access.",
        detailBody:
            "From front doors to managed access routines, The Portal helps secure transitions in and out of the home while keeping the experience simple.",
    },
];

export const getHardwareItemBySlug = (slug: string) =>
    hardwareItems.find((item) => item.slug === slug);
