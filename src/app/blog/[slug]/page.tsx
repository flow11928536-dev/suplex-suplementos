import { blogPosts, getBlogPostBySlug } from '@/lib/blog-data'
import BlogPostPageClient from './BlogPostPageClient'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug) || blogPosts[0]
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
      images: [post.image],
    },
  }
}

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toISOString()
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug) || blogPosts[0]

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
      <BlogPostPageClient slug={params.slug} />
    </>
  )
}