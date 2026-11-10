import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowDown } from "lucide-react";

import logoImage from "@/app/assets/Logo2.png";
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
      <header className="container flex max-w-5xl flex-wrap items-center justify-between gap-3 py-5 sm:py-7">
        <Link href="/" aria-label="M Makeup, inicio" className="inline-flex min-h-[44px] items-center">
          <Image src={logoImage} alt="M Makeup" priority className="h-auto w-32 sm:w-44" />
        </Link>
        <Link href="/#servicios" className="inline-flex min-h-[44px] items-center text-sm font-medium text-primary">
          <ArrowLeft className="mr-2 size-4" aria-hidden="true" />Volver a servicios
        </Link>
      </header>

      <main id="bridal-content">
        <section aria-labelledby="bridal-title" className="container max-w-5xl pb-12 pt-8 text-center sm:pb-16 sm:pt-14">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">M Makeup · Novias</p>
          <h1 id="bridal-title" className="mt-5 text-balance text-4xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">{data.title}</h1>
          <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg">{data.subtitle}</p>
          <Button asChild className="mt-8 h-auto min-h-[44px] max-w-full whitespace-normal rounded-full px-6">
            <a href="#propuestas">Conocé las propuestas<ArrowDown className="ml-2 size-4 shrink-0" aria-hidden="true" /></a>
          </Button>
          <nav aria-label="Bridal Experience" className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-muted-foreground">
            <a href="#experiencia" className="inline-flex min-h-[44px] items-center hover:text-primary">La experiencia</a>
            <a href="#grupos" className="inline-flex min-h-[44px] items-center hover:text-primary">Novia + invitadas</a>
            <a href="#condiciones" className="inline-flex min-h-[44px] items-center hover:text-primary">Reservas</a>
          </nav>
        </section>

        <section aria-labelledby="esencia-title" className="container grid max-w-5xl items-center gap-8 pb-14 md:grid-cols-2 md:gap-12 sm:pb-20">
          <div className="relative aspect-[4/5] overflow-hidden bg-muted">
            <Image src={data.image.src} alt={data.image.alt} placeholder="blur" priority sizes="(min-width: 1024px) 480px, (min-width: 768px) 50vw, 100vw" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-primary">Belleza que te representa</p>
            <h2 id="esencia-title" className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">{data.intro.title}</h2>
            <div className="mt-7 space-y-5 text-sm leading-8 text-muted-foreground sm:text-base">
              {data.intro.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </section>

        <section id="experiencia" aria-labelledby="experiencia-title" className="bg-muted/40 py-14 sm:py-20">
          <div className="container max-w-5xl">
            <h2 id="experiencia-title" className="text-balance text-3xl font-semibold leading-tight sm:text-5xl">Nuestra experiencia</h2>
            <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-14">
              {data.experience.map((moment, index) => (
                <article key={moment.title} className="border-t border-border pt-6">
                  <p aria-hidden="true" className="mb-4 text-xs tracking-widest text-primary">0{index + 1}</p>
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
