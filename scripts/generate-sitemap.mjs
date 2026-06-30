import { writeFileSync } from 'fs'
import { resolve } from 'path'
import { products, categories } from '../src/lib/store-data.ts'
import { blogPosts } from '../src/lib/blog-data.ts'

const baseUrl = 'https://suplex-suplementos.pages.dev'

// Páginas estáticas do site
const staticPages = [
  { url: '', changefreq: 'daily', priority: '1.0' },
  { url: '/blog', changefreq: 'weekly', priority: '0.8' },
  { url: '/contato', changefreq: 'monthly', priority: '0.5' },
  { url: '/privacidade', changefreq: 'monthly', priority: '0.5' },
  { url: '/termos', changefreq: 'monthly', priority: '0.5' },
  { url: '/faq', changefreq: 'monthly', priority: '0.6' },
  { url: '/sobre', changefreq: 'monthly', priority: '0.6' },
]

function urlEntry({ url, lastmod, changefreq, priority }) {
  return `  <url>
    <loc>${baseUrl}${url}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
}

const now = new Date().toISOString()

const entries = [
  ...staticPages.map(p => urlEntry({ ...p, lastmod: now })),
  ...products.map(p => urlEntry({
    url: `/produto/${p.slug}`,
    lastmod: p.dateModified || now,
    changefreq: 'weekly',
    priority: '0.9',
  })),
  ...categories.map(c => urlEntry({
    url: `/categoria/${c.slug}`,
    lastmod: now,
    changefreq: 'weekly',
    priority: '0.8',
  })),
  ...blogPosts.map(post => urlEntry({
    url: `/blog/${post.slug}`,
    lastmod: post.dateModified || now,
    changefreq: 'weekly',
    priority: '0.7',
  })),
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`

writeFileSync(resolve('public/sitemap.xml'), xml, 'utf-8')
console.log(`✅ sitemap.xml gerado com ${products.length + categories.length + blogPosts.length + staticPages.length} URLs`)