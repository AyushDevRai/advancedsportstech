// Published copy from https://ast-sports.com/hockey/ and official AST Poligras product catalog.

export const hockeyOverview = [
  "No other type of ball sport is more closely linked to synthetic turf than hockey. This is mainly due to the fact that the dense surface structure of the turf carpet enables fast passing and precise ball control without distortion of direction. Artificial turf for hockey pitches is generally unfilled and has short, textured turf filaments. Synthetic hockey turf is therefore watered before every kick-off, to enable players to slide over the surface without risk of injury.",
  "All Polytan hockey turfs meet the international specifications of the International Hockey Federation (FIH). The patented Polytan CoolPlus function prevents excessive overheating of field hockey pitches. As part of the Green Technology programme, which advocates environmentally friendly and sustainable sports flooring, Polytan provides hockey surface coverings that are manufactured from more than 60% organic-based plastic.",
];

export const hockeyHistory =
  "Field hockey is regarded as a particularly fair and elegant team sport, with a long and proud British tradition. The rules, still in place today, were established in 1875 in England, and the first national hockey association was established in London. Field hockey matches are fast and technically demanding, with body contact prohibited. Matches are played on a 91.50m-long and 50–55m-wide field with synthetic turf.";

export const hockeyStatistics = [
  { value: "1875", text: "Rules established in England — traditional British sporting heritage" },
  { value: "8+", text: "Olympic Games hockey tournaments played on Poligras synthetic turf" },
  { value: "60%+", text: "Organic bio-based polyethylene verified by ASTM D6866" },
];

export const eliteHockeyVenues = [
  "Major Dhyan Chand National Stadium, New Delhi",
  "Kalinga Stadium, Bhubaneswar (FIH Men's World Cup)",
  "Birsa Munda International Hockey Stadium, Rourkela",
  "Olympic Games Venues: Tokyo 2020, Rio 2016, London 2012, Paris 2024",
];

export const hockeyReasons = [
  {
    number: "03",
    title: "Greenest turf on the planet",
    accent: true,
    paragraphs: [
      "Poligras Tokyo GT and Platinum GT are manufactured with I'm green™ bio-polyethylene derived from sustainably grown sugar cane, verified by ASTM D6866. It saves carbon and uses up to a third less water during match irrigation.",
    ],
    points: [
      "Up to 60% BioBased PE verified by ASTM D6866",
      "Low water consumption down to 1 L/m²",
      "Manufactured using 100% green energy in Germany",
    ],
  },
  {
    number: "04",
    title: "Zero ball distortion & precision",
    accent: false,
    paragraphs: [
      "Uniquely texturized filaments eliminate grain bias, providing pure, true ball roll in every direction. The dense, multidirectional carpet enables fast passing and lightning 3D stickwork response under intense competitive conditions.",
    ],
    points: [],
  },
  {
    number: "05",
    title: "Patented CoolPlus heat reflection",
    accent: false,
    paragraphs: [
      "Polytan's CoolPlus technology incorporates specialized pigments directly onto the turf fibres that continuously and effectively reflect the infrared part of solar radiation. The pitch stays pleasantly cool even under extreme Indian summer heat.",
    ],
    points: [],
  },
  {
    number: "06",
    title: "PreciTex & Entanglement technology",
    accent: false,
    paragraphs: [
      "Patented filament engineering locks the turf matrix together, protecting against premature wear and ensuring permanent crimping. Available in classic field green, olive, London pink, and championship blue.",
    ],
    points: [],
  },
];

export const hockeyBenefits = [
  "Official surface supplier for 8 consecutive Olympic Games hockey tournaments",
  "FIH Global Category 1 (Water-Based) and National (Sand-Dressed) certified",
  "Proven execution across India's premier international stadia in Odisha, New Delhi, and Bihar",
  "Sub-base engineering, in-situ elastic shockpads, water cannons, and tournament floodlighting",
  "Patented CoolPlus thermal reduction keeps players safe and minimizes surface evaporation",
];

export interface HockeyProduct {
  id: string;
  name: string;
  image: string;
  imageAlt: string;
  type: string;
  file: string;
  badge?: string;
  paragraphs: string[];
  specs: string[];
}

