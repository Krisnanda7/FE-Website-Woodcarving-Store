"use client";

import { useCurrencyStore } from "@/store/useCurrencyStore";

export default function CurrencyToggle() {
  const { currency, setCurrency } = useCurrencyStore();
  const isUSD = currency === "USD";

  return (
    <button
      onClick={() => setCurrency(isUSD ? "IDR" : "USD")}
      className="flex items-center bg-gray-100 hover:bg-gray-200 text-xs font-semibold rounded-full px-2 py-1 transition-all focus:outline-none"
      title="Toggle Currency"
    >
      <span className={`transition-colors ${isUSD ? "text-gray-400" : "text-amber-700"}`}>IDR</span>
      <span className="mx-1 text-gray-300">|</span>
      <span className={`transition-colors ${isUSD ? "text-amber-700" : "text-gray-400"}`}>USD</span>
    </button>
  );
}
