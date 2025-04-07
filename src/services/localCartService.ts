import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export interface CartItem {
  productId: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
}

// Define la forma esperada del token (según lo que generes)
interface TokenPayload {
  id: string;
  email: string;
  rol: string;
}

/**
 * Obtiene la llave del carrito en localStorage en base al JWT.
 * Si el usuario está logueado, se usa "cart_<email>".
 * Si no, se usa "cart_guest".
 */
function getCartKey(): string {
  const token = Cookies.get('token');
  if (token) {
    try {
      const decoded = jwtDecode<TokenPayload>(token);
      return `cart_${decoded.email}`;
    } catch (error) {
      console.error('Error decodificando el token', error);
    }
  }
  return 'cart_guest';
}

/**
 * Lee el carrito desde localStorage.
 */
export function getCart(): Cart {
  const key = getCartKey();
  const data = localStorage.getItem(key);
  if (data) {
    try {
      return JSON.parse(data) as Cart;
    } catch (error) {
      console.error('Error parseando el carrito desde localStorage', error);
    }
  }
  return { items: [] };
}

/**
 * Guarda el carrito en localStorage usando la llave correspondiente.
 */
export function saveCart(cart: Cart): void {
  const key = getCartKey();
  localStorage.setItem(key, JSON.stringify(cart));
}

/**
 * Agrega un ítem al carrito. Si el producto ya existe, incrementa la cantidad.
 */
export function addItemToCart({ productId, quantity = 1, name, description, price, imageUrl }: CartItem): CartItem {
  const cart = getCart();
  let existingItem = cart.items.find(item => item.productId === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    existingItem = { productId, quantity, name, description, price, imageUrl };
    cart.items.push(existingItem);
  }
  saveCart(cart);
  return existingItem;
}

/**
 * Actualiza la cantidad de un ítem del carrito.
 */
export function updateCartItem(productId: number, quantity: number): CartItem | null {
  const cart = getCart();
  const item = cart.items.find(item => item.productId === productId);
  if (item) {
    item.quantity = quantity;
    saveCart(cart);
    return item;
  }
  return null;
}

/**
 * Elimina un ítem del carrito.
 */
export function removeCartItem(productId: number): void {
  const cart = getCart();
  cart.items = cart.items.filter(item => item.productId !== productId);
  saveCart(cart);
}

/**
 * Vacía el carrito.
 */
export function clearCart(): void {
  const key = getCartKey();
  localStorage.removeItem(key);
}

/**
 * Función opcional para fusionar el carrito de invitado con el carrito del usuario
 * en el momento en que éste inicia sesión. Por ejemplo, puedes llamar a esta función
 * luego de loguear y, si existe un carrito "guest", fusionarlo con el que ya tenga el usuario.
 */
export function mergeGuestCartWithUserCart(userEmail: string): void {
  const guestCartStr = localStorage.getItem('cart_guest');
  if (guestCartStr) {
    const guestCart = JSON.parse(guestCartStr) as Cart;
    const userKey = `cart_${userEmail}`;
    const userCartStr = localStorage.getItem(userKey);
    const userCart: Cart = userCartStr ? JSON.parse(userCartStr) : { items: [] };

    // Fusionar ítems: si el producto ya existe, sumar la cantidad; si no, agregarlo.
    guestCart.items.forEach(guestItem => {
      const existing = userCart.items.find(item => item.productId === guestItem.productId);
      if (existing) {
        existing.quantity += guestItem.quantity;
      } else {
        userCart.items.push(guestItem);
      }
    });

    // Guardar el carrito fusionado y limpiar el carrito de invitado
    localStorage.setItem(userKey, JSON.stringify(userCart));
    localStorage.removeItem('cart_guest');
  }
}
