"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Download,
  CheckCircle2,
  Phone,
  Eye,
  X,
  Layers,
  Sparkles
} from "lucide-react";
import { GlassHeader } from "@/components/layout/glass-header";
import { ModernFooter } from "@/components/layout/modern-footer";
import { ModernCTA } from "@/components/sections/modern-cta";
import { productsData } from "@/content/products-data";

export function ProductPageView({ slug }: { slug: string }) {
  const data = productsData[slug];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!data) {
    return (
      <div className="min-h-screen bg-[#08090d] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black">Product Not Found</h1>
          <Link href="/" className="ast-btn-glow mt-4 inline-block px-6 py-2 rounded-xl text-sm">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#08090d] text-white">
      <GlassHeader />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {data.heroVideo ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              poster={data.heroImage}
              className="w-full h-full object-cover opacity-50 scale-105"
            >
              <source src={data.heroVideo} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={data.heroImage}
              alt={data.title}
              fill
              priority
              className="object-cover opacity-50 scale-105"
              sizes="100vw"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-[#08090d]/65 to-black/80" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-600/15 rounded-full blur-[130px] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-xl mb-6 shadow-xl">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-bold tracking-wider text-amber-300 uppercase">
              {data.badge}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight mb-6">
            <span className="block text-white">{data.title}</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-10">
            {data.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact-us"
              className="ast-btn-glow w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 group shadow-2xl"
            >
              <span>Get System Proposal</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#specifications"
              className="ast-btn-glass w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm flex items-center justify-center"
            >
              View Specifications
            </a>
          </div>
        </div>
      </section>

      {/* Description & Key Features */}
      <section className="py-24 relative overflow-hidden bg-[#0a0c12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
              SYSTEM OVERVIEW
            </span>
            <p className="text-slate-300 text-lg leading-relaxed">{data.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.keyFeatures.map((feat, i) => (
              <div
                key={i}
                className="ast-card-glass p-8 space-y-3 hover:border-red-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-400 font-bold text-sm">
                    0{i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white">{feat.title}</h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed pl-13">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section id="specifications" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            ENGINEERING METRICS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Technical Specifications
          </h2>
        </div>

        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10 bg-[#12141f] shadow-2xl">
          <div className="divide-y divide-white/10">
            {data.specifications.map((spec, i) => (
              <div
                key={i}
                className="grid grid-cols-1 sm:grid-cols-3 p-5 sm:p-6 hover:bg-white/[0.02] transition-colors"
              >
                <div className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mb-1 sm:mb-0">
                  {spec.label}
                </div>
                <div className="sm:col-span-2 text-sm sm:text-base font-semibold text-white">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Catalogues */}
        {data.catalogues && data.catalogues.length > 0 && (
          <div className="mt-12 text-center">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
              Download Official Documentation
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {data.catalogues.map((cat, i) => (
                <a
                  key={i}
                  href={cat.file}
                  target="_blank"
                  rel="noreferrer"
                  className="ast-btn-glass px-6 py-3 rounded-xl text-xs font-bold inline-flex items-center gap-2 hover:border-amber-400/50"
                >
                  <Download className="w-4 h-4 text-amber-400" />
                  <span>{cat.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Gallery */}
      {data.gallery && data.gallery.length > 0 && (
        <section className="py-24 bg-[#0a0c12]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
                PROJECT PORTFOLIO
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Installation Gallery
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.gallery.map((img, i) => (
                <div
                  key={i}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-[#12141f] cursor-pointer hover:border-red-500/50 transition-all duration-300"
                  onClick={() => setSelectedImage(img)}
                >
                  <Image
                    src={img}
                    alt={`Gallery ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-black/70 p-3 rounded-full text-white">
                      <Eye className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] aspect-video">
            <Image
              src={selectedImage}
              alt="Preview"
              fill
              className="object-contain"
              sizes="100vw"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/70 p-2 rounded-full text-white hover:bg-red-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {/* CTA */}
      <ModernCTA />

      {/* Footer */}
      <ModernFooter />
    </div>
  );
}
