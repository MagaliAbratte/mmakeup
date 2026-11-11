import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { BookingSection } from "@/components/sections/booking-section";
import { landingPageData as data } from "@/content/landing";

export const metadata: Metadata = {
  title: "Reservas y condiciones | M Makeup",
  description: "Consultá la información para reservar tu turno de maquillaje en M Makeup.",
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
