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
        detailAccent: "Feel The Home Respond.",
        detailBody:
            "The biggest deal is simple: if you can use a light switch, you can use our automation. Everyday control stays familiar, while the home quietly handles the layers of comfort, convenience, and intelligence behind the scenes.",
        benefits: [
            {
                title: "Routines and automations",
                helperLabel: "What’s this?",
                helperText:
                    "Routines and automations are actions your home can handle automatically based on time, motion, temperature, a door opening, sunrise, and more.",
                body:
    "The Switch can trigger routines and automations that make everyday living feel easier, like setting the right lighting at the right time, helping scenes feel natural, or making multiple devices respond together.",
            },
            {
                title: "Faster response throughout the home",
                helperLabel: "What’s this?",
                helperText:
                    "Lights, switches, and connected devices react more quickly because the system is working inside your home instead of waiting on a cloud service.",
                body:
                        "The Switch helps the home feel faster and more natural because everyday control starts right at the wall, where people already expect it to work.",
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
    "The Switch helps bring devices together so your home feels more unified instead of scattered across separate apps and disconnected settings.",
            },
        ],
    },
    {
        id: "03",
        slug: "portal",
        name: "The Portal",
        shortLabel: "The Portal",
        title: "The Portal",
        subtitle: "At Every Entry.",
        desc: "Biometric access that makes coming home feel simple, secure, and immediate.",
        image: "/prod-lock-orange.png",
        href: "/portal",
        pageEyebrow: "Access Control",
        heroIntro:
            "The Portal makes entry feel natural, secure, and connected. It brings trusted access and home response together so the front door feels like part of the system, not a separate device.",
        detailEyebrow: "Entry_State: Verified",
        detailTitle: "Touch The Lock.",
        detailAccent: "Let The Home Respond.",
        detailBody:
            "The biggest deal is simple: getting into your home should feel fast, natural, and secure. The Portal keeps entry familiar while the home quietly handles what should happen next.",
        benefits: [
            {
                title: "Multiple ways to get in",
                helperLabel: "What’s this?",
                helperText:
                    "The Yale Assure Lock 2 Touch supports fingerprint access, keypad entry, app-based control through a compatible smart home setup, and a physical backup key on keyed models.",
                body:
                    "The Portal gives you flexible entry without making the front door feel complicated. Fingerprint access makes everyday use faster, while keypad, app, and backup key access help the lock stay practical for family, guests, and backup situations.",
            },
            {
                title: "Fast fingerprint access",
                helperLabel: "What’s this?",
                helperText:
                    "Yale states the lock offers 99% fingerprint accuracy with recognition time under 0.5 seconds.",
                body:
                    "The Portal is designed to make entry feel immediate and natural. A quick fingerprint can unlock the door in less than half a second, helping the front door feel faster, simpler, and easier to use every day.",
            },
            {
                title: "Works with the rest of the home",
                helperLabel: "What’s this?",
                helperText:
                    "With the right smart home setup, unlocking the door can become part of a larger routine involving lighting, comfort, and other connected devices.",
                body:
                    "The Portal does more than lock and unlock. It can help the home respond when someone arrives by turning on lights, starting soft music, or adjusting the temperature in the background.",
            },
            {
                title: "Confident control when you are away",
                helperLabel: "Example",
                helperText:
                    "Remote management, guest access, activity history, and backup entry options help make the front door easier to manage without hiding spare keys.",
                body:
                    "The Portal helps make access easier to manage even when you are not home. It supports cleaner guest access, better awareness of who came and went, and a more secure front-door experience overall.",
},
        ],
    },
    {
        id: "04",
        slug: "vision",
        name: "The Vision",
        shortLabel: "The Vision",
        title: "The Vision",
        subtitle: "Aware By Design.",
        desc: "A premium movable camera package built to cover more area, follow activity, and deliver better detail where it matters most.",
        image: "/prod-cam-orange.png",
        href: "/vision",
        pageEyebrow: "Private Security",
        heroIntro:
            "The Vision is about seeing what matters without turning your home into a cloud-dependent surveillance project. It brings awareness, recording, and response together in a cleaner, more private way.",
        detailEyebrow: "Event_State: Captured",
        detailTitle: "See What Matters.",
        detailAccent: "Let The Home Respond.",
        detailBody:
            "The biggest deal is simple: cameras should do more than just show video. The Vision helps your home notice important activity, keep useful evidence, and respond in ways that feel intelligent instead of noisy.",
        benefits: [
        {
            title: "Smarter alerts with less noise",
            helperLabel: "What’s this?",
            helperText:
                "A better camera system should help separate meaningful activity from constant motion, so you are not buried in useless notifications.",
            body:
                "The Vision is built to make alerts more useful. Instead of treating every movement the same, it helps the home focus on the activity that actually matters to you.",
        },
        {
            title: "Useful video, not just live video",
            helperLabel: "What’s this?",
            helperText:
                "Recorded clips, snapshots, and event history make it easier to review what happened instead of trying to catch everything live.",
            body:
                "The Vision helps turn camera footage into something practical. When something important happens, the goal is to have useful video and a clear record instead of just another camera feed to watch.",
        },
        {
            title: "Works with the rest of the home",
            helperLabel: "Example",
            helperText:
                "A camera event can trigger other parts of the home, like lighting, announcements, or other actions that help the house respond.",
            body:
                "The Vision does more than observe. It can become part of the system by helping the home react when activity is detected, whether that means turning on lights, sending an alert, or supporting a larger routine.",
        },
        {
            title: "More privacy and local control",
            helperLabel: "What’s this?",
            helperText:
                "A local-first camera approach keeps more of your video, decisions, and automations closer to home instead of depending on an outside cloud service for everything.",
            body:
                "The Vision fits the same philosophy as the rest of the system. It is designed to give you more control over how footage is handled, how alerts are generated, and how the home responds day to day.",
        },
    ],
},


];

export const getHardwareItemBySlug = (slug: string) =>
  hardwareItems.find((item) => item.slug === slug);
