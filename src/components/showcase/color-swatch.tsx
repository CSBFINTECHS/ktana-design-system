interface ColorSwatchProps {
  name: string;
  hex: string;
}

export function ColorSwatch({ name, hex }: ColorSwatchProps) {
  return (
    <div className="group flex flex-col items-center gap-1.5">
      <div
        className="size-16 rounded-lg border border-neutral-700/50 transition-transform group-hover:scale-110"
        style={{ backgroundColor: hex }}
      />
      <span className="text-[11px] font-semibold text-neutral-300">
        {name}
      </span>
      <span className="font-mono text-[10px] text-neutral-500">{hex}</span>
    </div>
  );
}
