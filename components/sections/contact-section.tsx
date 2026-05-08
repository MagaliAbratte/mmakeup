import Link from "next/link";

import type { LandingPageData } from "@/content/landing";
import { Button } from "@/components/ui/button";

type ContactSectionProps = {
  contact: LandingPageData["contact"];
};

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2a9.92 9.92 0 0 0-8.47 15.08L2.4 21.6l4.64-1.1A9.92 9.92 0 1 0 12.04 2Zm0 18.12a8.18 8.18 0 0 1-4.18-1.14l-.3-.18-2.74.65.7-2.66-.2-.31a8.15 8.15 0 1 1 6.72 3.64Zm4.5-6.08c-.24-.12-1.45-.72-1.67-.8-.22-.08-.39-.12-.55.12-.16.24-.63.8-.77.96-.14.16-.28.18-.52.06a6.7 6.7 0 0 1-1.97-1.22 7.43 7.43 0 0 1-1.36-1.7c-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.8-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

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
            <WhatsAppIcon className="mr-2 size-4" />
            {contact.whatsappLabel}
          </Link>
        </Button>
      </div>
    </section>
  );
}
