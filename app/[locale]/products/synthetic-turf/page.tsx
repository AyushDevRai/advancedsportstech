import React from "react";
import { setRequestLocale } from "next-intl/server";
import { ProductPageView } from "@/components/sections/product-page-view";

export const metadata = {
  title: "Synthetic Turf Systems | AST Sports",
  description: "Olympic-grade Poligras and LigaTurf synthetic sports turf for hockey, football, and multisport arenas.",
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ProductPageView slug="synthetic-turf" />;
}
