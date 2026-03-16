"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Shield, Brain, Cpu, ArrowRight } from "lucide-react";
import { TechnicalHeading } from "@/components/core/TechnicalHeading";

export default function Solutions() {
    const services = [
  {
    code: "ASSESSMENT_01",
    title: "Private Home Assessment",
    price: "$149",
    note: "Credited toward approved projects",
    description:
      "A guided review of your home, goals, privacy concerns, and existing devices so you know what to keep, what to replace, and what to do next.",
    bullets: [
      "In-home or remote consultation",
      "Device and privacy review",
      "Written project roadmap",
    ],
    href: "/get-started",
    cta: "Book Assessment",
  },
  {
    code: "RESCUE_02",
    title: "Smart Home Rescue / Cleanup",
    price: "Starting at $299",
    note: "Best for existing smart-home setups",
    description:
      "For systems that feel fragmented, unreliable, or buried under too many apps. We clean up the setup and make it usable again.",
    bullets: [
      "Broken routine repair",
      "App consolidation",
      "Device troubleshooting and optimization",
    ],
    href: "/get-started",
    cta: "Start Rescue",
  },
  {
    code: "CORE_03",
    title: "Local Core Installation",
    price: "Starting at $899",
    note: "Privacy-first local control",
    description:
      "A local smart-home foundation built for speed, reliability, and ownership of your data without depending on cloud automations.",
    bullets: [
      "Local controller setup",
      "Dashboard configuration",
      "Core automations and owner handoff",
    ],
    href: "/get-started",
    cta: "Start Project",
  },
  {
    code: "COMFORT_04",
    title: "Lighting & Comfort Automation",
    price: "Starting at $1,250 + hardware",
    note: "Daily-use automation package",
    description:
      "Smarter lighting, better comfort, and routines built around how you actually live in the home every day.",
    bullets: [
      "Lighting scenes and schedules",
      "Motion-based logic",
      "Climate and comfort routines",
    ],
    href: "/get-started",
    cta: "Plan My System",
  },
  {
    code: "CAMERA_05",
    title: "Privacy-First Camera Systems",
    price: "Starting at $1,750 + hardware",
    note: "Local recording focused",
    description:
      "Security designed for your home without turning your family’s routines into someone else’s data product.",
    bullets: [
      "Local recording design",
      "Camera setup and alerts",
      "Retention and mobile access setup",
    ],
    href: "/get-started",
    cta: "Request Camera Quote",
  },
  {
    code: "WHOLEHOME_06",
    title: "Whole-Home Design & Integration",
    price: "Custom Quote",
    note: "Most integrated projects start at $3,500+",
    description:
      "For larger projects involving lighting, climate, cameras, locks, shades, dashboards, and advanced multi-system integration.",
    bullets: [
      "Full-home planning",
      "Multi-system integration",
      "Phased implementation roadmap",
    ],
    href: "/contact",
    cta: "Request Custom Quote",
  },
];

    return (
        <div className="min-h-screen bg-brand-black text-white relative overflow-hidden pt-24">
            {/* Architectural Grid Overlay */}
            <div className="absolute inset-0 polk-architectural-grid opacity-30 pointer-events-none z-10" />

            {/* Vertical Sidebar Labels */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-32">
                <span className="polk-side-text">CAPABILITIES_MANIFEST</span>
                <span className="polk-side-text">SOC_2_COMPLIANT</span>
                <span className="polk-side-text">PROTOCOL_V4.2</span>
            </div>

            {/* HERO SECTION */}
            <section className="relative min-h-[60vh] md:h-[60vh] flex flex-col justify-center border-b border-white/10 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-8 h-full">
                    <div className="md:col-span-5 bg-brand-black p-12 md:p-24 relative z-20 flex flex-col justify-center gap-8">
                        <div className="absolute top-0 left-0 polk-plus-marker" />

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="mb-8">
                                <TechnicalHeading
                                    text="Total Home"
                                    className="text-5xl md:text-6xl lg:text-8xl"
                                    delay={0.1}
                                />
                                <TechnicalHeading
                                    text="Control."
                                    className="text-5xl md:text-6xl lg:text-8xl text-brand-text-muted"
                                    delay={0.4}
                                />
                            </div>
                            <p className="text-sm text-brand-text-muted max-w-xl font-light leading-relaxed font-sans uppercase tracking-widest">
                                A smart home should not be harder to use. We build systems that work the way 
                                people already live, so your home feels simpler, smarter, and fully yours.
                            </p>
                        </motion.div>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/contact">
                            <Button className="bg-white text-brand-black hover:bg-brand-accent hover:text-white px-8 md:px-12 py-4 md:py-6 text-[10px] tracking-[0.4em] uppercase font-bold border-brand-white font-sans transition-colors">
                               Deploy System
                            </Button>
                        </Link>

                        <Link href="#services-pricing">
                            <Button variant="outline" className="border-white/20 text-white px-8 md:px-12 py-4 md:py-6 text-[10px] tracking-[0.4em] uppercase font-bold font-sans">
                                View Pricing
                            </Button>
                        </Link>

                        <Link href="/system">
                            <Button variant="outline" className="border-white/20 text-white px-8 md:px-12 py-4 md:py-6 text-[10px] tracking-[0.4em] uppercase font-bold font-sans">
                                View Specs
                            </Button>
                        </Link>
                    </div>
                </div>    

                    <div className="md:col-span-3 bg-white/5 relative overflow-hidden hidden md:block">
                        <div className="absolute inset-0 bg-[url('/solutions-hero.png')] bg-cover bg-center grayscale opacity-40 mix-blend-overlay" />
                        <div className="absolute bottom-12 right-12 z-20 text-right">
                            <span className="text-[10px] font-mono whitespace-pre opacity-30">
                                LOC: 29.7604° N, 95.3698° W{"\n"}
                                SYS: CORE_ARCH_01{"\n"}
                                STATUS: OPTIMIZED
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CAPABILITIES GRID */}
            <section className="relative bg-brand-black">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/10">

                    {[
                        {
                            title: "Built Around Real Life",
                            icon: Cpu,
                            desc: "Your system should fit the way you already live, not force you to learn a new way of living. We design automation that feels natural from day one.",
                            stat: "DESIGNED FOR EVERYDAY USE"
                        },
                        {
                            title: "Simple To Control",
                            icon: Brain,
                            desc: "If you can use a light switch, you can use our automation. We keep familiar controls at the center so the home feels smarter without becoming harder to use.",
                            stat: "FAMILIAR CONTROLS"
                        },
                        {
                            title: "Private By Design",
                            icon: Shield,
                            desc: "Your home data stays where it belongs. We prioritize local control and privacy-first choices so your system works for your family, not for a cloud company.",
                            stat: "LOCAL-FIRST APPROACH"
                        }
                    ].map((feature, i) => (
                        <div key={i} className="bg-brand-black p-12 md:p-16 relative group overflow-hidden">
                            <div className="absolute top-0 left-0 polk-plus-marker" />
                            <div className="mb-12">
                                <feature.icon className="w-8 h-8 text-brand-accent mb-8" />
                                <h3 className="text-3xl font-display font-light uppercase tracking-tight mb-4">{feature.title}</h3>
                                <p className="text-brand-text-muted text-sm font-light leading-relaxed mb-8 font-sans uppercase tracking-wider">
                                    {feature.desc}
                                </p>
                            </div>
                            <div className="flex items-center justify-between border-t border-white/10 pt-6">
                                <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.3em]">{feature.stat}</span>
                                <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-brand-accent transition-colors" />
                            </div>
                        </div>
                    ))}

                </div>
            </section>

            {/* TRUST & COMPLIANCE */}
            <section className="relative border-y border-white/10 bg-brand-black">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-white/10">

                    <div className="p-12 md:p-24 bg-brand-black relative">
                        <div className="absolute top-0 left-0 polk-plus-marker" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent mb-6 block font-sans">
                            Why Polk Systems?
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-light uppercase tracking-tight leading-none mb-8">
                            Built For <br />
                            <span className="text-brand-text-muted">Real Life.</span>
                        </h2>
                        <p className="text-sm text-brand-text-muted font-light mb-12 max-w-md font-sans uppercase tracking-wider">
                            A smart home should feel natural, private, and easy to trust. We build systems that work quietly in the background,
                            use controls people already understand, and fit the way your home is actually lived in.
                        </p>
                        <div className="flex flex-col gap-6 font-mono">
                            {['PRIVATE BY DESIGN', 'FAMILIAR TO USE', 'BUILT AROUND YOUR HOME'].map((cert, idx) => (
                                <div key={idx} className="flex items-center gap-4 group">
                                    <div className="w-2 h-2 bg-brand-accent" />
                                    <span className="text-[10px] font-bold tracking-[0.2em]">{cert}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-brand-black relative min-h-[400px] overflow-hidden group">
                        <div className="absolute inset-0 polk-architectural-grid opacity-20 pointer-events-none" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-3/4 aspect-video border border-white/10 relative overflow-hidden bg-white/5">
                                <div className="absolute inset-0 bg-brand-accent/5 animate-pulse" />
                                <div className="absolute top-0 left-0 w-full h-full p-8 font-mono text-[8px] text-white/20 overflow-hidden leading-relaxed">
                                    {`[ESTATE_BRAIN_LOG] 
                                    >> INITIALIZING ENCLAVE...
                                    >> AUTHENTICATING NODES...
                                    >> LATENCY CHECK: 0.02ms
                                    >> SECURE_CHANNEL: ESTABLISHED
                                    >> ENCRYPTION: AES-256-GCM
                                    >> ANOMALY_DETECTION: ACTIVE
                                    >> MEMORY_GUARD: OK
                                    >> SYSTEM_QUIET: 100%`}
                                </div>
                                <div className="absolute bottom-4 right-4 text-brand-accent/40 text-[10px] font-bold">
                                    SYSTEM_OPTIMIZED.
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-8 left-8 py-2 px-4 border border-white/10 text-[8px] font-bold tracking-[0.4em] uppercase text-white/30 font-sans">
                          Polk Systems Standard
                        </div>
                    </div>

                </div>
            </section>
{/* SERVICES & STARTING PRICES */}
<section
  id="services-pricing"
  className="relative z-10 border-t border-white/10 py-24"
>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mb-12 grid gap-8 lg:grid-cols-[1.5fr_0.75fr] lg:items-end">
      <div>
        <div className="mb-4 text-[11px] uppercase tracking-[0.35em] text-white/40">
          SERVICE_MATRIX_01
        </div>

        <h2 className="max-w-4xl text-4xl font-light tracking-tight text-white sm:text-5xl">
          Services &amp; Starting Prices
        </h2>

        <p className="mt-6 max-w-3xl text-base leading-7 text-white/70">
          Every home is different. These prices cover planning, setup,
          configuration, and owner handoff. Hardware is quoted separately where
          needed. No required monthly fees.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
        <div className="text-[11px] uppercase tracking-[0.3em] text-white/40">
          PRICING_MODE
        </div>
        <div className="mt-3 text-lg text-white">Starting prices shown.</div>
        <p className="mt-2 text-sm leading-6 text-white/60">
          Final pricing depends on home size, device count, wiring, and the
          brands you want to keep or add.
        </p>
      </div>
    </div>

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service, index) => (
        <motion.article
          key={service.code}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: index * 0.05 }}
          className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-white/35">
                {service.code}
              </div>
              <h3 className="mt-3 text-2xl font-light text-white">
                {service.title}
              </h3>
            </div>

            <div className="shrink-0 rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/60">
              LIVE
            </div>
          </div>

          <div className="mt-6 text-2xl font-medium text-white">
            {service.price}
          </div>

          <div className="mt-2 text-sm uppercase tracking-[0.18em] text-white/40">
            {service.note}
          </div>

          <p className="mt-6 text-sm leading-7 text-white/70">
            {service.description}
          </p>

          <ul className="mt-6 space-y-3">
            {service.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-3 text-sm text-white/65"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link
              href={service.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white transition-colors duration-300 hover:border-white/30 hover:bg-white/10"
            >
              {service.cta}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.article>
      ))}
    </div>
  </div>
</section>

            {/* TECHNICAL CTA */}
            <section className="bg-brand-black p-12 md:p-24 text-center relative border-t border-white/10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 polk-plus-marker z-20" />
                <h2 className="text-5xl md:text-7xl font-display font-light uppercase tracking-tight mb-12">
                    Begin The <br />
                    <span className="text-brand-text-muted">Transformation.</span>
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <Link href="/contact">
                        <Button className="bg-brand-accent text-brand-black hover:bg-white px-16 py-10 text-[10px] tracking-[0.4em] uppercase font-black w-full md:w-auto border-brand-accent font-sans transition-all">
                            Start Your Project
                        </Button>
                    </Link>
                    <div className="text-left font-mono text-[8px] text-white/30 leading-snug uppercase tracking-widest">
                        ESTATE_CONSULTATION_ACTIVE{"\n"}
                        NEXT_AVAIL_SLOT: 2HR 42MIN{"\n"}
                        VERSION: 2026.1
                    </div>
                </div>
            </section>
        </div>
    );
}
