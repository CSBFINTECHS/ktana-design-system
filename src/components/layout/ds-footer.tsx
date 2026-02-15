import Image from "next/image";
import { assetUrl } from "@/lib/utils";

export function DSFooter() {
  return (
    <footer className="border-t border-neutral-800/60 bg-neutral-950">
      <div className="mx-auto max-w-[1400px] px-8 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Coluna 1 — Logo + descrição */}
          <div>
            <Image
              src={assetUrl("/brand/logo-horizontal/dark.svg")}
              alt="KTANA"
              width={180}
              height={64}
              className="h-12 w-auto"
              unoptimized
            />
            <p className="mt-4 text-sm leading-relaxed text-neutral-500">
              Estrategia digital com precisao de lamina — tecnologia, performance e design.
            </p>
          </div>

          {/* Coluna 2 — Navegação */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-brand-fire-500">
              Design System
            </p>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li><a href="#logo" className="transition-colors hover:text-neutral-200">Logo & Variacoes</a></li>
              <li><a href="#cores" className="transition-colors hover:text-neutral-200">Cores</a></li>
              <li><a href="#tipografia" className="transition-colors hover:text-neutral-200">Tipografia</a></li>
              <li><a href="#icones" className="transition-colors hover:text-neutral-200">Icones</a></li>
              <li><a href="#gradientes" className="transition-colors hover:text-neutral-200">Gradientes</a></li>
              <li><a href="#tokens" className="transition-colors hover:text-neutral-200">Tokens de Layout</a></li>
            </ul>
          </div>

          {/* Coluna 3 — Stack */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-brand-fire-500">
              Stack
            </p>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li>Next.js 16 + React 19</li>
              <li>Tailwind CSS v4</li>
              <li>shadcn/ui (Radix)</li>
              <li>Style Dictionary v5</li>
              <li>Lucide Icons</li>
              <li>Zen Dots + Satoshi + Inter</li>
            </ul>
          </div>
        </div>

        <div className="my-10 h-px bg-neutral-800" />

        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-xs text-neutral-600">
            &copy; 2026 KTANA. Todos os direitos reservados.
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-600">
            Embrace The Future
          </p>
        </div>
      </div>
    </footer>
  );
}
