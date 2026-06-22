'use client'

import { Header } from '@/components/store/header'
import { Footer } from '@/components/store/footer'
import { ProductDetail } from '@/components/store/product-detail'
import { ProductCarousel } from '@/components/store/product-carousel'
import { products, getProductBySlug, getRelatedProducts } from '@/lib/store-data'
import { useParams } from 'next/navigation'

export default function ProductPage() {
  const params = useParams()
  const slug = params.slug as string

  const product = getProductBySlug(slug) || products[0]
  const related = getRelatedProducts(product, 10)

  return (
    <>
      <Header />

      <div className="bg-white min-h-screen">
        <ProductDetail product={product} relatedProducts={related} />

        {related.length > 0 && (
          <ProductCarousel
            title="Produtos Relacionados"
            products={related}
          />
        )}
      </div>

      <Footer />
    </>
  )
}
