"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/app/components/layout/navbar";
import ProductDetail from "@/app/components/productDetail";
import Footer from "@/app/components/layout/footer";

export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id ? Number(params.id) : null;

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        setProduct({
          id: data.id,
          name: data.name,
          category: data.category,
          price: Number(data.price),
          thumbnail_url: data.thumbnail_url,
          gallery_urls: data.gallery_urls ?? [],
          description: data.description,
          tags: ["WoodCarving", "Handmade"],
          sku: data.id,
        });
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p className="text-center text-black mt-20">Loading...</p>;
  }

  if (!product) {
    return <p className="text-center text-red-500 mt-20">Product not found</p>;
  }

  return (
    <main>
      <Navbar />
      <ProductDetail product={product} />
      <Footer />
    </main>
  );
}
