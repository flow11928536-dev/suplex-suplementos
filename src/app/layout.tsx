import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Suplex Suplementos - Reviews, Comparativas e Melhores Preços 2026",
    template: "%s | Suplex Suplementos",
  },
  description: "Site de referência em suplementos no Brasil. Reviews honestas, comparativas de preços, guias completos de whey protein, creatina, pré-treino e muito mais. Encontre o melhor suplemento pelo melhor preço!",
  keywords: [
    "suplementos", "whey protein", "creatina", "pré-treino", "BCAA", "hipercalórico",
    "colágeno", "vitaminas", "termogênico", "suplementos alimentares", "musculação",
    "ganho de massa", "emagrecimento", "fitness", "melhor whey protein", "creatina monohidratada",
    "suplementos baratos", "comparativa suplementos", "review suplementos"
  ],
  authors: [{ name: "Suplex Suplementos" }],
  creator: "Suplex Suplementos",
  publisher: "Suplex Suplementos",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: "https://suplexsuplementos.com.br/",
  },
  openGraph: {
    title: "Suplex Suplementos - Reviews e Melhores Preços 2026",
    description: "Site de referência em suplementos no Brasil. Reviews honestas, comparativas e guias completos.",
    url: "https://suplexsuplementos.com.br/",
    siteName: "Suplex Suplementos",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suplex Suplementos - Reviews e Melhores Preços",
    description: "Reviews honestas, comparativas e guias completos de suplementos.",
  },
  verification: {
    google: "google-site-verification-code",
  },
  category: "health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* JSON-LD: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Suplex Suplementos',
              url: 'https://suplexsuplementos.com.br',
              logo: 'https://suplexsuplementos.com.br/logo.png',
              description: 'Site de referência em suplementos no Brasil.',
              sameAs: [
                'https://instagram.com/suplexsuplementos',
                'https://facebook.com/suplexsuplementos',
                'https://youtube.com/suplexsuplementos',
              ],
            }),
          }}
        />
        {/* JSON-LD: WebSite (SearchAction) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Suplex Suplementos',
              url: 'https://suplexsuplementos.com.br',
              inLanguage: 'pt-BR',
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} antialiased bg-white text-gray-900`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}