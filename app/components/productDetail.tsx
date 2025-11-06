"use client";

import { useState } from "react";

export default function ProductDetail({ product }: any) {
  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Gambar besar */}
      <div>
        <img
          src={mainImage}
          alt={product.name}
          className="w-full h-[450px] object-cover rounded-xl mb-5"
        />

        {/* Thumbnail */}
        <div className="flex gap-3 overflow-x-auto">
          {product.images.map((img: string, idx: number) => (
            <img
              key={idx}
              src={img}
              alt={`Thumbnail ${idx}`}
              className={`w-24 h-24 object-cover rounded-lg cursor-pointer border-2 ${
                mainImage === img ? "border-amber-500" : "border-gray-700"
              }`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Detail produk */}
      <div>
        <h2 className="text-2xl lg:text-3xl font-semibold mb-3">
          {product.name}
        </h2>
        <p className="text-amber-400 text-xl font-bold mb-6">{product.price}</p>

        <p className="text-gray-300 mb-6">{product.description}</p>

        <div className="flex items-center mb-6">
          <button className="bg-gray-800 px-3 py-2 rounded-l-lg">-</button>
          <input
            type="text"
            value="1"
            readOnly
            className="w-10 text-center bg-gray-900 border border-gray-800"
          />
          <button className="bg-gray-800 px-3 py-2 rounded-r-lg">+</button>
        </div>

        <button className="bg-amber-600 hover:bg-amber-700 px-8 py-3 rounded-lg text-white font-semibold">
          Add to cart
        </button>

        {/* Info tambahan */}
        <div className="mt-8 text-sm text-gray-400 space-y-2">
          <p>
            <strong className="text-white">SKU:</strong> {product.sku}
          </p>
          <p>
            <strong className="text-white">Category:</strong> {product.category}
          </p>
          <p>
            <strong className="text-white">Tags:</strong>{" "}
            {product.tags.join(", ")}
          </p>

          <ul className="mt-4 list-disc pl-5 text-gray-300 space-y-1">
            <li>✅ Premium Quality</li>
            <li>🚚 Worldwide Shipping</li>
            <li>💰 Money Back Guarantee</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
