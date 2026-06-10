"use client";

export default function ProductCard({ product, currentPage }: any) {
  const setReturnPage = () => {
    if (typeof window !== "undefined" && currentPage) {
      try {
        sessionStorage.setItem("productsReturnPage", String(currentPage));
      } catch (e) {
        // ignore
      }
    }
  };
  return (
    <div
      key={product.id}
      className=" rounded-2xl p-5 shadow-lg hover:scale-105  transition-transform duration-500 "
    >
      <a href={`/products/${product.id}`} onClick={setReturnPage}>
        <img
          src={product.image}
          alt={product.name}
          className="rounded-xl mb-4 w-full h-56 object-cover"
        />
      </a>

      <a href={`/products/${product.id}`} onClick={setReturnPage}>
        <h3 className="text-center text-2xl font-semibold text-black mb-2 hover:text-amber-700 hover:scale-105 transition-transform duration-500">
          {product.name}
        </h3>
        <p className="text-center text-gray-600 font-medium">
          {product.category}
        </p>
        <p className="text-center text-black font-medium">{product.price}</p>
      </a>
    </div>
  );
}
