"use client";

import { useState } from "react";
import { SectionLabel, SectionTitle, SubSection } from "@/components/showcase";
import {
  SIGNATURE_TEMPLATES,
  DEFAULT_FIELDS,
  KTANA_SIGNATURE,
} from "@/lib/constants";

/* ─── Copy Button ─── */

function CopyButton({ html }: { html: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(html);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-700/50 bg-neutral-800 px-3.5 py-2 text-xs font-medium text-neutral-300 transition-all hover:border-brand-500/40 hover:bg-neutral-750 hover:text-neutral-100"
    >
      {copied ? (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Copiado!
        </>
      ) : (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          Copiar HTML
        </>
      )}
    </button>
  );
}

/* ─── Signature Card ─── */

function SignatureCard({
  templateLabel,
  templateDescription,
  html,
}: {
  templateLabel: string;
  templateDescription: string;
  html: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-700/30 transition-all hover:border-neutral-600/50">
      {/* Preview — fundo neutro claro simulando corpo do email */}
      <div className="bg-neutral-100 px-8 py-8">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>

      {/* Info bar */}
      <div className="flex items-center justify-between bg-neutral-900/80 px-5 py-3.5">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-neutral-100">{templateLabel}</p>
            <span className="inline-block rounded-md bg-neutral-800 px-2 py-0.5 font-mono text-[10px] text-brand-500">
              Gmail
            </span>
            <span className="inline-block rounded-md bg-neutral-800 px-2 py-0.5 font-mono text-[10px] text-neutral-500">
              520px
            </span>
          </div>
          <p className="text-[11px] text-neutral-500">{templateDescription}</p>
        </div>
        <CopyButton html={html} />
      </div>
    </div>
  );
}

/* ─── Main Section ─── */

export function EmailSignaturesSection() {
  return (
    <section id="assinaturas" className="mx-auto max-w-[1400px] px-8 py-20">
      <SectionLabel>COMUNICACAO</SectionLabel>
      <SectionTitle sub="Assinaturas dark com Samurai 3D, accent vermelho e links clicaveis — HTML puro compativel com Gmail, prontas para copiar e colar">
        Assinaturas de Email
      </SectionTitle>

      {SIGNATURE_TEMPLATES.map((template) => {
        const html = template.generate(DEFAULT_FIELDS);
        return (
          <SubSection key={template.id} title={template.label}>
            <SignatureCard
              templateLabel={template.label}
              templateDescription={template.description}
              html={html}
            />
          </SubSection>
        );
      })}

      {/* Instrucoes */}
      <div className="mt-4 rounded-xl border border-neutral-700/30 bg-neutral-900 p-6">
        <h4 className="mb-4 text-sm font-semibold text-brand-500">
          Como usar no Gmail
        </h4>
        <ol className="space-y-1.5 text-xs text-neutral-500 list-decimal list-inside">
          <li>Clique em <strong className="text-neutral-300">Copiar HTML</strong> no template desejado</li>
          <li>No Gmail: <strong className="text-neutral-300">Configuracoes</strong> &rarr; <strong className="text-neutral-300">Ver todas as configuracoes</strong> &rarr; aba <strong className="text-neutral-300">Geral</strong></li>
          <li>Role ate <strong className="text-neutral-300">Assinatura</strong> e crie uma nova</li>
          <li>No editor: <strong className="text-neutral-300">Ctrl+A</strong> &rarr; <strong className="text-neutral-300">Ctrl+V</strong> para colar</li>
          <li>Salve no final da pagina</li>
        </ol>
      </div>

      {/* Tokens reference */}
      <div className="mt-6 rounded-xl border border-neutral-700/30 bg-neutral-900 p-6">
        <h4 className="mb-4 text-sm font-semibold text-brand-500">
          Tokens de Cor
        </h4>
        <div className="grid grid-cols-2 gap-x-8 gap-y-0 sm:grid-cols-3">
          {[
            { token: "accent", value: KTANA_SIGNATURE.accent },
            { token: "bg", value: KTANA_SIGNATURE.bg },
            { token: "text-white", value: KTANA_SIGNATURE.textWhite },
            { token: "text-light", value: KTANA_SIGNATURE.textLight },
            { token: "text-muted", value: KTANA_SIGNATURE.textMuted },
            { token: "divider", value: KTANA_SIGNATURE.divider },
          ].map((row) => (
            <div key={row.token} className="flex items-center gap-2 border-b border-neutral-800/50 py-2">
              <span className="inline-block size-3 rounded-sm border border-neutral-700/50" style={{ backgroundColor: row.value }} />
              <span className="font-mono text-[11px] text-neutral-400">{row.token}</span>
              <span className="ml-auto font-mono text-[10px] text-neutral-600">{row.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
