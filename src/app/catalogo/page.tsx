'use client'

import { useState } from 'react'
import ProductCard from '@/components/ProuductCard'
import { getProducts } from '@/utils/getProducts'

export default function Catalogo() {
  const [searchTerm, setSearchTerm] = useState('')
  const products = getProducts()

  const filteredProducts = products.filter((product) => {
    const lowerTerm = searchTerm.toLowerCase()
    return (
      product.name.toLowerCase().includes(lowerTerm) ||
      product.description.toLowerCase().includes(lowerTerm)
    )
  })

  return (
    <main className="my-10 lg:my-17 max-w-[90%] mx-auto text-center">
      <p className="text-sm text-left text-gray-500 ml-8">
        Comienza a escribir para filtrar en automático.
      </p>
      <input
        type="text"
        placeholder="Busca el nombre de un producto o descripción"
        className="mb-10 w-full border-jardin-verde-oliva border-2 p-3 rounded-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <section>
        <h1 className="text-3xl font-bold">Los más comprados</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  )
}
