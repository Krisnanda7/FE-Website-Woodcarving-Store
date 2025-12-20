"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";
import { useWishlistStore } from "@/store/useWishListStore";
import { useCartSidebarStore } from "@/store/useCartSidebarStore";

export default function ProductDetail({ product }: any) {
  const router = useRouter();
  const images = product?.gallery_urls || [];
  const PLACEHOLDER = "https://placehold.co/600x400/e5e5e5/666?text=No+Image";

  const [mainImage, setMainImage] = useState<string | null>(null);

  useEffect(() => {
    if (product?.thumbnail_url) {
      setMainImage(product.thumbnail_url);
    } else if (images.length > 0) {
      setMainImage(images[0]);
    } else {
      setMainImage(PLACEHOLDER);
    }
  }, [product, images]);

  const [quantity, setQuantity] = useState(1);

  const addToCart = useCartStore((state) => state.addToCart);
  const addToWishlist = useWishlistStore((state) => state.toggleWishlist);
  const openCart = useCartSidebarStore((s) => s.openCart);

  const handleQuantity = (type: "inc" | "dec") =>
    setQuantity((q) => (type === "inc" ? q + 1 : q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.thumbnail_url || PLACEHOLDER,
      quantity,
    });
    openCart();
  };

  if (!product) {
    return (
      <main className="bg-white py-30 px-5">
        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
          <div className="animate-pulse">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="bg-gray-200 h-[500px] rounded-2xl"></div>
              <div>
                <div className="bg-gray-200 h-8 w-3/4 rounded mb-4"></div>
                <div className="bg-gray-200 h-6 w-1/4 rounded"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-white py-30 px-5">
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 text-gray-800">
        {/* GAMBAR */}
        <div>
          <div className="relative bg-gray-100 rounded-2xl shadow overflow-hidden">
            <img
              src={mainImage || PLACEHOLDER}
              alt={product.name}
              className="w-full h-[500px] object-cover"
              onError={(e) => {
                e.currentTarget.src = PLACEHOLDER;
              }}
            />
          </div>

          {/* GALLERY THUMBNAILS */}
          <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
            {/* Thumbnail utama */}
            {product?.thumbnail_url && (
              <img
                src={product.thumbnail_url}
                alt={`${product.name} - Thumbnail`}
                className={`w-24 h-24 object-cover rounded-lg cursor-pointer border-2 transition ${
                  mainImage === product.thumbnail_url
                    ? "border-amber-500"
                    : "border-gray-200 hover:border-amber-500"
                }`}
                onClick={() => setMainImage(product.thumbnail_url)}
                onError={(e) => {
                  e.currentTarget.src = PLACEHOLDER;
                }}
              />
            )}

            {/* Gallery images */}
            {images.length > 0 &&
              images.map((img: string, idx: number) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${product.name} - ${idx + 1}`}
                  className={`w-24 h-24 object-cover rounded-lg cursor-pointer border-2 transition ${
                    mainImage === img
                      ? "border-amber-500"
                      : "border-gray-200 hover:border-amber-500"
                  }`}
                  onClick={() => setMainImage(img)}
                  onError={(e) => {
                    e.currentTarget.src = PLACEHOLDER;
                  }}
                />
              ))}
          </div>
        </div>

        {/* DETAIL */}
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">
            {product.name}
          </h1>

          <p className="text-amber-600 text-xl font-bold mb-6">
            Rp {product.price?.toLocaleString("id-ID")}
          </p>

          {/* QUANTITY + CART */}
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

          {/* BUTTON LIHAT PRODUK LAINNYA */}
          <button
            onClick={() => router.push("/products")}
            className="w-full border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 mb-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            Lihat Produk Lainnya
          </button>

          {/* INFO */}
          <div className="border-t border-gray-200 pt-6 mt-8 space-y-3 text-sm">
            <p>
              <strong>Category:</strong>{" "}
              <span className="text-gray-600">
                {product.category || "Uncategorized"}
              </span>
            </p>

            {product.description && (
              <div className="mt-4">
                <strong>Description:</strong>
                <p className="text-gray-600 mt-2 whitespace-pre-line">
                  {product.description}
                </p>
              </div>
            )}

            <ul className="mt-5 space-y-2 text-gray-700">
              <li>⭐ Premium Quality</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
