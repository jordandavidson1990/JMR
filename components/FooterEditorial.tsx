const FooterEditorial = () => (
  <footer className="bg-black text-gray-400 py-10 mt-16 border-t border-gray-800">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-col items-center md:items-start space-y-1">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} James Michael Rodgers. All Rights
          Reserved.
        </p>
        <p className="text-xs text-gray-500">
          Developed by:
          <a
            href="https://www.linkedin.com/in/jordan-davidson-1990/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 font-semibold hover:text-red-500 transition duration-200 ml-1"
          >
            Jordan Davidson
          </a>
        </p>
      </div>

      <div className="mt-6 md:mt-0 flex flex-wrap justify-center md:justify-end space-x-4">
        <a
          href="https://www.instagram.com/jamesmichaelrodgers/"
          className="text-gray-400 hover:text-red-500 transition duration-200"
        >
          Instagram
        </a>
        <a
          href="https://open.spotify.com/artist/2RC1s0mnZiQJp2Pm2bGnM4?si=aBe2zp6-Qf6jsQbp2wiJNQ"
          className="text-gray-400 hover:text-red-500 transition duration-200"
        >
          Spotify
        </a>
        <a
          href="https://www.youtube.com/channel/UCcB5jHP1cm9v7U94En4iboQ"
          className="text-gray-400 hover:text-red-500 transition duration-200"
        >
          YouTube
        </a>
        <a
          href="https://www.facebook.com/jamesmichaelrodgers"
          className="text-gray-400 hover:text-red-500 transition duration-200"
        >
          Facebook
        </a>
        <a
          href="https://tidal.com/artist/15693372"
          className="text-gray-400 hover:text-red-500 transition duration-200"
        >
          Tidal
        </a>
      </div>
    </div>
  </footer>
);

export default FooterEditorial;
