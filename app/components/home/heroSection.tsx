"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat flex flex-col lg:flex-row items-center
     justify-center gap-12 lg:gap-20 px-6 md:px-16 lg:px-20 py-16 md:py-24 bg-black text-white min-h-screen overflow-hidden"
      style={{ backgroundImage: "url('/herosectionhome.jpeg')" }}
    >
      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black/85"></div>

      {/* ===== TEXT CONTENT ===== */}
      <motion.div
        className="py-20 text-left max-w-xl space-y-6 relative z-10"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-wide"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          HANDMADE WOODEN CREATIONS AND BALINESE{" "}
          <span className="text-amber-500">WOOD CARVINGS</span>
        </motion.h1>

        <motion.p
          className="text-gray-300 text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Explore Mutra Wood Carving`s exquisite collection of handcrafted
          wooden furniture and authentic Balinese carvings. Perfect for adding
          elegance to your home.
        </motion.p>

        {/* Tombol animasi */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a href={`/products`}>
            <button className="cursor-pointer bg-amber-700 hover:bg-amber-600 transition-all duration-300 px-8 py-3 rounded-lg font-semibold text-white hover:shadow-lg">
              Visit Shop
            </button>
          </a>
        </motion.div>

        {/* Statistik */}
        <motion.div
          className="flex gap-12 pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold">50+</h2>
            <p className="text-sm text-gray-400 mt-1">products in our store</p>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold">5</h2>
            <p className="text-sm text-gray-400 mt-1">years of experience</p>
          </div>
        </motion.div>
      </motion.div>

      {/* ===== IMAGE GRID ===== */}
      <motion.div
        className="md:w-1/2 grid grid-cols-3 gap-4 relative z-10"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.img
          src="/gridhome1.jpeg"
          alt="carving1"
          className="rounded-xl object-cover w-full col-span-2 row-span-2 shadow-lg
                     h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[700px]"
          style={{ objectPosition: "center 40%" }}
        />

        <motion.img
          src="/gridhome2.jpeg"
          alt="carving2"
          className="rounded-xl object-cover w-full shadow-lg
                     h-[140px] sm:h-[165px] md:h-[190px] lg:h-[215px] xl:h-[240px]"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />

        <motion.img
          src="/gridhome3.jpeg"
          alt="carving3"
          className="rounded-xl object-cover w-full shadow-lg
                     h-[140px] sm:h-[165px] md:h-[190px] lg:h-[215px] xl:h-[240px]"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </section>
  );
}
