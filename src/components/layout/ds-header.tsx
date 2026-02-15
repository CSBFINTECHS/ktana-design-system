"use client";

import { useState } from "react";
import Image from "next/image";
import { assetUrl } from "@/lib/utils";
import { DS_NAV_ITEMS } from "@/lib/constants";

export function DSHeader() {
  const [activeSection, setActiveSection] = useState("brand");

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-3">
        {/* Symbol KTANA */}
        <a href="#brand" onClick={() => setActiveSection("brand")} className="shrink-0">
          <Image
            src={assetUrl("/brand/symbol/dark.svg")}
            alt="KTANA"
            width={32}
            height={32}
            className="h-7 w-7"
            unoptimized
          />
        </a>

        {/* Navegação */}
        <nav className="hidden items-center gap-4 text-xs lg:flex lg:gap-5 lg:text-[13px]">
          <a
            href="#brand"
            onClick={() => setActiveSection("brand")}
            className={`transition-colors hover:text-brand-500 ${
              activeSection === "brand" ? "text-brand-500" : "text-neutral-500"
            }`}
          >
            Brand
          </a>
          {DS_NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveSection(item.id)}
              className={`transition-colors hover:text-brand-500 ${
                activeSection === item.id
                  ? "text-brand-500"
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
