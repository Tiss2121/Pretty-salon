import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Laser Hair Removal Minneapolis | Pretty Palace Salon & Spa",
  description:
    "Professional laser hair removal in Minneapolis at Pretty Palace Salon & Spa. FDA-cleared technology for permanent hair reduction on legs, bikini, underarms & face. Book today.",
  alternates: { canonical: "https://prettypalacesalonspa.com/laser-hair-removal-minneapolis" },
  openGraph: {
    title: "Laser Hair Removal Minneapolis | Pretty Palace Salon & Spa",
    description: "FDA-cleared laser hair removal in Minneapolis. Safe for all skin types. Legs, bikini, underarms, face & more. Pretty Palace Uptown Salon.",
    url: "https://prettypalacesalonspa.com/laser-hair-removal-minneapolis",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Laser Hair Removal Minneapolis",
  serviceType: "Laser Hair Removal",
  provider: {
    "@type": "HairSalon",
    name: "Pretty Palace Salon & Spa",
    url: "https://prettypalacesalonspa.com",
    telephone: "+16120000000",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Minneapolis",
      addressRegion: "MN",
      postalCode: "55405",
      addressCountry: "US",
    },
  },
  areaServed: "Minneapolis, MN",
  description: "FDA-cleared laser hair removal treatments in Minneapolis. Permanent hair reduction for legs, bikini, underarms, face, and more.",
};

const areas = [
  { area: "Full Legs", sessions: "6–8 sessions", price: "From $250/session", detail: "Upper leg, lower leg, or full leg treatment" },
  { area: "Bikini / Brazilian", sessions: "6 sessions", price: "From $100/session", detail: "Standard bikini line or full Brazilian" },
  { area: "Underarms", sessions: "5–6 sessions", price: "From $75/session", detail: "Fast 15-minute treatment, long-lasting results" },
  { area: "Upper Lip", sessions: "5 sessions", price: "From $60/session", detail: "Precise, gentle treatment for facial hair" },
  { area: "Full Face", sessions: "6 sessions", price: "From $120/session", detail: "Includes lip, chin, cheeks, and sideburns" },
  { area: "Back (Full)", sessions: "6–8 sessions", price: "From $200/session", detail: "Large area, significant permanent reduction" },
  { area: "Chest / Abdomen", sessions: "6 sessions", price: "From $150/session", detail: "Comfortable, effective large-area treatment" },
  { area: "Arms (Full)", sessions: "6 sessions", price: "From $130/session", detail: "Upper arm, lower arm, or full arm" },
];

const benefits = [
  { title: "FDA-Cleared Technology", desc: "We use only FDA-cleared laser systems with proven safety and efficacy records." },
  { title: "Safe for All Skin Types", desc: "Our advanced technology is effective on Fitzpatrick skin types I through VI." },
  { title: "Minimal Discomfort", desc: "Our laser systems include integrated cooling for a comfortable treatment experience." },
  { title: "Certified Technicians", desc: "All treatments are performed by certified laser technicians with Minneapolis training." },
  { title: "Permanent Reduction", desc: "After completing your sessions, most clients experience 80–95% permanent hair reduction." },
  { title: "Quick Sessions", desc: "Small areas like underarms take just 15 minutes. Most full treatments under 1 hour." },
];

const faq = [
  { q: "How many laser hair removal sessions do I need in Minneapolis?", a: "Most clients in Minneapolis achieve optimal results with 6–8 sessions, spaced 4–8 weeks apart. The exact number depends on the treatment area, hair color and density, and your skin type. We create a personalized treatment plan during your free consultation." },
  { q: "Is laser hair removal painful?", a: "Most clients describe the sensation as a light snap or warmth — similar to a rubber band flick. Our systems use integrated cooling technology to maximize your comfort throughout the treatment." },
  { q: "When is the best time to start laser hair removal in Minneapolis?", a: "Fall and winter are ideal times to start laser hair removal in Minneapolis, as you need to avoid sun exposure before and after treatments. Starting in autumn means you'll be hair-free by summer!" },
  { q: "Is laser hair removal permanent?", a: "Laser hair removal provides permanent hair reduction — not 100% elimination. Most clients achieve 80–95% permanent reduction after completing their full treatment series. Occasional maintenance sessions may be needed." },
  { q: "How much does laser hair removal cost in Minneapolis?", a: "Prices at Pretty Palace start from $60 per session for small areas (upper lip) to $250+ for larger areas (full legs). We offer package deals with savings of up to 30%. Contact us for a personalized price quote." },
];

export default function LaserHairRemovalMinneapolisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <nav className="bg-[#FAF7F2] border-b border-[#E8E0D8] py-3 text-xs text-[#6B6460]">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/" className="hover:text-[#C9A96E]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/services" className="hover:text-[#C9A96E]">Services</Link>
          <span className="mx-2">›</span>
          <span className="text-[#2C1A1D]">Laser Hair Removal Minneapolis</span>
        </div>
      </nav>

      <section className="bg-[#2C1A1D] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A96E]">Laser Treatments · Minneapolis, MN</span>
          <div className="w-8 h-0.5 bg-[#C9A96E] my-3" />
          <h1 className="font-serif text-3xl md:text-5xl text-white leading-tight mb-4 max-w-2xl">
            Laser Hair Removal Minneapolis — Permanent Results at Pretty Palace
          </h1>
          <p className="text-white/70 text-sm max-w-xl leading-relaxed mb-7">
            Say goodbye to shaving and waxing. Our FDA-cleared laser hair removal treatments deliver permanent hair reduction for Minneapolis clients — safe for all skin types, with minimal discomfort and lasting results.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="px-7 py-3 bg-[#C9A96E] text-white text-sm font-bold uppercase tracking-wider rounded hover:bg-[#b8923a] transition-colors">
              Free Consultation
            </Link>
            <Link href="/services" className="px-7 py-3 border border-white/30 text-white text-sm font-bold uppercase tracking-wider rounded hover:bg-white/10 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Promo banner */}
      <div className="bg-[#C9A96E] py-3 text-center">
        <p className="text-white text-xs font-semibold uppercase tracking-wider">
          Save up to 30% on package deals — Ask about our 6-session bundles
        </p>
      </div>

      {/* Treatment Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A96E]">Treatment Areas & Pricing</span>
            <div className="w-8 h-0.5 bg-[#C9A96E] mx-auto my-3" />
            <h2 className="font-serif text-2xl md:text-3xl text-[#2C1A1D]">Laser Hair Removal Areas — Minneapolis</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {areas.map((a) => (
              <div key={a.area} className="flex items-center justify-between p-5 bg-[#FAF7F2] rounded-lg border border-[#E8E0D8] hover:border-[#C9A96E] transition-colors">
                <div>
                  <h3 className="font-semibold text-sm text-[#2C1A1D]">{a.area}</h3>
                  <p className="text-[11px] text-[#6B6460] mt-0.5">{a.detail}</p>
                  <p className="text-[10px] text-[#C9A96E] font-semibold mt-1 uppercase tracking-wider">{a.sessions}</p>
                </div>
                <span className="font-serif text-[#C9A96E] text-sm whitespace-nowrap">{a.price}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-[#6B6460] mt-6">*Prices shown are per-session starting prices. Package discounts available. Call for a custom quote.</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl text-[#2C1A1D]">Why Choose Pretty Palace for Laser Hair Removal in Minneapolis</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-lg p-5 border border-[#E8E0D8]">
                <div className="w-8 h-8 rounded-full bg-[#C9A96E]/15 flex items-center justify-center text-[#C9A96E] font-bold text-sm mb-3">✓</div>
                <h3 className="font-semibold text-sm text-[#2C1A1D] mb-1.5">{b.title}</h3>
                <p className="text-xs text-[#6B6460] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-2xl text-[#2C1A1D] mb-8">Laser Hair Removal FAQs — Minneapolis</h2>
          <div className="space-y-5">
            {faq.map((item) => (
              <div key={item.q} className="border-b border-[#E8E0D8] pb-5">
                <h3 className="font-semibold text-sm text-[#2C1A1D] mb-2">{item.q}</h3>
                <p className="text-xs text-[#6B6460] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#2C1A1D] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-3">Book Your Free Laser Consultation in Minneapolis</h2>
          <p className="text-white/70 text-sm mb-6">No obligation. Our certified technician will assess your skin type and recommend the ideal treatment plan.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="px-10 py-3.5 bg-[#C9A96E] text-white text-sm font-bold uppercase tracking-wider rounded hover:bg-[#b8923a] transition-colors">
              Book Consultation
            </Link>
            <Link href="/services" className="px-10 py-3.5 border border-white/30 text-white text-sm font-bold uppercase tracking-wider rounded hover:bg-white/10 transition-colors">
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
