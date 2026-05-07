import type { LandingPageData } from "@/content/landing";

type TestimonialsSectionProps = {
  testimonials: LandingPageData["testimonials"];
};

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="py-16">
      <div className="container max-w-5xl">
        <h2 className="text-center text-sm font-semibold uppercase tracking-[0.24em] text-primary">Testimonios</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="border-t border-border pt-5">
              <blockquote className="text-sm leading-7 text-foreground">&quot;{testimonial.text}&quot;</blockquote>
              <figcaption className="mt-5">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.service}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
