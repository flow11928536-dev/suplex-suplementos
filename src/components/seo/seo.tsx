import type { Metadata } from 'next'

interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
}

/**
 * Componente de SEO - gera metadata para Next.js
 * Use em cada página para otimizar para buscadores
 */
export function generateSEO({
  title,
  description,
  keywords = [],
  image = 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=1200&q=80',
  url = '/',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Suplex Suplementos',
}: SEOProps): Metadata {
  const fullUrl = `https://suplexsuplementos.com.br${url}`

  return {
    title,
    description,
    keywords: ['suplementos', 'whey protein', 'creatina', 'pré-treino', 'suplementos alimentares', 'musculação', 'fitness', ...keywords],
    authors: [{ name: author }],
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: 'Suplex Suplementos',
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: 'pt_BR',
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { authors: [author] }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

/**
 * JSON-LD Structured Data para Organization
 */
export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Suplex Suplementos',
    url: 'https://suplexsuplementos.com.br',
    logo: 'https://suplexsuplementos.com.br/logo.png',
    description: 'Portal de análise e recomendação de suplementos alimentares. Reviews honestas, guias completos e comparações dos melhores produtos do mercado.',
    sameAs: [
      'https://instagram.com/suplexsuplementos',
      'https://facebook.com/suplexsuplementos',
      'https://youtube.com/suplexsuplementos',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-11-3003-3994',
      contactType: 'customer service',
      availableLanguage: ['Portuguese'],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

/**
 * JSON-LD Structured Data para WebSite (com SearchAction)
 */
export function WebsiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Suplex Suplementos',
    url: 'https://suplexsuplementos.com.br',
    description: 'Portal de análise e recomendação de suplementos alimentares no Brasil.',
    inLanguage: 'pt-BR',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

/**
 * JSON-LD Structured Data para Product
 */
export function ProductJsonLd({
  name,
  description,
  image,
  category,
  rating,
  reviews,
  url,
}: {
  name: string
  description: string
  image: string
  category: string
  rating: number
  reviews: number
  url: string
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    category,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating,
      reviewCount: reviews,
      bestRating: 5,
      worstRating: 1,
    },
    url: `https://suplexsuplementos.com.br${url}`,
    brand: {
      '@type': 'Brand',
      name: 'Suplex Suplementos',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

/**
 * JSON-LD Structured Data para Article (Blog)
 */
export function ArticleJsonLd({
  title,
  description,
  image,
  datePublished,
  dateModified,
  author,
  url,
}: {
  title: string
  description: string
  image: string
  datePublished: string
  dateModified?: string
  author: string
  url: string
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Suplex Suplementos',
      logo: {
        '@type': 'ImageObject',
        url: 'https://suplexsuplementos.com.br/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://suplexsuplementos.com.br${url}`,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

/**
 * JSON-LD Structured Data para FAQPage
 */
export function FAQJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[]
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

/**
 * JSON-LD Structured Data para BreadcrumbList
 */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[]
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: `https://suplexsuplementos.com.br${item.url}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
