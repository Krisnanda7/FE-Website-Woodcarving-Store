"use client";

import { Hammer, Shield, Award, Users, Layers } from "lucide-react";
import { useEffect, useState } from "react";
import AboutUs from "../components/about/aboutUs";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";

export default function About() {
  const [galleryProducts, setGalleryProducts] = useState<any[]>([]);
  const [statsProducts, setStatsProducts] = useState<any[]>([]);
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

      // Ambil 6 produk untuk gallery
      setGalleryProducts(data.slice(0, 6));

      // Ambil 4 produk untuk stats section (bisa dari index berbeda)
      setStatsProducts(data.slice(6, 10));
    } catch (error) {
      console.error("Error fetching gallery products:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="about" className="bg-white text-black">
      {/* Navbar */}
      <Navbar />

      {/* Hero / Heading */}
      <AboutUs />

      {/* Section: The Process & Quality */}
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-orange-600 uppercase text-sm font-semibold mb-2">
          What`s News
        </h2>
        <h3 className="text-3xl md:text-4xl font-extrabold mb-10">
          Masters of Handcrafted Wooden Art in Bali
        </h3>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Process */}
          <div>
            <h4 className="font-bold mb-2 text-lg">The Process</h4>
            <p className="text-gray-600 mb-4">
              At <b>Mutra Wood Carving</b>, our process begins with carefully
              selecting high-quality, sustainable wood. Every step, from carving
              intricate details to achieving a smooth finish, is performed by
              experienced artisans with decades of expertise.
            </p>
            <p className="text-gray-600">
              We focus on preserving the rich tradition of{" "}
              <b>Balinese wood carving</b>, ensuring each piece tells a story of
              craftsmanship, culture, and care for the environment.
            </p>
          </div>

          {/* Quality */}
          <div>
            <h4 className="font-bold mb-2 text-lg">Quality</h4>
            <p className="text-gray-600 mb-6">
              We uphold the highest standards of craftsmanship and quality.
              Here's what makes us stand out.
            </p>

            <div className="flex gap-8 ">
              <div className="flex items-center gap-3">
                <Hammer className="w-8 h-8 text-orange-600" />
                <div>
                  <p className="font-bold text-sm">100% handmade</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-orange-600" />
                <div>
                  <p className="font-bold text-sm">100% safe for health</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Image Grid (4 images in grid layout) */}
          <div className="grid grid-cols-3 gap-4">
            {loading ? (
              // Loading skeleton
              <>
                <div className="col-span-2 row-span-2 w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] bg-gray-200 rounded-xl animate-pulse"></div>
                <div className="w-full h-[140px] sm:h-[165px] md:h-[190px] lg:h-[215px] bg-gray-200 rounded-xl animate-pulse"></div>
                <div className="w-full h-[140px] sm:h-[165px] md:h-[190px] lg:h-[215px] bg-gray-200 rounded-xl animate-pulse"></div>
              </>
            ) : (
              <>
                <img
                  src={
                    statsProducts[0]?.thumbnail_url || "/herosectionhome.jpeg"
                  }
                  alt={statsProducts[0]?.name || "Product 1"}
                  className="rounded-xl object-cover shadow-lg col-span-2 row-span-2
                           h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full"
                  style={{ objectPosition: "center 40%" }}
                />

                <img
                  src={statsProducts[1]?.thumbnail_url || "/gridhome2.jpeg"}
                  alt={statsProducts[1]?.name || "Product 2"}
                  className="rounded-xl object-cover shadow-lg
                           h-[140px] sm:h-[165px] md:h-[190px] lg:h-[215px] w-full"
                />

                <img
                  src={statsProducts[2]?.thumbnail_url || "/gridhome3.jpeg"}
                  alt={statsProducts[2]?.name || "Product 3"}
                  className="rounded-xl object-cover shadow-lg
                           h-[140px] sm:h-[165px] md:h-[190px] lg:h-[215px] w-full"
                />
              </>
            )}
          </div>

          {/* Stats Grid */}
          <div className="place-items-center grid grid-cols-2 gap-8">
            {[
              { icon: Award, value: "15", label: "Years of Experience" },
              { icon: Users, value: "25k", label: "Happy Clients" },
              { icon: Layers, value: "320", label: "Custom Wood Carving" },
              { icon: Layers, value: "300+", label: "Unique Items" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label}>
                <Icon className="text-orange-600 w-8 h-8 mb-2" />
                <h3 className="text-2xl font-bold">{value}</h3>
                <p className="text-gray-600 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

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
    </section>
  );
}
