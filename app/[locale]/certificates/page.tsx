import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { CertificatesPageView } from "@/components/sections/certificates-page-view";

export const metadata: Metadata = {
  title: "Official Testing & Certifications — World Athletics & FIH Accredited | AST Sports",
  description:
    "Explore 45+ authentic World Athletics (IAAF) and FIH tournament field performance certificates across India's premier stadiums, including Kalinga Stadium Bhubaneswar, Major Dhyan Chand National Stadium Delhi, and SAI sports centers.",
};

export default async function CertificatesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CertificatesPageView />;
}
