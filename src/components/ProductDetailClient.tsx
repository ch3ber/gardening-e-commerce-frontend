'use client'

import Image from 'next/image'
import { useState } from 'react'

type Product = {
  id: string
  name: string
  price: number
  description: string
  imageUrl: string
}

export default function ProductDetailClient({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(0)

  const handleIncrease = () => setQuantity((prev) => prev + 1)
  const handleDecrease = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 0))

  const handleAddToCart = () => {
    // Lógica para agregar al carrito, por ejemplo:
    // - Llamar a un contexto global
    // - Hacer un fetch a tu backend
    // - etc.
    alert(`Agregado ${quantity} de ${product.name} al carrito!`)
  }

  return (
    <div className="bg-white rounded-md p-6 shadow-md">
      {/* Encabezado con la imagen y el nombre */}
      <div className="flex flex-col md:flex-row md:space-x-6">
        {/* Imagen */}
        <div className="flex-1 mb-4 md:mb-0">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={600}
            height={400}
            className="w-full h-auto rounded"
          />
        </div>

        {/* Detalles del producto */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl text-jardin-marron-medio font-semibold mb-4">
            ${product.price.toFixed(2)} MXN
          </p>
          <p className="text-gray-700 mb-6">{product.description}</p>

          {/* Contador */}
          <div className="flex items-center space-x-4 mb-4">
            <button onClick={handleDecrease} className="ghost-button">
              -
            </button>
            <span className="text-lg font-bold">{quantity}</span>
            <button onClick={handleIncrease} className="ghost-button">
              +
            </button>
          </div>

          <button onClick={handleAddToCart} className="main-button w-full">
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  )
}
