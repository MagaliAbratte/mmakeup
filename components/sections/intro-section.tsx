import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

import editorialImage from "@/app/assets/grafica2.jpeg";
import { Button } from "@/components/ui/button";

export function IntroSection() {
  return (
    <section className="overflow-hidden bg-white pb-4 pt-2 sm:pb-14">
      <div className="grid items-center gap-3 pl-4 sm:gap-5 md:grid-cols-[minmax(0,1fr)_minmax(360px,46vw)] md:gap-12 md:pl-[max(2rem,calc((100vw-1200px)/2))]">
        <div className="mx-auto max-w-2xl pr-4 text-center md:mx-0 md:pr-0">
          <p className="editorial-italic mx-auto max-w-xl px-3 text-2xl font-medium leading-snug text-muted-foreground sm:text-3xl">
            Te ayudo a potenciar tu belleza a través de un maquillaje pensado para vos, tu estilo y cada ocasión
          </p>
          <Button asChild className="mt-6 h-auto min-h-[44px] max-w-full whitespace-normal rounded-full px-6">
            <a href="#servicios">Conocé los servicios<ArrowDown className="ml-2 size-4 shrink-0" aria-hidden="true" /></a>
          </Button>
          <nav aria-label="Accesos rápidos" className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-muted-foreground">
            <Link href="/reservas" className="inline-flex min-h-[44px] items-center hover:text-primary">Reservas y condiciones</Link>
            <Link href="/detras-de-las-brochas" className="inline-flex min-h-[44px] items-center hover:text-primary">Sobre mí</Link>
          </nav>
        </div>

        <div className="relative flex justify-end overflow-visible">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-14 bg-gradient-to-b from-white to-white/0" />
          <Image
            src={editorialImage}
            alt="Texturas y tonos de maquillaje Mmakeup"
            sizes="(min-width: 768px) 46vw, 74vw"
            className="h-auto w-full max-w-[74vw] object-contain sm:max-w-[680px] md:translate-x-10"
          />
        </div>
      </div>
    </section>
  );
}
