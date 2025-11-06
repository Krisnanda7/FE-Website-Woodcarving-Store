"use client";

import { useParams } from "next/navigation";
import Navbar from "@/app/components/navbar";
import ProductDetail from "@/app/components/productDetail";

const allProducts = [
  {
    id: 1,
    name: "Balinese Gate Wood Carving",
    category: "Balinese Statue",
    price: "Rp1.600.000",
    description:
      "1 Set Balinese Gate, Handmade Wood Carving, Temple Gate Statue, Balinese Ornament, Home Decor.",
    images: [
      "/images/product1.jpg",
      "/images/product1_2.jpg",
      "/images/product1_3.jpg",
      "/images/product1_4.jpg",
    ],
    tags: [
      "BaliHomeDecor",
      "BalineseDecor",
      "BalineseGate",
      "BalineseOrnament",
      "BohoHomeDecor",
      "WoodCarving",
    ],
    sku: "183",
  },
  {
    id: 2,
    name: "Abstract Mask Face Wood Carving",
    category: "Abstract",
    price: "Rp660.000",
    description:
      "Beautiful handmade abstract wood mask perfect for modern home decor.",
    images: ["/images/product2.jpg"],
    tags: ["Abstract", "Modern", "WoodCarving"],
    sku: "221",
  },
  // tambahkan produk lainnya
];

export default function ProductDetailPage() {
  const params = useParams();
  const productId = Number(params.id);
  const product = allProducts.find((p) => p.id === productId);

  if (!product)
    return <p className="text-center text-white mt-20">Product not found.</p>;

  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-gray-950 text-white py-10 px-6 lg:px-20">
        <ProductDetail product={product} />
      </div>
    </main>
  );
}
