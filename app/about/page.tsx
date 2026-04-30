import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Wrench, MessageSquare, RefreshCw, Globe, Phone, Users } from "lucide-react";
import CTASection from "@/components/CTASection";
import CertificationStrip from "@/components/CertificationStrip";

export const metadata: Metadata = {
  title: "About us: family-owned seafood business since 1989",
  description:
    "GSA Traders was founded by Gino and Susan Asaro in Cape Town in 1989. Seafood wholesale, processing, and export business supplying local and international buyers for over three decades.",
};

const values = [
  {
    icon: <Wrench size={22} />,
    title: "Product handled from intake to dispatch",
    body: "We manage seafood handling at each stage, from receiving through processing, packing, and cold-chain dispatch. Consistent handling keeps product in specification.",
  },
  {
    icon: <MessageSquare size={22} />,
    title: "Clear communication on availability and lead times",
    body: "When stock is affected by season, catch, or supply conditions, we communicate it. Buyers are not left waiting without information.",
  },
  {
    icon: <RefreshCw size={22} />,
    title: "Buyer relationships built around repeat requirements",
    body: "Our best customer accounts run on repeat orders. We understand their pack sizes, grading preferences, and delivery schedules, and we work to keep those consistent.",
  },
  {
    icon: <Globe size={22} />,
    title: "Sourcing across local and international suppliers",
    body: "We source from South African fisheries and international suppliers to maintain a range that covers seasonal gaps and category breadth.",
  },
  {
    icon: <Phone size={22} />,
    title: "Responsive team with direct access",
    body: "Buyers speak to the people managing product availability and order processing. Questions get answered quickly and by someone who knows the stock.",
  },
  {
    icon: <Users size={22} />,
    title: "Family-owned with operational accountability",
    body: "Being family-owned means the decision-makers are accountable directly to the business and to the buyers. There is no layer of corporate distance between an order and the people responsible for it.",
  },
];

