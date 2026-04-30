"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const buyerTypes = [
  "Restaurant / Hotel",
  "Retailer / Supermarket",
  "Wholesaler",
  "Export Buyer",
  "Distributor",
  "Processor",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    buyerType: "",
    productInterest: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Replace with actual form submission (e.g. Formspree, Netlify Forms, or API route)
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-[#EBF5FB] flex items-center justify-center">
          <CheckCircle size={32} className="text-[#2980B9]" />
        </div>
        <h3 className="text-xl font-bold text-[#0D1F3C]">Enquiry Received</h3>
        <p className="text-[#0D1F3C]/60 max-w-md leading-relaxed">
          Thank you for reaching out. A member of our sales team will be in touch with you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm text-[#2980B9] hover:text-[#1A5276] font-medium transition-colors"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[#0D1F3C] mb-1.5">
            Full Name <span className="text-[#2980B9]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-[#C8E4F5] bg-white text-[#0D1F3C] text-sm focus:outline-none focus:border-[#2980B9] focus:ring-2 focus:ring-[#2980B9]/15 transition-all placeholder:text-[#0D1F3C]/30"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-[#0D1F3C] mb-1.5">
            Company Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-[#C8E4F5] bg-white text-[#0D1F3C] text-sm focus:outline-none focus:border-[#2980B9] focus:ring-2 focus:ring-[#2980B9]/15 transition-all placeholder:text-[#0D1F3C]/30"
            placeholder="Your company"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[#0D1F3C] mb-1.5">
            Email Address <span className="text-[#2980B9]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-[#C8E4F5] bg-white text-[#0D1F3C] text-sm focus:outline-none focus:border-[#2980B9] focus:ring-2 focus:ring-[#2980B9]/15 transition-all placeholder:text-[#0D1F3C]/30"
            placeholder="email@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-[#0D1F3C] mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-[#C8E4F5] bg-white text-[#0D1F3C] text-sm focus:outline-none focus:border-[#2980B9] focus:ring-2 focus:ring-[#2980B9]/15 transition-all placeholder:text-[#0D1F3C]/30"
            placeholder="+27 (0)__ ___ ____"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="buyerType" className="block text-sm font-semibold text-[#0D1F3C] mb-1.5">
            Buyer Type <span className="text-[#2980B9]">*</span>
          </label>
          <select
            id="buyerType"
            name="buyerType"
            required
            value={form.buyerType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-[#C8E4F5] bg-white text-[#0D1F3C] text-sm focus:outline-none focus:border-[#2980B9] focus:ring-2 focus:ring-[#2980B9]/15 transition-all"
          >
            <option value="" disabled>Select your buyer type</option>
            {buyerTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="productInterest" className="block text-sm font-semibold text-[#0D1F3C] mb-1.5">
            Product Interest
          </label>
          <input
            id="productInterest"
            name="productInterest"
            type="text"
            value={form.productInterest}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-[#C8E4F5] bg-white text-[#0D1F3C] text-sm focus:outline-none focus:border-[#2980B9] focus:ring-2 focus:ring-[#2980B9]/15 transition-all placeholder:text-[#0D1F3C]/30"
            placeholder="e.g. Cape Hake, Squid, Prawns..."
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-[#0D1F3C] mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-[#C8E4F5] bg-white text-[#0D1F3C] text-sm focus:outline-none focus:border-[#2980B9] focus:ring-2 focus:ring-[#2980B9]/15 transition-all resize-none placeholder:text-[#0D1F3C]/30"
          placeholder="Tell us about your volume requirements, delivery location, or any specific product questions..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0D1F3C] text-white rounded-lg font-semibold text-sm hover:bg-[#1A5276] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? (
          <>
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Enquiry
            <Send size={15} />
          </>
        )}
      </button>
    </form>
  );
}
