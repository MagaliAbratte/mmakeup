import { getLandingPageData } from "@/lib/api/landing";
import { BookingSection } from "@/components/sections/booking-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FinalGraphicSection } from "@/components/sections/final-graphic-section";
import { HeroSection } from "@/components/sections/hero-section";
import { IntroSection } from "@/components/sections/intro-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SiteFooter } from "@/components/layout/site-footer";

export default async function HomePage() {
  const data = await getLandingPageData();

  return (
    <main className="min-h-screen bg-background">
      <HeroSection brand={data.brand} />
      <IntroSection />
      <ServicesSection services={data.services} />
      <BookingSection booking={data.booking} />
      <ContactSection contact={data.contact} />
      <FinalGraphicSection />
      <SiteFooter brand={data.brand} contact={data.contact} />
    </main>
  );
}
