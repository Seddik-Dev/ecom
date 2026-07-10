import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import {getPopularCategories } from "../services/Admin/categoryApi";

function CategoryCard({ category }) {
  return (
    <div className="group flex flex-col items-center rounded-2xl bg-white px-6 pt-8 pb-6 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="mb-5 text-base font-medium text-slate-600">
        {category.name}
      </h3>

      <div className="relative mb-6 flex h-32 w-full items-center justify-center">
        {category.badge && (
          <div className="absolute left-0 top-0 text-left">
            <p className="flex items-center gap-1 text-sm font-semibold text-slate-800">
              {category.status}
            </p>
            <p className="text-xs text-slate-500">
              {category.description}
            </p>
          </div>
        )}

        <img
          src={category.image}
          alt={category.name}
          className="h-full w-auto object-contain"
        />
      </div>

      <button
        type="button"
        aria-label={`Voir la catégorie ${category.title}`}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white transition-colors group-hover:bg-sky-600"
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

export default function SecondeSection() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getPopularCategories();
        setCategories(data.data);
      } catch (error) {
        console.error("Erreur lors du chargement des catégories :", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="mt-10 px-6 py-12 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-baseline gap-3">
          <h2 className="text-xl font-extrabold tracking-tight text-slate-800">
            UNIVERS POPULAIRES
          </h2>
          <p className="italic text-slate-400">Tout ce que vous aimez est là</p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.length > 0 ? (
            categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              Aucune catégorie trouvée.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
