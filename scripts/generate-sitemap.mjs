import { writeFileSync } from 'fs'
import { resolve } from 'path'
import { products, categories } from '../src/lib/store-data.ts'
import { blogPosts } from '../src/lib/blog-data.ts'

// Altere quando comprar o domínio
const baseUrl = 'https://suplex-suplementos.pages.dev'

// Apenas páginas que EXISTEM
const staticPages = [
  { url: '', changefreq: 'daily', priority: '1.0' },
  { url: '/blog', changefreq: 'daily', priority: '0.9' },
  { url: '/contato', changefreq: 'monthly', priority: '0.5' },
  { url: '/sobre', changefreq: 'monthly', priority: '0.5' },
  { url: '/faq', changefreq: 'monthly', priority: '0.5' },
  { url: '/privacidade', changefreq: 'monthly', priority: '0.3' },
  { url: '/termos', changefreq: 'monthly', priority: '0.3' },
]

function createUrl({ url, lastmod, changefreq, priority }) {
  return `  <url>
    <loc>${encodeURI(baseUrl + url)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
}

const now = new Date().toISOString()

const urls = []

// Home e páginas
staticPages.forEach((page) => {
  urls.push(
    createUrl({
      url: page.url,
      lastmod: now,
      changefreq: page.changefreq,
      priority: page.priority,
    })
  )
})

// Categorias
categories.forEach((category) => {
  urls.push(
    createUrl({
      url: `/categoria/${category.slug}`,
      lastmod: now,
      changefreq: 'daily',
      priority: '0.9',
    })
  )
})

// Produtos
products.forEach((product) => {
  urls.push(
    createUrl({
      url: `/produto/${product.slug}`,
      lastmod: product.dateModified || now,
      changefreq: 'weekly',
      priority: '0.8',
    })
  )
})

// Blog
blogPosts.forEach((post) => {
  urls.push(
    createUrl({
      url: `/blog/${post.slug}`,
      lastmod: post.dateModified || now,
      changefreq: 'monthly',
      priority: '0.7',
    })
  )
})

// Arquivos para IA
urls.push(
  createUrl({
    url: '/llms.txt',
    lastmod: now,
    changefreq: 'weekly',
    priority: '0.5',
  })
)

urls.push(
  createUrl({
    url: '/llms-full.txt',
    lastmod: now,
    changefreq: 'weekly',
    priority: '0.4',
  })
)

urls.push(
  createUrl({
    url: '/llms-index.json',
    lastmod: now,
    changefreq: 'weekly',
    priority: '0.4',
  })
)

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
xmlns:xhtml="http://www.w3.org/1999/xhtml">

${urls.join('\n')}

</urlset>
`

writeFileSync(resolve('public/sitemap.xml'), sitemap, 'utf8')

console.log(`✅ Sitemap gerado com ${urls.length} URLs`)