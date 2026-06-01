import Image from "next/image";

import logoImage from "@/app/assets/Logo2.png";
import type { LandingPageData } from "@/content/landing";

type HeroSectionProps = {
  brand: LandingPageData["brand"];
};

export function HeroSection({ brand }: HeroSectionProps) {
  return (
    <section className="pb-8 sm:pb-10">
      <div className="relative min-h-[68svh] w-full overflow-hidden bg-white sm:min-h-[76vh]">
        <img
          src="/assets/portada1.jpeg"
          alt="Retrato beauty editorial para Mmakeup"
          className="absolute inset-0 h-full w-full object-cover object-[center_58%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0.03)_42%,rgba(0,0,0,0.26)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 -bottom-px h-36 bg-gradient-to-b from-white/0 via-white/85 to-white sm:h-44" />

        <div className="absolute inset-x-0 bottom-2 z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center sm:bottom-4">
          <Image
            src={logoImage}
            alt={brand.name}
            priority
            className="h-auto w-full max-w-[760px] drop-shadow-[0_18px_34px_rgba(0,0,0,0.2)]"
          />
        </div>
      </div>
    </section>
  );
}
