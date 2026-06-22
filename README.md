# Suplex Suplementos - Site de Afiliados (Next.js)

Site de afiliados focado em suplementos, construído para conversão e SEO. Os visitantes navegam pelo site, leem reviews e clicam nos botões "Ver Preço" que os redirecionam para o Mercado Livre (ou outra loja parceira) via link de afiliado.

## 🚀 Como rodar

```bash
npm install
npm run dev
```

Acesse: http://localhost:3000

## 🔗 Onde editar os links de afiliado

### Links de afiliado dos produtos
Arquivo: `src/lib/store-data.ts`
```ts
// Para cada produto, altere o campo:
affiliateLink: "#", // 🔗 COLOQUE AQUI O LINK DE AFILIADO DO MERCADO LIVRE
```

### Imagens dos produtos
Arquivo: `src/lib/store-data.ts`
```ts
// Para cada produto, altere o campo:
image: "https://...", // 🖼️ COLOQUE AQUI A URL DA IMAGEM DO PRODUTO
```

### Imagens dos banners (hero carousel)
Arquivo: `src/lib/store-data.ts`
```ts
// No array heroBanners, altere o campo:
image: "https://...", // 🖼️ COLOQUE AQUI A URL DA IMAGEM DO BANNER
```

### Imagens do blog
Arquivo: `src/lib/blog-data.ts`
```ts
// Para cada artigo, altere o campo:
image: "https://...", // 🖼️ COLOQUE AQUI A URL DA IMAGEM DO ARTIGO
```

## 📄 Páginas

| Página | Rota | Descrição |
|--------|------|-----------|
| Home | `/` | Homepage com banners, produtos, blog e categorias |
| Categoria | `/categoria/[slug]` | Listagem de produtos por categoria |
| Produto | `/produto/[slug]` | Página rica do produto com CTA de afiliado |
| Blog | `/blog` | Lista de artigos |
| Artigo | `/blog/[slug]` | Artigo completo |
| FAQ | `/faq` | Perguntas frequentes |
| Sobre | `/sobre` | Página institucional |
| Contato | `/contato` | Formulário de contato |
| Privacidade | `/privacidade` | Política de privacidade |
| Termos | `/termos` | Termos de uso |
| Sitemap | `/sitemap.xml` | Sitemap XML para SEO |
| Robots | `/robots.txt` | Robots.txt para SEO |

## 🧩 Componentes principais

- `src/components/store/header.tsx` - Cabeçalho (sem carrinho/busca/login)
- `src/components/store/product-card.tsx` - Card de produto com botão "Ver Preço"
- `src/components/store/product-detail.tsx` - Página de produto com CTA de afiliado
- `src/components/store/hero-carousel.tsx` - Banner carousel
- `src/components/store/blog-card.tsx` - Card de artigo do blog
- `src/components/store/faq-accordion.tsx` - FAQ interativo

## 🔍 SEO

- ✅ Metadados otimizados (title, description, keywords)
- ✅ Open Graph e Twitter Cards
- ✅ JSON-LD (Organization, WebSite)
- ✅ Sitemap.xml dinâmico
- ✅ Robots.txt
- ✅ URLs canônicas
- ✅ Breadcrumbs
- ✅ HTML semântico
- ✅ Alt text em todas as imagens
- ✅ Links de afiliado com `rel="nofollow sponsored noopener noreferrer"`
- ✅ Idioma pt-BR

## 🛠️ Tecnologias

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- shadcn/ui
- Lucide Icons
- React 19
