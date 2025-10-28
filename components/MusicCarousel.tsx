import Image from "next/image";
export default function MusicCarousel({ tracks }) {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8">Featured Music</h2>
      <div className="flex overflow-x-auto space-x-6 pb-4">
        {tracks.map((track, idx) => (
          <div
            key={idx}
            className="min-w-[300px] bg-gray-900 rounded-lg shadow flex-shrink-0"
          >
            <Image
              src={track.cover}
              alt={track.title}
              className="w-full h-48 object-cover rounded-t-lg"
              width={300}
              height={192}
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-2">
                {track.title}
              </h3>
              {track.url && (
                <audio controls className="w-full mt-2">
                  <source src={track.url} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
