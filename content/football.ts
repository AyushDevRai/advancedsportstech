// Published copy from https://ast-sports.com/ligaturf/ and https://ast-sports.com/football/
// Official AST LigaTurf Football Turf product catalog.

export const footballOverview = [
  "No other sport enjoys more popularity than football. Traditionally played on grass, for many years football has been increasingly played on synthetic turf. Polytan synthetic turf systems provide the perfect playing properties for this team sport, characterised by its dynamics, tactics and speed. Especially in training centres and municipal club facilities, where space is scarce and many teams share facilities in order to train, synthetic turf, with its reduced need for resources when it comes to maintenance, is the best alternative and most sustainable solution to grass.",
  "The specific properties that give the edge when playing and running are achieved through a sophisticated synthetic turf construction and fibre geometry tailor-made for football. The elastic base layer additionally ensures optimum shock absorption and protects players against injury. The patented CoolPlus function prevents the playing surface from heating up on hot summer days.",
  "As an experienced synthetic turf manufacturer, we know that long service life of the synthetic turf, as well as simplified care, maintenance and servicing, are particularly important, especially in much-used stress zones. We provide synthetic turf systems that are filled with our sustainable Fusion GT infill or, alternatively, with sand and cork. Unfilled systems are also available. Our Green Technology products are particularly environmentally friendly, and are manufactured with up to 70% organic-based raw materials obtained from sustainable agriculture and from a CO2-reduced process.",
];

export const footballHistory =
  "The incredible success story of the LigaTurf brand began over 16 years ago and to this day the artificial turf continues to serve as the preferred surface at elite-level stadiums, training centres and sports clubs around the world. As the first football turf system to feature a straight monofilament, LigaTurf sparked a revolution in the artificial turf market. Often imitated but never duplicated, LigaTurf remains one of the most popular FIFA-certified football turf systems. We also set a new industry standard recently with the introduction of the world’s first carbon-neutral artificial turf, LigaTurf Cross GTzero.";

export const footballStatistics = [
  { value: "16+", text: "Years of LigaTurf leadership at elite stadiums and training centres worldwide" },
  { value: "100%", text: "Carbon-neutral footprint achieved with LigaTurf Cross GT zero" },
  { value: "70%+", text: "Organic bio-based raw materials in Polytan Green Technology products" },
];

export const eliteFootballVenues = [
  "FIFA Headquarters, Zurich (Official Installation)",
  "Elite Bundesliga & European Professional Football Clubs",
  "FIFA Quality & FIFA Quality Pro Certified Stadiums & Academies",
  "Premier Indian Stadiums, Sports Universities & Training Complexes",
];

export const footballReasons = [
  {
    number: "03",
    title: "World’s first 100% CO2-neutral turf",
    accent: true,
    paragraphs: [
      "With LigaTurf Cross GT zero, Polytan created the first carbon-neutral football pitch for professional and amateur sports. Filaments are made from up to 70% bio-based raw materials from sustainable agriculture, delivering maximum environmental compatibility without sacrificing durability or ball performance.",
    ],
    points: [
      "Up to 70% bio-based polyethylene raw materials",
      "100% climate-neutral footprint verified by life cycle analysis",
      "Manufactured with 100% green energy in Germany",
    ],
  },
  {
    number: "04",
    title: "Natural grass ball rolling & kinematics",
    accent: false,
    paragraphs: [
      "Innovative filament geometries—including multi-shape, diamond cross-sections, and hybrid crimped matrices—replicate the exact ball bounce, roll speed, and shoe-surface traction of pristine natural grass, verified under strict FIFA Quality Pro testing protocols.",
    ],
    points: [],
  },
  {
    number: "05",
    title: "Patented CoolPlus heat reflection",
    accent: false,
    paragraphs: [
      "Polytan's CoolPlus technology incorporates infrared-reflecting pigments directly into the turf fibres, dramatically lowering the pitch surface temperature during hot Indian summers and preventing thermal fatigue for players.",
    ],
    points: [],
  },
  {
    number: "06",
    title: "50% lower infill usage & better retention",
    accent: false,
    paragraphs: [
      "By combining straight monofilaments with textured LigaGrass Pro fibres, the turf carpet locks infill granules in place, reducing splash, preventing microplastic discharge, and cutting rubber infill requirements by up to 50%.",
    ],
    points: [],
  },
];

export const footballBenefits = [
  "Selected for the FIFA Headquarters and certified to FIFA Quality and Quality Pro standards",
  "Engineered with in-situ elastic shockpads (e-layers) for maximum shock absorption and injury prevention",
  "Patented CoolPlus technology keeps the pitch significantly cooler under intense sun",
  "Up to 50% lower rubber infill consumption with superior infill retention and reduced splash",
  "Versatile infill solutions: sustainable Fusion GT, natural sand and cork, or 100% unfilled systems",
  "Comprehensive turnkey execution across India: civil sub-base, drainage, turf laying, FIFA line marking, and AMC",
];

