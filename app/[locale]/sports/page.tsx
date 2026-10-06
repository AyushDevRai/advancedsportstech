import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trophy, ShieldCheck, Award, Layers } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { GlassHeader } from "@/components/layout/glass-header";
import { ModernFooter } from "@/components/layout/modern-footer";
import { ModernCTA } from "@/components/sections/modern-cta";
import { sportsData } from "@/content/sports-data";

export const metadata = {
  title: "Sports Surfaces | AST Sports",
  description: "Explore our World Athletics, FIH, and FIFA certified sports surfaces including athletic tracks, hockey turf, football turf, and indoor wooden courts.",
};

export default async function SportsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-[#08090d] text-white">
      <GlassHeader />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-b from-[#140505] to-[#08090d]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Global Federation Certified
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Our Sports Surfaces
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Engineered for elite athlete safety, world-record speed, and extreme durability under Indian conditions.
          </p>
        </div>
      </section>

      {/* Sports Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {Object.values(sportsData).map((sport, idx) => (
            <div
              key={sport.slug}
              className="group rounded-3xl overflow-hidden bg-[#11131c] border border-white/10 hover:border-red-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={sport.poster}
                  alt={sport.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11131c] via-black/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    {sport.category}
                  </span>
                </div>
              </div>

              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">
                      {sport.badge}
                    </span>
                    <span className="text-xs text-slate-400">0{idx + 1}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                    {sport.name}
                  </h2>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    {sport.tagline}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {sport.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="text-[11px] bg-white/[0.04] border border-white/10 text-slate-300 px-2.5 py-1 rounded-md"
                      >
                        ✓ {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    {sport.products.length} Certified Systems
                  </span>
                  <Link
                    href={`/sport/${sport.slug}`}
                    className="ast-btn-glow px-5 py-2.5 rounded-xl text-xs font-bold inline-flex items-center gap-1.5"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <ModernCTA />

      {/* Footer */}
      <ModernFooter />
    </div>
  );
}
