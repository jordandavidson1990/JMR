export default function StoreItem({ title, price, cover, buyUrl }) {
  return (
    <div className="bg-gray-900 rounded-lg shadow flex flex-col items-center p-6">
      <img src={cover} alt={title} className="w-32  rounded shadow mb-4" />
      <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
      <span className="text-red-400 text-xl font-semibold mb-4">{price}</span>
      <a
        href={buyUrl}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition font-bold"
      >
        Buy Now
      </a>
    </div>
  );
}
