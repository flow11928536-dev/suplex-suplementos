import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/private/'],
    },
    sitemap: 'https://suplexsuplementos.com.br/sitemap.xml',
    host: 'https://suplexsuplementos.com.br',
  }
}
