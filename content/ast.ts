import type { Brand, Confirmation, Project, Service, Source, Sport } from "./types";

export const source: Source = { url: "https://ast-sports.com/", reviewedAt: "2026-10-06" };
export const company = {
  name: "Advanced Sports Technologies LLP",
  shortName: "AST",
  tagline: "Facilitating Excellence",
  eyebrow: "Asia’s leading sports infrastructure company",
  introduction: "Advanced Sports Technologies (AST) provides synthetic sports surfaces and sports infrastructure across India. As the exclusive representative of Polytan / Sport Group Germany, AST offers POLIGRAS, LIGATURF, SMARTRACKS, REKORTAN and SPURTAN.",
  lighting: "AST partners with Panasonic of Japan for LED sports lighting systems in India.",
  maintenance: "Predict and prevent",
  contact: {
    address: "E-42, 3rd Floor, Okhla Industrial Area, Phase II",
    city: "New Delhi – 110020, India",
    phone: "+91 11 430 63 708",
    phoneHref: "tel:+911143063708",
    email: "info@ast-sports.com",
    // Published by AST's Joinchat WhatsApp widget; separate from the office landline.
    whatsapp: "https://wa.me/917290036622",
  },
  statistics: [
    { label: "Projects completed", value: "[CONFIRM: projects completed]" },
    { label: "Square metres of sports surfaces", value: "[CONFIRM: surface area]" },
    { label: "Years of experience", value: "[CONFIRM: years of experience]" },
  ] satisfies { label: string; value: Confirmation }[],
} as const;

export const sports: Sport[] = [
  { slug: "athletics", name: "Athletics", source: "https://ast-sports.com/athletic-tracks/" },
  { slug: "hockey", name: "Hockey", source: "https://ast-sports.com/hockey/" },
  { slug: "football", name: "Football", source: "https://ast-sports.com/football/" },
  { slug: "tennis", name: "Tennis", source: "https://ast-sports.com/tennis/" },
  { slug: "badminton", name: "Badminton", source: "https://ast-sports.com/badminton/" },
  { slug: "basketball", name: "Basketball", source: "https://ast-sports.com/basketball/" },
  { slug: "indoor-flooring", name: "Indoor flooring", source: "https://ast-sports.com/indoor-flooring/" },
  { slug: "wooden-flooring", name: "Wooden flooring", source: "https://ast-sports.com/wooden-flooring/" },
];
export const brands: Brand[] = [
  { slug: "poligras", name: "POLIGRAS", application: "Hockey turf", sportSlugs: ["hockey"] },
  { slug: "ligaturf", name: "LIGATURF", application: "Football turf", sportSlugs: ["football"] },
  { slug: "smartracks", name: "SMARTRACKS", application: "Athlete timing", sportSlugs: ["athletics"] },
  { slug: "rekortan", name: "REKORTAN", application: "Athletic tracks", sportSlugs: ["athletics"] },
  { slug: "spurtan", name: "SPURTAN", application: "Athletic tracks", sportSlugs: ["athletics"] },
];
export const services: Service[] = [
  { slug: "conceptualization", name: "Conceptualization" },
  { slug: "survey-planning-designing", name: "Survey, planning & designing" },
  { slug: "construction", name: "Construction" },
  { slug: "refurbishment", name: "Refurbishment" },
  { slug: "line-marking", name: "Line marking" },
  { slug: "testing-certification", name: "Testing & certification" },
  { slug: "sports-lighting", name: "Sports lighting" },
  { slug: "cleaning-maintenance", name: "Cleaning & maintenance" },
];
export const projects: Project[] = [
  { slug: "jrd-tata-sports-complex", name: "JRD Tata Sports Complex", location: "Jamshedpur", year: "[CONFIRM: completion year]", source: source.url },
  { slug: "kalinga-stadium", name: "Kalinga Stadium", location: "Bhubaneswar", year: "[CONFIRM: completion year]", source: source.url },
  { slug: "jawaharlal-nehru-stadium", name: "Jawaharlal Nehru Stadium", location: "New Delhi", year: "[CONFIRM: completion year]", source: source.url },
  { slug: "mp-sports-college", name: "MP Sports College", location: "Dehradun", year: "[CONFIRM: completion year]", source: source.url },
  { slug: "tantya-tope-stadium", name: "Tantya Tope Stadium", location: "[CONFIRM: location]", year: "[CONFIRM: completion year]", source: source.url },
  { slug: "sai-centre-aurangabad", name: "SAI Centre", location: "Aurangabad", year: "[CONFIRM: completion year]", source: source.url },
];

export const products = [
  { slug: "athletic-tracks", name: "Athletic tracks", brands: ["REKORTAN", "SPURTAN"] },
  { slug: "hockey-turf", name: "Hockey turf", brands: ["POLIGRAS"] },
  { slug: "football-turf", name: "Football turf", brands: ["LIGATURF"] },
  { slug: "smartracks", name: "SmarTracks", brands: ["SMARTRACKS"] },
  { slug: "sports-lighting", name: "Sports lighting", brands: ["Panasonic"] },
  { slug: "cleaning-maintenance", name: "Cleaning & maintenance", brands: [] },
] as const;

// No fabricated testimonials, statistics, client identities, or news entries.
export const updates: { title: string; date: string; slug: string }[] = [];
