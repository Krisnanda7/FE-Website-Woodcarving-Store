"use client";

import { useEffect, useState, useTransition, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ProductCard from "./productCard";
import FilterSidebar from "./filterSideBar";

type SortOption = "default" | "price-low" | "price-high" | "name-asc" | "name-desc";

export default function ProductList() {
  const [products, setProducts] = useState<any[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000000]);
  const [sortBy, setSortBy] = useState<SortOption>("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [isPending, startTransition] = useTransition();
  const gridRef = useRef<HTMLDivElement>(null);
  const isRestoringScroll = useRef(false); // flag: sedang restore scroll, skip scroll-to-top

  const searchParams = useSearchParams();
  const router = useRouter();

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
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
    setCurrentPage(1);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value as SortOption);
    setCurrentPage(1);
  };

  const filteredProducts = products.filter((p) => {
    const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(p.category);
    const matchPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
    return matchCategory && matchPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low": return a.price - b.price;
      case "price-high": return b.price - a.price;
      case "name-asc": return a.name.localeCompare(b.name);
      case "name-desc": return b.name.localeCompare(a.name);
      default: return 0;
    }
  });

  const formatRupiah = (num: number) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(num);

  const productsPerPage = 9;
  const totalPages = Math.max(1, Math.ceil(sortedProducts.length / productsPerPage));
  const effectivePage = Math.min(Math.max(currentPage, 1), totalPages);
  const currentProducts = sortedProducts.slice(
    (effectivePage - 1) * productsPerPage,
    effectivePage * productsPerPage
  );

  // ✅ Ganti halaman tanpa scroll ke atas — scroll ke grid saja
  const handlePrevPage = () => {
    startTransition(() => {
      setCurrentPage((prev) => Math.max(prev - 1, 1));
    });
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNextPage = () => {
    startTransition(() => {
      setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    });
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Sync page dari URL (hanya saat pertama load / fromId restore)
  useEffect(() => {
    const pageParam = searchParams?.get("page");
    const fromId = searchParams?.get("fromId");

    if (fromId) {
      // Ini adalah kembali dari detail — set flag restore
      isRestoringScroll.current = true;
    }

    if (pageParam) {
      const p = parseInt(pageParam, 10);
      if (!isNaN(p)) setCurrentPage(Math.min(Math.max(p, 1), totalPages));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, totalPages]);

  // Update URL saat page berubah (tanpa trigger scroll)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    url.searchParams.set("page", String(currentPage));
    router.replace(url.pathname + url.search, { scroll: false }); // ✅ { scroll: false } mencegah scroll ke top
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  // ✅ Restore scroll ke produk yang diklik sebelumnya
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const fromId = searchParams?.get("fromId") || sessionStorage.getItem("productsReturnId");
      if (!fromId) return;

      const scrollToId = `product-${fromId}`;
      const attemptScroll = () => {
        const el = document.getElementById(scrollToId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          sessionStorage.removeItem("productsReturnId");
          sessionStorage.removeItem("productsReturnPage");
          isRestoringScroll.current = false;

          const url = new URL(window.location.href);
          if (url.searchParams.has("fromId") || url.searchParams.has("fromPage")) {
            url.searchParams.delete("fromId");
            url.searchParams.delete("fromPage");
            router.replace(url.pathname + url.search, { scroll: false });
          }
          return true;
        }
        return false;
      };

      if (attemptScroll()) return;
      let tries = 0;
      const timer = setInterval(() => {
        tries++;
        if (attemptScroll() || tries >= 20) clearInterval(timer);
      }, 100);
    } catch (e) {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentProducts, searchParams]);

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
          </select>
        </div>

        {sortedProducts.length === 0 ? (
          <p className="text-center text-gray-500">No products found.</p>
        ) : (
          <>
            {/* ✅ ref dipasang di grid untuk scroll target pagination */}
            <div
              ref={gridRef}
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-200 ${isPending ? "opacity-60" : "opacity-100"}`}
            >
              {currentProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={{ ...p, price: formatRupiah(p.price) }}
                  currentPage={effectivePage}
                />
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-600">
                Showing {currentProducts.length} of {sortedProducts.length} results
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrevPage}
                  disabled={effectivePage === 1 || isPending}
                  className="rounded-md border border-amber-600 bg-white px-4 py-2 text-sm font-medium text-gray-800 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-amber-700"
                >
                  Previous
                </button>
                <span className="text-sm text-gray-600">
                  Page {effectivePage} of {totalPages}
                </span>
                <button
                  type="button"
                  onClick={handleNextPage}
                  disabled={effectivePage === totalPages || isPending}
                  className="rounded-md border border-amber-600 bg-white px-4 py-2 text-sm font-medium text-gray-800 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-amber-700"
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}