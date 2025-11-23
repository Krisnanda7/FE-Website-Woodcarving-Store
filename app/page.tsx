import About from "./components/home/aboutSection";
import HeroMade from "./components/home/heroMade";
import HeroSection from "./components/home/heroSection";
import Footer from "./components/layout/footer";
import Navbar from "./components/layout/navbar";
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
      <HeroMade />

      {/* 🖼️ Footer */}
      <Footer />
    </main>
  );
}
