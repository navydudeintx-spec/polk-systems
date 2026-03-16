"use client";

import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

const PROCESS_STEPS = [
    {
        number: "01",
        title: "The Audit",
        description: "We do not guess. We verify. We begin with a detailed site audit to understand your network, the technology already in the home, and how you want everything to work in everyday life.",
        detail: "Output: A Clear Plan Forward"
    },
    {
        number: "02",
        title: "The Design",
        description: "Before anything is installed, we design how the system should work. That includes the devices you already have, the automations you want, and the experience you want every day.",
        detail: "Output: A Custom System Plan"
    },
    {
        number: "03",
        title: "The Preparation",
        description: "Before installation day, we prepare and test the core of your system so everything is ready to work the way it should when it reaches your home.",
        detail: "Output: A Ready-to-Install System"
    },
    {
        number: "04",
        title: "The Installation",
        description: "We install the system with care, precision, and respect for your home. Every device is placed, connected, and configured so the finished result feels clean, natural, and dependable.",
        detail: "Output: System Installation and Setup"
    },
    {
        number: "05",
        title: "The Support",
        description: "A great system should keep performing long after installation day. We stay available for updates, adjustments, and ongoing support so your technology continues to work the way it should.",
        detail: "Output: Continued System Support"
    }
];

export default function ProcessPage() {
    return (
        <div className="bg-brand-black min-h-screen text-brand-white selection:bg-brand-accent selection:text-black">

            {/* Background Texture */}
            <div className="fixed inset-0 polk-architectural-grid opacity-10 pointer-events-none z-0" />

            {/* Hero Section */}
            <section className="relative pt-48 pb-32 overflow-hidden z-10">
                <Container>
                    <div className="max-w-4xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-brand-accent text-xs font-black tracking-[0.4em] uppercase mb-6 block"
                        >
                            Methodology
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.8] mb-12"
                        >
                            Precision <br />
                            <span className="text-brand-white/20">Engineering.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl text-brand-white/80 font-medium leading-relaxed max-w-2xl border-l border-brand-accent/30 pl-8"
                        >
                            A Polk System is not just installed. It is commissioned through a proven process so it performs the way it should from the start.
                        </motion.p>
                    </div>
                </Container>
            </section>

            {/* The Process Timeline */}
            <section className="py-24 relative z-10 border-t border-white/10">
                <Container>
                    <div className="space-y-0 border-x border-white/10">
                        {PROCESS_STEPS.map((step, idx) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-b border-white/10 py-16 md:py-24 hover:bg-white/[0.02] transition-colors px-12"
                            >
                                {/* Number */}
                                <div className="md:col-span-2">
                                    <span className="text-6xl md:text-8xl font-black text-white/5 group-hover:text-brand-accent/20 transition-colors font-mono">
                                        {step.number}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="md:col-span-6">
                                    <h3 className="text-3xl font-black uppercase tracking-tight mb-8 flex items-center gap-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-white/60 text-[10px] font-black uppercase tracking-widest leading-loose">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Detail/Output */}
                                <div className="md:col-span-4 flex items-end md:justify-end">
                                    <div className="bg-white/5 border border-white/10 px-8 py-6 relative overflow-hidden group-hover:border-brand-accent/50 transition-colors">
                                        <div className="absolute top-0 left-0 w-[2px] h-full bg-brand-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <span className="block text-[8px] font-black uppercase tracking-[0.3em] text-brand-accent mb-4">Deliverable</span>
                                        <span className="block text-sm font-black uppercase tracking-tight text-white">{step.detail}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* The Guarantee */}
            <section className="py-32 bg-black/40 relative z-10 border-t border-white/10">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
                        <div className="p-16 bg-brand-black">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-brand-accent text-[10px] font-black tracking-[0.4em] uppercase mb-8 block"
                            >
                                The Promise
                            </motion.span>
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
                                Zero Stress.<br />Guaranteed.
                            </h2>
                            <p className="text-white/60 text-lg font-medium leading-relaxed">
                                We are so confident in our engineering process that we offer the industry's most comprehensive support package. If a component fails within the first year, we replace it. If the software glitches, we fix it remote-instantly.
                            </p>
                        </div>
                        <div className="relative p-16 flex items-center justify-center bg-brand-black overflow-hidden border-l border-white/10">
                            {/* Abstract Visualization of 'Certified' */}
                            <div className="absolute inset-0 polk-architectural-grid opacity-10" />
                            <div className="w-64 h-64 border border-brand-accent/30 flex items-center justify-center relative rotate-45 group">
                                <div className="absolute inset-4 border border-brand-accent/20 animate-pulse" />
                                <div className="text-center -rotate-45">
                                    <div className="text-7xl font-black text-white mb-2 leading-none">100%</div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-brand-accent">Uptime Goal</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-32 relative z-10 border-t border-white/10">
                <Container className="text-center">
                    <h2 className="text-6xl md:text-[8vw] font-black uppercase tracking-tighter text-white mb-16 leading-[0.8]">
                        We are ready <br />to build.
                    </h2>
                    <Link
                        href="/get-started"
                        className="inline-block bg-brand-accent text-brand-black px-16 py-6 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white transition-all duration-500 shadow-premium"
                    >
                        Initiate Assessment ↘
                    </Link>
                </Container>
            </section>

            <Footer />
        </div>
    );
}

