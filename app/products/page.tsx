import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HeroShop from "../components/heroShop";
import ProductList from "../components/productList";

export default function ProductsPage() {
  return (
    <>
      <div className="bg-white min-h-screen">
        <Navbar />
        <HeroShop />
        <ProductList />
        <Footer />
      </div>
    </>
  );
}
