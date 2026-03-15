"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { TechnicalHeading } from './TechnicalHeading';

import { hardwareItems } from '@/data/hardware';


export const HardwareSpotlight = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const cards = gridRef.current?.querySelectorAll('.product-cell') || [];

        gsap.fromTo(cards,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            }
        );
    }, []);

    return (
        <section id="how-it-works" ref={sectionRef} className="bg-brand-black text-brand-white border-b border-white/10">
            <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-4">
                {/* Header Cell */}
                <div className="lg:col-span-4 border-b border-white/10 p-12 md:p-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                    <div className="max-w-4xl">
                        <span className="text-brand-accent text-[10px] font-black tracking-[0.4em] uppercase mb-8 block">The Ecosystem</span>
                        <div className="flex flex-col gap-2 md:gap-4 overflow-visible">
                            <TechnicalHeading
                                text="Hardware for"
                                as="h2"
                                variant="subtle"
                                className="text-5xl md:text-8xl lg:text-9xl"
                            />
                            <TechnicalHeading
                                text="The Modern Home."
                                as="h2"
                                variant="subtle"
                                delay={0.4}
                                className="text-5xl md:text-8xl lg:text-9xl text-brand-white/20"
                            />
                        </div>
                    </div>
                    <div className="max-w-xs pb-4">
                        <p className="text-white/60 text-[10px] font-black uppercase tracking-widest leading-loose">
                            Private by nature. <br />
                            Built for local autonomy. <br />
                            No subscriptions needed.
                        </p>
                    </div>
                </div>

                {/* Product Cells */}
{hardwareItems.map((product) => (

    <div
        key={product.id}
        className="product-cell polk-hover-line group relative aspect-[4/5] border-r border-white/5 last:border-r-0 lg:[&:nth-child(n+1)]:border-b-0 border-b lg:border-b-0 cursor-pointer overflow-hidden transition-colors duration-500 hover:bg-white/5"
    >
        <div className="polk-hover-line-content h-full w-full relative">
            <div className="absolute top-12 left-12 z-20">
                <span className="text-[10px] font-black tracking-widest text-brand-accent uppercase opacity-40 group-hover:opacity-100 transition-opacity">
                    ITEM_{product.id}
                </span>
            </div>

            <div className="absolute inset-0 flex items-center justify-center p-20 z-10">
                <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-contain opacity-40 group-hover:opacity-100 transition-opacity duration-700"
                    />
                </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-12 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo bg-gradient-to-t from-black via-black/80 to-transparent">
                <h3 className="text-2xl font-black uppercase tracking-tight mb-2">
                    {product.name}
                </h3>
                <p className="text-white/60 text-xs font-bold leading-relaxed uppercase pr-8">
                    {product.desc}
                </p>
                <div className="mt-6 flex items-center gap-4">
                    <div className="h-[1px] flex-grow bg-brand-accent/30" />
                    {product.href ? (
                        <Link
                            href={product.href}
                            className="text-[10px] font-black tracking-widest uppercase text-brand-accent hover:text-white transition-colors"
                        >
                            Spec Sheet ↗
                        </Link>
                    ) : (
                        <span className="text-[10px] font-black tracking-widest uppercase text-brand-accent">
                            Spec Sheet ↗
                        </span>
                    )}
                </div>
            </div>
        </div>

        <div className="absolute inset-0 border border-brand-accent/0 group-hover:border-brand-accent/20 transition-colors duration-500 pointer-events-none" />
    </div>
))}
            </div>
        </section>
    );
};

