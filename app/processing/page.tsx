import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Thermometer, Award, Layers } from "lucide-react";
import CTASection from "@/components/CTASection";
import CertificationStrip from "@/components/CertificationStrip";
import ImageGallery from "@/components/ImageGallery";

export const metadata: Metadata = {
  title: "Processing and cold-chain: Cape Town seafood facility",
  description:
    "GSA Traders operates a HACCP-certified seafood processing facility in Cape Town. Processing, grading, packaging, and cold-chain distribution for wholesale and export buyers.",
};

const capabilities = [
  "Cutting, portioning, and trimming to buyer specification",
  "Skinning and filleting: hake, kingklip, soles, game fish, and more",
  "Grading by size and weight across all product categories",
  "Cleaning and processing of cephalopods (squid, octopus, cuttlefish)",
  "Crustacean processing: tails, cooked, IQF, block frozen",
  "Retail and food service portion control packaging",
  "IQF (Individually Quick Frozen) and block-frozen processing",
  "Custom label and own-brand packaging support",
  "Vacuum packing and modified atmosphere packaging",
  "Temperature-controlled handling throughout",
];

const coldChain = [
  {
    icon: <Thermometer size={20} />,
    title: "Temperature-Controlled Throughout",
    body: "From the processing floor to dispatch, product is maintained within the required cold-chain parameters. We do not cut corners on temperature control.",
  },
  {
    icon: <Layers size={20} />,
    title: "Frozen Fish Handling",
    body: "We handle both fresh and frozen products, with correct tempering protocols for frozen fish that requires secondary processing or repackaging.",
  },
  {
    icon: <Award size={20} />,
    title: "HACCP-Certified Facility",
    body: "Our processing facility operates under a HACCP food safety management system, supporting the requirements of both local and export market buyers.",
  },
  {
    icon: <ArrowRight size={20} />,
    title: "Distribution Network",
    body: "We distribute to buyers across the Western Cape and KwaZulu-Natal. Export shipments are handled with the documentation and cold-chain logistics required for international markets.",
  },
];

const facilityImages = [
  { src: "/images/facility/facility-exterior-2.jpg", alt: "GSA Traders facility and delivery fleet, Cape Town" },
  { src: "/images/facility/fleet-trucks.jpg", alt: "GSA Traders branded delivery fleet" },
  { src: "/images/facility/team-photo.jpg", alt: "GSA Traders team, Cape Town" },
  { src: "/images/products/hake-fillets-pack.jpg", alt: "GSA Ocean Products hake fillets 500g" },
  { src: "/images/products/calamari-tubes-pack.jpg", alt: "GSA Ocean Products calamari tubes and tentacles" },
  { src: "/images/products/tuna-steaks-pack.jpg", alt: "GSA Ocean Products tuna steaks 1kg" },
];

const exportMarkets = [
  { region: "European Union", detail: "EU market compliant; required documentation and traceability supported" },
  { region: "United States", detail: "FDA-registered; HACCP-aligned processing for US import requirements" },
  { region: "Asia-Pacific", detail: "Experience supplying to Japanese, Korean, and Chinese markets" },
  { region: "Middle East", detail: "Halal-compliant processing available on request" },
  { region: "Domestic (South Africa)", detail: "Wholesale supply to Western Cape and KZN, with nationwide distribution support" },
];

export default function ProcessingPage() {
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
              Processing and cold-chain
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
              A serious processing facility, built for buyer requirements
            </h1>
            <p className="text-lg text-white/65 leading-relaxed max-w-2xl">
              Our Cape Town processing facility is where raw material becomes market-ready product. We cut, grade, portion, freeze, and package seafood to specification for restaurants, retailers, wholesalers, and export buyers.
            </p>
          </div>
        </div>
      </section>

      {/* ─── OVERVIEW ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#2980B9] mb-3">
                Facility overview
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D1F3C] tracking-tight mb-5">
                Processing to specification
              </h2>
              <p className="text-base text-[#0D1F3C]/65 leading-relaxed mb-5">
                Our Cape Town facility handles the full range of seafood processing tasks, from primary processing of whole fish through to custom portioning, vacuum packing, and retail-ready formats. We work directly to buyer specification, which keeps handling steps to a minimum and quality control tight.
              </p>
              <p className="text-base text-[#0D1F3C]/65 leading-relaxed mb-8">
                Our team has hands-on experience across multiple species and product categories. We know the difference between a 150g restaurant portion and a 200g retail vacuum pack, and we process accordingly.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0D1F3C] text-white text-sm font-semibold rounded-xl hover:bg-[#1A5276] transition-colors"
              >
                Discuss your processing requirements
                <ArrowRight size={14} />
              </Link>
            </div>

            <div>
              <h3 className="text-sm font-bold text-[#0D1F3C] mb-4 tracking-wide">
                Processing capabilities
              </h3>
              <div className="space-y-2.5">
                {capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={15} className="text-[#2980B9] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#0D1F3C]/70 leading-relaxed">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FACILITY GALLERY ─── */}
      <section className="py-16 bg-[#FAFCFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#2980B9] mb-3">
              Facility photos
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0D1F3C] tracking-tight">
              Inside our Cape Town processing facility
            </h2>
            <p className="text-sm text-[#0D1F3C]/50 mt-2">
              Placeholder images. Replace with actual facility photography.
            </p>
          </div>
          <ImageGallery images={facilityImages} columns={3} />
        </div>
      </section>

      {/* ─── COLD CHAIN ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#2980B9] mb-3">
              Cold-chain reliability
            </p>
            <h2 className="text-3xl font-bold text-[#0D1F3C] tracking-tight mb-4">
              Temperature-controlled from facility to delivery
            </h2>
            <p className="text-base text-[#0D1F3C]/60 leading-relaxed">
              Cold-chain integrity is a basic requirement of this business. Product temperature is maintained from the processing floor through to delivery, and our logistics procedures are set up accordingly.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {coldChain.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-[#FAFCFE] border border-[#EBF5FB]">
                <div className="w-10 h-10 rounded-xl bg-[#EBF5FB] flex items-center justify-center text-[#2980B9] mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-[#0D1F3C] mb-2">{item.title}</h3>
                <p className="text-sm text-[#0D1F3C]/60 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPORT MARKETS ─── */}
      <section className="py-20 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#93C4E0] mb-3">
                Export and distribution
              </p>
              <h2 className="text-3xl font-bold text-white tracking-tight mb-5">
                Supplying local and international buyers
              </h2>
              <p className="text-base text-white/60 leading-relaxed mb-5">
                We have experience supplying seafood to buyers across multiple international markets. Our processing and documentation practices are designed to meet the requirements of the markets we serve.
              </p>
              <p className="text-base text-white/60 leading-relaxed">
                If you're an import buyer, speak to our team about product specifications, certifications, shelf-life, and documentation requirements. We can work with your freight forwarder or arrange export logistics.
              </p>
            </div>
            <div className="space-y-3">
              {exportMarkets.map((m) => (
                <div key={m.region} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle size={16} className="text-[#93C4E0] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-white">{m.region}</div>
                    <div className="text-xs text-white/50 mt-0.5">{m.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ─── */}
      <CertificationStrip variant="light" showNote />

      {/* ─── CTA ─── */}
      <CTASection
        title="Processing to your specification"
        body="Tell us what you need: species, cut, portion size, packaging format, and volume. Our team will advise on what we can produce from our Cape Town facility."
        primaryLabel="Send a processing enquiry"
        primaryHref="/contact"
        secondaryLabel="View product range"
        secondaryHref="/products"
        variant="ocean"
      />
    </>
  );
}
