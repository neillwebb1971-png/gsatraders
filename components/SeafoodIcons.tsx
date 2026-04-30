interface IconProps {
  size?: number;
  className?: string;
}

// SVG seafood icons. Replace with a real illustration set if available.
function FishLargeIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M2 12C2 12 5 6 12 6C17 6 21 9 22 12C21 15 17 18 12 18C5 18 2 12 2 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M22 12L19 9V15L22 12Z" fill="currentColor" opacity="0.3"/>
      <circle cx="8" cy="11" r="1" fill="currentColor"/>
      <path d="M12 6V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 6.5L15.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function SquidIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="7" rx="5" ry="4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 10C7 10 5 12 5 15C5 17 6 19 6 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17 10C17 10 19 12 19 15C19 17 18 19 18 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 11C9 11 8 14 8 17C8 19 9 21 9 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M15 11C15 11 16 14 16 17C16 19 15 21 15 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M11 11V18C11 19.5 11.5 21 12 21C12.5 21 13 19.5 13 18V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="10" cy="6.5" r="0.75" fill="currentColor"/>
      <circle cx="14" cy="6.5" r="0.75" fill="currentColor"/>
    </svg>
  );
}

function LobsterIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 18C9 18 7 16 7 14C7 12 8 11 8 10C8 9 7 8 6 8C5 8 4 9 4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 18C15 18 17 16 17 14C17 12 16 11 16 10C16 9 17 8 18 8C19 8 20 9 20 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <ellipse cx="12" cy="13" rx="4" ry="6" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 7L9 4M14 7L15 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="10" cy="10" r="0.75" fill="currentColor"/>
      <circle cx="14" cy="10" r="0.75" fill="currentColor"/>
      <path d="M9 15H15M9 17H15" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}

function FlatfishIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="13" rx="8" ry="5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 10C4 10 3 8 3 6C4 7 6 8 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 8V6M9 8.5L8 6M15 8.5L16 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <circle cx="8" cy="12" r="1" fill="currentColor"/>
      <path d="M9 15C10 16 11 17 12 17C14 17 17 15.5 18 13.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}

function GameFishIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12C3 12 6 5 13 5C18 5 21 8 22 12C21 16 18 19 13 19C6 19 3 12 3 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M3 12L1 8V16L3 12Z" fill="currentColor" opacity="0.4"/>
      <circle cx="9" cy="10.5" r="1.25" fill="currentColor"/>
      <path d="M13 5V3M16 6L18 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 11H19M14 13H17" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}

function MusselIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M8 4C5 6 4 9 4 12C4 16 7 20 12 20C17 20 20 16 20 12C20 9 19 6 16 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 4C10 3 14 3 16 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 8C6 9 6 10 6 12C6 15 8 18 12 18C16 18 18 15 18 12C18 10 18 9 17 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <path d="M12 20V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function SardineIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M2 12C2 12 5 8 10 8C15 8 20 10 22 12C20 14 15 16 10 16C5 16 2 12 2 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M22 12L20 9.5V14.5L22 12Z" fill="currentColor" opacity="0.35"/>
      <circle cx="7" cy="11.5" r="0.75" fill="currentColor"/>
      <path d="M10 8L10 6M13 8.5L14 6.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <path d="M11 12H16M12 13.5H15" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}

function WhiteFishIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M2 12C2 12 6 7 12 7C17 7 21 9.5 22 12C21 14.5 17 17 12 17C6 17 2 12 2 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M2 12L4 9V15L2 12Z" fill="currentColor" opacity="0.35"/>
      <circle cx="8" cy="11" r="1" fill="currentColor"/>
      <path d="M12 7V5M15 7.5L16.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M11 11.5C11 11.5 13 11 15 11.5M11 13C12 13.5 14 13.5 16 13" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}

function OtherFishIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M4 12C4 12 7 8 12 8C17 8 21 10 21 12C21 14 17 16 12 16C7 16 4 12 4 12Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 12L2 9V15L4 12Z" fill="currentColor" opacity="0.35"/>
      <circle cx="9" cy="11" r="1" fill="currentColor"/>
      <path d="M14 10C15 9.5 17 9.5 18 10.5M14 13C15 13.5 17 13.5 18 12.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <path d="M12 8V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function FreshwaterIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M3 13C3 13 6 8 11 8C15 8 19 10 21 13C19 16 15 18 11 18C6 18 3 13 3 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M3 13L1 10V16L3 13Z" fill="currentColor" opacity="0.35"/>
      <circle cx="8" cy="12" r="1" fill="currentColor"/>
      <path d="M13 8.5C14 8 16 8 17 8.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <path d="M5 19C6 20 8 21 10 20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 19C4 20 2 21 3 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 12H15M11 14H13" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}

const iconMap: Record<string, React.FC<IconProps>> = {
  "fish-large": FishLargeIcon,
  "squid": SquidIcon,
  "lobster": LobsterIcon,
  "flatfish": FlatfishIcon,
  "gamefish": GameFishIcon,
  "mussel": MusselIcon,
  "sardine": SardineIcon,
  "whitefish": WhiteFishIcon,
  "otherfish": OtherFishIcon,
  "freshwater": FreshwaterIcon,
};

interface SeafoodIconProps {
  type: string;
  size?: number;
  className?: string;
}

export function SeafoodIcon({ type, size = 24, className = "" }: SeafoodIconProps) {
  const Icon = iconMap[type] ?? OtherFishIcon;
  return <Icon size={size} className={className} />;
}
