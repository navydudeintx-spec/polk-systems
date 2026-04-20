"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import {
  ESTIMATOR_ADDONS,
  ESTIMATOR_PACKAGES,
} from "@/lib/estimator-config";
import { calculateEstimate, type PackageKey } from "@/lib/estimator-calc";

type AddonKey = keyof typeof ESTIMATOR_ADDONS;
type HomeSizeKey = "small" | "medium" | "large" | "estate";
type ComplexityKey = "basic" | "moderate" | "advanced";
type EquipmentMixKey = "mostlyNew" | "mixed" | "mostlyExisting";

const homeSizeOptions: { key: HomeSizeKey; label: string }[] = [
  { key: "small", label: "Smaller home / condo" },
  { key: "medium", label: "Standard home" },
  { key: "large", label: "Large home" },
  { key: "estate", label: "Estate / multi-zone property" },
];

const complexityOptions: { key: ComplexityKey; label: string }[] = [
  { key: "basic", label: "Straightforward project" },
  { key: "moderate", label: "Moderate customization" },
  { key: "advanced", label: "Advanced / custom programming" },
];

const equipmentMixOptions: { key: EquipmentMixKey; label: string }[] = [
  { key: "mostlyNew", label: "Mostly new equipment" },
  { key: "mixed", label: "Mix of existing and new equipment" },
  { key: "mostlyExisting", label: "Mostly existing devices to integrate" },
];

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function EstimateYourInvestmentPage() {
  const [packageKey, setPackageKey] =
    useState<PackageKey>("localCoreInstallation");
  const [homeSize, setHomeSize] = useState<HomeSizeKey>("medium");
  const [complexity, setComplexity] = useState<ComplexityKey>("moderate");
  const [equipmentMix, setEquipmentMix] =
    useState<EquipmentMixKey>("mixed");
  const [selectedAddons, setSelectedAddons] = useState<AddonKey[]>([]);

  const selectedPackage = ESTIMATOR_PACKAGES[packageKey];

  const result = useMemo(() => {
    return calculateEstimate({
      packageKey,
      addonKeys: selectedAddons,
      homeSize,
      complexity,
      equipmentMix,
    });
  }, [packageKey, selectedAddons, homeSize, complexity, equipmentMix]);

  function toggleAddon(addonKey: AddonKey) {
    setSelectedAddons((current) =>
      current.includes(addonKey)
        ? current.filter((key) => key !== addonKey)
        : [...current, addonKey]
    );
  }

  return (
    <div className="min-h-screen bg-brand-black text-brand-white">
      <section className="border-b border-white/10">
        <Container className="py-20 md:py-28">
          <div className="max-w-4xl">
            <div className="mb-4 text-[11px] uppercase tracking-[0.35em] text-white/40">
              ESTIMATOR_01
            </div>

            <h1 className="text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl">
              Estimate Your Investment
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-white/70">
              This planning tool provides a rough starting range based on the
              package, features, and scope you select. Final pricing depends on
              hardware, device count, installation conditions, compatibility,
              programming requirements, and overall project complexity.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-8">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
                <div className="text-[11px] uppercase tracking-[0.35em] text-white/40">
                  STEP_01
                </div>
                <h2 className="mt-3 text-2xl font-light text-white">
                  Choose your starting point
                </h2>

                <div className="mt-6 grid gap-4">
                  {(Object.entries(ESTIMATOR_PACKAGES) as [
                    PackageKey,
                    (typeof ESTIMATOR_PACKAGES)[PackageKey]
                  ][]).map(([key, pkg]) => {
                    const isSelected = packageKey === key;

                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setPackageKey(key)}
                        className={`rounded-3xl border p-5 text-left transition ${
                          isSelected
                            ? "border-white/30 bg-white/10"
                            : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="text-lg font-medium text-white">
                              {pkg.label}
                            </div>
                            <div className="mt-2 text-sm text-white/60">
                              {pkg.resultLabel}
                            </div>
                          </div>

                          <div
                            className={`mt-1 h-4 w-4 rounded-full border ${
                              isSelected
                                ? "border-white bg-white"
                                : "border-white/40"
                            }`}
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
                <div className="text-[11px] uppercase tracking-[0.35em] text-white/40">
                  STEP_02
                </div>
                <h2 className="mt-3 text-2xl font-light text-white">
                  Select add-ons
                </h2>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {(Object.entries(ESTIMATOR_ADDONS) as [
                    AddonKey,
                    (typeof ESTIMATOR_ADDONS)[AddonKey]
                  ][]).map(([key, addon]) => {
                    const checked = selectedAddons.includes(key);

                    return (
                      <label
                        key={key}
                        className={`flex cursor-pointer items-start gap-3 rounded-3xl border p-4 transition ${
                          checked
                            ? "border-white/30 bg-white/10"
                            : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleAddon(key)}
                          className="mt-1 h-4 w-4"
                        />
                        <div>
                          <div className="text-sm font-medium text-white">
                            {addon.label}
                          </div>
                          <div className="mt-1 text-sm text-white/60">
                            +{formatCurrency(addon.price)}
                          </div>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
                <div className="text-[11px] uppercase tracking-[0.35em] text-white/40">
                  STEP_03
                </div>
                <h2 className="mt-3 text-2xl font-light text-white">
                  Define the scope
                </h2>

                <div className="mt-8 grid gap-8">
                  <div>
                    <div className="text-sm uppercase tracking-[0.25em] text-white/50">
                      Home Size
                    </div>
                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                      {homeSizeOptions.map((option) => (
                        <button
                          key={option.key}
                          type="button"
                          onClick={() => setHomeSize(option.key)}
                          className={`rounded-3xl border p-4 text-left transition ${
                            homeSize === option.key
                              ? "border-white/30 bg-white/10"
                              : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
                          }`}
                        >
                          <span className="text-sm text-white">
                            {option.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm uppercase tracking-[0.25em] text-white/50">
                      Complexity
                    </div>
                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                      {complexityOptions.map((option) => (
                        <button
                          key={option.key}
                          type="button"
                          onClick={() => setComplexity(option.key)}
                          className={`rounded-3xl border p-4 text-left transition ${
                            complexity === option.key
                              ? "border-white/30 bg-white/10"
                              : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
                          }`}
                        >
                          <span className="text-sm text-white">
                            {option.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm uppercase tracking-[0.25em] text-white/50">
                      Existing vs. New Equipment
                    </div>
                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                      {equipmentMixOptions.map((option) => (
                        <button
                          key={option.key}
                          type="button"
                          onClick={() => setEquipmentMix(option.key)}
                          className={`rounded-3xl border p-4 text-left transition ${
                            equipmentMix === option.key
                              ? "border-white/30 bg-white/10"
                              : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
                          }`}
                        >
                          <span className="text-sm text-white">
                            {option.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-8 lg:self-start">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
                <div className="text-[11px] uppercase tracking-[0.35em] text-white/40">
                  RESULT_01
                </div>

                <h2 className="mt-3 text-2xl font-light text-white">
                  Estimated Investment Range
                </h2>

                <div className="mt-6 text-sm uppercase tracking-[0.25em] text-white/50">
                  Selected Package
                </div>
                <div className="mt-2 text-lg text-white">
                  {selectedPackage.label}
                </div>

                <div className="mt-6 rounded-3xl border border-white/10 bg-black/20 p-5">
                  <div className="text-sm uppercase tracking-[0.25em] text-white/50">
                    Planning Range
                  </div>
                  <div className="mt-3 text-3xl font-light tracking-tight text-white">
                    {formatCurrency(result.low)} – {formatCurrency(result.high)}
                  </div>
                  <div className="mt-3 text-sm text-white/60">
                    {selectedPackage.resultLabel}
                  </div>
                </div>

                {selectedPackage.hardwareNote && (
                  <p className="mt-5 text-sm leading-6 text-white/60">
                    This package may require additional hardware. The range shown
                    above is intended only as a rough planning figure and may
                    increase based on equipment selection and installation scope.
                  </p>
                )}

                <p className="mt-5 text-sm leading-6 text-white/60">
                  Final pricing depends on hardware, device count, wiring,
                  installation conditions, compatibility, programming
                  requirements, and overall customization.
                </p>

                <div className="mt-8 grid gap-3">
                  <Link
                    href="/#get-in-touch"
                    className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-white/15"
                  >
                    Book a Private Home Assessment
                  </Link>

                  <Link
                    href="/downloads/Polk_Systems_v2.pdf"
                    className="rounded-2xl border border-white/10 px-5 py-3 text-center text-sm font-medium text-white/80 transition hover:bg-white/[0.05] hover:text-white"
                  >
                    Download Full Catalog
                  </Link>

                  <Link
                    href="/contact"
                    className="rounded-2xl border border-white/10 px-5 py-3 text-center text-sm font-medium text-white/80 transition hover:bg-white/[0.05] hover:text-white"
                  >
                    Contact Polk Systems
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}