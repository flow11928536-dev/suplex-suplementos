import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ================================
  // Static Export (essencial para Cloudflare Pages)
  // ================================
  output: 'export',

  // ================================
  // Imagens (necessário para Static Export)
  // ================================
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // Adicione outros hosts conforme necessário
    ],
    unoptimized: true, // Obrigatório para static export
  },

  // ================================
  // Trailing Slash (evita duplicação de conteúdo)
  // ================================
  trailingSlash: false, // Mantém URLs sem barra, padrão do Next.js

  // ================================
  // React Strict Mode (recomendado ativar)
  // ================================
  reactStrictMode: true, // Ajuda a detectar problemas de renderização

  // ================================
  // Headers personalizados (SEO e segurança)
  // ================================
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), camera=(), microphone=()",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
        ],
      },
    ];
  },

  // ================================
  // Redirects (para preservar URLs antigas, se necessário)
  // ================================
  async redirects() {
    return [
      // Exemplo: redirecionar de /old-blog para /blog
      // {
      //   source: "/old-blog/:slug",
      //   destination: "/blog/:slug",
      //   permanent: true,
      // },
    ];
  },

  // ================================
  // Compressão Brotli (via Cloudflare Pages, não precisa configurar aqui)
  // ================================
  // O Cloudflare Pages já aplica compressão Brotli automaticamente
};

export default nextConfig;