import { HeroSection } from "@/components/hero-section"
import { PainSection } from "@/components/pain-section"
import { SolutionSection } from "@/components/solution-section"
import { ImportanceSection } from "@/components/importance-section"
import { WhyPeopleFailSection } from "@/components/why-people-fail-section"
import { TransformationSection } from "@/components/transformation-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <ImportanceSection />
      <WhyPeopleFailSection />
      <TransformationSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
