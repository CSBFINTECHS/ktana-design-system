import Image from "next/image";
import { assetUrl } from "@/lib/utils";
import { SectionLabel, SectionTitle, SubSection } from "@/components/showcase";

const CHARACTER_RENDERS = [
  { src: "/brand/character/samurai-neon.png", label: "Neon", w: 948, h: 1128 },
  { src: "/brand/character/samurai-holographic.png", label: "Holographic", w: 948, h: 1128 },
  { src: "/brand/character/samurai-holograms.png", label: "Holograms", w: 948, h: 1128 },
  { src: "/brand/character/samurai-main.png", label: "Main", w: 948, h: 1128 },
  { src: "/brand/character/samurai-kasa.png", label: "Kasa", w: 948, h: 1128 },
  { src: "/brand/character/samurai-attack.png", label: "Attack", w: 948, h: 1477 },
  { src: "/brand/character/ktana-cyberpunk.jpg", label: "Cyberpunk", w: 1600, h: 1600 },
] as const;

const GRAFISMOS = [
  { src: "/brand/grafismo/grafismo-1.png", label: "Grafismo 1", w: 1827, h: 777 },
  { src: "/brand/grafismo/grafismo-2.svg", label: "Grafismo 2", w: 444, h: 242 },
  { src: "/brand/grafismo/grafismo-3.svg", label: "Grafismo 3", w: 444, h: 247 },
  { src: "/brand/grafismo/grafismo-4.svg", label: "Grafismo 4", w: 444, h: 493 },
  { src: "/brand/grafismo/grafismo-5.svg", label: "Grafismo 5", w: 444, h: 242 },
  { src: "/brand/grafismo/grafismo-6.svg", label: "Grafismo 6", w: 444, h: 247 },
] as const;

const IA_DIVISIONS = [
  { src: "/brand/ia-division/ia-studio.png", label: "IA Studio", w: 831, h: 1223 },
  { src: "/brand/ia-division/ia-infra.png", label: "IA Infra", w: 831, h: 1223 },
  { src: "/brand/ia-division/ia-techfin.png", label: "IA Tech Fin", w: 831, h: 1223 },
  { src: "/brand/ia-division/ia-lab.png", label: "IA Lab", w: 831, h: 1223 },
  { src: "/brand/ia-division/ia-ventures.png", label: "IA Ventures", w: 831, h: 1223 },
] as const;

