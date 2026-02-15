"use client";

import { useState } from "react";
import { KTANALettering } from "@/components/brand/ktana-symbol";
import { DS_NAV_ITEMS } from "@/lib/constants";

export function DSHeader() {
  const [activeSection, setActiveSection] = useState("logo");

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-4">
        <KTANALettering variant="dark" height={20} />
        <nav className="hidden items-center gap-4 text-xs lg:flex lg:gap-6 lg:text-sm">
          {DS_NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveSection(item.id)}
              className={`transition-colors hover:text-brand-fire-400 ${
                activeSection === item.id
                  ? "text-brand-fire-400"
                  : "text-neutral-500"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden text-right font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 md:block">
          CORTE
          <br />
          PRECISO
        </div>
      </div>
    </header>
  );
}
