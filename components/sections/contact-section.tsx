import Link from "next/link";
import { MessageCircle } from "lucide-react";

import type { LandingPageData } from "@/content/landing";
import { Button } from "@/components/ui/button";

type ContactSectionProps = {
  contact: LandingPageData["contact"];
};

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section id="contacto" className="bg-white px-3 pb-0 pt-6 sm:px-5 sm:pb-2 sm:pt-10">
      <div className="container px-5 pb-6 pt-10 text-center sm:px-10 sm:pb-8 sm:pt-14">
        <h2 className="mx-auto max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-normal sm:text-6xl">
          {contact.title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-muted-foreground">{contact.description}</p>

        <Button
          asChild
          variant="default"
          size="lg"
          className="mt-9 rounded-full bg-primary px-7 text-primary-foreground shadow-none transition-all duration-500 hover:bg-primary/90 hover:px-8"
        >
          <Link href={contact.whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle className="mr-2 size-4" aria-hidden="true" />
            {contact.whatsappLabel}
          </Link>
        </Button>
      </div>
    </section>
  );
}
