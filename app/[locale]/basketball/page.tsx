import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Basketball } from "@/components/sections/basketball";

export const metadata: Metadata = {
  title: "Basketball Courts | AST Sports",
  description:
    "FIBA-standard hardwood maple and all-weather cushioned acrylic basketball court systems engineered for true bounce, high traction, and zero dead spots.",
};

export default async function BasketballPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Basketball />;
}
