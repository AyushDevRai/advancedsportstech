import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Tennis } from "@/components/sections/tennis";

export const metadata: Metadata = {
  title: "Tennis Courts | AST Sports",
  description:
    "ITF-classified cushioned hard courts and synthetic surfaces delivering true ball pace, championship bounce, and 25% reduced bodily fatigue.",
};

export default async function TennisPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Tennis />;
}
