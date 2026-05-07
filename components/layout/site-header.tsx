import Link from "next/link";
import Image from "next/image";

import logoImage from "@/app/assets/Logo.png";
import type { LandingPageData } from "@/content/landing";

type SiteHeaderProps = {
  brand: LandingPageData["brand"];
};

export function SiteHeader({ brand }: SiteHeaderProps) {
  return (
    <header className="bg-background">
      <div className="container flex justify-center py-8">
        <Link href="/" className="block" aria-label={brand.name}>
          <Image src={logoImage} alt={brand.name} width={220} priority className="h-auto w-44 sm:w-56" />
        </Link>
      </div>
    </header>
  );
}
