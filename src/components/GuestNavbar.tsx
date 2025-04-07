'use client'

import Link from 'next/link'
import Image from 'next/image'
import logoIcon from '@/app/img/logo/logo_icon.png'

export default function GuestNavbar() {
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

        {/* Sección derecha: login / signup */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="hover:text-jardin-marron-oscuro">login</Link>
          <Link href="/signup" className="hover:text-jardin-marron-oscuro">signup</Link>
        </div>

        {/* Botón Hamburguesa (móvil) */}
        {/* Puedes agregar aquí la lógica responsive similar a la de UserNavbar si lo deseas */}
      </div>
    </nav>
  )
}
