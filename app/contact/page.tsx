import ContactSection from "../components/contact/contactSection";
import Footer from "../components/layout/footer";
import Navbar from "../components/layout/navbar";
import { motiion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="">
      <Navbar />
      <ContactSection />

      <div className="py-20 px-20 ">
        <div className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-3 gap-7 ">
          {[
            "product1..jpeg",
            "product2..jpeg",
            "product3..jpeg",
            "product4..jpeg",
            "product5..jpeg",
            "product6..jpeg",
          ].map((img, i) => (
            <img
              key={i}
              src={`/${img}`}
              alt={`Gallery ${i + 1}`}
              className="w-full h-64 object-cover rounded-xl"
            />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
