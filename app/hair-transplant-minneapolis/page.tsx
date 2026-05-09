import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hair Transplant & Restoration Minneapolis | Pretty Palace Salon & Spa",
  description:
    "Non-surgical hair restoration, extensions & hair transplant consultation in Minneapolis. Pretty Palace Salon & Spa — natural-looking solutions for thinning hair.",
  alternates: { canonical: "https://prettypalacesalonspa.com/hair-transplant-minneapolis" },
  openGraph: {
    title: "Hair Transplant & Restoration Minneapolis | Pretty Palace",
    description: "Non-surgical hair restoration and extension solutions in Minneapolis. Natural fullness and confidence restored.",
    url: "https://prettypalacesalonspa.com/hair-transplant-minneapolis",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hair Restoration Minneapolis",
  serviceType: "Hair Restoration & Extension Services",
  provider: {
    "@type": "HairSalon",
    name: "Pretty Palace Salon & Spa",
    url: "https://prettypalacesalonspa.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Minneapolis",
      addressRegion: "MN",
      postalCode: "55405",
      addressCountry: "US",
    },
  },
  areaServed: "Minneapolis, MN",
  description: "Non-surgical hair restoration, hair extensions, and hair transplant consultation services in Minneapolis, MN.",
};

const solutions = [
  { icon: "🌿", title: "Tape-In Hair Extensions", desc: "Flat, seamless tape extensions that blend perfectly with your natural hair. Adds up to 3 inches of length and significant volume.", detail: "Lasts 6–8 weeks with proper care. Reusable for up to 12 months." },
  { icon: "💎", title: "Micro-Link Extensions", desc: "Individual strand extensions applied with micro beads — no heat, no glue. Completely non-damaging.", detail: "Natural movement, virtually undetectable. Lasts 3–4 months." },
  { icon: "🔬", title: "Scalp PRP Therapy Consultation", desc: "Platelet-rich plasma therapy stimulates natural hair follicles to reduce thinning and encourage regrowth.", detail: "We provide consultation and referral to trusted Minneapolis PRP specialists." },
  { icon: "🌱", title: "Hair Thickening Treatments", desc: "Professional topical treatments and scalp care programs that visibly thicken fine or thinning hair.", detail: "In-salon treatments combined with take-home regimen." },
  { icon: "👤", title: "Hairpiece & Toupee Styling", desc: "Custom fitting, cutting, and styling of hairpieces and toppers for a completely natural look.", detail: "Discreet, professional service in a private setting." },
  { icon: "💇", title: "Hair Transplant Referral", desc: "Not ready for surgery? We offer comprehensive pre-and post-transplant styling services and referrals.", detail: "Work with top Minneapolis hair transplant surgeons for seamless care." },
];

const faq = [
  { q: "Do you perform surgical hair transplants in Minneapolis?", a: "Pretty Palace Salon & Spa specializes in non-surgical hair restoration including extensions, scalp treatments, and hairpiece styling. We also provide consultations and referrals to licensed hair transplant surgeons in the Minneapolis area." },
  { q: "What is the best non-surgical hair restoration option in Minneapolis?", a: "The best option depends on your hair loss pattern, lifestyle, and goals. During your consultation, our specialists will assess your hair and recommend the most suitable solution — from extensions and scalp treatments to PRP therapy referrals." },
  { q: "How long do hair extensions last in Minneapolis's climate?", a: "With proper care, tape-in extensions last 6–8 weeks before a refresh appointment, while micro-link extensions last 3–4 months. Minnesota's climate has minimal impact on extension longevity." },
  { q: "Is hair restoration suitable for women in Minneapolis?", a: "Absolutely. Hair thinning affects men and women alike. We have extensive experience with female pattern hair loss and offer discreet, effective solutions tailored to women's hair restoration needs." },
];

