import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mmakeup.vercel.app"),
  title: "Maquillaje profesional en Córdoba | M Makeup",
  description: "Maquillaje profesional en Nueva Córdoba y a domicilio: novias, eventos, clases de automaquillaje y producciones. Conocé los servicios de Magui.",
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "M Makeup",
    title: "Maquillaje profesional en Córdoba | M Makeup",
    description: "Maquillaje para novias, eventos y clases de automaquillaje en Córdoba.",
    images: [{ url: "/assets/portada1.jpeg", alt: "Maquillaje profesional de M Makeup" }]
  },
  twitter: { card: "summary_large_image" }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
