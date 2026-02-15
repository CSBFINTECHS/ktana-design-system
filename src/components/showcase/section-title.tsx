interface SectionTitleProps {
  children: React.ReactNode;
  sub?: string;
}

export function SectionTitle({ children, sub }: SectionTitleProps) {
  return (
    <div className="mb-10">
      <h2 className="font-display text-4xl text-neutral-50 md:text-5xl">
        {children}
      </h2>
      {sub && (
        <p className="mt-3 max-w-3xl text-lg text-neutral-400">{sub}</p>
      )}
    </div>
  );
}
