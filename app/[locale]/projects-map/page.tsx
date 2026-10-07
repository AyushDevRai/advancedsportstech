import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { OurProjectsPageView } from "@/components/sections/our-projects";

export const metadata: Metadata = {
  title: "Interactive Projects Map — Nationwide Footprint | AST Sports",
  description:
    "Interactive geographic map of AST sports infrastructure installations across India, featuring certified running tracks, hockey turfs, and football fields.",
};

export default async function ProjectsMapPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <OurProjectsPageView />;
}
