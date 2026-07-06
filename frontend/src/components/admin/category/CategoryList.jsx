import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../../services/Admin/categoryApi";
import {
  ChevronDown,
  Plus,
  SquarePen,
  MoreVertical,
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllCategories();

        if (response.success) {
          setCategories(response.data);
        }
      } catch (err) {
        console.error(err);
        setError("Failed to fetch categories.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const perPage = 7;
  const filtered = categories.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()),
  );
  const TOTAL_ENTRIES = filtered.length;
  const totalPages = Math.max(1, Math.ceil(TOTAL_ENTRIES / perPage));

  const toggleSelectAll = () => {
    setSelected(
      selected.length === filtered.length ? [] : filtered.map((c) => c.id),
    );
  };

  const toggleSelectOne = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const start = TOTAL_ENTRIES === 0 ? 0 : (page - 1) * perPage + 1;
  const end = TOTAL_ENTRIES === 0 ? 0 : Math.min(page * perPage, TOTAL_ENTRIES);

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        {/* Header: search + per-page + add */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 px-6 py-5">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Category"
            className="w-full sm:w-64 px-3 py-2.5 rounded-lg border border-gray-200 text-sm outline-none placeholder:text-gray-400 focus:border-violet-400 transition-colors"
          />
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1 px-3 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-600">
              {perPage} <ChevronDown size={14} />
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-violet-500 text-white text-sm font-medium hover:bg-violet-600 transition-colors">
              <Plus size={16} /> Add Category
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
                    checked={
                      selected.length === filtered.length && filtered.length > 0
                    }
                    onChange={toggleSelectAll}
                    className="accent-violet-500 w-4 h-4"
                  />
                </th>
                <th className="px-3 py-3">Categories</th>
                <th className="px-3 py-3 text-right">Total Products</th>
                <th className="px-3 py-3 text-right">Total Earning</th>
                <th className="px-3 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-sm text-gray-400">
                    Loading categories...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-sm text-red-500">
                    {error}
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-sm text-gray-400">
                    No categories found.
                  </td>
                </tr>
              ) : (
                filtered.map((c) => (
                <tr
                  key={c.id}
                  className="border-b border-gray-100 hover:bg-gray-50/60 transition-colors"
                >
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selected.includes(c.id)}
                      onChange={() => toggleSelectOne(c.id)}
                      className="accent-violet-500 w-4 h-4"
                    />
                  </td>
                  <td className="px-3 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={c.image}
                        alt={c.name}
                        className="w-10 h-10 rounded-lg object-cover bg-gray-100"
                      />
                      <div className="min-w-0">
                        <p className="font-medium text-gray-800 truncate">
                          {c.name}
                        </p>
                        <p className="text-xs text-gray-400 truncate max-w-[360px]">
                          {c.desc}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-4 text-right text-gray-600">
                    {c.totalProducts}
                  </td>
                  <td className="px-3 py-4 text-right text-gray-600">
                    {c.totalEarning}
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
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer: entries + pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4">
          <p className="text-sm text-gray-400">
            Showing {start} to {end} of {TOTAL_ENTRIES} entries
          </p>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setPage(1)}
              disabled={page === 1}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronsLeft size={15} />
            </button>
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={15} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                  page === n
                    ? "bg-violet-500 text-white"
                    : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages || TOTAL_ENTRIES === 0}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronRight size={15} />
            </button>
            <button
              onClick={() => setPage(totalPages)}
              disabled={page === totalPages || TOTAL_ENTRIES === 0}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronsRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
