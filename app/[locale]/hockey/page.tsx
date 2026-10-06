import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Hockey } from "@/components/sections/hockey";

export const metadata: Metadata = {
  title: "Field Hockey Surfaces & Synthetic Turf | AST Sports",
  description:
    "Field Hockey – Dynamic, elegant and technically superior modern synthetic turf for field hockey. Explore Poligras Platinum GT, Tokyo GT, SuperPlay, and H2OZ systems from AST, exclusive partner of Polytan/SportGroup Germany.",
};

export default async function HockeyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Hockey />;
}
