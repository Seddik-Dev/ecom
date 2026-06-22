import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  ChevronRight,
  ShoppingBag,
  Sparkles,
  Tag,
} from "lucide-react";
import image1 from "../assets/images/image1.webp";
import image2 from "../assets/images/image2.webp";
import image3 from "../assets/images/image3.webp";
import SecondeSection from "./SecondeSection";

const slides = [
  {
    id: "offre-du-jour",
    label: "L'offre du jour",
    discount: "-6%",
    title: "sur le",
    subtitle: "produit le plus cher du panier",
    code: "JOIE",
    note: "*Cliquez pour voir les conditions",
    bg: "bg-pink-300",
    image: image1,
  },
  {
    id: "reprise",
    label: "Demandez une reprise",
    discount: "Jusqu'à 150€",
    title: "de bonus",
    subtitle: "pour la reprise de votre ancien appareil",
    code: "REPRISE",
    note: "*Voir les modalités de reprise",
    bg: "bg-amber-200",
    image: image2,
  },
  {
    id: "foot",
    label: "Opération mondial de foot",
    discount: "-10%",
    title: "sur la",
    subtitle: "sélection téléviseurs et son",
    code: "FOOT24",
    note: "*Offre valable sur une sélection de produits",
    bg: "bg-emerald-300",
    image: image3,
  },
];

function Home() {
  const [activeId, setActiveId] = useState(slides[0].id);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveId((currentId) => {
        const currentIndex = slides.findIndex(
          (slide) => slide.id === currentId,
        );

        const nextIndex = (currentIndex + 1) % slides.length;

        return slides[nextIndex].id;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section
      className="container mx-auto w-full  p-4 sm:p-6"
      aria-label="Promotional hero"
    >
      <div className="overflow-hidden rounded-2xl bg-white shadow-xl shadow-slate-300/40 ring-1 ring-slate-200/70">
        {/* Hero content */}
        <div className="flex min-h-[560px] flex-col overflow-hidden lg:h-[520px] lg:min-h-0 lg:flex-row">
          {/* Left text panel */}
          <div className="relative z-10 flex w-full flex-shrink-0 flex-col justify-center bg-gradient-to-br from-white via-white to-slate-50 px-6 py-10 sm:px-10 sm:py-12 lg:w-[42%] lg:px-12">
            <div className="pointer-events-none absolute -left-16 top-8 h-40 w-40 rounded-full bg-sky-400/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-6 right-4 h-28 w-28 rounded-full bg-slate-900/5 blur-2xl" />

            <div className="relative min-h-[320px] sm:min-h-[300px] lg:min-h-[340px]">
              {slides.map((slide) => {
                const isActive = activeId === slide.id;

                return (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-out ${
                      isActive
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-4 opacity-0"
                    }`}
                    aria-hidden={!isActive}
                  >
                    <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-sky-500/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-sky-700 ring-1 ring-sky-500/20 sm:text-xs">
                      <Sparkles size={12} className="shrink-0" />
                      {slide.label}
                    </span>

                    <p className="mt-5 text-5xl font-extrabold leading-none tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                      {slide.discount}
                      <sup className="align-top text-xl text-slate-400 sm:text-2xl">
                        *
                      </sup>
                    </p>

                    <p className="mt-5 text-base text-slate-600 sm:text-lg">
                      {slide.title}
                    </p>
                    <p className="mt-1 text-lg font-bold text-slate-900 sm:text-xl">
                      {slide.subtitle}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                      <button
                        type="button"
                        className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/25 active:translate-y-0 sm:px-6 sm:py-3.5"
                      >
                        <ShoppingBag
                          size={16}
                          className="transition-transform duration-300 group-hover:scale-110"
                        />
                        Shop Now
                      </button>

                      <button
                        type="button"
                        className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md active:translate-y-0 sm:px-6 sm:py-3.5"
                      >
                        Explore Collection
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </button>
                    </div>

                    <button
                      type="button"
                      className="group mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-800 ring-1 ring-slate-200/80 transition-all duration-300 hover:bg-slate-900 hover:text-white hover:ring-slate-900"
                    >
                      <Tag
                        size={14}
                        className="text-slate-500 transition-colors duration-300 group-hover:text-sky-300"
                      />
                      avec le code :
                      <span className="font-extrabold tracking-wide">
                        {slide.code}
                      </span>
                      <ChevronRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </button>

                    <p className="mt-3 text-xs leading-relaxed text-slate-500">
                      {slide.note}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right image panel */}
          <div className="relative min-h-[280px] flex-1 overflow-hidden sm:min-h-[320px] lg:min-h-0">
            {slides.map((slide) => {
              const isActive = activeId === slide.id;

              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden={!isActive}
                >
                  <div
                    className={`absolute inset-0 ${slide.bg} transition-colors duration-500`}
                  />
                  <div className="pointer-events-none absolute -right-10 top-10 h-48 w-48 rounded-full bg-white/30 blur-3xl" />
                  <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black/25 via-black/5 to-transparent lg:bg-gradient-to-l lg:from-white/40 lg:via-transparent lg:to-transparent" />

                  <img
                    src={slide.image}
                    alt={slide.label}
                    className={`h-full w-full object-cover transition-transform duration-700 ease-out ${
                      isActive ? "scale-100" : "scale-105"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Tabs */}
        <div
          className="flex border-t border-slate-100 bg-slate-50/90"
          role="tablist"
          aria-label="Promotional offers"
        >
          {slides.map((slide) => {
            const isActive = activeId === slide.id;

            return (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(slide.id)}
                className={`relative flex-1 px-3 py-4 text-[10px] font-semibold uppercase tracking-wide transition-all duration-300 sm:px-4 sm:py-5 sm:text-xs ${
                  isActive
                    ? "bg-white text-slate-900 shadow-[inset_0_1px_0_0_rgba(255,255,255,1)]"
                    : "text-slate-500 hover:bg-white/70 hover:text-slate-800"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600" />
                )}
                <span className="relative block leading-snug">
                  {slide.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <SecondeSection/>
    </section>
  );
}

export default Home;
