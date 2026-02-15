import Image from "next/image";
import { assetUrl } from "@/lib/utils";

export function DSHero() {
  return (
    <section className="relative flex min-h-[800px] flex-col overflow-hidden bg-black lg:min-h-screen">
      {/* Camada 1 — Banner Principal (aplicação da marca com samurai) */}
      <div className="absolute inset-0">
        <Image
          src={assetUrl("/brand/social/banner-principal.png")}
          alt=""
          fill
          className="object-cover object-center opacity-50"
          unoptimized
          priority
        />
      </div>

      {/* Camada 2 — Blending vermelho sobre a imagem (como na LP) */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(194, 11, 52, 0.08) 0%, rgba(194, 11, 52, 0.03) 100%)",
          mixBlendMode: "color",
        }}
      />

      {/* Camada 3 — Grafismo de linhas (textura) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.04]"
        style={{ backgroundImage: `url(${assetUrl("/brand/grafismo/lines-bg.png")})` }}
      />

      {/* Camada 4 — Glow vermelho principal (centro) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 60%, rgba(194, 11, 52, 0.3) 0%, transparent 70%)",
        }}
      />

      {/* Camada 5 — Gradientes de profundidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-black/70 lg:via-transparent lg:to-black/40" />

      {/* Container principal — Grid 2 colunas */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 items-center px-8 py-24 lg:py-0">
        <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1.1fr]">

          {/* Coluna esquerda — Branding */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Logo horizontal */}
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
            <h1 className="font-display text-[40px] uppercase leading-[1.1] tracking-wide text-white md:text-5xl lg:text-[64px]">
              Design
              <br />
              <span className="text-brand-500">System</span>
            </h1>

            {/* Descrição */}
            <p className="mt-6 max-w-md text-sm leading-relaxed text-neutral-400 md:text-base">
              Brand Toolkit &amp; Identidade Visual — tokens, componentes e padroes
              da marca KTANA tokenizados para desenvolvimento.
            </p>

            {/* Stack badges */}
            <div className="mt-8 flex flex-wrap items-center gap-2">
              {["Next.js 16", "Tailwind v4", "shadcn/ui", "Style Dictionary"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-neutral-500 backdrop-blur-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Slogan */}
            <p className="mt-12 font-display text-[11px] uppercase tracking-[0.4em] text-brand-500/50">
              Embrace The Future
            </p>
          </div>

          {/* Coluna direita — Render 3D em destaque */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Glow vermelho atrás do render */}
            <div
              className="absolute z-0"
              style={{
                width: "120%",
                height: "120%",
                top: "-10%",
                left: "-10%",
                background:
                  "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(194, 11, 52, 0.2) 0%, transparent 70%)",
              }}
            />

            {/* Card glass principal com render 3D */}
            <div
              className="relative z-10 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-1.5 shadow-2xl backdrop-blur-sm"
              style={{
                transform: "perspective(1200px) rotateY(-4deg) rotateX(2deg)",
              }}
            >
              {/* Borda luminosa */}
              <div
                className="pointer-events-none absolute inset-0 z-20 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 30%, transparent 70%, rgba(215,0,48,0.12) 100%)",
                }}
              />

              {/* Render 3D — Content da LP */}
              <Image
                src={assetUrl("/brand/3d/content-3d.png")}
                alt="KTANA 3D Dashboard"
                width={1890}
                height={1161}
                className="relative z-10 w-full rounded-xl"
                style={{ maxWidth: 540 }}
                unoptimized
                priority
              />
            </div>

            {/* Card secundário flutuante (Group 827) */}
            <div
              className="absolute -bottom-8 -left-12 z-20 hidden overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.03] p-1 shadow-xl backdrop-blur-sm lg:block"
              style={{
                transform: "perspective(800px) rotateY(6deg) rotateX(-3deg)",
              }}
            >
              <Image
                src={assetUrl("/brand/3d/group-827.png")}
                alt="KTANA 3D Composition"
                width={1247}
                height={1332}
                className="rounded-lg"
                style={{ width: 180, height: "auto" }}
                unoptimized
              />
            </div>

            {/* Samurai character flutuando */}
            <div className="absolute -bottom-12 -right-4 z-[15] hidden lg:block">
              <Image
                src={assetUrl("/brand/character/samurai.png")}
                alt="KTANA Samurai"
                width={380}
                height={452}
                className="h-[340px] w-auto object-contain drop-shadow-2xl"
                style={{
                  filter: "drop-shadow(0 0 40px rgba(194, 11, 52, 0.3))",
                }}
                unoptimized
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Linha vermelha luminosa na base */}
      <div
        className="absolute bottom-0 left-0 z-20 h-[2px] w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, rgba(215, 0, 48, 0.4) 25%, rgba(242, 54, 94, 0.8) 50%, rgba(215, 0, 48, 0.4) 75%, transparent 95%)",
        }}
      />

      {/* Glow abaixo da linha */}
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
