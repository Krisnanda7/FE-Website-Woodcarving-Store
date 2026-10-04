"use client";

import { useCompareStore } from "@/store/useCompareStore";
import { useCurrencyStore, formatPrice } from "@/store/useCurrencyStore";
import Link from "next/link";
import { Trash2, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ComparePage() {
  const { compareList, removeFromCompare, clearCompare } = useCompareStore();
  const { currency, exchangeRate } = useCurrencyStore();
  const router = useRouter();

  if (compareList.length === 0) {
    return (
      <main className="bg-white py-32 px-5 min-h-[70vh] flex flex-col items-center justify-center text-black">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => router.back()}
            className="p-2 text-gray-500 hover:text-amber-600 hover:bg-amber-50 rounded-full transition"
            title="Go Back"
          >
            <ArrowLeft size={28} />
          </button>
          <h1 className="text-3xl font-semibold">Compare Products</h1>
        </div>
        <p className="text-gray-500 mb-8">You haven&apos;t added any products to compare yet.</p>
        <Link
          href="/products"
          className="bg-amber-600 hover:bg-amber-500 px-8 py-3 rounded-lg text-white font-semibold transition"
        >
          Browse Products
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-white py-32 px-5 min-h-[70vh] text-black">
      <section className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-10">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.back()}
              className="p-2 text-gray-500 hover:text-amber-600 hover:bg-amber-50 rounded-full transition"
              title="Go Back"
            >
              <ArrowLeft size={28} />
            </button>
            <h1 className="text-3xl md:text-4xl font-semibold">Compare Products</h1>
          </div>
          <button
            onClick={clearCompare}
            className="text-red-600 hover:text-red-700 hover:bg-red-50 flex items-center justify-center gap-2 font-medium border border-red-200 px-4 py-2 rounded-lg transition self-start md:self-auto"
          >
            <Trash2 size={18} /> Clear All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {compareList.map((product) => (
            <div key={product.id} className="border border-gray-200 rounded-2xl p-5 flex flex-col relative bg-gray-50/50 hover:shadow-lg transition-shadow">
              <button
                onClick={() => removeFromCompare(product.id)}
                className="absolute top-4 right-4 bg-white text-red-500 rounded-full p-2 shadow-md hover:bg-red-50 transition z-10"
                title="Remove"
              >
                <Trash2 size={18} />
              </button>
              
              <div className="relative w-full h-56 mb-4 bg-white rounded-xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <Link
                href={`/products/${product.id}`}
                className="text-xl font-semibold hover:text-amber-600 transition mb-2"
              >
                {product.name}
              </Link>
              
              <div className="flex-1 space-y-3 mt-2">
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="text-gray-500 font-medium">Price</span>
                  <span className="font-bold text-amber-600 text-lg">
                    {formatPrice(Number(product.price), currency, exchangeRate)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="text-gray-500 font-medium">Category</span>
                  <span className="font-medium text-gray-800">
                    {product.category || "Uncategorized"}
                  </span>
                </div>
              </div>
              
              <div className="mt-6">
                <Link
                  href={`/products/${product.id}`}
                  className="block text-center w-full border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-4 py-3 rounded-xl font-semibold transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
