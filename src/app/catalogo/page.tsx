import ProductCard from "@/components/ProuductCard";
import { getProducts } from "@/utils/getProducts";

export default function Catalogo() {
  const products = getProducts();

  return (
    <>
      <article>
        <input type="search" name="" id="" />

      </article>
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
              ))
            }
          </div>
        </section>
      </main>
    </>
  );
}