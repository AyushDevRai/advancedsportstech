import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Smartracks } from "@/components/sections/smartracks";

export const metadata: Metadata = {
  title: "SmarTracks Inbuilt Timing & Athlete Diagnostics | AST Sports",
  description:
    "SmarTracks by Polytan — Patented in-ground magnetic timing gates and wireless diagnostics for athletic tracks and turf. Sub-millisecond timing, deep stride kinematics, and automated coaching analytics from AST.",
};

export default async function SmartracksPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Smartracks />;
}
