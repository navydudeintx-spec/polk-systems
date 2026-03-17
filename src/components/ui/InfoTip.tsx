"use client";

import { useEffect, useRef, useState } from "react";

type InfoTipProps = {
    text: string;
    buttonText?: string;
};

export function InfoTip({
    text,
    buttonText = "What’s this?",
}: InfoTipProps) {
    const [open, setOpen] = useState(false);
    const wrapRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (!wrapRef.current?.contains(event.target as Node)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <span
            ref={wrapRef}
            className="relative inline-flex items-center"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                onFocus={() => setOpen(true)}
                onBlur={() => setOpen(false)}
                className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-accent/80 hover:text-white transition-colors underline underline-offset-4"
                aria-expanded={open}
            >
                {buttonText}
            </button>

            {open && (
                <span className="absolute left-0 top-full z-50 mt-3 w-72 rounded-2xl border border-white/10 bg-brand-black p-4 text-left text-[11px] font-medium normal-case tracking-normal text-white/80 shadow-premium">
                    {text}
                </span>
            )}
        </span>
    );
}
