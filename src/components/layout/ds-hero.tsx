import Image from "next/image";
import { assetUrl } from "@/lib/utils";

export function DSHero() {
  return (
    <section className="relative flex min-h-[700px] flex-col items-center justify-end overflow-hidden bg-black pb-20">
      {/* Camada 1 — Background escuro com textura */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${assetUrl("/brand/bg/bg-dark.png")})` }}
      />

      {/* Camada 2 — Glow vermelho radial (luz da marca) */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background: "radial-gradient(ellipse at 70% 60%, rgba(215, 0, 48, 0.5) 0%, transparent 60%)",
        }}
      />

      {/* Camada 3 — Gradiente de escurecimento */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />

      {/* Samurai Character */}
      <div className="absolute bottom-0 right-0 z-[2] hidden md:block lg:right-[8%]">
        <Image
          src={assetUrl("/brand/character/samurai.png")}
          alt="KTANA Samurai"
          width={380}
          height={452}
          className="h-[520px] w-auto object-contain lg:h-[620px]"
          unoptimized
          priority
        />
      </div>

      {/* Glow atrás do samurai */}
      <div
        className="absolute bottom-0 right-[12%] z-[1] hidden h-[500px] w-[500px] rounded-full md:block"
        style={{
          background: "radial-gradient(circle, rgba(194, 11, 52, 0.2) 0%, transparent 70%)",
        }}
      />

      {/* Conteúdo central */}
      <div className="relative z-10 flex flex-col items-center text-center md:items-start md:self-start md:pl-16 lg:pl-24">
        {/* Logo horizontal KTANA real */}
        <Image
          src={assetUrl("/brand/logo-horizontal/dark.svg")}
          alt="KTANA"
          width={301}
          height={106}
          className="mb-8 h-16 w-auto md:h-20 lg:h-24"
          unoptimized
          priority
        />

        {/* Título Design System */}
        <h1 className="font-display text-3xl text-brand-500 md:text-4xl lg:text-5xl">
          Design System
        </h1>
        <p className="mt-4 text-sm uppercase tracking-[0.3em] text-neutral-500 md:text-base">
          Brand Toolkit &amp; Identidade Visual
        </p>
      </div>

      {/* Linha vermelha divisora na base */}
      <div
        className="absolute bottom-0 left-0 z-20 h-[2px] w-full"
        style={{
          background: "linear-gradient(90deg, transparent 8%, rgba(215, 0, 48, 0.6) 50%, transparent 93%)",
        }}
      />
    </section>
  );
}
