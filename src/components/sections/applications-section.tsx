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
] as const;

export function ApplicationsSection() {
  return (
    <section id="aplicacoes" className="mx-auto max-w-[1400px] px-8 py-20">
      <SectionLabel>APLICACOES</SectionLabel>
      <SectionTitle sub="Personagem 3D, grafismos, backgrounds, elementos visuais e templates de redes sociais">
        Aplicacoes da Marca
      </SectionTitle>

      {/* ══ Estilo Fotográfico — Renders 3D da Personagem ══ */}
      <SubSection title="Estilo Fotografico — Personagem 3D">
        <p className="mb-8 text-sm text-neutral-400">
          Renders AI da personagem samurai — mascote oficial da marca KTANA. Cada variante
          explora um estilo visual diferente mantendo a identidade dark + vermelho.
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {CHARACTER_RENDERS.map((render) => (
            <div key={render.label} className="group relative overflow-hidden rounded-xl bg-neutral-900">
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
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
                className="relative z-10 w-full transition-transform duration-500 group-hover:scale-[1.03]"
                style={{ width: "100%", height: "auto" }}
                unoptimized
              />
              <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent px-4 pb-3 pt-8">
                <p className="text-xs font-medium text-neutral-300">{render.label}</p>
              </div>
            </div>
          ))}
        </div>
      </SubSection>

      {/* ══ Banner Hero — Composicao Principal ══ */}
      <SubSection title="Composicao Hero — AI Character">
        <p className="mb-6 text-sm text-neutral-400">
          Banner principal da marca com personagem AI robotica e energia vermelha — usado como hero visual.
        </p>
        <div className="overflow-hidden rounded-xl border border-white/5">
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
        <div className="mt-4 overflow-hidden rounded-xl border border-white/5">
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

      {/* ══ Composicao Embrace The Future ══ */}
      <SubSection title="Embrace The Future — Samurai Principal">
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
          <div className="overflow-hidden rounded-xl border border-white/5 bg-black md:col-span-2">
            <Image
              src={assetUrl("/brand/3d/technologies.png")}
              alt="Technologies"
              width={1144}
              height={720}
              className="w-full"
              style={{ width: "100%", height: "auto" }}
              unoptimized
            />
            <div className="px-4 py-3">
              <p className="text-sm font-medium text-neutral-200">Technologies — Stack Grid</p>
            </div>
          </div>
        </div>
      </SubSection>

      {/* ══ Grafismos ══ */}
      <SubSection title="Grafismos">
        <p className="mb-6 text-sm text-neutral-400">
          Padroes geometricos e texturas derivados da identidade KTANA — usados como elementos decorativos.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-white/5 bg-neutral-900 p-6">
            <Image
              src={assetUrl("/brand/grafismo/grafismo-1.png")}
              alt="Grafismo KTANA"
              width={1827}
              height={777}
              className="w-full opacity-80"
              style={{ width: "100%", height: "auto" }}
              unoptimized
            />
            <p className="mt-3 text-center text-xs text-neutral-500">Grafismo — Padroes geometricos</p>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/5 bg-black p-6">
            <Image
              src={assetUrl("/brand/grafismo/lines-bg.png")}
              alt="Lines Background"
              width={5480}
              height={2451}
              className="w-full opacity-60"
              style={{ width: "100%", height: "auto" }}
              unoptimized
            />
            <p className="mt-3 text-center text-xs text-neutral-500">Lines Background — Grade perspectiva</p>
          </div>
        </div>
        <div className="mt-6 overflow-hidden rounded-xl border border-white/5 bg-neutral-950 p-4">
          <Image
            src={assetUrl("/brand/grafismo/ticker-shapes.png")}
            alt="Ticker Shapes"
            width={4189}
            height={231}
            className="w-full"
            style={{ width: "100%", height: "auto" }}
            unoptimized
          />
          <p className="mt-3 text-center text-xs text-neutral-500">Ticker Shapes — Formas geometricas em sequencia</p>
        </div>
      </SubSection>

      {/* ══ Backgrounds ══ */}
      <SubSection title="Backgrounds">
        <p className="mb-6 text-sm text-neutral-400">
          Composicoes de fundo oficiais — dark mode com efeitos de iluminacao vermelha.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-white/5">
            <Image
              src={assetUrl("/brand/bg/banner-section2.png")}
              alt="Banner Section 2"
              width={3924}
              height={1800}
              className="w-full"
              style={{ width: "100%", height: "auto" }}
              unoptimized
            />
            <div className="bg-neutral-900 px-4 py-3">
              <p className="text-sm font-medium text-neutral-200">Banner Section 2 — LP</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/5">
            <Image
              src={assetUrl("/brand/bg/bg-dark-composition.png")}
              alt="Background Dark Composition"
              width={2160}
              height={2700}
              className="w-full"
              style={{ width: "100%", height: "auto", maxHeight: 400, objectFit: "cover", objectPosition: "top" }}
              unoptimized
            />
            <div className="bg-neutral-900 px-4 py-3">
              <p className="text-sm font-medium text-neutral-200">Bg Dark — Composicao com grafismos</p>
            </div>
          </div>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="overflow-hidden rounded-xl border border-white/5">
            <Image
              src={assetUrl("/brand/bg/bg-dark.png")}
              alt="Background Dark"
              width={2160}
              height={2700}
              className="w-full"
              style={{ width: "100%", height: "auto", maxHeight: 280, objectFit: "cover", objectPosition: "top" }}
              unoptimized
            />
            <div className="bg-neutral-900 px-4 py-3">
              <p className="text-xs font-medium text-neutral-300">Bg Dark</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/5">
            <Image
              src={assetUrl("/brand/bg/bg-manual.png")}
              alt="Background Manual"
              width={3840}
              height={2160}
              className="w-full"
              style={{ width: "100%", height: "auto", maxHeight: 280, objectFit: "cover" }}
              unoptimized
            />
            <div className="bg-neutral-900 px-4 py-3">
              <p className="text-xs font-medium text-neutral-300">Bg Manual</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/5">
            <Image
              src={assetUrl("/brand/social/bg-post.png")}
              alt="Background Post"
              width={2160}
              height={2700}
              className="w-full"
              style={{ width: "100%", height: "auto", maxHeight: 280, objectFit: "cover", objectPosition: "top" }}
              unoptimized
            />
            <div className="bg-neutral-900 px-4 py-3">
              <p className="text-xs font-medium text-neutral-300">Bg Post</p>
            </div>
          </div>
        </div>
      </SubSection>

      {/* ══ Presenca Digital ══ */}
      <SubSection title="Presenca Digital — Redes Sociais">
        <p className="mb-6 text-sm text-neutral-400">
          Templates e mockups para redes sociais — posts, stories e materiais digitais.
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
