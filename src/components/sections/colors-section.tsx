import { SectionLabel, SectionTitle, SubSection, ColorSwatch, SemanticRow } from "@/components/showcase";
import { NEUTRAL_COLORS, BRAND_COLORS, SEMANTIC_COLORS } from "@/lib/constants";

export function ColorsSection() {
  return (
    <section id="cores" className="mx-auto max-w-[1400px] px-8 py-20">
      <SectionLabel>PALETA</SectionLabel>
      <SectionTitle sub="Preto, branco/creme e vermelho — as unicas 3 cores da marca KTANA">
        Cores
      </SectionTitle>

      <SubSection title="Neutral (Preto → Creme)">
        <div className="flex flex-wrap gap-3">
          {NEUTRAL_COLORS.map((c) => (
            <ColorSwatch key={c.cssVar} name={c.name} hex={c.hex} />
          ))}
        </div>
      </SubSection>

      <SubSection title="Brand / Vermelho KTANA">
        <div className="flex flex-wrap gap-3">
          {BRAND_COLORS.map((c) => (
            <ColorSwatch key={c.cssVar} name={c.name} hex={c.hex} />
          ))}
        </div>
        <div
          className="mt-4 h-16 w-full rounded-lg"
          style={{ background: "linear-gradient(90deg, #73071F 0%, #C20B34 30%, #D70030 50%, #E60F3D 70%, #F2365E 100%)" }}
        />
        <p className="mt-2 text-center text-xs text-neutral-500">
          Gradiente completo da escala Brand — do vermelho mais escuro ao mais vibrante
        </p>
      </SubSection>

      <div className="my-10 h-px bg-white/5" />

      <SubSection title="Tokens Semanticos (Light / Dark)">
        <p className="mb-6 text-sm text-neutral-400">
          Mapeamento dos primitivos KTANA para roles de UI do shadcn/ui — somente vermelho como acento.
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SEMANTIC_COLORS.map((c) => (
            <SemanticRow key={c.name} {...c} />
          ))}
        </div>
      </SubSection>
    </section>
  );
}
