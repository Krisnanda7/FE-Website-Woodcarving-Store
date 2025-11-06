"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, MapPin, Phone, Smartphone, Clock } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 lg:px-10">
        {/* Logo */}
        <div className="font-bold text-2xl tracking-wide">YuyuWood</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-sm font-medium">
          <Link href="/" className="hover:text-amber-500 transition-colors">
            Home
          </Link>
          <Link
            href="/products"
            className="hover:text-amber-500 transition-colors"
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="hover:text-amber-500 transition-colors"
          >
            About Us
          </Link>
          <Link href="/blog" className="hover:text-amber-500 transition-colors">
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:text-amber-500 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Desktop Right Icons */}
        <div className="hidden md:flex gap-6 items-center text-sm">
          <Link
            href="/wishlist"
            className="hover:text-amber-500 transition-colors"
          >
            ♡ Wishlist
          </Link>
          <Link
            href="/cart"
            className="hover:text-amber-500 text-xl transition-colors"
          >
            🛒
          </Link>
          <Link
            href="/account"
            className="hover:text-amber-500 transition-colors"
          >
            Account
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-200 hover:text-amber-500 transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black shadow-2xl transform transition-transform duration-500 ease-in-out z-40
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-800">
          <span className="font-semibold text-lg">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-amber-500 transition"
          >
            <X size={26} />
          </button>
        </div>

        <div className="flex flex-col mt-8 px-6 space-y-6 text-lg font-medium">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-amber-500 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/products"
            onClick={() => setIsOpen(false)}
            className="hover:text-amber-500 transition-colors"
          >
            Shop
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="hover:text-amber-500 transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/blog"
            onClick={() => setIsOpen(false)}
            className="hover:text-amber-500 transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-amber-500 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-6 px-6 text-sm text-gray-400 space-y-4">
          <div className="flex items-center gap-3">
            <MapPin size={18} className="text-amber-500" />
            <p>
              <span className="text-white font-semibold">Address:</span>
              <br />
              Street Name, NY 38954
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={18} className="text-amber-500" />
            <p>
              <span className="text-white font-semibold">Phone:</span>
              <br />
              578–393–4937
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Smartphone size={18} className="text-amber-500" />
            <p>
              <span className="text-white font-semibold">Mobile:</span>
              <br />
              578–393–4937
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Clock size={18} className="text-amber-500" />
            <p>
              <span className="text-white font-semibold">Opening hours:</span>
              <br />
              9AM – 5PM
            </p>
          </div>
        </div>
      </div>

      {/* Overlay (background blur) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
