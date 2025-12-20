"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/app/components/layout/navbar";
import ProductDetail from "@/app/components/productDetail";
import Footer from "@/app/components/layout/footer";

export default function ProductDetailPage() {
  const params = useParams();
  const id = Number(params.id);

  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data); // untuk debug

        setProduct({
          id: data.id,
          name: data.name,
          category: data.category,
          price: Number(data.price),
          thumbnail_url: data.thumbnail_url,
          gallery_urls: data.gallery_urls || [],
          description: data.description,
          tags: ["WoodCarving", "Handmade"],
          sku: data.id,
        });
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);

  if (!product)
    return <p className="text-center text-black mt-20">Loading...</p>;

  return (
    <main>
      <Navbar />
      <ProductDetail product={product} />
      <Footer />
    </main>
  );
}
