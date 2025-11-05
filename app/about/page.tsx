"use client";

import { Hammer, Shield, Award, Users, Layers } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function About() {
  return (
    <section id="about" className="bg-white text-black">
      {/* Hero / Heading */}
      <Navbar />
      <div className="relative bg-[url('/bg-carving.jpg')] bg-cover bg-center text-white py-24">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative container mx-auto px-6">
          <h1 className="text-5xl font-extrabold mb-4">ABOUT US</h1>
          <p className="text-sm uppercase tracking-widest text-gray-300">
            Home / About Us
          </p>
        </div>
      </div>

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
              At <b>Yuyu Wood Carving</b>, our process begins with carefully
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
              Here’s what makes us stand out.
            </p>

            <div className="flex gap-8">
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
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/carving-process.jpg"
            alt="Carving process"
            className="rounded-xl shadow-lg object-cover"
          />
          <div className="grid sm:grid-cols-2 gap-8">
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
      <div className="py-20">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
          {["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"].map(
            (img, i) => (
              <img
                key={i}
                src={`/${img}`}
                alt={`Gallery ${i + 1}`}
                className="w-full h-64 object-cover"
              />
            )
          )}
        </div>

        <div className="bg-black text-white py-12">
          <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
            {[
              {
                title: "High Quality",
                desc: "Our wooden furniture and carvings are made with the finest materials and craftsmanship.",
              },
              {
                title: "Fast Delivery",
                desc: "Quick and reliable shipping, bringing authentic Balinese craftsmanship to your home.",
              },
              {
                title: "Best Warranty",
                desc: "Enjoy our commitment to quality with a warranty protecting your handmade pieces.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
