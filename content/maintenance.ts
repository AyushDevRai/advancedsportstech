// Official AST Cleaning & Maintenance Content
// Sourced from https://ast-sports.com/maintainence/
// Official AST Polytan & SMG Maintenance Machinery Catalog.

export interface MaintenanceService {
  id: string;
  number: string;
  title: string;
  tagline: string;
  summary: string;
  paragraphs: string[];
  deliverables: string[];
  image: string;
}

export interface MaintenanceMachine {
  name: string;
  model: string;
  category: string;
  description: string;
  specs: { label: string; value: string }[];
  features: string[];
  image: string;
}

export interface MaintenanceVideo {
  id: string;
  title: string;
  category: string;
  description: string;
  type: "local" | "youtube";
  src: string; // file path or YouTube ID
  thumbnail?: string;
  highlights: string[];
}

export interface MaintenanceStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  actions: string[];
}

export const maintenanceHeroCopy = {
  eyebrow: "POLYTAN & SMG MAINTENANCE TECHNOLOGY",
  title: "PROPER MAINTENANCE.",
  titleHighlight: "SYNTHETIC SPORTS SURFACES.",
  subtitle:
    "Specialized high-pressure wet cleaning, certified structural repairs, and German re-topping systems by Polytan & AST specialists.",
};

export const maintenanceOverviewCopy = [
  "Over the course of time, even the surfaces of running tracks and multifunctional services can be impacted in that the surface becomes weathered or encrusted, or moss accumulates, for example. Although this contamination is usually only superficial and is mostly very easy to remove, any damage should be remedied as soon as possible by our Polytan specialists.",
  "Normal dirt due to environmental influences can be removed using mechanical high-pressure wet cleaning. This process quickly restores the sports-specific functions and look of the running track.",
  "Damage due to vandalism, incorrect use or wear is expertly repaired by our Polytan service teams. We also quickly and efficiently renew pitch lines.",
  "The Polytan re-topping system means it is no longer necessary to remove and dispose of old systems at great cost; instead, they can be used as a subfloor for new coatings.",
];

export const maintenanceStatistics = [
  { value: "5–8 Yrs", text: "Additional facility lifespan unlocked with proactive bi-annual professional maintenance" },
  { value: "140 Bar", text: "Precision hydrodynamic water pressure calibrated to preserve polyurethane and synthetic fibers" },
  { value: "100+", text: "Stadium tracks, football fields, and hockey turfs serviced across India by AST" },
  { value: "Up to 60%", text: "Cost savings achieved through Polytan Re-Topping versus complete civil subbase excavation" },
];

export const maintenanceServices: MaintenanceService[] = [
  {
    id: "cleaning",
    number: "01",
    title: "MECHANICAL WET CLEANING",
    tagline: "HYDRODYNAMIC HIGH-PRESSURE CARE",
    summary:
      "Normal dirt due to environmental influences can be removed using mechanical high-pressure wet cleaning. This process quickly restores the sports-specific functions and look of the running track.",
    paragraphs: [
      "Atmospheric dust, organic vegetation, algae spores, and airborne particulate matter penetrate into the porous matrix of synthetic athletic tracks and artificial turf infill systems over time. Left unaddressed, this contamination forms encrusted layers that impair friction values and drainage permeability.",
      "AST employs specialized German ride-on wet cleaning machinery that applies high-pressure water jets through synchronized rotary nozzle bars while instantaneously vacuuming away contaminated dirty water in a continuous single-pass workflow.",
    ],
    deliverables: [
      "Restoration of force reduction and anti-slip traction values",
      "Immediate elimination of moss, algae, and organic bio-films",
      "Unclogging of microporous drainage structures to prevent standing water",
      "Dust-free, deep-suction residue collection preventing re-contamination",
    ],
    image: "/imageMaintenance/clean.png",
  },
  {
    id: "repairs",
    number: "02",
    title: "EXPERT SURFACE REPAIRS",
    tagline: "VANDALISM, WEAR & SEAM REMEDIATION",
    summary:
      "Damage due to vandalism, incorrect use or wear is expertly repaired by our Polytan service teams. We also quickly and efficiently renew pitch lines.",
    paragraphs: [
      "High-stress launch areas such as high-jump approaches, javelin runway lines, penalty spots, and corner kick quadrants undergo heavy localized friction. If tiny cuts or opened seams are left untreated, subsurface water ingress can weaken the base asphalt or elastic shock pad.",
      "Our factory-certified Polytan technicians perform localized cut-out surgeries, rebonding separated turf seams with high-tensile geotextile seam tape and polyurethane adhesive, and patching polyurethane track rubber with original colour-matched EPDM granules.",
    ],
    deliverables: [
      "Precision cut-and-patch repair for torn or worn track sections",
      "High-strength 2-component polyurethane seam re-adhesion for synthetic turf",
      "Infill leveling and localized shock pad reconstitution",
      "Complete line remarking compliant with World Athletics, FIH, and FIFA codes",
    ],
    image: "/imageMaintenance/cleaning-1.png",
  },
  {
    id: "re-topping",
    number: "03",
    title: "RE-TOPPING & SUSTAINABLE REFURBISHMENT",
    tagline: "REMOVING OLD SYSTEMS WITH ZERO WASTE",
    summary:
      "The Polytan re-topping system means it is no longer necessary to remove and dispose of old systems at great cost; instead, they can be used as a subfloor for new coatings.",
    paragraphs: [
      "When a synthetic athletic track reaches the end of its typical 8-to-12-year primary surface lifecycle, the underlying elastic base layer or shock pad is frequently structurally sound and intact. Traditional complete demolition incurs massive dump fees and civil reconstruction costs.",
      "With the Polytan Re-Topping method, the weathered wear layer is cleaned and primed, and a brand-new polyurethane wear layer with fresh virgin EPDM granules is cast directly over top. The track is fully restored to World Athletics Class 1 certification standards at a fraction of the cost.",
    ],
    deliverables: [
      "Preserves original asphalt base and shock-absorbing sublayers",
      "Eliminates expensive civil disposal and heavy machinery landfill fees",
      "Delivers a brand-new UV-stabilized polyurethane competition running track",
      "Renewed manufacturer warranty and international athletics certification",
    ],
    image: "/imageMaintenance/cleaning.png",
  },
];

