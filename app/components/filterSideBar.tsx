"use client";

import { useEffect, useState } from "react";
import { X, SlidersHorizontal } from "lucide-react";

interface FilterSidebarProps {
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceChange: (range: [number, number]) => void;
}

export interface Category {
  id: number;
  name: string;
  slug?: string;
  description?: string;
  created_at?: string;
  updated_at?: string;
}

export default function FilterSidebar({
  selectedCategories,
  onCategoryChange,
  priceRange,
  onPriceChange,
}: FilterSidebarProps) {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  // AMBIL DATA CATEGORY DARI BACKEND TANPA MENGUBAH STYLING
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/categories")
      .then((res) => res.json())
      .then((data) => {
        // Sesuaikan structure data kamu
        const names = data.map((cat: Category) => cat.name);
        setCategories(names);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const formatRupiah = (value: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden flex items-center gap-2 bg-amber-700 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-amber-600 transition"
      >
        <SlidersHorizontal size={20} /> Filter
      </button>

      {/* ================= MOBILE SIDEBAR ================= */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 md:hidden">
          <aside className="bg-white w-72 h-full p-6 shadow-lg relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4"
            >
              <X />
            </button>

            {/* PRICE */}
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
                value={priceRange[1]}
                onChange={(e) =>
                  onPriceChange([priceRange[0], Number(e.target.value)])
                }
                className="w-full accent-amber-600"
              />
            </div>

            {/* CATEGORY */}
            <h2 className="font-bold text-lg mt-8 mb-4">Filter by category</h2>

            <div className="flex flex-col gap-2">
              {loading ? (
                <p className="text-sm text-gray-500">Loading...</p>
              ) : (
                categories.map((cat) => (
                  <label
                    key={cat}
                    className={`flex items-center gap-2 cursor-pointer ${
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
                ))
              )}
            </div>
          </aside>
        </div>
      )}

      {/* Sidebar Desktop */}
      <aside className="hidden md:block bg-white rounded-xl shadow p-6 sticky top-20 h-fit">
        {/* PRICE */}
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
            value={priceRange[1]}
            onChange={(e) =>
              onPriceChange([priceRange[0], Number(e.target.value)])
            }
            className="w-full accent-amber-600"
          />
        </div>

        {/* CATEGORY */}
        <h2 className="font-bold text-lg mt-8 mb-4">Filter by category</h2>

        <div className="flex flex-col gap-2">
          {loading ? (
            <p className="text-sm text-gray-500">Loading...</p>
          ) : (
            categories.map((cat) => (
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
            ))
          )}
        </div>
      </aside>
    </>
  );
}
