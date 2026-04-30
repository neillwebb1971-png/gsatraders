import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "navy" | "ocean" | "ice";
}

export default function CTASection({
  title,
  body,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  variant = "navy",
}: CTASectionProps) {
  const styles = {
    navy: {
      wrapper: "bg-[#0D1F3C]",
      title: "text-white",
      body: "text-white/65",
      primary: "bg-[#2980B9] text-white hover:bg-[#1A5276]",
      secondary: "text-white/80 hover:text-white border border-white/30 hover:border-white/60",
    },
    ocean: {
      wrapper: "bg-gradient-to-r from-[#0D1F3C] to-[#1A5276]",
      title: "text-white",
      body: "text-white/65",
      primary: "bg-white text-[#0D1F3C] hover:bg-[#EBF5FB]",
      secondary: "text-white/80 hover:text-white border border-white/30 hover:border-white/60",
    },
    ice: {
      wrapper: "bg-[#EBF5FB]",
      title: "text-[#0D1F3C]",
      body: "text-[#0D1F3C]/65",
      primary: "bg-[#0D1F3C] text-white hover:bg-[#1A5276]",
      secondary: "text-[#1A5276] hover:text-[#0D1F3C] border border-[#1A5276]/30 hover:border-[#0D1F3C]",
    },
  }[variant];

  return (
    <section className={`${styles.wrapper} py-16 md:py-20`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-2xl md:text-3xl font-bold tracking-tight mb-4 ${styles.title}`}>
          {title}
        </h2>
        <p className={`text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed ${styles.body}`}>
          {body}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm transition-colors ${styles.primary}`}
          >
            {primaryLabel}
            <ArrowRight size={16} />
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm transition-colors ${styles.secondary}`}
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
