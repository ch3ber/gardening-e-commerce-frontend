import { Metadata } from 'next'
import ProductDetailClient from '@/components/ProductDetailClient'
import { getProducts } from '@/utils/getProducts'

async function getProductData(id: string) {
  return getProducts().find((product) => product.id === id)
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = await getProductData(params.id)
  return {
    title: `VivaGarden | ${product.name}`,
    description: `Detalle de ${product.name}`,
  }
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProductData(params.id)

  return (
    <main className="max-w-6xl mx-auto p-4">
      <ProductDetailClient product={product} />
    </main>
  )
}
