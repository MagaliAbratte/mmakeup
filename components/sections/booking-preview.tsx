import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BookingPreview({ title }: { title: string }) {
  return (
    <section id="reservas" aria-labelledby="booking-preview-title" className="bg-white pt-3 sm:pt-8">
      <div className="container">
        <Link href="/reservas" className="group mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 border-y border-border py-6 transition-all duration-500 hover:bg-muted/35 sm:px-5 sm:hover:px-7">
          <h2 id="booking-preview-title" className="text-2xl font-semibold">{title}</h2>
          <span className="inline-flex min-h-[44px] items-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors group-hover:bg-primary/90">Ver reservas y condiciones<ArrowRight className="ml-2 size-4 shrink-0" aria-hidden="true" /></span>
        </Link>
      </div>
    </section>
  );
}
