import React from "react";
import { ArrowRight } from "lucide-react";
import appleImg from "../assets/images/apple.jpg";
import pcImg from "../assets/images/pc.jpg";
import ecranImg from "../assets/images/ecran.jpg";
import uniteCentraleImg from "../assets/images/unitecentrale.jpg";
import tvImg from "../assets/images/tv.jpg";
import phoneImg from "../assets/images/phone.jpg";
import casqueImg from "../assets/images/casque.jpg";
import configurateurImg from "../assets/images/configurateur.webp";

const categories = [
  {
    id: "apple",
    title: "Apple",
    image: appleImg,
  },
  {
    id: "pc-portables",
    title: "PC portables",
    image: pcImg,
    warranty: true,
  },
  {
    id: "peripheriques",
    title: "Périphériques",
    image: ecranImg,
  },
  {
    id: "pc-ldlc",
    title: "PC LDLC",
    image: uniteCentraleImg,
    warranty: true,
  },
  {
    id: "tv",
    title: "TV",
    image: tvImg,
    warranty: true,
  },
  {
    id: "smartphones",
    title: "Smartphones",
    image: phoneImg,
    warranty: true,
  },
  {
    id: "son",
    title: "Son",
    image: casqueImg,
  },
  {
    id: "configurateur-pc",
    title: "Configurateur PC",
    image: configurateurImg,
  },
];

function CategoryCard({ category }) {
  return (
    <div className="group flex flex-col items-center rounded-2xl bg-white px-6 pt-8 pb-6 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="mb-5 text-base font-medium text-slate-600">
        {category.title}
      </h3>

      {/* Visual area */}
      <div className="relative mb-6 flex h-32 w-full items-center justify-center">
        {category.badge && (
          <div className="absolute left-0 top-0 text-left">
            <p className="flex items-center gap-1 text-sm font-semibold text-slate-800">
              {category.badge.label}
            </p>
            <p className="text-xs text-slate-500">
              {category.badge.prefix}{" "}
              <span className="text-base font-bold text-sky-600">
                {category.badge.price}
              </span>
            </p>
          </div>
        )}

        {category.warranty && (
          <div className="absolute left-0 top-0 flex h-12 w-12 flex-col items-center justify-center rounded bg-blue-900 text-center leading-none text-white shadow">
            <span className="text-[8px] font-semibold tracking-tight">
              GARANTIE
            </span>
            <span className="text-sm font-extrabold">5ANS</span>
          </div>
        )}

        <img
          src={category.image}
          alt={category.title}
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
  return (
    <section className="px-6 py-12 sm:px-10 mt-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-baseline gap-3">
          <h2 className="text-xl font-extrabold tracking-tight text-slate-800">
            UNIVERS POPULAIRES
          </h2>
          <p className="italic text-slate-400">
            Tout ce que vous aimez est là
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}