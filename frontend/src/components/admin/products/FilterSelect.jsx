import React from "react";
import { ChevronDown, Upload, Plus } from "lucide-react";

function Select({ placeholder }) {
  return (
    <button className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-400 hover:border-gray-300 transition-colors">
      {placeholder}
      <ChevronDown size={16} className="text-gray-400" />
    </button>
  );
}

/**
 * Props:
 * - search: valeur actuelle de la recherche
 * - onSearchChange: (value) => void
 * - onAddProduct: () => void (optionnel)
 * - onExport: () => void (optionnel)
 */
export default function FilterSelect({
  search,
  onSearchChange,
  onAddProduct,
  onExport,
}) {
  return (
    <>
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
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search Product"
          className="w-full sm:w-64 px-3 py-2.5 rounded-lg border border-gray-200 text-sm outline-none placeholder:text-gray-400 focus:border-violet-400 transition-colors"
        />
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 px-3 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-600">
            7 <ChevronDown size={14} />
          </button>
          <button
            onClick={onExport}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <Upload size={15} /> Export
          </button>
          <button
            onClick={onAddProduct}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-violet-500 text-white text-sm font-medium hover:bg-violet-600 transition-colors"
          >
            <Plus size={16} /> Add Product
          </button>
        </div>
      </div>
    </>
  );
}
