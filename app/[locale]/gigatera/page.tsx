import React from "react";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { SportsLightingView } from "@/components/sections/sports-lighting";

export const metadata: Metadata = {
  title: "GigaTera Beyond The Light — Sports Lighting | AST Sports",
  description:
    "GigaTera Beyond the Light — Anti-glare reflecting plate LED sports lighting for athletic tracks, hockey, and football stadiums with 4K broadcast compliance from AST.",
};

export default async function GigateraPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <SportsLightingView />;
}
