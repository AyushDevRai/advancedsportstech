import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Activity,
  Layers,
  Sun,
  Wrench,
  Download,
  Phone,
  CheckCircle2,
  Trophy
} from "lucide-react";
import { GlassHeader } from "@/components/layout/glass-header";
import { ModernFooter } from "@/components/layout/modern-footer";
import { ModernCTA } from "@/components/sections/modern-cta";
import { sportsData } from "@/content/sports-data";

export function generateStaticParams() {
  return Object.keys(sportsData).map((sportName) => ({ sportName }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; sportName: string }>;
}) {
  const { sportName } = await params;
  const normalized = sportName === "hockey-tracks" ? "hockey-track" : sportName;
  const sport = sportsData[normalized];
  if (!sport) return { title: "Sport Not Found | AST Sports" };

  return {
    title: `${sport.name} Surfaces | AST Sports`,
    description: sport.tagline,
  };
}

export default async function SportDetailPage({
  params,
}: {
  params: Promise<{ locale: string; sportName: string }>;
}) {
  const { locale, sportName } = await params;
  setRequestLocale(locale);

  if (sportName === "hockey-tracks") {
    redirect("/sport/hockey-track");
  }

  const sport = sportsData[sportName];
  if (!sport) notFound();

  return (
    <div className="min-h-screen bg-[#08090d] text-white">
      <GlassHeader />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
        {/* Media Background */}
        <div className="absolute inset-0 z-0">
          {sport.videoUrl ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              poster={sport.poster}
              className="w-full h-full object-cover opacity-50 scale-105"
            >
              <source src={sport.videoUrl} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={sport.poster}
              alt={sport.title}
              fill
              className="object-cover opacity-50 scale-105"
              priority
              sizes="100vw"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-[#08090d]/60 to-black/80" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-600/15 rounded-full blur-[130px] pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-xl mb-6 shadow-xl">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-bold tracking-wider text-amber-300 uppercase">
              {sport.badge}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight mb-6">
            <span className="block text-white">{sport.title}</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-10">
            {sport.tagline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#products"
              className="ast-btn-glow w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 group shadow-2xl"
            >
              <span>Explore Certified Systems</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              href="/contact-us"
              className="ast-btn-glass w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm flex items-center justify-center"
            >
              Request Custom Quote
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {sport.certifications.map((c) => (
              <span
                key={c}
                className="text-xs font-medium text-slate-300 bg-black/50 border border-white/10 px-3 py-1 rounded-full backdrop-blur-sm"
              >
                ★ {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About & Technical CAD Section */}
      <section className="py-24 relative overflow-hidden bg-[#0a0c12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 px-3.5 py-1.5 rounded-full inline-block">
                Engineered For Excellence
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                {sport.aboutHeading}
              </h2>
              {sport.aboutText.map((p, i) => (
                <p key={i} className="text-slate-300 text-base leading-relaxed">
                  {p}
                </p>
              ))}

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/contact-us"
                  className="ast-btn-glow px-6 py-3 rounded-xl font-bold text-xs inline-flex items-center gap-2"
                >
                  <span>Consult AST Engineers</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/projects-map"
                  className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1"
                >
                  <span>See Indian Venues</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#11131c]">
                <Image
                  src={sport.cadImage}
                  alt={`${sport.name} CAD Engineering Design`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#11131c] border border-white/10 px-4 py-2 rounded-xl text-xs font-bold text-amber-400 shadow-xl">
                Precision Sub-Base &amp; Layer Architecture
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 50 Years Trust Banner */}
      <section className="py-16 bg-gradient-to-r from-[#990000] via-[#c01515] to-[#990000] text-center text-white relative shadow-2xl">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl font-black">
            Trusted &amp; Chosen for Over 50 Years
          </h2>
          <p className="mt-3 text-base sm:text-lg text-white/90">
            For half a century, our dedication to precision engineering has earned the trust of
            schools, universities, professional sports federations, and communities worldwide.
          </p>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            TECHNICAL SUPERIORITY
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Why Choose AST Surfaces?
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Experience the synergy of German chemical engineering and precision Indian site execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sport.advantages.map((adv, idx) => (
            <div
              key={idx}
              className="ast-card-glass p-8 space-y-4 hover:border-red-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">{adv.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{adv.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products Systems Grid */}
      <section id="products" className="py-24 bg-[#0a0c12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
              SYSTEM SELECTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Certified Systems for {sport.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sport.products.map((prod, idx) => (
              <div
                key={idx}
                className="group rounded-2xl overflow-hidden bg-[#11131c] border border-white/10 hover:border-red-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                    <Image
                      src={prod.image}
                      alt={prod.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                      {prod.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {prod.description}
                    </p>

                    {prod.specs && (
                      <div className="pt-2 space-y-1 border-t border-white/5">
                        {prod.specs.map((spec, sIdx) => (
                          <div
                            key={sIdx}
                            className="text-[11px] text-amber-300/90 flex items-center gap-1.5"
                          >
                            <span className="h-1 w-1 rounded-full bg-amber-400" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between gap-3">
                  <Link
                    href="/contact-us"
                    className="ast-btn-glow px-4 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-1"
                  >
                    <span>Enquire System</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {prod.pdf && (
                    <a
                      href={prod.pdf}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-slate-300 hover:text-white inline-flex items-center gap-1"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ModernCTA />

      {/* Footer */}
      <ModernFooter />
    </div>
  );
}
