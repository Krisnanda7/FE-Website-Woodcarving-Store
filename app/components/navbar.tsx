"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-10 bg-black text-white">
      <div className="font-bold text-2xl">YuyuWood</div>
      <div className="flex gap-8">
        <Link href="/">Home</Link>
        <Link href="/products">Shop</Link>
        <Link href="/about">About Us</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="flex gap-4">
        <Link href="/wishlist">♡ Wishlist</Link>
        <Link href="/cart">🛒</Link>
        <Link href="/account">Account</Link>
      </div>
    </nav>
  );
}
