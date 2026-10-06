// Published copy from https://ast-sports.com/smartracks/
// Official AST Polytan SmarTracks Product Catalog & Diagnostics Suite.

export const smartracksOverview = [
  "POLYTAN has introduced a revolutionizing product “SMARTRACKS” in the field of athletic training. This state-of-the-art and patented product helps athletes keep a detailed log of their training sessions and performance data like running times, interval split times, distance, step frequency, step length, and step numbers. Just by running through our permanent or movable magnetic gates installed on athletic tracks or turf, athletes can record all these parameters with a smartphone and free app.",
  "With SmarTracks, Polytan offers an innovative, highly precise and easy-to-use system that is installed directly into the sports surface. In combination with the latest sensor technology, training activities across a variety of disciplines can be individually documented and analyzed with laboratory-grade precision.",
  "Whether it’s the classic running disciplines of track & field or multidirectional team sports like football and rugby, increasing numbers of athletes rely on digital performance diagnostics to optimize their athletic potential. SmarTracks systems are equally suitable for both running tracks and synthetic turf systems and can be integrated into both new and existing sports facilities with ease. Once installed, the timing gates are available for precise measurements at all times, in all weather conditions, and for multiple athletes simultaneously.",
];

export const smartracksHistory =
  "SmarTracks by Polytan offers optimal training facilities for all performance classes, from school sports and grassroots clubs to Olympic training centres and elite professional franchises. Polytan SmarTracks wins out over conventional timing systems—such as optical light barriers, GPS trackers, or video motion capture—thanks to its millisecond measurement accuracy, parallel multi-athlete tracking, zero setup or dismantling time, and fully automated cloud diagnostics.";

export const smartracksStatistics = [
  { value: "±0.001s", text: "Millisecond timing precision immune to line-of-sight blockage" },
  { value: "100%", text: "All-weather reliability — unaffected by rain, darkness, fog, or snow" },
  { value: "30+", text: "Athletes tracked simultaneously on multiple lanes without interference" },
];

export const smartracksSteps = [
  {
    step: "01",
    title: "Sensor Placement",
    description: "The athlete wears an ultralight 12-gram sensor on a dedicated ergonomic belt around the lower back or runs with a compatible smartphone.",
    image: "/imageSmartTrack/sm1.jpg",
  },
  {
    step: "02",
    title: "Sub-Surface Gates",
    description: "Permanent magnetic gates embedded beneath the track or turf surface generate a three-dimensional magnetic timing corridor.",
    image: "/imageSmartTrack/sm2.jpg",
  },
  {
    step: "03",
    title: "Precision Detection",
    description: "As the athlete passes each magnetic gate, the sensor registers entry and exit points with sub-millisecond precision, calculating velocity and kinematics.",
    image: "/imageSmartTrack/sm3.jpg",
  },
  {
    step: "04",
    title: "Instant Live Results",
    description: "Data transmits in real time via low-latency Bluetooth BLE to the SmarTracks Run app on coaches' tablets and athletes' smartphones.",
    image: "/imageSmartTrack/sm4.jpg",
  },
];

export const smartracksReasons = [
  {
    number: "03",
    title: "Invisible, permanent & vandal-proof",
    accent: true,
    paragraphs: [
      "Magnetic gates are installed permanently beneath the synthetic track wear layer during construction or retop resurfacing. They require zero electricity, zero wiring, zero batteries, and zero maintenance, making them 100% resistant to vandalism, theft, and severe weather.",
    ],
    points: [
      "Zero cables, zero tripods, zero daily calibration",
      "Maintenance-free permanent high-coercivity magnets",
      "Immune to wind, rain, direct sun, and frost",
    ],
  },
  {
    number: "04",
    title: "Deep biomechanical stride kinematics",
    accent: false,
    paragraphs: [
      "Beyond basic stopwatch split times, SmarTracks captures advanced biomechanical parameters: step frequency, step length, ground contact time, flight time, and speed curves across each segment of the sprint.",
    ],
    points: [],
  },
  {
    number: "05",
    title: "Injury prevention & load monitoring",
    accent: false,
    paragraphs: [
      "By detecting minute asymmetries in ground contact time and step frequency decay across repeat intervals, trainers and sports physiotherapists can identify muscular fatigue before acute hamstring or tendon strain occurs.",
    ],
    points: [],
  },
  {
    number: "06",
    title: "Simultaneous multi-athlete tracking",
    accent: false,
    paragraphs: [
      "Multiple athletes running in different lanes can train at the exact same time. The SmarTracks diagnostic suite automatically separates individual athlete IDs without cross-talk or manual stopwatch juggling.",
    ],
    points: [],
  },
];

export const smartracksAdvantages = [
  "Professional training documentation and scientific performance control",
  "Intuitive plug-and-play design — no set-up, teardown, or tripod alignment required",
  "Professional automated training logs for tailored, high-efficiency training plans",
  "No limit to the number of athletes who can train on the track at the same time",
  "100% protection against vandalism and all-weather degradation",
  "In-depth running analysis via step frequency, step length, and contact time diagnostics",
  "Sub-millisecond exact time measurement immune to false optical triggers",
  "Usable everywhere, at any time, in any wind, rain, heat, or darkness",
  "Helps coaches increase training effectiveness while preventing overtraining strain and injury",
];

export interface SmartTrackProduct {
  id: string;
  name: string;
  image: string;
  imageAlt: string;
  type: string;
  file: string;
  badge?: string;
  videoId?: string;
  videoTitle?: string;
  paragraphs: string[];
  specs: string[];
}

