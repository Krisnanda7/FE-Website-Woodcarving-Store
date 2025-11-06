"use client";

export default function FilterSidebar({
  selectedCategories,
  onCategoryChange,
}) {
  const categories = [
    "Abstract",
    "Animal",
    "Balinese Statue",
    "Buddha",
    "Cross Medallions",
    "Dragon",
    "Hand",
    "Hindu God",
    "Kitchen Set",
  ];

  return (
    <aside className="bg-white rounded-xl shadow p-6 sticky top-20 h-fit">
      <h2 className="font-bold text-lg mb-4">Filter by price</h2>
      <input
        type="range"
        min="0"
        max="20000000"
        className="w-full accent-amber-600"
      />

      <h2 className="font-bold text-lg mt-8 mb-4">Filter by category</h2>
      <div className="flex flex-col gap-2">
        {categories.map((cat) => (
          <label
            key={cat}
            className={`flex items-center gap-2 cursor-pointer hover:text-amber-600 transition ${
              selectedCategories.includes(cat) ? "text-amber-600" : ""
            }`}
          >
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat)}
              onChange={() => onCategoryChange(cat)}
            />
            {cat}
          </label>
        ))}
      </div>
    </aside>
  );
}
