import React from "react";
import { setRequestLocale } from "next-intl/server";
import { ProductPageView } from "@/components/sections/product-page-view";

export const metadata = {
  title: "Wireless & Mobile Timing Gate Systems | AST Sports",
  description: "Portable high-precision sprint and agility timing gates for athlete testing and combines.",
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ProductPageView slug="smartracks/wireless-timing-gate" />;
}
