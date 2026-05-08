import Image from "next/image";
import Link from "next/link";

import logoImage from "@/app/assets/Logo2.png";
import type { LandingPageData } from "@/content/landing";

type SiteFooterProps = {
  brand: LandingPageData["brand"];
  contact: LandingPageData["contact"];
};

export function SiteFooter({ brand, contact }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8">
      <div className="container flex flex-col gap-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <Image src={logoImage} alt={brand.name} className="h-auto w-36 sm:w-52" />
            <p className="font-semibold text-foreground sm:hidden">{brand.tagline}</p>
          </div>
          <p className="mt-2 text-center sm:hidden">{brand.location} · © {year}</p>
          <p className="mt-1 hidden sm:block">
            {brand.tagline} · {brand.location}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
          <Link href={contact.whatsappUrl} target="_blank" rel="noreferrer" className="transition hover:text-primary">
            WhatsApp
          </Link>
          <Link href={`https://instagram.com/${contact.instagram.replace("@", "")}`} target="_blank" rel="noreferrer" className="transition hover:text-primary">
            Instagram
          </Link>
          <span className="hidden sm:inline">© {year}</span>
        </div>
      </div>
    </footer>
  );
}
