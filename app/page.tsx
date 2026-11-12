import type { Metadata } from "next";
import { landingPageData as data } from "@/content/landing";
import { ContactSection } from "@/components/sections/contact-section";
import { FinalGraphicSection } from "@/components/sections/final-graphic-section";
import { HeroSection } from "@/components/sections/hero-section";
import { IntroSection } from "@/components/sections/intro-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  alternates: { canonical: "/" }
};

const businessData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "M Makeup",
  description: "Maquillaje profesional para novias, eventos, clases de automaquillaje y producciones en Córdoba.",
  url: "https://mmakeup.vercel.app/",
  image: "https://mmakeup.vercel.app/assets/portada1.jpeg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Córdoba",
    addressRegion: "Córdoba",
    addressCountry: "AR"
  },
  areaServed: "Córdoba, Argentina",
  sameAs: ["https://instagram.com/maguiabratte.makeup"]
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData).replace(/</g, "\\u003c") }} />
      <HeroSection brand={data.brand} />
      <IntroSection />
      <ServicesSection services={data.services} />
      <ContactSection contact={data.contact} />
      <FinalGraphicSection />
      <SiteFooter brand={data.brand} contact={data.contact} />
    </main>
  );
}
