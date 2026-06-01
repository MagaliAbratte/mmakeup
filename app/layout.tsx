import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "M Makeup | Maquillaje Profesional en Córdoba",
  description: "Beauty studio de maquillaje profesional en Nueva Córdoba."
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
