export const StatusMessage = ({ message, type, onClose }) => {
  if (!message) return null;

  const baseClasses =
    "fixed bottom-4 right-4 p-4 rounded-lg shadow-xl text-white transition-opacity duration-300 z-50 flex items-center";
  const typeClasses = type === "success" ? "bg-green-600" : "bg-red-600";

  return (
    <div className={`${baseClasses} ${typeClasses}`}>
      <span className="mr-3">{message}</span>
      <button
        onClick={onClose}
        className="ml-4 text-sm font-bold opacity-75 hover:opacity-100"
      >
        &times;
      </button>
    </div>
  );
};
