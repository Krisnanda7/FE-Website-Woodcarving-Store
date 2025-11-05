import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function ContactPage() {
  return (
    <main className=" bg-black text-white">
      <Navbar />
      <h1 className="text-4xl font-extrabold mb-6">Hubungi Kami</h1>
      <form className="max-w-lg mx-auto space-y-4">
        <input
          type="text"
          placeholder="Nama"
          className="w-full border p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg"
        />
        <textarea
          placeholder="Pesan Anda"
          className="w-full border p-3 rounded-lg h-32"
        ></textarea>
        <button
          type="submit"
          className="bg-amber-500 hover:bg-amber-400 px-6 py-3 rounded-lg font-semibold"
        >
          Kirim
        </button>
      </form>
      <Footer />
    </main>
  );
}
