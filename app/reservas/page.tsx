import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { BookingSection } from "@/components/sections/booking-section";
import { landingPageData as data } from "@/content/landing";

export const metadata: Metadata = {
  alternates: { canonical: "/reservas" },
  title: "Reservas y condiciones | M Makeup",
  description: "Consultá cómo reservar tu maquillaje profesional en Nueva Córdoba o a domicilio, y conocé las condiciones de M Makeup.",
  openGraph: {
    title: "Reservas y condiciones | M Makeup",
    description: "Cómo reservar tu maquillaje en Nueva Córdoba o a domicilio y condiciones de M Makeup.",
    type: "website",
    locale: "es_AR"
  }
};

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader backHref="/" backLabel="Volver al inicio" />
      <main>
        <BookingSection booking={data.booking} />
      </main>
      <SiteFooter brand={data.brand} contact={data.contact} showWhatsApp={false} />
    </div>
  );
}
