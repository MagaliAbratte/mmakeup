import Image from "next/image";

import brushGraphic from "@/app/assets/grafica4.jpeg";

export function FinalGraphicSection() {
  return (
    <section className="relative overflow-hidden bg-white pb-4 pt-0 sm:hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-12 bg-gradient-to-b from-white to-white/0" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-white via-white/85 to-white/0" />
      <div className="relative mx-auto h-[285px] w-[82vw] max-w-[340px]">
        <Image
          src={brushGraphic}
          alt="Pinceles de maquillaje con producto"
          sizes="82vw"
          className="h-full w-full scale-x-[-1] object-contain object-center"
        />
      </div>
    </section>
  );
}
