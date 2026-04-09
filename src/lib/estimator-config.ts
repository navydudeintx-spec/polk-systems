export const ESTIMATOR_PACKAGES = {
  smartHomeRescue: {
    label: "Smart Home Rescue / Cleanup",
    basePrice: 349,
    hardwareNote: true,
    resultLabel: "Starting at $349 + hardware",
  },
  localCoreInstallation: {
    label: "Local Core Installation",
    basePrice: 799,
    hardwareNote: false,
    resultLabel: "Starting at $799",
  },
  lightingAndComfort: {
    label: "Lighting & Comfort Package",
    basePrice: 1450,
    hardwareNote: true,
    resultLabel: "Starting at $1,450 + hardware",
  },
  privacyFirstCameras: {
    label: "Privacy-First Camera Systems",
    basePrice: 1150,
    hardwareNote: true,
    resultLabel: "Starting at $1,150 + hardware",
  },
  wholeHomeDesign: {
    label: "Whole-Home Design & Integration",
    basePrice: 3500,
    hardwareNote: true,
    resultLabel: "Custom Quote · Most integrated projects start at $3,500+",
  },
};

export const ESTIMATOR_ADDONS = {
  existingDeviceIntegration: { label: "Existing Device Integration", price: 125 },
  additionalAutomation: { label: "Additional Automation", price: 75 },
  additionalScene: { label: "Additional Scene", price: 35 },
  additionalScript: { label: "Additional Script", price: 60 },
  additionalCamera: { label: "Additional Camera", price: 250 },
  additionalLightingZone: { label: "Additional Lighting Zone", price: 150 },
  blindOrShadeControl: { label: "Blind / Shade Control", price: 300 },
  smartLock: { label: "Smart Lock", price: 350 },
  smartVentOrClimateZone: { label: "Smart Vent / Climate Zone", price: 225 },
  energyMonitoring: { label: "Energy Monitoring", price: 450 },
  voiceAssistantIntegration: { label: "Voice Assistant Integration", price: 125 },
  kidsRoutineAutomation: { label: "Kids Routine Automation", price: 150 },
};

export const ESTIMATOR_MULTIPLIERS = {
  homeSize: {
    small: 1.0,
    medium: 1.1,
    large: 1.25,
    estate: 1.5,
  },
  complexity: {
    basic: 1.0,
    moderate: 1.15,
    advanced: 1.3,
  },
  equipmentMix: {
    mostlyNew: 1.0,
    mixed: 1.1,
    mostlyExisting: 1.2,
  },
};