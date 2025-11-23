"use client";

import { useState } from "react";
import { useCartStore } from "@/store/useCartStore";
import { useWishlistStore } from "@/store/useWishListStore";
import { useCartSidebarStore } from "@/store/useCartSidebarStore";

export default function ProductDetail({ product }: any) {
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type: "inc" | "dec") => {
    setQuantity((q) => (type === "inc" ? q + 1 : q > 1 ? q - 1 : 1));
  };

  const addToCart = useCartStore((state) => state.addToCart);
  const addToWishlist = useWishlistStore((state) => state.toggleWishlist);
  const openCart = useCartSidebarStore((s) => s.openCart);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: "/product5..jpeg",
      quantity,
    });
    openCart(); // langsung pindah ke cart
  };

  const handleAddToWishlist = () => {
    addToWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      image: "/product5..jpeg",
    });
    alert(`${product.name} added to wishlist ❤️`);
  };

  return (
    <main className="bg-white py-30 px-5">
      <section className=" max-w-7xl mx-auto px-6 lg:px-10 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 text-gray-800">
        {/* LEFT: Gambar produk */}
        <div>
          <div className="relative bg-white rounded-2xl shadow overflow-hidden">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="py-10 flex gap-3 mt-4 overflow-x-auto">
            {product.images.slice(0, 3).map((img: string, idx: number) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx}`}
                className={`w-24 h-24 object-cover rounded-lg cursor-pointer border-2 transition ${
                  mainImage === img
                    ? "border-amber-500 scale-105"
                    : "border-gray-200 hover:border-amber-300"
                }`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* RIGHT: Detail produk */}
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">
            {product.name}
          </h1>
          <p className="text-amber-600 text-xl font-bold mb-6">
            {product.price}
          </p>

          {/* Quantity dan tombol cart */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex border border-gray-300 rounded-lg">
              <button
                onClick={() => handleQuantity("dec")}
                className="px-3 py-2 text-gray-600 hover:text-amber-500"
              >
                −
              </button>
              <input
                type="text"
                readOnly
                value={quantity}
                className="w-10 text-center border-l border-r border-gray-200 bg-gray-50"
              />
              <button
                onClick={() => handleQuantity("inc")}
                className="px-3 py-2 text-gray-600 hover:text-amber-500"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="bg-amber-600 hover:bg-amber-500 px-8 py-3 rounded-lg text-white font-semibold transition"
            >
              Add to cart
            </button>
          </div>

          {/* Info tambahan */}
          <div className="border-t border-gray-200 pt-6 mt-8 space-y-3 text-sm">
            <p>
              <strong>SKU:</strong>{" "}
              <span className="text-gray-600">{product.sku}</span>
            </p>
            <p>
              <strong>Category:</strong>{" "}
              <span className="text-gray-600">{product.category}</span>
            </p>
            <p>
              <strong>Tags:</strong>{" "}
              <span className="text-gray-600">{product.tags.join(", ")}</span>
            </p>

            <ul className="mt-5 space-y-2 text-gray-700">
              <li>⭐ Premium Quality</li>
              <li>🌍 Worldwide Shipping</li>
              <li>💰 Money Back Guarantee</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
