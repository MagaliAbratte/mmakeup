import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import logoImage from "@/app/assets/Logo2.png";
import { SiteFooter } from "@/components/layout/site-footer";
import { Button } from "@/components/ui/button";
import { landingPageData } from "@/content/landing";

const portfolioImages = [
  { src: "/assets/work15.jpeg", alt: "Trabajo de maquillaje profesional Mmakeup 15" },
  { src: "/assets/work16.jpeg", alt: "Trabajo de maquillaje profesional Mmakeup 16" },
  { src: "/assets/work1.jpeg", alt: "Trabajo de maquillaje profesional Mmakeup 1" },
  { src: "/assets/work3.jpeg", alt: "Trabajo de maquillaje profesional Mmakeup 3" },
  { src: "/assets/work4.jpeg", alt: "Trabajo de maquillaje profesional Mmakeup 4" },
  { src: "/assets/work5.jpeg", alt: "Trabajo de maquillaje profesional Mmakeup 5" },
  { src: "/assets/work17.jpeg", alt: "Trabajo de maquillaje profesional Mmakeup 17" },
  { src: "/assets/work18.jpeg", alt: "Trabajo de maquillaje profesional Mmakeup 18" },
  { src: "/assets/work6.jpeg", alt: "Trabajo de maquillaje profesional Mmakeup 6" },
  { src: "/assets/work8.jpeg", alt: "Trabajo de maquillaje profesional Mmakeup 8" },
  { src: "/assets/work9.jpeg", alt: "Trabajo de maquillaje profesional Mmakeup 9" },
  { src: "/assets/work10.jpeg", alt: "Trabajo de maquillaje profesional Mmakeup 10" },
  { src: "/assets/work12.jpeg", alt: "Trabajo de maquillaje profesional Mmakeup 12" },
  { src: "/assets/work14.jpeg", alt: "Trabajo de maquillaje profesional Mmakeup 14" }
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="animate-[fadeIn_700ms_ease-out] px-4 py-8 sm:px-6 sm:py-12">
        <div className="container">
          <div className="flex flex-col items-center gap-7 text-center">
            <Link href="/" aria-label="Volver a Mmakeup" className="block">
              <Image src={logoImage} alt="Mmakeup" priority className="h-auto w-56 sm:w-72" />
            </Link>

            <div>
              <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-normal sm:text-6xl">
                Portfolio
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                Una selección de trabajos de maquillaje social, editorial y producciones.
              </p>
            </div>

            <Button
              asChild
              variant="default"
              size="lg"
              className="rounded-full bg-primary px-7 text-primary-foreground shadow-none transition-all duration-500 hover:bg-primary/90 hover:px-8"
            >
              <Link href="/">
                <ArrowLeft className="mr-2 size-4" aria-hidden="true" />
                Volver al inicio
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </section>
      <SiteFooter brand={landingPageData.brand} contact={landingPageData.contact} />
    </main>
  );
}
