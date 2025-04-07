'use client'

import { useState, useEffect } from 'react'
import { getCart, clearCart, Cart } from '@/services/localCartService'

export default function CheckoutPage() {
  const [cart, setCart] = useState<Cart>({ items: [] })

  // Cargar el carrito desde localStorage al montar el componente
  useEffect(() => {
    setCart(getCart())
  }, [])

  // Función para refrescar el estado del carrito
  const refreshCart = () => {
    setCart(getCart())
  }

  // Calcular el total sumando el precio de cada ítem por su cantidad
  const total = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  const handleCheckout = () => {
    // Vaciar el carrito
    clearCart()
    refreshCart()
    // Mostrar alerta de confirmación
    alert('¡Productos comprados!')
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Formulario de Datos */}
        <div className="md:col-span-2 space-y-4">
          {/* Información de Envío */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Dirección de Envío</h2>
            <input
              type="text"
              placeholder="Dirección"
              className="border border-gray-300 p-2 rounded w-full mb-2"
            />
            <input
              type="text"
              placeholder="Ciudad"
              className="border border-gray-300 p-2 rounded w-full mb-2"
            />
            <input
              type="text"
              placeholder="Código Postal"
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>

          {/* Método de Pago */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Método de Pago</h2>
            <select className="border border-gray-300 p-2 rounded w-full">
              <option value="">Seleccione un método</option>
              <option value="visa">Visa</option>
              <option value="mastercard">Mastercard</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
        </div>

        {/* Resumen de la Orden */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Resumen de Orden</h2>
          {cart.items.length === 0 ? (
            <p className="text-gray-500">No hay productos en el carrito</p>
          ) : (
            <ul>
              {cart.items.map((item) => (
                <li key={item.productId} className="flex justify-between border-b py-2">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="flex justify-between font-bold mt-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            onClick={handleCheckout}
            className="main-button mt-4 w-full"
            disabled={cart.items.length === 0}
          >
            Finalizar Pago
          </button>
        </div>
      </div>
    </div>
  )
}
