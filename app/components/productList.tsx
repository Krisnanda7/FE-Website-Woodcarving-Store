"use client";

import { useEffect, useState } from "react";
import ProductCard from "./productCard";
import FilterSidebar from "./filterSideBar";

type SortOption =
  | "default"
  | "price-low"
  | "price-high"
  | "name-asc"
  | "name-desc";

export default function ProductList() {
  const [products, setProducts] = useState<any[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000000]);
  const [sortBy, setSortBy] = useState<SortOption>("default");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.map((p: any) => ({
          id: p.id,
          name: p.name,
          category: p.category ?? "No Category",
          price: Number(p.price),
          image: p.thumbnail_url,
        }));
        setProducts(mapped);
      });
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value as SortOption);
  };

  // Filter products
  const filteredProducts = products.filter((p) => {
    const matchCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(p.category);

    const matchPrice = p.price >= priceRange[0] && p.price <= priceRange[1];

    return matchCategory && matchPrice;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price; // Low to high
      case "price-high":
        return b.price - a.price; // High to low
      case "name-asc":
        return a.name.localeCompare(b.name); // A to Z
      case "name-desc":
        return b.name.localeCompare(a.name); // Z to A
      case "default":
      default:
        return 0; // Original order
    }
  });

  const formatRupiah = (num: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(num);

  const productsPerSection = 10;

  const productSections = Array.from(
    { length: Math.ceil(sortedProducts.length / productsPerSection) },
    (_, index) =>
      sortedProducts.slice(
        index * productsPerSection,
        index * productsPerSection + productsPerSection
      )
  );

  return (
    <section className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 px-6 lg:px-10 py-10 bg-white text-black">
      <div className="md:w-[280px] w-full">
        <FilterSidebar
          selectedCategories={selectedCategories}
          onCategoryChange={handleCategoryChange}
          priceRange={priceRange}
          onPriceChange={setPriceRange}
        />
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600 text-sm">
            Showing {sortedProducts.length} of {products.length} results
          </p>
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="border-2 text-sm text-black rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-amber-800 cursor-pointer"
          >
            <option value="default">Default sorting</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
            {/* <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option> */}
          </select>
        </div>

        {productSections.length === 0 ? (
          <p className="text-center text-gray-500">No products found.</p>
        ) : (
          productSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-10">
              <div className="mb-5 flex items-center justify-between border-b border-gray-200 pb-3">
                <h2 className="text-lg font-semibold">
                  Section {sectionIndex + 1}
                </h2>
                <p className="text-sm text-gray-600">
                  {section.length} items
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.map((p) => (
                  <ProductCard
                    key={p.id}
                    product={{ ...p, price: formatRupiah(p.price) }}
                  />
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
