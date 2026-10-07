import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { OurProjectsPageView } from "@/components/sections/our-projects";

export const metadata: Metadata = {
  title: "Our Projects — Nationwide Footprint & Showcase | AST Sports",
  description:
    "Explore 100+ championship-level installations across India: World Athletics certified running tracks, FIH World Cup proven Poligras hockey turfs, and FIFA quality football stadiums by Advanced Sports Technologies (AST).",
};

export default async function OurProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <OurProjectsPageView />;
}
