import { products, getProductBySlug, getRelatedProducts } from '@/lib/store-data'
import { Header } from '@/components/store/header'
import { Footer } from '@/components/store/footer'
import { ProductDetail } from '@/components/store/product-detail'
import { ProductCarousel } from '@/components/store/product-carousel'

export function generateStaticParams() {
  return products.map((prod) => ({ slug: prod.slug }))
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProductBySlug(slug) || products[0]
  const related = getRelatedProducts(product, 10)

  return (
    <>
      <Header />
      <div className="bg-white min-h-screen">
        <ProductDetail product={product} relatedProducts={related} />
        {related.length > 0 && (
          <ProductCarousel title="Produtos Relacionados" products={related} />
        )}
      </div>
      <Footer />
    </>
  )
}