export const maintenanceMachines: MaintenanceMachine[] = [
  {
    name: "SMG SportChamp",
    model: "SC3 / SC4 Ride-On Multi-Purpose",
    category: "Multifunctional Turf & Track Machine",
    description:
      "The world-renowned German self-propelled maintenance vehicle with over 19 interchangeable attachments for regular decompaction, brushing, and deep cleaning.",
    specs: [
      { label: "Working Width", value: "Up to 2,000 mm" },
      { label: "Drive Engine", value: "3-cylinder water-cooled Kubota diesel" },
      { label: "Filtration", value: "Continuous automatic filter shaking system" },
      { label: "Applications", value: "Athletic tracks, unfilled & sand/rubber-filled turf" },
    ],
    features: [
      "Infinitely adjustable hydrostatic drive with rear-wheel steering",
      "Powerful vacuum turbine with high-capacity dust filter box",
      "De-compacting tines and trailing grooming brush array",
      "Quick-dock hitch for rapid front attachment exchange",
    ],
    image: "/imageMaintenance/clean.png",
  },
  {
    name: "SMG WashMatic",
    model: "WM800 Hydrodynamic Washer",
    category: "High-Pressure Wet Track Cleaner",
    description:
      "Specialized ride-on high-pressure wet cleaning machine engineered specifically for synthetic running tracks and water-based hockey turfs.",
    specs: [
      { label: "Operating Pressure", value: "Adjustable 40 to 140 bar" },
      { label: "Working Width", value: "800 mm rotary coverage" },
      { label: "Area Performance", value: "200 – 250 m² / hour" },
      { label: "Water Recycling", value: "ClearMatic CM1800 closed-loop compatible" },
    ],
    features: [
      "Rotating high-pressure nozzle beam for uniform non-abrasive cleaning",
      "Integrated diaphragm pump suctions dirty water instantaneously",
      "Does not harm elastomeric PU binder or micro-texturing",
      "Removes deep algae, fungus spores, and compacted environmental silt",
    ],
    image: "/imageMaintenance/cleaning.png",
  },
  {
    name: "SMG TurfCare",
    model: "TCA1400 Infill Conditioner",
    category: "Deep Turf Decompaction & Cleaning",
    description:
      "Towed and self-contained ride-on implement designed to de-compact packed sand and rubber infill in synthetic football pitches while cleaning out fine micro-dust.",
    specs: [
      { label: "Working Width", value: "1,400 mm" },
      { label: "Working Depth", value: "Variable 0 to 15 mm" },
      { label: "Sieve Mesh", value: "Interchangeable 4 to 10 mm vibrating screen" },
      { label: "Performance", value: "Up to 5,000 m² / hour" },
    ],
    features: [
      "De-compacting spring tines loosen hard-packed infill layers",
      "Vibrating sieve separates dirt and worn particles from clean infill",
      "Clean infill returned immediately to turf fibers",
      "Rear brush levels and grooms turf fibers into an upright posture",
    ],
    image: "/imageMaintenance/cleaning-1.png",
  },
  {
    name: "Precision Laser Line Striper",
    model: "Airless Line Marker Pro",
    category: "Competition Line Marking",
    description:
      "High-pressure airless spray machine with optical guide lasers for renewing athletic running track lanes, football field lines, and hockey boundaries.",
    specs: [
      { label: "Spray Pressure", value: "Up to 210 bar" },
      { label: "Line Width", value: "50 mm to 120 mm adjustable" },
      { label: "Paint Compatibility", value: "100% PU 2-part UV-stable athletic paints" },
      { label: "Certification", value: "World Athletics & FIH rule compliant" },
    ],
    features: [
      "Razor-sharp edge definition without overspray",
      "Fast-drying weather-resistant athletic polyurethane formulation",
      "Calibrated radius arm for precision running track curve bends",
      "Long-lasting abrasion resistance under competition spike traffic",
    ],
    image: "/services/line-marking.jpg",
  },
];

