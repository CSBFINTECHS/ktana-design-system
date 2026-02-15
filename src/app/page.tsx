import { DSHeader, DSHero, DSFooter } from "@/components/layout";
import { SectionDivider } from "@/components/showcase";
import {
  LogoSection,
  ColorsSection,
  TypographySection,
  IconsSection,
  GradientsSection,
  TokensSection,
} from "@/components/sections";

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      <DSHeader />
      <DSHero />

      <LogoSection />
      <SectionDivider />

      <ColorsSection />
      <SectionDivider />

      <TypographySection />
      <SectionDivider />

      <IconsSection />
      <SectionDivider />

      <GradientsSection />
      <SectionDivider />

      <TokensSection />

      <DSFooter />
    </div>
  );
}
