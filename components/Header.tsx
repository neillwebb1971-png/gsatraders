"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/processing", label: "Processing" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-sm shadow-[0_2px_20px_rgba(13,31,60,0.10)]"
          : "bg-white/95 backdrop-blur-sm border-b border-navy-100/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logo/gsa-logo.png"
              alt="GSA Traders"
              width={120}
              height={72}
              className="h-12 md:h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    active
                      ? "text-[#1A5276] bg-[#EBF5FB]"
                      : "text-[#0D1F3C]/75 hover:text-[#1A5276] hover:bg-[#EBF5FB]"
                  }`}
                >
                  {label}
                  {active && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#2980B9] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="text-sm font-semibold px-5 py-2.5 rounded-md bg-[#0D1F3C] text-white hover:bg-[#1A5276] transition-colors"
            >
              Speak to Sales
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-[#0D1F3C] hover:bg-[#EBF5FB] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    active
                      ? "text-[#1A5276] bg-[#EBF5FB]"
                      : "text-[#0D1F3C]/80 hover:bg-[#EBF5FB]"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <div className="pt-2 pb-1 border-t border-gray-100 mt-1">
              <Link
                href="/contact"
                className="block text-center text-sm font-semibold px-4 py-3 rounded-md bg-[#0D1F3C] text-white hover:bg-[#1A5276]"
              >
                Speak to Sales
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
