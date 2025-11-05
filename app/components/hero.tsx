export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-black">
      <div className="text-left max-w-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          HANDMADE WOODEN CREATIONS <br /> AND BALINESE WOOD CARVINGS
        </h1>
        <p className="text-gray-300 mb-6">
          Explore Yuyu Wood Carving’s exquisite collection of handcrafted wooden
          furniture and authentic Balinese carvings. Perfect for adding elegance
          to your home.
        </p>
        <button className="bg-primary px-6 py-3 rounded-lg font-semibold">
          Visit Shop
        </button>
        <div className="flex gap-10 mt-10">
          <div>
            <h2 className="text-3xl font-bold">200+</h2>
            <p className="text-sm text-gray-400">products in store</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">15</h2>
            <p className="text-sm text-gray-400">years of experience</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-10 md:mt-0">
        <img
          src="/images/carving1.jpg"
          className="rounded-2xl w-48 h-80 object-cover"
        />
        <img
          src="/images/carving2.jpg"
          className="rounded-2xl w-48 h-72 object-cover"
        />
        <img
          src="/images/carving3.jpg"
          className="rounded-2xl w-32 h-60 object-cover"
        />
      </div>
    </section>
  );
}
