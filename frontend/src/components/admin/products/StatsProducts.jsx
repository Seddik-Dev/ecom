import React from "react";
import { Home, Laptop, Gift, Wallet } from "lucide-react";

const STATS = [
  {
    label: "In-store Sales",
    value: "$5,345.43",
    meta: "5k orders",
    badge: "+5.7%",
    badgeType: "up",
    icon: Home,
  },
  {
    label: "Website Sales",
    value: "$674,347.12",
    meta: "21k orders",
    badge: "+12.4%",
    badgeType: "up",
    icon: Laptop,
  },
  { label: "Discount", value: "$14,235.12", meta: "6k orders", icon: Gift },
  {
    label: "Affiliate",
    value: "$8,345.23",
    meta: "150 orders",
    badge: "-3.5%",
    badgeType: "down",
    icon: Wallet,
  },
];

function StatCard({ label, value, meta, badge, badgeType, icon: Icon }) {
  return (
    <div className="flex items-center justify-between px-6 py-5">
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-2xl font-semibold text-gray-800 mt-1">{value}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm text-gray-400">{meta}</span>
          {badge && (
            <span
              className={`text-xs font-medium rounded px-1.5 py-0.5 ${
                badgeType === "up"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-500"
              }`}
            >
              {badge}
            </span>
          )}
        </div>
      </div>
      <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 shrink-0">
        <Icon size={20} />
      </div>
    </div>
  );
}

/**
 * StatsProducts
 * Affiche la grille de cartes statistiques en haut du dashboard produits.
 * @param {Array} stats - optionnel, permet d'override les données par défaut (STATS)
 */
export default function StatsProducts({ stats = STATS }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
      {stats.map((s) => (
        <StatCard key={s.label} {...s} />
      ))}
    </div>
  );
}
