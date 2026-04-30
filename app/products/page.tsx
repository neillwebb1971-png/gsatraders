import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Phone } from "lucide-react";
import ProductCategoryCard from "@/components/ProductCategoryCard";
import CTASection from "@/components/CTASection";
import { productCategories } from "@/lib/products";

export const metadata: Metadata = {
  title: "Seafood product range: wholesale, processing, and export",
  description:
    "GSA Traders supplies hake, squid, tuna, crayfish, soles, game fish, mussels, and more to wholesale, restaurant, retail, and export buyers. Processed and packed to specification in Cape Town.",
};

export default function ProductsPage() {
  return (
    <>
      {/* ─── PAGE HERO ─── */}
      <section className="pt-32 pb-16 bg-[#0D1F3C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "48px 48px" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#93C4E0] mb-4">
              Product Range
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
              Seafood categories across local and international species
            </h1>
            <p className="text-lg text-white/65 leading-relaxed">
              We source and supply hake, squid, tuna, crayfish, soles, game fish, mussels, prawns, and freshwater species from local and international origins. All product is processed and packed to specification at our Cape Town facility.
            </p>
          </div>
        </div>
      </section>

      {/* ─── AVAILABILITY NOTICE ─── */}
      <div className="bg-[#EBF5FB] border-b border-[#C8E4F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <p className="text-sm text-[#0D1F3C]/60 text-center">
            <strong className="text-[#1A5276] font-semibold">Availability note:</strong>{" "}
            Product availability, grading, and packaging may vary by season and sourcing. Contact our sales team for current stock and specifications.
          </p>
        </div>
      </div>

      {/* ─── CATEGORIES GRID ─── */}
      <section className="py-16 md:py-20 bg-[#FAFCFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {productCategories.map((cat) => (
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
        </div>
      </section>

      {/* ─── CATALOGUE REQUEST ─── */}
      <section className="py-16 bg-white border-t border-[#EBF5FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-6 rounded-2xl border border-[#EBF5FB] bg-[#FAFCFE]">
              <div className="w-12 h-12 rounded-xl bg-[#EBF5FB] flex items-center justify-center flex-shrink-0">
                <FileText size={22} className="text-[#2980B9]" />
              </div>
              <div>
                <h3 className="font-bold text-[#0D1F3C] mb-1">Request product list</h3>
                <p className="text-sm text-[#0D1F3C]/60 leading-relaxed mb-3">
                  Our full product list includes all available species, pack sizes, grading specifications, and packaging options. Contact us to receive the current version.
                </p>
                <Link
                  href="/contact?reason=catalogue"
                  className="text-sm font-semibold text-[#2980B9] hover:text-[#1A5276] inline-flex items-center gap-1.5 transition-colors"
                >
                  Request product list <ArrowRight size={13} />
                </Link>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-2xl border border-[#EBF5FB] bg-[#FAFCFE]">
              <div className="w-12 h-12 rounded-xl bg-[#EBF5FB] flex items-center justify-center flex-shrink-0">
                <Phone size={22} className="text-[#2980B9]" />
              </div>
              <div>
                <h3 className="font-bold text-[#0D1F3C] mb-1">Speak to sales about availability</h3>
                <p className="text-sm text-[#0D1F3C]/60 leading-relaxed mb-3">
                  Our sales team can advise on current stock, seasonal availability, and lead times for specific species or volumes.
                </p>
                <Link
                  href="/contact"
                  className="text-sm font-semibold text-[#2980B9] hover:text-[#1A5276] inline-flex items-center gap-1.5 transition-colors"
                >
                  Contact sales <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CTASection
        title="Request current availability, pack sizes, and pricing"
        body="Our sales team can advise on what is in stock, grading options, pack formats, and delivery to your area or port of entry."
        primaryLabel="Send enquiry"
        primaryHref="/contact"
        secondaryLabel="About our processing"
        secondaryHref="/processing"
        variant="navy"
      />
    </>
  );
}
