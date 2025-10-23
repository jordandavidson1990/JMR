export default function HeroEditorial() {
  return (
    <section className="relative bg-black text-white h-[60vh] flex items-center justify-center overflow-hidden">
      <img
        src="/images/james-portrait.jpeg"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        alt="James Michael Rodgers"
      />
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
          James Michael Rodgers
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">
          The latest tracks, exclusive demos, and music store.
        </p>
        <a
          href="/store"
          className="inline-block bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full font-bold text-lg transition"
        >
          Shop Music
        </a>
      </div>
    </section>
  );
}
