export type Source = { url: string; reviewedAt: string };
export type Confirmation = `[CONFIRM: ${string}]`;
export type Sport = { slug: string; name: string; source: string };
export type Brand = { slug: string; name: string; application: string; sportSlugs: string[] };
export type Service = { slug: string; name: string };
export type Project = { slug: string; name: string; location: string; year: Confirmation; source: string };
