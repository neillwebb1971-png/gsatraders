import Image from "next/image";

const certs = [
  {
    label: "HACCP",
    src: "/images/certifications/haccp.png",
  },
  {
    label: "NRCS",
    src: "/images/certifications/nrcs.png",
  },
  {
    label: "FDA Registered",
    src: "/images/certifications/fda.png",
  },
  {
    label: "MSC Certified",
    src: "/images/certifications/msc.png",
  },
  {
    label: "Intertek",
    src: "/images/certifications/intertek.png",
  },
];

interface CertificationStripProps {
  variant?: "light" | "dark";
  showNote?: boolean;
}

export default function CertificationStrip({
  variant = "light",
  showNote = false,
}: CertificationStripProps) {
  const isDark = variant === "dark";

  return (
    <div className={`py-10 ${isDark ? "bg-[#0D1F3C]/80" : "bg-[#EBF5FB]/60 border-y border-[#C8E4F5]/60"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className={`text-xs font-semibold tracking-widest uppercase text-center mb-8 ${isDark ? "text-white/40" : "text-[#0D1F3C]/40"}`}>
          Compliance &amp; Certifications
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {certs.map((cert) => (
            <div
              key={cert.label}
              className={`flex items-center justify-center rounded-lg px-4 py-3 ${
                isDark ? "bg-white/10" : "bg-white shadow-sm border border-[#D6EBF7]"
              }`}
            >
              <Image
                src={cert.src}
                alt={cert.label}
                width={100}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
        {showNote && (
          <p className={`text-xs text-center mt-6 max-w-lg mx-auto leading-relaxed ${isDark ? "text-white/35" : "text-[#0D1F3C]/40"}`}>
            Certification status is subject to current audit cycles. Please confirm applicable certifications for your market with our team. MSC status should be verified before use in export documentation.
          </p>
        )}
      </div>
    </div>
  );
}
