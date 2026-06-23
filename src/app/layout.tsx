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
    canonical: "https://suplex-suplementos.pages.dev/",
  },
  openGraph: {
    title: "Suplex Suplementos - Reviews e Melhores Preços 2026",
    description: "Site de referência em suplementos no Brasil. Reviews honestas, comparativas e guias completos.",
    url: "https://suplex-suplementos.pages.dev/",
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
        {/* Google Analytics — script nativo async conforme recomendação do Google */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZGBD01Y9KP"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZGBD01Y9KP');
            `,
          }}
        />

        {/* JSON-LD Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Suplex Suplementos",
              url: "https://suplex-suplementos.pages.dev",
              logo: "https://suplex-suplementos.pages.dev/logo.png",
              description: "Site de referência em suplementos no Brasil.",
              sameAs: [
                "https://instagram.com/suplexsuplementos",
                "https://facebook.com/suplexsuplementos",
                "https://youtube.com/suplexsuplementos",
              ],
            }),
          }}
        />

        {/* JSON-LD Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Suplex Suplementos",
              url: "https://suplex-suplementos.pages.dev",
              inLanguage: "pt-BR",
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