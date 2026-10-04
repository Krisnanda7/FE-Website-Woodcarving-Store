"use client";

import Link from "next/link";
import { useCompareStore } from "@/store/useCompareStore";

export default function ProductCard({ product, currentPage }: any) {
  const compareList = useCompareStore((state) => state.compareList);
  const isCompared = compareList.some((item) => item.id === product.id);

  const setReturnPage = () => {
    if (typeof window !== "undefined" && currentPage) {
      try {
        sessionStorage.setItem("productsReturnPage", String(currentPage));
        sessionStorage.setItem("productsReturnId", String(product.id));
      } catch (e) {
        // ignore
      }
    }
  };
  return (
    <div
      id={`product-${product.id}`}
      key={product.id}
      className=" rounded-2xl p-5 shadow-lg hover:scale-105  transition-transform duration-500 "
    >
      <Link href={`/products/${product.id}?fromPage=${currentPage || 1}&fromId=${product.id}`} onPointerDown={setReturnPage} onClick={setReturnPage}>
        <img
          src={product.image}
          alt={product.name}
          className="rounded-xl mb-4 w-full h-56 object-cover"
        />
      </Link>

      <a href={`/products/${product.id}?fromPage=${currentPage || 1}&fromId=${product.id}`} onPointerDown={setReturnPage} onClick={setReturnPage}>
        <h3 className="text-center text-2xl font-semibold text-black mb-2 hover:text-amber-700 hover:scale-105 transition-transform duration-500">
          {product.name}
        </h3>
        <p className="text-center text-gray-600 font-medium">
          {product.category}
        </p>
        <p className="text-center text-black font-medium">{product.price}</p>
      </a>

      <button
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          const { addToCompare, removeFromCompare } = useCompareStore.getState();
          if (isCompared) {
            removeFromCompare(product.id);
          } else {
            if (compareList.length >= 3) {
              alert("You can only compare up to 3 products at a time.");
            } else {
              addToCompare({
                id: product.id,
                name: product.name,
                price: typeof product.price === 'string' ? Number(product.price.replace(/[^0-9]/g, '')) : product.price,
                image: product.image,
                category: product.category,
              });
            }
          }
        }}
        className={`w-full mt-4 border px-4 py-2 rounded-lg font-medium transition ${isCompared ? 'bg-amber-600 text-white border-amber-600 hover:bg-amber-700' : 'border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white'}`}
      >
        {isCompared ? "Remove from Compare" : "Compare"}
      </button>
    </div>
  );
}
