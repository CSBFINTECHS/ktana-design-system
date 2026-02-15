import { SectionLabel, SectionTitle, SubSection, ColorSwatch, SemanticRow } from "@/components/showcase";
import {
  NEUTRAL_COLORS, FIRE_COLORS, SPECTRUM_COLORS, ICE_COLORS,
  SEMANTIC_COLORS,
} from "@/lib/constants";

export function ColorsSection() {
  return (
    <section id="cores" className="mx-auto max-w-[1400px] px-8 py-20">
      <SectionLabel>PALETA</SectionLabel>
      <SectionTitle sub="Cores extraidas do KIT Branding OFICIAL KTANA — neutral, fire, spectrum, ice">
        Cores
      </SectionTitle>

      <SubSection title="Neutral (11 steps)">
        <div className="flex flex-wrap gap-3">
          {NEUTRAL_COLORS.map((c) => (
            <ColorSwatch key={c.cssVar} name={c.name} hex={c.hex} />
          ))}
        </div>
      </SubSection>

      <SubSection title="Brand / Fire (Vermelho KTANA)">
        <div className="flex flex-wrap gap-3">
          {FIRE_COLORS.map((c) => (
            <ColorSwatch key={c.cssVar} name={c.name} hex={c.hex} />
          ))}
        </div>
      </SubSection>

      <SubSection title="Brand / Spectrum (Gradiente Assinatura)">
        <div className="flex flex-wrap gap-3">
          {SPECTRUM_COLORS.map((c) => (
            <ColorSwatch key={c.cssVar} name={c.name} hex={c.hex} />
          ))}
        </div>
        <div className="mt-4 h-16 w-full rounded-lg" style={{ background: "conic-gradient(from 225deg, #FE006A 26%, #D300C5 52%, #FD4C2A 73%, #FFD100 100%)" }} />
      </SubSection>

      <SubSection title="Brand / Ice (Azul Complementar)">
        <div className="flex flex-wrap gap-3">
          {ICE_COLORS.map((c) => (
            <ColorSwatch key={c.cssVar} name={c.name} hex={c.hex} />
          ))}
        </div>
      </SubSection>

      <div className="my-10 h-px bg-neutral-800" />

      <SubSection title="Tokens Semanticos (Light / Dark)">
        <p className="mb-6 text-sm text-neutral-400">
          Mapeamento dos primitivos KTANA para roles de UI do shadcn/ui.
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
