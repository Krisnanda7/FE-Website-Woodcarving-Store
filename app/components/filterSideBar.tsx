"use client";

import { useState } from "react";
import { X, SlidersHorizontal } from "lucide-react";

export default function FilterSidebar({
  selectedCategories,
  onCategoryChange,
  priceRange,
  onPriceChange,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    "Akar Ranting",
    "Pepohonan",
    "Dedaunan",
    "Patung Dewa Bali",
    "Abstract",
    "Binatang",
    "Buddha",
    "Patung Style Balinese",
  ];

  const formatRupiah = (value: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);

  return (
    <>
      {/* Tombol Filter (Hanya muncul di HP) */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden flex items-center gap-2 bg-amber-700 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-amber-600 transition"
      >
        <SlidersHorizontal size={20} /> Filter
      </button>

      {/* Sidebar di desktop */}
      <aside className="hidden md:block bg-white rounded-xl shadow p-6 sticky top-20 h-fit">
        {/* ===== Filter by price ===== */}
        <h2 className="font-bold text-lg mb-4">Filter by price</h2>
        <p className="text-sm mb-3 text-gray-500">
          {formatRupiah(priceRange[0])} - {formatRupiah(priceRange[1])}
        </p>

        <div className="flex flex-col gap-2">
          Min
          <input
            type="range"
            min="0"
            max="20000000"
            step="50000"
            value={priceRange[0]}
            onChange={(e) =>
              onPriceChange([Number(e.target.value), priceRange[1]])
            }
            className="w-full accent-amber-600"
          />
          Max
          <input
            type="range"
            min="0"
            max="20000000"
            step="50000"
            value={priceRange[1]}
            onChange={(e) =>
              onPriceChange([priceRange[0], Number(e.target.value)])
            }
            className="w-full accent-amber-600"
          />
        </div>

        {/* ===== Filter by category ===== */}
        <h2 className="font-bold text-lg mt-8 mb-4">Filter by category</h2>
        <div className="flex flex-col gap-2">
          {categories.map((cat) => (
            <label
              key={cat}
              className={`flex items-center gap-2 cursor-pointer hover:text-amber-600 transition ${
                selectedCategories.includes(cat) ? "text-amber-600" : ""
              }`}
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => onCategoryChange(cat)}
              />
              {cat}
            </label>
          ))}
        </div>
      </aside>

      {/* Modal overlay untuk mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex">
          {/* Sidebar mobile dengan animasi slide */}
          <div className="bg-white w-72 p-6 h-full shadow-xl animate-slideInLeft overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-xl">Filter</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-amber-600 transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* Filter by price */}
            <h2 className="font-bold text-lg mb-4">Filter by price</h2>
            <p className="text-sm mb-3 text-gray-500">
              {formatRupiah(priceRange[0])} - {formatRupiah(priceRange[1])}
            </p>

            <div className="flex flex-col gap-2">
              Min
              <input
                type="range"
                min="0"
                max="20000000"
                step="50000"
                value={priceRange[0]}
                onChange={(e) =>
                  onPriceChange([Number(e.target.value), priceRange[1]])
                }
                className="w-full accent-amber-600"
              />
              Max
              <input
                type="range"
                min="0"
                max="20000000"
                step="50000"
                value={priceRange[1]}
                onChange={(e) =>
                  onPriceChange([priceRange[0], Number(e.target.value)])
                }
                className="w-full accent-amber-600"
              />
            </div>

            {/* Filter by category */}
            <h2 className="font-bold text-lg mt-8 mb-4">Filter by category</h2>
            <div className="flex flex-col gap-2">
              {categories.map((cat) => (
                <label
                  key={cat}
                  className={`flex items-center gap-2 cursor-pointer hover:text-amber-600 transition ${
                    selectedCategories.includes(cat) ? "text-amber-600" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => onCategoryChange(cat)}
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>

          {/* Klik area di luar untuk menutup */}
          <div className="flex-1" onClick={() => setIsOpen(false)}></div>
        </div>
      )}
    </>
  );
}
