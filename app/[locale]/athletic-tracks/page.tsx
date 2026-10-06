import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { AthleticTracks } from "@/components/sections/athletic-tracks";

export const metadata: Metadata = {
  title: "Athletic Tracks",
  description: "Higher, Faster, Smarter – modern synthetic surfaces for athletics. Explore Rekortan M99, PUR E and M track systems from AST, the exclusive partner of Polytan/SportGroup Germany.",
};

export default async function AthleticTracksPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AthleticTracks />;
}
