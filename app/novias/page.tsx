import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

import { PageHeader } from "@/components/layout/page-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { BridalProposals } from "@/components/sections/bridal-proposals";
import { Button } from "@/components/ui/button";
import { bridalData as data } from "@/content/bridal";
import { landingPageData } from "@/content/landing";

const title = "Maquillaje para Novias en Córdoba | M Makeup";
const description = "Maquillaje profesional para novias en Córdoba. Experiencias personalizadas, prueba previa y paquetes para novias e invitadas.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, locale: "es_AR", type: "website" }
};

export default function BridalPage() {
  return (
    <div className="bridal-page min-h-screen bg-background">
      <a href="#bridal-content" className="sr-only focus:not-sr-only focus:absolute focus:z-20 focus:bg-white focus:p-4">Saltar al contenido</a>
      <PageHeader backHref="/" backLabel="Volver a home" />

      <main id="bridal-content">
        <div className="relative h-[62svh] min-h-[380px] overflow-hidden bg-muted sm:h-[72vh]">
          <Image
            src={data.image.src}
            alt={data.image.alt}
            fill
            priority
            placeholder="blur"
            sizes="100vw"
            className="object-cover object-[center_42%]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-white/0 via-white/75 to-white sm:h-56" />
        </div>

        <section aria-labelledby="bridal-title" className="container relative -mt-10 max-w-5xl pb-10 text-center sm:-mt-12 sm:pb-14">
          <h1 id="bridal-title" className="text-balance text-5xl font-semibold leading-[1.05] sm:text-7xl lg:text-8xl">{data.title}</h1>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">{data.subtitle}</p>
          <Button asChild className="mt-6 h-auto min-h-[44px] max-w-full whitespace-normal rounded-full px-6">
            <a href="#propuestas">Conocé las propuestas<ArrowDown className="ml-2 size-4 shrink-0" aria-hidden="true" /></a>
          </Button>
          <nav aria-label="Bridal Experience" className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-muted-foreground">
            <a href="#experiencia" className="inline-flex min-h-[44px] items-center hover:text-primary">La experiencia</a>
            <a href="#grupos" className="inline-flex min-h-[44px] items-center hover:text-primary">Novia + invitadas</a>
            <a href="#condiciones" className="inline-flex min-h-[44px] items-center hover:text-primary">Reservas</a>
          </nav>
        </section>

        <section aria-labelledby="esencia-title" className="container max-w-3xl pb-10 sm:pb-14">
          <div>
            <h2 id="esencia-title" className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">{data.intro.title}</h2>
            <div className="mt-5 space-y-4 text-sm leading-8 text-muted-foreground sm:text-base">
              {data.intro.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </section>

        <section id="experiencia" aria-labelledby="experiencia-title" className="bg-muted/40 py-10 sm:py-14">
          <div className="container max-w-5xl">
            <h2 id="experiencia-title" className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">Nuestra experiencia</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-12">
              {data.experience.map((moment) => (
                <article key={moment.title} className="border-t border-accent-red/60 pt-6">
                  <h3 className="text-2xl font-semibold">{moment.title}</h3>
                  <div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground">
                    {moment.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <BridalProposals />
      </main>
      <SiteFooter brand={landingPageData.brand} contact={landingPageData.contact} />
    </div>
  );
}
