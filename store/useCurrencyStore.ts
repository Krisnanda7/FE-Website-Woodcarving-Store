import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Currency = "IDR" | "USD";

interface CurrencyState {
  currency: Currency;
  exchangeRate: number; // e.g., 1 USD = 15000 IDR
  setCurrency: (currency: Currency) => void;
  setExchangeRate: (rate: number) => void;
}

export const useCurrencyStore = create<CurrencyState>()(
  persist(
    (set) => ({
      currency: "IDR", // default
      exchangeRate: 15500, // Hardcoded for now, can be fetched from API later
      setCurrency: (currency) => set({ currency }),
      setExchangeRate: (rate) => set({ exchangeRate: rate }),
    }),
    {
      name: "currency-storage",
    }
  )
);

export const formatPrice = (priceInIDR: number, currency: Currency, exchangeRate: number) => {
  if (currency === "USD") {
    const priceInUSD = priceInIDR / exchangeRate;
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(priceInUSD);
  }

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(priceInIDR);
};
