import NavBarSticky from "../components/NavBarSticky";
import FooterEditorial from "../components/FooterEditorial";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const form = useRef(null);

  const handleSubmit = (e) => {
    const serviceId = process.env.NEXT_PUBLIC_YOUR_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY;
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        alert("Message Sent Successfully!");
        e.target.reset();
      },
      (error) => {
        alert("Failed to send message. Please try again.");
      }
    );
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <NavBarSticky />
      <div className="max-w-2xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-8">
          Contact James Michael Rodgers
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit} ref={form}>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded bg-gray-800 p-3 text-white"
            required
            name="name"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded bg-gray-800 p-3 text-white"
            required
            name="email"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full rounded bg-gray-800 p-3 text-white"
            required
            name="message"
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
