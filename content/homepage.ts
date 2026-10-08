// AST's published homepage, reviewed 6 October 2026. Copy and imagery remain AST's.
export const aboutParagraphs = [
  "Advanced Sports Technologies (AST) is a premier provider of synthetic sports surfaces and related projects across India. As the exclusive representative of Polytan/SportGroup Germany, we offer world-renowned brands such as POLIGRAS, LIGATURF, SMARTRACKS, REKORTAN, and SPURTAN.",
  "With over 11 years of industry experience, AST has successfully executed more than 100 projects, including prestigious installations like the Hockey Pitch for the FIH World Cup 2018 in Odisha and the Olympic Standard Synthetic Track at Jawaharlal Nehru Stadium, New Delhi. Our reputation for quality and timely delivery is supported by our extensive engineering expertise and ownership of specialized equipment necessary for these advanced installations.",
  "Pioneering in the field, we've introduced cutting-edge SMARTRACK technology in athletic tracks to enhance athlete training through scientific approaches. Expanding our portfolio, we now offer LED Sports Lighting Systems, recently partnering with Panasonic of Japan to bring the best in LED sports lighting technology to India. With over 11 years of experience, our engineering team has completed over 100 sports lighting projects, establishing AST as a leader in innovative sports technology solutions.",
] as const;

export const homepageServices = [
  { slug: "conceptualization", name: "Conceptualization", image: "/services/concept.jpg", tagline: "Conceptualization is the process of refining abstract thought into tangible form.", description: "We have the capabilities to support a project end-to-end. In coordination with our International partners, we have developed design concepts which are based on Internationally acceptable practices, tweaked adequately to the India limitations and conditions. Once we get to understand a vision and mission statements, we convert them into site designs for implementation." },
  { slug: "survey-planning-designing", name: "Survey, Planning & Designing", image: "/services/survey.png", tagline: "Survey and planning is a bridge that connects a concept to its brick and mortar form.", description: "We have fully equipped in house team for complete survey of the existing facilities and the free land available for new developments. Following this we undertake the soil test and other tests to understand the load bearing capacity etc. for the area in question. The final outcome of the exercise is a well planned site design that is perfected and leaves no scope for imperfections." },
  { slug: "construction", name: "Construction", image: "/services/construction.jpg", tagline: "Construction is the mammoth task of converting plans into reality.", description: "Most of the sports facilities are required to be planned and constructed according to the International norms and standards. Construction of these facilities are different to the normal construction jobs as the acceptable tolerances are far more stringent. Advanced Sport has a fully dedicated construction division having expertise and equipment required for any type and size of project in any part of India." },
  { slug: "refurbishment", name: "Refurbishment", image: "/services/refurbishment.png", tagline: "Refurbishment is the financially and environmentally friendly option.", description: "Sports Surfaces become unsuitable after prolonged use. The facilities therefore need to be built from scratch, thus imposing a heavy financial burden on the owner and also generating a lot of environmentally harmful waste. At AST we encourage the facility owners to examine the possibility for refurbishment of the sports facility, rather than complete replacement. This not only benefits financially but also environmentally." },
  { slug: "line-marking", name: "Line Marking", image: "/services/line-marking.jpg", tagline: "Machine with which lines or markings are drawn on a sports field or pitch.", description: "We have fully equipped in house team for complete Line marking of the Synthetic Athletic Tracks leaves no scope for imperfections. All lanes are marked by white lines. The line on the right hand side of each lane, in the direction of running, is included in the measurement of the width of each lane. All start lines (except for curved start lines) and the finish line are marked at right angles to the lane lines." },
  { slug: "testing-certification", name: "Testing & Certification", image: "/services/testing.png", tagline: "Machine with which lines or markings are drawn on a sports field or pitch.", description: "We have fully equipped in house team for complete survey of the existing facilities and the free land available for new developments. Following this we undertake the soil test and other tests to understand the load bearing capacity etc. for the area in question. The final outcome of the exercise is a well planned site design that is perfected and leaves no scope for imperfections." },
  { slug: "sports-lighting", name: "Sports Lighting", image: "/services/lighting.jpg", tagline: "Illuminate large areas for sports events.", description: "Outdoor sports lighting is a sort of site lighting that is widely used to illuminate huge areas for sporting events and other large outdoor activities. On the playing surface, the appropriate amount of light varies. All sports lighting has to be high-quality, totally reliable, efficient, and economic. At Advanced Sport Technologies we also understand specialist sporting facilities’ needs and environments vary greatly." },
  { slug: "cleaning-maintenance", name: "Cleaning & Maintenance", image: "/services/maintenance.jpg", tagline: "We change attitude from a Fail & Fixed approach to Predict and Prevent approach.", description: "The success of a sports facility depends on the maintenance of the venue up to the expectation of the users. Being a total solution company, we can undertake the task of complete cleaning and maintenance of the venue." },
] as const;

