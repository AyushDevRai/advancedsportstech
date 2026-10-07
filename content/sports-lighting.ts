// Published copy from https://ast-sports.com/gigatera/
// Official AST GigaTera & Sports Lighting System Catalog.

export interface LightingFeature {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
}

export const lightingHeroCopy = {
  eyebrow: "GIGATERA BY KMW & AST SPORTS",
  title: "GIGATERA SPORTS LIGHTING.",
  titleHighlight: "BEYOND THE LIGHT.",
  subtitle:
    "Intelligent glare-free LED floodlights with patented reflecting plates and 4K broadcast compliance by KMW Inc.",
};

export const lightingOverview = [
  "Metal halide lighting has a strong light which causes glare. For this reason, it makes it difficult for athletes to secure the optimal view during a competition. GigaTera’s SUFA series LED lighting has a structure that features various narrow beam angles applying the reflecting plate method.",
  "This minimizes the risk of glare caused by light leakage in any stadium and ensures that the athletes can improve their competitiveness and the spectators can enjoy a comfortable viewing experience.",
  "We also use an individual reflecting plate for each LED element to make sure the lights remain separated without converging and minimize the phenomenon whereby a flying ball becomes invisible in the light. Our products are thus completely optimized for sports events.",
  "With over 11 years of sports infrastructure experience across India, AST has executed over 100 high-mast and stadium lighting installations. We deliver comprehensive turnkey sports lighting solutions: DIALux photometric design, wind-load structural engineering, polygonal high-mast towers, electrical load distribution, and 4K ultra-slow-motion broadcast compliance.",
];

export const lightingHighlights = [
  "Individual reflecting plate for each LED element prevents beam convergence",
  "Patented narrow & asymmetric beam angles eliminate glare for competing athletes",
  "Prevents high-velocity flying balls from disappearing against bright spill light",
  "Flicker-free electronic drivers (< 1% flicker factor) for 4K Super-Slow-Mo broadcast",
  "Up to 65% energy reduction compared to traditional 2000W metal halide floodlights",
  "Over 100 sports lighting installations completed across India by AST engineering",
];

export const lightingStatistics = [
  { value: "65%", text: "Energy savings compared to traditional 2000W metal halide stadium lamps" },
  { value: "<1%", text: "Flicker factor compliant with 4K UHD super-slow-motion broadcast standards" },
  { value: "100+", text: "Stadium and sports lighting projects executed across India by AST" },
  { value: "50,000h", text: "L80 rated maintenance-free operational lifespan with 20kV surge protection" },
];

export const lightingFeatures: LightingFeature[] = [
  {
    number: "01",
    title: "Individual Reflecting Plate Method",
    subtitle: "PATENTED OPTICAL SEPARATION",
    description:
      "Unlike conventional multi-chip lenses that bundle light beams and create glaring focal hotspots, GigaTera equips each individual LED element with its own dedicated precision reflecting plate.",
    points: [
      "Light rays remain precisely separated without uncontrolled convergence",
      "Eliminates blinding light halos that cause flying balls to vanish mid-air",
      "Guarantees crisp depth perception for fast hockey, football, and tennis action",
    ],
  },
  {
    number: "02",
    title: "Anti-Glare Structural Engineering",
    subtitle: "ATHLETE VISUAL COMFORT & SPECTATOR CLARITY",
    description:
      "Engineered with calibrated cut-off angles and multi-tiered louvers, GigaTera SUFA fixtures direct luminous flux strictly where needed on the field of play.",
    points: [
      "Minimizes upward light spill and dark sky atmospheric pollution",
      "Complies with stringent FIH, FIFA, and World Athletics glare ratings (GR < 50)",
      "Provides comfortable, immersive viewing angles for spectators in stadium stands",
    ],
  },
  {
    number: "03",
    title: "Wireless Smart Control & Instant Restrike",
    subtitle: "INTELLIGENT KMW RF NETWORK",
    description:
      "Powered by KMW Inc.'s global leadership in wireless RF communications, GigaTera floodlights feature intelligent zigbee/RF wireless management with instantaneous on/off capability.",
    points: [
      "Zero warm-up or cool-down delay — instant restrike in under 1 second",
      "DMX512 integration for dynamic pre-match light shows and celebration sequences",
      "Multi-stage dimming protocols (Training: 200–500 Lux, Match: 1000–2500 Lux)",
    ],
  },
];

