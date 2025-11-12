import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <main
      className="relative text-white  px-6 lg:px-20  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/product5..jpeg')" }}
    >
      {/*  overlay gelap agar text tetap terbaca */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className=" max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-30 relative z-10">
        {/* Text */}

        <motion.div
          className="py-10 md:w-1/2"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.p
            className="text-sm text-orange-400 tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            HOME &gt; ABOUT
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold leading-tight mt-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            ABOUT US <span className="text-amber-500">MUTRA WOOD CARVING</span>
          </motion.h1>
          <p className="text-gray-300 mt-6">
            Discover our exclusive collection of handcrafted wooden furniture
            and décor. Each piece is meticulously crafted by skilled Balinese
            artisans, combining timeless designs, sustainable materials, and
            unmatched quality.
          </p>

          <motion.div
            className="flex gap-10 mt-10 border-t border-gray-600 pt-6"
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
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
          </motion.div>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          className="md:w-1/2 grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src="/product2..jpeg"
            alt="carving3"
            className="rounded-xl object-cover h-[300px] w-full col-span-2"
          />
        </motion.div>
      </div>
    </main>
  );
}
