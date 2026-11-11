import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { behindTheBrushesContent as content } from "@/content/behind-the-brushes";

export function BehindTheBrushesPreview() {
  return (
    <section aria-labelledby="behind-the-brushes-preview-title" className="bg-white pb-3 sm:pb-8">
      <div className="container">
        <Link href="/detras-de-las-brochas" className="group mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 border-b border-border py-6 transition-all duration-500 hover:bg-muted/35 sm:px-5 sm:hover:px-7">
          <h2 id="behind-the-brushes-preview-title" className="text-2xl font-semibold">{content.title}</h2>
          <span className="inline-flex min-h-[44px] items-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors group-hover:bg-primary/90">{content.previewLabel}<ArrowRight className="ml-2 size-4 shrink-0" aria-hidden="true" /></span>
        </Link>
      </div>
    </section>
  );
}
