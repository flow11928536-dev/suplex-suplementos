import { products, getProductBySlug, getRelatedProducts, generateProductJsonLd } from '@/lib/store-data'
import { Header } from '@/components/store/header'
import { Footer } from '@/components/store/footer'
import { ProductDetail } from '@/components/store/product-detail'
import { ProductCarousel } from '@/components/store/product-carousel'
import type { Metadata } from 'next'

// ============================================================
// GERAÇÃO DE PÁGINAS ESTÁTICAS
// ============================================================
export function generateStaticParams() {
  return products.map((prod) => ({ slug: prod.slug }))
}

// ============================================================
// METADADOS DINÂMICOS (SEO)
// ============================================================
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: 'Produto não encontrado | Suplex Suplementos',
      description: 'O produto que você procura não está disponível.',
      robots: { index: false },
    }
  }

  const title = product.seoTitle || `${product.name} | Suplex Suplementos`
  const description = product.seoDescription || product.shortDescription || `Review e oferta de ${product.name}.`
  const keywords = product.keywords || []
  const canonical = product.canonicalUrl || `https://suplexsuplementos.com.br/produto/${product.slug}`

  // Construir imagem OpenGraph
  const images = product.image
    ? [
        {
          url: product.image,
          alt: product.alt || product.name,
        },
      ]
    : undefined

  return {
    title,
    description,
    keywords: keywords.join(', '),
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Suplex Suplementos',
      type: 'website', // <-- ALTERADO DE "product" PARA "website"
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: product.image ? [product.image] : undefined,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

// ============================================================
// PÁGINA
// ============================================================
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProductBySlug(slug) || products[0]
  const related = getRelatedProducts(product, 10)

  // Gera JSON-LD com a função auxiliar
  const jsonLd = generateProductJsonLd(product, 'https://suplexsuplementos.com.br')

  return (
    <>
      {/* ===== JSON-LD para SEO avançado ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />
      <div className="bg-white min-h-screen">
        <ProductDetail product={product} relatedProducts={related} />
        {related.length > 0 && (
          <ProductCarousel title="Produtos Relacionados" products={related} />
        )}
      </div>
      <Footer />
    </>
  )
}