const products = [
  {
    id: 1,
    name: "Ukiran Garuda Kayu Jati",
    image: "/images/garuda.jpg",
    price: "Rp 2.500.000",
  },
  {
    id: 2,
    name: "Pahatan Relief Bali",
    image: "/images/relief.jpg",
    price: "Rp 1.200.000",
  },
  {
    id: 3,
    name: "Patung Dewa Wisnu",
    image: "/images/wisnu.jpg",
    price: "Rp 1.800.000",
  },
];

export default function ProductList() {
  return (
    <section className="py-20 px-10 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Produk Unggulan</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-900 rounded-2xl p-5 shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={product.image}
              alt={product.name}
              className="rounded-xl mb-4 w-full h-56 object-cover"
            />
            <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
            <p className="text-amber-400">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
