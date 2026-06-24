import React from "react";
import { ChevronRight } from "lucide-react";

import xiaomiImg from "../assets/images/xiaomi-tv-stick.jpg";
import zyxelImg from "../assets/images/zyxel-nwa50be.jpg";
import booxImg from "../assets/images/boox-tab-xc.jpg";
import lgImg from "../assets/images/lg-ultragear.jpg";
import msiImg from "../assets/images/msi-titan.jpg";
import fiioImg from "../assets/images/fiio-tt13.jpg";
import anbernicImg from "../assets/images/anbernic-rg-vita.jpg";
import denonImg from "../assets/images/denon-avr.jpg";
import ruarkImg from "../assets/images/ruark-audio.jpg";
import museImg from "../assets/images/muse-m1988.jpg";
import xrealImg from "../assets/images/xreal-one-pro.jpg";
import epsonImg from "../assets/images/epson-xp980.jpg";

const products = [
  { id: 1, name: "Xiaomi TV Stick HD 2nd Gen", image: xiaomiImg },
  { id: 2, name: "ZyXEL NWA50BE PRO", image: zyxelImg },
  { id: 3, name: "Boox Tab XC", image: booxImg },
  { id: 4, name: 'LG 51.6" LED - UltraGear 52G930B-B', image: lgImg },
  {id: 5,name: "MSI Titan 18 HX Dragon Edition Draco Epic A2WJ-",image: msiImg},
  { id: 6, name: "FiiO TT13 BT Argent", image: fiioImg },
  { id: 7, name: "Anbernic RG vita Pro 128 GB (Noir)", image: anbernicImg },
  { id: 8, name: "Denon AVR-X2900H DAB", image: denonImg },
  { id: 9, name: "Ruark Audio R410 Mid Grey", image: ruarkImg },
  { id: 10, name: "Muse M-1988 DJ", image: museImg },
  { id: 11, name: "XREAL One Pro (M)", image: xrealImg },
  { id: 12, name: "Epson Expression Photo XP-980", image: epsonImg },
];

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