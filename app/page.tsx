import { landingPageData as data } from "@/content/landing";
import { ContactSection } from "@/components/sections/contact-section";
import { FinalGraphicSection } from "@/components/sections/final-graphic-section";
import { HeroSection } from "@/components/sections/hero-section";
import { IntroSection } from "@/components/sections/intro-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SiteFooter } from "@/components/layout/site-footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection brand={data.brand} />
      <IntroSection />
      <ServicesSection services={data.services} />
      <ContactSection contact={data.contact} />
      <FinalGraphicSection />
      <SiteFooter brand={data.brand} contact={data.contact} />
    </main>
  );
}
