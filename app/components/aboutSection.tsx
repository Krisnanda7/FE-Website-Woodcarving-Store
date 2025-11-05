export default function About() {
  return (
    <section className="py-20 px-10 bg-white text-black">
      <h2 className="text-4xl font-extrabold mb-6">About Us</h2>
      <p className="text-lg mb-8">
        <strong>Yuyu Wood Carving</strong> begins with carefully selecting
        high-quality, sustainable wood. Every step, from carving intricate
        details to achieving a smooth finish, is performed by experienced
        artisans with decades of expertise.
      </p>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <button className="bg-primary text-white px-6 py-3 rounded-lg w-32">
          About Us
        </button>
        <iframe
          className="rounded-xl w-full h-72"
          src="https://www.youtube.com/embed/VIDEO_ID"
          title="Company Video"
        />
      </div>
    </section>
  );
}
