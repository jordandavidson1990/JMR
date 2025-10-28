import NavBarSticky from "../components/NavBarSticky";
import FooterEditorial from "../components/FooterEditorial";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { StatusMessage } from "../components/StatusMessage";

export default function Contact() {
  const form = useRef(null);
  const [status, setStatus] = useState({ message: "", type: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    const serviceId = process.env.NEXT_PUBLIC_YOUR_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY;
    setIsLoading(true);
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        setStatus({
          message: "Message Sent Successfully! We'll be in touch soon.",
          type: "success",
        });
        e.target.reset();
        setIsLoading(false);
      },
      (err) => {
        console.warn(err);
        setStatus({
          message: "Failed to send message. Please check your network.",
          type: "error",
        });
        setIsLoading(false);
      }
    );
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <NavBarSticky />
      <div className="max-w-xl mx-auto py-16 px-4">
        <h1 className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-300 drop-shadow-[0_4px_8px_rgba(255,0,0,0.4)]">
          Get In Touch
        </h1>
        <div className="bg-gray-900 p-8 md:p-10 rounded-xl shadow-3xl border border-red-900/50">
          <form className="space-y-6" onSubmit={handleSubmit} ref={form}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg bg-gray-800/80 border border-gray-700 p-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-200"
              required
              name="name"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg bg-gray-800/80 border border-gray-700 p-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-200"
              required
              name="email"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full rounded-lg bg-gray-800/80 border border-gray-700 p-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-200"
              required
              name="message"
            />
            <button
              type="submit"
              className={`w-full px-6 py-3 rounded-xl font-extrabold uppercase tracking-wider transition duration-300 transform shadow-lg
                  ${
                    isLoading
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 hover:scale-[1.01] active:scale-95 text-white"
                  }`}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                  Sending...
                </div>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
      <FooterEditorial />
      <StatusMessage
        message={status.message}
        type={status.type}
        onClose={() => setStatus({ message: "", type: "" })}
      />
    </div>
  );
}
