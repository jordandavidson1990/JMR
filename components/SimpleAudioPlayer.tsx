import { useRef } from "react";
import { useTrackPlayback } from "../hooks";
import { formatTime } from "../utils";

export const SimpleAudioPlayer = ({ url }) => {
  const audioRef = useRef(null);
  const { isPlaying, togglePlayPause, currentTime, duration, handleSeek } =
    useTrackPlayback(audioRef);

  const handleSeekChange = (e) => {
    handleSeek(parseFloat(e.target.value));
  };

  return (
    <div className="mt-2 p-3 bg-gray-900 rounded-lg">
      <audio ref={audioRef} src={url}></audio>

      <div className="flex justify-center mb-3">
        <button
          onClick={togglePlayPause}
          className="text-red-500 hover:text-red-300 transition duration-150 p-2 rounded-full bg-gray-700 hover:bg-red-900 flex items-center justify-center w-10 h-10 focus:outline-none focus:ring-4 focus:ring-red-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
          aria-label={isPlaying ? "Pause track preview" : "Play track preview"}
          title={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 5v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM9 7H7v6h2V7zm4 0h-2v6h2V7z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 ml-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6 3l14 7-14 7V3z" />
            </svg>
          )}
        </button>
      </div>

      <div className="flex items-center space-x-2 text-xs font-mono text-gray-400">
        <span className="w-8 text-left">{formatTime(currentTime)}</span>

        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          step="0.01"
          onChange={handleSeekChange}
          className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer range-timeline"
          style={
            {
              "--progress": `${(currentTime / duration) * 100 || 0}%`,
            } as React.CSSProperties
          }
          disabled={duration === 0}
        />

        <span className="w-8 text-right">{formatTime(duration)}</span>
      </div>

      <style jsx>{`
        .range-timeline {
          /* WebKit (Chrome/Safari) */
          -webkit-appearance: none;
          height: 6px;
          border-radius: 3px;
          background: #374151; /* Gray-700 track background */
          background-image: linear-gradient(
            to right,
            #ef4444 var(--progress),
            #374151 var(--progress)
          ); /* Red fill */
          background-repeat: no-repeat;
        }

        .range-timeline::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #ef4444; /* Red thumb */
          cursor: pointer;
          box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.3);
          transition: background 0.15s ease-in-out;
        }

        /* Firefox */
        .range-timeline::-moz-range-track {
          width: 100%;
          height: 6px;
          background: #374151;
          border-radius: 3px;
        }
        .range-timeline::-moz-range-progress {
          background: #ef4444; /* Red fill */
          height: 6px;
          border-radius: 3px;
        }
        .range-timeline::-moz-range-thumb {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #ef4444;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
};
