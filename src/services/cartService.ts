import Cookies from 'js-cookie';

export interface CartItem {
  id: number;
  productoId: number;
  cantidad: number;
}

export interface Cart {
  id: number;
  usuarioId: number;
  items: CartItem[];
  updatedAt: string;
}

// Helper para obtener el token
function getToken(): string | undefined {
  return Cookies.get('token');
}

export async function getCart(): Promise<Cart> {
  const token = getToken();
  const res = await fetch('/api/v1/cart', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error('Error al obtener el carrito');
  }
  return await res.json();
}

export async function addItemToCart(productoId: number, cantidad: number): Promise<CartItem> {
  const token = getToken();
  const res = await fetch('/api/v1/cart/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ productoId, cantidad }),
  });
  if (!res.ok) {
    throw new Error('Error al agregar ítem al carrito');
  }
  return await res.json();
}

export async function updateCartItem(itemId: number, cantidad: number): Promise<CartItem> {
  const token = getToken();
  const res = await fetch(`/api/v1/cart/item/${itemId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ cantidad }),
  });
  if (!res.ok) {
    throw new Error('Error al actualizar ítem del carrito');
  }
  return await res.json();
}

export async function removeCartItem(itemId: number): Promise<void> {
  const token = getToken();
  const res = await fetch(`/api/v1/cart/item/${itemId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error('Error al eliminar ítem del carrito');
  }
}

export async function clearCart(): Promise<void> {
  const token = getToken();
  const res = await fetch('/api/v1/cart/clear', {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error('Error al limpiar el carrito');
  }
}
