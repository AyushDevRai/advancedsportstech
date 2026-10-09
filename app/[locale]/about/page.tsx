import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { AboutPageView } from "@/components/sections/about-page-view";

export const metadata: Metadata = {
  title: "About Us — Advanced Sports Technologies (AST) | Leaders in Sports Infrastructure",
  description:
    "Learn about Advanced Sports Technologies (AST), India's premier turnkey sports infrastructure engineering firm. Exclusive representative of Polytan / Sport Group Germany with 100+ championship stadiums, hockey turfs, and athletic tracks built nationwide.",
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AboutPageView />;
}