export default function HairTransplantMinneapolisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <nav className="bg-[#FAF7F2] border-b border-[#E8E0D8] py-3 text-xs text-[#6B6460]">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/" className="hover:text-[#C9A96E]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/services" className="hover:text-[#C9A96E]">Services</Link>
          <span className="mx-2">›</span>
          <span className="text-[#2C1A1D]">Hair Transplant Minneapolis</span>
        </div>
      </nav>

      <section className="bg-[#2C1A1D] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A96E]">Hair Restoration · Minneapolis</span>
          <div className="w-8 h-0.5 bg-[#C9A96E] my-3" />
          <h1 className="font-serif text-3xl md:text-5xl text-white leading-tight mb-4 max-w-2xl">
            Hair Transplant & Restoration Services in Minneapolis
          </h1>
          <p className="text-white/70 text-sm max-w-xl leading-relaxed mb-7">
            Restore fullness, length, and confidence with non-surgical hair restoration solutions at Pretty Palace Salon & Spa. From extensions to scalp treatments, we offer natural-looking results for Minneapolis clients experiencing hair loss or thinning.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="px-7 py-3 bg-[#C9A96E] text-white text-sm font-bold uppercase tracking-wider rounded hover:bg-[#b8923a] transition-colors">
              Free Consultation
            </Link>
            <Link href="/services" className="px-7 py-3 border border-white/30 text-white text-sm font-bold uppercase tracking-wider rounded hover:bg-white/10 transition-colors">
              All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Info banner */}
      <div className="bg-[#C9A96E]/10 border-y border-[#C9A96E]/30 py-4">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-[#2C1A1D]">
            <strong>Free Hair Restoration Consultation</strong> — Call <a href="tel:+16120000000" className="text-[#C9A96E] font-semibold">(612) 000-0000</a> to schedule your no-obligation consultation in Minneapolis.
          </p>
        </div>
      </div>

      {/* Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A96E]">Our Restoration Solutions</span>
            <div className="w-8 h-0.5 bg-[#C9A96E] mx-auto my-3" />
            <h2 className="font-serif text-2xl md:text-3xl text-[#2C1A1D]">Hair Restoration Options in Minneapolis</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((s) => (
              <div key={s.title} className="bg-[#FAF7F2] rounded-lg p-6 border border-[#E8E0D8]">
                <div className="text-2xl mb-3">{s.icon}</div>
                <h3 className="font-serif text-base text-[#2C1A1D] mb-2">{s.title}</h3>
                <p className="text-xs text-[#6B6460] leading-relaxed mb-3">{s.desc}</p>
                <p className="text-[10px] text-[#C9A96E] font-semibold uppercase tracking-wider">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#FAF7F2] border-t border-[#E8E0D8]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-2xl text-[#2C1A1D] mb-5">Why Minneapolis Chooses Pretty Palace for Hair Restoration</h2>
          <p className="text-[#6B6460] text-sm leading-relaxed mb-4">
            Hair loss and thinning affects millions of people in Minneapolis and across the country. At Pretty Palace Salon & Spa, we understand the emotional impact of hair loss and approach every client with empathy, discretion, and expertise.
          </p>
          <p className="text-[#6B6460] text-sm leading-relaxed mb-4">
            Our non-surgical hair restoration specialists work with you to find the most effective and natural-looking solution for your specific type of hair loss. Whether you&apos;re experiencing thinning due to stress, hormonal changes, genetics, or other factors, we have a Minneapolis-proven solution.
          </p>
          <div className="bg-white border border-[#E8E0D8] rounded-lg p-5 my-6">
            <h3 className="font-semibold text-sm text-[#2C1A1D] mb-3">What to Expect at Your Consultation</h3>
            <ul className="space-y-2 text-xs text-[#6B6460]">
              {["Private, confidential consultation with a hair restoration specialist", "Thorough assessment of your hair loss pattern and scalp health", "Personalized recommendations based on your hair type and goals", "Transparent pricing with no pressure — we let the results speak for themselves", "Follow-up support and maintenance guidance"].map((item) => (
                <li key={item} className="flex gap-2 items-start">
                  <span className="text-[#C9A96E] mt-0.5">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-2xl text-[#2C1A1D] mb-8">Hair Restoration FAQs — Minneapolis</h2>
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

      {/* CTA */}
      <section className="py-14 bg-gradient-to-r from-[#C9A96E] to-[#b8923a] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-3">Start Your Hair Restoration Journey Today</h2>
          <p className="text-white/85 text-sm mb-6">Free consultations available at our Uptown Minneapolis salon. No pressure, no obligation.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-block px-10 py-3.5 bg-white text-[#2C1A1D] text-sm font-bold uppercase tracking-wider rounded hover:bg-[#2C1A1D] hover:text-white transition-colors">
              Book Consultation
            </Link>
            <Link href="/services" className="inline-block px-10 py-3.5 border-2 border-white text-white text-sm font-bold uppercase tracking-wider rounded hover:bg-white hover:text-[#2C1A1D] transition-colors">
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
