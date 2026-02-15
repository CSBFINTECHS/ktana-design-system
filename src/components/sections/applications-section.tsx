import Image from "next/image";
import { assetUrl } from "@/lib/utils";
import { SectionLabel, SectionTitle, SubSection } from "@/components/showcase";

export function ApplicationsSection() {
  return (
    <section id="aplicacoes" className="mx-auto max-w-[1400px] px-8 py-20">
      <SectionLabel>APLICACOES</SectionLabel>
      <SectionTitle sub="Grafismos, elementos 3D, backgrounds e templates de redes sociais — aplicacao da marca KTANA">
        Aplicacoes da Marca
      </SectionTitle>

      {/* Grafismos */}
      <SubSection title="Grafismos">
        <p className="mb-6 text-sm text-neutral-400">
          Padroes geometricos derivados do simbolo KTANA — usados como texturas de fundo e elementos decorativos.
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
            <p className="mt-3 text-center text-xs text-neutral-500">Grafismo — Padroes do Simbolo K</p>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/5 bg-black p-6">
            <Image
              src={assetUrl("/brand/grafismo/lines-bg.png")}
              alt="Lines Background KTANA"
              width={5480}
              height={2451}
              className="w-full opacity-60"
              style={{ width: "100%", height: "auto" }}
              unoptimized
            />
            <p className="mt-3 text-center text-xs text-neutral-500">Lines Background — Grade de linhas perspectiva</p>
          </div>
        </div>
      </SubSection>

      {/* Backgrounds */}
      <SubSection title="Backgrounds">
        <p className="mb-6 text-sm text-neutral-400">
          Composicoes de fundo oficiais da marca — dark mode e com efeitos de iluminacao vermelha.
        </p>
        <div className="grid gap-6">
          <div className="overflow-hidden rounded-xl border border-white/5">
            <Image
              src={assetUrl("/brand/bg/bg-dark-composition.png")}
              alt="Background Dark Composition"
              width={2160}
              height={2700}
              className="w-full"
              style={{ width: "100%", height: "auto", maxHeight: 480, objectFit: "cover", objectPosition: "top" }}
              unoptimized
            />
            <div className="bg-neutral-900 p-4">
              <p className="font-semibold text-neutral-100">Bg Dark — Composicao</p>
              <p className="mt-1 text-xs text-neutral-500">Background principal com grafismos e iluminacao vermelha</p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-white/5">
              <Image
                src={assetUrl("/brand/bg/bg-dark.png")}
                alt="Background Dark"
                width={2160}
                height={2700}
                className="w-full"
                style={{ width: "100%", height: "auto", maxHeight: 360, objectFit: "cover", objectPosition: "top" }}
                unoptimized
              />
              <div className="bg-neutral-900 p-4">
                <p className="text-sm font-semibold text-neutral-100">Bg Dark</p>
                <p className="mt-1 text-xs text-neutral-500">Fundo escuro base</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-white/5">
              <Image
                src={assetUrl("/brand/bg/bg-manual.png")}
                alt="Background Manual"
                width={3840}
                height={2160}
                className="w-full"
                style={{ width: "100%", height: "auto", maxHeight: 360, objectFit: "cover", objectPosition: "center" }}
                unoptimized
              />
              <div className="bg-neutral-900 p-4">
                <p className="text-sm font-semibold text-neutral-100">Bg Manual</p>
                <p className="mt-1 text-xs text-neutral-500">Background do manual de identidade</p>
              </div>
            </div>
          </div>
        </div>
      </SubSection>

      {/* Elementos 3D */}
      <SubSection title="Elementos 3D">
        <p className="mb-6 text-sm text-neutral-400">
          Renders 3D da personagem samurai e elementos visuais tridimensionais da marca.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-white/5 bg-black">
            <div className="relative">
              <div
                className="absolute inset-0"
                style={{
                  background: "radial-gradient(ellipse at 50% 60%, rgba(194, 11, 52, 0.15) 0%, transparent 70%)",
                }}
              />
              <Image
                src={assetUrl("/brand/3d/content-3d.png")}
                alt="Conteudo 3D KTANA"
                width={1890}
                height={1161}
                className="relative z-10 w-full"
                style={{ width: "100%", height: "auto" }}
                unoptimized
              />
            </div>
            <div className="p-4">
              <p className="font-semibold text-neutral-100">Content 3D</p>
              <p className="mt-1 text-xs text-neutral-500">Elementos 3D da landing page KTANA</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/5 bg-black">
            <div className="relative">
              <div
                className="absolute inset-0"
                style={{
                  background: "radial-gradient(ellipse at 50% 70%, rgba(194, 11, 52, 0.2) 0%, transparent 60%)",
                }}
              />
              <Image
                src={assetUrl("/brand/character/samurai.png")}
                alt="Samurai 3D"
                width={300}
                height={357}
                className="relative z-10 mx-auto h-80 w-auto"
                style={{ height: 320, width: "auto" }}
                unoptimized
              />
            </div>
            <div className="p-4">
              <p className="font-semibold text-neutral-100">Personagem Samurai</p>
              <p className="mt-1 text-xs text-neutral-500">Mascote 3D — render isolado com fundo transparente</p>
            </div>
          </div>
        </div>
      </SubSection>

      {/* Social Media */}
      <SubSection title="Presenca Digital — Redes Sociais">
        <p className="mb-6 text-sm text-neutral-400">
          Templates e mockups padrao para redes sociais — posts, stories e materiais digitais.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-white/5">
            <Image
              src={assetUrl("/brand/social/mockup-post-feed.png")}
              alt="Mockup Post Feed"
              width={2160}
              height={3890}
              className="w-full"
              style={{ width: "100%", height: "auto", maxHeight: 540, objectFit: "cover", objectPosition: "top" }}
              unoptimized
            />
            <div className="bg-neutral-900 p-4">
              <p className="font-semibold text-neutral-100">Mockup — Post Feed</p>
              <p className="mt-1 text-xs text-neutral-500">Simulacao de post no feed com branding KTANA aplicado</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/5">
            <Image
              src={assetUrl("/brand/social/bg-post.png")}
              alt="Background Post"
              width={2160}
              height={2700}
              className="w-full"
              style={{ width: "100%", height: "auto", maxHeight: 540, objectFit: "cover", objectPosition: "top" }}
              unoptimized
            />
            <div className="bg-neutral-900 p-4">
              <p className="font-semibold text-neutral-100">Background — Post</p>
              <p className="mt-1 text-xs text-neutral-500">Background vertical padrao para posts de redes sociais</p>
            </div>
          </div>
        </div>
      </SubSection>
    </section>
  );
}
