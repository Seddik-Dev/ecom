import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { getLatestProducts } from "../services/Admin/productApi";
function ProductCard({ product }) {
  return (
    <div className="flex flex-col items-center border-b border-r border-slate-200 px-4 py-6 text-center">
      <img
        src={product.image}
        alt={product.name}
        className="mb-4 h-28 w-auto object-contain"
      />
      <p className="text-sm text-slate-700">{product.name}</p>
    </div>
  );
}

export default function FourthSection() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getLatestProducts();
      console.log(data);
      setProducts(data.data);
    };
    fetchProducts();
  }, []);
  return (
    <section className="mx-auto max-w-7xl bg-white rounded-2xl">
      {/* En-tête */}
      <div className="flex items-center justify-between  gap-3 px-6 py-4 sm:px-10">
        <div className="flex flex-wrap items-baseline gap-3">
          <h2 className="text-xl font-extrabold tracking-tight text-slate-800">
            NOUVEAUTÉS
          </h2>
          <p className="italic text-slate-400">Ça sent le neuf par ici !</p>
        </div>

        <button
          type="button"
          className="flex items-center gap-1 whitespace-nowrap rounded-full bg-slate-900 px-5 py-2 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-slate-700"
        >
          Voir
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Grille produits */}
      <div className="grid grid-cols-2 overflow-hidden  border-t border-slate-200 sm:grid-cols-3 lg:grid-cols-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}