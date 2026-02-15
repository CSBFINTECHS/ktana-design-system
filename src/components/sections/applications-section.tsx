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
      <SubSection title="Embrace The Future — Composicoes">
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
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-white/5 bg-black">
            <Image
              src={assetUrl("/brand/bg/manual-embrace-future-samurai.png")}
              alt="Manual — Samurai Embrace The Future"
              width={3840}
              height={2160}
              className="w-full"
              style={{ width: "100%", height: "auto" }}
              unoptimized
            />
            <div className="bg-neutral-900 px-4 py-3">
              <p className="text-xs font-medium text-neutral-300">Manual — Samurai Neon</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/5 bg-black">
            <Image
              src={assetUrl("/brand/bg/manual-embrace-future-dark.png")}
              alt="Manual — Dark Embrace The Future"
              width={3840}
              height={2160}
              className="w-full"
              style={{ width: "100%", height: "auto" }}
              unoptimized
            />
            <div className="bg-neutral-900 px-4 py-3">
              <p className="text-xs font-medium text-neutral-300">Manual — Dark Variant</p>
            </div>
          </div>
        </div>
      </SubSection>

      {/* ══ Banner Principal — Branding ══ */}
      <SubSection title="Banner Principal — Branding">
        <p className="mb-6 text-sm text-neutral-400">
          Composicao principal do KIT Branding com samurai — Embrace The Future.
        </p>
        <div className="overflow-hidden rounded-xl border border-white/5 bg-black">
          <Image
            src={assetUrl("/brand/social/banner-principal.png")}
            alt="Banner Principal — Embrace The Future"
            width={2880}
            height={1616}
            className="w-full"
            style={{ width: "100%", height: "auto" }}
            unoptimized
          />
          <div className="bg-neutral-900 px-4 py-3">
            <p className="text-sm font-medium text-neutral-200">Embrace The Future — Banner Branding</p>
          </div>
        </div>
      </SubSection>

      {/* Capas e social media movidos para seção Social Media */}

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

      {/* ══ Backgrounds — Landing Page ══ */}
      <SubSection title="Backgrounds — Landing Page">
        <p className="mb-6 text-sm text-neutral-400">
          Composicoes da LP oficial com personagem AI robotica — linguagem visual dark + vermelho.
        </p>

        {/* Hero Banner — full width */}
        <div className="overflow-hidden rounded-xl border border-white/5 bg-black">
          <Image
            src={assetUrl("/brand/bg/hero-banner.png")}
            alt="Hero Banner — LP Personagem AI"
            width={3380}
            height={1800}
            className="w-full"
            style={{ width: "100%", height: "auto" }}
            unoptimized
          />
          <div className="bg-neutral-900 px-4 py-3">
            <p className="text-sm font-medium text-neutral-200">Hero — Personagem AI com energia vermelha</p>
            <p className="mt-1 text-xs text-neutral-500">3380 × 1800px — Background principal da Landing Page</p>
          </div>
        </div>

        {/* Banner Section 2 */}
        <div className="mt-4 overflow-hidden rounded-xl border border-white/5 bg-black">
          <Image
            src={assetUrl("/brand/bg/banner-section2.png")}
            alt="Section 2 — LP"
            width={3924}
            height={1800}
            className="w-full"
            style={{ width: "100%", height: "auto" }}
            unoptimized
          />
          <div className="bg-neutral-900 px-4 py-3">
            <p className="text-sm font-medium text-neutral-200">Section 2 — Personagem com veu vermelho</p>
            <p className="mt-1 text-xs text-neutral-500">3924 × 1800px — Variacao artistica da LP</p>
          </div>
        </div>

        {/* Cyberpunk portrait */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-white/5 bg-black">
            <div className="aspect-video overflow-hidden">
              <Image
                src={assetUrl("/brand/character/ktana-cyberpunk.jpg")}
                alt="KTANA Cyberpunk — Retrato AI"
                width={1600}
                height={1600}
                className="h-full w-full object-cover"
                unoptimized
              />
            </div>
            <div className="bg-neutral-900 px-4 py-3">
              <p className="text-xs font-medium text-neutral-300">Cyberpunk — Retrato AI close-up</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex-1 overflow-hidden rounded-xl border border-white/5 bg-neutral-900 p-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand-500">Linguagem Visual LP</p>
              <p className="text-sm leading-relaxed text-neutral-400">
                A Landing Page utiliza composicoes com personagem AI robotica
                em estilo dark futurista — diferente do samurai do KIT Branding.
                Efeitos de energia vermelha, iluminacao dramatica e estetica cyberpunk.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#D70030]" />
                  <span className="text-xs text-neutral-500">Energia vermelha</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-black border border-neutral-700" />
                  <span className="text-xs text-neutral-500">Dark absoluto</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#5DAAD6]" />
                  <span className="text-xs text-neutral-500">Acentos azul gelo</span>
                </div>
              </div>
            </div>
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

      {/* Presenca Digital movido para seção Social Media */}
    </section>
  );
}
