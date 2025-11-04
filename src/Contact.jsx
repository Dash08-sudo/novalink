import React from "react";

export default function Contact() {
  return (
    <div className="pt-24 px-6 text-center max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-gray-800">Contact Us</h2>
      <p className="text-gray-600 mb-6">
        Have questions or partnership inquiries? Reach out and we’ll get back to
        you soon.
      </p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border rounded-lg px-4 py-2"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border rounded-lg px-4 py-2"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full border rounded-lg px-4 py-2"
        ></textarea>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
          Send Message
        </button>
      </form>
    </div>
  );
}
