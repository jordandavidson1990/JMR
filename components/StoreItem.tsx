import Image from "next/image";

export default function StoreItem({ title, cover, buyUrl }) {
  return (
    <div className="bg-gray-900 rounded-lg shadow flex flex-col items-center p-6">
      <Image
        src={cover}
        alt=""
        className="w-32  rounded shadow mb-4"
        width={300}
        height={300}
      />
      <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
      <a
        href={buyUrl}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition font-bold"
      >
        Buy Now
      </a>
    </div>
  );
}
