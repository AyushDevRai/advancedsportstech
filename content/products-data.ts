export interface ProductPageData {
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  heroImage: string;
  heroVideo?: string;
  description: string;
  keyFeatures: { title: string; desc: string }[];
  specifications: { label: string; value: string }[];
  catalogues?: { name: string; file: string }[];
  gallery: string[];
}

export const productsData: Record<string, ProductPageData> = {
  "athletics-track": {
    slug: "athletics-track",
    title: "Rekortan Athletics Track Systems",
    subtitle: "World Athletics Class 1 & 2 Certified High-Performance Running Tracks",
    badge: "World Athletics Certified",
    heroImage: "/Fallback/athletic.jpg",
    heroVideo: "https://res.cloudinary.com/ddrzgbhnl/video/upload/v1763357125/DJI_0320_pjbq5e_qwh5y1.mp4",
    description: "Since 1969, Rekortan has set the worldwide standard for synthetic athletic tracks. Engineered with microscopic energy-return geometry, impermeable UV-stable polyurethane, and virgin EPDM granules, Rekortan tracks have powered more world records than any other surface in athletics history.",
    keyFeatures: [
      { title: "Calibrated Energy Return", desc: "Patented micro-foam basemat delivers optimal shock absorption and energetic rebound to maximize runner speed and minimize injury risk." },
      { title: "Impermeable Full-Pour & Sandwich Systems", desc: "Completely moisture-sealed against monsoon water infiltration, freeze-thaw cracking, and delamination." },
      { title: "Precision Laser Line Marking", desc: "Millimeter-accurate competition markings surveyed and certified to World Athletics standards." },
      { title: "Eco-Friendly German Formulation", desc: "Manufactured using renewable raw materials and free from heavy metals, solvents, and chlorinated paraffins." }
    ],
    specifications: [
      { label: "Governing Standards", value: "World Athletics Class 1 & Class 2 / IAAF" },
      { label: "Systems Available", value: "Rekortan M99 (Full Pour), Rekortan PUR E, Rekortan M (Sandwich), Spurtan BS" },
      { label: "Standard Thickness", value: "13mm - 15mm Competition Gauge" },
      { label: "Force Reduction", value: "35% - 45% Shock Attenuation" },
      { label: "Colors Available", value: "Terracotta Red, Rainbow Blue, Olympic Green, Custom" },
      { label: "Warranty", value: "Up to 10 Years International Manufacturer Warranty" }
    ],
    catalogues: [
      { name: "Rekortan M99 Technical Brochure", file: "/pdf/REKORTAN-M99.pdf" },
      { name: "Rekortan M System Specification", file: "/pdf/REKORTAN-M.pdf" },
      { name: "Rekortan PUR E Product Flyer", file: "/pdf/Rekortan-PUR-E-.pdf" }
    ],
    gallery: [
      "/Product Images/athletics track/CAD Case+study+image+-+Qatar .webp",
      "/Products Images/Athletic Tracks/SRI KANTEERAVA STADIUM BANGALORE.jpeg",
      "/Products Images/Athletic Tracks/INS VALSURA GUJARAT.jpeg",
      "/Projects/Bhopal/IMG-20180926-WA0016.jpg"
    ]
  },
  "synthetic-turf": {
    slug: "synthetic-turf",
    title: "World-Class Synthetic Turf Systems",
    subtitle: "Olympic-Grade Poligras & LigaTurf Systems for Hockey, Football & Multisport",
    badge: "FIH & FIFA Certified",
    heroImage: "/Fallback/Football.jpg",
    heroVideo: "https://res.cloudinary.com/ddrzgbhnl/video/upload/v1763356553/football-field-aerial-view-2023-11-27-05-03-11-utc-2-2_rgoumk_ptob95.mp4",
    description: "Advanced Sports Technologies supplies and installs world-class synthetic sports turf from Polytan and SportGroup Germany. From the Olympic hockey turf Poligras to the FIFA Quality Pro certified LigaTurf, we engineer pitches that ensure unrivaled playability, all-weather drainage, and extended lifecycles.",
    keyFeatures: [
      { title: "Olympic & World Cup Proven", desc: "Installed for the FIH Men's Hockey World Cups in Bhubaneswar and Rourkela, Major Dhyan Chand National Stadium, and state academies." },
      { title: "Engineered In-Situ Elastic Shockpads", desc: "Continuous paved elastic layer beneath the turf delivers uniform shock absorption and eliminates dangerous hard spots." },
      { title: "Advanced Fiber Geometry", desc: "Texturized and multi-shape monofilament fibers provide upright blade memory and true ball roll." },
      { title: "Rapid Drainage Sub-Bases", desc: "Gravity drainage networks capable of evacuating heavy monsoon rainfall in minutes without surface pooling." }
    ],
    specifications: [
      { label: "Certifications", value: "FIH Global Category 1, FIFA Quality Pro, World Rugby" },
      { label: "Brands", value: "Poligras (Hockey), LigaTurf (Football), CoolPlus Technologies" },
      { label: "Pile Heights", value: "12mm - 18mm (Hockey) / 40mm - 60mm (Football)" },
      { label: "Backing", value: "Polyurethane Impermeable Coating with drainage perforations" },
      { label: "Lifespan", value: "10 - 15+ Years with routine AST preventative maintenance" }
    ],
    gallery: [
      "/Products Images/Hockey Turf/MAJOR DHYAN CHAND NATIONAL STADIUM.webp",
      "/Projects/Rajgir hockey stadium/RAJGIR HOCKEY STADIUM - BIHAR.jpeg",
      "/Projects/MRK Hockey Stadium/MRK HOCKEY STADIUM CHENNAI.JPG",
      "/Projects/Rourkela main/ROURKELA_MAIN_FIELD_3.jpeg"
    ]
  },
  "synthetic-turf/hockey": {
    slug: "synthetic-turf/hockey",
    title: "Poligras Hockey Turf Systems",
    subtitle: "The Official Turf of 8 Olympic Games & The FIH Hockey World Cup",
    badge: "FIH Global Preferred",
    heroImage: "/Fallback/Hockey.jpg",
    heroVideo: "https://res.cloudinary.com/ddrzgbhnl/video/upload/v1763356856/SAI_BANGALORE_TRACK_brcsvm_ndou8p.mp4",
    description: "Poligras is the unquestioned global benchmark for hockey turf. Chosen for London 2012, Rio 2016, Tokyo 2020, and Paris 2024 Olympic Games, Poligras provides non-directional ball roll, lightning 3D stickwork response, and revolutionary sustainable sugarcane bio-polyethylene.",
    keyFeatures: [
      { title: "Zero Ball Deviation", desc: "Uniquely texturized filaments eliminate grain bias, providing pure, true ball roll in every direction." },
      { title: "CoolPlus & Water-Saving Technology", desc: "Infrared heat-reflecting pigments reduce pitch temperature by up to 10°C and reduce irrigation water consumption." },
      { title: "Green Technology Polyethylene", desc: "The world's first carbon-zero synthetic sports turf made with up to 60% bio-based polyethylene." },
      { title: "Turnkey Pitch Infrastructure", desc: "Sub-base construction, shockpad paving, water cannon irrigation, and FIH tournament lighting." }
    ],
    specifications: [
      { label: "FIH Classification", value: "Global Category 1 (Water-Based) & National (Sand-Dressed)" },
      { label: "Systems", value: "Poligras Tokyo GT, Poligras Platinum GT, Poligras SuperPlay, Poligras Terra CP" },
      { label: "Shockpad", value: "15mm - 25mm In-Situ Elastic Layer (ET-Pad)" },
      { label: "Indian Venues", value: "Kalinga Stadium, Birsa Munda Stadium, MDCS New Delhi, Rajgir" }
    ],
    catalogues: [
      { name: "Poligras GT Catalogue", file: "/pdf/POLIGRAS-GT-CATALOGUE-two-page.pdf" },
      { name: "Poligras Platinum GT Brochure", file: "/pdf/BROCHURE-POLIGRAS-PLATINUM-GT.pdf" },
      { name: "Poligras SuperPlay Flyer", file: "/pdf/Poligras-SuperPlay_Flyer-A4_EN_low-res.pdf" },
      { name: "Poligras Terra CP Catalogue", file: "/pdf/CATALOGUE-POLIGRAS-TERRA-CP-2018-EL-15-SAND.pdf" }
    ],
    gallery: [
      "/Products Images/Hockey Turf/MAJOR DHYAN CHAND NATIONAL STADIUM.webp",
      "/Projects/MRK Hockey Stadium/MRK HOCKEY STADIUM CHENNAI.JPG",
      "/Projects/Rajgir hockey stadium/RAJGIR HOCKEY STADIUM - BIHAR.jpeg",
      "/Projects/Major Dhyan Chandra Stadium/imgi_4_Stadia-MDCS.jpg"
    ]
  },
  "synthetic-turf/football": {
    slug: "synthetic-turf/football",
    title: "LigaTurf Football Turf Systems",
    subtitle: "FIFA Quality & Quality Pro Synthetic Turfs for Stadiums & Academies",
    badge: "FIFA Quality Pro",
    heroImage: "/Fallback/Football.jpg",
    heroVideo: "https://res.cloudinary.com/ddrzgbhnl/video/upload/v1763356553/football-field-aerial-view-2023-11-27-05-03-11-utc-2-2_rgoumk_ptob95.mp4",
    description: "LigaTurf football systems by Polytan replicate the exact biomechanics and touch of pristine natural grass while delivering 24/7 durability. Whether for professional football clubs, university stadiums, or commercial 7-a-side arenas, LigaTurf sets the standard for stud traction, ball bounce, and skin friendliness.",
    keyFeatures: [
      { title: "FIFA Certified Standards", desc: "Designed and tested to meet FIFA Quality and FIFA Quality Pro certification requirements." },
      { title: "Patented Cross & Rhombus Fibers", desc: "Engineered filament cross-sections deliver exceptional upright recovery even after intense match play." },
      { title: "Eco-Infill Optimization", desc: "Compatible with performance organic infills (cork, coconut) or performance EPDM rubber granules." },
      { title: "All-Weather Playability", desc: "Unmatched drainage rates keep games on schedule without rain cancellations or muddy pitches." }
    ],
    specifications: [
      { label: "Certifications", value: "FIFA Quality / FIFA Quality Pro / EN 15330-1" },
      { label: "Systems", value: "LigaTurf Cross, LigaTurf RS Pro II, LigaTurf Motion Pro" },
      { label: "Pile Height", value: "40mm, 50mm, 60mm Monofilament" },
      { label: "Dtex Range", value: "12,000 - 16,000 dtex High Resilience Filaments" },
      { label: "Infill Type", value: "Kiln-dried silica sand + Performance EPDM / TPE / Organic" }
    ],
    gallery: [
      "/Product Images/Football/LIGATURF-CROSS.jpg",
      "/Product Images/Football/LIGATURF-RS-PRO-II.jpg",
      "/Products Images/Football Turf/Screenshot (83).png",
      "/Fallback/Football.jpg"
    ]
  },
  "smartracks": {
    slug: "smartracks",
    title: "SmarTracks Athlete Diagnostics",
    subtitle: "Precision Magnetic Timing & Biomechanical Analysis for Modern Sports",
    badge: "Scientific Athlete Training",
    heroImage: "/Fallback/athletic.jpg",
    heroVideo: "https://res.cloudinary.com/ddrzgbhnl/video/upload/v1763357125/DJI_0320_pjbq5e_qwh5y1.mp4",
    description: "SmarTracks is the world's most advanced digital timing and biomechanical athlete tracking technology. Developed in Germany, SmarTracks integrates invisible magnetic timing gates beneath running tracks and turf, paired with lightweight wearable sensors to measure velocity, step frequency, contact time, and acceleration with millisecond precision.",
    keyFeatures: [
      { title: "Invisible Sub-Surface Magnetic Gates", desc: "Magnetic timing strips embedded beneath the athletic track surface create a permanent timing corridor without tripods or wires." },
      { title: "Real-Time Biomechanical Data", desc: "Measures running speed, stride length, cadence, ground contact time, and asymmetrical fatigue patterns in real-time." },
      { title: "Simultaneous Multi-Athlete Tracking", desc: "Track up to 30 athletes running simultaneously on different lanes with automated split time logging." },
      { title: "No Weather Interruption", desc: "Completely immune to rain, fog, darkness, and optical line-of-sight blockages that disable optical photocells." }
    ],
    specifications: [
      { label: "Measurement Accuracy", value: "±0.001 seconds (Millisecond precision)" },
      { label: "Data Metrics", value: "Speed, Splits, Step Rate, Step Length, Ground Contact Time, Flight Time" },
      { label: "Sensor Weight", value: "Only 12 grams (Ultralight ergonomic clip)" },
      { label: "Connectivity", value: "Bluetooth BLE & Cloud Diagnostics Dashboard" },
      { label: "Installation", value: "Under new tracks or retrofitted during resurfacing" }
    ],
    catalogues: [
      { name: "SmarTracks System Catalogue", file: "/pdf/CATALOGUE-SMARTRACK-RED.pdf" },
      { name: "Wireless Timing Gate Brochure", file: "/pdf/WIRELESS-TIMING-GATE-CATALOGUE.pdf" }
    ],
    gallery: [
      "/Header Logos/smartracks.svg",
      "/Products Images/Athletic Tracks/DJI_0293 - Copy.JPG",
      "/Product Images/athletics track/Rekortan-M99-final.png",
      "/Fallback/athletic.jpg"
    ]
  },
  "smartracks/inbuilt": {
    slug: "smartracks/inbuilt",
    title: "SmarTracks Inbuilt Timing Systems",
    subtitle: "Sub-Surface Integrated Magnetic Gates for Seamless Stadium Diagnostics",
    badge: "Integrated Smart Facility",
    heroImage: "/Fallback/athletic.jpg",
    description: "The SmarTracks Inbuilt system integrates permanent magnetic timing gates directly beneath the synthetic athletic track surface during construction or retop resurfacing. Completely maintenance-free and invisible to the naked eye, the track becomes a permanent digital laboratory for athletes and coaching staff.",
    keyFeatures: [
      { title: "Permanent Infrastructure", desc: "Magnets are laid beneath the wear layer, requiring zero power, zero recharging, and zero weather protection." },
      { title: "Instant Training Sessions", desc: "Athletes simply clip on the lightweight sensor and sprint — times and splits appear automatically on coaches' tablets." },
      { title: "Federation Approved", desc: "Does not alter track elasticity, coefficient of friction, or World Athletics certification credentials." },
      { title: "Complete Lane Coverage", desc: "Available for 100m straightaways, 400m circuits, long jump run-ups, and agility test corridors." }
    ],
    specifications: [
      { label: "Gate Technology", value: "High-coercivity permanent magnetic dipoles" },
      { label: "Surface Compatibility", value: "Rekortan, Spurtan, and any PU or sandwich track" },
      { label: "Software Compatibility", value: "iOS, Android, Windows SmarTracks Diagnostics Suite" },
      { label: "Maintenance", value: "Zero lifecycle maintenance required for magnets" }
    ],
    catalogues: [
      { name: "SmarTracks Inbuilt Catalogue", file: "/pdf/CATALOGUE-SMARTRACK-RED.pdf" }
    ],
    gallery: [
      "/Fallback/athletic.jpg",
      "/Products Images/Athletic Tracks/INS VALSURA GUJARAT.jpeg",
      "/Product Images/athletics track/CAD Case+study+image+-+Qatar .webp"
    ]
  },
  "smartracks/wireless-timing-gate": {
    slug: "smartracks/wireless-timing-gate",
    title: "Wireless & Mobile Timing Gate Systems",
    subtitle: "Portable Olympic-Grade Timing for Multi-Sport Agility & Speed Testing",
    badge: "Portable High Precision",
    heroImage: "/Fallback/athletic.jpg",
    description: "For teams, academies, and federations requiring precision timing at diverse locations, AST provides wireless mobile timing gates. Lightweight, rapidly deployable in under 3 minutes, and capable of millisecond optical and RFID tracking across sprinting, agility drills, and multi-sport combine testing.",
    keyFeatures: [
      { title: "Rapid 3-Minute Setup", desc: "Self-aligning wireless gate tripods with bluetooth mesh connection eliminate tangled cables." },
      { title: "High Precision Photocells", desc: "Dual-beam optical photocells prevent false triggers caused by swinging arms or flying debris." },
      { title: "All-Sport Combine Readiness", desc: "Pre-programmed testing protocols for 40-yard dash, 10m/30m sprint, 5-10-5 agility shuttle, and beep tests." },
      { title: "Cloud Athlete Profiling", desc: "Export athlete test data directly into team management software and scouting leaderboards." }
    ],
    specifications: [
      { label: "Communication Range", value: "Up to 500 meters wireless line-of-sight" },
      { label: "Battery Life", value: "24+ hours continuous operation per charge" },
      { label: "Accuracy", value: "±0.001 seconds" },
      { label: "Weather Resistance", value: "IP65 water & dust resistant for outdoor field use" }
    ],
    catalogues: [
      { name: "Wireless Timing Gate Catalogue", file: "/pdf/WIRELESS-TIMING-GATE-CATALOGUE.pdf" }
    ],
    gallery: [
      "/Fallback/athletic.jpg",
      "/Products Images/Athletic Tracks/SRI KANTEERAVA STADIUM BANGALORE.jpeg",
      "/Fallback/Football.jpg"
    ]
  },
  "sports-lighting": {
    slug: "sports-lighting",
    title: "Panasonic LED Sports Lighting Systems",
    subtitle: "Broadcast-Quality LED Floodlighting Systems Engineered with Panasonic Japan",
    badge: "Panasonic Official Partner",
    heroImage: "/services/lighting.jpg",
    description: "In partnership with Panasonic Corporation of Japan, AST delivers state-of-the-art sports lighting systems designed to meet international broadcast television standards (HD / 4K / 8K / Super Slow Motion) while cutting stadium energy consumption by up to 60%.",
    keyFeatures: [
      { title: "Flicker-Free 4K Ultra-HD Broadcast", desc: "Specialized electronic drivers eliminate stroboscopic flicker, ensuring pristine super-slow-motion replay footage." },
      { title: "Precision Asymmetric Optics", desc: "Patented lens optics direct luminous flux onto the playing surface with zero upward light pollution and minimal glare for players." },
      { title: "Instant On/Off & Dynamic Entertainment", desc: "Immediate restrike with zero warm-up delay, plus DMX integration for dramatic stadium light shows and goal celebrations." },
      { title: "Engineered High-Mast Columns", desc: "Turnkey structural engineering including wind-load calculated polygonal high-mast towers and seismic foundation design." }
    ],
    specifications: [
      { label: "Technology Partner", value: "Panasonic Corporation (Japan)" },
      { label: "Luminous Efficacy", value: "Up to 150 lm/W high-efficiency LEDs" },
      { label: "Color Rendering Index (CRI)", value: "Ra > 80 (Training) / Ra > 90 (Broadcast Stadium)" },
      { label: "Flicker Factor", value: "< 1% for Ultra-Slow-Motion TV cameras" },
      { label: "Surge Protection", value: "20kV integrated surge protection" },
      { label: "Lifespan", value: "L70 > 50,000 Hours maintenance-free operation" }
    ],
    gallery: [
      "/services/lighting.jpg",
      "/Projects/Major Dhyan Chandra Stadium/imgi_4_Stadia-MDCS.jpg",
      "/Projects/Bhopal/DJI_0007.JPG",
      "/Projects/Delhi JNS/DJI_0291.JPG"
    ]
  },
  "cleaning-and-maintenance": {
    slug: "cleaning-and-maintenance",
    title: "Cleaning & Maintenance Services",
    subtitle: "Predict & Prevent — Extending the Lifespan of Your Sports Surface",
    badge: "Teraclean Powered",
    heroImage: "/services/maintenance.jpg",
    description: "A world-class sports surface is a generational investment. Over time, atmospheric pollution, algae, dirt compaction, and moss compromise player traction and drainage. In partnership with Teraclean, AST changes the philosophy from 'Fail & Fixed' to 'Predict & Prevent', restoring synthetic tracks and turfs to peak competition conditions.",
    keyFeatures: [
      { title: "Deep Hydro-Vacuum Washing", desc: "Specialized German machinery applies calibrated high-pressure water while simultaneously vacuuming dislodged grime and algae." },
      { title: "Infill Decompaction & Cleaning", desc: "Filters and decompresses rubber and sand infill on artificial football and hockey turf, restoring critical shock absorption." },
      { title: "Biocidal Anti-Algae Treatment", desc: "Eco-friendly treatments neutralize moss and fungus spores without damaging polyurethane binders or turf fibers." },
      { title: "Precision Re-Lining & Seam Repair", desc: "Specialist repairs for delaminating seams, worn goalmouth zones, and faded lane lines using certified adhesives." }
    ],
    specifications: [
      { label: "Service Provider", value: "Advanced Sports Technologies LLP & Teraclean" },
      { label: "Equipment Used", value: "Imported German hydrostatic ride-on cleaners and rotary sweepers" },
      { label: "Surfaces Serviced", value: "Athletic Tracks, Synthetic Hockey Turf, Football Pitches, Tennis Courts" },
      { label: "Contract Options", value: "Annual Maintenance Contracts (AMC) or One-Time Deep Restoration" }
    ],
    gallery: [
      "/services/maintenance.jpg",
      "/services/refurbishment.png",
      "/services/line-marking.jpg",
      "/services/testing.png"
    ]
  }
};
