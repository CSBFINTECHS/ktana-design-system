export function SectionDivider() {
  return (
    <div className="mx-auto max-w-[1400px] px-8">
      <div
        className="h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 20%, rgba(215, 0, 48, 0.15) 50%, rgba(255,255,255,0.06) 80%, transparent 100%)",
        }}
      />
    </div>
  );
}
