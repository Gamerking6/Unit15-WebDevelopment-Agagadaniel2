/* DriveSpace — vehicle data
   Single source of truth used by catalogue, vehicle detail, configurator,
   comparison tool and finance calculator. */

const VEHICLES = [
  {
    id: "aurora-hatch",
    name: "Aurora Hatch",
    type: "hatchback",
    powertrain: "ev",
    bodyStyle: "Hatchback",
    tagline: "The everyday EV that disappears into your routine.",
    basePrice: 26995,
    range: 245,
    battery: 52,
    chargeTime: 6.5,
    rapidCharge: 28,
    zeroToSixty: 7.9,
    topSpeed: 99,
    seats: 5,
    drivetrain: "FWD",
    image: "images/aurora-hatch.svg",
    colour: "#2F6D5C",
    description: "A compact, city-friendly EV built for first-time electric drivers. Easy to park, easy to charge, easy to live with.",
    bestFor: ["First-time EV buyers", "City & commuter driving", "Smaller households"],
    trims: [
      { id: "essential", name: "Essential", priceAdd: 0, blurb: "Everything you need, nothing you don't." },
      { id: "comfort", name: "Comfort", priceAdd: 1800, blurb: "Heated seats, wireless charging, rear camera." },
      { id: "premium", name: "Premium", priceAdd: 3600, blurb: "Premium audio, leather-look interior, 18\" wheels." }
    ]
  },
  {
    id: "meridian-saloon",
    name: "Meridian Saloon",
    type: "saloon",
    powertrain: "ev",
    bodyStyle: "Saloon",
    tagline: "Long-distance comfort with silent confidence.",
    basePrice: 38995,
    range: 365,
    battery: 78,
    chargeTime: 8,
    rapidCharge: 31,
    zeroToSixty: 5.8,
    topSpeed: 130,
    seats: 5,
    drivetrain: "RWD",
    image: "images/meridian-saloon.svg",
    colour: "#1B2421",
    description: "Our flagship saloon. Built for motorway miles, business trips and weekends away — with range to match.",
    bestFor: ["Commuters & motorway drivers", "Business mileage", "Small families"],
    trims: [
      { id: "essential", name: "Essential", priceAdd: 0, blurb: "Long range, smart navigation, dual-zone climate." },
      { id: "comfort", name: "Comfort", priceAdd: 2400, blurb: "Adaptive cruise, heated steering wheel, ambient lighting." },
      { id: "premium", name: "Premium", priceAdd: 4900, blurb: "Air suspension, premium sound, extended range pack." }
    ]
  },
  {
    id: "summit-suv",
    name: "Summit SUV",
    type: "suv",
    powertrain: "hybrid",
    bodyStyle: "SUV",
    tagline: "Space for the whole family, hybrid efficiency for every journey.",
    basePrice: 34495,
    range: 620,
    battery: 18,
    chargeTime: 2.5,
    rapidCharge: 0,
    zeroToSixty: 8.4,
    topSpeed: 118,
    seats: 7,
    drivetrain: "AWD",
    image: "images/summit-suv.svg",
    colour: "#D9A24B",
    description: "A plug-in hybrid SUV with seven seats and the flexibility of electric short trips plus petrol-backed long ones.",
    bestFor: ["Families & carpools", "Mixed town & long-distance driving", "Drivers not ready to go fully electric"],
    trims: [
      { id: "essential", name: "Essential", priceAdd: 0, blurb: "Seven seats, all-wheel drive, hybrid efficiency." },
      { id: "comfort", name: "Comfort", priceAdd: 2200, blurb: "Panoramic roof, heated front & middle rows." },
      { id: "premium", name: "Premium", priceAdd: 4400, blurb: "Off-road drive modes, premium leather-look, tow pack." }
    ]
  },
  {
    id: "pulse-coupe",
    name: "Pulse Coupe",
    type: "coupe",
    powertrain: "ev",
    bodyStyle: "Coupe",
    tagline: "Performance EV for drivers who still want to feel the road.",
    basePrice: 47995,
    range: 320,
    battery: 82,
    chargeTime: 9,
    rapidCharge: 26,
    zeroToSixty: 3.9,
    topSpeed: 155,
    seats: 4,
    drivetrain: "AWD",
    image: "images/pulse-coupe.svg",
    colour: "#7C8A8A",
    description: "Dual-motor performance with the instant torque only electric power can give. Our quickest car, by far.",
    bestFor: ["Performance-focused drivers", "Weekend & enthusiast driving", "Drivers upgrading from petrol performance cars"],
    trims: [
      { id: "essential", name: "Essential", priceAdd: 0, blurb: "Dual motor, AWD, performance-tuned suspension." },
      { id: "comfort", name: "Comfort", priceAdd: 2600, blurb: "Track mode, carbon-style trim, performance brakes." },
      { id: "premium", name: "Premium", priceAdd: 5200, blurb: "Track package, 20\" forged wheels, launch control." }
    ]
  },
  {
    id: "haven-estate",
    name: "Haven Estate",
    type: "estate",
    powertrain: "hybrid",
    bodyStyle: "Estate",
    tagline: "All the boot space you need, none of the range anxiety.",
    basePrice: 31495,
    range: 580,
    battery: 14,
    chargeTime: 2,
    rapidCharge: 0,
    zeroToSixty: 8.9,
    topSpeed: 115,
    seats: 5,
    drivetrain: "FWD",
    image: "images/haven-estate.svg",
    colour: "#2F6D5C",
    description: "A practical plug-in hybrid estate with class-leading boot space — built for life admin, not just driving.",
    bestFor: ["Practical, load-carrying needs", "Mixed driving without home charging", "Budget-conscious hybrid buyers"],
    trims: [
      { id: "essential", name: "Essential", priceAdd: 0, blurb: "Hybrid efficiency, large boot, roof rails." },
      { id: "comfort", name: "Comfort", priceAdd: 1700, blurb: "Powered tailgate, heated seats, rear privacy glass." },
      { id: "premium", name: "Premium", priceAdd: 3400, blurb: "Premium audio, 19\" wheels, advanced driver assist." }
    ]
  },
  {
    id: "civic-city",
    name: "Civic City",
    type: "city",
    powertrain: "ev",
    bodyStyle: "City car",
    tagline: "The smallest way into electric driving.",
    basePrice: 21495,
    range: 180,
    battery: 38,
    chargeTime: 5,
    rapidCharge: 24,
    zeroToSixty: 9.8,
    topSpeed: 90,
    seats: 4,
    drivetrain: "FWD",
    image: "images/civic-city.svg",
    colour: "#D9A24B",
    description: "Our most affordable EV. Perfect for short commutes, tight parking spaces and first-time buyers on a budget.",
    bestFor: ["First-time buyers on a budget", "Short urban commutes", "Easy parking & manoeuvring"],
    trims: [
      { id: "essential", name: "Essential", priceAdd: 0, blurb: "Compact, efficient, easy to park." },
      { id: "comfort", name: "Comfort", priceAdd: 1400, blurb: "Heated seats, rear parking sensors, app connectivity." },
      { id: "premium", name: "Premium", priceAdd: 2800, blurb: "Two-tone paint, premium interior trim, 16\" alloys." }
    ]
  }
];

const COLOURS = [
  { id: "glacier-white", name: "Glacier White", hex: "#F5F3EE", priceAdd: 0 },
  { id: "ink-black", name: "Ink Black", hex: "#15181A", priceAdd: 0 },
  { id: "eucalyptus", name: "Eucalyptus Green", hex: "#2F6D5C", priceAdd: 650 },
  { id: "brass", name: "Brass Gold", hex: "#C08A3E", priceAdd: 650 },
  { id: "storm-grey", name: "Storm Grey", hex: "#5B6566", priceAdd: 450 }
];

const WHEELS = [
  { id: "standard", name: "Standard 17\u2033", priceAdd: 0 },
  { id: "sport", name: "Sport 19\u2033", priceAdd: 950 },
  { id: "performance", name: "Performance 20\u2033", priceAdd: 1650 }
];

const FINANCE_RATES = {
  pcp: { apr: 0.069, depositPct: 0.10, termsMonths: [24, 36, 48] },
  hp:  { apr: 0.079, depositPct: 0.15, termsMonths: [24, 36, 48, 60] }
};

function getVehicleById(id) {
  return VEHICLES.find(v => v.id === id);
}

function formatGBP(amount) {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(amount);
}
