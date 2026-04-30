import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const nav = [
  { href: "/about", label: "About us" },
  { href: "/products", label: "Products" },
  { href: "/processing", label: "Processing" },
  { href: "/contact", label: "Contact" },
];

const productLinks = [
  { href: "/products/large-pelagics", label: "Large pelagics" },
  { href: "/products/cephalopods", label: "Cephalopods" },
  { href: "/products/crustaceans", label: "Crustaceans" },
  { href: "/products/white-fish", label: "White fish" },
  { href: "/products/game-fish", label: "Game fish" },
  { href: "/products/small-pelagics", label: "Small pelagics" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D1F3C] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="inline-block bg-white rounded-xl px-3 py-2">
                <Image
                  src="/images/logo/gsa-logo.png"
                  alt="GSA Traders"
                  width={110}
                  height={66}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="text-[#93C4E0] text-xs tracking-widest uppercase mt-2">
                Est. 1989
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              A family-owned seafood wholesale, processing, and export business serving local and international markets from Cape Town.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#93C4E0] hover:text-white transition-colors"
            >
              Speak to our sales team
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {nav.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
              Products
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="text-sm text-[#93C4E0] hover:text-white transition-colors font-medium"
                >
                  View all categories →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[#93C4E0] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/70">
                  Cape Town, Western Cape
                  <br />
                  South Africa
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-[#93C4E0] flex-shrink-0" />
                <a
                  href="tel:+27215551234"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  +27 (0)21 555 1234
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-[#93C4E0] flex-shrink-0" />
                <a
                  href="mailto:sales@gsatraders.co.za"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  sales@gsatraders.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} GSA Traders (Pty) Ltd. All rights reserved. Cape Town, South Africa.
          </p>
          <p className="text-white/30 text-xs">
            Seafood Wholesale · Processing · Import · Export · Distribution
          </p>
        </div>
      </div>
    </footer>
  );
}
