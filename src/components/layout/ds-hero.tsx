import Image from "next/image";
import { assetUrl } from "@/lib/utils";

export function DSHero() {
  return (
    <section className="relative flex min-h-[800px] flex-col overflow-hidden bg-black lg:min-h-screen">

      {/* ── Background — Hero Banner da LP (personagem AI integrada) ── */}
      <div className="absolute inset-0">
        <Image
          src={assetUrl("/brand/bg/hero-banner.png")}
          alt=""
          fill
          className="object-cover object-[70%_center] lg:object-[60%_center]"
          unoptimized
          priority
        />
      </div>

      {/* ── Grafismo de linhas (textura) ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.03]"
        style={{ backgroundImage: `url(${assetUrl("/brand/grafismo/lines-bg.png")})` }}
      />

      {/* ── Glow vermelho sutil ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 60% 50%, rgba(215, 0, 48, 0.12) 0%, transparent 70%)",
        }}
      />

      {/* ── Gradientes de profundidade (esquerda escura para legibilidade) ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20 lg:via-black/50 lg:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />

      {/* ══════ Conteúdo ══════ */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 items-center px-8 py-32 lg:py-0">
        <div className="max-w-xl">

          {/* Logo */}
          <Image
            src={assetUrl("/brand/logo-horizontal/dark.svg")}
            alt="KTANA"
            width={301}
            height={106}
            className="mb-10 h-12 w-auto md:h-16 lg:h-[72px]"
            unoptimized
            priority
          />

          {/* Título */}
          <h1 className="font-display text-[44px] uppercase leading-[1.05] tracking-wide text-white md:text-[56px] lg:text-[72px]">
            Design
            <br />
            <span className="text-brand-500">System</span>
          </h1>

          {/* Descrição */}
          <p className="mt-6 max-w-md text-sm leading-relaxed text-neutral-400 md:text-base">
            Brand Toolkit &amp; Identidade Visual — tokens, componentes e padrões
            da marca KTANA tokenizados para desenvolvimento.
          </p>

          {/* Stack badges */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {["Next.js 16", "Tailwind v4", "shadcn/ui", "Style Dictionary"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-medium text-neutral-400 backdrop-blur-sm"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Slogan */}
          <p className="mt-14 font-display text-[11px] uppercase tracking-[0.4em] text-brand-500/50">
            Embrace The Future
          </p>
        </div>
      </div>

      {/* ── Ticker de formas geométricas na base ── */}
      <div className="absolute bottom-10 left-0 z-[15] w-full opacity-[0.05]">
        <Image
          src={assetUrl("/brand/grafismo/ticker-shapes.png")}
          alt=""
          width={4189}
          height={231}
          className="h-5 w-full object-cover"
          unoptimized
        />
      </div>

      {/* ── Linha vermelha luminosa na base ── */}
      <div
        className="absolute bottom-0 left-0 z-20 h-[2px] w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, rgba(215, 0, 48, 0.4) 25%, rgba(242, 54, 94, 0.8) 50%, rgba(215, 0, 48, 0.4) 75%, transparent 95%)",
        }}
      />
      <div
        className="absolute -bottom-4 left-0 z-[19] h-10 w-full"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(215, 0, 48, 0.12) 0%, transparent 100%)",
        }}
      />
    </section>
  );
}
