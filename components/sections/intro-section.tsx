import Image from "next/image";

import editorialImage from "@/app/assets/grafica2.jpeg";

export function IntroSection() {
  return (
    <section className="overflow-hidden bg-white pb-10 pt-2 sm:pb-14">
      <div className="grid items-center gap-3 pl-4 sm:gap-5 md:grid-cols-[minmax(0,1fr)_minmax(360px,46vw)] md:gap-12 md:pl-[max(2rem,calc((100vw-1200px)/2))]">
        <div className="mx-auto max-w-2xl pr-4 text-center md:mx-0 md:pr-0">
          <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-normal text-foreground sm:text-6xl">
            Maquillaje que resalta tu esencia
          </h2>
          <p className="editorial-italic mx-auto mt-7 max-w-xl px-3 text-2xl font-medium leading-snug text-muted-foreground sm:text-3xl">
            Te ayudo a potenciar tu belleza a través de un maquillaje pensado para vos, tu estilo y cada ocasión
          </p>
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
