export default function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 px-6 md:px-16 lg:px-20 py-16 md:py-24 bg-black text-white min-h-screen">
      <div className="text-left max-w-xl space-y-6 flex-shrink-0">
        <h1 className="py-10 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-wide">
          HANDMADE WOODEN CREATIONS AND BALINESE WOOD CARVINGS
        </h1>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Explore Yuyu Wood Carving's exquisite collection of handcrafted wooden
          furniture and authentic Balinese carvings. Perfect for adding elegance
          to your home.
        </p>
        <button className="cursor-pointer bg-amber-700 hover:bg-amber-600 transition-colors px-8 py-3 rounded-lg font-semibold text-white">
          Visit Shop
        </button>
        <div className="flex gap-12 pt-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold">50+</h2>
            <p className="text-sm text-gray-400 mt-1">products in our store</p>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold">5</h2>
            <p className="text-sm text-gray-400 mt-1">years of experience</p>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="md:w-1/2 grid grid-cols-2 gap-4">
        <img
          src="/product5..jpeg"
          alt="carving1"
          className="rounded-xl object-cover h-[300px] w-full"
        />
        <img
          src="/product2..jpeg"
          alt="carving2"
          className="rounded-xl object-cover h-[300px] w-full"
        />
        <img
          src="/product2..jpeg"
          alt="carving3"
          className="rounded-xl object-cover h-[300px] w-full col-span-2 "
        />
      </div>
    </section>
  );
}