export function ApplicationsSection() {
  return (
    <section id="aplicacoes" className="mx-auto max-w-[1400px] px-8 py-20">
      <SectionLabel>APLICACOES</SectionLabel>
      <SectionTitle sub="Personagem 3D, grafismos, backgrounds, elementos visuais, redes sociais e sub-marcas IA">
        Aplicacoes da Marca
      </SectionTitle>

      {/* ══ Estilo Fotográfico — Renders 3D da Personagem ══ */}
      <SubSection title="Estilo Fotografico — Personagem 3D">
        <p className="mb-8 text-sm text-neutral-400">
          Variantes oficiais do mascote KTANA — identidade dark + vermelho.
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {CHARACTER_RENDERS.map((render) => (
            <div key={render.label} className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-neutral-900">
              <div
                className="absolute inset-0 z-[5] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 70%, rgba(215, 0, 48, 0.15) 0%, transparent 70%)",
                }}
              />
              <Image
                src={assetUrl(render.src)}
                alt={`KTANA Samurai — ${render.label}`}
                width={render.w}
                height={render.h}
                className="relative z-10 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                unoptimized
              />
              <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent px-4 pb-3 pt-8">
                <p className="text-xs font-medium text-neutral-300">{render.label}</p>
              </div>
            </div>
          ))}
        </div>
      </SubSection>

      {/* ══ Composicao Embrace The Future ══ */}
      <SubSection title="Embrace The Future — Composicao Principal">
        <div className="overflow-hidden rounded-xl border border-white/5">
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
      </SubSection>

      {/* ══ Banners e Hero ══ */}
      <SubSection title="Banners — Hero Visual">
        <p className="mb-6 text-sm text-neutral-400">
          Composicoes de banner para hero sections e redes sociais com personagem AI.
        </p>
        <div className="overflow-hidden rounded-xl border border-white/5 bg-black">
          <Image
            src={assetUrl("/brand/bg/hero-banner.png")}
            alt="Hero Banner KTANA"
            width={3380}
            height={1800}
            className="w-full"
            style={{ width: "100%", height: "auto" }}
            unoptimized
          />
        </div>
        <div className="mt-4 overflow-hidden rounded-xl border border-white/5 bg-black">
          <Image
            src={assetUrl("/brand/social/banner-principal.png")}
            alt="Banner Principal — Redes Sociais"
            width={2880}
            height={1616}
            className="w-full"
            style={{ width: "100%", height: "auto" }}
            unoptimized
          />
          <div className="bg-neutral-900 px-4 py-3">
            <p className="text-sm font-medium text-neutral-200">Banner Principal — Redes Sociais</p>
          </div>
        </div>
      </SubSection>

      {/* ══ Capas de Redes Sociais ══ */}
      <SubSection title="Capas — Redes Sociais">
        <p className="mb-6 text-sm text-neutral-400">
          Templates oficiais de capas para diferentes plataformas de redes sociais.
        </p>
        <div className="space-y-4">
          {[
            { src: "/brand/social/cover-principal.png", label: "Capa Principal (Base)", w: 5120, h: 1896 },
            { src: "/brand/social/cover-linkedin.png", label: "LinkedIn Pessoal", w: 5120, h: 1274 },
            { src: "/brand/social/cover-twitter.png", label: "Twitter / X", w: 5120, h: 1706 },
          ].map((cover) => (
            <div key={cover.label} className="overflow-hidden rounded-xl border border-white/5">
              <Image
                src={assetUrl(cover.src)}
                alt={cover.label}
                width={cover.w}
                height={cover.h}
                className="w-full"
                style={{ width: "100%", height: "auto" }}
                unoptimized
              />
              <div className="bg-neutral-900 px-4 py-3">
                <p className="text-sm font-medium text-neutral-200">{cover.label}</p>
              </div>
            </div>
          ))}
        </div>
      </SubSection>

      {/* ══ Elementos 3D ══ */}
      <SubSection title="Elementos 3D">
        <p className="mb-6 text-sm text-neutral-400">
          Renders 3D da landing page — mockups de interface e composicoes visuais.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-white/5 bg-black">
            <Image
              src={assetUrl("/brand/3d/content-3d.png")}
              alt="Content 3D KTANA"
              width={1890}
              height={1161}
              className="w-full"
              style={{ width: "100%", height: "auto" }}
              unoptimized
            />
            <div className="px-4 py-3">
              <p className="text-sm font-medium text-neutral-200">Content 3D — Dashboard</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/5 bg-black">
            <Image
              src={assetUrl("/brand/3d/group-827.png")}
              alt="Group 827 — Composicao 3D"
              width={1247}
              height={1332}
              className="w-full"
              style={{ width: "100%", height: "auto" }}
              unoptimized
            />
            <div className="px-4 py-3">
              <p className="text-sm font-medium text-neutral-200">Composicao 3D — Group 827</p>
            </div>
          </div>
        </div>
        <div className="mt-6 overflow-hidden rounded-xl border border-white/5 bg-black">
          <div className="mx-auto max-w-md py-4">
            <Image
              src={assetUrl("/brand/3d/technologies.png")}
              alt="Technologies"
              width={1144}
              height={720}
              className="w-full"
              style={{ width: "100%", height: "auto" }}
              unoptimized
            />
          </div>
          <div className="px-4 py-3">
            <p className="text-sm font-medium text-neutral-200">Technologies — Stack Grid</p>
            <p className="mt-1 text-xs text-neutral-500">Logos das tecnologias utilizadas na plataforma</p>
          </div>
        </div>
      </SubSection>

      {/* ══ IA Division — Sub-marcas ══ */}
      <SubSection title="IA Division — Sub-marcas">
        <p className="mb-6 text-sm text-neutral-400">
          Mockups das 5 sub-marcas da divisao de Inteligencia Artificial da KTANA.
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {IA_DIVISIONS.map((ia) => (
            <div key={ia.label} className="overflow-hidden rounded-xl border border-white/5">
              <Image
                src={assetUrl(ia.src)}
                alt={ia.label}
                width={ia.w}
                height={ia.h}
                className="w-full"
                style={{ width: "100%", height: "auto" }}
                unoptimized
              />
              <div className="bg-neutral-900 px-3 py-2">
                <p className="text-center text-xs font-medium text-neutral-300">{ia.label}</p>
              </div>
            </div>
          ))}
        </div>
      </SubSection>

      {/* ══ Grafismos ══ */}
      <SubSection title="Grafismos">
        <p className="mb-6 text-sm text-neutral-400">
          Padroes geometricos derivados da identidade KTANA — 6 variacoes + texturas de fundo.
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {GRAFISMOS.map((g) => (
            <div key={g.label} className="flex flex-col items-center gap-2 rounded-xl border border-white/5 bg-neutral-900 p-4">
              <Image
                src={assetUrl(g.src)}
                alt={g.label}
                width={g.w}
                height={g.h}
                className="w-full opacity-80"
                style={{ width: "100%", height: "auto" }}
                unoptimized
              />
              <p className="text-[10px] text-neutral-500">{g.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-white/5 bg-black p-4">
            <Image
              src={assetUrl("/brand/grafismo/lines-bg.png")}
              alt="Lines Background"
              width={5480}
              height={2451}
              className="w-full opacity-60"
              style={{ width: "100%", height: "auto" }}
              unoptimized
            />
            <p className="mt-2 text-center text-xs text-neutral-500">Lines Background — Grade perspectiva</p>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/5 bg-neutral-950 p-4">
            <Image
              src={assetUrl("/brand/grafismo/ticker-shapes.png")}
              alt="Ticker Shapes"
              width={4189}
              height={231}
              className="w-full"
              style={{ width: "100%", height: "auto" }}
              unoptimized
            />
            <p className="mt-2 text-center text-xs text-neutral-500">Ticker Shapes — Formas geometricas</p>
          </div>
        </div>
      </SubSection>

      {/* ══ Backgrounds ══ */}
      <SubSection title="Backgrounds — Composicoes com Personagem">
        <p className="mb-6 text-sm text-neutral-400">
          Composicoes oficiais com a personagem AI integrada aos backgrounds da marca.
        </p>

        {/* Hero Banner — full width */}
        <div className="overflow-hidden rounded-xl border border-white/5 bg-black">
          <Image
            src={assetUrl("/brand/bg/hero-banner.png")}
            alt="Hero Banner — Personagem AI"
            width={3380}
            height={1800}
            className="w-full"
            style={{ width: "100%", height: "auto" }}
            unoptimized
          />
          <div className="bg-neutral-900 px-4 py-3">
            <p className="text-sm font-medium text-neutral-200">Hero Banner — Personagem AI com energia vermelha</p>
          </div>
        </div>

        {/* Banner Section 2 + Embrace The Future */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-white/5 bg-black">
            <Image
              src={assetUrl("/brand/bg/banner-section2.png")}
              alt="Banner Section 2 — LP"
              width={3924}
              height={1800}
              className="w-full"
              style={{ width: "100%", height: "auto" }}
              unoptimized
            />
            <div className="bg-neutral-900 px-4 py-3">
              <p className="text-xs font-medium text-neutral-300">Section 2 — Landing Page</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/5 bg-black">
            <Image
              src={assetUrl("/brand/character/samurai-principal.png")}
              alt="Embrace The Future — Composicao"
              width={2880}
              height={1062}
              className="w-full"
              style={{ width: "100%", height: "auto" }}
              unoptimized
            />
            <div className="bg-neutral-900 px-4 py-3">
              <p className="text-xs font-medium text-neutral-300">Embrace The Future — Composicao Principal</p>
            </div>
          </div>
        </div>

        {/* Banner Principal Social */}
        <div className="mt-4 overflow-hidden rounded-xl border border-white/5 bg-black">
          <Image
            src={assetUrl("/brand/social/banner-principal.png")}
            alt="Banner Principal — Redes Sociais"
            width={2880}
            height={1616}
            className="w-full"
            style={{ width: "100%", height: "auto" }}
            unoptimized
          />
          <div className="bg-neutral-900 px-4 py-3">
            <p className="text-xs font-medium text-neutral-300">Banner Principal — Redes Sociais</p>
          </div>
        </div>
      </SubSection>

      {/* ══ Fundos e Texturas ══ */}
      <SubSection title="Fundos & Texturas">
        <p className="mb-6 text-sm text-neutral-400">
          Backgrounds e texturas base para composicoes — dark mode com grafismos.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { src: "/brand/bg/bg-dark-composition.png", label: "Dark Composition", w: 2160, h: 2700 },
            { src: "/brand/bg/bg-dark.png", label: "Bg Dark", w: 2160, h: 2700 },
            { src: "/brand/bg/bg-manual.png", label: "Bg Manual", w: 2160, h: 2700 },
            { src: "/brand/social/bg-post.png", label: "Bg Post", w: 2160, h: 2700 },
          ].map((bg) => (
            <div key={bg.label} className="overflow-hidden rounded-xl border border-white/5">
              <div className="aspect-[16/10] overflow-hidden bg-black">
                <Image
                  src={assetUrl(bg.src)}
                  alt={bg.label}
                  width={bg.w}
                  height={bg.h}
                  className="h-full w-full object-cover object-top"
                  unoptimized
                />
              </div>
              <div className="bg-neutral-900 px-4 py-3">
                <p className="text-xs font-medium text-neutral-300">{bg.label}</p>
              </div>
            </div>
          ))}
        </div>
      </SubSection>

      {/* ══ Presenca Digital ══ */}
      <SubSection title="Presenca Digital — Mockups">
        <p className="mb-6 text-sm text-neutral-400">
          Mockups e templates de presenca digital para redes sociais.
        </p>
        <div className="overflow-hidden rounded-xl border border-white/5">
          <Image
            src={assetUrl("/brand/social/mockup-post-feed.png")}
            alt="Mockup Post Feed"
            width={2160}
            height={3890}
            className="w-full"
            style={{ width: "100%", height: "auto", maxHeight: 640, objectFit: "cover", objectPosition: "top" }}
            unoptimized
          />
          <div className="bg-neutral-900 px-4 py-3">
            <p className="text-sm font-medium text-neutral-200">Mockup — Post Feed Instagram</p>
            <p className="mt-1 text-xs text-neutral-500">Simulacao de post com branding KTANA aplicado</p>
          </div>
        </div>
      </SubSection>
    </section>
  );
}