export interface GalleryItem {
  slug: string;
  name: string;
  location: string;
  image: string;
  category: "Prominent Projects" | "Our Creations";
  description?: string;
}

export interface GalleryVideo {
  id: string;
  title: string;
  subtitle?: string;
  location: string;
  category: string;
  src: string;
  cloudName?: string;
  publicId?: string;
  description: string;
  badge?: string;
}

export const gallery: readonly GalleryItem[] = [
  // Prominent Projects
  {
    slug: "championship-8-lane-stadium",
    name: "International Athletics Stadium",
    location: "Punjab / Haryana",
    image: "/new/Still%202026-04-01%20142646_1.52.1.jpg.jpeg",
    category: "Prominent Projects",
    description: "Championship 8-lane synthetic running track with covered grandstands, high-mast floodlights, and natural turf infield."
  },
  {
    slug: "aerial-synthetic-track",
    name: "400m 8-Lane Synthetic Track Complex",
    location: "Haryana Sports Complex",
    image: "/new/Still%202026-04-01%20142646_1.54.2.jpg.jpeg",
    category: "Prominent Projects",
    description: "Aerial perspective of full 400-meter athletic running track with IAAF-certified curve radiuses and integrated sprint straights."
  },
  {
    slug: "tiered-indoor-arena",
    name: "Championship Tiered Indoor Stadium",
    location: "State Youth & Sports Centre",
    image: "/new/Still%202026-03-13%20123444_1.104.1.jpg.jpeg",
    category: "Prominent Projects",
    description: "World-class indoor arena with tiered stadium seating, synthetic sports surface, and international badminton and futsal markings."
  },
  {
    slug: "kalinga",
    name: "Kalinga Stadium, Bhubaneswar",
    location: "Bhubaneswar",
    image: "/projects/kalinga.jpg",
    category: "Prominent Projects",
    description: "Official Match Pitch for the FIH Men's Hockey World Cup 2018 & FIH Pro League."
  },
  {
    slug: "jrd-tata",
    name: "JRD Tata Sports Complex, Jamshedpur",
    location: "Jamshedpur",
    image: "/placeholders/jrd-tata.jpg",
    category: "Prominent Projects",
    description: "IAAF Class 1 Certified 400m 8-Lane Synthetic Track engineered with Rekortan M99 full PUR system."
  },
  {
    slug: "stadium-panoramic-track",
    name: "Panoramic Athletics Arena Installation",
    location: "National Sports University",
    image: "/new/Still%202026-04-01%20142646_1.54.7.jpg.jpeg",
    category: "Prominent Projects",
    description: "Full panoramic view of World Athletics certified running facility with custom safety perimeters and perimeter fencing."
  },
  {
    slug: "jln",
    name: "Jawaharlal Nehru Stadium, New Delhi",
    location: "New Delhi",
    image: "/placeholders/sports-facility.jpg",
    category: "Prominent Projects",
    description: "National stadium synthetic track built for Commonwealth Games and international championships."
  },
  {
    slug: "running-track-field-events",
    name: "Athletics Field & Steeplechase Arena",
    location: "Regional Athletics Centre",
    image: "/new/Still%202026-04-01%20142646_1.52.2.jpg%20(1).jpeg",
    category: "Prominent Projects",
    description: "Dedicated steeplechase water jump, pole vault runway, and long jump pits integrated into 8-lane polyurethane track."
  },
  {
    slug: "polyurethane-indoor-court",
    name: "Polyurethane Indoor Sports Complex",
    location: "Sports Authority Facility",
    image: "/new/Still%202026-03-13%20133226_1.106.1.jpg.jpeg",
    category: "Prominent Projects",
    description: "Seamless point-elastic polyurethane indoor sports system for multisport training."
  },

  // Our Creations
  {
    slug: "track-bend-curve-geometry",
    name: "World Athletics Precision Track Curve",
    location: "State Athletics Stadium",
    image: "/new/Still%202026-04-01%20142646_1.54.5.jpg.jpeg",
    category: "Our Creations",
    description: "High-precision curve banking with non-directional polyurethane wear layer delivering optimum force reduction."
  },
  {
    slug: "precision-lane-marking",
    name: "Championship Track Line Marking",
    location: "Championship Running Track",
    image: "/new/Still%202026-04-01%20142646_1.54.6.jpg.jpeg",
    category: "Our Creations",
    description: "Sub-millimeter calibrated laser line marking meeting strict World Athletics Rule 140 specifications."
  },
  {
    slug: "indoor-multisport-arena",
    name: "Multi-Sport Indoor Arena Flooring",
    location: "Punjab Sports Complex",
    image: "/new/Still%202026-03-13%20114910_1.87.1.jpg.jpeg",
    category: "Our Creations",
    description: "High-grip dual-color indoor court system designed for competitive gymnastics, martial arts, and badminton."
  },
  {
    slug: "badminton-volleyball-arena",
    name: "Badminton & Volleyball Dual Arena",
    location: "National Sports Academy",
    image: "/new/Still%202026-03-13%20114910_2.14.1.jpg.jpeg",
    category: "Our Creations",
    description: "Professional indoor court flooring featuring shock-absorbing cushion underlayment and matte anti-glare finish."
  },
  {
    slug: "indoor-sports-hall",
    name: "High-Performance Indoor Sports Hall",
    location: "Delhi Sports Complex",
    image: "/new/Still%202026-03-13%20114910_2.4.1.jpg.jpeg",
    category: "Our Creations",
    description: "Engineered indoor surface delivering 58% shock absorption for high-impact indoor athletics."
  },
  {
    slug: "indoor-futsal-badminton",
    name: "Indoor Futsal & Badminton Complex",
    location: "North India Sports Hub",
    image: "/new/Still%202026-03-13%20123617_1.105.1.jpg.jpeg",
    category: "Our Creations",
    description: "Multi-court layout allowing simultaneous badminton and futsal gameplay with contrasting lane boundaries."
  },
  {
    slug: "mp-sports",
    name: "M.P. Sports College, Dehradun",
    location: "Dehradun",
    image: "/placeholders/hockey.jpg",
    category: "Our Creations",
    description: "FIH certified water-based synthetic hockey pitch with automated sprinkler systems."
  },
  {
    slug: "tantya-tope",
    name: "Tantya Tope Stadium",
    location: "Bhopal, Madhya Pradesh",
    image: "/projects/tantya-tope.jpg",
    category: "Our Creations",
    description: "400m synthetic running track and field installation for state championships."
  },
  {
    slug: "sai",
    name: "SAI Centre, Aurangabad",
    location: "Aurangabad",
    image: "/projects/sai-aurangabad.jpg",
    category: "Our Creations",
    description: "Poligras synthetic hockey field for national player development and youth training."
  },
];

