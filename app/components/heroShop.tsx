export default function HeroShop() {
  return (
    <section className="bg-black text-white py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text */}
        <div className="md:w-1/2">
          <p className="text-sm text-orange-400 tracking-widest">
            HOME &gt; SHOP
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-4">
            EXPLORE OUR HANDMADE WOODEN FURNITURE AND BALINESE CARVINGS
            COLLECTION
          </h1>
          <p className="text-gray-300 mt-6">
            Discover our exclusive collection of handcrafted wooden furniture
            and décor. Each piece is meticulously crafted by skilled Balinese
            artisans, combining timeless designs, sustainable materials, and
            unmatched quality.
          </p>

          <div className="flex gap-10 mt-10 border-t border-gray-600 pt-6">
            <div>
              <h3 className="font-semibold text-white">High Quality</h3>
              <p className="text-gray-400 text-sm mt-2">
                Made with the finest materials and unparalleled craftsmanship.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Fast Delivery</h3>
              <p className="text-gray-400 text-sm mt-2">
                Quick and reliable shipping from Bali to your home.
              </p>
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <img
            src="/product1..jpeg"
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
            className="rounded-xl object-cover h-[300px] w-full col-span-2"
          />
        </div>
      </div>
    </section>
  );
}
