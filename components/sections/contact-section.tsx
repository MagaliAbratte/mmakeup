import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

import logoImage from "@/app/assets/Logo2.png";
import type { LandingPageData } from "@/content/landing";
import { Button } from "@/components/ui/button";

type ContactSectionProps = {
  contact: LandingPageData["contact"];
};

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section id="contacto" className="bg-white px-3 py-8 sm:px-5 sm:py-12">
      <div className="container border-t border-border px-5 py-12 text-center sm:px-10 sm:py-16">
        <Image src={logoImage} alt="Mmakeup" className="mx-auto h-auto w-44 sm:w-52" />
        <h2 className="mx-auto mt-4 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-normal sm:text-6xl">
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
