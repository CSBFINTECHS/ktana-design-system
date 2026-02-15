import { SectionLabel, SectionTitle, SubSection } from "@/components/showcase";
import { ICON_SIZES } from "@/lib/constants";
import {
  Flame, Swords, Shield, Target, Zap, Eye,
  Crown, Gem, Star, Heart, Rocket, Globe, Lock, Key,
  Layers, Layout, Monitor, Smartphone, Code, Terminal, Database, Server,
  ArrowRight, ArrowUpRight, ChevronDown, ChevronRight, Menu, X, Search, Plus,
} from "lucide-react";

const ICON_GROUPS = [
  {
    label: "Brand",
    items: [
      { name: "Flame", icon: Flame },
      { name: "Swords", icon: Swords },
      { name: "Shield", icon: Shield },
      { name: "Target", icon: Target },
      { name: "Zap", icon: Zap },
      { name: "Eye", icon: Eye },
      { name: "Crown", icon: Crown },
      { name: "Gem", icon: Gem },
    ],
  },
  {
    label: "Status",
    items: [
      { name: "Star", icon: Star },
      { name: "Heart", icon: Heart },
      { name: "Rocket", icon: Rocket },
      { name: "Globe", icon: Globe },
      { name: "Lock", icon: Lock },
      { name: "Key", icon: Key },
      { name: "Layers", icon: Layers },
      { name: "Layout", icon: Layout },
    ],
  },
  {
    label: "Interface",
    items: [
      { name: "Monitor", icon: Monitor },
      { name: "Smartphone", icon: Smartphone },
      { name: "Code", icon: Code },
      { name: "Terminal", icon: Terminal },
      { name: "Database", icon: Database },
      { name: "Server", icon: Server },
      { name: "ArrowRight", icon: ArrowRight },
      { name: "ArrowUpRight", icon: ArrowUpRight },
    ],
  },
  {
    label: "Navigation",
    items: [
      { name: "ChevronDown", icon: ChevronDown },
      { name: "ChevronRight", icon: ChevronRight },
      { name: "Menu", icon: Menu },
      { name: "X", icon: X },
      { name: "Search", icon: Search },
      { name: "Plus", icon: Plus },
    ],
  },
];

export function IconsSection() {
  return (
    <section id="icones" className="mx-auto max-w-[1400px] px-8 py-20">
      <SectionLabel>ICONOGRAFIA</SectionLabel>
      <SectionTitle sub="Biblioteca Lucide — icones vermelho sobre fundo escuro, padrao KTANA">
        Icones
      </SectionTitle>

      {ICON_GROUPS.map((group) => (
        <SubSection key={group.label} title={group.label}>
          <div className="grid grid-cols-4 gap-4 sm:grid-cols-8">
            {group.items.map((item) => (
              <div key={item.name} className="flex flex-col items-center gap-2 rounded-lg border border-white/5 bg-neutral-1000 p-3">
                <item.icon size={24} className="text-brand-500" />
                <span className="text-[10px] text-neutral-500">{item.name}</span>
              </div>
            ))}
          </div>
        </SubSection>
      ))}

      <SubSection title="Tamanhos padrao">
        <div className="flex items-end gap-6">
          {ICON_SIZES.map((s) => (
            <div key={s} className="flex flex-col items-center gap-2">
              <Shield size={s} className="text-brand-500" />
              <span className="text-[10px] text-neutral-500">{s}px</span>
            </div>
          ))}
        </div>
      </SubSection>
    </section>
  );
}
