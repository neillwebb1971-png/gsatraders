import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 pt-24">
      <p className="text-xs font-semibold tracking-widest uppercase text-[#2980B9] mb-3">404</p>
      <h1 className="text-3xl font-bold text-[#0D1F3C] mb-4">Page not found</h1>
      <p className="text-base text-[#0D1F3C]/60 max-w-md mb-8">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#0D1F3C] text-white text-sm font-semibold rounded-xl hover:bg-[#1A5276] transition-colors"
      >
        <ArrowLeft size={14} />
        Back to home
      </Link>
    </div>
  );
}
