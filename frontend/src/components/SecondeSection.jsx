import React from "react";
import {
  ArrowRight,
  Laptop,
  Monitor,
  Cpu,
  Tv,
  Smartphone,
  Headphones,
  MemoryStick,
} from "lucide-react";

// Update these paths to point at your own product images.
// Each card expects a square-ish image; swap `image` for a real <img src="...">
// or keep the icon fallback below if no image is provided.
const categories = [
  {
    id: "apple",
    title: "Apple",
    image: "/images/categories/macbook-neo.png",
    badge: { label: "MacBook Neo", price: "699€", prefix: "À partir de" },
    icon: Laptop,
  },
  {
    id: "pc-portables",
    title: "PC portables",
    image: "/images/categories/pc-portables.png",
    warranty: true,
    icon: Laptop,
  },
  {
    id: "peripheriques",
    title: "Périphériques",
    image: "/images/categories/peripheriques.png",
    icon: Monitor,
  },
  {
    id: "pc-ldlc",
    title: "PC LDLC",
    image: "/images/categories/pc-ldlc.png",
    warranty: true,
    icon: Cpu,
  },
  {
    id: "tv",
    title: "TV",
    image: "/images/categories/tv.png",
    warranty: true,
    icon: Tv,
  },
  {
    id: "smartphones",
    title: "Smartphones",
    image: "/images/categories/smartphones.png",
    warranty: true,
    icon: Smartphone,
  },
  {
    id: "son",
    title: "Son",
    image: "/images/categories/son.png",
    icon: Headphones,
  },
  {
    id: "configurateur-pc",
    title: "Configurateur PC",
    image: "/images/categories/configurateur-pc.png",
    icon: MemoryStick,
  },
];

function CategoryCard({ category }) {
  const Icon = category.icon;

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
              <span className="text-base"></span>
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

        {category.image ? (
          <img
            src={category.image}
            alt={category.title}
            className="h-full w-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextSibling.style.display = "flex";
            }}
          />
        ) : null}

        {/* Fallback icon, shown if no image / image fails to load */}
        <div
          className="hidden h-full w-full items-center justify-center text-slate-300"
          style={{ display: category.image ? "none" : "flex" }}
        >
          <Icon className="h-16 w-16" strokeWidth={1.25} />
        </div>
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