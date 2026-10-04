"use client";

import { useCompareStore } from "@/store/useCompareStore";
import Link from "next/link";
import { Trash2 } from "lucide-react";

export default function ComparePage() {
  const { compareList, removeFromCompare, clearCompare } = useCompareStore();

  if (compareList.length === 0) {
    return (
      <main className="bg-white py-32 px-5 min-h-[70vh] flex flex-col items-center justify-center text-black">
        <h1 className="text-3xl font-semibold mb-6">Compare Products</h1>
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
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold">Compare Products</h1>
          <button
            onClick={clearCompare}
            className="text-red-600 hover:text-red-700 flex items-center gap-2 font-medium"
          >
            <Trash2 size={18} /> Clear All
          </button>
        </div>

        <div className="overflow-x-auto pb-6">
          <table className="w-full min-w-[800px] border-collapse bg-white">
            <thead>
              <tr>
                <th className="p-4 border-b border-gray-200 text-left text-gray-500 font-medium w-48">
                  Product
                </th>
                {compareList.map((product) => (
                  <th key={product.id} className="p-4 border-b border-gray-200 text-center w-1/3">
                    <div className="relative group mx-auto w-48 h-48 mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                      <button
                        onClick={() => removeFromCompare(product.id)}
                        className="absolute -top-3 -right-3 bg-white text-red-500 rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Remove"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                    <Link
                      href={`/products/${product.id}`}
                      className="text-lg font-semibold hover:text-amber-600 transition"
                    >
                      {product.name}
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border-b border-gray-100 font-medium text-gray-600">Price</td>
                {compareList.map((product) => (
                  <td key={product.id} className="p-4 border-b border-gray-100 text-center font-bold text-amber-600">
                    Rp {product.price?.toLocaleString("id-ID")}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 border-b border-gray-100 font-medium text-gray-600">Category</td>
                {compareList.map((product) => (
                  <td key={product.id} className="p-4 border-b border-gray-100 text-center">
                    {product.category || "Uncategorized"}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 border-b border-gray-100 font-medium text-gray-600">Action</td>
                {compareList.map((product) => (
                  <td key={product.id} className="p-4 border-b border-gray-100 text-center">
                    <Link
                      href={`/products/${product.id}`}
                      className="inline-block border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-6 py-2 rounded-lg font-medium transition"
                    >
                      View Details
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
