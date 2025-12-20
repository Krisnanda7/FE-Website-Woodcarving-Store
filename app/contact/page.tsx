"use client";

import { useEffect, useState } from "react";
import ContactSection from "../components/contact/contactSection";
import Footer from "../components/layout/footer";
import Navbar from "../components/layout/navbar";

export default function ContactPage() {
  const [galleryProducts, setGalleryProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGalleryProducts();
  }, []);

  const fetchGalleryProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Ambil 6 produk pertama
      setGalleryProducts(data.slice(0, 6));
    } catch (error) {
      console.error("Error fetching gallery products:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="">
      <Navbar />
      <ContactSection />

      {/* Gallery */}
      <div className="py-20 px-5">
        {loading ? (
          // Loading skeleton
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="w-full h-64 bg-gray-200 rounded-xl animate-pulse"
              ></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {galleryProducts.map((product, i) => (
              <img
                key={product.id}
                src={product.thumbnail_url || "/placeholder.jpg"}
                alt={product.name || `Gallery ${i + 1}`}
                className="w-full h-64 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.jpg";
                }}
              />
            ))}

            {/* Jika produk kurang dari 6, tampilkan placeholder */}
            {galleryProducts.length < 6 &&
              Array.from({ length: 6 - galleryProducts.length }).map((_, i) => (
                <div
                  key={`placeholder-${i}`}
                  className="w-full h-64 bg-gray-100 rounded-xl flex items-center justify-center"
                >
                  <p className="text-gray-400 text-sm">Coming Soon</p>
                </div>
              ))}
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
