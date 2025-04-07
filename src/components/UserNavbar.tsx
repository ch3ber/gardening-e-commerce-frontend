'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode';
import logoIcon from '@/app/img/logo/logo_icon.png'

interface TokenPayload {
  id: string;
  email: string;
  rol: string;
}

export default function UserNavbar() {
  const [userEmail, setUserEmail] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const token = Cookies.get('token')
    if (token) {
      try {
        const decoded = jwtDecode<TokenPayload>(token)
        setUserEmail(decoded.email)
      } catch (error) {
        console.error("Error decodificando el token:", error)
      }
    }
  }, [])

  return (
    <nav className="bg-jardin-verde-claro py-11">
      <div className="
          bg-jardin-beige
          text-zinc-800
          border-4 border-zinc-300
          rounded-2xl
          px-4 py-2
          flex items-center justify-between
          mx-auto max-w-[95%] lg:max-w-[90%]
        ">
        {/* Logo y nombre de marca */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src={logoIcon} alt="Logo empresa" className="w-10" />
          <span className="font-bold text-xl">Viva Garden</span>
        </Link>

        {/* Menú de escritorio */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/catalogo" className="hover:text-jardin-marron-oscuro">Catálogo</Link>
          <Link href="#" className="hover:text-jardin-marron-oscuro">Nosotros</Link>
          <Link href="#" className="hover:text-jardin-marron-oscuro">Checkout</Link>
        </div>

        {/* Sección derecha: email del usuario y carrito */}
        <div className="hidden md:flex items-center space-x-4">
          <span className="hover:text-jardin-marron-oscuro">{userEmail}</span>
          <Link href="/cart" className="hover:text-jardin-marron-oscuro">Carrito</Link>
        </div>

        {/* Botón Hamburguesa (móvil) */}
        <button
          className="md:hidden focus:outline-none p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6 text-zinc-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menú desplegable en móvil */}
        {isOpen && (
          <div className="absolute top-28 left-0 w-full bg-jardin-beige border-t border-zinc-300 md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <Link href="/catalogo" className="hover:text-jardin-marron-oscuro">Catálogo</Link>
              <Link href="#" className="hover:text-jardin-marron-oscuro">Nosotros</Link>
              <Link href="#" className="hover:text-jardin-marron-oscuro">Checkout</Link>
              <div className="border-t border-zinc-300 pt-4 flex flex-col space-y-4">
                <span className="hover:text-jardin-marron-oscuro">{userEmail}</span>
                <Link href="/cart" className="hover:text-jardin-marron-oscuro">Carrito</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
