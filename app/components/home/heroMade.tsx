"use client";

import { Heart, ShoppingCart, Eye } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string | number;
  thumbnail_url: string;
}

export default function HeroMade() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Mapping data sesuai format yang dibutuhkan
      const mapped = data.map((p: any) => ({
        id: p.id,
        name: p.name,
        category: p.category ?? "No Category",
        price: Number(p.price),
        thumbnail_url: p.thumbnail_url,
      }));

      // Ambil hanya 3 produk pertama
      setProducts(mapped.slice(0, 3));
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Loading skeleton
  if (loading) {
    return (
      <section className="max-w-7xl mx-auto py-20 px-4">
        <div className="p-5 lg:p-10 flex flex-col md:flex-row md:items-end md:justify-between mb-10 text-center">
          <h2 className="text-4xl font-bold tracking-tight uppercase">
            Made with Care
          </h2>
          <p className="text-amber-700 mt-3 md:mt-0 text-sm md:text-base">
            MASTERS OF HANDCRAFTED <br /> WOODEN ART
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 h-[350px] rounded-xl"></div>
              <div className="bg-gray-200 h-4 w-24 mt-4 mx-auto rounded"></div>
              <div className="bg-gray-200 h-5 w-full mt-2 rounded"></div>
              <div className="bg-gray-200 h-4 w-32 mt-2 mx-auto rounded"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto py-20 px-4">
      {/* Header Section */}
      <div className="p-5 lg:p-10 flex flex-col md:flex-row md:items-end md:justify-between mb-10 text-center">
        <h2 className="text-4xl font-bold tracking-tight uppercase">
          Made with Care
        </h2>
        <p className="text-amber-700 mt-3 md:mt-0 text-sm md:text-base">
          MASTERS OF HANDCRAFTED <br /> WOODEN ART
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group text-center">
            {/* Gambar */}
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={product.thumbnail_url || "/placeholder.jpg"}
                alt={product.name}
                className="object-cover w-full h-[350px] rounded-xl transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.jpg";
                }}
              />

              {/* Hover Icons */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/70 backdrop-blur-sm py-3 px-4 flex justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link
                  href={`/products/${product.id}`}
                  className="p-2 rounded-full hover:bg-amber-500 transition"
                >
                  <Eye className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Info */}
            <p className="text-xs text-gray-500 uppercase mt-4">
              {product.category}
            </p>
            <h3 className="text-base font-semibold leading-snug mt-1 line-clamp-2 hover:text-amber-700 transition">
              {product.name}
            </h3>
            <p className="text-gray-800 font-medium mt-1">
              Rp{product.price.toLocaleString("id-ID")}
            </p>
          </div>
        ))}
      </div>

      {/* Button Visit All Products */}
      <div className="pt-10 flex justify-center">
        <Link href="/products">
          <button className="cursor-pointer bg-amber-700 hover:bg-amber-600 transition-colors px-8 py-3 rounded-lg font-semibold text-white">
            Visit All Our Products
          </button>
        </Link>
      </div>
    </section>
  );
}
