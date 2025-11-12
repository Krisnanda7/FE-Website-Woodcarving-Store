"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 px-10 md:py-20 md:px-20 lg:py-20 lg:px-50 bg-white text-black">
      {/* Container utama untuk layout 2 kolom */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* kolom kiri Teks dan Tombol */}
        <div>
          <h2 className="text-4xl font-extrabold mb-6">About Us</h2>
          <p className="text-lg mb-8">
            <strong> Mutra Wood Carving</strong> begins with carefully selecting
            high-quality, sustainable wood. Every step, from carving intricate
            details to achieving a smooth finish, is performed by experienced
            artisans with decades of expertise.
          </p>
          {/* Saya asumsikan Anda ingin tombol "About Us" ini berada di sini */}
          <a href={`/about`}>
            <button className="cursor-pointer bg-amber-700 hover:bg-amber-600 text-white px-6 py-3 rounded-lg w-32">
              About Us
            </button>
          </a>
        </div>

        {/* kolom kanan Video YouTube */}
        <div>
          <iframe
            className="rounded-xl w-full h-72"
            src="https://www.youtube.com/embed/FBR9Ir7zQlc?si=ATlirSC0WMkFs-QL"
            title="Company Video"
            allowFullScreen // agar video bisa full screen
          />
        </div>
      </div>
    </section>
  );
}
