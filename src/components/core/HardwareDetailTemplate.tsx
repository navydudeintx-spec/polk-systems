"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { InfoTip } from "@/components/ui/InfoTip";
import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import type { HardwareItem } from "@/data/hardware";

type HardwareDetailTemplateProps = {
    item: HardwareItem;
};

export const HardwareDetailTemplate = ({ item }: HardwareDetailTemplateProps) => {
    return (
        <div className="bg-brand-black min-h-screen text-brand-white selection:bg-brand-accent selection:text-black">
            <div className="fixed inset-0 polk-architectural-grid opacity-10 pointer-events-none z-0" />

            <section className="relative pt-48 pb-32 overflow-hidden z-10">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="text-brand-accent text-[10px] font-black uppercase tracking-[0.4em] mb-8 block">
                            {item.pageEyebrow}
                        </span>

                        <h1 className="text-6xl md:text-[8vw] font-black uppercase tracking-tighter leading-[0.8] mb-12">
                            {item.title} <br />
                            <span className="text-brand-white/20">{item.subtitle}</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-brand-white/80 font-medium leading-relaxed max-w-2xl border-l border-brand-accent/30 pl-8">
                            {item.heroIntro}
                        </p>
                    </motion.div>
                </Container>
            </section>

            <section className="py-32 border-t border-white/10 relative z-10">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative aspect-square md:aspect-[4/3] bg-white/5 border border-white/10 overflow-hidden"
                        >
                            <div className="absolute inset-0 polk-architectural-grid opacity-20 pointer-events-none" />
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-contain p-12 grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                            />
                        </motion.div>

                        <div>
                            <span className="text-brand-accent text-[10px] font-black uppercase tracking-widest mb-6 block">
                                {item.detailEyebrow}
                            </span>

                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
                                {item.detailTitle}
                                <br />
                                <span className="text-white/20">{item.detailAccent}</span>
                            </h2>

			<p className="text-white/60 text-[10px] font-black uppercase tracking-widest leading-loose max-w-lg mb-8">
   				 {item.detailBody}
			</p>

			{item.benefits && item.benefits.length > 0 && (
    				<div className="mt-10 space-y-6">
        				{item.benefits.map((benefit) => (
            					<div key={benefit.title} className="border-t border-white/10 pt-6">
                					<div className="flex flex-wrap items-center gap-3">
                    						<h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">
                       							 {benefit.title}
                    						</h3>

               						        {benefit.helperText && (
                       							 <InfoTip
                           							 buttonText={benefit.helperLabel || "What’s this?"}
                           							 text={benefit.helperText}
                       							 />
                   						 )}
                					</div>

                					<p className="mt-3 text-sm leading-7 text-white/70 max-w-xl">
                    						{benefit.body}
                					</p>
            					</div>
        				))}
    				</div>
			)}
                        </div>
                    </div>
                </Container>
            </section>

            <Footer />
        </div>
    );
};
