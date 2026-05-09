"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

const services = [
  "Haircut & Styling",
  "Hair Color / Balayage",
  "Keratin Treatment",
  "Blowout",
  "Bridal / Special Occasion",
  "Laser Hair Removal",
  "Hair Restoration / Extensions",
  "Spa Treatment",
  "Other / Not Sure",
];

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData) {
    const errs: Record<string, string> = {};
    if (!data.get("name")) errs.name = "Your name is required.";
    const email = data.get("email") as string;
    if (!email) errs.email = "Your email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Please enter a valid email.";
    if (!data.get("service")) errs.service = "Please select a service.";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const errs = validate(data);

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setState("submitting");

    try {
      // Replace the action URL below with your form service (Formspree, Resend, etc.)
      // Example Formspree: https://formspree.io/f/YOUR_FORM_ID
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="bg-white rounded-xl border border-[#E8E0D8] p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-[#C9A96E]/15 flex items-center justify-center mx-auto mb-5 text-2xl">✓</div>
        <h2 className="font-serif text-2xl text-[#2C1A1D] mb-3">Appointment Request Sent!</h2>
        <p className="text-[#6B6460] text-sm leading-relaxed mb-6 max-w-sm mx-auto">
          Thank you! Our team will confirm your appointment within 24 hours. We look forward to seeing you at Pretty Palace.
        </p>
        <button
          onClick={() => setState("idle")}
          className="px-7 py-2.5 bg-[#2C1A1D] text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-[#C9A96E] transition-colors"
        >
          Book Another
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-[#E8E0D8] p-8">
      <h2 className="font-serif text-xl text-[#2C1A1D] mb-1">Request an Appointment</h2>
      <p className="text-xs text-[#6B6460] mb-7">All fields marked * are required. We&apos;ll confirm within 24 hours.</p>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Name + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-[#2C1A1D] mb-1.5 uppercase tracking-wider">
              Full Name <span className="text-[#C9A96E]">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Jane Smith"
              className={`w-full px-4 py-3 text-sm border rounded-lg bg-[#FAF7F2] focus:outline-none focus:border-[#C9A96E] focus:bg-white transition-colors ${errors.name ? "border-red-400" : "border-[#E8E0D8]"}`}
            />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#2C1A1D] mb-1.5 uppercase tracking-wider">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="(612) 000-0000"
              className="w-full px-4 py-3 text-sm border border-[#E8E0D8] rounded-lg bg-[#FAF7F2] focus:outline-none focus:border-[#C9A96E] focus:bg-white transition-colors"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-[#2C1A1D] mb-1.5 uppercase tracking-wider">
            Email Address <span className="text-[#C9A96E]">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="jane@email.com"
            className={`w-full px-4 py-3 text-sm border rounded-lg bg-[#FAF7F2] focus:outline-none focus:border-[#C9A96E] focus:bg-white transition-colors ${errors.email ? "border-red-400" : "border-[#E8E0D8]"}`}
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>

        {/* Service + Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-[#2C1A1D] mb-1.5 uppercase tracking-wider">
              Service <span className="text-[#C9A96E]">*</span>
            </label>
            <select
              name="service"
              defaultValue=""
              className={`w-full px-4 py-3 text-sm border rounded-lg bg-[#FAF7F2] focus:outline-none focus:border-[#C9A96E] focus:bg-white transition-colors appearance-none ${errors.service ? "border-red-400" : "border-[#E8E0D8]"}`}
            >
              <option value="" disabled>Select a service…</option>
              {services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#2C1A1D] mb-1.5 uppercase tracking-wider">
              Preferred Date
            </label>
            <input
              type="date"
              name="date"
              min={new Date().toISOString().split("T")[0]}
              className="w-full px-4 py-3 text-sm border border-[#E8E0D8] rounded-lg bg-[#FAF7F2] focus:outline-none focus:border-[#C9A96E] focus:bg-white transition-colors"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold text-[#2C1A1D] mb-1.5 uppercase tracking-wider">
            Notes / Message
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us about your hair goals, any concerns, or questions…"
            className="w-full px-4 py-3 text-sm border border-[#E8E0D8] rounded-lg bg-[#FAF7F2] focus:outline-none focus:border-[#C9A96E] focus:bg-white transition-colors resize-none"
          />
        </div>

        {state === "error" && (
          <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-xs text-red-600">
            Something went wrong. Please try again or call us at <a href="tel:+16120000000" className="font-semibold">(612) 000-0000</a>.
          </div>
        )}

        <button
          type="submit"
          disabled={state === "submitting"}
          className="w-full py-4 bg-[#2C1A1D] text-white text-sm font-bold uppercase tracking-widest rounded-lg hover:bg-[#C9A96E] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {state === "submitting" ? "Sending…" : "Request Appointment"}
        </button>

        <p className="text-center text-[10px] text-[#6B6460]">
          Or call us directly at{" "}
          <a href="tel:+16120000000" className="text-[#C9A96E] font-semibold hover:underline">(612) 000-0000</a>
        </p>
      </form>
    </div>
  );
}
