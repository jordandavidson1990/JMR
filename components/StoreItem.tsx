import Image from "next/image";

export const StoreItem = ({ title, cover, buyUrl, price }) => {
  return (
    <div className="min-w-[300px] bg-gray-800 p-4 rounded-xl shadow-xl hover:shadow-red-700/50 transition duration-300 transform hover:-translate-y-1 border border-gray-700 w-64 flex-shrink-0 snap-center">
      <Image
        src={cover}
        alt=""
        className="w-full h-48 object-cover rounded-t-lg object-cover object-center"
        width={300}
        height={300}
      />
      <h3 className="text-xl font-bold text-white truncate mb-1">{title}</h3>
      <p className="text-sm text-red-300 mb-3">James Michael Rodgers</p>
      <div className="flex justify-between items-center pt-3 border-t border-gray-700">
        {price && (
          <p className="text-red-400 font-extrabold text-lg">
            £{price.toFixed(2)}
          </p>
        )}
        <button
          className="bg-red-600 text-sm text-white px-4 py-1.5 rounded-full shadow-md hover:bg-red-500 transition duration-200"
          onClick={() => window.open(buyUrl, "_blank")}
        >
          Purchase
        </button>
      </div>
    </div>
  );
};
