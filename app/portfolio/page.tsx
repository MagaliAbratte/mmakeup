import type { Metadata } from "next";
import Link from "next/link";
import { Instagram } from "lucide-react";

import { PageHeader } from "@/components/layout/page-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Button } from "@/components/ui/button";
import { landingPageData } from "@/content/landing";

export const metadata: Metadata = {
  alternates: { canonical: "/portfolio" },
  title: "Portfolio de maquillaje profesional en Córdoba | M Makeup",
  description: "Descubrí trabajos de maquillaje profesional de M Makeup para eventos, novias y producciones en Córdoba.",
  openGraph: {
    title: "Portfolio de maquillaje profesional en Córdoba | M Makeup",
    description: "Conocé los trabajos de maquillaje profesional de M Makeup en Córdoba.",
    type: "website",
    locale: "es_AR"
  }
};

const portfolioImages = [
  { src: "/assets/work1.jpeg", alt: "Trabajo de maquillaje profesional Mmakeup 1" },
  { src: "/assets/work2.jpeg", alt: "Trabajo de maquillaje profesional Mmakeup 2" },
  { src: "/assets/work3.jpeg", alt: "Trabajo de maquillaje profesional Mmakeup 3" },
  { src: "/assets/work4.jpeg", alt: "Trabajo de maquillaje profesional Mmakeup 4" },
  { src: "/assets/work5.jpeg", alt: "Trabajo de maquillaje profesional Mmakeup 5" },
  { src: "/assets/work6.jpeg", alt: "Trabajo de maquillaje profesional Mmakeup 6" },
  { src: "/assets/work7.jpeg", alt: "Trabajo de maquillaje profesional Mmakeup 7" },
  { src: "/assets/work8.jpeg", alt: "Trabajo de maquillaje profesional Mmakeup 8" },
  { src: "/assets/work9.jpeg", alt: "Trabajo de maquillaje profesional Mmakeup 9" },
  { src: "/assets/work10.jpeg", alt: "Trabajo de maquillaje profesional Mmakeup 10" }
];

const instagramUrl = `https://instagram.com/${landingPageData.contact.instagram.replace("@", "")}`;

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader backHref="/" backLabel="Volver al inicio" />
      <main>
        <section className="animate-[fadeIn_700ms_ease-out] px-4 py-8 sm:px-6 sm:py-12 lg:py-8">
          <div className="container">
            <h1 className="mt-4 text-balance text-center text-4xl font-semibold leading-tight tracking-normal sm:text-6xl">
              Portfolio
            </h1>

            <div className="mt-12 grid lg:mt-8 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {portfolioImages.map((image, index) => (
                <div
                  key={image.alt}
                  className={index === 0 ? "overflow-hidden rounded-lg lg:col-span-2 lg:row-span-2" : "overflow-hidden rounded-lg"}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="aspect-[4/5] h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
                  />
                </div>
              ))}
            </div>

            <div className="mx-auto mt-14 max-w-xl lg:mt-9 border-t border-border pt-10 text-center lg:pt-7">
              <p className="text-balance text-xl font-medium leading-relaxed sm:text-2xl">
                Hay mucha más inspiración en Instagram.
              </p>
              <Button asChild className="mt-6 h-auto min-h-[44px] max-w-full whitespace-normal rounded-full px-7 text-center">
                <Link href={instagramUrl} target="_blank" rel="noreferrer">
                  <Instagram className="mr-2 size-4 shrink-0" aria-hidden="true" />
                  Ver más en Instagram
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter brand={landingPageData.brand} contact={landingPageData.contact} />
    </div>
  );
}
