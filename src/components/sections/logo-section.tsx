import Image from "next/image";
import { assetUrl } from "@/lib/utils";
import { SectionLabel, SectionTitle, SubSection } from "@/components/showcase";

const VARIANTS = ["dark", "light"] as const;

function VariantCard({
  label,
  variant,
  darkBg = true,
  children,
}: {
  label: string;
  variant: string;
  darkBg?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className={`flex items-center justify-center rounded-xl border border-neutral-700/30 p-6 ${
          darkBg ? "bg-neutral-900" : "bg-neutral-100"
        }`}
      >
        {children}
      </div>
      <span className="text-xs capitalize text-neutral-500">{label || variant}</span>
    </div>
  );
}

export function LogoSection() {
  return (
    <section id="logo" className="mx-auto max-w-[1400px] px-8 py-20">
      <SectionLabel>IDENTIDADE VISUAL</SectionLabel>
      <SectionTitle sub="Todas as variantes oficiais do logo extraidas do KIT Branding OFICIAL KTANA no Figma — dark e light">
        Logo & Variacoes
      </SectionTitle>

      {/* Symbol */}
      <SubSection title="Symbol">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {VARIANTS.map((v) => (
            <VariantCard key={v} variant={v} label={v} darkBg={v === "dark"}>
              <Image
                src={assetUrl(`/brand/symbol/${v}.svg`)}
                alt={`Symbol ${v}`}
                width={80}
                height={80}
                unoptimized
              />
            </VariantCard>
          ))}
        </div>
      </SubSection>

      {/* Nome (Wordmark) */}
      <SubSection title="Nome (Wordmark)">
        <div className="space-y-4">
          {VARIANTS.map((v) => (
            <div
              key={v}
              className={`flex items-center justify-between rounded-xl border border-neutral-700/30 p-6 ${
                v === "dark" ? "bg-neutral-900" : "bg-neutral-100"
              }`}
            >
              <Image
                src={assetUrl(`/brand/nome/${v}.svg`)}
                alt={`KTANA Nome ${v}`}
                width={200}
                height={38}
                className="h-8 w-auto"
                style={{ height: 32, width: "auto" }}
                unoptimized
              />
              <span className="text-xs capitalize text-neutral-500">{v}</span>
            </div>
          ))}
        </div>
      </SubSection>

      {/* Slogan */}
      <SubSection title="Slogan">
        <div className="space-y-4">
          {VARIANTS.map((v) => (
            <div
              key={v}
              className={`flex items-center justify-between rounded-xl border border-neutral-700/30 p-6 ${
                v === "dark" ? "bg-neutral-900" : "bg-neutral-100"
              }`}
            >
              <Image
                src={assetUrl(`/brand/slogan/${v}.svg`)}
                alt={`KTANA Slogan ${v}`}
                width={200}
                height={15}
                className="h-3 w-auto"
                style={{ height: 13, width: "auto" }}
                unoptimized
              />
              <span className="text-xs capitalize text-neutral-500">{v}</span>
            </div>
          ))}
        </div>
      </SubSection>

      {/* Nome + Slogan */}
      <SubSection title="Nome + Slogan">
        <div className="space-y-4">
          {VARIANTS.map((v) => (
            <div
              key={v}
              className={`flex items-center justify-between rounded-xl border border-neutral-700/30 p-6 ${
                v === "dark" ? "bg-neutral-900" : "bg-neutral-100"
              }`}
            >
              <Image
                src={assetUrl(`/brand/nome-slogan/${v}.svg`)}
                alt={`KTANA Nome + Slogan ${v}`}
                width={200}
                height={65}
                className="h-12 w-auto"
                style={{ height: 48, width: "auto" }}
                unoptimized
              />
              <span className="text-xs capitalize text-neutral-500">{v}</span>
            </div>
          ))}
        </div>
      </SubSection>

      {/* Logo Horizontal */}
      <SubSection title="Logo Horizontal (Symbol + Nome + Slogan)">
        <div className="grid gap-4 md:grid-cols-2">
          {VARIANTS.map((v) => (
            <div
              key={v}
              className={`flex items-center justify-center rounded-xl border border-neutral-700/30 p-8 ${
                v === "dark" ? "bg-neutral-900" : "bg-neutral-100"
              }`}
            >
              <Image
                src={assetUrl(`/brand/logo-horizontal/${v}.svg`)}
                alt={`Logo Horizontal ${v}`}
                width={301}
                height={106}
                className="h-20 w-auto"
                style={{ height: 80, width: "auto" }}
                unoptimized
              />
            </div>
          ))}
        </div>
      </SubSection>

      {/* Logo Vertical */}
      <SubSection title="Logo Vertical">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {VARIANTS.map((v) => (
            <div
              key={v}
              className={`flex items-center justify-center rounded-xl border border-neutral-700/30 p-8 ${
                v === "dark" ? "bg-neutral-900" : "bg-neutral-100"
              }`}
            >
              <Image
                src={assetUrl(`/brand/logo-vertical/${v}.svg`)}
                alt={`Logo Vertical ${v}`}
                width={101}
                height={149}
                className="h-28 w-auto"
                style={{ height: 112, width: "auto" }}
                unoptimized
              />
            </div>
          ))}
        </div>
      </SubSection>

      {/* Logo Extendido */}
      <SubSection title="Logo Extendido">
        <div className="space-y-4">
          {VARIANTS.map((v) => (
            <div
              key={v}
              className={`flex items-center justify-center rounded-xl border border-neutral-700/30 p-8 ${
                v === "dark" ? "bg-neutral-900" : "bg-neutral-100"
              }`}
            >
              <Image
                src={assetUrl(`/brand/logo-extendido/${v}.svg`)}
                alt={`Logo Extendido ${v}`}
                width={428}
                height={81}
                className="h-14 w-auto max-w-full"
                style={{ height: 56, width: "auto" }}
                unoptimized
              />
            </div>
          ))}
        </div>
      </SubSection>

      {/* Logo Reduzido */}
      <SubSection title="Logo Reduzido">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {VARIANTS.map((v) => (
            <VariantCard key={v} variant={v} label={v} darkBg={v === "dark"}>
              <Image
                src={assetUrl(`/brand/logo-reduzido/${v}.svg`)}
                alt={`Logo Reduzido ${v}`}
                width={80}
                height={80}
                unoptimized
              />
            </VariantCard>
          ))}
        </div>
      </SubSection>

      {/* Foto de Perfil */}
      <SubSection title="Foto de Perfil">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {VARIANTS.map((v) => (
            <VariantCard key={v} variant={v} label={v} darkBg={v === "dark"}>
              <Image
                src={assetUrl(`/brand/foto-perfil/${v}.png`)}
                alt={`Foto de Perfil ${v}`}
                width={100}
                height={100}
                className="rounded-full"
                unoptimized
              />
            </VariantCard>
          ))}
        </div>
      </SubSection>

      {/* Usuario */}
      <SubSection title="Usuario">
        <div className="grid gap-4 md:grid-cols-2">
          {VARIANTS.map((v) => (
            <div
              key={v}
              className={`flex items-center justify-center rounded-xl border border-neutral-700/30 p-8 ${
                v === "dark" ? "bg-neutral-900" : "bg-neutral-100"
              }`}
            >
              <Image
                src={assetUrl(`/brand/usuario/${v}.svg`)}
                alt={`Usuario ${v}`}
                width={280}
                height={100}
                className="h-16 w-auto"
                style={{ height: 64, width: "auto" }}
                unoptimized
              />
            </div>
          ))}
        </div>
      </SubSection>

      {/* Character / Samurai */}
      <SubSection title="Character — Samurai">
        <p className="mb-6 text-sm text-neutral-400">
          Mascote oficial da marca — personagem samurai com katana vermelha. Veja todos os renders em Aplicacoes.
        </p>
        <div className="overflow-hidden rounded-xl border border-neutral-700/30">
          <Image
            src={assetUrl("/brand/character/samurai-principal.png")}
            alt="KTANA Embrace The Future"
            width={2880}
            height={1062}
            className="w-full"
            style={{ width: "100%", height: "auto" }}
            unoptimized
          />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { src: "/brand/character/samurai-neon.png", alt: "Samurai Neon", w: 948, h: 1128 },
            { src: "/brand/character/samurai-main.png", alt: "Samurai Main", w: 948, h: 1128 },
            { src: "/brand/character/samurai-holographic.png", alt: "Samurai Holographic", w: 948, h: 1128 },
            { src: "/brand/character/ktana-cyberpunk.jpg", alt: "KTANA Cyberpunk", w: 1600, h: 1600 },
          ].map((img) => (
            <div key={img.alt} className="aspect-[3/4] overflow-hidden rounded-xl bg-neutral-900">
              <Image
                src={assetUrl(img.src)}
                alt={img.alt}
                width={img.w}
                height={img.h}
                className="h-full w-full object-cover object-top"
                unoptimized
              />
            </div>
          ))}
        </div>
      </SubSection>

      {/* Todas as Variações */}
      <SubSection title="Todas as Variacoes">
        <div className="space-y-4">
          {VARIANTS.map((v) => (
            <div
              key={v}
              className={`overflow-hidden rounded-xl border border-neutral-700/30 p-4 ${
                v === "dark" ? "bg-neutral-900" : "bg-neutral-100"
              }`}
            >
              <Image
                src={assetUrl(`/brand/z-variacoes/${v}.svg`)}
                alt={`Todas as variacoes ${v}`}
                width={1968}
                height={396}
                className="w-full"
                style={{ width: "100%", height: "auto" }}
                unoptimized
              />
              <p className="mt-3 text-center text-xs capitalize text-neutral-500">{v}</p>
            </div>
          ))}
        </div>
      </SubSection>
    </section>
  );
}
