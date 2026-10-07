import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Badminton } from "@/components/sections/badminton";

export const metadata: Metadata = {
  title: "Badminton Courts | Acrylic & Wooden Flooring | AST Sports",
  description:
    "Olympic & BWF-standard badminton courts featuring two specialized flooring types: all-weather synthetic acrylic flooring and sprung hardwood maple flooring.",
};

export default async function BadmintonPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Badminton />;
}
