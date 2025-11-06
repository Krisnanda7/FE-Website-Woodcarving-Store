import About from "./components/aboutSection";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection";
import Navbar from "./components/navbar";
import ProductList from "./components/productList";
import "./globals.css";

export default function HomePage() {
  return (
    <main className="min-h-screen ">
      {/* 🧭 Navbar */}
      <Navbar />

      {/* 🌳 Hero Section */}
      <HeroSection />

      {/* 🪵 About Section */}
      <About />

      {/* 🧰 Product Showcase */}
      <ProductList />

      {/* 🖼️ Footer */}
      <Footer />
    </main>
  );
}
