import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  Users,
  Building2,
  Snowflake,
  MapPin,
  CheckCircle,
} from "lucide-react";
import ProductCategoryCard from "@/components/ProductCategoryCard";
import CTASection from "@/components/CTASection";
import CertificationStrip from "@/components/CertificationStrip";
import TrustBadge from "@/components/TrustBadge";
import { productCategories } from "@/lib/products";

export const metadata: Metadata = {
  title: "Seafood wholesale, processing, import and export | Cape Town",
  description:
    "GSA Traders supplies seafood to restaurants, retailers, wholesalers, and export buyers from Cape Town. Established in 1989. Family-owned. Processing, cold-chain distribution, and export supply.",
};

const trustMarkers = [
  { icon: <Award size={18} />, label: "Established 1989", sublabel: "Cape Town, South Africa" },
  { icon: <Users size={18} />, label: "Family-owned and operated", sublabel: "Gino, Susan, Franco and Giovanni Asaro" },
  { icon: <Building2 size={18} />, label: "Cape Town processing facility", sublabel: "In-house processing to buyer spec" },
  { icon: <Snowflake size={18} />, label: "Cold-chain distribution", sublabel: "Western Cape and KZN" },
  { icon: <MapPin size={18} />, label: "Local and export supply", sublabel: "South Africa and international markets" },
];

const capabilities = [
  {
    title: "In-house processing",
    body: "Cutting, filleting, trimming, portioning, grading, and packing to buyer specification at our Cape Town facility.",
    icon: "🔪",
  },
  {
    title: "Cold-chain distribution",
    body: "Temperature-controlled handling from processing through to delivery. Western Cape and KZN distribution.",
    icon: "❄️",
  },
  {
    title: "Import and export",
    body: "Sourcing from local fisheries and international suppliers. Experience with EU, US, and Asian market documentation requirements.",
    icon: "🌍",
  },
  {
    title: "Pack formats to order",
    body: "Retail-ready, food service, IQF, block-frozen, and vacuum-packed formats. Own-label packaging available on request.",
    icon: "📦",
  },
];

const whyGSA = [
  "In-house processing gives tighter control over grading, portioning, and pack specifications",
  "Long-running supplier relationships support consistent access across multiple product categories",
  "Cape Town processing and KZN distribution cover key South African market areas",
  "Buyers deal directly with the team managing availability, orders, and specifications",
  "Export documentation and compliance requirements are handled for each relevant market",
  "Over three decades of continuous operation as a family-owned business",
];

