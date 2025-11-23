import { create } from "zustand";

type CartSidebarState = {
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};

export const useCartSidebarStore = create<CartSidebarState>((set) => ({
  isOpen: false,
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
}));
