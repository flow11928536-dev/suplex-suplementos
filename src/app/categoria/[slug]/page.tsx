import { categories, getCategoryBySlug } from '@/lib/store-data'
import CategoryPageClient from './CategoryPageClient'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type Params = Promise<{ slug: string }>

// ============================================================
// GERAÇÃO DE PÁGINAS ESTÁTICAS
// ============================================================
export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }))
}

// ============================================================
// METADADOS DINÂMICOS (SEO)
// ============================================================
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) {
    return {
      title: 'Categoria não encontrada',
      description: 'A categoria que você procura não está disponível.',
    }
  }

  return {
    title: `${category.name} - Melhores Produtos e Ofertas | Suplex Suplementos`,
    description: category.longDescription || category.description || `Encontre os melhores ${category.name} com preços incríveis. Reviews e guias completos.`,
    keywords: [category.name, 'suplementos', 'melhores preços', 'ofertas'].join(', '),
    openGraph: {
      title: `${category.name} - Ofertas e Reviews | Suplex Suplementos`,
      description: category.longDescription || category.description || `Confira as melhores ofertas de ${category.name}. Produtos com reviews honestas e os melhores preços do mercado.`,
      url: `https://suplex-suplementos.pages.dev/categoria/${category.slug}`,
      siteName: 'Suplex Suplementos',
      type: 'website',
      images: [
        {
          url: category.image || 'https://suplex-suplementos.pages.dev/og-image.jpg',
          width: 1200,
          height: 630,
          alt: category.name,
        },
      ],
    },
  }
}

// ============================================================
// PÁGINA
// ============================================================
export default async function CategoryPage({ params }: { params: Params }) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  return <CategoryPageClient slug={category.slug} />
}