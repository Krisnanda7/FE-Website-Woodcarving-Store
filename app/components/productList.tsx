"use client";

import { useState } from "react";
import ProductCard from "./productCard";
import FilterSidebar from "./filterSideBar";

// 🪵 Daftar Produk (gunakan angka untuk harga, bukan string)
const allProducts = [
  {
    id: 1,
    name: "Balinese Gate Wood Carving",
    category: "Patung Style Balinese",
    price: 1600000,
    image: "/product5..jpeg",
  },
  {
    id: 2,
    name: "Abstract Mask Face Wood Carving",
    category: "Abstract",
    price: 660000,
    image: "/product2..jpeg",
  },
  {
    id: 3,
    name: "Baby Buddha Wood Statue",
    category: "Buddha",
    price: 450000,
    image: "/product6..jpeg",
  },
  {
    id: 4,
    name: "Frog Wall Art",
    category: "Animal",
    price: 2000000,
    image: "/product3..jpeg",
  },
  {
    id: 5,
    name: "Hindu God Sculpture",
    category: "Hindu God",
    price: 1200000,
    image: "/product6..jpeg",
  },
];

export default function ProductList() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 20000000]); // min, max

  // 🔸 Handle klik kategori
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // 🔸 Filter produk berdasarkan kategori dan harga
  const filteredProducts = allProducts.filter((p) => {
    const matchCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(p.category);
    const matchPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
    return matchCategory && matchPrice;
  });

  // 🔸 Format angka ke Rupiah
  const formatRupiah = (num: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(num);

  return (
    <section className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 px-6 lg:px-10 py-10 bg-white text-black">
      {/* Sidebar */}
      <div className="md:w-[280px] w-full">
        <FilterSidebar
          selectedCategories={selectedCategories}
          onCategoryChange={handleCategoryChange}
          priceRange={priceRange}
          onPriceChange={setPriceRange}
        />
      </div>

      {/* Product Grid Sorting Harga*/}
      <div className="flex-1 ">
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600 text-sm ">
            Showing {filteredProducts.length} of {allProducts.length} results
          </p>
          <select className="border-2 text-sm text-black rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-amber-800">
            <option>Default sorting</option>
            <option>Price: low to high</option>
            <option>Price: high to low</option>
          </select>
        </div>

        {/* Produk */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={{
                ...p,
                price: formatRupiah(p.price),
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
