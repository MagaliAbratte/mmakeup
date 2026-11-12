import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import logoImage from "@/app/assets/Logo2.png";

type PageHeaderProps = {
  backHref: string;
  backLabel: string;
};

export function PageHeader({ backHref, backLabel }: PageHeaderProps) {
  const focusClass = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4";

  return (
    <header className="container flex max-w-5xl items-center justify-between gap-3 py-5 sm:py-7 lg:py-4">
      <Link href={backHref} className={`inline-flex min-h-[44px] min-w-0 items-center text-sm font-medium text-primary ${focusClass}`}>
        <ArrowLeft className="mr-2 size-4 shrink-0" aria-hidden="true" />
        {backLabel}
      </Link>
      <Link href="/" aria-label="M Makeup, inicio" className={`inline-flex min-h-[44px] shrink-0 items-center ${focusClass}`}>
        <Image src={logoImage} alt="M Makeup" priority className="h-auto w-32 sm:w-44" />
      </Link>
    </header>
  );
}
