interface SemanticRowProps {
  name: string;
  light: string;
  dark: string;
}

export function SemanticRow({ name, light, dark }: SemanticRowProps) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-neutral-700/30 bg-neutral-900/50 px-4 py-3">
      <div className="flex gap-2">
        <div
          className="size-10 rounded-md border border-neutral-700/50"
          style={{ backgroundColor: light }}
        />
        <div
          className="size-10 rounded-md border border-neutral-700/50"
          style={{ backgroundColor: dark }}
        />
      </div>
      <div>
        <p className="text-sm font-medium text-neutral-50">{name}</p>
        <p className="font-mono text-[10px] text-neutral-500">
          L: {light} &middot; D: {dark}
        </p>
      </div>
    </div>
  );
}
