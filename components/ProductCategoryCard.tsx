import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SeafoodIcon } from "@/components/SeafoodIcons";

interface ProductCategoryCardProps {
  slug: string;
  name: string;
  description: string;
  icon: string;
  productCount?: number;
  variant?: "default" | "compact";
}

export default function ProductCategoryCard({
  slug,
  name,
  description,
  icon,
  productCount,
  variant = "default",
}: ProductCategoryCardProps) {
  if (variant === "compact") {
    return (
      <Link
        href={`/products/${slug}`}
        className="group flex items-center gap-3 p-4 rounded-xl bg-white border border-[#EBF5FB] hover:border-[#93C4E0] hover:shadow-[0_4px_20px_rgba(41,128,185,0.12)] transition-all"
      >
        <div className="w-10 h-10 rounded-lg bg-[#EBF5FB] flex items-center justify-center flex-shrink-0 group-hover:bg-[#D6EBF7] transition-colors">
          <SeafoodIcon type={icon} size={22} className="text-[#1A5276]" />
        </div>
        <span className="text-sm font-semibold text-[#0D1F3C] group-hover:text-[#1A5276] transition-colors">
          {name}
        </span>
        <ArrowRight size={14} className="ml-auto text-[#2980B9] opacity-0 group-hover:opacity-100 transition-opacity" />
      </Link>
    );
  }

  return (
    <Link
      href={`/products/${slug}`}
      className="group flex flex-col p-6 rounded-2xl bg-white border border-[#EBF5FB] hover:border-[#93C4E0] hover:shadow-[0_8px_32px_rgba(41,128,185,0.12)] transition-all duration-200"
    >
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#EBF5FB] to-[#D6EBF7] flex items-center justify-center mb-4 group-hover:from-[#D6EBF7] group-hover:to-[#C1E1F3] transition-all">
        <SeafoodIcon type={icon} size={28} className="text-[#1A5276]" />
      </div>
      <h3 className="text-base font-bold text-[#0D1F3C] mb-2 group-hover:text-[#1A5276] transition-colors">
        {name}
      </h3>
      <p className="text-sm text-[#0D1F3C]/60 leading-relaxed flex-1">
        {description}
      </p>
      <div className="mt-4 flex items-center justify-between">
        {productCount && (
          <span className="text-xs text-[#2980B9]/70 font-medium">
            {productCount} species
          </span>
        )}
        <span className="ml-auto text-sm font-semibold text-[#2980B9] flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
          View products
          <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}
