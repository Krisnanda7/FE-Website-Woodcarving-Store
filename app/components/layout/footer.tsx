import { Facebook, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-16 lg:px-20 border-t border-gray-800">
      <div className="max-w-4xl  mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12 ">
        {/* Shop Section */}
        <div>
          <h3 className="text-xl font-bold mb-6">Menu</h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <a href={"/"} className="hover:text-amber-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href={"/products"}
                className="hover:text-amber-500 transition-colors"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href={"/about"}
                className="hover:text-amber-500 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-500 transition-colors">
                Cart
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-500 transition-colors">
                WishList
              </a>
            </li>
            <li>
              <a
                href={"/contact"}
                className="hover:text-amber-500 transition-colors"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Find Us Section */}
        <div>
          <h3 className="text-xl font-bold mb-6">Find US</h3>
          <div className="space-y-3 text-gray-400">
            <p>
              Banjar Tampad, Batubulan Kangin, Sukawati
              <br />
              Kabupaten Gianyar, Bali 80552
            </p>
            <a
              href="https://wa.me/6282147324954?text=Saya%20tertarik%20dengan%20produk%20Anda"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500"
            >
              082147324954
            </a>
            <br />
            <a
              href="https://wa.me/6281338166331?text=Saya%20tertarik%20dengan%20produk%20Anda"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500"
            >
              081338166331
            </a>
            <br />
            <a
              href="mailto:mutrawoodcarving@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-amber-500"
            >
              mutrawoodcarving@gmail.com
            </a>
          </div>
        </div>

        {/* Work Hours Section */}
        <div>
          <h3 className="text-xl font-bold mb-6">Work Hours</h3>
          <p className="text-gray-400 mb-6">Mon-Sun 08:00AM - 08:00PM</p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:mutrawoodcarving@gmail.com"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
