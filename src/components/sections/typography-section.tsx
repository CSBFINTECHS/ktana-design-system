import { SectionLabel, SectionTitle, SubSection } from "@/components/showcase";
import { TYPOGRAPHY_SCALE, FONT_REFERENCE } from "@/lib/constants";

export function TypographySection() {
  return (
    <section id="tipografia" className="mx-auto max-w-[1400px] px-8 py-20">
      <SectionLabel>TIPOGRAFIA</SectionLabel>
      <SectionTitle sub="Zen Dots (Display/Headings) + Satoshi (Body) + Inter (UI) — escala do KIT Branding OFICIAL">
        Tipografia
      </SectionTitle>

      <SubSection title="Escala Tipografica">
        <div className="space-y-8">
          {TYPOGRAPHY_SCALE.map((t) => (
            <div key={t.token} className="border-l-2 border-neutral-800 pl-6">
              <div className="mb-2 flex flex-wrap items-baseline gap-3">
                <code className="rounded bg-neutral-900 px-2 py-1 font-mono text-xs text-brand-500">
                  {t.token}
                </code>
                <span className="text-[11px] text-neutral-500">
                  {t.size} / {t.lineHeight} / {t.letterSpacing} / w{t.weight}
                </span>
              </div>
              <p
                className="text-white"
                style={{
                  fontFamily: t.token.startsWith("body") ? "var(--font-family-body)" : "var(--font-family-display)",
                  fontWeight: t.weight,
                  fontSize: `clamp(16px, ${parseInt(t.size) / 16}vw, ${t.size})`,
                  lineHeight: t.lineHeight,
                  letterSpacing: t.letterSpacing,
                }}
              >
                {t.sample}
              </p>
            </div>
          ))}
        </div>
      </SubSection>

      <SubSection title="Fontes">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-white/5 bg-neutral-1000 p-6">
            <p className="mb-1 text-sm font-semibold text-brand-500">Zen Dots</p>
            <p className="mb-4 text-xs text-neutral-500">Display & Headings</p>
            <p className="text-white" style={{ fontFamily: "var(--font-family-display)", fontWeight: 400, fontSize: "24px" }}>
              Regular (400) — Aa Bb Cc 123
            </p>
          </div>
          <div className="rounded-xl border border-white/5 bg-neutral-1000 p-6">
            <p className="mb-1 text-sm font-semibold text-brand-500">Satoshi</p>
            <p className="mb-4 text-xs text-neutral-500">Body Text</p>
            <p className="text-white" style={{ fontFamily: "var(--font-family-body)", fontWeight: 500, fontSize: "24px" }}>
              Medium (500) — Aa Bb Cc 123
            </p>
          </div>
          <div className="rounded-xl border border-white/5 bg-neutral-1000 p-6">
            <p className="mb-1 text-sm font-semibold text-brand-500">Inter</p>
            <p className="mb-4 text-xs text-neutral-500">UI & Interface</p>
            <p className="text-white" style={{ fontFamily: "var(--font-family-ui)", fontWeight: 400, fontSize: "24px" }}>
              Regular (400) — Aa Bb Cc 123
            </p>
            <p className="mt-2 text-white" style={{ fontFamily: "var(--font-family-ui)", fontWeight: 600, fontSize: "24px" }}>
              SemiBold (600) — Aa Bb Cc 123
            </p>
          </div>
        </div>
      </SubSection>

      <SubSection title="Tabela de Referencia">
        <div className="overflow-x-auto rounded-xl border border-white/5">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/5 bg-neutral-1000">
                <th className="px-4 py-3 text-left text-xs font-semibold text-neutral-400">Token</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-neutral-400">Font</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-neutral-400">Weight</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-neutral-400">Size</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-neutral-400">LH</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-neutral-400">LS</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-neutral-400">Uso</th>
              </tr>
            </thead>
            <tbody>
              {FONT_REFERENCE.map((r) => (
                <tr key={r.token} className="border-b border-white/5">
                  <td className="px-4 py-2 font-mono text-xs text-brand-500">{r.token}</td>
                  <td className="px-4 py-2 text-neutral-300">{r.font}</td>
                  <td className="px-4 py-2 text-neutral-300">{r.weight}</td>
                  <td className="px-4 py-2 text-neutral-300">{r.size}</td>
                  <td className="px-4 py-2 text-neutral-300">{r.lineHeight}</td>
                  <td className="px-4 py-2 text-neutral-300">{r.letterSpacing}</td>
                  <td className="px-4 py-2 text-neutral-500">{r.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SubSection>
    </section>
  );
}
