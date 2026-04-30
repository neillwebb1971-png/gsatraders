interface TrustBadgeProps {
  icon: React.ReactNode;
  label: string;
  sublabel?: string;
  variant?: "light" | "dark";
}

export default function TrustBadge({ icon, label, sublabel, variant = "light" }: TrustBadgeProps) {
  const isDark = variant === "dark";
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${
        isDark
          ? "bg-white/10 border-white/20 text-white"
          : "bg-white border-[#EBF5FB] text-[#0D1F3C] shadow-[0_2px_12px_rgba(13,31,60,0.07)]"
      }`}
    >
      <div className={`flex-shrink-0 ${isDark ? "text-[#93C4E0]" : "text-[#2980B9]"}`}>
        {icon}
      </div>
      <div>
        <div className={`text-sm font-semibold ${isDark ? "text-white" : "text-[#0D1F3C]"}`}>
          {label}
        </div>
        {sublabel && (
          <div className={`text-xs mt-0.5 ${isDark ? "text-white/60" : "text-[#0D1F3C]/50"}`}>
            {sublabel}
          </div>
        )}
      </div>
    </div>
  );
}
