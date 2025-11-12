"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function ContactSection() {
  // Ganti nomor WhatsApp kamu di sini (gunakan format internasional tanpa 0 di depan)
  const whatsappNumber = "6282144603278";
  const message = "Halo, saya ingin memesan produk WoodCarving !";

  const handleWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section
      className="relative  text-2xl-white py-20 px-10  bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: "url('/product5..jpeg')" }}
    >
      {/*  overlay gelap agar text tetap terbaca */}
      <div className="absolute inset-0 bg-black/87"></div>

      <div className="py-10 px-5 md:py-20 md:px-20 lg:py-30 lg:px-20  max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left Info Section */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-5"
        >
          <motion.p
            className="text-sm text-orange-400 tracking-widest"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            HOME &gt; CONTACT US
          </motion.p>
          <motion.h1
            className="text-white text-4xl md:text-5xl font-extrabold leading-tight mt-4"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            CONTACT <span className="text-amber-500">US</span>
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-6 "
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Have a question, custom request, or want to order our handcrafted
            products ? Contact us directly via WhatsApp.
          </motion.p>

          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition transform hover:scale-105 "
          >
            <MessageCircle size={32} />
            Order via WhatsApp
          </button>
        </motion.div>
      </div>
    </section>
  );
}
