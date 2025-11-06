import Image from "next/image";
import { SimpleAudioPlayer } from "./SimpleAudioPlayer";
import { Track } from "../types";

export const MusicCarousel = ({ tracks }: { tracks: Track[] }) => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8">Featured Music</h2>
      <div className="flex overflow-x-scroll space-x-6 pb-4 snap-x snap-mandatory hide-scrollbar">
        {tracks.map((track, idx) => (
          <div
            key={idx}
            className="min-w-[300px] bg-gray-900 rounded-lg shadow flex-shrink-0 bg-gray-800 p-4 rounded-xl shadow-xl hover:shadow-red-700/50 transition duration-300 transform hover:-translate-y-1 border border-gray-700 snap-center"
          >
            <Image
              src={track.cover}
              alt={track.title}
              className="w-full h-auto object-cover rounded-t-lg"
              width={300}
              height={192}
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-2">
                {track.title}
              </h3>
              {track.url && track.buyUrl && (
                <SimpleAudioPlayer url={track.url} />
              )}
              {!track.buyUrl && (
                <p
                  className="text-sm font-extrabold text-red-300  tracking-widest py-2 rounded-md shadow-xl transition duration-500 animate-slow-pulse"
                  style={{ textShadow: "0 0 8px rgba(252, 165, 165, 0.7)" }}
                >
                  Coming soon
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
