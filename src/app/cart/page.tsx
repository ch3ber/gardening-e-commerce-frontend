'use client'

import { useState, useEffect } from 'react';
import { getCart, updateCartItem, removeCartItem, clearCart, Cart, CartItem } from '@/services/localCartService';
import Image from 'next/image';

export default function CartPage() {
  const [cart, setCart] = useState<Cart>({ items: [] });

  // Cargar el carrito al montar el componente
  useEffect(() => {
    setCart(getCart());
  }, []);

  const refreshCart = () => {
    setCart(getCart());
  }

  const handleIncrease = (item: CartItem) => {
    updateCartItem(item.productId, item.quantity + 1);
    refreshCart();
  }

  const handleDecrease = (item: CartItem) => {
    if (item.quantity > 1) {
      updateCartItem(item.productId, item.quantity - 1);
      refreshCart();
    }
  }

  const handleRemove = (item: CartItem) => {
    removeCartItem(item.productId);
    refreshCart();
  }

  const handleClear = () => {
    clearCart();
    refreshCart();
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Tu Carrito</h1>
      {cart.items.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <ul>
          {cart.items.map(item => (
            <li key={item.productId} className="flex items-center justify-between border-b py-2">
              <div className='flex gap-4 justify-between w-full mr-10'>
                <div>
                  <p><b>Producto ID:</b> {item.productId}</p>
                  <p><b>Cantidad:</b> {item.quantity}</p>
                  <p><b>Nombre:</b> {item.name}</p>
                  <p><b>Description:</b> {item.description}</p>
                  <p><b>Price:</b> ${item.price}</p>
                </div>
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={30}
                  height={20}
                  className="w-44 h-auto rounded"
                />
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleIncrease(item)} className="ghost-button">+</button>
                <button onClick={() => handleDecrease(item)} className="ghost-button" disabled={item.quantity <= 1}>-</button>
                <button onClick={() => handleRemove(item)} className="main-button">Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <p><b>Total:</b> ${cart.items.map(item => item.price).reduce((acc, current) => acc + current, 0)}</p>
      {cart.items.length > 0 && (
        <button onClick={handleClear} className="ghost-button mt-4">
          Vaciar Carrito
        </button>
      )}
    </div>
  );
}
