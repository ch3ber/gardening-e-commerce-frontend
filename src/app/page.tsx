import ProductCard, { Product } from "@/components/ProuductCard";
import Link from "next/link";

export default function Home() {

  const products: Product[] = [
    {
      id: "1",
      name: "Maceta Domie Clásica",
      description: "Maceta de cerámica con diseño atemporal, ideal para interiores y exteriores.",
      price: 199,
      imageUrl: "https://placehold.co/200x160.svg?text=Maceta+1",
      detailsUrl: "/productos/1",
      buyUrl: "/comprar/1",
    },
    {
      id: "2",
      name: "Maceta Domie Moderna",
      description: "Diseño minimalista que se adapta a ambientes modernos.",
      price: 249,
      imageUrl: "https://placehold.co/200x160.svg?text=Maceta+2",
      detailsUrl: "/productos/2",
      buyUrl: "/comprar/2",
    },
    {
      id: "3",
      name: "Herramienta Domie Multiusos",
      description: "Herramienta versátil para diversas tareas de jardinería.",
      price: 99,
      imageUrl: "https://placehold.co/200x160.svg?text=Herramienta+3",
      detailsUrl: "/productos/3",
      buyUrl: "/comprar/3",
    },
    {
      id: "4",
      name: "Set de Jardinería Domie",
      description: "Conjunto completo con herramientas y accesorios para el cuidado de tus plantas.",
      price: 349,
      imageUrl: "https://placehold.co/200x160.svg?text=Set+de+Jardiner%C3%ADa+4",
      detailsUrl: "/productos/4",
      buyUrl: "/comprar/4",
    },
    {
      id: "5",
      name: "Regadera Domie",
      description: "Regadera ergonómica para un riego preciso y cómodo.",
      price: 129,
      imageUrl: "https://placehold.co/200x160.svg?text=Regadera+5",
      detailsUrl: "/productos/5",
      buyUrl: "/comprar/5",
    },
    {
      id: "6",
      name: "Jardín Vertical Domie",
      description: "Sistema modular para crear jardines verticales en espacios reducidos.",
      price: 499,
      imageUrl: "https://placehold.co/200x160.svg?text=Jard%C3%ADn+Vertical+6",
      detailsUrl: "/productos/6",
      buyUrl: "/comprar/6",
    },
    {
      id: "7",
      name: "Maceta Domie Eco",
      description: "Fabricada con materiales reciclados para un jardín sostenible.",
      price: 179,
      imageUrl: "https://placehold.co/200x160.svg?text=Maceta+7",
      detailsUrl: "/productos/7",
      buyUrl: "/comprar/7",
    },
    {
      id: "8",
      name: "Kit de Huerto Domie",
      description: "Todo lo que necesitas para iniciar tu propio huerto en casa.",
      price: 399,
      imageUrl: "https://placehold.co/200x160.svg?text=Kit+de+Huerto+8",
      detailsUrl: "/productos/8",
      buyUrl: "/comprar/8",
    },
    {
      id: "9",
      name: "Iluminación LED Domie para Jardín",
      description: "Luces LED de bajo consumo para resaltar la belleza de tu jardín.",
      price: 159,
      imageUrl: "https://placehold.co/200x160.svg?text=Iluminaci%C3%B3n+9",
      detailsUrl: "/productos/9",
      buyUrl: "/comprar/9",
    },
    {
      id: "10",
      name: "Banco de Jardín Domie",
      description: "Banco elegante y resistente, perfecto para descansar en tu jardín.",
      price: 799,
      imageUrl: "https://placehold.co/200x160.svg?text=Banco+10",
      detailsUrl: "/productos/10",
      buyUrl: "/comprar/10",
    },
  ];

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
              ))
            }
          </div>
        </section>
      </main>
    </>
  );
}
