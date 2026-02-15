interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
      {children}
    </p>
  );
}
