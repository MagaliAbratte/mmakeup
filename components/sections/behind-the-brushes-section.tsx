import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import portrait from "@/public/assets/magui.jpeg";
import mascaraGraphic from "@/app/assets/grafica1.jpeg";
import { behindTheBrushesContent as content } from "@/content/behind-the-brushes";

export function BehindTheBrushesSection() {
  return (
    <section
      id="detras-de-las-brochas"
      aria-labelledby="detras-de-las-brochas-title"
      className="bg-white pb-12 sm:pb-16"
    >
          <div className="relative h-[62svh] min-h-[380px] w-full overflow-hidden bg-muted sm:h-[72vh]">
            <Image
              src={portrait}
              alt={content.imageAlt}
              priority
              fill
              placeholder="blur"
              sizes="100vw"
              className="object-cover object-[center_35%]"
            />
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-white/0 via-white/75 to-white sm:h-56" />
          </div>

      <div className="container relative -mt-10 max-w-3xl sm:-mt-12">
        <div className="space-y-9 sm:space-y-12">
          <div className="min-w-0">
            <h1
              id="detras-de-las-brochas-title"
              className="text-balance text-center text-4xl font-semibold leading-[1.02] tracking-normal text-foreground sm:text-6xl"
            >
              {content.title}
            </h1>
            <div className="mt-7 space-y-5 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              {content.introduction.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="relative left-1/2 my-6 flex w-screen -translate-x-1/2 justify-end sm:my-8">
              <Image
                src={mascaraGraphic}
                alt=""
                sizes="(min-width: 640px) 380px, 72vw"
                className="h-auto w-[72vw] max-w-[380px]"
              />
            </div>

            <h2 className="editorial-italic mb-5 mt-9 text-2xl font-medium leading-snug text-foreground sm:text-3xl">
              {content.workTitle}
            </h2>
            <div className="space-y-5 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              {content.workParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

          </div>

          <div className="w-full border-t border-border pt-8 text-center">
            <Button asChild className="h-auto min-h-[44px] max-w-full whitespace-normal rounded-full px-7 text-center">
              <Link href="/portfolio">
                Mirá mi trabajo
                <ArrowRight className="ml-2 size-4 shrink-0" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
