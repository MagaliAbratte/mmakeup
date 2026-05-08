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
              className="group grid gap-5 py-6 transition-all duration-500 ease-out hover:bg-muted/35 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:px-5 sm:hover:px-7"
            >
              <div className="transition-transform duration-500 ease-out group-hover:translate-x-1">
                <h3 className="text-2xl font-semibold leading-tight text-foreground sm:text-3xl">{service.title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground transition-colors duration-500 group-hover:text-foreground/72">
                  {service.description}
                </p>
              </div>

              <div className="text-sm text-muted-foreground transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:text-foreground sm:text-right">
                {service.studioPrice || service.homePrice ? (
                  <>
                    <div className="grid grid-cols-[auto_1fr] items-center gap-x-5 gap-y-2 sm:flex sm:flex-wrap sm:justify-end">
                      <p className="font-medium uppercase tracking-[0.14em] text-foreground">{service.duration}</p>
                      <div className="space-y-1 text-right sm:flex sm:gap-x-5 sm:space-y-0">
                        {service.studioPrice ? (
                          <p>
                            <span className="font-semibold text-foreground">En estudio</span> {service.studioPrice}
                          </p>
                        ) : null}
                        {service.homePrice ? (
                          <p>
                            <span className="font-semibold text-foreground">A domicilio</span> {service.homePrice}
                          </p>
                        ) : null}
                      </div>
                    </div>
                    {service.note ? <p className="mt-2 font-semibold text-primary">{service.note}</p> : null}
                  </>
                ) : (
                  <p className="font-semibold text-primary">{service.duration}</p>
                )}
              </div>

              {service.details ? (
                <details className="group/details max-w-2xl text-sm leading-6 text-muted-foreground sm:col-span-2">
                  <summary className="cursor-pointer list-none font-semibold text-primary transition-colors hover:text-foreground">
                    <span className="group-open/details:hidden">Ver más info</span>
                    <span className="hidden group-open/details:inline">Ocultar info</span>
                  </summary>
                  <div className="mt-3 space-y-3 border-l border-border pl-4">
                    {service.details.intro ? <p>{service.details.intro}</p> : null}
                    {service.details.items?.length ? (
                      <div>
                        <p className="mb-1 font-semibold text-foreground">{service.details.itemsLabel ?? "El servicio incluye:"}</p>
                        <ul className="list-disc space-y-1 pl-4">
                          {service.details.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {service.details.requirementTitle || service.details.requirement ? (
                      <div>
                        {service.details.requirementTitle ? (
                          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                            {service.details.requirementTitle}
                          </p>
                        ) : null}
                        {service.details.requirement ? <p>{service.details.requirement}</p> : null}
                      </div>
                    ) : null}
                    {service.details.footer?.length ? <p>{service.details.footer.join(" ")}</p> : null}
                    {service.details.modalityTitle || service.details.modality || service.details.modalityItems?.length ? (
                      <div>
                        {service.details.modalityTitle ? (
                          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                            {service.details.modalityTitle}
                          </p>
                        ) : null}
                        {service.details.modality ? <p>{service.details.modality}</p> : null}
                        {service.details.modalityItems?.length ? (
                          <ul className="list-disc space-y-1 pl-4">
                            {service.details.modalityItems.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    ) : null}
                    {service.details.ideal ? <p className="font-semibold text-foreground">{service.details.ideal}</p> : null}
                  </div>
                </details>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
