import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Football } from "@/components/sections/football";

export const metadata: Metadata = {
  title: "Football Turf Systems & Synthetic Pitches | AST Sports",
  description:
    "LigaTurf football turf systems by Polytan. Selected for the FIFA Headquarters, 100% carbon-neutral options, and certified to FIFA Quality and Quality Pro standards. Explore LigaTurf Cross, Legend Pro, Motion Pro, RS Pro II, and RS+ from AST.",
};

export default async function FootballPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Football />;
}
