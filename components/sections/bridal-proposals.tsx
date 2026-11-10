"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { bridalData, bridalGroups, bridalServices, formatBridalPrice, type BridalProposal } from "@/content/bridal";
import { getBridalWhatsAppUrl } from "@/lib/bridal-whatsapp";

function ProposalCard({ proposal, group, onSelect }: {
  proposal: BridalProposal;
  group?: boolean;
  onSelect: (id: string) => void;
}) {
  return (
    <article aria-labelledby={`${proposal.id}-title`} className={`flex min-w-0 flex-col border border-border p-6 sm:p-8 ${proposal.id === "signature" ? "bg-muted/60" : "bg-white"}`}>
      <h3 id={`${proposal.id}-title`} className="text-2xl font-semibold leading-tight sm:text-3xl">{proposal.title}</h3>
      <p className="mt-4 text-sm leading-7 text-muted-foreground">{proposal.description}</p>
      <dl className="my-6 space-y-3 border-y border-border py-5">
        {proposal.studioPrice !== undefined && (
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <dt className="text-sm text-muted-foreground">En estudio</dt>
            <dd className="text-2xl font-semibold tabular-nums">{formatBridalPrice(proposal.studioPrice)}</dd>
          </div>
        )}
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <dt className="text-sm text-muted-foreground">{group ? "Paquete a domicilio" : "A domicilio"}</dt>
          <dd className="text-2xl font-semibold tabular-nums">{formatBridalPrice(proposal.homePrice)}</dd>
        </div>
      </dl>
      <p className="mb-3 text-sm font-semibold">{proposal.includes ?? "El servicio incluye:"}</p>
      <ul className="list-disc space-y-3 pl-4 text-sm leading-6 text-muted-foreground marker:text-primary">
        {proposal.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
      </ul>
      {proposal.note && <p className="mt-5 text-sm leading-6 text-muted-foreground">{proposal.note}</p>}
      <div className="mt-auto pt-8">
        <Button asChild className="h-auto min-h-[44px] w-full whitespace-normal rounded-full px-4 text-center">
          <a href={getBridalWhatsAppUrl(proposal.inquiryId)} target="_blank" rel="noreferrer" onClick={() => onSelect(proposal.inquiryId)} aria-label={`${proposal.cta}: ${proposal.title} (WhatsApp)`}>
            {proposal.cta}<ArrowRight className="ml-2 size-4 shrink-0" aria-hidden="true" />
          </a>
        </Button>
      </div>
    </article>
  );
}

export function BridalProposals() {
  const [selectedInquiry, setSelectedInquiry] = useState<string>();

  return (
    <>
      <section id="propuestas" aria-labelledby="propuestas-title" className="container max-w-5xl py-14 sm:py-20">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary">Un look pensado para vos</p>
        <h2 id="propuestas-title" className="text-balance text-3xl font-semibold leading-tight sm:text-5xl">Servicios para novias</h2>
        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {bridalServices.map((proposal) => <ProposalCard key={proposal.id} proposal={proposal} onSelect={setSelectedInquiry} />)}
        </div>
      </section>

      <section id="grupos" aria-labelledby="grupos-title" className="bg-muted/40 py-14 sm:py-20">
        <div className="container max-w-5xl">
          <h2 id="grupos-title" className="text-balance text-3xl font-semibold leading-tight sm:text-5xl">{bridalData.groups.title}</h2>
          <div className="mt-6 max-w-2xl space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
            {bridalData.groups.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {bridalGroups.map((proposal) => <ProposalCard key={proposal.id} proposal={proposal} group onSelect={setSelectedInquiry} />)}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-muted-foreground">{bridalData.groups.note}</p>
        </div>
      </section>

      <section aria-labelledby="diferenciales-title" className="container max-w-5xl py-14 sm:py-20">
        <h2 id="diferenciales-title" className="max-w-3xl text-balance text-3xl font-semibold leading-tight sm:text-5xl">Detalles que hacen la diferencia</h2>
        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {bridalData.differences.map((item, index) => (
            <article key={item.title} className="border-t border-border pt-5">
              <p aria-hidden="true" className="mb-4 text-xs tracking-widest text-primary">0{index + 1}</p>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="condiciones" aria-labelledby="condiciones-title" className="container max-w-5xl pb-14 sm:pb-20">
        <div className="border-y border-border py-7">
          <h2 id="condiciones-title" className="text-xl font-semibold sm:text-2xl">Reservas y condiciones</h2>
          <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-muted-foreground">
            {bridalData.conditions.map((condition) => <li key={condition}>{condition}</li>)}
          </ul>
        </div>
      </section>

      <section aria-labelledby="bridal-contact-title" className="bg-muted/40 py-14 text-center sm:py-20">
        <div className="container max-w-3xl">
          <h2 id="bridal-contact-title" className="text-balance text-4xl font-semibold leading-tight sm:text-6xl">{bridalData.contact.title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-muted-foreground">{bridalData.contact.text}</p>
          <p aria-live="polite" className="mt-5 text-sm text-muted-foreground">{selectedInquiry ? `Tu consulta: ${selectedInquiry}` : "Conversemos sobre tu día."}</p>
          <Button asChild className="mt-6 h-auto min-h-[44px] max-w-full whitespace-normal rounded-full px-6">
            <a href={getBridalWhatsAppUrl(selectedInquiry)} target="_blank" rel="noreferrer">{bridalData.contact.cta}<ArrowRight className="ml-2 size-4 shrink-0" aria-hidden="true" /></a>
          </Button>
        </div>
      </section>
    </>
  );
}
