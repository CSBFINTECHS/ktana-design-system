import { SectionLabel, SectionTitle } from "@/components/showcase";
import { GRADIENTS } from "@/lib/constants";

export function GradientsSection() {
  return (
    <section id="gradientes" className="mx-auto max-w-[1400px] px-8 py-20">
      <SectionLabel>GRADIENTES</SectionLabel>
      <SectionTitle sub="5 gradientes nomeados do KIT Branding KTANA">
        Gradientes
      </SectionTitle>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {GRADIENTS.map((g) => (
          <div key={g.name} className="overflow-hidden rounded-xl border border-neutral-700/30">
            <div className="h-36" style={{ background: g.css }} />
            <div className="bg-neutral-900 p-4">
              <p className="font-semibold text-neutral-100">{g.name}</p>
              <p className="mt-1 text-xs text-neutral-500">{g.description}</p>
              <code className="mt-2 block break-all font-mono text-[10px] text-neutral-600">
                {g.css}
              </code>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