export default function HomePage() {
  const featuredCategories = productCategories.slice(0, 8);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#0D1F3C] pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-bg.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1F3C]/92 via-[#0D1F3C]/75 to-[#0D1F3C]/35" />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "48px 48px" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2980B9]/20 border border-[#2980B9]/30 text-[#93C4E0] text-xs font-semibold tracking-widest uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#93C4E0] animate-pulse" />
              Cape Town · Est. 1989
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6">
              Seafood supplied, processed, and{" "}
              <span className="text-[#93C4E0]">packed to order</span>{" "}
              since 1989.
            </h1>

            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mb-10">
              GSA Traders supplies wholesale and export buyers with a broad range of seafood species, processed and packed to specification at our Cape Town facility. We work with restaurants, retailers, distributors, and international buyers across local and export markets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#2980B9] text-white font-semibold rounded-xl hover:bg-[#1A5276] transition-colors text-sm"
              >
                View product range
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-sm"
              >
                Speak to sales
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 md:h-12">
            <path d="M0 64L480 20L960 48L1440 0V64H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ─── TRUST MARKERS ─── */}
      <section className="py-8 bg-white border-b border-[#EBF5FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center md:justify-between">
            {trustMarkers.map((t) => (
              <TrustBadge key={t.label} icon={t.icon} label={t.label} sublabel={t.sublabel} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCT CATEGORIES ─── */}
      <section className="py-20 bg-[#FAFCFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#2980B9] mb-3">
              Product range
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1F3C] tracking-tight mb-4">
              A broad range of species, packed to specification
            </h2>
            <p className="text-base text-[#0D1F3C]/60 leading-relaxed">
              We supply a wide variety of seafood categories, sourcing both locally and internationally. Stock varies by season and sourcing. Contact sales for current availability, grading options, and pack sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {featuredCategories.map((cat) => (
              <ProductCategoryCard
                key={cat.slug}
                slug={cat.slug}
                name={cat.name}
                description={cat.description}
                icon={cat.icon}
                productCount={cat.products.length}
              />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-4 border-t border-[#EBF5FB]">
            <p className="text-sm text-[#0D1F3C]/50">
              Stock, grading, and pack sizes vary by season and sourcing. Contact sales for current availability.
            </p>
            <Link
              href="/products"
              className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-[#1A5276] hover:text-[#0D1F3C] transition-colors"
            >
              View full product range
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CAPABILITIES ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden relative">
                <Image
                  src="/images/facility/facility-exterior.jpg"
                  alt="GSA Traders facility, Cape Town"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#0D1F3C] text-white px-5 py-4 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold">35+</div>
                <div className="text-xs text-white/60 mt-0.5">Years operating</div>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#2980B9] mb-3">
                Processing and cold-chain
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D1F3C] tracking-tight mb-5">
                Cut, graded, portioned, and packed at our Cape Town facility
              </h2>
              <p className="text-base text-[#0D1F3C]/65 leading-relaxed mb-8">
                We process seafood to buyer specification in-house, covering cut type, portion weight, grading, pack format, and labelling where required. Processing to order reduces handling steps and keeps grading and pack sizes consistent.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {capabilities.map((cap) => (
                  <div key={cap.title} className="p-4 rounded-xl bg-[#FAFCFE] border border-[#EBF5FB]">
                    <div className="text-xl mb-2">{cap.icon}</div>
                    <h3 className="text-sm font-bold text-[#0D1F3C] mb-1">{cap.title}</h3>
                    <p className="text-xs text-[#0D1F3C]/55 leading-relaxed">{cap.body}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/processing"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A5276] hover:text-[#0D1F3C] transition-colors"
              >
                View our processing capability
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY GSA ─── */}
      <section className="py-20 bg-[#0D1F3C] relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/fish-fillet-bg.jpg"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-[#0D1F3C]/88" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#93C4E0] mb-3">
                Why buyers choose us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-5">
                Supplying seafood to restaurants, retailers, wholesalers, and export buyers since 1989
              </h2>
              <p className="text-base text-white/60 leading-relaxed mb-6">
                GSA Traders has been operating continuously since 1989. We supply a range of buyer types and have long-running relationships with local and international accounts.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#93C4E0] hover:text-white transition-colors"
              >
                Read about us
                <ArrowRight size={14} />
              </Link>
            </div>
            <div className="space-y-3">
              {whyGSA.map((point, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle size={16} className="text-[#93C4E0] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80 leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAMILY STORY PREVIEW ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#2980B9] mb-3">
                Our story
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D1F3C] tracking-tight mb-5">
                Family-owned since the beginning
              </h2>
              <p className="text-base text-[#0D1F3C]/65 leading-relaxed mb-5">
                Gino and Susan Asaro started GSA Traders in Cape Town in 1989. The business grew through a straightforward approach: source product carefully, process it properly, and supply buyers consistently.
              </p>
              <p className="text-base text-[#0D1F3C]/65 leading-relaxed mb-8">
                Their sons Franco and Giovanni are now involved in the business. The people making decisions at GSA Traders are close to the product, the suppliers, and the customers.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0D1F3C] text-white text-sm font-semibold rounded-xl hover:bg-[#1A5276] transition-colors"
              >
                Read about us
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/facility/team-photo.jpg"
                  alt="GSA Traders team, Cape Town"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="mt-8 aspect-[3/4] rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/facility/fleet-trucks.jpg"
                  alt="GSA Traders delivery fleet, Cape Town"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ─── */}
      <CertificationStrip showNote />

      {/* ─── CTA ─── */}
      <CTASection
        title="Request current availability, pack sizes, and pricing"
        body="Our sales team can advise on what is in stock, current grading options, pack formats, and delivery to your area or port of entry."
        primaryLabel="Send enquiry"
        primaryHref="/contact"
        secondaryLabel="View products"
        secondaryHref="/products"
        variant="ocean"
      />
    </>
  );
}
