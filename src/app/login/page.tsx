'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://127.0.0.1:5000/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setError(errorData.error || "Error al iniciar sesión");
        return;
      }

      const data = await res.json();
      // Guardar el token en una cookie (válido por 1 día, sameSite lax)
      Cookies.set("token", data.token, { expires: 1, sameSite: "lax" });

      // Redirige al home
      router.push("/");
    } catch (err) {
      console.error(err);
      setError("Error de conexión");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-4xl font-bold text-center">Iniciar Sesión en VivaGarden</h1>
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
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex flex-col gap-4">
          <button className="main-button" type="submit">
            Iniciar Sesión
          </button>
          <button className="ghost-button" type="button">
            Olvidé mi contraseña
          </button>
        </div>
      </form>
      <Link href="/signup" className="mt-10 underline">
        Haz click aquí para crear una cuenta nueva.
      </Link>
    </div>
  );
}
