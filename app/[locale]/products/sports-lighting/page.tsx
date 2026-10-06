import React from "react";
import { setRequestLocale } from "next-intl/server";
import { ProductPageView } from "@/components/sections/product-page-view";

export const metadata = {
  title: "Panasonic LED Sports Lighting Systems | AST Sports",
  description: "Flicker-free 4K ultra-HD broadcast compliant LED sports lighting systems engineered with Panasonic Japan.",
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ProductPageView slug="sports-lighting" />;
}
