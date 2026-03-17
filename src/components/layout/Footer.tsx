"use client";

import Link from "next/link";
import { QuickContactForm } from "@/components/forms/QuickContactForm";
import { Container } from "@/components/ui/Container";
import { useEffect, useState } from "react";

const siteLinks = {
    company: [
        { name: "Our Story", href: "/story" },
        { name: "Contact", href: "/contact" },
    ],
    services: [
        { name: "How It Works", href: "/how-it-works" },
        { name: "Solutions", href: "/solutions" },
        { name: "Technology", href: "/technology" },
        { name: "The System", href: "/system" },
    ],
    legal: [
        { name: "Privacy", href: "/privacy" },
        { name: "Terms", href: "/terms" },
        { name: "License", href: "/license" },
        { name: "Warranty", href: "/warranty" },
        { name: "Audit", href: "/audit" },
    ],
};

export function Footer() {
    const [year, setYear] = useState<number | null>(null);

    useEffect(() => {
        // eslint-disable-next-line
        setYear(new Date().getFullYear());

    }, []);

    return (
        <footer id="get-in-touch" className="bg-brand-black text-brand-white border-t border-white/5 py-32">
            <Container>
                {/* Contact Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-32">
                    <div>
                        <span className="text-brand-accent text-xs font-black tracking-[0.4em] uppercase opacity-60">Get in touch</span>
                        <h2 className="text-5xl md:text-7xl font-black mt-8 uppercase tracking-tighter leading-[0.85]">
                            Ready to reclaim <br />
                            <span className="font-serif italic font-normal normal-case tracking-normal text-brand-accent">privacy?</span>
                        </h2>
                    </div>

			<div className="max-w-md mt-16">
    				<QuickContactForm source="footer" />
			</div>
		</div>

                {/* Site Navigation Columns */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 border-t border-white/5 pt-16 mb-16">
                    {/* Company */}
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 block mb-6">Company</span>
                        <ul className="flex flex-col gap-3">
                            {siteLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 block mb-6">Services</span>
                        <ul className="flex flex-col gap-3">
                            {siteLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 block mb-6">Legal</span>
                        <ul className="flex flex-col gap-3">
                            {siteLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/5 pt-12 gap-8 text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">
                    <div>© Polk Systems {year || 2026}</div>
                    <div className="flex justify-center gap-12">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-brand-accent" />
                            <span>System Quiet</span>
                        </div>
                    </div>
                 </div>
            </Container>
            
        </footer>
    );
}

