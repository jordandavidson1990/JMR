import NavBarSticky from "../components/NavBarSticky";
import FooterEditorial from "../components/FooterEditorial";

export default function Contact() {
  return (
    <div className="bg-black text-white min-h-screen">
      <NavBarSticky />
      <div className="max-w-2xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-8">
          Contact James Michael Rodgers
        </h1>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded bg-gray-800 p-3 text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded bg-gray-800 p-3 text-white"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full rounded bg-gray-800 p-3 text-white"
          />
          <button
            type="submit"
            className="bg-red-600 px-6 py-2 rounded text-white font-bold hover:bg-red-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
      <FooterEditorial />
    </div>
  );
}