export const smartracksVideos = {
  overview: {
    id: "sCbJwuvbY1o",
    title: "SmarTracks by Polytan — Innovative In-Ground System for Performance Diagnostics",
    thumbnail: "/imageSmartTrack/smartakcs.jpg",
  },
  millisecond: {
    id: "uS9dNeH451s",
    title: "Because Every Millisecond Counts — SmarTracks Athlete Performance Diagnostics",
    thumbnail: "/imageSmartTrack/key-visual-smart-10feb2021-scaled-1.jpg",
  },
  runApp: {
    id: "-w4l4MzG4PU",
    title: "SmarTracks Timing — Livestream Results with the Smart Run App",
    thumbnail: "/imageSmartTrack/key-visual-smart-10feb2021-scaled-1.jpg",
  },
};

export const smartracksProducts: SmartTrackProduct[] = [
  {
    id: "smartracks-inbuilt",
    name: "SmarTracks Inbuilt Timing System",
    image: "/imageSmartTrack/smartakcs.jpg",
    imageAlt: "SmarTracks Inbuilt sub-surface magnetic timing gates embedded in athletic running track",
    type: "Permanent In-Ground Magnetic Timing System",
    file: "CATALOGUE-SMARTRACK-RED.pdf",
    badge: "Permanent Sub-Surface Infrastructure",
    videoId: "sCbJwuvbY1o",
    videoTitle: "SmarTracks Inbuilt Sub-Surface Magnetic Timing Gates Demonstration",
    paragraphs: [
      "The SmarTracks Inbuilt system integrates permanent magnetic timing gates directly beneath the synthetic athletic track surface or turf during initial construction or retop resurfacing.",
      "Completely invisible to the naked eye and 100% vandal-proof, the sports facility becomes a permanent digital performance laboratory. The embedded magnetic dipoles require zero electricity, zero wiring beneath the surface, and zero battery replacement over their multi-decade lifespan.",
      "Athletes simply clip on the featherlight 12-gram sensor or run with a smartphone to log high-precision split times, step frequencies, and velocities across 100m sprint straights, 400m circuits, long jump run-ups, and agility grids.",
    ],
    specs: [
      "High-coercivity permanent magnetic dipoles installed beneath the synthetic wear layer",
      "Compatible with Rekortan, Spurtan, and all PU or sandwich athletic track surfaces",
      "Zero power cables or active electronics required beneath the running track",
      "Does not alter track elasticity, coefficient of friction, or World Athletics certifications",
      "Parallel tracking of up to 30 athletes simultaneously with millisecond precision",
      "Areas of use: Olympic stadiums, university athletics centres, elite academies, sports institutes",
    ],
  },
  {
    id: "smartracks-wireless-timing-gate",
    name: "SmarTracks Mobile / Wireless Timing Gates",
    image: "/navigation/smartracks.webp",
    imageAlt: "SmarTracks Mobile wireless timing gates for portable speed diagnostics",
    type: "Portable Multi-Sport Wireless Timing Gates",
    file: "WIRELESS-TIMING-GATE-CATALOGUE.pdf",
    badge: "Portable Multi-Sport Timing",
    paragraphs: [
      "For teams, federations, sports academies, and educational institutions that require precision timing across diverse training venues, AST provides SmarTracks Mobile wireless timing gates.",
      "Lightweight, compact, and self-aligning, the wireless gates deploy in under 3 minutes on any surface—including natural grass, synthetic turf, rubber gym floors, or uninstrumented running tracks—without cumbersome cables.",
      "Engineered for combine testing, 40-yard dashes, 10m/30m sprints, 5-10-5 agility shuttles, and beep tests, it brings Olympic-grade diagnostics to team sports like football, rugby, hockey, and basketball.",
    ],
    specs: [
      "Rapid 3-minute deployment on any indoor or outdoor sports surface",
      "Bluetooth mesh communication with up to 500m line-of-sight wireless range",
      "Dual-beam optical photocells and RF sensors prevent false trigger spikes",
      "IP65 weather-resistant portable units with 24+ hour rechargeable battery life",
      "Automated athlete profiling, combine protocol library, and cloud leaderboard export",
      "Areas of use: Football & sports academies, multi-sport combines, schools, fitness testing",
    ],
  },
  {
    id: "smartracks-run-app",
    name: "SmarTracks Run App & Diagnostics Suite",
    image: "/imageSmartTrack/key-visual-smart-10feb2021-scaled-1.jpg",
    imageAlt: "SmarTracks Run app and coaching diagnostics software interface",
    type: "Real-Time Cloud Diagnostics & Mobile Software",
    file: "CATALOGUE-SMARTRACK-RED.pdf",
    badge: "Real-Time Analytics & Coach Dashboard",
    videoId: "-w4l4MzG4PU",
    videoTitle: "SmarTracks Timing — Livestream Results with the Smart Run App",
    paragraphs: [
      "The Polytan SmarTracks Run app and Diagnostics Suite transforms raw sensor timestamps into actionable athletic intelligence in real time.",
      "Available as a free download from the Apple App Store and Google Play Store, the app connects seamlessly via low-latency Bluetooth BLE. Athletes and coaches receive livestreamed split times, speed curves, cadence, and step counts instantly on their mobile devices or coaching tablets.",
      "Automated cloud synchronization stores complete training histories, compares progression curves across weeks and months, and detects subtle biomechanical fatigue signatures before they escalate into muscular strain or injury.",
    ],
    specs: [
      "Free download on iOS (Apple App Store) and Android (Google Play Store)",
      "Millisecond live-streamed results via low-latency Bluetooth Low Energy (BLE)",
      "Deep metrics: step rate, step length, ground contact time, flight time, and velocity profiles",
      "Coach multi-athlete monitoring dashboard with cloud leaderboard sync",
      "Exportable CSV, Excel, and PDF performance reports for trainers and physiotherapists",
      "Areas of use: Individual training, squad workouts, sports science labs, rehabilitation monitoring",
    ],
  },
];
