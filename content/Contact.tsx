"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: send formData to an API or service
    console.log("contact form submitted", formData);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
        <p className="p-6 pt-5 text-center mt-2 font-light font-mono tracking-wide bg-gradient-to-r from-red-500 to-amber-600 bg-clip-text text-transparent">
          Questions<span className="text-black">,</span> idées<span className="text-black">,</span> ou juste bésoin d'entrer en contact<span className="text-black">?</span> Laissez nous un message<span className="text-black">!</span>
        </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium bg-gradient-to-r from-red-500 to-amber-600 bg-clip-text text-transparent">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-white mt-1 p-1 block text-black w-full rounded border-gray-300 shadow-sm focus:ring focus:ring-indigo-200"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium bg-gradient-to-r from-red-500 to-amber-600 bg-clip-text text-transparent">
            Téléphone (optionnel)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="bg-white mt-1 p-1 block text-black w-full rounded border-gray-300 shadow-sm focus:ring focus:ring-indigo-200"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium bg-gradient-to-r from-red-500 to-amber-600 bg-clip-text text-transparent">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-white mt-1 p-1 block text-black w-full rounded border-gray-300 shadow-sm focus:ring focus:ring-indigo-200"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium bg-gradient-to-r from-red-500 to-amber-600 bg-clip-text text-transparent">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="bg-white mt-1 p-1 block w-full text-black rounded border-gray-300 shadow-sm focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div className="text-center">
        <button
          type="submit"
          className="py-2 pr-7 pl-7 bg-transparent border-2 border-red-500 text-red-500 rounded-full hover:from-red-600 hover:to-amber-700 transition-all"
        >
          Envoyer
        </button>
        </div>
      </form>
    </div>
  );
}
