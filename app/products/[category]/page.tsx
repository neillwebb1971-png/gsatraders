import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Package } from "lucide-react";
import CTASection from "@/components/CTASection";
import { productCategories } from "@/lib/products";
import { SeafoodIcon } from "@/components/SeafoodIcons";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return productCategories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = productCategories.find((c) => c.slug === category);
  if (!cat) return { title: "Category Not Found" };
  return {
    title: `${cat.name}: Seafood Products`,
    description: `GSA Traders supplies ${cat.name.toLowerCase()} to wholesale, restaurant, retail, and export buyers. Processed in Cape Town with cold-chain delivery. ${cat.description}`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const cat = productCategories.find((c) => c.slug === category);
  if (!cat) notFound();

  const otherCategories = productCategories.filter((c) => c.slug !== category).slice(0, 4);

  return (
    <>
      {/* ─── PAGE HERO ─── */}
      <section className="pt-32 pb-16 bg-[#0D1F3C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "48px 48px" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm text-[#93C4E0] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            All products
          </Link>
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
              <SeafoodIcon type={cat.icon} size={32} className="text-[#93C4E0]" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#93C4E0] mb-2">
                Product Category
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-3">
                {cat.name}
              </h1>
              <p className="text-lg text-white/65 leading-relaxed max-w-2xl">
                {cat.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AVAILABILITY NOTICE ─── */}
      <div className="bg-[#EBF5FB] border-b border-[#C8E4F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <p className="text-sm text-[#0D1F3C]/60 text-center">
            <strong className="text-[#1A5276] font-semibold">Availability note:</strong>{" "}
            Species availability, grading, and packaging specifications may vary. Contact our sales team for current stock.
          </p>
        </div>
      </div>

      {/* ─── PRODUCTS TABLE ─── */}
      <section className="py-16 md:py-20 bg-[#FAFCFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-[#0D1F3C]">
                {cat.products.length} species available
              </h2>
              <p className="text-sm text-[#0D1F3C]/50 mt-1">
                Contact us to confirm current stock, preferred packaging, and pricing.
              </p>
            </div>
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#0D1F3C] text-white text-sm font-semibold rounded-lg hover:bg-[#1A5276] transition-colors"
            >
              Enquire now
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="bg-white rounded-2xl border border-[#EBF5FB] overflow-hidden shadow-[0_2px_16px_rgba(13,31,60,0.06)]">
            {/* Table header */}
            <div className="hidden md:grid grid-cols-[2fr_2fr_2fr_2fr] gap-4 px-6 py-3.5 bg-[#0D1F3C] text-xs font-semibold tracking-widest uppercase text-white/60">
              <span>Common Name</span>
              <span>Scientific Name</span>
              <span>Packaging Options</span>
              <span>Grading</span>
            </div>

            {/* Rows */}
            <div className="divide-y divide-[#EBF5FB]">
              {cat.products.map((product, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-[2fr_2fr_2fr_2fr] gap-2 md:gap-4 px-6 py-4 hover:bg-[#FAFCFE] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-md bg-[#EBF5FB] flex items-center justify-center flex-shrink-0">
                      <Package size={13} className="text-[#2980B9]" />
                    </div>
                    <span className="font-semibold text-sm text-[#0D1F3C]">{product.name}</span>
                  </div>
                  <div>
                    <span className="text-xs text-[#0D1F3C]/50 italic md:block">
                      <span className="md:hidden text-[10px] text-[#2980B9] font-medium not-italic uppercase tracking-wider mr-1">Scientific: </span>
                      {product.scientificName ?? "—"}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-[#0D1F3C]/70 md:block">
                      <span className="md:hidden text-[10px] text-[#2980B9] font-medium uppercase tracking-wider mr-1">Packaging: </span>
                      {product.packaging ?? "Contact for details"}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-[#0D1F3C]/70 md:block">
                      <span className="md:hidden text-[10px] text-[#2980B9] font-medium uppercase tracking-wider mr-1">Grading: </span>
                      {product.grading ?? "Contact for details"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="mt-6 p-4 rounded-xl bg-[#EBF5FB] border border-[#D6EBF7]">
            <p className="text-xs text-[#0D1F3C]/55 leading-relaxed">
              <strong className="text-[#1A5276]">Note:</strong> The above information is indicative. Grading and packaging are subject to availability and can be customised to buyer specification. WR = Whole Round · H&G = Head & Gutted · IQF = Individually Quick Frozen. Contact our sales team for current pricing, pack sizes, and delivery options.
            </p>
          </div>
        </div>
      </section>

      {/* ─── MORE CATEGORIES ─── */}
      <section className="py-16 bg-white border-t border-[#EBF5FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-[#0D1F3C]">Other categories</h2>
            <Link
              href="/products"
              className="text-sm font-semibold text-[#2980B9] hover:text-[#1A5276] inline-flex items-center gap-1.5 transition-colors"
            >
              View all <ArrowRight size={13} />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {otherCategories.map((oc) => (
              <Link
                key={oc.slug}
                href={`/products/${oc.slug}`}
                className="group flex items-center gap-3 p-4 rounded-xl bg-[#FAFCFE] border border-[#EBF5FB] hover:border-[#93C4E0] hover:bg-white transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-[#EBF5FB] flex items-center justify-center flex-shrink-0 group-hover:bg-[#D6EBF7] transition-colors">
                  <SeafoodIcon type={oc.icon} size={18} className="text-[#1A5276]" />
                </div>
                <span className="text-sm font-semibold text-[#0D1F3C] group-hover:text-[#1A5276] transition-colors leading-tight">
                  {oc.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Enquire about ${cat.name}`}
        body="Contact our sales team to confirm current stock, volumes, grading, pack sizes, and delivery for local and export orders."
        primaryLabel="Speak to sales"
        primaryHref="/contact"
        secondaryLabel="Request product list"
        secondaryHref="/contact?reason=catalogue"
        variant="navy"
      />
    </>
  );
}
