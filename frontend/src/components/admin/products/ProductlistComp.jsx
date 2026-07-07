import React, { useEffect, useState } from "react";
import {
  SquarePen,
  MoreVertical,
  Footprints,
  Smartphone,
  Watch,
  Package,
} from "lucide-react";
import { StatusBadge } from "../../ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  getPaginationRange,
} from "../../ui/pagination";

const CATEGORY_STYLES = {
  Shoes: { icon: Footprints, bg: "bg-emerald-100", text: "text-emerald-600" },
  Electronics: { icon: Smartphone, bg: "bg-rose-100", text: "text-rose-500" },
  Accessories: { icon: Watch, bg: "bg-slate-100", text: "text-slate-500" },
};

const CATEGORY_FALLBACK = [
  { icon: Footprints, bg: "bg-emerald-100", text: "text-emerald-600" },
  { icon: Smartphone, bg: "bg-rose-100", text: "text-rose-500" },
  { icon: Watch, bg: "bg-violet-100", text: "text-violet-500" },
  { icon: Package, bg: "bg-amber-100", text: "text-amber-600" },
];

function getCategoryStyle(category) {
  if (CATEGORY_STYLES[category]) return CATEGORY_STYLES[category];

  const index =
    category.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0) %
    CATEGORY_FALLBACK.length;

  return CATEGORY_FALLBACK[index];
}

function StockToggle({ checked, onChange }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={onChange}
      className={`relative h-5 w-9 shrink-0 rounded-full transition-colors ${
        checked ? "bg-violet-500" : "bg-gray-200"
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${
          checked ? "translate-x-4" : "translate-x-0"
        }`}
      />
    </button>
  );
}

export default function ProductlistComp({
  products,
  selected,
  onToggleSelectAll,
  onToggleSelectOne,
  onToggleStock,
  perPage = 7,
}) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [products]);

  const totalEntries = products.length;
  const totalPages = Math.max(1, Math.ceil(totalEntries / perPage));
  const currentPage = Math.min(page, totalPages);
  const paginatedProducts = products.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage,
  );
  const start = totalEntries === 0 ? 0 : (currentPage - 1) * perPage + 1;
  const end =
    totalEntries === 0 ? 0 : Math.min(currentPage * perPage, totalEntries);
  const pageNumbers = getPaginationRange(currentPage, totalPages);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-t border-b border-gray-100 text-left text-xs font-semibold uppercase tracking-wide text-gray-400">
              <th className="w-10 px-6 py-3">
                <input
                  type="checkbox"
                  checked={
                    paginatedProducts.length > 0 &&
                    paginatedProducts.every((product) =>
                      selected.includes(product.id),
                    )
                  }
                  onChange={() =>
                    onToggleSelectAll(paginatedProducts.map((product) => product.id))
                  }
                  className="h-4 w-4 accent-violet-500"
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
            {paginatedProducts.length === 0 ? (
              <tr>
                <td
                  colSpan={9}
                  className="px-6 py-12 text-center text-sm text-gray-400"
                >
                  No products found.
                </td>
              </tr>
            ) : (
              paginatedProducts.map((product) => {
                const categoryStyle = getCategoryStyle(product.category);
                const CategoryIcon = categoryStyle.icon;
                const inStock = Boolean(Number(product.inStock));

                return (
                  <tr
                    key={product.id}
                    className="border-b border-gray-100 transition-colors hover:bg-gray-50/60"
                  >
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selected.includes(product.id)}
                        onChange={() => onToggleSelectOne(product.id)}
                        className="h-4 w-4 accent-violet-500"
                      />
                    </td>
                    <td className="px-3 py-4">
                      <div className="flex min-w-[220px] items-center gap-3">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-10 w-10 rounded-lg bg-gray-100 object-cover"
                          />
                        ) : (
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 text-xs font-semibold text-violet-500">
                            {product.name?.charAt(0)?.toUpperCase()}
                          </div>
                        )}
                        <div className="min-w-0">
                          <p className="truncate font-medium text-gray-800">
                            {product.name}
                          </p>
                          <p className="max-w-[240px] truncate text-xs text-gray-400">
                            {product.desc}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-4">
                      <div className="flex items-center gap-2">
                        <span
                          className={`flex h-7 w-7 items-center justify-center rounded-full ${categoryStyle.bg} ${categoryStyle.text}`}
                        >
                          <CategoryIcon size={14} />
                        </span>
                        <span className="text-gray-600">{product.category}</span>
                      </div>
                    </td>
                    <td className="px-3 py-4">
                      <StockToggle
                        checked={inStock}
                        onChange={() => onToggleStock(product.id)}
                      />
                    </td>
                    <td className="px-3 py-4 text-gray-500">{product.sku}</td>
                    <td className="px-3 py-4 font-medium text-gray-700">
                      {product.price?.toString().startsWith("$")
                        ? product.price
                        : `$${product.price}`}
                    </td>
                    <td className="px-3 py-4 text-gray-500">{product.qty}</td>
                    <td className="px-3 py-4">
                      <StatusBadge status={product.status} />
                    </td>
                    <td className="px-3 py-4">
                      <div className="flex items-center gap-1 text-gray-400">
                        <button
                          type="button"
                          className="rounded p-1.5 transition-colors hover:bg-gray-100 hover:text-violet-500"
                        >
                          <SquarePen size={16} />
                        </button>
                        <button
                          type="button"
                          className="rounded p-1.5 transition-colors hover:bg-gray-100"
                        >
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col items-center justify-between gap-3 border-t border-gray-100 px-6 py-4 sm:flex-row">
        <p className="text-sm text-gray-400">
          Showing {start} to {end} of {totalEntries} entries
        </p>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationFirst
                disabled={currentPage === 1 || totalEntries === 0}
                onClick={() => setPage(1)}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationPrevious
                disabled={currentPage === 1 || totalEntries === 0}
                onClick={() => setPage((prev) => Math.max(1, prev - 1))}
              />
            </PaginationItem>

            {pageNumbers.map((pageNumber, index) =>
              pageNumber === "ellipsis" ? (
                <PaginationItem key={`ellipsis-${index}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              ) : (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    isActive={currentPage === pageNumber}
                    onClick={() => setPage(pageNumber)}
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              ),
            )}

            <PaginationItem>
              <PaginationNext
                disabled={currentPage === totalPages || totalEntries === 0}
                onClick={() =>
                  setPage((prev) => Math.min(totalPages, prev + 1))
                }
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLast
                disabled={currentPage === totalPages || totalEntries === 0}
                onClick={() => setPage(totalPages)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}