export const maintenanceVideos: MaintenanceVideo[] = [
  {
    id: "track-wet-cleaning",
    title: "High-Pressure Track Wet Cleaning",
    category: "AST FIELD EXECUTION IN INDIA",
    description:
      "On-site operational video showing AST technicians deploying mechanical rotary high-pressure wet cleaning machinery across a synthetic athletic running track.",
    type: "local",
    src: "/videos/maintenance-track-cleaning.mp4",
    highlights: [
      "Hydrodynamic rotary nozzles lift deep embedded silt",
      "Instant water extraction keeps surface clear",
      "Restores vibrant red and blue EPDM coloration",
    ],
  },
  {
    id: "turf-deep-cleaning",
    title: "Synthetic Turf Decompaction & Maintenance",
    category: "AST ON-SITE TURF RESTORATION",
    description:
      "On-site operational video highlighting AST service team performing mechanized deep cleaning and moss/algae remediation on synthetic turf.",
    type: "local",
    src: "/videos/maintenance-turf-cleaning.mp4",
    highlights: [
      "Deep brush grooming lifts flattened artificial blades",
      "Algae extraction prevents slippery match conditions",
      "Ensures optimal ball bounce and player traction",
    ],
  },
  {
    id: "specialized-surface-cleaning",
    title: "Specialized Sports Surface High-Pressure Cleaning",
    category: "SPECIALIZED MACHINERY IN ACTION (YOUTUBE)",
    description:
      "Operational field video demonstrating specialized rotary pressure washing and vacuum extraction restoring synthetic athletic tracks and running surfaces.",
    type: "youtube",
    src: "8qA5DiYK4WQ",
    highlights: [
      "High-pressure rotary deep pore water jetting",
      "Simultaneous silt, moss, and sediment vacuum recovery",
      "Restores certified track friction without substrate damage",
    ],
  },
  {
    id: "precision-turf-maintenance",
    title: "Mechanized Synthetic Turf Deep Cleaning & Care",
    category: "SPECIALIZED MACHINERY IN ACTION (YOUTUBE)",
    description:
      "Specialized maintenance machinery in action performing deep infill decompaction, fiber brushing, and micro-sediment extraction for sports surfaces.",
    type: "youtube",
    src: "AvSpG_xDr1c",
    highlights: [
      "Precision rotating brushes decompact rubber infill",
      "Turbine suction filters dust and fine organic particulates",
      "Maintains international federation traction and safety standards",
    ],
  },
];

