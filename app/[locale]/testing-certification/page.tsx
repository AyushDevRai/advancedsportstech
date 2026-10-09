import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { CertificatesPageView } from "@/components/sections/certificates-page-view";

export const metadata: Metadata = {
  title: "Official Testing & Certifications — World Athletics & FIH Accredited | AST Sports",
  description:
    "Explore 45+ authentic World Athletics (IAAF) and FIH tournament field performance certificates across India's premier stadiums.",
};

export default async function TestingCertificationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CertificatesPageView />;
}
