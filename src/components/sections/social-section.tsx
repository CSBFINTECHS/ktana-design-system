import Image from "next/image";
import { assetUrl } from "@/lib/utils";
import { SectionLabel, SectionTitle, SubSection } from "@/components/showcase";

/* ─── Token Annotations ─── */

function TokenBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded bg-neutral-800 px-1.5 py-0.5 font-mono text-[10px] text-brand-500">
      {children}
    </span>
  );
}

function TokenRow({ token, value }: { token: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-neutral-800/50 py-2">
      <span className="font-mono text-xs text-brand-500">{token}</span>
      <span className="text-xs text-neutral-400">{value}</span>
    </div>
  );
}

/* ─── IG Post Template (1080 × 1350 — 4:5) ─── */

function IGPostTemplate({
  variant,
  headline,
  body,
}: {
  variant: "editorial" | "brand" | "destaque";
  headline: string;
  body: string;
}) {
  const bgMap = {
    editorial: "bg-neutral-900",
    brand: "bg-black",
    destaque: "bg-neutral-950",
  };

  return (
    <div className="overflow-hidden rounded-xl border border-white/5">
      <div className={`relative flex aspect-[1080/1350] flex-col justify-between p-6 ${bgMap[variant]}`}>
        {/* Header zone */}
        <div className="flex items-start justify-between">
          <Image
            src={assetUrl("/brand/logo-horizontal/dark.svg")}
            alt="KTANA"
            width={120}
            height={42}
            className="h-5 w-auto"
            unoptimized
          />
          <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500">
            {variant}
          </span>
        </div>

        {/* Content zone */}
        <div className="flex flex-1 flex-col justify-center gap-4">
          <h3 className="font-display text-2xl leading-tight text-neutral-50 md:text-3xl">
            {headline}
          </h3>
          <p className="text-sm leading-relaxed text-neutral-400">{body}</p>
          <div className="h-0.5 w-16 bg-brand-500" />
        </div>

        {/* Footer zone */}
        <div className="flex items-end justify-between">
          <Image
            src={assetUrl("/brand/symbol/dark.svg")}
            alt="KTANA"
            width={24}
            height={24}
            className="h-6 w-6"
            unoptimized
          />
          <span className="font-mono text-[9px] text-neutral-600">ktana.ai</span>
        </div>

        {/* Grid overlay annotations */}
        <div className="pointer-events-none absolute inset-0 border-2 border-dashed border-brand-500/10" />
        <div className="pointer-events-none absolute left-6 right-6 top-1/4 border-t border-dashed border-brand-500/10" />
        <div className="pointer-events-none absolute bottom-1/4 left-6 right-6 border-t border-dashed border-brand-500/10" />
      </div>

      {/* Token specs */}
      <div className="space-y-1 bg-neutral-900/80 px-4 py-3">
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium text-neutral-100">Post {variant}</p>
          <TokenBadge>1080 × 1350</TokenBadge>
          <TokenBadge>4:5</TokenBadge>
        </div>
        <div className="flex flex-wrap gap-1">
          <TokenBadge>bg: {variant === "editorial" ? "neutral-900" : variant === "brand" ? "black" : "neutral-950"}</TokenBadge>
          <TokenBadge>font: Zen Dots</TokenBadge>
          <TokenBadge>accent: fire-500</TokenBadge>
        </div>
      </div>
    </div>
  );
}

/* ─── IG Story Template (1080 × 1920 — 9:16) ─── */

