import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const ui = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ui",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Morandin Pedras & Marmoraria | Porto Alegre",
  description:
    "Marmoraria em Porto Alegre para projetos sob medida em mármore, granito, quartzo e superfícies especiais.",
  openGraph: {
    title: "Morandin Pedras & Marmoraria",
    description:
      "Da pedra ao ambiente. Projetos sob medida em Porto Alegre.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${display.variable} ${ui.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
