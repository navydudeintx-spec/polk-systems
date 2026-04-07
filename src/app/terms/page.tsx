"use client";

import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { POLK_COPY } from "@/lib/polk-copy";

export default function TermsPage() {
    return (
        <div className="bg-brand-black min-h-screen text-brand-white selection:bg-brand-accent selection:text-black">
            {/* Background Texture */}
            <div className="fixed inset-0 polk-architectural-grid opacity-10 pointer-events-none z-0" />

            <section className="relative pt-48 pb-32 z-10">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="text-brand-accent text-[10px] font-black uppercase tracking-[0.4em] mb-8 block">
                            Protocol_Terms
                        </span>

                        <h1 className="text-6xl md:text-[8vw] font-black uppercase tracking-tighter leading-[0.8] mb-12">
                            Terms of <br />
                            <span className="text-brand-white/20">Protocol.</span>
                        </h1>

                        <div className="space-y-16 border-t border-white/10 pt-16">
                            <div className="border-l border-brand-accent/30 pl-8">
                                <p className="text-xl md:text-2xl text-brand-white/80 font-medium leading-relaxed">
                                    These Terms of Protocol govern the installation, activation,
                                    support, and ongoing use of a Polk Systems environment. Polk
                                    Systems is designed around local-first operation, customer
                                    control, and practical service access when support is needed.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                <section>
                                    <h2 className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-6">
                                        01. Scope Of Service
                                    </h2>
                                    <p className="text-sm font-black uppercase tracking-widest leading-loose text-white/60">
                                        Polk Systems provides installation, configuration,
                                        integration, programming, support, and related services for
                                        local-first home automation environments. Project scope,
                                        hardware, software, integrations, and support terms may also
                                        be defined in proposals, invoices, service plans, or other
                                        written project documents.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-6">
                                        02. Local-First Operation
                                    </h2>
                                    <p className="text-sm font-black uppercase tracking-widest leading-loose text-white/60">
                                       {POLK_COPY.localFirstLegal}
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-6">
                                        03. Customer Responsibilities
                                    </h2>
                                    <p className="text-sm font-black uppercase tracking-widest leading-loose text-white/60">
                                        The customer is responsible for maintaining reasonable
                                        physical security, power, internet service where required,
                                        environmental conditions, and appropriate access to the
                                        property for installation and service. The customer is also
                                        responsible for protecting personal devices, third-party
                                        accounts, network credentials, and any manufacturer services
                                        used with the installation.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-6">
                                        04. Authorized Access And Credential Assistance
                                    </h2>
                                    <p className="text-sm font-black uppercase tracking-widest leading-loose text-white/60">
                                        Polk Systems does not claim ownership of customer passwords,
                                        credentials, accounts, or private data. However, during an
                                        authorized service visit, remote support session, migration,
                                        warranty call, or other customer-approved support event,
                                        Polk Systems may assist with password resets, credential
                                        updates, account recovery, device reprovisioning, and
                                        related access tasks when reasonably necessary to perform
                                        the requested work.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-6">
                                        05. Support And Troubleshooting
                                    </h2>
                                    <p className="text-sm font-black uppercase tracking-widest leading-loose text-white/60">
                                        To diagnose, repair, maintain, or improve a customer system,
                                        Polk Systems may need access to limited configuration data,
                                        device states, logs, credentials provided by the customer,
                                        and related system information. Where practical, that access
                                        is performed with the customer&apos;s knowledge, consent, or
                                        participation and is limited to the work required.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-6">
                                        06. Third-Party Hardware And Services
                                    </h2>
                                    <p className="text-sm font-black uppercase tracking-widest leading-loose text-white/60">
                                        Many installations include third-party devices, apps, cloud
                                        services, firmware, or manufacturer platforms. Polk Systems
                                        is not responsible for third-party outages, account lockouts,
                                        discontinued integrations, manufacturer policy changes, or
                                        feature changes outside Polk Systems control. Continued
                                        performance may depend on vendor support, subscription
                                        status, internet availability, and customer account access.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-6">
                                        07. Modifications And Unauthorized Work
                                    </h2>
                                    <p className="text-sm font-black uppercase tracking-widest leading-loose text-white/60">
                                        Customer modifications, rewiring, firmware flashing, factory
                                        resets, account changes, hardware substitutions, or service
                                        performed by persons not authorized by Polk Systems may
                                        affect reliability, supportability, warranty coverage, or
                                        project performance. Polk Systems may charge to diagnose,
                                        repair, reconfigure, or restore systems altered outside its
                                        approved service process.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-6">
                                        08. Limits Of Responsibility
                                    </h2>
                                    <p className="text-sm font-black uppercase tracking-widest leading-loose text-white/60">
                                        Polk Systems provides professionally designed automation and
                                        support, but cannot guarantee uninterrupted operation of all
                                        third-party devices, internet-connected services, utility
                                        power, wireless performance, or manufacturer platforms.
                                        Except as stated in a written warranty or signed agreement,
                                        Polk Systems is not responsible for indirect, incidental, or
                                        consequential loss arising from third-party failures,
                                        customer misuse, unauthorized changes, or conditions outside
                                        normal operating control.
                                    </p>
                                </section>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <h2 className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-6">
                                    09. Contact And Updates
                                </h2>
                                <p className="text-sm font-black uppercase tracking-widest leading-loose text-white/60">
                                    Polk Systems may update these Terms of Protocol from time to
                                    time to reflect changes in services, operating practices,
                                    hardware platforms, legal requirements, or support processes.
                                    Continued use of the installation or related services after an
                                    update constitutes acceptance of the revised terms. For
                                    questions regarding these terms, contact{" "}
                                    <a
                                        href="mailto:polk@polksystems.com"
                                        className="text-brand-accent hover:text-white transition-colors"
                                    >
                                        polk@polksystems.com
                                    </a>
                                    .
                                </p>
                            </div>

                            <div className="pt-16 border-t border-white/10 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-white/20">
                                <span>Legal_Revision_02</span>
                                <span>Updated April 2026</span>
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </section>

            <Footer />
        </div>
    );
}