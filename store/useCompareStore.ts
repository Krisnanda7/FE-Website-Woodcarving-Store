import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  dimensions?: string;
  material?: string;
}

interface CompareState {
  compareList: Product[];
  addToCompare: (product: Product) => void;
  removeFromCompare: (id: string) => void;
  clearCompare: () => void;
}

export const useCompareStore = create<CompareState>()(
  persist(
    (set) => ({
      compareList: [],

      addToCompare: (product) =>
        set((state) => {
          const existing = state.compareList.find((item) => item.id === product.id);
          if (existing) return state; // Already in compare list
          if (state.compareList.length >= 3) {
            // Either reject or replace the oldest. Let's alert or simply ignore if >= 3.
            // For now, we will just not add it, and let UI handle the warning if possible.
            return state; 
          }
          return { compareList: [...state.compareList, product] };
        }),

      removeFromCompare: (id) =>
        set((state) => ({
          compareList: state.compareList.filter((item) => item.id !== id),
        })),

      clearCompare: () => set({ compareList: [] }),
    }),
    {
      name: "compare-storage",
    }
  )
);
