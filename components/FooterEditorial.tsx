export default function FooterEditorial() {
  return (
    <footer className="bg-black text-gray-400 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div>&copy; {new Date().getFullYear()} James Michael Rodgers</div>
        <div className="mt-4 md:mt-0">
          <a
            href="https://www.instagram.com/jamesmichaelrodgers/"
            className="text-gray-400 hover:text-red-600 mx-2 transition"
          >
            Instagram
          </a>
          <a
            href="https://open.spotify.com/artist/2RC1s0mnZiQJp2Pm2bGnM4?si=aBe2zp6-Qf6jsQbp2wiJNQ"
            className="text-gray-400 hover:text-red-600 mx-2 transition"
          >
            Spotify
          </a>
          <a
            href="https://www.youtube.com/channel/UCcB5jHP1cm9v7U94En4iboQ"
            className="text-gray-400 hover:text-red-600 mx-2 transition"
          >
            YouTube
          </a>
          <a
            href="https://www.facebook.com/jamesmichaelrodgers"
            className="text-gray-400 hover:text-red-600 mx-2 transition"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
