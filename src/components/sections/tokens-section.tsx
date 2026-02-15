import { SectionLabel, SectionTitle, SubSection } from "@/components/showcase";
import { SPACING_SCALE, RADIUS_SCALE, SHADOW_NAMES } from "@/lib/constants";

export function TokensSection() {
  return (
    <section id="tokens" className="mx-auto max-w-[1400px] px-8 py-20">
      <SectionLabel>TOKENS</SectionLabel>
      <SectionTitle sub="Espacamento (4px base), border-radius e sombras">
        Tokens de Layout
      </SectionTitle>

      <SubSection title="Spacing (escala 4px)">
        <div className="flex flex-wrap items-end gap-3">
          {SPACING_SCALE.map((sp) => (
            <div key={sp.name} className="flex flex-col items-center gap-1">
              <div
                className="rounded bg-brand-500"
                style={{ width: sp.value, height: sp.value }}
              />
              <span className="text-[10px] text-neutral-400">{sp.name}</span>
              <span className="font-mono text-[9px] text-neutral-600">{sp.value}</span>
            </div>
          ))}
        </div>
      </SubSection>

      <SubSection title="Border Radius">
        <div className="flex flex-wrap gap-5">
          {RADIUS_SCALE.map((r) => (
            <div key={r.name} className="flex flex-col items-center gap-2">
              <div
                className="size-16 bg-brand-500"
                style={{ borderRadius: r.value }}
              />
              <span className="text-[10px] text-neutral-400">{r.name}</span>
              <span className="font-mono text-[9px] text-neutral-600">{r.value}</span>
            </div>
          ))}
        </div>
      </SubSection>

      <SubSection title="Shadows">
        <div className="flex flex-wrap gap-8">
          {SHADOW_NAMES.map((s) => (
            <div key={s} className="flex flex-col items-center gap-2">
              <div
                className="size-28 rounded-lg bg-neutral-900"
                style={{ boxShadow: `var(--shadow-${s})` }}
              />
              <span className="text-xs text-neutral-400">{s}</span>
            </div>
          ))}
        </div>
      </SubSection>
    </section>
  );
}
