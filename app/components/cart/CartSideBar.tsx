"use client";

import { useCartSidebarStore } from "@/store/useCartSidebarStore";
import { useCartStore } from "@/store/useCartStore";
import { useCurrencyStore, formatPrice } from "@/store/useCurrencyStore";
import { X } from "lucide-react";

export default function CartSidebar() {
  const { cart, updateQuantity, removeFromCart } = useCartStore();
  const { isOpen, closeCart } = useCartSidebarStore();
  const { currency, exchangeRate } = useCurrencyStore();

  // === TOTAL HARGA ===
  const total = cart.reduce((sum, item) => {
    const cleaned = String(item.price).replace(/[^0-9]/g, "");
    const price = Number(cleaned);
    return sum + price * item.quantity;
  }, 0);

  //whatsapp order
  const handleWhatsAppOrder = () => {
    const phone = "6282147324954";
    const message = encodeURIComponent(
      `*ORDER BARU DARI WEBSITE:*\n\n${cart
        .map(
          (item) =>
            `• ${item.name} x${item.quantity} — ${formatPrice(Number(item.price) * item.quantity, currency, exchangeRate)}${item.engravingText ? `\n   Custom Engraving: "${item.engravingText}" (${item.engravingFont})` : ""}`
        )
        .join("\n")}\n\n*TOTAL:* ${formatPrice(total, currency, exchangeRate)}`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <div
      className={`
    fixed z-50 bg-white shadow-2xl transition-all duration-300 flex flex-col 

    /* MOBILE STYLING */
    bottom-0 left-1/2 -translate-x-1/2 
    w-[90%] h-[70%] md:w-[400px] md:h-full md:left-auto md:right-0 md:translate-x-0 md:rounded-l-2xl md:rounded-tr-none
    rounded-t-2xl 
    ${isOpen ? "translate-y-0 md:translate-x-0" : "translate-y-full md:translate-x-full md:translate-y-0"}

  `}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-5 border-b ">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <button onClick={closeCart}>
          <X size={24} />
        </button>
      </div>

      {/* List produk */}
      <div className="p-5 flex-1 overflow-y-auto space-y-5 text-black">
        {cart.length === 0 ? (
          <p className="text-gray-500 text-center mt-10">Your cart is empty.</p>
        ) : (
          cart.map((item) => {
            const itemIdentifier = item.cartItemId || item.id;
            return (
            <div
              key={itemIdentifier}
              className="flex items-center justify-between border-b pb-4"
            >
              {/* Image */}
              <div className="flex items-center gap-4 w-40 sm:w-48">
                <img
                  src={item.image}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h2 className="font-semibold text-sm">{item.name}</h2>
                  <p className="text-amber-600 text-xs font-bold">
                    {formatPrice(item.price, currency, exchangeRate)}
                  </p>
                  {item.engravingText && (
                    <div className="mt-1">
                      <p className="text-[10px] text-gray-500 font-semibold leading-tight">Engraving:</p>
                      <p className="text-[11px] text-gray-700 italic leading-tight">&quot;{item.engravingText}&quot;</p>
                    </div>
                  )}
                </div>
              </div>

              {/* quantity */}
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1 sm:gap-2">
                  <button
                    onClick={() =>
                      updateQuantity(itemIdentifier, Math.max(item.quantity - 1, 1))
                    }
                    className="px-2 py-1 border rounded hover:bg-gray-100"
                  >
                    −
                  </button>

                  <span className="text-sm w-6 text-center">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => updateQuantity(itemIdentifier, item.quantity + 1)}
                    className="px-2 py-1 border rounded hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(itemIdentifier)}
                  className="text-red-500 text-xs mt-2 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
            );
          })
        )}
      </div>

      {/* FOOTER */}
      {cart.length > 0 && (
        <div className="p-5 border-t bg-white">
          <h2 className="text-lg font-semibold mb-3">
            Total:{" "}
            <span className="text-amber-700">{formatPrice(total, currency, exchangeRate)}</span>
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
