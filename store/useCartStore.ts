import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],

      addToCart: (product) =>
        set((state) => {
          const existing = state.cart.find((item) => item.id === product.id);
          if (existing) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + product.quantity }
                  : item
              ),
            };
          }
          return { cart: [...state.cart, product] };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),

      updateQuantity: (id, quantity) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        })),

      clearCart: () => set({ cart: [] }),
    }),

    {
      name: "cart-storage", // key di localStorage
    }
  )
);
