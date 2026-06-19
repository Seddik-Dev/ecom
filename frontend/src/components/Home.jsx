import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import image1 from "../assets/images/image1.webp";
import image2 from "../assets/images/image2.webp";

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
    image: "https://placehold.co/900x520/6ee7b7/1e293b?text=Mondial+de+foot",
  },
  {
    id: "lego",
    label: "Offre Lego Logitech G",
    discount: "Cadeau",
    title: "offert",
    subtitle: "pour l'achat d'un clavier ou souris Logitech G",
    code: "LEGOG",
    note: "*Dans la limite des stocks disponibles",
    bg: "bg-yellow-300",
    image: "https://placehold.co/900x520/fde047/1e293b?text=Lego+x+Logitech",
  },
  {
    id: "rtx",
    label: "Asus RTX Série 50",
    discount: "-8%",
    title: "sur les",
    subtitle: "PC portables Asus RTX série 50",
    code: "RTX50",
    note: "*Voir les conditions de l'offre",
    bg: "bg-sky-300",
    image: "https://placehold.co/900x520/7dd3fc/1e293b?text=Asus+RTX+50",
  },
  {
    id: "pc-ldlc",
    label: "PC LDLC",
    discount: "-5%",
    title: "sur les",
    subtitle: "configurations PC LDLC",
    code: "PCLDLC",
    note: "*Hors composants en promotion",
    bg: "bg-indigo-300",
    image: "https://placehold.co/900x520/a5b4fc/1e293b?text=PC+LDLC",
  },
];
function Home() {
  const [activeId, setActiveId] = useState(slides[0].id);
  const active = slides.find((s) => s.id === activeId);
  return (
    <div className="container w-full mx-auto bg-gray-100 p-4">
      {/* Hero content */}
      <div className="flex overflow-hidden rounded-t-lg">
        {/* Left text panel */}
        <div className="flex w-[38%] flex-shrink-0 flex-col justify-center bg-white px-10 py-12">
          <p className="text-7xl font-extrabold text-slate-900 leading-none">
            {active.discount}
            <sup className="text-2xl align-top">*</sup>
          </p>

          <p className="mt-6 text-lg text-slate-700">{active.title}</p>
          <p className="text-xl font-bold text-slate-900">{active.subtitle}</p>

          <button
            type="button"
            className="mt-6 flex w-fit items-center gap-1 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            avec le code :<span className="font-extrabold">{active.code}</span>
            <ChevronRight size={16} />
          </button>

          <p className="mt-3 text-xs text-slate-500">{active.note}</p>
        </div>

        {/* Right image panel */}
        <div className={`flex-1 ${active.bg} transition-colors duration-300`}>
          <img
            src={active.image}
            alt={active.label}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border border-t-0 border-gray-200 bg-white">
        {slides.map((slide) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setActiveId(slide.id)}
            className={`relative flex-1 px-4 py-4 text-xs font-semibold uppercase tracking-wide transition-colors ${
              activeId === slide.id
                ? "bg-sky-500 text-white"
                : "text-slate-700 hover:bg-gray-50"
            }`}
          >
            {slide.label}
            {activeId === slide.id && (
              <span className="absolute -bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 border-x-8 border-t-8 border-x-transparent border-t-sky-500" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;
