import { brochureUrl, gallery, homepageServices } from "./homepage";

// Menu labels and destinations verified against AST's live navigation, 6 October 2026.
export type NavigationCard = { name: string; href: string; image: string; eyebrow?: string };
export type ProductCategory = { id: string; name: string; cards: NavigationCard[]; description?: string; links?: { name: string; href: string }[] };
export type NavigationGroup = { id: string; name: string; title: string; href: string; cards: NavigationCard[] };

const track: NavigationCard = { name: "Athletic Track", href: "/athletic-tracks", image: "/image/header-1.jpg", eyebrow: "REKORTAN" };
const hockey: NavigationCard = { name: "Hockey Turf", href: "/hockey", image: "/projects/kalinga.jpg", eyebrow: "POLIGRAS" };
const football: NavigationCard = { name: "Football Turf", href: "/football", image: "/imageFootball/football.jpg", eyebrow: "LIGATURF" };
const inbuilt: NavigationCard = { name: "Inbuilt", href: "/smartracks", image: "/imageSmartTrack/smartakcs.jpg", eyebrow: "SMARTRACKS" };
const timing: NavigationCard = { name: "Wireless/Mobile Timing Gate", href: "/wireless-timing-gate-system", image: "/navigation/wireless-timing-gate-system.webp", eyebrow: "SMARTRACKS" };
const lighting: NavigationCard = { name: "Sports Lighting", href: "/products/sports-lighting", image: "/services/lighting.jpg", eyebrow: "GIGATERA" };
const maintenance: NavigationCard = { name: "Cleaning & Maintenance", href: "/maintenance", image: "/services/maintenance.jpg", eyebrow: "POLYTAN" };
const basketball: NavigationCard = { name: "Basketball", href: "/basketball", image: "/courts/basketball-floor.jpg", eyebrow: "FIBA STANDARDS" };
const tennis: NavigationCard = { name: "Tennis", href: "/tennis", image: "/courts/tennis-floor.jpg", eyebrow: "ITF CLASSIFIED" };
const badminton: NavigationCard = { name: "Badminton", href: "/badminton", image: "/courts/badminton-acrylic-floor.jpg", eyebrow: "ACRYLIC & WOODEN" };
const woodenFlooring: NavigationCard = { name: "Wooden Flooring", href: "/wooden-flooring", image: "/courts/badminton-wooden-floor.jpg", eyebrow: "BWF & FIBA" };

export const productCategories: ProductCategory[] = [
  { id: "all", name: "All Products", cards: [track, hockey, football, basketball, tennis, badminton, woodenFlooring, inbuilt, timing, lighting, maintenance] },
  { id: "tracks", name: "Athletic Track", cards: [track], description: "World Athletics Certified synthetic track systems engineered for elite international competition & high-performance venues.", links: [{ name: "Rekortan M99", href: brochureUrl("REKORTAN-M99.pdf") }, { name: "Rekortan M", href: brochureUrl("REKORTAN-M.pdf") }, { name: "Rekortan PUR E", href: brochureUrl("Rekortan-PUR-E-.pdf") }] },
  { id: "turf", name: "Synthetic Turf", cards: [hockey, football], description: "POLIGRAS & LIGATURF SYNTHETIC SPORTS TURF", links: [{ name: "Poligras Platinum GT", href: brochureUrl("BROCHURE-POLIGRAS-PLATINUM-GT.pdf") }, { name: "Poligras SuperPlay", href: brochureUrl("Poligras-SuperPlay_Flyer-A4_EN_low-res.pdf") }, { name: "Poligras GT", href: brochureUrl("POLIGRAS-GT-CATALOGUE-two-page.pdf") }] },
  { id: "courts", name: "Courts & Flooring", cards: [basketball, tennis, badminton, woodenFlooring], description: "FIBA, ITF & BWF CERTIFIED HARDWOOD & CUSHIONED ACRYLIC SURFACES" },
  { id: "smart", name: "SmarTracks", cards: [inbuilt, timing] },
  { id: "lighting", name: "Sports Lighting", cards: [lighting], description: homepageServices[6].description },
  { id: "maintenance", name: "Cleaning & Maintenance", cards: [maintenance], description: homepageServices[7].description },
];

export const downloadGroups = [
  { name: "Rekortan", image: "/placeholders/jrd-tata.jpg", items: [{ name: "Rekortan M99", file: "REKORTAN-M99.pdf" }, { name: "Rekortan M", file: "REKORTAN-M.pdf" }, { name: "Rekortan PUR E", file: "Rekortan-PUR-E-.pdf" }] },
  { name: "Poligras", image: "/projects/kalinga.jpg", items: [{ name: "Poligras GT", file: "POLIGRAS-GT-CATALOGUE-two-page.pdf" }, { name: "Poligras Platinum GT", file: "BROCHURE-POLIGRAS-PLATINUM-GT.pdf" }, { name: "Poligras Superplay", file: "Poligras-SuperPlay_Flyer-A4_EN_low-res.pdf" }, { name: "Poligras Terra CP", file: "CATALOGUE-POLIGRAS-TERRA-CP-2018-EL-15-SAND.pdf" }] },
  { name: "SmarTracks", image: "/navigation/smartracks.webp", items: [{ name: "Smartrack", file: "CATALOGUE-SMARTRACK-RED.pdf" }, { name: "Wireless/Mobile Timing Gate", file: "WIRELESS-TIMING-GATE-CATALOGUE.pdf" }] },
];

export const navigationGroups: NavigationGroup[] = [
  { id: "products", name: "Products", title: "Products", href: "#products", cards: productCategories[0].cards },
  // { id: "sports", name: "Sports", title: "Sports", href: "#sports", cards: [
  //   { name: "Athletic Tracks", href: "/athletic-tracks", image: "/image/header-1.jpg" },
  //   { name: "Hockey", href: "/hockey", image: "/projects/kalinga.jpg" },
  //   { name: "Football", href: "https://ast-sports.com/football/", image: "/navigation/football.webp" },
  //   { name: "Wooden Flooring", href: "https://ast-sports.com/wooden-flooring/", image: "/navigation/wooden-flooring.webp" },
  //   { name: "Indoor Flooring", href: "https://ast-sports.com/indoor-flooring/", image: "/navigation/indoor-flooring.webp" },
  //   { name: "Tennis", href: "https://ast-sports.com/tennis/", image: "/navigation/tennis.webp" },
  //   { name: "Badminton", href: "https://ast-sports.com/badminton/", image: "/navigation/badminton.webp" },
  //   { name: "Basketball", href: "https://ast-sports.com/basketball/", image: "/navigation/basketball.webp" },
  // ] },
  { id: "services", name: "Services", title: "What We Do", href: "#services", cards: homepageServices.map(service => ({ name: service.name, image: service.image, href: `#service-${service.slug}` })) },
  { id: "projects", name: "Projects", title: "Our Projects", href: "/our-projects", cards: gallery.map(project => ({ name: project.name, href: "/our-projects", image: project.image, eyebrow: project.category })) },
  { id: "downloads", name: "Downloads", title: "Brochure", href: "#brochures", cards: downloadGroups.flatMap(group => group.items.map(item => ({ name: item.name, href: brochureUrl(item.file), image: group.image }))) },
  { id: "company", name: "Company", title: "Advanced Sports Technologies", href: "#about", cards: [
    { name: "About Us", href: "#about", image: "/placeholders/jrd-tata.jpg" },
    { name: "Contact Us", href: "#contact", image: "/placeholders/sports-facility.jpg" },
  ] },
];
