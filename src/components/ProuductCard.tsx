import Image from 'next/image'
import Link from 'next/link'

export interface Product {
  id: string
  name: string
  description: string
  price: number
  imageUrl?: string
  detailsUrl: string
  buyUrl: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="max-w-sm bg-white rounded-md shadow p-4 mx-auto flex flex-col justify-between items-stretch">
      {/* Imagen del producto */}
      <div className="w-full h-40 rounded mb-4 overflow-hidden flex items-center justify-center bg-gray-300">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={200}
            height={160}
            className="object-cover w-full h-full"
          />
        ) : (
          <span className="text-gray-500">[Imagen]</span>
        )}
      </div>

      {/* Información del producto */}
      <h2 className="text-left text-xl font-semibold mb-1">{product.name}</h2>
      <p className="text-left text-sm text-gray-700 mb-2">{product.description}</p>
      <p className="text-left text-jardin-marron-medio font-bold text-lg mb-4">
        ${product.price} MXN
      </p>

      {/* Enlaces con estilo de botón */}
      <div className="w-full flex flex-col space-y-2 md:flex-row md:space-y-0 md:justify-between md:px-2">
        <Link href={product.detailsUrl} className="ghost-button">
          Ver detalles
        </Link>
        <Link href={product.buyUrl} className="main-button">
          Comprar
        </Link>
      </div>
    </div>
  )
}
