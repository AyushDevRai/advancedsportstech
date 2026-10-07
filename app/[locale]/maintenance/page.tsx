import React from "react";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { MaintenanceView } from "@/components/sections/maintenance";

export const metadata: Metadata = {
  title: "Synthetic Sports Surface Cleaning & Maintenance | AST Sports",
  description:
    "Proper maintenance of running tracks and synthetic sports surfaces: high-pressure wet cleaning, certified repairs, and Polytan re-topping systems from AST Sports.",
};

export default async function MaintenancePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <MaintenanceView />;
}
