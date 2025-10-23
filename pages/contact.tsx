import NavBarSticky from "../components/NavBarSticky";
import FooterEditorial from "../components/FooterEditorial";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const YOUR_SERVICE_ID = "service_z216kar";
const YOUR_TEMPLATE_ID = "template_6o5331p";
const YOUR_PUBLIC_KEY = "scuS7VCp5w7XSD_z2";

export default function Contact() {
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        form.current,
        YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
          console.log(result.text);
          e.target.reset(); // Clear the form after success
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.log(error.text);
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
