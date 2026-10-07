import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { WirelessTimingGateView } from "@/components/sections/wireless-timing-gate";

export const metadata: Metadata = {
  title: "SmarTracks Wireless Timing Gate System | AST Sports",
  description:
    "Mobile wireless timing gates and wearable diagnostics by Humotion & Polytan. 1/100s precision, 10-hour battery life, and automated professional training logs for track, football, and multi-sport athletics from AST.",
};

export default async function WirelessTimingGateSystemPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <WirelessTimingGateView />;
}
