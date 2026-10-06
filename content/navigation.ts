import { brochureUrl, gallery, homepageServices } from "./homepage";

// Menu labels and destinations verified against AST's live navigation, 6 October 2026.
export type NavigationCard = { name: string; href: string; image: string; eyebrow?: string };
export type ProductCategory = { id: string; name: string; cards: NavigationCard[]; description?: string; links?: { name: string; href: string }[] };
export type NavigationGroup = { id: string; name: string; title: string; href: string; cards: NavigationCard[] };

const track: NavigationCard = { name: "Athletic Track", href: "https://ast-sports.com/athletic-track-products/", image: "/placeholders/jrd-tata.jpg", eyebrow: "REKORTAN" };
const hockey: NavigationCard = { name: "Hockey Turf", href: "https://ast-sports.com/poligras/", image: "/projects/kalinga.jpg", eyebrow: "POLIGRAS" };
const football: NavigationCard = { name: "Football Turf", href: "https://ast-sports.com/ligaturf/", image: "/navigation/football.webp", eyebrow: "LIGATURF" };
const inbuilt: NavigationCard = { name: "Inbuilt", href: "https://ast-sports.com/smartracks/", image: "/navigation/smartracks.webp", eyebrow: "SMARTRACKS" };
const timing: NavigationCard = { name: "Wireless/Mobile Timing Gate", href: "https://ast-sports.com/wireless-timing-gate-system", image: "/navigation/wireless-timing-gate-system.webp", eyebrow: "SMARTRACKS" };
const lighting: NavigationCard = { name: "Sports Lighting", href: "https://ast-sports.com/gigatera/", image: "/services/lighting.jpg" };
const maintenance: NavigationCard = { name: "Cleaning & Maintenance", href: "https://ast-sports.com/maintainence/", image: "/services/maintenance.jpg" };

export const productCategories: ProductCategory[] = [
  { id: "all", name: "All Products", cards: [track, hockey, football, inbuilt, timing, lighting, maintenance] },
  { id: "tracks", name: "Athletic Track", cards: [track], description: "REKORTAN, THE ORIGINAL SYNTHETIC TRACK", links: [{ name: "Rekortan M99", href: brochureUrl("REKORTAN-M99.pdf") }, { name: "Rekortan M", href: brochureUrl("REKORTAN-M.pdf") }, { name: "Rekortan PUR E", href: brochureUrl("Rekortan-PUR-E-.pdf") }] },
  { id: "turf", name: "Synthetic Turf", cards: [hockey, football] },
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
  { id: "sports", name: "Sports", title: "Sports", href: "#sports", cards: [
    { name: "Athletic Tracks", href: "https://ast-sports.com/athletic-tracks/", image: "/placeholders/jrd-tata.jpg" },
    { name: "Hockey", href: "https://ast-sports.com/hockey/", image: "/projects/kalinga.jpg" },
    { name: "Football", href: "https://ast-sports.com/football/", image: "/navigation/football.webp" },
    { name: "Wooden Flooring", href: "https://ast-sports.com/wooden-flooring/", image: "/navigation/wooden-flooring.webp" },
    { name: "Indoor Flooring", href: "https://ast-sports.com/indoor-flooring/", image: "/navigation/indoor-flooring.webp" },
    { name: "Tennis", href: "https://ast-sports.com/tennis/", image: "/navigation/tennis.webp" },
    { name: "Badminton", href: "https://ast-sports.com/badminton/", image: "/navigation/badminton.webp" },
    { name: "Basketball", href: "https://ast-sports.com/basketball/", image: "/navigation/basketball.webp" },
  ] },
  { id: "services", name: "Services", title: "What We Do", href: "#services", cards: homepageServices.map(service => ({ name: service.name, image: service.image, href: `#service-${service.slug}` })) },
  { id: "projects", name: "Projects", title: "Our Projects", href: "#projects", cards: gallery.map(project => ({ name: project.name, href: "#projects", image: project.image, eyebrow: project.category })) },
  { id: "downloads", name: "Downloads", title: "Brochure", href: "#brochures", cards: downloadGroups.flatMap(group => group.items.map(item => ({ name: item.name, href: brochureUrl(item.file), image: group.image }))) },
  { id: "company", name: "Company", title: "Advanced Sports Technologies", href: "#about", cards: [
    { name: "About Us", href: "#about", image: "/placeholders/jrd-tata.jpg" },
    { name: "Career", href: "https://ast-sports.com/career/", image: "/services/construction.jpg" },
    { name: "Contact Us", href: "#contact", image: "/placeholders/sports-facility.jpg" },
  ] },
];
