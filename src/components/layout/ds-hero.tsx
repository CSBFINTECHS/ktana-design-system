export function DSHero() {
  return (
    <section className="relative flex min-h-[600px] flex-col items-center justify-end overflow-hidden bg-neutral-950 pb-16">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "conic-gradient(from 225deg at 50% 50%, #FE006A 26%, #D300C5 52%, #FD4C2A 73%, #FFD100 100%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/80 to-neutral-950" />
      <div className="relative z-10 text-center">
        <h1 className="font-display text-2xl text-brand-fire-400 md:text-3xl lg:text-4xl">
          Design System
        </h1>
        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-neutral-500 md:text-base">
          Brand Toolkit &amp; Identidade Visual KTANA
        </p>
      </div>
    </section>
  );
}
