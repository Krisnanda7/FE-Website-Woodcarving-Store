"use client";

import { useCartStore } from "@/store/useCartStore";
import { useState } from "react";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCartStore();

  //Total Product
  const total = cart.reduce((sum, item) => {
    // Bersihkan string harga dari karakter non-digit
    const cleanedPrice = String(item.price).replace(/[^0-9]/g, "");

    // Konversi ke angka
    const price = Number(cleanedPrice);

    // Ambil quantity. Gunakan 0 jika quantity-nya NAN/undefined.
    const quantity = Number(item.quantity) || 0;

    // Pastikan price adalah angka yang valid (jika tidak, anggap 0)
    const itemTotal = (isNaN(price) ? 0 : price) * quantity;

    return sum + itemTotal;
  }, 0);

  //button pesan ke whatsapp
  const handleWhatsAppOrder = () => {
    const phone = "6281338166331";

    // Buat message lebih sederhana dan pastikan encoding benar
    const orderList = cart
      .map((item) => {
        const itemPrice = Number(String(item.price).replace(/[^0-9]/g, ""));
        const itemTotal = itemPrice * item.quantity;
        return `${item.name} x${
          item.quantity
        } - Rp${itemTotal.toLocaleString()}`;
      })
      .join("\n");

    const message = `Order Baru dari Website:\n\n${orderList}\n\nTotal: Rp${total.toLocaleString()}\n\nSilakan konfirmasi pesanan ini.`;

    // Encode message dengan benar
    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen py-10 px-4 sm:px-10 md:px-20">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
        🛒 Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-center mt-10">Your cart is empty.</p>
      ) : (
        <>
          <div className="flex flex-col gap-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row justify-between sm:items-center border-b pb-4"
              >
                <div className="flex items-center gap-4 mb-4 sm:mb-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div>
                    <h2 className="font-semibold text-lg">{item.name}</h2>
                    <p className="text-amber-600 text-sm">
                      Rp {item.price.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                    }
                    className="px-3 py-1 border rounded text-lg font-bold"
                  >
                    −
                  </button>
                  <span className="text-lg font-medium w-6 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 border rounded text-lg font-bold"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-3 text-red-500 hover:underline text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <h2 className="text-xl md:text-2xl font-semibold">
              Total:{" "}
              <span className="text-amber-700">
                Rp {total.toLocaleString()}
              </span>
            </h2>

            <button
              onClick={handleWhatsAppOrder}
              className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-semibold w-full sm:w-auto"
            >
              Checkout via WhatsApp
            </button>
          </div>
        </>
      )}
    </main>
  );
}
