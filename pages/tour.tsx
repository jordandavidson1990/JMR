"use client";

import Image from "next/image";
import FooterEditorial from "../components/FooterEditorial";
import NavBarSticky from "../components/NavBarSticky";
import { tourDates } from "../data";
import { groupDatesByMonth } from "../utils";

export default function Tour() {
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
          width={100}
          height={100}
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
      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="space-y-12">
          {months.map((month) => (
            <div
              key={month}
              className="bg-gray-900 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-800"
            >
              <h2 className="text-3xl font-bold mb-6 border-b border-red-600 pb-2 text-red-500">
                {month}
              </h2>
              <div className="space-y-4">
                {groupedDates[month].map((gig, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-200"
                  >
                    <div
                      className="flex items-center mb-2 sm:mb-0"
                      onClick={() => window.open(gig.link, "_blank")}
                    >
                      <span className="text-xl mr-3">{gig.icon}</span>
                      <div>
                        <p className="text-lg font-semibold text-white">
                          {gig.event}
                        </p>
                        <p className="text-sm text-gray-400">{gig.location}</p>
                      </div>
                    </div>
                    <p className="text-md font-medium text-red-400 sm:text-right">
                      {gig.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-12 text-sm italic">
          Keep an eye on this space for more dates and ticket information!
        </p>
      </div>

      <FooterEditorial />
    </div>
  );
}