const milestones = [
  { year: "1989", event: "Gino and Susan Asaro founded GSA Traders in Cape Town." },
  { year: "Mid-1990s", event: "Processing capacity expanded and supply extended to larger wholesale and retail accounts." },
  { year: "2000s", event: "Export relationships developed, supplying seafood to European and Asian markets." },
  { year: "2003", event: "KwaZulu-Natal distribution established, extending supply to Durban and the broader KZN market." },
  { year: "Today", event: "Franco and Giovanni Asaro are part of the team, continuing the business their parents built." },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── PAGE HERO ─── */}
      <section className="pt-32 pb-20 bg-[#0D1F3C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "48px 48px" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#93C4E0] mb-4">
              About GSA Traders
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
              Cape Town seafood wholesale, processing, and export since 1989
            </h1>
            <p className="text-lg text-white/65 leading-relaxed max-w-2xl">
              GSA Traders was founded by Gino and Susan Asaro in Cape Town. Over more than three decades the business has grown into an established seafood wholesale, processing, and export operation supplying local and international buyers.
            </p>
          </div>
        </div>
      </section>

      {/* ─── OUR STORY ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#2980B9] mb-3">
                Our story
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D1F3C] tracking-tight mb-6">
                How the business was built
              </h2>
              <div className="space-y-4 text-[#0D1F3C]/70 leading-relaxed text-base">
                <p>
                  Gino and Susan Asaro started GSA Traders in Cape Town in 1989. From the beginning the work was practical: source good product, handle it carefully, and supply buyers consistently.
                </p>
                <p>
                  Over time the business grew. Processing capacity was added, supplier relationships were extended, and the cold-chain infrastructure was developed to serve larger wholesale and export accounts. Growth came from doing the work well and from the relationships built with buyers over many years.
                </p>
                <p>
                  Franco and Giovanni Asaro are now actively involved. They work across operations, purchasing, and sales, and carry forward the same standards the business has operated to since the beginning.
                </p>
                <p>
                  GSA Traders remains privately and family-owned. The people answering enquiries and approving orders are the same people whose names are on the business.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/facility/facility-exterior.jpg"
                  alt="GSA Traders, Cape Town"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0D1F3C]/70 to-transparent px-5 py-4">
                  <p className="text-white text-sm font-medium">Cape Town facility</p>
                  <p className="text-white/60 text-xs">Replace with founders or team photo when available</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "35+", sub: "Years in operation" },
                  { label: "2", sub: "Family generations" },
                  { label: "Local and export", sub: "Market reach" },
                  { label: "Cape Town", sub: "Head office" },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-xl bg-[#EBF5FB] border border-[#D6EBF7] text-center">
                    <div className="text-xl font-bold text-[#0D1F3C]">{stat.label}</div>
                    <div className="text-xs text-[#0D1F3C]/55 mt-1">{stat.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="py-20 bg-[#FAFCFE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#2980B9] mb-3">
              Our history
            </p>
            <h2 className="text-3xl font-bold text-[#0D1F3C] tracking-tight">
              Over three decades of operation
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[#D6EBF7] md:-translate-x-0.5" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className={`relative flex gap-6 md:gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start`}>
                  <div className="md:w-1/2 md:flex md:justify-end">
                    <div className={`${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12 md:text-left"} ml-16 md:ml-0`}>
                      <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-[#EBF5FB] text-[#1A5276] mb-2">
                        {m.year}
                      </span>
                      <p className="text-sm text-[#0D1F3C]/70 leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#2980B9] border-3 border-white shadow-md flex-shrink-0" />
                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE NEXT GENERATION ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#EBF5FB] border border-[#D6EBF7] flex items-center justify-center">
                {/* Replace with: <Image src="/images/team/franco-asaro.jpg" alt="Franco Asaro" fill className="object-cover" /> */}
                <div className="text-center text-[#2980B9]/30 p-4">
                  <div className="w-10 h-10 rounded-full bg-[#D6EBF7] mx-auto mb-2 flex items-center justify-center">
                    <Users size={18} className="text-[#2980B9]/40" />
                  </div>
                  <p className="text-xs font-medium">Franco Asaro</p>
                  <p className="text-[10px] mt-1 font-mono text-[#2980B9]/25">/images/team/franco.jpg</p>
                </div>
              </div>
              <div className="mt-10 aspect-[3/4] rounded-2xl overflow-hidden bg-[#EBF5FB] border border-[#D6EBF7] flex items-center justify-center">
                {/* Replace with: <Image src="/images/team/giovanni-asaro.jpg" alt="Giovanni Asaro" fill className="object-cover" /> */}
                <div className="text-center text-[#2980B9]/30 p-4">
                  <div className="w-10 h-10 rounded-full bg-[#D6EBF7] mx-auto mb-2 flex items-center justify-center">
                    <Users size={18} className="text-[#2980B9]/40" />
                  </div>
                  <p className="text-xs font-medium">Giovanni Asaro</p>
                  <p className="text-[10px] mt-1 font-mono text-[#2980B9]/25">/images/team/giovanni.jpg</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#2980B9] mb-3">
                The next generation
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D1F3C] tracking-tight mb-5">
                Franco and Giovanni Asaro
              </h2>
              <p className="text-base text-[#0D1F3C]/65 leading-relaxed mb-5">
                Franco and Giovanni Asaro grew up around the business. They know the product categories, the suppliers, and the standards the business has been known for.
              </p>
              <p className="text-base text-[#0D1F3C]/65 leading-relaxed mb-8">
                They work across purchasing, processing, and sales. The aim is straightforward: keep the supply consistent, keep the standards up, and maintain the customer relationships built over the years.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0D1F3C] text-white text-sm font-semibold rounded-xl hover:bg-[#1A5276] transition-colors"
              >
                Get in touch
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-20 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#93C4E0] mb-3">
              How we work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              How we operate day to day
            </h2>
            <p className="text-base text-white/60 leading-relaxed">
              These are the principles that guide how we source, process, and supply seafood, and how we work with the people who buy from us.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#2980B9]/20 flex items-center justify-center text-[#93C4E0] mb-4">
                  {v.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ─── */}
      <CertificationStrip showNote />

      {/* ─── CTA ─── */}
      <CTASection
        title="Send us your product requirements"
        body="Whether you are a restaurant buyer, retailer, distributor, or export buyer, our team can advise on what is available, how it is packed, and how it gets to you."
        primaryLabel="Contact our team"
        primaryHref="/contact"
        secondaryLabel="View our products"
        secondaryHref="/products"
        variant="ice"
      />
    </>
  );
}
