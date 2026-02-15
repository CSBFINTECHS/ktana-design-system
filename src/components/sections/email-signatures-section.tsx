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
      className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-700/50 bg-neutral-800 px-3 py-1.5 text-xs font-medium text-neutral-300 transition-colors hover:border-brand-500/30 hover:text-neutral-100"
    >
      {copied ? (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
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
    <div className="overflow-hidden rounded-xl border border-neutral-700/30">
      <div className="bg-white p-6">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <div className="flex items-center justify-between bg-neutral-900/80 px-4 py-3">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium text-neutral-100">{templateLabel}</p>
            <span className="inline-block rounded bg-neutral-800 px-1.5 py-0.5 font-mono text-[10px] text-brand-500">
              Gmail Compatible
            </span>
            <span className="inline-block rounded bg-neutral-800 px-1.5 py-0.5 font-mono text-[10px] text-brand-500">
              max 600px
            </span>
          </div>
          <p className="text-xs text-neutral-500">{templateDescription}</p>
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
      <SectionTitle sub="Assinaturas de email profissionais com identidade visual KTANA — HTML puro compativel com Gmail, prontas para copiar e colar">
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
      <div className="mt-8 rounded-xl border border-neutral-700/30 bg-neutral-900 p-6">
        <h4 className="mb-4 text-sm font-semibold text-brand-500">
          Como usar no Gmail
        </h4>
        <div className="space-y-2 text-xs text-neutral-500">
          <p>1. Clique em <strong className="text-neutral-300">Copiar HTML</strong> no template desejado</p>
          <p>2. No Gmail, va em <strong className="text-neutral-300">Configuracoes</strong> (engrenagem) &rarr; <strong className="text-neutral-300">Ver todas as configuracoes</strong></p>
          <p>3. Na aba <strong className="text-neutral-300">Geral</strong>, role ate <strong className="text-neutral-300">Assinatura</strong></p>
          <p>4. Crie uma nova assinatura ou edite a existente</p>
          <p>5. No editor de assinatura, pressione <strong className="text-neutral-300">Ctrl+A</strong> (selecionar tudo) e depois <strong className="text-neutral-300">Ctrl+V</strong> (colar)</p>
          <p>6. Salve as configuracoes no final da pagina</p>
        </div>
      </div>

      {/* Tokens reference */}
      <div className="mt-8 rounded-xl border border-neutral-700/30 bg-neutral-900 p-6">
        <h4 className="mb-4 text-sm font-semibold text-brand-500">
          Tokens — KTANA
        </h4>
        <div className="space-y-0">
          {[
            { token: "accent", value: KTANA_SIGNATURE.accent },
            { token: "text-primary", value: KTANA_SIGNATURE.textPrimary },
            { token: "text-secondary", value: KTANA_SIGNATURE.textSecondary },
            { token: "divider", value: KTANA_SIGNATURE.divider },
            { token: "site", value: KTANA_SIGNATURE.site },
            { token: "email", value: KTANA_SIGNATURE.email },
          ].map((row) => (
            <div
              key={row.token}
              className="flex items-center justify-between border-b border-neutral-800/50 py-2"
            >
              <span className="font-mono text-xs text-brand-500">{row.token}</span>
              <span className="flex items-center gap-2 text-xs text-neutral-400">
                {row.token === "accent" && (
                  <span className="inline-block size-3 rounded-sm" style={{ backgroundColor: row.value }} />
                )}
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
