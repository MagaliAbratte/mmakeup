import Image from "next/image";

import editorialImage from "@/app/assets/grafica2.jpeg";

export function IntroSection() {
  return (
    <section className="overflow-hidden bg-white pb-10 pt-2 sm:pb-14">
      <div className="grid items-center gap-8 pl-4 md:grid-cols-[minmax(0,1fr)_minmax(360px,46vw)] md:gap-12 md:pl-[max(2rem,calc((100vw-1200px)/2))]">
        <div className="mx-auto max-w-2xl text-center md:mx-0">
          <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-normal text-foreground sm:text-6xl">
            Maquillaje Profesional
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
            Maquillaje Social | Maquillaje para Novias | Maquillaje Editorial | Automaquillaje
          </p>
        </div>

        <div className="relative flex justify-end overflow-visible">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-14 bg-gradient-to-b from-white to-white/0" />
          <Image
            src={editorialImage}
            alt="Texturas y tonos de maquillaje Mmakeup"
            sizes="(min-width: 768px) 46vw, 100vw"
            className="h-auto w-full max-w-[680px] translate-x-6 object-contain md:translate-x-10"
          />
        </div>
      </div>
    </section>
  );
}