export const lightingBlueprints = [
  {
    id: "luminaire-data-sheet",
    title: "GigaTera SFP800-H500308 Luminaire Data Sheet",
    badge: "Official Data Sheet",
    image: "/imageLighting/11g.jpg",
    alt: "GigaTera SFP800-H500308 LED luminaire data sheet and polar photometric distribution curve",
    caption:
      "Complete luminaire specification sheet for GigaTera SFP800 series high-output sports floodlight, displaying narrow beam angle polar curves and heat-pipe cooling chassis.",
  },
  {
    id: "hockey-coordinates",
    title: "Hockey Sports / Sport Luminaires Coordinates List",
    badge: "Aiming Coordinates",
    image: "/imageLighting/12g.jpg",
    alt: "Hockey Sports Sport Luminaires Coordinates List and photometric simulation matrix",
    caption:
      "Engineering luminaire coordinates and aiming angle schedule for FIH-compliant Olympic field hockey pitch installations, balancing horizontal and vertical lux uniformity.",
  },
  {
    id: "track-layout",
    title: "Typical Track & Field LED Sports Lighting Layout",
    badge: "Engineering Drawing",
    image: "/imageLighting/Typical-Track-Field-LED-Sports-Lighting-Layout-_page-0001-rotated-e1654254325894.jpg",
    alt: "Typical Track & Field 400m stadium LED sports lighting high-mast layout architectural blueprint",
    caption:
      "Architectural blueprint detailing 4-mast stadium layout, pole heights, aiming vectors, and uniform lux distribution across sprint straights and field events.",
  },
];

export const lightingSpecifications = [
  { label: "Luminaire Series", value: "GigaTera SUFA Series / SFP800-H500308 Sports Floodlight" },
  { label: "Optical Technology", value: "Individual LED reflecting plate method with narrow & asymmetric beam angles" },
  { label: "Luminous Efficacy", value: "High-efficiency Tier-1 LED package up to 140–150 lm/W" },
  { label: "Color Rendering Index (CRI)", value: "Ra > 80 (Training & Club) / Ra > 90 (Broadcast Stadium)" },
  { label: "Color Temperature (CCT)", value: "5700K Daylight Spectrum (optimal for televised sports coverage)" },
  { label: "Flicker Factor", value: "< 1% (Compliant with 4K UHD and 1000fps Super-Slow-Motion TV cameras)" },
  { label: "Surge Protection", value: "20kV integrated surge protective device (SPD) against lightning strikes" },
  { label: "Ingress Protection", value: "IP66 dust-tight and water jet resistant with high-grade silicone gaskets" },
  { label: "Impact Rating", value: "IK08 / IK10 ruggedized tempered glass and die-cast aluminum housing" },
  { label: "Operating Temperature", value: "-30°C to +55°C engineered for harsh Indian ambient summer temperatures" },
  { label: "Lifespan", value: "L80 > 50,000 Hours maintenance-free operation" },
  { label: "Control Protocol", value: "Wireless RF / Zigbee / DMX512 dynamic dimming and light show integration" },
];

export const lightingSportApplications = [
  {
    title: "Field Hockey Turfs",
    standard: "FIH Quality Programme (500–2000 Lux)",
    description:
      "Precision asymmetric beam spreads ensure the high-velocity white hockey ball remains continuously visible without blinding goalkeepers or penalty corner attackers.",
  },
  {
    title: "Athletic Running Tracks",
    standard: "World Athletics Class I & II (300–1000 Lux)",
    description:
      "Uniform horizontal illumination across all 8–9 lanes on sprint straights and curve transitions, with zero pole shadow cast onto jump pits or throwing zones.",
  },
  {
    title: "Football & Soccer Stadiums",
    standard: "FIFA Stadium Guidelines (750–2500 Lux)",
    description:
      "High vertical illuminance for crisp 4K broadcast cameras, balanced player face recognition, and rapid instant restrike for uninterrupted evening match play.",
  },
  {
    title: "Multi-Sport Academies & Tennis",
    standard: "Club & International Competition (300–750 Lux)",
    description:
      "Energy-efficient smart dimming enables sports facilities to run training sessions at 50% load, instantly toggling to 100% tournament mode at the push of a button.",
  },
];

export const lightingFaqs = [
  {
    question: "Why does GigaTera's individual reflecting plate method outperform standard LED lenses?",
    answer:
      "Conventional sports floodlights use multi-LED lenses that converge light into broad beams, causing heavy glare and blind zones where fast-moving balls disappear against the light source. GigaTera incorporates an individual reflector plate for every LED emitter, ensuring light rays stay separated and controlled. This provides crisp ball tracking and zero glare for athletes.",
  },
  {
    question: "Is this lighting compliant with 4K Ultra-HD television broadcast standards?",
    answer:
      "Yes. GigaTera fixtures utilize specialized high-frequency electronic drivers that achieve a flicker factor under 1%. This guarantees crystal-clear, flicker-free super-slow-motion replays at 1,000 frames per second on 4K/8K broadcast television.",
  },
  {
    question: "How much energy does GigaTera save compared to metal halide floodlights?",
    answer:
      "GigaTera LED systems deliver energy savings of up to 60% to 70% compared to traditional 2000W metal halide stadium lamps. Combined with instant on/off (zero 15-minute warm-up cycles) and multi-level dimming, lifecycle operating costs are drastically reduced.",
  },
  {
    question: "Does AST handle turnkey design, high-mast columns, and installation?",
    answer:
      "Yes. AST provides end-to-end turnkey sports lighting services: DIALux photometric design, foundation and wind-load civil calculations, polygonal high-mast towers, luminaire mounting and precision aiming, electrical control panels, and post-installation lux certification.",
  },
];
