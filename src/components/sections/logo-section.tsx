import { SectionLabel, SectionTitle, SubSection } from "@/components/showcase";
import { KTANASymbol, KTANALettering, KTANALogotype } from "@/components/brand/ktana-symbol";

const VARIANTS = ["dark", "light"] as const;

function needsLightBg(variant: string) {
  return variant === "light";
}

export function LogoSection() {
  return (
    <section id="logo" className="mx-auto max-w-[1400px] px-8 py-20">
      <SectionLabel>IDENTIDADE VISUAL</SectionLabel>
      <SectionTitle sub="Symbol, Lettering e Logotype — variantes dark e light extraidas do KIT Branding OFICIAL">
        Logo & Variacoes
      </SectionTitle>

      <SubSection title="Symbol">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {VARIANTS.map((v) => (
            <div key={v} className="flex flex-col items-center gap-3">
              <div className={`flex items-center justify-center rounded-xl border border-neutral-700/30 p-5 ${needsLightBg(v) ? "bg-neutral-100" : "bg-neutral-900"}`}>
                <KTANASymbol variant={v} size={56} />
              </div>
              <span className="text-xs capitalize text-neutral-500">{v}</span>
            </div>
          ))}
          {[48, 64, 96].map((s) => (
            <div key={s} className="flex flex-col items-center gap-3">
              <div className="flex items-center justify-center rounded-xl border border-neutral-700/30 bg-neutral-900 p-5">
                <KTANASymbol variant="dark" size={s} />
              </div>
              <span className="text-xs text-neutral-500">{s}px</span>
            </div>
          ))}
        </div>
      </SubSection>

      <SubSection title="Lettering">
        <div className="space-y-3">
          {VARIANTS.map((v) => (
            <div key={v} className={`flex items-center justify-between rounded-xl border border-neutral-700/30 p-6 ${needsLightBg(v) ? "bg-neutral-100" : "bg-neutral-900"}`}>
              <KTANALettering variant={v} height={28} />
              <span className="text-xs capitalize text-neutral-500">{v}</span>
            </div>
          ))}
        </div>
      </SubSection>

      <SubSection title="Logotype (Symbol + Lettering)">
        <div className="mb-6">
          <p className="mb-4 text-sm text-neutral-400">Horizontal</p>
          <div className="grid gap-4 md:grid-cols-2">
            {VARIANTS.map((v) => (
              <div key={v} className={`flex items-center justify-center rounded-xl border border-neutral-700/30 p-8 ${needsLightBg(v) ? "bg-neutral-100" : "bg-neutral-900"}`}>
                <KTANALogotype variant={v} layout="horizontal" height={48} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm text-neutral-400">Vertical</p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {VARIANTS.map((v) => (
              <div key={v} className={`flex items-center justify-center rounded-xl border border-neutral-700/30 p-8 ${needsLightBg(v) ? "bg-neutral-100" : "bg-neutral-900"}`}>
                <KTANALogotype variant={v} layout="vertical" height={80} />
              </div>
            ))}
          </div>
        </div>
      </SubSection>
    </section>
  );
}
