"use client";

import { useState } from "react";
import Image from "next/image";
import { assetUrl } from "@/lib/utils";
import { DS_NAV_ITEMS } from "@/lib/constants";

export function DSHeader() {
  const [activeSection, setActiveSection] = useState("logo");

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800/60 bg-neutral-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-3">
        {/* Logo — wordmark KTANA real */}
        <Image
          src={assetUrl("/brand/nome/dark.svg")}
          alt="KTANA"
          width={120}
          height={23}
          className="h-5 w-auto"
          unoptimized
        />

        {/* Navegação */}
        <nav className="hidden items-center gap-4 text-xs lg:flex lg:gap-6 lg:text-sm">
          {DS_NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveSection(item.id)}
              className={`transition-colors hover:text-brand-fire-500 ${
                activeSection === item.id
                  ? "text-brand-fire-500"
                  : "text-neutral-500"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Tagline */}
        <div className="hidden text-right text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-600 md:block">
          EMBRACE
          <br />
          THE FUTURE
        </div>
      </div>
    </header>
  );
}
