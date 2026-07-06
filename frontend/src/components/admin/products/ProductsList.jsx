import React, { useState } from "react";
import {
  Home, Laptop, Gift, Wallet, ChevronDown, Search, Upload, Plus,
  SquarePen, MoreVertical, Footprints, Smartphone, Watch
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  DONNEES (a remplacer par les vraies donnees / API)                 */
/* ------------------------------------------------------------------ */
const STATS = [
  { label: "In-store Sales", value: "$5,345.43", meta: "5k orders", badge: "+5.7%", badgeType: "up", icon: Home },
  { label: "Website Sales", value: "$674,347.12", meta: "21k orders", badge: "+12.4%", badgeType: "up", icon: Laptop },
  { label: "Discount", value: "$14,235.12", meta: "6k orders", icon: Gift },
  { label: "Affiliate", value: "$8,345.23", meta: "150 orders", badge: "-3.5%", badgeType: "down", icon: Wallet },
];

const CATEGORY_STYLES = {
  Shoes: { icon: Footprints, bg: "bg-green-100", text: "text-green-600" },
  Electronics: { icon: Smartphone, bg: "bg-red-100", text: "text-red-500" },
  Accessories: { icon: Watch, bg: "bg-gray-100", text: "text-gray-500" },
};

const STATUS_STYLES = {
  Inactive: "bg-red-100 text-red-500",
  Scheduled: "bg-amber-100 text-amber-600",
  Publish: "bg-green-100 text-green-600",
};

const PRODUCTS = [
  {
    id: 1,
    name: "Air Jordan",
    desc: "Air Jordan is a line of basketball shoes produced by Nike",
    image: "https://picsum.photos/seed/airjordan/64",
    category: "Shoes",
    inStock: false,
    sku: 31063,
    price: "$125",
    qty: 942,
    status: "Inactive",
  },
  {
    id: 2,
    name: "Amazon Fire TV",
    desc: "4K UHD smart TV, stream live TV without cable",
    image: "https://picsum.photos/seed/firetv/64",
    category: "Electronics",
    inStock: false,
    sku: 5829,
    price: "$263.49",
    qty: 587,
    status: "Scheduled",
  },
  {
    id: 3,
    name: "Apple iPad",
    desc: "10.2-inch Retina Display, 64GB",
    image: "https://picsum.photos/seed/ipad/64",
    category: "Electronics",
    inStock: true,
    sku: 35946,
    price: "$248.39",
    qty: 468,
    status: "Publish",
  },
  {
    id: 4,
    name: "Apple Watch Series 7",
    desc: "Starlight Aluminum Case with Starlight Sport Band.",
    image: "https://picsum.photos/seed/watch7/64",
    category: "Accessories",
    inStock: false,
    sku: 46658,
    price: "$799",
    qty: 851,
    status: "Scheduled",
  },
  {
    id: 5,
    name: "BANGE Anti Theft Backpack",
    desc: "Smart Business Laptop Fits 15.6 Inch Notebook",
    image: "https://picsum.photos/seed/backpack/64",
    category: "Accessories",
    inStock: true,
    sku: 41867,
    price: "$79.99",
    qty: 519,
    status: "Inactive",
  },
  {
    id: 6,
    name: "Canon EOS Rebel T7",
    desc: "18-55mm Lens | Built-in Wi-Fi | 24.1 MP CMOS Sensor",
    image: "https://picsum.photos/seed/canon/64",
    category: "Electronics",
    inStock: true,
    sku: 63474,
    price: "$399",
    qty: 810,
    status: "Scheduled",
  },
  {
    id: 7,
    name: "Robusta Wall Clock",
    desc: "Minimalist wooden wall clock for home decor",
    image: "https://picsum.photos/seed/clock/64",
    category: "Accessories",
    inStock: false,
    sku: 52011,
    price: "$45",
    qty: 231,
    status: "Publish",
  },
];

/* ------------------------------------------------------------------ */
/*  PETITS COMPOSANTS                                                  */
/* ------------------------------------------------------------------ */
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

function Toggle({ checked, onChange }) {
  return (
    <button
      onClick={onChange}
      className={`relative w-9 h-5 rounded-full transition-colors shrink-0 ${
        checked ? "bg-violet-500" : "bg-gray-200"
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
          checked ? "translate-x-4" : "translate-x-0"
        }`}
      />
    </button>
  );
}

function Select({ placeholder }) {
  return (
    <button className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-400 hover:border-gray-300 transition-colors">
      {placeholder}
      <ChevronDown size={16} className="text-gray-400" />
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                                */
/* ------------------------------------------------------------------ */
export default function ProductsList() {
  const [products, setProducts] = useState(PRODUCTS);
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");

  const toggleStock = (id) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, inStock: !p.inStock } : p))
    );
  };

  const toggleSelectAll = () => {
    setSelected(selected.length === products.length ? [] : products.map((p) => p.id));
  };

  const toggleSelectOne = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen p-6 space-y-6">
      {/* Stats */}
      <div className="bg-white rounded-2xl border border-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
        {STATS.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      {/* Filters + table */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="px-6 pt-6 pb-2">
          <h2 className="text-base font-semibold text-gray-800">Filter</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-6 py-4">
          <Select placeholder="Status" />
          <Select placeholder="Category" />
          <Select placeholder="Stock" />
        </div>

        <div className="border-t border-gray-100" />

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 px-6 py-4">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Product"
            className="w-full sm:w-64 px-3 py-2.5 rounded-lg border border-gray-200 text-sm outline-none placeholder:text-gray-400 focus:border-violet-400 transition-colors"
          />
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1 px-3 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-600">
              7 <ChevronDown size={14} />
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
              <Upload size={15} /> Export
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-violet-500 text-white text-sm font-medium hover:bg-violet-600 transition-colors">
              <Plus size={16} /> Add Product
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-t border-b border-gray-100 text-left text-xs font-semibold text-gray-400 uppercase tracking-wide">
                <th className="px-6 py-3 w-10">
                  <input
                    type="checkbox"
                    checked={selected.length === products.length}
                    onChange={toggleSelectAll}
                    className="accent-violet-500 w-4 h-4"
                  />
                </th>
                <th className="px-3 py-3">Product</th>
                <th className="px-3 py-3">Category</th>
                <th className="px-3 py-3">Stock</th>
                <th className="px-3 py-3">SKU</th>
                <th className="px-3 py-3">Price</th>
                <th className="px-3 py-3">Qty</th>
                <th className="px-3 py-3">Status</th>
                <th className="px-3 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => {
                const cat = CATEGORY_STYLES[p.category];
                const CatIcon = cat.icon;
                return (
                  <tr key={p.id} className="border-b border-gray-100 hover:bg-gray-50/60 transition-colors">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selected.includes(p.id)}
                        onChange={() => toggleSelectOne(p.id)}
                        className="accent-violet-500 w-4 h-4"
                      />
                    </td>
                    <td className="px-3 py-4">
                      <div className="flex items-center gap-3">
                        <img src={p.image} alt={p.name} className="w-10 h-10 rounded-lg object-cover bg-gray-100" />
                        <div className="min-w-0">
                          <p className="font-medium text-gray-800 truncate">{p.name}</p>
                          <p className="text-xs text-gray-400 truncate max-w-[240px]">{p.desc}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-4">
                      <div className="flex items-center gap-2">
                        <span className={`w-7 h-7 rounded-full flex items-center justify-center ${cat.bg} ${cat.text}`}>
                          <CatIcon size={14} />
                        </span>
                        <span className="text-gray-600">{p.category}</span>
                      </div>
                    </td>
                    <td className="px-3 py-4">
                      <Toggle checked={p.inStock} onChange={() => toggleStock(p.id)} />
                    </td>
                    <td className="px-3 py-4 text-gray-500">{p.sku}</td>
                    <td className="px-3 py-4 text-gray-700">{p.price}</td>
                    <td className="px-3 py-4 text-gray-500">{p.qty}</td>
                    <td className="px-3 py-4">
                      <span className={`text-xs font-medium rounded-md px-2 py-1 ${STATUS_STYLES[p.status]}`}>
                        {p.status}
                      </span>
                    </td>
                    <td className="px-3 py-4">
                      <div className="flex items-center gap-1 text-gray-400">
                        <button className="p-1.5 rounded hover:bg-gray-100 hover:text-violet-500 transition-colors">
                          <SquarePen size={16} />
                        </button>
                        <button className="p-1.5 rounded hover:bg-gray-100 transition-colors">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}