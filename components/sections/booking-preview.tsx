import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function BookingPreview({ title }: { title: string }) {
  return (
    <section id="reservas" aria-labelledby="booking-preview-title" className="bg-white py-3 sm:py-16">
      <div className="container">
        <div className="mx-auto grid max-w-5xl gap-5 rounded-2xl bg-bridal-rose/20 p-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:p-8">
          <h2 id="booking-preview-title" className="text-2xl font-semibold">{title}</h2>
            <Button asChild className="h-auto min-h-[44px] whitespace-normal rounded-full border border-border bg-white px-6 text-center text-foreground hover:bg-muted">
              <Link href="/reservas">
                Ver reservas y condiciones
                <ArrowRight className="ml-2 size-4 shrink-0" aria-hidden="true" />
              </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
