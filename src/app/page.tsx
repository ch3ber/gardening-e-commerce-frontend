import ProductCard from "@/components/ProuductCard";
import { getProducts } from "@/utils/getProducts";
import Link from "next/link";

export default function Home() {
  const products = getProducts();

  return (
    <>
      <header className="bg-jardin-verde-claro pb-10 text-center px-10">
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
        <section>
          <h1 className="text-3xl font-bold">Los más comprados</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
            {
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              )).slice(0, 8)
            }
          </div>
        </section>
      </main>
    </>
  );
}