export const maintenanceSteps: MaintenanceStep[] = [
  {
    step: "01",
    title: "Photometric & Structural Audit",
    subtitle: "SURFACE INTEGRITY ASSESSMENT",
    description:
      "Our technicians conduct a comprehensive on-site inspection, measuring infill compaction, seam adhesion, tensile friction, and drainage rate.",
    actions: [
      "Audit of wear zones (launch areas, goalmouths, track inner lanes)",
      "Testing infill compaction depth with specialized penetrometers",
      "Mapping moss, algae colonies, and perimeter sediment buildup",
    ],
  },
  {
    step: "02",
    title: "Surface De-Compaction & Brushing",
    subtitle: "RESTORING FIBER RESILIENCY",
    description:
      "Using specialized de-compacting tines, packed sand and rubber infill is gently broken up to restore resilience and shock absorption.",
    actions: [
      "Loosening compacted infill without fiber shearing",
      "Lifting flattened artificial turf blades into vertical alignment",
      "Removing surface litter, organic leaves, and foreign matter",
    ],
  },
  {
    step: "03",
    title: "High-Pressure Hydrodynamic Cleaning",
    subtitle: "DEEP MATRIX EXTRACTION",
    description:
      "Using calibrated water pressure up to 140 bar, rotating spray nozzles penetrate micropores to extract embedded silt and organic grime.",
    actions: [
      "Precision water jetting calibrated to avoid PU degradation",
      "Simultaneous diaphragm suction of dirty effluent",
      "Complete remediation of moss, fungus, and bio-film deposits",
    ],
  },
  {
    step: "04",
    title: "Infill Replenishment & Redistribution",
    subtitle: "UNIFORM CUSHIONING",
    description:
      "Screened, debris-free infill is evenly redeposited with millimeter precision across the pitch to guarantee consistent ball roll.",
    actions: [
      "Laser-guided redistribution of rubber and silica sand infill",
      "Elimination of hazardous high/low spots in playing zones",
      "Verification of critical shock-absorption parameters",
    ],
  },
  {
    step: "05",
    title: "Seam Repair & Precision Line Marking",
    subtitle: "COMPETITION COMPLIANCE",
    description:
      "Separated joints are re-bonded with heavy-duty PU adhesive, and faded lines are re-sprayed to international federation standards.",
    actions: [
      "Cold-weather or hot-melt PU bonding on detached turf seams",
      "Precision laser-guided line re-marking with UV-stable pigments",
      "Formal handover documentation with future maintenance schedule",
    ],
  },
];

export const maintenanceGallery = [
  {
    title: "Rotary High-Pressure Wet Cleaning",
    category: "ATHLETIC TRACKS",
    image: "/imageMaintenance/clean.png",
    description: "Deep pressure washing restores athletic track pores and brightens red EPDM granules.",
  },
  {
    title: "Synthetic Turf De-Compaction",
    category: "FOOTBALL & HOCKEY",
    image: "/imageMaintenance/cleaning-1.png",
    description: "Mechanized ride-on brushing de-compacts infill and straightens turf blades.",
  },
  {
    title: "Polytan Re-Topping Preparation",
    category: "RUNNING TRACK REFURBISHMENT",
    image: "/imageMaintenance/cleaning.png",
    description: "Surface decontamination prepares worn running tracks for durable polyurethane re-topping.",
  },
  {
    title: "Turnkey Maintenance Service",
    category: "STADIUM INFRASTRUCTURE",
    image: "/services/maintenance.jpg",
    description: "AST maintenance specialists provide regular contractual maintenance across India.",
  },
  {
    title: "Precision Pitch Line Marking",
    category: "COMPETITION MARKINGS",
    image: "/services/line-marking.jpg",
    description: "Airless PU line marking ensures full compliance with World Athletics and FIH rules.",
  },
  {
    title: "Complete Track Refurbishment",
    category: "FACILITY EXTENSION",
    image: "/services/refurbishment.png",
    description: "Transforming weathered sports surfaces into world-class competition facilities.",
  },
];

export const maintenanceFaqs = [
  {
    question: "How often does a synthetic athletic track require professional deep cleaning?",
    answer:
      "For outdoor running tracks exposed to tropical dust and monsoon rainfall, we recommend a professional high-pressure hydrodynamic deep cleaning once every 6 to 12 months. Routine clearing of dry leaves and surface litter should be done weekly.",
  },
  {
    question: "What is Polytan Re-Topping and how is it different from full replacement?",
    answer:
      "When the surface coating of an athletic track wears down after years of spikes and UV exposure, the elastic subbase is usually still intact. Polytan Re-Topping cleans and primes the existing elastic base and installs a brand new polyurethane and EPDM wear coat over top, saving up to 60% of the cost of total replacement.",
  },
  {
    question: "Why is de-compaction essential for artificial football and hockey turf?",
    answer:
      "Under heavy play, silica sand and rubber infill settle and become packed like concrete. This dramatically reduces shock absorption, leading to severe ankle and knee strain for players. Regular de-compaction restores the cushioned spring and natural ball rebound.",
  },
  {
    question: "Can AST repair seams and lines on facilities built by other contractors?",
    answer:
      "Yes. AST service engineers maintain and repair running tracks, football turfs, hockey pitches, and multi-sport courts installed by any manufacturer. We evaluate existing surface conditions and deploy compatible German bonding agents and original EPDM granules.",
  },
  {
    question: "Does high-pressure washing damage synthetic track rubber?",
    answer:
      "Conventional industrial pressure washers can damage polyurethane bonds if held too close. AST utilizes specialized German SMG machinery with calibrated bar pressure and rotating spray hoods that clean deep without stripping polyurethane binder or elastomeric granules.",
  },
];
