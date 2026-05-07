import Link from "next/link";
import Image from "next/image";

import logoImage from "@/app/assets/Logo2.png";
import type { LandingPageData } from "@/content/landing";

type SiteFooterProps = {
  brand: LandingPageData["brand"];
  contact: LandingPageData["contact"];
};

export function SiteFooter({ brand, contact }: SiteFooterProps) {
  return (
    <footer className="border-t border-border py-8">
      <div className="container flex flex-col gap-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Image src={logoImage} alt={brand.name} className="h-auto w-44 sm:w-52" />
          <p className="mt-1">{brand.tagline} · {brand.location}</p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link href={contact.whatsappUrl} target="_blank" rel="noreferrer" className="transition hover:text-primary">
            WhatsApp
          </Link>
          <Link href={`https://instagram.com/${contact.instagram.replace("@", "")}`} target="_blank" rel="noreferrer" className="transition hover:text-primary">
            Instagram
          </Link>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
