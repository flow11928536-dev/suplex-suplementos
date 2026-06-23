import { Header } from '@/components/store/header'
import { HeroCarousel } from '@/components/store/hero-carousel'
import { Pitchbar } from '@/components/store/pitchbar'
import { CategoryGrid } from '@/components/store/category-grid'
import { ProductCarousel } from '@/components/store/product-carousel'
import { DoubleBanners } from '@/components/store/double-banners'
import { BrandSpotlight } from '@/components/store/brand-spotlight'
import { Testimonials } from '@/components/store/testimonials'
import { Newsletter } from '@/components/store/newsletter'
import { Footer } from '@/components/store/footer'
import { BlogCard } from '@/components/store/blog-card'
import { products } from '@/lib/store-data'
import { blogPosts } from '@/lib/blog-data'

export default function Home() {

  const bestSellers = products.filter(p => p.badge === "MAIS VENDIDO")
  const offers = products.filter(p => p.badge === "OFERTA")
  const news = products.filter(p => p.badge === "NOVO")
  const wheyProducts = products.filter(p => p.category === "whey-protein")
  const recentPosts = blogPosts.slice(0, 3)

  return (
    <>
      <Header />

      <main>
        {/* H1 visualmente oculto mas presente para SEO */}
        <h1 className="sr-only">Suplex Suplementos - Reviews, Comparativas e Melhores Preços</h1>

        <HeroCarousel />
        <Pitchbar />

        <ProductCarousel
          title="Mais Vendidos"
          subtitle="Os suplementos mais populares do Brasil"
          products={bestSellers.length > 0 ? bestSellers : products.slice(0, 10)}
          viewAllLink="/categoria/whey-protein"
        />

        <CategoryGrid />

        <ProductCarousel
          title="Ofertas Especiais"
          subtitle="Aproveite enquanto durarem!"
          products={offers.length > 0 ? offers : products.slice(5, 15)}
          viewAllLink="/categoria/creatina"
        />

        <DoubleBanners />

        <ProductCarousel
          title="Lançamentos"
          subtitle="As novidades do mercado de suplementos"
          products={news.length > 0 ? news : products.slice(10, 20)}
          viewAllLink="/categoria/pre-treino"
        />

        <ProductCarousel
          title="Whey Protein"
          subtitle="O suplemento mais querido do Brasil"
          products={wheyProducts}
          viewAllLink="/categoria/whey-protein"
        />

        <BrandSpotlight />

        {/* Blog highlight */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 mb-1">Blog</h2>
                <p className="text-sm text-gray-500">Guias e artigos sobre suplementos</p>
              </div>
              <a href="/blog" className="text-sm font-bold text-sky-500 hover:text-sky-600">
                Ver todos →
              </a>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>

        <Testimonials />
        <Newsletter />
      </main>

      <Footer />
    </>
  )
}