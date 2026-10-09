import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { TermsPageView } from "@/components/sections/terms-page-view";

export const metadata: Metadata = {
  title: "Terms & Policy — Guarantees, Warranties & Compliance | AST Sports",
  description:
    "Review legal terms of service, technical sub-base specifications, Polytan manufacturer warranties, surface maintenance protocols, and privacy policies of Advanced Sports Technologies LLP.",
};

export default async function TermsAndPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <TermsPageView />;
}
