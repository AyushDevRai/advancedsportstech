import React from "react";
import { setRequestLocale } from "next-intl/server";
import { ProductPageView } from "@/components/sections/product-page-view";

export const metadata = {
  title: "SmarTracks Inbuilt Timing Systems | AST Sports",
  description: "Sub-surface permanent magnetic timing gates for running tracks. Invisible, maintenance-free, millisecond accurate.",
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ProductPageView slug="smartracks/inbuilt" />;
}
