interface KTANASymbolProps {
  size?: number;
  variant?: "dark" | "light";
  className?: string;
}

export function KTANASymbol({ size = 64, variant = "dark", className }: KTANASymbolProps) {
  const fill = variant === "dark" ? "#FAF5EA" : "#141414";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M50 5L90 27.5V72.5L50 95L10 72.5V27.5L50 5Z"
        stroke={fill}
        strokeWidth="3"
      />
      <path
        d="M50 20L75 35V65L50 80L25 65V35L50 20Z"
        fill={fill}
      />
      <path
        d="M38 40L50 30L62 40V60L50 70L38 60V40Z"
        fill={variant === "dark" ? "#0D0D0D" : "#FAF5EA"}
      />
    </svg>
  );
}

interface KTANALetteringProps {
  height?: number;
  variant?: "dark" | "light";
  className?: string;
}

export function KTANALettering({ height = 32, variant = "dark", className }: KTANALetteringProps) {
  const fill = variant === "dark" ? "#FAF5EA" : "#141414";
  const width = height * 4.5;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <text
        x="0"
        y="32"
        fontFamily="'Zen Dots', cursive"
        fontSize="36"
        fontWeight="400"
        fill={fill}
        letterSpacing="2"
      >
        KTANA
      </text>
    </svg>
  );
}

interface KTANALogotypeProps {
  height?: number;
  layout?: "horizontal" | "vertical";
  variant?: "dark" | "light";
  className?: string;
}

export function KTANALogotype({ height = 48, layout = "horizontal", variant = "dark", className }: KTANALogotypeProps) {
  if (layout === "vertical") {
    return (
      <div className={`flex flex-col items-center gap-2 ${className ?? ""}`}>
        <KTANASymbol size={height * 0.7} variant={variant} />
        <KTANALettering height={height * 0.3} variant={variant} />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      <KTANASymbol size={height * 0.8} variant={variant} />
      <KTANALettering height={height * 0.45} variant={variant} />
    </div>
  );
}
