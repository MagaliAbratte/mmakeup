import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { bridalData, bridalGroups, bridalServices, formatBridalPrice, type BridalProposal } from "@/content/bridal";
import { getBridalWhatsAppUrl } from "@/lib/bridal-whatsapp";

function ProposalCard({ proposal }: {
  proposal: BridalProposal;
}) {
  return (
    <article aria-labelledby={`${proposal.id}-title`} className={`flex min-w-0 flex-col border border-border p-6 sm:p-8 ${proposal.id === "signature" ? "bg-muted/60" : "bg-white"}`}>
      <h3 id={`${proposal.id}-title`} className="text-2xl font-semibold leading-tight sm:text-3xl">{proposal.title}</h3>
      {proposal.description && <p className="mt-4 text-sm leading-7 text-muted-foreground">{proposal.description}</p>}
      <dl className="my-6 space-y-2 border-y border-border py-5 text-sm text-muted-foreground">
        <div>
          <dt className="sr-only">Duración</dt>
          <dd className="font-medium uppercase tracking-[0.14em] text-foreground">{proposal.duration}</dd>
        </div>
        {proposal.studioPrice !== undefined && (
          <div className="flex flex-wrap items-baseline gap-x-2">
            <dt className="font-semibold text-foreground">En estudio</dt>
            <dd className="tabular-nums">{formatBridalPrice(proposal.studioPrice)}</dd>
          </div>
        )}
        <div className="flex flex-wrap items-baseline gap-x-2">
          <dt className="font-semibold text-foreground">A domicilio</dt>
          <dd className="tabular-nums">{formatBridalPrice(proposal.homePrice)}</dd>
        </div>
      </dl>
      <p className="mb-3 text-sm font-semibold">{proposal.includes ?? "El servicio incluye:"}</p>
      <ul className="list-disc space-y-3 pl-4 text-sm leading-6 text-muted-foreground marker:text-accent-red">
        {proposal.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
      </ul>
      {proposal.note && <p className="mt-5 text-sm leading-6 text-muted-foreground">{proposal.note}</p>}
      <div className="mt-auto pt-8">
        <Button asChild className="h-auto min-h-[44px] w-full whitespace-normal rounded-full px-4 text-center">
          <a href={getBridalWhatsAppUrl(proposal.inquiryId)} target="_blank" rel="noreferrer" aria-label={`${proposal.cta}: ${proposal.title} (WhatsApp)`}>
            {proposal.cta}<ArrowRight className="ml-2 size-4 shrink-0" aria-hidden="true" />
          </a>
        </Button>
      </div>
    </article>
  );
}

export function BridalProposals() {
  return (
    <>
      <section id="propuestas" aria-labelledby="propuestas-title" className="container max-w-5xl py-10 sm:py-14">
        <h2 id="propuestas-title" className="text-balance text-4xl font-semibold leading-tight text-bridal-rose sm:text-5xl">Servicios para novias</h2>
        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {bridalServices.map((proposal) => <ProposalCard key={proposal.id} proposal={proposal} />)}
        </div>
      </section>

      <section id="grupos" aria-labelledby="grupos-title" className="bg-muted/40 py-10 sm:py-14">
        <div className="container max-w-5xl">
          <h2 id="grupos-title" className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">{bridalData.groups.title}</h2>
          <div className="mt-6 max-w-2xl space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
            {bridalData.groups.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {bridalGroups.map((proposal) => <ProposalCard key={proposal.id} proposal={proposal} />)}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-muted-foreground">{bridalData.groups.note}</p>
        </div>
      </section>

      <section aria-labelledby="diferenciales-title" className="container max-w-5xl py-10 sm:py-14">
        <h2 id="diferenciales-title" className="max-w-3xl text-balance text-4xl font-semibold leading-tight text-bridal-rose sm:text-5xl">Detalles que hacen la diferencia</h2>
        <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {bridalData.differences.map((item) => (
            <article key={item.title} className="border-t border-border pt-5">
              <h3 className="text-xl font-semibold sm:text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="condiciones" aria-labelledby="condiciones-title" className="container max-w-5xl pb-10 sm:pb-14">
        <div className="border-y border-border py-7">
          <h2 id="condiciones-title" className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">Reservas y condiciones</h2>
          <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-muted-foreground marker:text-accent-red">
            {bridalData.conditions.map((condition) => <li key={condition}>{condition}</li>)}
          </ul>
        </div>
      </section>

      <section aria-labelledby="bridal-contact-title" className="bg-muted/40 py-10 text-center sm:py-14">
        <div className="container max-w-3xl">
          <h2 id="bridal-contact-title" className="text-balance text-4xl font-semibold leading-tight sm:text-6xl">{bridalData.contact.title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-muted-foreground">{bridalData.contact.text}</p>
          <p className="mt-5 text-sm text-muted-foreground">Conversemos sobre tu día.</p>
          <Button asChild className="mt-6 h-auto min-h-[44px] max-w-full whitespace-normal rounded-full px-6">
            <a href={getBridalWhatsAppUrl()} target="_blank" rel="noreferrer">{bridalData.contact.cta}<ArrowRight className="ml-2 size-4 shrink-0" aria-hidden="true" /></a>
          </Button>
        </div>
      </section>
    </>
  );
}
