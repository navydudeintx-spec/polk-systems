"use client";

import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function WarrantyPage() {
    return (
        <div className="bg-brand-black min-h-screen">
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <h1 className="font-display font-medium text-5xl md:text-7xl leading-[0.9] tracking-tighter text-brand-white mb-8">
                            HARDWARE<br />
                            <span className="text-brand-text-muted">WARRANTY.</span>
                        </h1>

                        <div className="space-y-8 text-brand-text-muted font-sans text-lg leading-relaxed">
                            <p>
                                Every Polk Systems installation is backed by clear, straightforward hardware warranty coverage for the Polk Core and Polk-branded hardware we install. This page explains what is covered, what is not, and how warranty service works.
                            </p>

                            <div className="border-t border-white/10 pt-8">
                                <h2 className="font-display text-2xl text-brand-white mb-4">Coverage Period</h2>
                                <p>
                                    The Polk Core processing unit and Polk-branded peripherals installed by Polk Systems are covered for a period of three (3) years from the original installation date, unless a different coverage period is stated in writing in your project documents.
                                </p>
                                <p className="mt-4">
                                    This warranty applies only to the original customer and the original installed location unless Polk Systems agrees otherwise in writing.
                                </p>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <h2 className="font-display text-2xl text-brand-white mb-4">What&apos;s Covered</h2>
                                <p>
                                    During the warranty period, Polk Systems will repair or replace covered Polk-branded hardware that fails due to manufacturing defects, component failure under normal residential use, installation-related defects caused by Polk Systems, or firmware and device-software issues that directly prevent covered Polk-branded hardware from functioning as intended.
                                </p>
                                <p className="mt-4">
                                    When a covered defect is confirmed, Polk Systems may provide remote troubleshooting, on-site service, repair, replacement, or a functionally equivalent substitute at no charge for the covered hardware service.
                                </p>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <h2 className="font-display text-2xl text-brand-white mb-4">What&apos;s Not Covered</h2>
                                <p>
                                    This warranty does not cover damage caused by power surges, lightning, flooding, leaks, humidity intrusion, fire, pests, accidents, misuse, abuse, neglect, or physical impact.
                                </p>
                                <p className="mt-4">
                                    It also does not cover failures caused by changes to the home&apos;s electrical, network, HVAC, framing, finish, or other building systems not performed by Polk Systems; cosmetic wear that does not affect function; consumable items such as batteries and bulbs; or issues caused by third-party devices, third-party software, internet outages, utility interruptions, manufacturer cloud changes, or discontinued integrations.
                                </p>
                                <p className="mt-4">
                                    Reprogramming, redesign, feature additions, preference changes, or automation adjustments that are not required to correct a covered defect are also outside warranty coverage.
                                </p>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <h2 className="font-display text-2xl text-brand-white mb-4">Third-Party Products</h2>
                                <p>
                                    Many Polk Systems projects include third-party products such as locks, thermostats, lighting devices, cameras, shades, networking gear, and specialty integrations. Unless specifically stated otherwise in writing, third-party hardware is covered only by its original manufacturer warranty, if any.
                                </p>
                                <p className="mt-4">
                                    Polk Systems may assist with troubleshooting third-party products, but manufacturer defects, manufacturer recalls, cloud-service changes, and product discontinuations remain outside Polk Systems warranty responsibility.
                                </p>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <h2 className="font-display text-2xl text-brand-white mb-4">Service Requests</h2>
                                <p>
                                    To request warranty service, contact Polk Systems and include your name, installation address, a description of the issue, and any relevant photos or videos if available.
                                </p>
                                <p className="mt-4">
                                    Polk Systems will review the request, perform initial triage, and determine whether the issue appears to involve covered hardware, installation, configuration, third-party equipment, or a non-warranty condition. Remote troubleshooting may be required before an on-site visit is scheduled.
                                </p>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <h2 className="font-display text-2xl text-brand-white mb-4">Service Remedy</h2>
                                <p>
                                    If Polk Systems determines that a covered warranty issue exists, Polk Systems may, at its option, repair the defective covered component, replace the defective covered component with a new, repaired, refurbished, or functionally equivalent component, or provide another commercially reasonable corrective remedy.
                                </p>
                                <p className="mt-4">
                                    These remedies are the customer&apos;s exclusive remedies under this warranty.
                                </p>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <h2 className="font-display text-2xl text-brand-white mb-4">On-Site Service</h2>
                                <p>
                                    For covered warranty issues within Polk Systems&apos; normal service area, reasonable on-site labor related to the covered repair or replacement is included.
                                </p>
                                <p className="mt-4">
                                    Additional charges may apply for non-warranty visits, customer-caused issues, after-hours requests, special access requirements, travel outside the normal service area, or visits where the reported issue is traced to non-covered equipment or conditions.
                                </p>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <h2 className="font-display text-2xl text-brand-white mb-4">Unauthorized Work</h2>
                                <p>
                                    To protect system integrity, warranty coverage does not apply to damage or failures caused by unauthorized repair, rewiring, relocation, reconfiguration, firmware flashing, hardware substitution, or other modifications performed by anyone not authorized by Polk Systems.
                                </p>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <h2 className="font-display text-2xl text-brand-white mb-4">Transfer and Removal</h2>
                                <p>
                                    This warranty does not automatically transfer to a new homeowner, tenant, or property location. If hardware is moved, reinstalled, materially altered, or transferred without Polk Systems approval, warranty coverage may end.
                                </p>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <h2 className="font-display text-2xl text-brand-white mb-4">Disclaimer</h2>
                                <p>
                                    Except as expressly stated on this page or in a written agreement signed by Polk Systems, no other express warranties are provided. To the fullest extent permitted by law, Polk Systems disclaims implied warranties to the extent they may be disclaimed, including implied warranties of merchantability and fitness for a particular purpose.
                                </p>
                                <p className="mt-4">
                                    Some states do not allow certain warranty limitations, so parts of this section may not apply depending on your location.
                                </p>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <h2 className="font-display text-2xl text-brand-white mb-4">Contact</h2>
                                <p>
                                    For warranty questions or service requests, reach us at{" "}
                                    <a href="mailto:polk@polksystems.com" className="text-brand-accent hover:underline">
                                        polk@polksystems.com
                                    </a>.
                                </p>
                            </div>

                            <p className="text-sm text-brand-text-muted/60 pt-8 border-t border-white/10">
                                Last updated: April 2026
                            </p>
                        </div>
                    </motion.div>
                </Container>
            </section>

            <Footer />
        </div>
    );
}