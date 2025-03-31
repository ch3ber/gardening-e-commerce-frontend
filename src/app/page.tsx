import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="bg-jardin-verde-claro pb-10 text-center">
        <h1 className="text-4xl font-bold">Más Verde, Más Fresco, Más Tuyo.</h1>
        <p className="text-2xl">Cultiva belleza en cada rincón.</p>
        <div className="mt-5 flex gap-5 justify-center">
          <Link href={'/'} className="main-button">
            Explorar productos
          </Link>
          <Link href={'/'} className="ghost-button">
            Crear cuenta
          </Link>
        </div>
      </header>
      <main className="my-10 lg:my-17 max-w-[90%] mx-auto text-center">
        <h1 className="text-2xl font-bold">Los más comprados</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, repellat earum ex numquam labore cumque exercitationem laudantium aliquid non animi voluptate nobis sunt eos optio voluptatum unde sapiente, atque minus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, repellat earum ex numquam labore cumque exercitationem laudantium aliquid non animi voluptate nobis sunt eos optio voluptatum unde sapiente, atque minus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, repellat earum ex numquam labore cumque exercitationem laudantium aliquid non animi voluptate nobis sunt eos optio voluptatum unde sapiente, atque minus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, repellat earum ex numquam labore cumque exercitationem laudantium aliquid non animi voluptate nobis sunt eos optio voluptatum unde sapiente, atque minus.</p>
      </main>
    </>
  );
}
