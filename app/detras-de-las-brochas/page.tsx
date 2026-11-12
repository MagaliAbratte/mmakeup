import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { BehindTheBrushesSection } from "@/components/sections/behind-the-brushes-section";
import { landingPageData } from "@/content/landing";

export const metadata: Metadata = {
  alternates: { canonical: "/detras-de-las-brochas" },
  title: "Detrás de las brochas | M Makeup",
  description: "Conocé a Magui, maquilladora profesional y creadora de M Makeup en Córdoba. Su historia y su forma de acompañarte en cada maquillaje.",
  openGraph: {
    title: "Detrás de las brochas | M Makeup",
    description: "Conocé a Magui, maquilladora profesional y creadora de M Makeup en Córdoba.",
    type: "website",
    locale: "es_AR"
  }
};

export default function BehindTheBrushesPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader backHref="/" backLabel="Volver al inicio" />
      <main>
        <BehindTheBrushesSection />
      </main>
      <SiteFooter brand={landingPageData.brand} contact={landingPageData.contact} />
    </div>
  );
}
