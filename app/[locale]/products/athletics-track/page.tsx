import React from "react";
import { setRequestLocale } from "next-intl/server";
import { ProductPageView } from "@/components/sections/product-page-view";

export const metadata = {
  title: "Rekortan Athletics Track Systems | AST Sports",
  description: "World Athletics Class 1 & 2 certified running tracks engineered for champions and record-breaking performance.",
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ProductPageView slug="athletics-track" />;
}
