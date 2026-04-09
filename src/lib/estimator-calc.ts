import {
  ESTIMATOR_ADDONS,
  ESTIMATOR_MULTIPLIERS,
  ESTIMATOR_PACKAGES,
} from "@/lib/estimator-config";

export type PackageKey =
  | "smartHomeRescue"
  | "localCoreInstallation"
  | "lightingAndComfort"
  | "privacyFirstCameras"
  | "wholeHomeDesign";

export function calculateEstimate({
  packageKey,
  addonKeys,
  homeSize,
  complexity,
  equipmentMix,
}: {
  packageKey: PackageKey;
  addonKeys: string[];
  homeSize: "small" | "medium" | "large" | "estate";
  complexity: "basic" | "moderate" | "advanced";
  equipmentMix: "mostlyNew" | "mixed" | "mostlyExisting";
}) {
  const base = ESTIMATOR_PACKAGES[packageKey].basePrice;

  const addonsTotal = addonKeys.reduce((sum, key) => {
    const addon = ESTIMATOR_ADDONS[key as keyof typeof ESTIMATOR_ADDONS];
    return sum + (addon?.price ?? 0);
  }, 0);

  const subtotal = base + addonsTotal;

  const adjusted =
    subtotal *
    ESTIMATOR_MULTIPLIERS.homeSize[homeSize] *
    ESTIMATOR_MULTIPLIERS.complexity[complexity] *
    ESTIMATOR_MULTIPLIERS.equipmentMix[equipmentMix];

  return {
    low: Math.round(adjusted * 0.9),
    high: Math.round(adjusted * 1.2),
  };
}