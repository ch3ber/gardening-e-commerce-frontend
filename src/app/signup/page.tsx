'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Signup() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nombres, setNombres] = useState('')
  const [apellidos, setApellidos] = useState('')
  const [telefono, setTelefono] = useState('')
  const [direccion, setDireccion] = useState('')
  const [codigoPostal, setCodigoPostal] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const data = {
      email,
      password,
      nombres,
      apellidos,
      telefono,
      direccion,
      codigoPostal,
    }

    try {
      const res = await fetch('http://127.0.0.1:5000/api/v1/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      console.log(res)

      if (!res.ok) {
        const errorData = await res.json()
        setError(errorData.message || 'Error al registrar')
      } else {
        // Redirige al login o a la página principal tras el registro exitoso
        router.push('/login')
      }
    } catch (err) {
      setError('Error en la conexión' + ' ' + err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-4xl font-bold text-center">
        Crear cuenta en VivaGarden
      </h1>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4 w-full max-w-md">
        <input
          type="email"
          placeholder="Correo Electrónico"
          className="border border-gray-300 p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="border border-gray-300 p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Nombres"
            className="border border-gray-300 p-2 rounded w-1/2"
            value={nombres}
            onChange={(e) => setNombres(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Apellidos"
            className="border border-gray-300 p-2 rounded w-1/2"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
            required
          />
        </div>
        <input
          type="text"
          placeholder="Teléfono"
          className="border border-gray-300 p-2 rounded"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Dirección"
            className="basis-3/4 border border-gray-300 p-2 rounded"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Código Postal"
            className="basis-1/4 border border-gray-300 p-2 rounded"
            value={codigoPostal}
            onChange={(e) => setCodigoPostal(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button className="main-button" type="submit" disabled={loading}>
          {loading ? 'Registrando...' : 'Crear cuenta'}
        </button>
      </form>
      <Link href="/login" className="mt-10 underline">
        ¿Ya tienes cuenta? Da click aquí para iniciar sesión.
      </Link>
    </div>
  )
}