export const galleryVideos: readonly GalleryVideo[] = [
  {
    id: "video-jalandhar",
    title: "Jalandhar Sports Infrastructure Installation",
    subtitle: "Championship Stadium Installation",
    location: "Jalandhar, Punjab",
    category: "Athletic Track & Turf",
    src: "https://res.cloudinary.com/y5o5nwmr/video/upload/JALANDHAR_AST.mp4",
    cloudName: "y5o5nwmr",
    publicId: "JALANDHAR_AST",
    description: "Comprehensive sports facility construction by Advanced Sports Technologies, showcasing specialized laser-guided paving machines, sub-base preparation, and polyurethane wear coat application.",
    badge: "Featured Installation"
  },
  {
    id: "video-gurdaspur",
    title: "Gurdaspur International Hockey Stadium",
    subtitle: "FIH Global Approved Hockey Pitch",
    location: "Gurdaspur, Punjab",
    category: "Hockey Turf",
    src: "https://res.cloudinary.com/y5o5nwmr/video/upload/GURDAS_PUR_AST_1.mp4",
    cloudName: "y5o5nwmr",
    publicId: "GURDAS_PUR_AST_1",
    description: "Full ground and drone tour of the championship Poligras synthetic hockey pitch installed at Gurdaspur, engineered for Olympic-level ball roll speed and true trajectory.",
    badge: "FIH Certified"
  },
  {
    id: "video-track-marking",
    title: "Synthetic Athletic Track Precision Laying & Marking",
    subtitle: "World Athletics Certified Calibration",
    location: "New Delhi",
    category: "Athletic Track",
    src: "https://res.cloudinary.com/y5o5nwmr/video/upload/IMG_2508.mp4",
    cloudName: "y5o5nwmr",
    publicId: "IMG_2508",
    description: "On-site footage detailing the Rekortan full PUR synthetic running surface application, micro-textured EPDM broadcast, and sub-millimeter lane geometry markings.",
    badge: "World Athletics Standard"
  },
  {
    id: "video-ast-showcase",
    title: "AST High-Performance Sports Engineering Showcase",
    subtitle: "Nationwide Stadium Footprint Across India",
    location: "National Footprint, India",
    category: "Infrastructure Showcase",
    src: "https://res.cloudinary.com/ddrzgbhnl/video/upload/v1763355658/astw3_ubxyop_aogana.mp4",
    description: "Cinematic showcase highlighting AST’s flagship athletic tracks, FIH World Cup hockey pitches, and FIFA synthetic turfs engineered across 24+ Indian states.",
    badge: "Flagship Reel"
  },
  {
    id: "video-track-maintenance",
    title: "Synthetic Athletic Track Precision Deep Cleaning",
    subtitle: "High-Pressure Specialist Equipment",
    location: "National Facilities Nationwide",
    category: "Cleaning & Maintenance",
    src: "/videos/maintenance-track-cleaning.mp4",
    description: "Specialized German machinery deep-cleaning synthetic tracks to maintain IAAF coefficient of friction, clear pore pores, and extend surface longevity.",
    badge: "Specialized Maintenance"
  },
  {
    id: "video-turf-maintenance",
    title: "FIH Hockey Turf Professional Hydro-Jet Maintenance",
    subtitle: "Preserving Ball Speed & Player Traction",
    location: "Stadium Venues Nationwide",
    category: "Cleaning & Maintenance",
    src: "/videos/maintenance-turf-cleaning.mp4",
    description: "State-of-the-art hydro-jet turf cleaning removing embedded algae, dust, and particulate contaminants to preserve FIH Category 1 playing characteristics.",
    badge: "Turf Care"
  }
];
export const testimonials = [
  { name: "Yash", role: "Client", image: "/testimonials/yash-portrait-placeholder.jpg", quote: "The Work is Done with patience and perfection" },
  { name: "Rajpal", role: "Client", image: "/testimonials/rajpal-placeholder.jpg", quote: "The Team is very polite and helpful" },
  { name: "Shivam", role: "Client", image: "/testimonials/shivam-placeholder.jpg", quote: "Always got the work done on time" },
] as const;
export const clientNames = ["New Delhi Municipal Council", "Himachal Pradesh Public Works Department", "Tata", "National Projects Construction Corporation", "Indian Railways", "Bihar State Educational Infrastructure Development Corporation", "Public Works Department Mizoram", "Delhi Development Authority", "Himachal Pradesh Housing and Urban Development Authority", "Public Works Department Odisha", "Central Public Works Department", "Indian Air Force", "Lucknow Development Authority", "Rajasthan State Road Development and Construction Corporation", "Sports Authority of India", "Steel Authority of India", "Public Works Department Madhya Pradesh", "Manipur Industrial Development Corporation", "KITCO", "Shirke Group", "Haryana Shahri Vikas Pradhikaran", "AST client logo 22", "Jharkhand State Building Construction Corporation", "Kolhapur Municipal Corporation", "Sports Development Authority of Tamil Nadu", "Haryana Urban Development Authority", "Sports Authority of Goa", "Infosys", "WAPCOS", "IDCO"] as const;
export const brochures = [
  { name: "REKORTAN M99", file: "REKORTAN-M99.pdf" },
  { name: "REKORTAN M", file: "REKORTAN-M.pdf" },
  { name: "REKORTAN PUR", file: "Rekortan-PUR-E-.pdf" },
  { name: "POLIGRAS GT", file: "POLIGRAS-GT-CATALOGUE-two-page.pdf" },
  { name: "POLIGRAS Platinum GT", file: "BROCHURE-POLIGRAS-PLATINUM-GT.pdf" },
  { name: "POLIGRAS SuperPlay", file: "Poligras-SuperPlay_Flyer-A4_EN_low-res.pdf" },
  { name: "POLIGRAS Terra", file: "CATALOGUE-POLIGRAS-TERRA-CP-2018-EL-15-SAND.pdf" },
  { name: "SMARTRACKS", file: "CATALOGUE-SMARTRACK-RED.pdf" },
  { name: "Wireless Timing Gate", file: "WIRELESS-TIMING-GATE-CATALOGUE.pdf" },
] as const;
export const brochureUrl = (file: string) => `https://ast-sports.com/wp-content/uploads/2022/05/${file}`;

