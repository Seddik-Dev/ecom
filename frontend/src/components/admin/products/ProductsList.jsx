import React, { useCallback, useEffect, useState } from "react";
import StatsProducts from "./StatsProducts";
import FilterSelect from "./FilterSelect";
import ProductlistComp from "./ProductlistComp";
import ModalAddProducts from "./ModalAddProducts";
import { getAllProducts } from "../../../services/Admin/productApi";

const mapProduct = (product) => ({
  id: product.id,
  name: product.name,
  desc: product.description,
  image: product.image,
  category: product.category?.name ?? "Unknown",
  inStock: Number(product.inStock),
  sku: product.id,
  price: product.price,
  qty: product.stock,
  status: product.status,
});

export default function Productslist() {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await getAllProducts();

      if (response.success) {
        setProducts(response.data.map(mapProduct));
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch products.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const toggleStock = (id) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, inStock: Number(p.inStock) === 1 ? 0 : 1 } : p,
      ),
    );
  };

  const toggleSelectAll = (visibleIds = filtered.map((p) => p.id)) => {
    const allVisibleSelected = visibleIds.every((id) => selected.includes(id));

    if (allVisibleSelected) {
      setSelected((prev) => prev.filter((id) => !visibleIds.includes(id)));
    } else {
      setSelected((prev) => [...new Set([...prev, ...visibleIds])]);
    }
  };

  const toggleSelectOne = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="bg-gray-50 min-h-screen p-6 space-y-6">
      <StatsProducts />

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <FilterSelect
          search={search}
          onSearchChange={setSearch}
          onAddProduct={() => setIsAddModalOpen(true)}
          onExport={() => console.log("Export")}
        />

        {loading ? (
          <div className="px-6 py-12 text-center text-sm text-gray-400">
            Loading products...
          </div>
        ) : error ? (
          <div className="px-6 py-12 text-center text-sm text-red-500">
            {error}
          </div>
        ) : (
          <ProductlistComp
            products={filtered}
            selected={selected}
            onToggleSelectAll={toggleSelectAll}
            onToggleSelectOne={toggleSelectOne}
            onToggleStock={toggleStock}
          />
        )}
      </div>

      <ModalAddProducts
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSuccess={fetchProducts}
      />
    </div>
  );
}
