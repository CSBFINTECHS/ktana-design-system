import Image from "next/image";
import { assetUrl } from "@/lib/utils";

export function DSHero() {
  return (
    <section className="relative flex min-h-[700px] flex-col items-center justify-end overflow-hidden bg-neutral-950 pb-20">
      {/* Background escuro com textura */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${assetUrl("/brand/bg/bg-dark.png")})` }}
      />

      {/* Gradiente de escurecimento sobre o background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/30 via-neutral-950/50 to-neutral-950" />

      {/* Samurai Character */}
      <div className="absolute bottom-0 right-0 z-[1] hidden opacity-80 md:block lg:right-[10%]">
        <Image
          src={assetUrl("/brand/character/samurai.png")}
          alt="KTANA Samurai"
          width={380}
          height={452}
          className="h-[500px] w-auto object-contain lg:h-[600px]"
          unoptimized
          priority
        />
      </div>

      {/* Red glow atrás do samurai */}
      <div className="absolute bottom-0 right-[15%] z-0 hidden h-[400px] w-[400px] rounded-full bg-brand-fire-500/15 blur-[120px] md:block" />

      {/* Conteúdo central */}
      <div className="relative z-10 flex flex-col items-center text-center md:items-start md:self-start md:pl-16 lg:pl-24">
        {/* Logo horizontal KTANA */}
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
        <h1 className="font-display text-3xl text-brand-fire-500 md:text-4xl lg:text-5xl">
          Design System
        </h1>
        <p className="mt-4 text-sm uppercase tracking-[0.3em] text-neutral-500 md:text-base">
          Brand Toolkit &amp; Identidade Visual
        </p>
      </div>

      {/* Linha vermelha de separação na base */}
      <div className="absolute bottom-0 left-0 z-20 h-[2px] w-full bg-gradient-to-r from-transparent via-brand-fire-500/60 to-transparent" />
    </section>
  );
}