export interface FootballProduct {
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

export const footballProducts: FootballProduct[] = [
  {
    id: "ligaturf-cross",
    name: "LigaTurf Cross",
    image: "/imageFootball/LIGATURF-CROSS.jpg",
    imageAlt: "LigaTurf Cross hybrid synthetic football turf system",
    type: "Hybrid straight & textured football turf",
    file: "POLIGRAS-GT-CATALOGUE-two-page.pdf",
    badge: "The Best of Two Worlds",
    paragraphs: [
      "Everyone’s talking about hybrid technology, which makes it possible to achieve additional benefits through the symbiosis of varying material properties in products that are already successfully established. Following nature’s example, we develop our products in such a way that they adapt beautifully to new requirements.",
      "The new Polytan LigaTurf Cross turf is the best evidence of this; it combines smooth with textured filaments. The benefits of both turf types come together to create an ideal football turf. The straight LigaTurf RS+ CP filaments mean users of the LigaTurf Cross experience the look and feel of a real football turf that is already successfully in use in professional sport worldwide.",
      "At the same time, thanks to the textured filaments of the LigaGrass Pro CP, the system offers easy and reduced care and maintenance, better infill stabilisation and greater turf volume.",
    ],
    specs: [
      "Combination of smooth (fibre thickness 360 μm) and textured (fibre thickness 250 μm) filaments",
      "Exclusive Polytan PreciTex texturising technology",
      "Exclusive Polytan CoolPlus heat-reflection function",
      "Exclusive Polytan 100% PE formulation for maximum softness and wear resistance",
      "Bi-colour natural pitch aesthetic with superior infill retention",
      "Areas of use: Professional training grounds, amateur & professional clubs, sports colleges",
    ],
  },
  {
    id: "ligaturf-cross-gt-zero",
    name: "LigaTurf Cross GT Zero",
    image: "/imageFootball/LIGATURF-CROSS-GT-ZERO.jpg",
    imageAlt: "LigaTurf Cross GT zero carbon-neutral football turf system",
    type: "100% CO2-neutral synthetic football turf",
    file: "POLIGRAS-GT-CATALOGUE-two-page.pdf",
    badge: "World’s 1st CO2-Neutral Pitch",
    paragraphs: [
      "With the LigaTurf Cross GT zero, Polytan is offering the first CO2-neutral football pitch for professional and amateur sports. Without sacrificing durability and performance characteristics, Polytan has created a product that combines the challenges of environmental sustainability, climate compatibility and player demands.",
      "The LigaTurf Cross GT zero is derived from the successful LigaTurf Cross product line, whose product launch in 2016 revolutionised the football pitch. For the first time, one turf system has incorporated the needs of municipal and private investors and the requirements of players and users.",
      "The combination of crimped LigaGrass Pro filaments with Polytan PreciTex technology and the smooth LigaTurf RS+ filament makes it a real bestseller. The reasons for its success are natural grass-like appearance, perfect playing characteristics, simplified maintenance, approx. 50 percent lower use of rubber granulate, and improved retention of infill granules.",
    ],
    specs: [
      "Green Technology Inside: Filaments from up to 70% bio-based raw material (PE)",
      "100% carbon-neutral footprint across manufacturing and materials",
      "Combination of smooth (360 μm) and textured (250 μm) turf filaments",
      "Increased stitch density for ~50% less granulate usage and even better retention capacity",
      "Full FIFA Quality and FIFA Quality Pro certification compliance",
      "Areas of use: Amateur & professional clubs, sports schools, communal municipal facilities",
    ],
  },
  {
    id: "ligaturf-legend-pro",
    name: "LigaTurf Legend Pro",
    image: "/imageFootball/LIGATURF-LEGEND-PRO.jpg",
    imageAlt: "LigaTurf Legend Pro multi-shape filament football turf",
    type: "Elite multi-shape filament football turf",
    file: "POLIGRAS-GT-CATALOGUE-two-page.pdf",
    badge: "The Powerhouse for Demanding Clubs",
    paragraphs: [
      "LigaTurf Legend Pro is a real powerhouse when it comes to performance: With its entirely redeveloped multi-shape filament cross-section, LigaTurf Legend Pro football turf achieves optimum fibre resilience.",
      "As a result, it offers perfect sport-specific performance – as shown by the turf’s certification in accordance with various international standards. The newly designed cross-section also achieves ball rolling and play properties similar to those achieved with natural grass.",
      "Visually, the larger filament width provides good coverage and – together with the BiColour design – ensures that the playing field looks fresh and natural. High wear protection has been verified in extensive laboratory tests, ensuring lasting sustainability and resilience under intensive match schedules.",
    ],
    specs: [
      "Monofilament turf fibres with approx. 365 μm fibre thickness",
      "Exclusive Polytan 100% PE formulation",
      "Newly developed multi-shape cross-section for maximum elastic resilience",
      "BiColour design providing a lush, natural grass appearance",
      "High wear protection verified in rigorous RAL and FIFA laboratory stress tests",
      "Areas of use: Professional training facilities, amateur & professional clubs, sports universities",
    ],
  },
  {
    id: "ligaturf-motion-pro",
    name: "LigaTurf Motion Pro",
    image: "/imageFootball/LIGATURF-MOTION-PRO.jpg",
    imageAlt: "LigaTurf Motion Pro unfilled sand-weighted football turf",
    type: "Unfilled / Multi-filament football turf",
    file: "POLIGRAS-GT-CATALOGUE-two-page.pdf",
    badge: "Rubber-Free Playing Comfort",
    paragraphs: [
      "The new Polytan LigaTurf Motion Pro combines the advantages of three different filaments to deliver perfect playing comfort, durability and easy care in one product: The smooth, gently protruding LigaTurf Legend Pro fibres result in a stunning appearance and a soft feel, providing ideal ball-rolling characteristics.",
      "The textured filaments of the tried-and-tested LigaGrass Pro system bring stability and traction into play. A third component gives the new LigaTurf Motion Pro its lush, voluminous feel: the textured fibres of the extra fine and soft Synergy yarn.",
      "Our new multipurpose turf, which is completely free from rubber filling and weighted with approx. 15 kg/m² sand, is durable, UV-resistant, and features exclusive PolyCoat PU coating with TuftGuard function for outstanding tuft lock and dimensional stability.",
    ],
    specs: [
      "Unfilled turf system — completely free from rubber-granulate infill",
      "Three distinct filaments with 100% monofilament technology (TriColour palette)",
      "100% PolyCoat PU coating with TuftGuard function for superior tuft lock",
      "Over 500,000 filaments per m² with exclusive Polytan PreciTex texturing",
      "Sand-weighted (~15 kg/m²) on an elastic base layer for stability and player safety",
      "Areas of use: Clubs, training grounds, multi-purpose school & communal facilities",
    ],
  },
  {
    id: "ligaturf-rs-pro-ii",
    name: "LigaTurf RS Pro II",
    image: "/imageFootball/LIGATURF-RS-PRO-II.jpg",
    imageAlt: "LigaTurf RS Pro II professional football turf system",
    type: "Elite professional football turf",
    file: "POLIGRAS-GT-CATALOGUE-two-page.pdf",
    badge: "Play Like the Professionals",
    paragraphs: [
      "LigaTurf RS Pro II is the new elite product for professional football turf systems. Thanks to its intelligent yarn design and exclusive material composition, it is in a league of its own when it comes to both playing qualities and wear resistance.",
      "Our innovative ENTANGLEMENT technology helps to ensure that the filament remains soft despite the larger cross-section thickness, while also providing excellent protection against wear and tear. The optimized cross section ensures outstanding recovery capacity and makes the turf easier to maintain.",
      "The natural feel of the playing surface therefore lasts even longer without requiring added maintenance work. The wide, two-tone filaments improve both appearance and coverage of the turf while also keeping the level of splash to an absolute minimum.",
    ],
    specs: [
      "Heavyweight monofilament turf fibres with approx. 400 μm fibre thickness",
      "Exclusive Polytan CoolPlus heat-reflection technology",
      "Innovative Polytan ENTANGLEMENT technology for lasting fibre softness and resilience",
      "Finely tuned cross-section design minimizing infill splash and maintenance cycles",
      "Full FIFA Quality Pro performance certification",
      "Areas of use: International stadiums, professional training grounds, clubs, sports colleges",
    ],
  },
  {
    id: "ligaturf-rs-plus",
    name: "LigaTurf RS+",
    image: "/imageFootball/LIGATURF-RS.jpg",
    imageAlt: "LigaTurf RS+ synthetic football pitch selected for FIFA headquarters",
    type: "FIFA Headquarters benchmark turf",
    file: "POLIGRAS-GT-CATALOGUE-two-page.pdf",
    badge: "Selected for FIFA Headquarters",
    paragraphs: [
      "The LigaTurf RS+ system is the legendary benchmark for football turf filaments worldwide. As the first football turf system to feature a straight monofilament with optimized diamond cross-section geometry, it sparked a revolution across the international artificial turf industry.",
      "Often imitated but never duplicated, LigaTurf RS+ continues to serve as the preferred surface at elite stadiums and was officially selected for the FIFA Headquarters in Zurich. Its heavy rhomboid filament cross-section provides outstanding resistance to cleat traction while maintaining optimal ball roll.",
      "Compatible with high-performance organic infills like cork and Fusion GT as well as traditional sand-rubber systems, LigaTurf RS+ delivers the authentic kinesthetics of championship natural grass under year-round intensive match loads.",
    ],
    specs: [
      "Rhomboid diamond monofilament cross-section with ~360 μm thickness",
      "Official surface selected for the FIFA Headquarters in Zurich",
      "Exceptional wear resistance against intensive cleat traction and sliding",
      "Compatible with sustainable Fusion GT, cork, or sand infill systems",
      "Tested and certified to FIFA Quality and Quality Pro criteria",
      "Areas of use: Elite competition stadiums, FIFA academies, university sports facilities",
    ],
  },
];