export const hockeyProducts: HockeyProduct[] = [
  {
    id: "poligras-platinum-gt",
    name: "Poligras Platinum GT",
    image: "/background/ploigrass-platinum-gt.jpg",
    imageAlt: "Poligras Platinum GT synthetic hockey turf system",
    type: "Unfilled / Water-based hockey turf",
    file: "BROCHURE-POLIGRAS-PLATINUM-GT.pdf",
    badge: "Olympic Rio 2016 Heritage",
    paragraphs: [
      "Poligras Platinum GT is the latest logical development of the tried-and-tested Poligras Platinum CoolPlus, which was selected as the official turf for the hockey tournament at the Olympic Games in Rio in 2016.",
      "The filaments of the Platinum GT contain at least 20% polyethylene made from renewable raw materials, manufactured in Germany using 100% green energy. The result: a sustainable, attractively priced artificial hockey turf with a reduced CO2 footprint.",
      "Polytan PreciTex texturing technology ensures permanent crimping, delivering a multidirectional, ultra-closed surface — the perfect conditions for fast, precise play with optimal ball-rolling properties. The integrated CoolPlus function has a cooling effect and reduces water consumption.",
    ],
    specs: [
      "Filaments made from at least 20% renewable raw materials",
      "Manufactured in Germany using 100% green energy",
      "Monofilament turf fibres with approx. 110 μm thickness",
      "Exclusive Polytan CoolPlus function & PreciTex texturing",
      "MultiBack backing construction with FIH Global certification",
    ],
  },
  {
    id: "poligras-superplay",
    name: "Poligras SuperPlay",
    image: "/background/poligrass-superplay.jpg",
    imageAlt: "Poligras SuperPlay multipurpose synthetic turf system",
    type: "Sand-dressed / Multisport hockey turf",
    file: "Poligras-SuperPlay_Flyer-A4_EN_low-res.pdf",
    badge: "FIH National Certified",
    paragraphs: [
      "The partially filled Poligras SuperPlay brings versatility into play: its certification for official FIH National competitions makes it a true hockey pro. Meanwhile, Poligras SuperPlay is a versatile multi-sport turf suited for various types of sport thanks to its soft touch and high resistance.",
      "The filaments, developed specially for Poligras SuperPlay, offer vital performance characteristics for sand-dressed pitches: thanks to their 100% PE composition, they are both super soft and extremely durable, reducing the risk of sliding abrasion injuries.",
      "High filament density provides a realistic feel that rivals an unfilled pitch. Another special feature is the BiColour colour scheme: filaments in two different shades of green give Poligras SuperPlay an attractive, natural look.",
    ],
    specs: [
      "Eight monofilaments with approx. 185 μm fibre thickness",
      "Certified for official FIH National competitions",
      "Exclusive PolyCoat PU coating with TuftGuard protection",
      "BiColour dual-shade green natural grass aesthetic",
      "100% PE soft-touch composition with sand-dressed infill",
    ],
  },
  {
    id: "poligras-tokyo-gt",
    name: "Poligras Tokyo GT",
    image: "/background/poligrass-tokyo-gt.jpg",
    imageAlt: "Poligras Tokyo GT Olympic hockey turf system",
    type: "Sustainable Olympic Turf",
    file: "POLIGRAS-GT-CATALOGUE-two-page.pdf",
    badge: "Tokyo 2020 Olympic Games",
    paragraphs: [
      "With the Poligras Tokyo GT hockey turf, Polytan brought to the market the first synthetic turf featuring filaments partly made from renewable raw materials. Chosen for the Tokyo 2020 Olympic Games, it sets the global benchmark for elite sporting performance and environmental stewardship.",
      "The I'm green™ bio-polyethylene is made from sustainably grown sugar cane by Braskem. Plant growth removes significantly more CO2 from the atmosphere than is released during production, creating a truly climate-positive raw material.",
      "Patented ENTANGLEMENT technology in the filaments means that the even, multidirectional surface remains stable in the long term and is protected against premature wear. Polytan's CoolPlus technology keeps the turf cool on hot days, and the turf uses up to a third less water during irrigation (down to 1 L/m²).",
    ],
    specs: [
      "60% Bio-Based PE verified by ASTM D6866",
      "Official turf of the Tokyo 2020 Olympic Games",
      "Low water consumption: up to 33% reduction (1 L/m²)",
      "Patented Entanglement technology against fibre wear",
      "PreciTex process engineering for highly uniform colour",
    ],
  },
  {
    id: "poligras-h20z",
    name: "Poligras H2OZ",
    image: "/background/Poligras-H2OZ-COOLplus-System.png",
    imageAlt: "Poligras H2OZ COOLplus system cross section",
    type: "Sand-dressed / Dry play system",
    file: "CATALOGUE-POLIGRAS-TERRA-CP-2018-EL-15-SAND.pdf",
    badge: "Proven Dry-Play System",
    paragraphs: [
      "Poligras® H2OZ COOLplus® is an FIH Approved system designed for high standard matches in locations where water irrigation is unavailable, restricted, or not installed.",
      "Acceptance of the system has been immediate from top players, with fields showing quality wear and play characteristics. Multisport activity extends to these fields, adding further utility and assisting with distribution of wear factors.",
      "The system exhibits excellent UV stability and durability due to the exclusive monofilament yarn design. Strip glue adhesion is utilised to provide dimensional stability and enable proven reuse of the elastic layer underlay.",
    ],
    specs: [
      "Meets all FIH approval requirements for sand-dressed hockey surfacing",
      "Proven 'dry play' un-irrigated performance without risk of player injury",
      "Exclusive monofilament yarn design with high UV stability",
      "Strip glue adhesion enabling reuse of elastic layer underlay",
      "Multisport flexibility for school and municipal facilities",
    ],
  },
  {
    id: "ligagrass-pro",
    name: "LigaGrass Pro",
    image: "/background/LigaGrassPro.jpg",
    imageAlt: "LigaGrass Pro crimped synthetic turf system",
    type: "Crimped multisport & hockey turf",
    file: "POLIGRAS-GT-CATALOGUE-two-page.pdf",
    badge: "Dual FIFA & FIH Certified",
    paragraphs: [
      "Polytan is a pioneer in developing texturised turf systems. With LigaGrass Pro CoolPlus, functional filament cross-sections with a thickness of up to 250 μm can now be processed easily thanks to new Polytan PreciTex texturing technology.",
      "The LigaGrass Pro filament with its triangular cross-section ensures even better fibre stability and gives the turf more volume and texture. Compared to its predecessor, this fibre is approximately 18% wider, providing greater coverage and a more uniform appearance.",
      "Polytan's first crimped synthetic turf features a BiColour design with rich shades of green. Continuous CoolPlus function effectively reflects thermal radiation. Suitable for multifunctional use as demonstrated by both FIFA and FIH certifications.",
    ],
    specs: [
      "Functional triangular filament cross-section with ~250 μm thickness",
      "18% wider fibre providing greater coverage and uniform look",
      "Dual FIFA and FIH certifications for multifunctional usage",
      "Continuous CoolPlus infrared thermal reflection",
      "Subject to stringent RAL quality assurance checks",
    ],
  },
];
