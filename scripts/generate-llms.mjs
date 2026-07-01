import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '../public');

async function getData() {
  const { products, categories, siteConfig } = await import('../src/lib/store-data.ts');
  return { products, categories, siteConfig };
}

async function generateFiles() {
  const { products, categories, siteConfig } = await getData();

  const baseUrl = siteConfig.url;
  const siteName = siteConfig.name;
  const siteDescription = siteConfig.description;

  // ==========================================================
  // llms.txt
  // ==========================================================

  const llmsLines = [
    `# ${siteName}`,
    '',
    `> ${siteDescription}`,
    '',
    '## Produtos em Destaque',
    ...products
      .slice(0, 20)
      .map(
        (p) =>
          `- [${p.name}](${baseUrl}/produto/${p.slug}): ${p.shortDescription || ''}`
      ),
    '',
    '## Categorias',
    ...categories.map(
      (c) =>
        `- [${c.name}](${baseUrl}/categoria/${c.slug}): ${c.description || ''}`
    ),
    '',
    '## Links Úteis',
    `- [Página Inicial](${baseUrl})`,
    `- [Blog](${baseUrl}/blog)`,
    `- [Contato](${baseUrl}/contato)`,
    `- [Políticas](${baseUrl}/politicas)`,
    `- [Sitemap](${baseUrl}/sitemap.xml)`,
  ];

  fs.writeFileSync(
    path.join(publicDir, 'llms.txt'),
    llmsLines.join('\n'),
    'utf8'
  );

  // ==========================================================
  // llms-full.txt
  // ==========================================================

  const fullLines = [
    `# ${siteName} - Full Index`,
    `# Site: ${baseUrl}`,
    '# Lista completa de produtos e páginas',
    `# Gerado em: ${new Date().toISOString()}`,
    '',
    '## Página Inicial',
    `- ${baseUrl} - ${siteDescription}`,
    '',
    '## Produtos',
    ...products.map(
      (p) =>
        `- ${baseUrl}/produto/${p.slug} - ${p.name} (${p.categoryName}) - ${p.rating}★ (${p.reviews} reviews)`
    ),
    '',
    '## Categorias',
    ...categories.map(
      (c) =>
        `- ${baseUrl}/categoria/${c.slug} - ${c.name}: ${c.description}`
    ),
    '',
    '## Páginas',
    `- ${baseUrl}/blog`,
    `- ${baseUrl}/contato`,
    `- ${baseUrl}/politicas`,
    '',
    '# Arquivo gerado automaticamente.',
  ];

  fs.writeFileSync(
    path.join(publicDir, 'llms-full.txt'),
    fullLines.join('\n'),
    'utf8'
  );

  // ==========================================================
  // llms-index.json
  // ==========================================================

  const index = {
    site: {
      name: siteName,
      url: baseUrl,
      description: siteDescription,
      lastUpdated: new Date().toISOString(),
    },

    categories: categories.map((c) => ({
      slug: c.slug,
      name: c.name,
      url: `${baseUrl}/categoria/${c.slug}`,
      description: c.description,
    })),

    products: products.map((p) => ({
      slug: p.slug,
      name: p.name,
      url: `${baseUrl}/produto/${p.slug}`,
      category: p.categoryName,
      rating: p.rating,
      reviews: p.reviews,
      shortDescription: p.shortDescription,
    })),

    pages: [
      {
        slug: 'blog',
        title: 'Blog',
        url: `${baseUrl}/blog`,
      },
      {
        slug: 'contato',
        title: 'Contato',
        url: `${baseUrl}/contato`,
      },
      {
        slug: 'politicas',
        title: 'Políticas',
        url: `${baseUrl}/politicas`,
      },
    ],

    sitemap: `${baseUrl}/sitemap.xml`,
    robots: `${baseUrl}/robots.txt`,
    llmsTxt: `${baseUrl}/llms.txt`,
    llmsFullTxt: `${baseUrl}/llms-full.txt`,
  };

  fs.writeFileSync(
    path.join(publicDir, 'llms-index.json'),
    JSON.stringify(index, null, 2),
    'utf8'
  );

  // ==========================================================
  // robots.txt
  // ==========================================================

  const robotsLines = [
    'User-agent: *',
    '',

    '# Permitir indexação completa',
    'Allow: /',

    '# Permitir arquivos do Next.js',
    'Allow: /_next/',
    'Allow: /_next/static/',

    '',

    '# Bloquear apenas áreas privadas',
    'Disallow: /api/',
    'Disallow: /_vercel/',

    '',

    `Sitemap: ${baseUrl}/sitemap.xml`,
    `Host: ${baseUrl}`,

    '',

    '# Arquivos para agentes de IA',
    `# llms.txt: ${baseUrl}/llms.txt`,
    `# llms-full.txt: ${baseUrl}/llms-full.txt`,
    `# llms-index.json: ${baseUrl}/llms-index.json`,
  ];

  fs.writeFileSync(
    path.join(publicDir, 'robots.txt'),
    robotsLines.join('\n'),
    'utf8'
  );

  console.log('✅ Arquivos SEO e LLMs gerados com sucesso!');
}

generateFiles().catch(console.error);