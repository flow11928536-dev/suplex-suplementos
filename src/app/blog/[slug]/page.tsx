import { blogPosts, getBlogPostBySlug } from '@/lib/blog-data'
import BlogPostPageClient from './BlogPostPageClient'
import { notFound } from 'next/navigation'

type Params = Promise<{ slug: string }>

// ============================================================
// GERAÇÃO DE PÁGINAS ESTÁTICAS
// ============================================================
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

// ============================================================
// METADADOS DINÂMICOS
// ============================================================
export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post não encontrado',
      description: 'O post que você procura não está disponível.',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  }
}

// ============================================================
// FORMATAÇÃO DE DATA
// ============================================================
const formatDate = (dateStr: string) => {
  try {
    return new Date(dateStr).toISOString()
  } catch {
    return new Date().toISOString()
  }
}

// ============================================================
// PÁGINA
// ============================================================
export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    author: {
      '@type': 'Person',
      name: post.author,
      url: 'https://suplex-suplementos.pages.dev/sobre',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Suplex Suplementos',
      logo: {
        '@type': 'ImageObject',
        url: 'https://suplex-suplementos.pages.dev/logo.png',
      },
    },
    datePublished: formatDate(post.date),
    dateModified: formatDate(post.date),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://suplex-suplementos.pages.dev/blog/${post.slug}`,
    },
    keywords: post.keywords?.join(', '),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BlogPostPageClient slug={post.slug} />
    </>
  )
}