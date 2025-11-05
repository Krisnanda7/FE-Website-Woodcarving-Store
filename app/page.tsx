import About from "./components/aboutSection";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import ProductList from "./components/productList";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* 🧭 Navbar */}
      <Navbar />

      {/* 🌳 Hero Section */}
      <Hero />

      {/* 🪵 About Section */}
      <About />

      {/* 🧰 Product Showcase */}
      <ProductList />

      {/* 🖼️ Footer */}
      <Footer />
    </main>
  );
}
