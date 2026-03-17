export type HardwareBenefit = {
    title: string;
    body: string;
    helperLabel?: string;
    helperText?: string;
};

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
    benefits?: HardwareBenefit[];
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
        "Built for fast, private local control. The Brain processes the logic of your home inside the home instead of sending every action out to the cloud.",
    detailEyebrow: "Latency_Check: 0.02ms",
    detailTitle: "Local Force.",
    detailAccent: "Zero Cloud.",
    detailBody:
        "The Brain keeps the core of your home running locally, so your system is faster, more private, and more dependable for the things you use every day.",
    benefits: [
        {
            title: "Routines and automations",
            helperLabel: "What’s this?",
            helperText:
                "Routines and automations are actions your home can handle automatically based on time, motion, temperature, a door opening, sunrise, and more.",
            body:
                "The Brain can manage routines and automations like turning lights on at the right time, adjusting settings when someone arrives home, or helping multiple devices work together as one system.",
        },
        {
            title: "Faster response throughout the home",
            body:
                "Lights, switches, and connected devices react more quickly because the system is working inside your home instead of waiting on a cloud service.",
        },
        {
            title: "More privacy and control",
            helperLabel: "What’s this?",
            helperText:
                "Local control means the system keeps more of its decision-making and data inside your home instead of depending on an outside company for every action.",
            body:
                "Your home data stays closer to home, giving you more control over what is stored, what is shared, and how the system behaves day to day.",
        },
        {
            title: "Devices working together",
            helperLabel: "Example",
            helperText:
                "One action can trigger several things at once, like dimming lights, locking doors, and adjusting the thermostat together.",
            body:
                "The Brain helps bring devices together so your home feels more unified instead of scattered across separate apps and disconnected settings.",
        },
    ],
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
