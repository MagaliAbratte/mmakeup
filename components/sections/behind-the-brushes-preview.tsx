import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { behindTheBrushesContent as content } from "@/content/behind-the-brushes";

export function BehindTheBrushesPreview() {
  return (
    <section aria-labelledby="behind-the-brushes-preview-title" className="bg-white py-3 sm:py-16">
      <div className="container">
        <div className="mx-auto grid max-w-5xl gap-5 rounded-2xl bg-bridal-rose/20 p-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:p-8">
          <div>
            <h2 id="behind-the-brushes-preview-title" className="text-2xl font-semibold">{content.title}</h2>
          </div>
            <Button asChild className="h-auto min-h-[44px] whitespace-normal rounded-full px-6 text-center">
              <Link href="/detras-de-las-brochas">
                {content.previewLabel}
                <ArrowRight className="ml-2 size-4 shrink-0" aria-hidden="true" />
              </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
