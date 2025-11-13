import Image from "next/image";
import { tourDates } from "../data";
import { groupDatesByMonth } from "../utils";
import { FooterEditorial, NavBarSticky } from "../components";
import { useTour } from "../hooks/useTour";

const Tour = () => {
  const { tourDates, isLoading, error } = useTour();
  const groupedDates = groupDatesByMonth(tourDates);
  const months = Object.keys(groupedDates);

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <NavBarSticky />

      <section className="relative bg-black text-white h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/tour-1-bw.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt=""
          width={800}
          height={600}
          priority={true}
        />
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h1
            className="text-6xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-300"
            style={{ lineHeight: "normal" }}
          >
            Upcoming Tour Dates
          </h1>
        </div>
      </section>
      {isLoading ? (
        <div className="max-w-4xl mx-auto py-16 px-4 text-center text-red-500 min-h-screen bg-gray-950">
          <svg
            className="animate-spin h-8 w-8 mx-auto mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <p className="text-white">Loading the latest tour schedule...</p>
        </div>
      ) : (
        <div className="min-h-screen bg-gray-950 text-white font-sans">
          <div className="max-w-4xl mx-auto py-16 px-4">
            <h1 className="text-4xl font-extrabold text-center mb-12 text-red-500 border-b-2 border-red-700 pb-4">
              Upcoming Tour Dates
            </h1>

            {error && (
              <div className="bg-yellow-900 text-yellow-300 p-4 rounded-lg mb-8 text-sm border border-yellow-700">
                ⚠️ **Error:** {error}
              </div>
            )}

            <div className="space-y-12">
              {months.map((month) => (
                <div
                  key={month}
                  className="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-800"
                >
                  <h2 className="text-3xl font-bold mb-6 border-b border-red-600 pb-2 text-red-500">
                    {month}
                  </h2>
                  <div className="space-y-4">
                    {groupedDates[month].map((gig, index) => (
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-xl bg-gray-800 hover:bg-red-900/20 transition duration-200 cursor-pointer border-l-4 border-red-600 shadow-md"
                        onClick={() => window.open(gig.link, "_blank")}
                      >
                        <div className="flex items-center mb-2 sm:mb-0">
                          <div>
                            <p className="text-lg font-semibold text-white">
                              {gig.event}
                            </p>
                            <p className="text-sm text-gray-400">
                              {gig.location}
                            </p>
                          </div>
                        </div>
                        {/* Date is styled to look like a prominent tag */}
                        <p className="text-md font-extrabold px-3 py-1 bg-red-600 text-white rounded-full sm:text-right shadow-lg">
                          {gig.date}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {tourDates.length === 0 && !isLoading && (
              <div className="text-center text-gray-400 py-12">
                <p className="text-xl">
                  No tour dates currently scheduled. Check back soon!
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <FooterEditorial />
    </div>
  );
};

export default Tour;
