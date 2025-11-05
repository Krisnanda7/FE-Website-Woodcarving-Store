import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ProductList from "../components/productList";

export default function ProductsPage() {
  return (
    <section className="pt-20">
      <Navbar />
      <ProductList />
      <Footer />
    </section>
  );
}
