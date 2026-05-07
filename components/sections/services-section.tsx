import type { LandingPageData } from "@/content/landing";

type ServicesSectionProps = {
  services: LandingPageData["services"];
};

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="servicios" className="bg-white py-12 sm:py-16">
      <div className="container">
        <div className="mb-9 max-w-4xl text-center sm:mx-auto sm:mb-11">
          <h2 className="text-balance text-5xl font-semibold leading-[1.02] tracking-normal text-foreground sm:text-7xl">
            Servicios
          </h2>
        </div>

        <div className="mx-auto max-w-5xl divide-y divide-border border-y border-border">
          {services.map((service) => (
            <article
              key={service.title}
              className="group grid gap-5 py-6 transition-all duration-500 ease-out hover:bg-muted/35 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:px-5 sm:hover:px-7"
            >
              <div className="transition-transform duration-500 ease-out group-hover:translate-x-1">
                <h3 className="text-2xl font-semibold leading-tight text-foreground sm:text-3xl">{service.title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground transition-colors duration-500 group-hover:text-foreground/72">
                  {service.description}
                </p>
              </div>

              <div className="text-sm text-muted-foreground transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:text-foreground sm:text-right">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:justify-end">
                  <p className="font-semibold uppercase tracking-[0.14em] text-foreground">{service.duration}</p>
                  {service.studioPrice ? <p>Estudio {service.studioPrice}</p> : null}
                  {service.homePrice ? <p>Domicilio {service.homePrice}</p> : null}
                </div>
                {service.note ? <p className="mt-2 font-semibold text-primary">{service.note}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
