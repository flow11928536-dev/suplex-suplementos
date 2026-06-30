import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/store/header";
import { HeroCarousel } from "@/components/store/hero-carousel";
import { Pitchbar } from "@/components/store/pitchbar";
import { CategoryGrid } from "@/components/store/category-grid";
import { ProductCarousel } from "@/components/store/product-carousel";
import { DoubleBanners } from "@/components/store/double-banners";
import { BrandSpotlight } from "@/components/store/brand-spotlight";
import { Testimonials } from "@/components/store/testimonials";
import { Newsletter } from "@/components/store/newsletter";
import { Footer } from "@/components/store/footer";
import { BlogCard } from "@/components/store/blog-card";
import { products } from "@/lib/store-data";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Suplex Suplementos - Reviews, Comparativas e Melhores Preços 2026",
  description:
    "Reviews honestas, comparativas de preços e guias completos de whey protein, creatina, pré-treino e mais. Encontre o melhor suplemento pelo melhor preço no Brasil!",
  alternates: {
    canonical: "https://suplex-suplementos.pages.dev/",
  },
  openGraph: {
    title: "Suplex Suplementos - Reviews e Melhores Preços 2026",
    description:
      "Reviews honestas, comparativas e guias completos de suplementos.",
    url: "https://suplex-suplementos.pages.dev/",
    siteName: "Suplex Suplementos",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://suplex-suplementos.pages.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Suplex Suplementos - Reviews e Melhores Preços de Suplementos no Brasil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suplex Suplementos - Reviews e Melhores Preços",
    description:
      "Reviews honestas, comparativas e guias completos de suplementos.",
    images: ["https://suplex-suplementos.pages.dev/og-image.jpg"],
  },
};

export default function Home() {
  const MAX_PRODUCTS = 12;

  const bestSellers = products
    .filter((p) => p.badge === "MAIS VENDIDO")
    .slice(0, MAX_PRODUCTS);
  const offers = products
    .filter((p) => p.badge === "OFERTA")
    .slice(0, MAX_PRODUCTS);
  const news = products
    .filter((p) => p.badge === "NOVO")
    .slice(0, MAX_PRODUCTS);
  const wheyProducts = products
    .filter((p) => p.category === "whey-protein")
    .slice(0, MAX_PRODUCTS);
  const recentPosts = blogPosts.slice(0, 3);

  const jsonLdCollection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Suplementos - Reviews, Comparativas e Preços",
    description:
      "Reviews honestas, comparativas de preços e guias completos de suplementos.",
    url: "https://suplex-suplementos.pages.dev/",
    inLanguage: "pt-BR",
    about: {
      "@type": "Thing",
      name: "Suplementos Alimentares",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: products.slice(0, 6).map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: p.name,
          image: p.image || "",
          description: p.shortDescription || "",
          // 🔥 CORREÇÃO: removi o campo "price" pois não existe no tipo Product
          offers: {
            "@type": "Offer",
            priceCurrency: "BRL",
            availability: "https://schema.org/InStock",
          },
        },
      })),
    },
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Suplex Suplementos",
    url: "https://suplex-suplementos.pages.dev",
    inLanguage: "pt-BR",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://suplex-suplementos.pages.dev/buscar?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdCollection),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdWebSite),
        }}
      />

      <Header />

      <main>
        <h1 className="sr-only">
          Suplex Suplementos - Reviews, Comparativas e Melhores Preços de Suplementos
        </h1>

        <HeroCarousel />
        <Pitchbar />

        <section aria-labelledby="section-best-sellers">
          <ProductCarousel
            title="Mais Vendidos"
            subtitle="Os suplementos mais populares do Brasil"
            products={bestSellers.length > 0 ? bestSellers : products.slice(0, MAX_PRODUCTS)}
            viewAllLink="/categoria/whey-protein"
          />
        </section>

        <CategoryGrid />

        <section aria-labelledby="section-offers">
          <ProductCarousel
            title="Ofertas Especiais"
            subtitle="Aproveite enquanto durarem!"
            products={offers.length > 0 ? offers : products.slice(5, MAX_PRODUCTS)}
            viewAllLink="/categoria/creatina"
          />
        </section>

        <DoubleBanners />

        <section aria-labelledby="section-news">
          <ProductCarousel
            title="Lançamentos"
            subtitle="As novidades do mercado de suplementos"
            products={news.length > 0 ? news : products.slice(10, MAX_PRODUCTS)}
            viewAllLink="/categoria/pre-treino"
          />
        </section>

        <section aria-labelledby="section-whey">
          <ProductCarousel
            title="Whey Protein"
            subtitle="O suplemento mais querido do Brasil"
            products={wheyProducts}
            viewAllLink="/categoria/whey-protein"
          />
        </section>

        <BrandSpotlight />

        <section aria-labelledby="section-blog" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-6">
              <div>
                <h2 id="section-blog" className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 mb-1">
                  Blog
                </h2>
                <p className="text-sm text-gray-500">Guias e artigos sobre suplementos</p>
              </div>
              <Link
                href="/blog"
                className="text-sm font-bold text-sky-500 hover:text-sky-600 transition-colors"
              >
                Ver todos →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>

        <Testimonials />
        <Newsletter />
      </main>

      <Footer />
    </>
  );
}