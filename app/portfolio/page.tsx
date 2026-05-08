import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import logoImage from "@/app/assets/Logo2.png";
import port1 from "@/app/assets/port1.jpeg";
import port2 from "@/app/assets/port2.jpeg";
import port3 from "@/app/assets/port3.jpeg";
import port4 from "@/app/assets/port4.jpeg";
import port5 from "@/app/assets/port5.jpeg";
import { SiteFooter } from "@/components/layout/site-footer";
import { Button } from "@/components/ui/button";
import { landingPageData } from "@/content/landing";

const portfolioImages = [
  { src: port1, alt: "Trabajo de maquillaje profesional Mmakeup 1" },
  { src: port2, alt: "Trabajo de maquillaje profesional Mmakeup 2" },
  { src: port3, alt: "Trabajo de maquillaje profesional Mmakeup 3" },
  { src: port4, alt: "Trabajo de maquillaje profesional Mmakeup 4" },
  { src: port5, alt: "Trabajo de maquillaje profesional Mmakeup 5" }
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
                <Image
                  src={image.src}
                  alt={image.alt}
                  sizes={index === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 50vw"}
                  className="aspect-[4/5] h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
                  priority={index === 0}
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
