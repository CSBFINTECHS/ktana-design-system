interface SubSectionProps {
  title: string;
  children: React.ReactNode;
}

export function SubSection({ title, children }: SubSectionProps) {
  return (
    <div className="mb-12">
      <h3 className="mb-5 font-display text-xl text-neutral-50">{title}</h3>
      {children}
    </div>
  );
}
