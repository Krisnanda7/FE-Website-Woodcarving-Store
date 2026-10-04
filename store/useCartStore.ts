import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Product {
  cartItemId?: string; // To differentiate same products with different engravings
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  engravingText?: string;
  engravingFont?: string;
}

interface CartState {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (idOrCartItemId: string) => void;
  updateQuantity: (idOrCartItemId: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],

      addToCart: (product) =>
        set((state) => {
          const itemIdentifier = product.cartItemId || product.id;
          const existing = state.cart.find(
            (item) => (item.cartItemId || item.id) === itemIdentifier
          );
          if (existing) {
            return {
              cart: state.cart.map((item) =>
                (item.cartItemId || item.id) === itemIdentifier
                  ? { ...item, quantity: item.quantity + product.quantity }
                  : item
              ),
            };
          }
          // Ensure it has a cartItemId for future reference
          const newProduct = { ...product, cartItemId: itemIdentifier };
          return { cart: [...state.cart, newProduct] };
        }),

      removeFromCart: (idOrCartItemId) =>
        set((state) => ({
          cart: state.cart.filter((item) => (item.cartItemId || item.id) !== idOrCartItemId),
        })),

      updateQuantity: (idOrCartItemId, quantity) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            (item.cartItemId || item.id) === idOrCartItemId ? { ...item, quantity } : item
          ),
        })),

      clearCart: () => set({ cart: [] }),
    }),

    {
      name: "cart-storage", // key di localStorage
    }
  )
);
