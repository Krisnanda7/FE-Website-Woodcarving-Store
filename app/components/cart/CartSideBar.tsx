"use client";

import { useCartSidebarStore } from "@/store/useCartSidebarStore";
import { useCartStore } from "@/store/useCartStore";
import { X } from "lucide-react";

export default function CartSidebar() {
  const { cart, updateQuantity, removeFromCart } = useCartStore();
  const { isOpen, closeCart } = useCartSidebarStore();

  // === TOTAL HARGA ===
  const total = cart.reduce((sum, item) => {
    const cleaned = String(item.price).replace(/[^0-9]/g, "");
    const price = Number(cleaned);
    return sum + price * item.quantity;
  }, 0);

  // === WHATSAPP ===
  const handleWhatsAppOrder = () => {
    const phone = "6281234567890";
    const message = encodeURIComponent(
      `🛒 *Order Baru dari Website:*\n\n${cart
        .map(
          (item) =>
            `• ${item.name} x${item.quantity} — Rp${
              Number(item.price) * item.quantity
            }`
        )
        .join("\n")}\n\n💰 *Total:* Rp${total.toLocaleString()}`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <div
      className={`
    fixed z-50 bg-white shadow-2xl transition-all duration-300 flex flex-col 

    /* MOBILE STYLING */
    bottom-0 left-1/2 -translate-x-1/2 
    w-[90%] h-[70%] rounded-t-2xl 
    ${isOpen ? "translate-y-0" : "translate-y-full"}

  `}
    >
      {/* HEADER */}
      <div className="flex justify-between items-center p-5 border-b ">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <button onClick={closeCart}>
          <X size={24} />
        </button>
      </div>

      {/* LIST PRODUK */}
      <div className="p-5 flex-1 overflow-y-auto space-y-5">
        {cart.length === 0 ? (
          <p className="text-gray-500 text-center mt-10">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-4"
            >
              {/* Image + Name */}
              <div className="flex items-center gap-4 w-40 sm:w-48">
                <img
                  src={item.image}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h2 className="font-semibold text-sm">{item.name}</h2>
                  <p className="text-amber-600 text-xs">
                    {item.price.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Qty */}
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1 sm:gap-2">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                    }
                    className="px-2 py-1 border rounded"
                  >
                    −
                  </button>

                  <span className="text-sm w-6 text-center">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 border rounded"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-xs mt-2 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* FOOTER */}
      {cart.length > 0 && (
        <div className="p-5 border-t bg-white">
          <h2 className="text-lg font-semibold mb-3">
            Total:{" "}
            <span className="text-amber-700">Rp {total.toLocaleString()}</span>
          </h2>

          <button
            onClick={handleWhatsAppOrder}
            className="w-full bg-green-600 hover:bg-green-500 text-white py-3 rounded-lg font-semibold"
          >
            Checkout via WhatsApp
          </button>
        </div>
      )}
    </div>
  );
}
