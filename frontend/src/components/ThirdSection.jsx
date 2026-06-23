import React from "react";
import { ChevronRight } from "lucide-react";

import secondeVieImg from "../assets/images/seconde-vie.jpg";
import gamingImg from "../assets/images/gaming.webp";
import createursImg from "../assets/images/creation.webp";
import legoImg from "../assets/images/gadgets.webp";

const cards = {
  secondeVie: {
    title: "Seconde vie",
    image: secondeVieImg,
    bg: "bg-sky-300",
  },
  gaming: {
    title: "Gaming",
    image: gamingImg,
    bg: "bg-purple-400",
  },
  createurs: {
    title: "Nos créateurs",
    image: createursImg,
    bg: "bg-sky-300",
  },
  lego: {
    title: "Gadgets",
    image: legoImg,
    bg: "bg-rose-400",
  },
};

function DiscoverCard({ card, className = "" }) {
  return (
    <div
      className={`relative isolate min-h-[220px] overflow-hidden rounded-2xl ${card.bg} ${className}`}
    >
      <img
        src={card.image}
        alt={card.title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* léger voile pour garder le texte lisible sur toutes les images */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent" />

      <div className="absolute left-6 top-6 z-10">
        <h3 className="mb-3 text-2xl font-bold text-white drop-shadow-sm">
          {card.title}
        </h3>
        <button
          type="button"
          className="flex items-center gap-1 rounded-full bg-slate-900 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-slate-700"
        >
          Voir
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

export default function Thirdsection() {
  return (
    <section className="px-6 py-12 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-baseline gap-3">
          <h2 className="text-xl font-extrabold tracking-tight text-slate-800">
            À DÉCOUVRIR
          </h2>
          <p className="italic text-slate-400">
            Conseils, inspirations, innovations
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:h-[640px]">
          {/* Colonne 1 : Seconde vie (grand) + Escapades connectées */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <DiscoverCard card={cards.secondeVie} className="flex-[1.5]" />
          </div>

          {/* Colonnes 2-3 : Gaming + Nos créateurs en haut, LEGO en bas */}
          <div className="flex flex-col gap-5 lg:col-span-2">
            <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2">
              <DiscoverCard card={cards.gaming} />
              <DiscoverCard card={cards.createurs} />
            </div>
            <DiscoverCard card={cards.lego} className="flex-[1.5]" />
          </div>
        </div>
      </div>
    </section>
  );
}