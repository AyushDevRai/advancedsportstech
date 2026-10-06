import React from "react";
import { setRequestLocale } from "next-intl/server";
import { ProductPageView } from "@/components/sections/product-page-view";

export const metadata = {
  title: "LigaTurf Football Turf Systems | AST Sports",
  description: "FIFA Quality and Quality Pro artificial grass football pitches engineered for durability and natural ball roll.",
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ProductPageView slug="synthetic-turf/football" />;
}
