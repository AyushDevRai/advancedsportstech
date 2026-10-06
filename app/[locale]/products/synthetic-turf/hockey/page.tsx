import React from "react";
import { setRequestLocale } from "next-intl/server";
import { ProductPageView } from "@/components/sections/product-page-view";

export const metadata = {
  title: "Poligras Hockey Turf Systems | AST Sports",
  description: "The official turf of 8 Olympic Games and the FIH Hockey World Cups. Engineered for true ball roll.",
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ProductPageView slug="synthetic-turf/hockey" />;
}