function IGStoryTemplate({
  variant,
  headline,
  body,
  cta,
}: {
  variant: "brand" | "produto" | "cta";
  headline: string;
  body: string;
  cta: string;
}) {
  const bgMap = {
    brand: "bg-black",
    produto: "bg-neutral-900",
    cta: "bg-neutral-950",
  };

  const accentMap = {
    brand: "bg-brand-500",
    produto: "bg-[#FFD100]",
    cta: "bg-[#5DAAD6]",
  };

  return (
    <div className="overflow-hidden rounded-xl border border-white/5">
      <div className={`relative flex aspect-[1080/1920] flex-col justify-between p-5 ${bgMap[variant]}`}>
        {/* Top: Logo */}
        <div className="flex items-center justify-center pt-4">
          <Image
            src={assetUrl("/brand/logo-horizontal/dark.svg")}
            alt="KTANA"
            width={120}
            height={42}
            className="h-4 w-auto"
            unoptimized
          />
        </div>

        {/* Center: Content */}
        <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
          <div className={`h-0.5 w-10 ${accentMap[variant]}`} />
          <h3 className="font-display text-lg leading-tight text-neutral-50">
            {headline}
          </h3>
          <p className="max-w-[80%] text-xs leading-relaxed text-neutral-400">
            {body}
          </p>
        </div>

        {/* Bottom: CTA */}
        <div className="flex flex-col items-center gap-2 pb-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-500">
            {cta}
          </span>
          <span className="text-brand-500">&darr;</span>
        </div>

        {/* Grid overlay */}
        <div className="pointer-events-none absolute inset-0 border-2 border-dashed border-brand-500/10" />
      </div>

      <div className="space-y-1 bg-neutral-900/80 px-3 py-2">
        <div className="flex items-center gap-2">
          <p className="text-xs font-medium text-neutral-100">Story {variant}</p>
          <TokenBadge>1080 × 1920</TokenBadge>
          <TokenBadge>9:16</TokenBadge>
        </div>
        <div className="flex flex-wrap gap-1">
          <TokenBadge>bg: {variant === "brand" ? "black" : variant === "produto" ? "neutral-900" : "neutral-950"}</TokenBadge>
          <TokenBadge>accent: {variant === "brand" ? "fire-500" : variant === "produto" ? "spectrum-gold" : "ice-500"}</TokenBadge>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Section ─── */

export function SocialSection() {
  return (
    <section id="social-media" className="mx-auto max-w-[1400px] px-8 py-20">
      <SectionLabel>SOCIAL MEDIA</SectionLabel>
      <SectionTitle sub="Templates componentizados para redes sociais — estrutura de grid, tokens e dimensoes oficiais do Brand Toolkit KTANA">
        Templates & Especificacoes
      </SectionTitle>

      {/* ── Token Usage Reference ── */}
      <div className="mb-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-white/5 bg-neutral-900 p-6">
          <h4 className="mb-4 text-sm font-semibold text-brand-500">
            Tokens de Cor — Social Media
          </h4>
          <TokenRow token="background-primary" value="neutral-900 #141414" />
          <TokenRow token="background-alt" value="black #000000" />
          <TokenRow token="background-deep" value="neutral-950 #0D0D0D" />
          <TokenRow token="text-heading" value="cream #FAF5EA" />
          <TokenRow token="text-body" value="neutral-400 #818E8C" />
          <TokenRow token="text-caption" value="neutral-500 #575757" />
          <TokenRow token="accent-fire" value="fire-500 #D70030" />
          <TokenRow token="accent-gold" value="spectrum-gold #FFD100" />
          <TokenRow token="accent-ice" value="ice-500 #5DAAD6" />
        </div>

        <div className="rounded-xl border border-white/5 bg-neutral-900 p-6">
          <h4 className="mb-4 text-sm font-semibold text-brand-500">
            Tokens de Tipografia — Social Media
          </h4>
          <TokenRow token="font-display" value="Zen Dots (headlines)" />
          <TokenRow token="font-body" value="Satoshi (texto)" />
          <TokenRow token="heading-post" value="32px / 130% / 0" />
          <TokenRow token="heading-story" value="24px / 130% / 0" />
          <TokenRow token="body-post" value="20px / 150% / 0" />
          <TokenRow token="body-story" value="16px / 150% / 0" />
          <TokenRow token="caption" value="12px mono / uppercase / 0.2em" />
          <TokenRow token="cta-label" value="14px / 600 / uppercase / 0.15em" />
          <div className="mt-3 border-t border-neutral-800 pt-3">
            <h5 className="mb-2 text-xs font-semibold text-neutral-400">Layout Grid</h5>
            <TokenRow token="padding-post" value="spacing-6 (24px)" />
            <TokenRow token="padding-story" value="spacing-5 (20px)" />
            <TokenRow token="padding-cover" value="spacing-8 (32px)" />
            <TokenRow token="gap-content" value="spacing-4 (16px)" />
          </div>
        </div>
      </div>

      {/* ── Instagram Posts ── */}
      <SubSection title="Instagram Posts (1080 × 1350)">
        <p className="mb-6 text-sm text-neutral-400">
          3 variantes tokenizadas. Grid: logo top-left, conteudo center, symbol bottom-left. Accent bar fire-500 como separador.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <IGPostTemplate
            variant="editorial"
            headline="Estrategia digital com precisao"
            body="Tecnologia, performance e design integrados para transformar sua operacao."
          />
          <IGPostTemplate
            variant="brand"
            headline="Embrace The Future"
            body="Plataformas digitais inteligentes com IA integrada e design de ponta."
          />
          <IGPostTemplate
            variant="destaque"
            headline="IA Division"
            body="5 sub-marcas especializadas em inteligencia artificial aplicada a negocios."
          />
        </div>
      </SubSection>

      {/* ── Instagram Stories ── */}
      <SubSection title="Instagram Stories (1080 × 1920)">
        <p className="mb-6 text-sm text-neutral-400">
          Layout vertical centralizado. Logo top, content center, CTA bottom com seta direcional.
        </p>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          <IGStoryTemplate
            variant="brand"
            headline="KTANA Digital"
            body="Estrategia digital com precisao de lamina."
            cta="Saiba mais"
          />
          <IGStoryTemplate
            variant="produto"
            headline="IA Studio"
            body="Solucoes de inteligencia artificial para automacao e performance."
            cta="Conheca"
          />
          <IGStoryTemplate
            variant="cta"
            headline="Fale conosco"
            body="Agende uma conversa com nosso time de especialistas."
            cta="Agendar"
          />
        </div>
      </SubSection>

      {/* ── Posts Feed — Assets Oficiais do Figma ── */}
      <SubSection title="Posts Feed — Assets Oficiais (1080 × 1350)">
        <p className="mb-6 text-sm text-neutral-400">
          5 composicoes oficiais do KIT Branding com samurai, grafismos e tipografia KTANA.
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {[
            { src: "/brand/social/post-feed-samurai-grafismo.png", label: "Grafismo" },
            { src: "/brand/social/post-feed-samurai-render.png", label: "Render" },
            { src: "/brand/social/post-feed-samurai-fullbody.png", label: "Full Body" },
            { src: "/brand/social/post-feed-samurai-dark.png", label: "Dark" },
            { src: "/brand/social/post-feed-samurai-light.png", label: "Light" },
          ].map((post) => (
            <div key={post.label} className="overflow-hidden rounded-xl border border-white/5">
              <Image
                src={assetUrl(post.src)}
                alt={`Post Feed — ${post.label}`}
                width={2160}
                height={2700}
                className="w-full"
                style={{ width: "100%", height: "auto" }}
                unoptimized
              />
              <div className="bg-neutral-900 px-3 py-2">
                <div className="flex items-center gap-2">
                  <p className="text-xs font-medium text-neutral-300">{post.label}</p>
                  <TokenBadge>4:5</TokenBadge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SubSection>

      {/* ── Mockup Post Feed ── */}
      <SubSection title="Mockup — Post Feed Instagram">
        <p className="mb-6 text-sm text-neutral-400">
          Simulacao de post no feed com branding KTANA aplicado no contexto real.
        </p>
        <div className="mx-auto max-w-md overflow-hidden rounded-xl border border-white/5">
          <Image
            src={assetUrl("/brand/social/mockup-post-feed.png")}
            alt="Mockup Post Feed"
            width={2160}
            height={3890}
            className="w-full"
            style={{ width: "100%", height: "auto" }}
            unoptimized
          />
        </div>
      </SubSection>

      {/* ── Capas de Perfil — Assets Oficiais ── */}
      <SubSection title="Capas de Perfil — Redes Sociais">
        <p className="mb-6 text-sm text-neutral-400">
          Capas oficiais desenhadas no KIT Branding KTANA para cada plataforma — samurai com grafismos e Embrace The Future.
        </p>
        <div className="space-y-4">
          {[
            { src: "/brand/social/capa-social-principal.png", label: "Capa Principal (Base)", w: 5120, h: 1896, platform: "Multi-plataforma" },
            { src: "/brand/social/capa-linkedin-pessoal.png", label: "LinkedIn Pessoal", w: 5120, h: 1274, platform: "LinkedIn" },
            { src: "/brand/social/capa-linkedin-company.png", label: "LinkedIn Company Page", w: 5120, h: 878, platform: "LinkedIn" },
            { src: "/brand/social/capa-youtube.png", label: "YouTube Channel Banner", w: 5120, h: 2880, platform: "YouTube" },
            { src: "/brand/social/capa-twitter.png", label: "Twitter / X Header", w: 5120, h: 1706, platform: "Twitter / X" },
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
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-neutral-200">{cover.label}</p>
                    <TokenBadge>{cover.w} × {cover.h}</TokenBadge>
                  </div>
                  <span className="text-xs text-neutral-500">{cover.platform}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SubSection>

      {/* ── Especificacoes ── */}
      <div className="mt-8 rounded-xl border border-white/5 bg-neutral-900 p-6">
        <h4 className="mb-4 text-sm font-semibold text-brand-500">
          Especificacoes de Formato
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-800">
                <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-400">Plataforma</th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-400">Formato</th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-400">Dimensoes</th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-400">Aspect Ratio</th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-400">Background</th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-400">Accent</th>
              </tr>
            </thead>
            <tbody>
              {[
                { platform: "Instagram", format: "Post", dim: "1080 × 1350", ratio: "4:5", bg: "neutral-900", accent: "fire-500" },
                { platform: "Instagram", format: "Story", dim: "1080 × 1920", ratio: "9:16", bg: "black", accent: "fire-500" },
                { platform: "Instagram", format: "Cover", dim: "1080 × 1080", ratio: "1:1", bg: "neutral-900", accent: "fire-500" },
                { platform: "YouTube", format: "Banner", dim: "2560 × 1440", ratio: "16:9", bg: "neutral-900", accent: "fire-500" },
                { platform: "TikTok", format: "Header", dim: "1440 × 480", ratio: "3:1", bg: "neutral-900", accent: "fire-500" },
                { platform: "Twitter / X", format: "Header", dim: "1500 × 500", ratio: "3:1", bg: "neutral-900", accent: "fire-500" },
                { platform: "Facebook", format: "Cover", dim: "820 × 312", ratio: "~2.6:1", bg: "neutral-900", accent: "fire-500" },
                { platform: "LinkedIn", format: "Cover", dim: "1584 × 396", ratio: "4:1", bg: "neutral-900", accent: "fire-500" },
              ].map((r) => (
                <tr key={`${r.platform}-${r.format}`} className="border-b border-neutral-800/50">
                  <td className="px-4 py-2 text-neutral-300">{r.platform}</td>
                  <td className="px-4 py-2 text-neutral-300">{r.format}</td>
                  <td className="px-4 py-2 font-mono text-xs text-brand-500">{r.dim}</td>
                  <td className="px-4 py-2 text-neutral-500">{r.ratio}</td>
                  <td className="px-4 py-2"><TokenBadge>{r.bg}</TokenBadge></td>
                  <td className="px-4 py-2"><TokenBadge>{r.accent}</TokenBadge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Estrutura de Grid ── */}
      <div className="mt-8 rounded-xl border border-white/5 bg-neutral-900 p-6">
        <h4 className="mb-4 text-sm font-semibold text-brand-500">
          Estrutura de Grid — Templates Social
        </h4>
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h5 className="mb-2 text-xs font-semibold text-neutral-300">Post (4:5)</h5>
            <div className="space-y-1 text-xs text-neutral-500">
              <p>Header zone: logo + variant label</p>
              <p>Content zone: heading + body + accent bar</p>
              <p>Footer zone: symbol + watermark</p>
              <p>Padding: 24px (spacing-6)</p>
              <p>Content gap: 16px (spacing-4)</p>
              <p>Accent bar: 64px x 2px fire-500</p>
            </div>
          </div>
          <div>
            <h5 className="mb-2 text-xs font-semibold text-neutral-300">Story (9:16)</h5>
            <div className="space-y-1 text-xs text-neutral-500">
              <p>Top: logotype horizontal center</p>
              <p>Center: accent bar + heading + body</p>
              <p>Bottom: CTA label + seta direcional</p>
              <p>Padding: 20px (spacing-5)</p>
              <p>Text align: center</p>
              <p>Max-width body: 80%</p>
            </div>
          </div>
          <div>
            <h5 className="mb-2 text-xs font-semibold text-neutral-300">Cover (wide)</h5>
            <div className="space-y-1 text-xs text-neutral-500">
              <p>Grid: 3 colunas iguais (1/3)</p>
              <p>Left 1/3: logotype + tagline</p>
              <p>Center 1/3: zona livre</p>
              <p>Right 1/3: accent stripes</p>
              <p>Padding: 32px (spacing-8)</p>
              <p>Stripes: fire-500, gold, ice-500</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
