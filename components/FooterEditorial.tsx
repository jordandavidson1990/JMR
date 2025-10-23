export default function FooterEditorial() {
  return (
    <footer className="bg-black text-gray-400 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div>&copy; {new Date().getFullYear()} James Michael Rodgers</div>
        <div className="mt-4 md:mt-0">
          <a
            href="#"
            className="text-gray-400 hover:text-red-600 mx-2 transition"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-red-600 mx-2 transition"
          >
            Spotify
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-red-600 mx-2 transition"
          >
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
}
