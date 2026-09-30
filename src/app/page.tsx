import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";
import { Hero } from "@/components/hero/Hero";
import { OpeningStatement } from "@/components/projects/OpeningStatement";
import { ProjectShowroom } from "@/components/projects/ProjectShowroom";
import {
  MaterialComparison,
  MaterialExplorer,
} from "@/components/materials/MaterialExplorer";
import { Applications } from "@/components/applications/Applications";
import { DetailSection } from "@/components/craftsmanship/DetailSection";
import { ProcessSection } from "@/components/process/ProcessSection";
import { ProfessionalsSection } from "@/components/professionals/ProfessionalsSection";
import { BackstageSection } from "@/components/backstage/BackstageSection";
import { QuoteFlow } from "@/components/quote/QuoteFlow";
import { FinalCta } from "@/components/cta/FinalCta";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OpeningStatement />
        <ProjectShowroom />
        <MaterialExplorer />
        <MaterialComparison />
        <Applications />
        <DetailSection />
        <ProcessSection />
        <ProfessionalsSection />
        <BackstageSection />
        <QuoteFlow />
        <FinalCta />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
