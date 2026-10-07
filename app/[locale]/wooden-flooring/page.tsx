import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { WoodenFlooring } from "@/components/sections/wooden-flooring";

export const metadata: Metadata = {
  title: "Wooden Sports Flooring | FIBA & BWF Certified | AST Sports",
  description:
    "Premium sprung hardwood maple and teak sports flooring systems with DIN-certified area elastic shock absorption for elite indoor arenas.",
};

export default async function WoodenFlooringPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <WoodenFlooring />;
}
