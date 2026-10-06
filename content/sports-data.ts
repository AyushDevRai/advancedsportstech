export interface SportDetail {
  slug: string;
  name: string;
  title: string;
  tagline: string;
  badge: string;
  category: "Track & Field" | "Team Sports" | "Court & Flooring";
  videoUrl?: string;
  poster: string;
  overview: string;
  certifications: string[];
  aboutHeading: string;
  aboutText: string[];
  cadImage: string;
  advantages: { title: string; description: string; icon: string }[];
  products: {
    title: string;
    image: string;
    description: string;
    specs?: string[];
    pdf?: string;
  }[];
}

export const sportsData: Record<string, SportDetail> = {
  "athletic-tracks": {
    slug: "athletic-tracks",
    name: "Athletic Tracks",
    title: "High-Performance Athletic Tracks",
    tagline: "Engineered for Champions, Built for Durability. Experience the perfect blend of technology and performance.",
    badge: "World Athletics Certified",
    category: "Track & Field",
    videoUrl: "https://res.cloudinary.com/ddrzgbhnl/video/upload/v1763357125/DJI_0320_pjbq5e_qwh5y1.mp4",
    poster: "/Fallback/athletic.jpg",
    overview: "World Athletics certified synthetic running tracks engineered for optimal force reduction, energy restitution, and year-round all-weather endurance.",
    certifications: ["World Athletics Class 1 & 2", "IAAF Compliant", "ISO 9001 Certified"],
    aboutHeading: "About Our World-Class Tracks",
    aboutText: [
      "We specialize in the design, construction, and installation of high-performance athletic tracks. As the exclusive partner of Polytan / SportGroup Germany, our commitment to quality and innovation has made us a leader in the industry, providing world-class surfaces for athletes at all levels.",
      "Our tracks are built to meet the stringent standards of international athletic federations, ensuring optimal performance, athlete safety with calibrated shock absorption, and decades of longevity under all climatic conditions."
    ],
    cadImage: "/Product Images/athletics track/CAD Case+study+image+-+Qatar .webp",
    advantages: [
      { title: "Superior Materials", description: "Highest-grade, eco-friendly polyurethane and virgin EPDM granules for a resilient and seamless surface.", icon: "ShieldCheck" },
      { title: "Certified Performance", description: "Tracks certified by World Athletics for Olympic and Commonwealth competition-level speed and safety.", icon: "Award" },
      { title: "Athlete Safety", description: "Engineered shock absorption and force reduction to reduce athlete joint stress and injury risks.", icon: "Activity" },
      { title: "All-Weather Durability", description: "Formulated to withstand extreme Indian summer heat, monsoon deluges, and UV exposure without degradation.", icon: "Sun" },
      { title: "Expert Installation", description: "Installed using specialized imported German paving machinery and certified engineering crews.", icon: "Wrench" },
      { title: "Customizable Design", description: "Available in standard terracotta red, brilliant blue, or custom club colours with precision laser line marking.", icon: "Layers" },
    ],
    products: [
      {
        title: "Rekortan M99",
        image: "/Product Images/athletics track/Rekortan-M99-final.png",
        description: "World Athletics certified 15mm impermeable full-pour system featuring 3 specialized layers. The Base Layer has a self-leveling formulation for predictable footing. The Force Reduction Layer balances energy return and safety.",
        specs: ["15mm Full Pour System", "Impermeable Micro-foam Layer", "World Athletics Class 1 Certified"],
        pdf: "/pdf/REKORTAN-M99.pdf"
      },
      {
        title: "Rekortan PUR E",
        image: "/Product Images/athletics track/pur-E-final.png",
        description: "Solid synthetic surface ideal for best times, records and international elite sport. The combination of an elastic base layer and solid structure provides optimum conditions for acceleration and energy restitution.",
        specs: ["Solid Polyurethane Matrix", "Maximum Acceleration Response", "Elite Stadium Grade"],
        pdf: "/pdf/Rekortan-PUR-E-.pdf"
      },
      {
        title: "Rekortan M",
        image: "/Product Images/athletics track/M-final.png",
        description: "World Athletics certified impermeable sandwich system featuring 2 distinct layers. The paved rubber base layer delivers force reduction and moisture sealing, topped with a dense matrix of PU and rubber granules.",
        specs: ["Sandwich Construction", "Cost-effective High Durability", "IAAF Certified"],
        pdf: "/pdf/REKORTAN-M.pdf"
      }
    ]
  },
  "hockey-track": {
    slug: "hockey-track",
    name: "Hockey Turf",
    title: "International Standard Hockey Turfs",
    tagline: "Unrivaled ball roll, multidirectional grip, and precision water management engineered for elite competition.",
    badge: "FIH Global & National Certified",
    category: "Team Sports",
    videoUrl: "https://res.cloudinary.com/ddrzgbhnl/video/upload/v1763356856/SAI_BANGALORE_TRACK_brcsvm_ndou8p.mp4",
    poster: "/Fallback/Hockey.jpg",
    overview: "Olympic-proven hockey surfaces engineered with Poligras turf, chosen for the Olympic Games (Tokyo, Rio, London, Paris) and the FIH World Cups in Odisha.",
    certifications: ["FIH Global Category 1", "FIH Preferred Supplier", "Olympic Tested"],
    aboutHeading: "Pioneering Elite Hockey in India",
    aboutText: [
      "AST is the trusted contractor behind India's premier hockey stadiums, including the FIH Men's Hockey World Cup venues in Odisha, Major Dhyan Chand National Stadium in New Delhi, and Rajgir Hockey Stadium in Bihar.",
      "Our Poligras turf formulations incorporate sustainable sugarcane-based polyolefins, low water absorption technology, and non-directional yarn geometry for the truest ball roll in the sport."
    ],
    cadImage: "/Product Images/Hockey Track/MajorDhyanChandNationalStadium_India_3dmodel_G_G_1_720x@2x.png.webp",
    advantages: [
      { title: "Olympic Heritage", description: "Poligras is the turf of choice for 8 Olympic Games and major FIH World Cups worldwide.", icon: "Award" },
      { title: "True Ball Roll", description: "Zero directional bias ensures predictable ball speeds, true bounces, and lightning 3D skills.", icon: "Activity" },
      { title: "Water Reduction Tech", description: "Advanced texturized filaments retain moisture up to 40% longer, cutting irrigation requirements.", icon: "ShieldCheck" },
      { title: "Player Protection", description: "Elastic in-situ shockpad absorbs impacts, protecting knees and hips during intensive gameplay.", icon: "Layers" },
      { title: "Extreme Wear Resistance", description: "High dtex monofilament fibers engineered to withstand over 3,000 hours of aggressive hockey play.", icon: "Sun" },
      { title: "Turnkey Pitch Drainage", description: "Sub-base construction with rapid gravity drainage prevents puddling even in heavy monsoon showers.", icon: "Wrench" },
    ],
    products: [
      {
        title: "Poligras Tokyo GT",
        image: "/Product Images/Hockey Track/poligrass-tokyo-gt.jpg",
        description: "The official turf of the Tokyo Olympic Games. Formulated with 60% bio-based polyethylene derived from sugarcane, delivering the fastest, most predictable ball action ever developed.",
        specs: ["Bio-Based PE Filaments", "FIH Global Certified", "Olympic Benchmark"],
        pdf: "/pdf/POLIGRAS-GT-CATALOGUE-two-page.pdf"
      },
      {
        title: "Poligras Platinum GT",
        image: "/Product Images/Hockey Track/ploigrass-platinum-gt.jpg",
        description: "The proven championship surface trusted across Europe and Asia for continental club championships and elite national training centers.",
        specs: ["Texturized Monofilament", "High Tuft Density", "FIH Certified"],
        pdf: "/pdf/BROCHURE-POLIGRAS-PLATINUM-GT.pdf"
      },
      {
        title: "Poligras SuperPlay",
        image: "/Product Images/Hockey Track/poligrass-superplay.jpg",
        description: "Versatile sand-dressed and un-filled multi-sport hockey surface ideal for universities, academies, and competitive municipal complexes.",
        specs: ["Sand-Dressed Hybrid", "Multi-Sport Capable", "Extended Lifespan"],
        pdf: "/pdf/Poligras-SuperPlay_Flyer-A4_EN_low-res.pdf"
      }
    ]
  },
  "football": {
    slug: "football",
    name: "Football Turf",
    title: "FIFA-Quality Synthetic Football Turfs",
    tagline: "Natural grass aesthetics, resilient fiber recovery, and consistent ball rebound for 24/7 football excellence.",
    badge: "FIFA Quality Pro Ready",
    category: "Team Sports",
    videoUrl: "https://res.cloudinary.com/ddrzgbhnl/video/upload/v1763356553/football-field-aerial-view-2023-11-27-05-03-11-utc-2-2_rgoumk_ptob95.mp4",
    poster: "/Fallback/Football.jpg",
    overview: "Professional-grade LigaTurf systems engineered to meet FIFA Quality and FIFA Quality Pro certification standards.",
    certifications: ["FIFA Quality Pro Certified", "FIFA Preferred Provider", "EN 15330-1 Compliant"],
    aboutHeading: "Engineered for 90 Minutes & Beyond",
    aboutText: [
      "Natural turf pitches in India deteriorate rapidly under intensive use and harsh weather. AST's LigaTurf synthetic football systems deliver non-stop playability 365 days a year without bald patches or muddy goalmouths.",
      "With patented cross-shaped and diamond-section filament technologies, our football pitches maintain upright blade recovery and uniform stud traction throughout years of tournament use."
    ],
    cadImage: "/Product Images/Football/3b8c3adb43a8677bf906f7fa66a47ede.jpg",
    advantages: [
      { title: "FIFA Certified Systems", description: "Engineered to achieve FIFA Quality and Quality Pro performance metrics for torque and ball roll.", icon: "Award" },
      { title: "Natural Blade Feel", description: "Soft touch filaments minimize skin friction and rug burns during aggressive slide tackles.", icon: "Activity" },
      { title: "Advanced Infill Dynamics", description: "Eco-friendly EPDM or organic TPE infill options maintain optimal firmness and temperature stability.", icon: "ShieldCheck" },
      { title: "UV Color Fastness", description: "Premium German masterbatch pigments resist fading even under tropical Indian UV exposure.", icon: "Sun" },
      { title: "Engineered Shockpad", description: "In-situ paved elastic layers eliminate hard compaction and protect athletes from concussion trauma.", icon: "Layers" },
      { title: "Turnkey Pitch Execution", description: "Comprehensive laser leveling, sub-base drainage, perimeter fencing, and FIFA-standard floodlighting.", icon: "Wrench" },
    ],
    products: [
      {
        title: "LigaTurf Cross",
        image: "/Product Images/Football/LIGATURF-CROSS.jpg",
        description: "The ultimate hybrid system combining smooth straight filaments with texturized crimped fibers for maximum infill retention and natural ball control.",
        specs: ["Combination Monofilament", "High Infill Stability", "FIFA Quality Pro"]
      },
      {
        title: "LigaTurf RS Pro II",
        image: "/Product Images/Football/LIGATURF-RS-PRO-II.jpg",
        description: "Heavy-duty rhombus-shaped fibers delivering superior upright memory and resilience for stadium football.",
        specs: ["Rhombus Monofilament", "Extreme Recovery", "Elite Stadium Grade"]
      },
      {
        title: "LigaTurf Motion Pro",
        image: "/Product Images/Football/LIGATURF-MOTION-PRO.jpg",
        description: "High durability system tailored for training academies, commercial turf arenas, and multisport school complexes.",
        specs: ["Cost-Effective System", "Low Maintenance", "Multi-use Ready"]
      }
    ]
  },
  "wooden-flooring": {
    slug: "wooden-flooring",
    name: "Wooden Flooring",
    title: "Premium Hardwood Sports Flooring",
    tagline: "Natural maple and teak systems with DIN-certified area elastic shock absorption for elite indoor arenas.",
    badge: "FIBA & BWF Certified",
    category: "Court & Flooring",
    videoUrl: "https://res.cloudinary.com/ddrzgbhnl/video/upload/v1763361824/1117_jspioa.mp4",
    poster: "/Fallback/Wooden.jpg",
    overview: "Area-elastic wooden sports floors manufactured from seasoned North American Hard Maple, Teak, and Oak, engineered for basketball, badminton, and squash.",
    certifications: ["FIBA Level 1 & 2 Approved", "BWF Grade 1 Certified", "DIN 18032-2 Standard"],
    aboutHeading: "Acoustics, Aesthetics & Athletic Performance",
    aboutText: [
      "AST supplies and installs world-class sprung wooden sports flooring systems designed to absorb high-impact athletic energy while delivering lively, uniform ball bounce across the entire court.",
      "Featuring double-batten sub-frame cushion systems with neoprene shock pads and tongue-and-groove precision milling, our wood floors resist seasonal expansion and deliver generational durability."
    ],
    cadImage: "/Product Images/Wooden Flooring/CAD.jpg",
    advantages: [
      { title: "North American Maple", description: "First-grade dense hard maple offering tight grain, resistance to splintering, and brilliant court clarity.", icon: "ShieldCheck" },
      { title: "Area-Elastic Cushions", description: "Dual-sprung sleeper sub-systems dissipate kinetic forces evenly to safeguard athlete joints.", icon: "Activity" },
      { title: "FIBA Level 1 Certified", description: "Compliant with international basketball federation standards for friction, bounce, and vertical deflection.", icon: "Award" },
      { title: "Anti-Skid Polyurethane", description: "Multi-coat specialized sports polyurethane lacquer provides calibrated traction without shoe stickiness.", icon: "Layers" },
      { title: "Moisture Protection Barrier", description: "High-gauge vapor membranes and kiln-dried timber prevent warping during humid monsoon seasons.", icon: "Sun" },
      { title: "Turnkey Court Line Marking", description: "Multi-sport line striping for basketball, badminton, and volleyball with crisp federation dimensions.", icon: "Wrench" },
    ],
    products: [
      {
        title: "North American Maple System",
        image: "/Product Images/Wooden Flooring/Premium-Clear-Room-Scene.jpg",
        description: "The gold standard for competitive basketball and indoor stadiums worldwide. 21mm thick solid maple tongue-and-groove planks on dual-cushioned subframes.",
        specs: ["21mm Hard Maple", "FIBA Level 1 Certified", "BWF Grade 1 Compliant"]
      },
      {
        title: "Teak Sports Flooring",
        image: "/Product Images/Wooden Flooring/Teak.jpeg",
        description: "Durable tropical hardwood offering natural moisture resistance and rich timber aesthetics, tailored for multipurpose university arenas.",
        specs: ["Seasoned Teak Timber", "High Humidity Resilience", "Multi-sport Application"]
      },
      {
        title: "Fawn Oak Plank System",
        image: "/Product Images/Wooden Flooring/FAWN-OAK-PLANK.jpeg",
        description: "Architectural grade sports oak providing robust wear characteristics and refined modern aesthetics for premium health clubs and courts.",
        specs: ["European Oak", "High Dimensional Stability", "Low VOC Finish"]
      }
    ]
  },
  "indoor-flooring": {
    slug: "indoor-flooring",
    name: "Indoor Flooring",
    title: "Multipurpose Synthetic Indoor Flooring",
    tagline: "Point-elastic and combi-elastic vinyl, polyurethane, and rubber surfaces for multi-sport gymnasiums.",
    badge: "EN 14904 Compliant",
    category: "Court & Flooring",
    videoUrl: "https://res.cloudinary.com/ddrzgbhnl/video/upload/v1763356657/indoor-volleyball-and-basketball-courts-are-empty-4k-2025-06-09-04-44-07-utc-2_dgtn7k_nsgh8e.mov",
    poster: "/Fallback/Indoor_Volleyball.jpg",
    overview: "High-performance indoor polyurethane and PVC sports surfaces offering point-elastic comfort, antibacterial hygiene, and easy maintenance.",
    certifications: ["EN 14904 European Standard", "BWF Certified", "Fire Resistance Class Bfl-s1"],
    aboutHeading: "Versatility Without Compromise",
    aboutText: [
      "AST's indoor synthetic flooring systems are designed for multidisciplinary athletic facilities where basketball, volleyball, badminton, futsal, and school assemblies share the same arena.",
      "Our seamless polyurethane and heavy-duty cushioned vinyl floors provide uniform friction, sound dampening, and resistance against heavy rolling loads such as bleachers and staging."
    ],
    cadImage: "/Product Images/Indoor Flooring/940477671f84bff945a419527b362fd97418ef22.jpeg",
    advantages: [
      { title: "Point-Elastic Cushioning", description: "Foam backing cushions localized point impacts to protect young athletes and school children.", icon: "Activity" },
      { title: "Seamless PU Coating", description: "Monolithic polyurethane surface without joints or seams eliminates dirt traps and bacterial buildup.", icon: "ShieldCheck" },
      { title: "Multi-Sport Markings", description: "Precision color-coded line marking accommodates 4+ simultaneous sports on a single floor.", icon: "Layers" },
      { title: "Rolling Load Resistance", description: "Engineered to withstand heavy bleachers, maintenance lifts, and exam tables without indentation.", icon: "Wrench" },
      { title: "Hygienic & Low Maintenance", description: "Non-porous polyurethane top coat cleans easily with standard scrubber-dryers.", icon: "Award" },
      { title: "Custom Color Palettes", description: "Available in 20+ solid and wood-grain patterns to align with institutional branding.", icon: "Sun" },
    ],
    products: [
      {
        title: "Seamless PU Sports Surface",
        image: "/Product Images/Indoor Flooring/PU-SURFACE-main.jpg",
        description: "Poured seamless polyurethane system with pre-fabricated rubber shockpad, delivering unmatched durability and uniform bounce.",
        specs: ["Point Elastic System", "Seamless Finish", "Multisport Ready"]
      },
      {
        title: "Heavy-Duty Rubber Flooring",
        image: "/Product Images/Indoor Flooring/rubber.jpg",
        description: "High-density vulcanized rubber flooring for fitness suites, sprint corridors, crossfit zones, and heavy weightlifting areas.",
        specs: ["Vulcanized Natural Rubber", "Extreme Impact Resistance", "Acoustic Dampening"]
      },
      {
        title: "Cushioned PVC Vinyl Matting",
        image: "/Product Images/Indoor Flooring/wood sports.jpg",
        description: "Multi-layer vinyl sports flooring with high-density closed-cell foam backing, ideal for school gymnasiums and badminton courts.",
        specs: ["Multi-layer PVC", "Anti-Bacterial Sanitize", "Fast Installation"]
      }
    ]
  },
  "tennis": {
    slug: "tennis",
    name: "Tennis Courts",
    title: "Championship Synthetic Tennis Courts",
    tagline: "Cushioned acrylic hard courts and synthetic clay surfaces calibrated for tournament play and ITF ball speed pace.",
    badge: "ITF Classified Pace 2 - 4",
    category: "Court & Flooring",
    videoUrl: "https://res.cloudinary.com/ddrzgbhnl/video/upload/v1763355923/aerial-drone-shot-of-tennis-court-in-the-middle-of-1080p-2025-07-22-04-00-26-utc_i1hiql_llnx5x.mov",
    poster: "/Fallback/tennis_court.jpg",
    overview: "ITF-certified 8-layer cushioned acrylic court systems and synthetic clay courts offering true ball bounce, player comfort, and brilliant aesthetic contrast.",
    certifications: ["ITF Court Pace Certified", "ISO 9001 Certified", "UV Stable Formulations"],
    aboutHeading: "Pace, Precision & Player Longevity",
    aboutText: [
      "AST installs professional acrylic tennis surfaces engineered to maintain true ball pace and bounce across years of intensive play. Our multi-layer cushion systems reduce body fatigue by up to 25% compared to raw asphalt or concrete courts.",
      "Available in classic US Open Blue/Green, Australian Open Blue, and Roland Garros Clay styling, each court is laid with precision laser slope control for rapid drainage after rain."
    ],
    cadImage: "/Product Images/Tennis Court /tenniscourt1.png",
    advantages: [
      { title: "ITF Pace Classification", description: "Customizable speed ratings from Medium-Slow (Pace 2) to Medium-Fast (Pace 4) to suit tournament needs.", icon: "Award" },
      { title: "Cushioned Rubber Layers", description: "Multi-coat elastomeric rubber layers absorb shock and protect players' ankles, knees, and back.", icon: "Activity" },
      { title: "Glare-Free Texture", description: "100% acrylic latex formulated with graded silica sand provides uniform traction under sunny skies.", icon: "Sun" },
      { title: "Monsoon Drainage", description: "Precise sub-base gradients ensure surface water clears within 30 minutes of rain stopping.", icon: "ShieldCheck" },
      { title: "Vibrant Color Stability", description: "Fade-resistant inorganic pigments keep courts looking brand new despite intense tropical sunlight.", icon: "Layers" },
      { title: "Complete Accessories", description: "Includes turnkey installation of heavy-duty tennis posts, center straps, nets, and referee stands.", icon: "Wrench" },
    ],
    products: [
      {
        title: "Cushioned Hard Court System",
        image: "/Product Images/Tennis Court /tennis-court-2025-03-08-05-14-42-utc-2.jpg",
        description: "Premium 8-layer acrylic system featuring multiple layers of liquid rubber cushion for superior joint protection and consistent ball response.",
        specs: ["8-Layer Cushioned System", "ITF Pace 3 Medium", "Tournament Grade"]
      },
      {
        title: "Synthetic Clay Tennis Courts",
        image: "/Product Images/Tennis Court /claycourt.jpg",
        description: "Year-round clay court playing characteristics with minimal watering and roll maintenance, giving authentic slide and spin response.",
        specs: ["Synthetic Infill Clay", "Consistent Slide", "Low Upkeep"]
      },
      {
        title: "Synthetic Grass Tennis Turf",
        image: "/Product Images/Tennis Court /tennis-rackets-on-grass-2024-10-13-21-34-18-utc-2.jpg",
        description: "Dense sand-filled polyethylene turf delivering fast-paced grass court tennis with comfortable shock absorption and rapid drainage.",
        specs: ["Short Pile PE Turf", "Sand Filled", "Gentle on Joints"]
      }
    ]
  },
  "badminton": {
    slug: "badminton",
    name: "Badminton Courts",
    title: "BWF-Approved Badminton Courts",
    tagline: "Professional PVC sports mats and sprung hardwood subbases offering Olympic-grade traction and cushioning.",
    badge: "BWF Grade 1 Certified",
    category: "Court & Flooring",
    videoUrl: "https://res.cloudinary.com/ddrzgbhnl/video/upload/v1763546038/sports-young-woman-with-racket-and-shuttlecock-is-1080p-2025-08-29-00-29-16-utc_xm8ouw.mov",
    poster: "/Fallback/badminton.jpg",
    overview: "Specialized badminton flooring engineered with non-slip sand-pattern vinyl mats or sprung maple hardwood for explosive lunges and lightning recovery.",
    certifications: ["BWF Certified Grade 1", "EN 14904 Standard", "Anti-Skid DIN Tested"],
    aboutHeading: "Grip, Slide & Explosive Footwork",
    aboutText: [
      "Badminton requires instantaneous acceleration, abrupt deceleration, and high-impact landings. AST's court surfaces provide the calibrated micro-texture necessary to eliminate foot slip while preventing knee torque.",
      "We install both portable tournament BWF vinyl mats and permanent cushioned sprung subbases for academies, clubs, and sports complexes nationwide."
    ],
    cadImage: "/Product Images/Badminton/indoor-badminton-court-flooring-604.jpg",
    advantages: [
      { title: "BWF Tournament Approval", description: "Meets international badminton federation standards for tournament bounce, grip, and line contrast.", icon: "Award" },
      { title: "Calibrated Slip Resistance", description: "Specialized sand-textured surface provides dependable grip without trapping player footwear.", icon: "Activity" },
      { title: "Dense Foam Shock Absorption", description: "Multi-density closed-cell PVC foam layer absorbs heavy jump-smash impact forces.", icon: "ShieldCheck" },
      { title: "Weld-Free Laser Marking", description: "Standard regulation court lines applied with high-adhesion tournament contrast pigments.", icon: "Layers" },
      { title: "Easy Portability or Fixed", description: "Available as roll-out tournament mats with seam tape or permanent heat-welded installation.", icon: "Wrench" },
      { title: "Eco & Odor Free", description: "100% virgin PVC formulations free of harmful phthalates and harsh chemical odors.", icon: "Sun" },
    ],
    products: [
      {
        title: "BWF Approved PVC Court Mat",
        image: "/Product Images/Badminton/Badminton-Court-1.png",
        description: "Official 4.5mm - 7.0mm vinyl badminton court mat with sand pattern wear layer and high-density double fiberglass reinforcement.",
        specs: ["4.5mm - 7.0mm Thickness", "Sand-Texture Surface", "BWF Approved"]
      },
      {
        title: "Enlio BWF Competition Mat",
        image: "/Product Images/Badminton/Enlio-Bwf-Approved-PVC-Sport-Floor-Synthetic-Badminton-Court-Mat.avif",
        description: "Championship grade competition mat used in major BWF World Tour events with diamond wear layer and superior shock dissipation.",
        specs: ["BWF Grade 1", "Double Fiberglass Mesh", "Anti-Static Finish"]
      },
      {
        title: "Outdoor Synthetic Badminton Court",
        image: "/Product Images/Badminton/outdoor-acrylic-synthetic-badminton-court-1740131994-7881802.jpeg",
        description: "All-weather UV-stable acrylic badminton surface designed for outdoor parks, schools, and residential communities.",
        specs: ["All-Weather Acrylic", "UV Fade Resistant", "Zero Puddling Slope"]
      }
    ]
  },
  "basketball": {
    slug: "basketball",
    name: "Basketball Courts",
    title: "FIBA-Standard Basketball Courts",
    tagline: "Olympic sprung hardwood and modular polypropylene outdoor courts with uniform ball response and shock absorption.",
    badge: "FIBA Approved Standards",
    category: "Team Sports",
    videoUrl: "https://res.cloudinary.com/ddrzgbhnl/video/upload/v1763356173/basketball-court-1080p-2025-06-09-05-37-05-utc_ybrfnb_gs8zhd.mov",
    poster: "/Fallback/Basketball.jpg",
    overview: "Professional indoor and outdoor basketball court solutions including FIBA Level 1 hardwood maple, cushioned acrylic, and all-weather interlocking tiles.",
    certifications: ["FIBA Approved Level 1 & 2", "EN 14904 Certified", "DIN Shock Absorption"],
    aboutHeading: "True Bounce, High Traction, Zero Dead Spots",
    aboutText: [
      "A great basketball court requires uniform 99%+ ball rebound across every square foot of the hardwood. AST's engineered sub-frame designs eliminate dead spots and vibration reverberation.",
      "For outdoor facilities, our impact-cushioned acrylic courts and perforated modular polypropylene tiles withstand extreme heat, rain, and heavy recreational use without buckling."
    ],
    cadImage: "/Product Images/Basketball Court /CAD DESIGN.jpg",
    advantages: [
      { title: "FIBA Regulation Compliance", description: "Engineered to deliver 99%+ vertical ball rebound and calibrated area deflection.", icon: "Award" },
      { title: "Dual-Cushion Substructure", description: "Shock-absorbing elastomer pads prevent joint trauma during repeated high-flying rebounds.", icon: "Activity" },
      { title: "High-Grip Anti-Skid Finish", description: "Anti-slip surface coating prevents loss of traction during sharp cross-overs and defensive cuts.", icon: "ShieldCheck" },
      { title: "All-Weather Drainage", description: "Outdoor interlocking modular court systems drain water immediately through open-mesh grids.", icon: "Sun" },
      { title: "Turnkey Arena Equipment", description: "Furnished with FIBA approved hydraulic portable hoop backstops, glass backboards, and shot clocks.", icon: "Wrench" },
      { title: "Custom Team Branding", description: "Custom center-court logos, three-point arc graphics, and key colors applied with laser precision.", icon: "Layers" },
    ],
    products: [
      {
        title: "Snapsports Indoor Maple XL",
        image: "/Product Images/Basketball Court /snapsports-indoor-maple-xl.webp",
        description: "Patented shock-absorbing modular sports floor with maple wood-grain aesthetics, delivering 70% lower lifecycle maintenance costs than raw timber.",
        specs: ["Interlocking Modular", "Maple Grain Finish", "Indoor & Covered Arena"]
      },
      {
        title: "Professional Acrylic Basketball Court",
        image: "/Product Images/Basketball Court /FotoJet-2025-04-30T112651.784-1024x683.jpg",
        description: "Heavy-duty 7-coat cushioned acrylic system tailored for university and school outdoor basketball courts.",
        specs: ["Multi-layer Acrylic", "UV Stable Pigments", "All-Weather Ready"]
      },
      {
        title: "Modular Outdoor Sports Court",
        image: "/Product Images/Basketball Court /modular-sports-floor-for-basketball-3.jpg",
        description: "Suspended polypropylene interlocking court tiles with self-draining diamond mesh, built for 24/7 outdoor community play.",
        specs: ["Polypropylene Tiles", "Self Draining Grid", "15-Year Life Expectancy"]
      }
    ]
  }
};
