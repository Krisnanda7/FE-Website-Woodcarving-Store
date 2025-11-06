"use client";

import { useState } from "react";
import ProductCard from "./productCard";
import FilterSidebar from "./filterSideBar";

const allProducts = [
  {
    id: 1,
    name: "Balinese Gate Wood Carving",
    category: "Balinese Statue",
    price: "Rp1.600.000",
    image: "/product5..jpeg",
  },
  {
    id: 2,
    name: "Abstract Mask Face Wood Carving",
    category: "Abstract",
    price: "Rp660.000",
    image: "/product2..jpeg",
  },
  {
    id: 3,
    name: "Baby Buddha Wood Statue",
    category: "Buddha",
    price: "Rp450.000",
    image: "/product6..jpeg",
  },
  {
    id: 4,
    name: "Frog Wall Art",
    category: "Animal",
    price: "Rp2.000.000",
    image: "/product3..jpeg",
  },
  {
    id: 5,
    name: "Hindu God Sculpture",
    category: "Hindu God",
    price: "Rp1.200.000",
    image: "/product6..jpeg",
  },
];

export default function ProductList() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredProducts =
    selectedCategories.length > 0
      ? allProducts.filter((p) => selectedCategories.includes(p.category))
      : allProducts;

  return (
    <section className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 px-6 lg:px-10 py-10 bg-white  text-black">
      {/* Sidebar */}
      <div className="md:w-[280px] w-full">
        <FilterSidebar
          selectedCategories={selectedCategories}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      {/* Product Grid */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600 text-sm">
            Showing {filteredProducts.length} of {allProducts.length} results
          </p>
          <select className="bg-gray-900 border border-gray-700 text-sm text-white rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-amber-500">
            <option>Default sorting</option>
            <option>Price: low to high</option>
            <option>Price: high to low</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
