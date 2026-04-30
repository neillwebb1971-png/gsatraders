import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact us: sales enquiries and buyer support",
  description:
    "Contact GSA Traders for seafood wholesale enquiries. Cape Town head office and KZN distribution. Sales team available for restaurants, retailers, wholesalers, distributors, and export buyers.",
};

const branches = [
  {
    name: "Cape Town (Head Office)",
    address: "Cape Town, Western Cape, South Africa",
    phone: "+27 (0)21 555 1234",
    email: "sales@gsatraders.co.za",
    hours: "Monday–Friday: 07:00–17:00",
    note: "Processing facility and head office",
    mapPlaceholder: "/images/hero/cape-town-map.jpg",
  },
  {
    name: "KwaZulu-Natal",
    address: "Durban, KwaZulu-Natal, South Africa",
    phone: "+27 (0)31 555 5678",
    email: "kzn@gsatraders.co.za",
    hours: "Monday–Friday: 07:30–17:00",
    note: "Distribution and sales office",
    mapPlaceholder: "/images/hero/kzn-map.jpg",
  },
];

export default function ContactPage() {
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
              Get in touch
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
              Speak to our sales team
            </h1>
            <p className="text-lg text-white/65 leading-relaxed">
              Our sales team can discuss product availability, pricing, volumes, pack formats, and delivery. Fill in the form or call your nearest office directly.
            </p>
          </div>
        </div>
      </section>

      {/* ─── BRANCHES ─── */}
      <section className="py-14 bg-[#FAFCFE] border-b border-[#EBF5FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {branches.map((branch) => (
              <div
                key={branch.name}
                className="rounded-2xl bg-white border border-[#EBF5FB] shadow-[0_2px_16px_rgba(13,31,60,0.06)] overflow-hidden"
              >
                {/* Map placeholder */}
                <div className="h-44 bg-[#EBF5FB] border-b border-[#D6EBF7] flex items-center justify-center relative">
                  {/*
                    IMAGE PLACEHOLDER:
                    Replace with: <Image src={branch.mapPlaceholder} alt={`${branch.name} location`} fill className="object-cover" />
                    Or embed a Google Maps iframe
                  */}
                  <div className="text-center text-[#2980B9]/30">
                    <MapPin size={28} className="mx-auto mb-2 text-[#2980B9]/30" />
                    <p className="text-xs font-medium">{branch.name}: Location</p>
                    <p className="text-[10px] mt-0.5 font-mono text-[#2980B9]/25">{branch.mapPlaceholder}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-base font-bold text-[#0D1F3C]">{branch.name}</h3>
                    <span className="text-xs text-[#2980B9] bg-[#EBF5FB] px-2.5 py-1 rounded-full font-medium">
                      {branch.note}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <MapPin size={14} className="text-[#2980B9] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#0D1F3C]/70">{branch.address}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone size={14} className="text-[#2980B9] flex-shrink-0" />
                      <a
                        href={`tel:${branch.phone.replace(/\s/g, "")}`}
                        className="text-sm text-[#0D1F3C]/70 hover:text-[#1A5276] transition-colors"
                      >
                        {branch.phone}
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail size={14} className="text-[#2980B9] flex-shrink-0" />
                      <a
                        href={`mailto:${branch.email}`}
                        className="text-sm text-[#0D1F3C]/70 hover:text-[#1A5276] transition-colors"
                      >
                        {branch.email}
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Clock size={14} className="text-[#2980B9] flex-shrink-0" />
                      <span className="text-sm text-[#0D1F3C]/70">{branch.hours}</span>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ENQUIRY FORM ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: context */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#2980B9] mb-3">
                Send an enquiry
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D1F3C] tracking-tight mb-5">
                Tell us what you need
              </h2>
              <p className="text-base text-[#0D1F3C]/65 leading-relaxed mb-6">
                Fill in the form with your details and what you need. Our sales team will get back to you with availability, pricing, and delivery options.
              </p>
              <div className="space-y-3">
                {[
                  "Wholesale and bulk volume buyers",
                  "Restaurants, hotels, and food service",
                  "Retail and supermarket supply",
                  "Distributors and cold-chain operators",
                  "Export and international buyers",
                  "Processing enquiries and custom specs",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#EBF5FB] flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#2980B9]" />
                    </div>
                    <span className="text-sm text-[#0D1F3C]/70">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 rounded-xl bg-[#FAFCFE] border border-[#EBF5FB]">
                <p className="text-xs text-[#0D1F3C]/50 leading-relaxed">
                  We typically respond to all enquiries within one business day. For urgent requirements, please call our Cape Town office directly.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="p-8 rounded-2xl bg-[#FAFCFE] border border-[#EBF5FB] shadow-[0_2px_20px_rgba(13,31,60,0.07)]">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