export const homeProducts = [
  {
    slug: "athletic-track",
    name: "Athletic Track",
    href: "/athletic-tracks",
    image: "/image/header-1.jpg",
  },
  {
    slug: "hockey-turf",
    name: "Hockey Turf",
    href: "/hockey",
    image: "/background/hockey.jpg",
  },
  {
    slug: "football-turf",
    name: "Football Turf",
    href: "/football",
    image: "/imageFootball/football.jpg",
  },
  {
    slug: "basketball",
    name: "Basketball",
    href: "/basketball",
    image: "/courts/basketball-floor.jpg",
  },
  {
    slug: "tennis",
    name: "Tennis",
    href: "/tennis",
    image: "/courts/tennis-floor.jpg",
  },
  {
    slug: "badminton",
    name: "Badminton",
    href: "/badminton",
    image: "/courts/badminton-acrylic-floor.jpg",
  },
  {
    slug: "inbuilt",
    name: "Inbuilt",
    href: "/smartracks",
    image: "/imageSmartTrack/smartakcs.jpg",
  },
  {
    slug: "wireless-timing-gate",
    name: "Wireless/Mobile Timing Gate",
    href: "/wireless-timing-gate-system",
    image: "/navigation/wireless-timing-gate-system.webp",
  },
  {
    slug: "sports-lighting",
    name: "Sports Lighting",
    href: "/products/sports-lighting",
    image: "/services/lighting.jpg",
  },
  {
    slug: "cleaning-maintenance",
    name: "Cleaning & Maintenance",
    href: "/maintenance",
    image: "/services/maintenance.jpg",
  },
] as const;
