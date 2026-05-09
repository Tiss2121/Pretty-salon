import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pretty Palace Salon & Spa | #1 Hair Salon Minneapolis",
  description:
    "Pretty Palace Salon & Spa — Minneapolis's premier hair salon in Uptown. Cuts, color, styling, laser hair removal & hair restoration. Book your appointment today.",
  alternates: { canonical: "https://www.prettypalacesalonspa.com/" },
  openGraph: {
    title: "Pretty Palace Salon & Spa | #1 Hair Salon Minneapolis",
    description: "Minneapolis's premier hair salon in the Uptown district. Expert cuts, color, styling, laser treatments & restoration.",
    url: "https://www.prettypalacesalonspa.com/",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Pretty Palace Salon & Spa",
  url: "https://www.prettypalacesalonspa.com",
  telephone: "+16120000000",
  priceRange: "$$",
  description:
    "Minneapolis's premier hair salon & spa in the Uptown district. Expert haircuts, coloring, styling, laser hair removal, and hair restoration services.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Uptown District",
    addressLocality: "Minneapolis",
    addressRegion: "MN",
    postalCode: "55405",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 44.9487, longitude: -93.2975 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "11:00", closes: "17:00" },
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "187" },
};

const services = [
  { icon: "✂️", title: "Hair Cuts & Styling", desc: "Precision cuts tailored to your face shape and lifestyle by Minneapolis's top stylists.", href: "/hair-styling-minneapolis", cta: "Explore Styling" },
  { icon: "🎨", title: "Hair Color & Highlights", desc: "Balayage, ombre, highlights, and full color — vibrant, long-lasting results every time.", href: "/services", cta: "View Services" },
  { icon: "💆", title: "Laser Hair Removal", desc: "FDA-cleared laser treatments for smooth, permanent hair reduction. Safe for all skin types.", href: "/laser-hair-removal-minneapolis", cta: "Learn More" },
  { icon: "🌿", title: "Hair Restoration", desc: "Non-surgical hair restoration and extension solutions to restore fullness and confidence.", href: "/hair-transplant-minneapolis", cta: "Learn More" },
  { icon: "💅", title: "Spa Treatments", desc: "Deep conditioning, scalp treatments, and relaxing spa services to nourish your hair & skin.", href: "/services", cta: "View Services" },
  { icon: "📍", title: "Uptown Minneapolis", desc: "Conveniently located in the heart of Uptown — Minneapolis's vibrant hair & beauty district.", href: "/uptown-hair-district-salon-minneapolis", cta: "Our Location" },
];

const features = [
  { title: "Licensed Expert Stylists", desc: "Every stylist is licensed, trained, and passionate about delivering exceptional results." },
  { title: "Premium Products Only", desc: "We use professional-grade, cruelty-free products for healthy, beautiful hair." },
  { title: "Personalized Consultations", desc: "Every visit starts with a personalized consultation to understand your unique needs." },
  { title: "Minneapolis-Rooted", desc: "Proud to serve the Minneapolis community with integrity and excellence for over a decade." },
];

const testimonials = [
  { name: "Sarah M.", text: "Absolutely the best hair salon in Minneapolis! My balayage looks stunning and lasts for months. The team is so professional and welcoming.", stars: 5 },
  { name: "James K.", text: "I came in for laser hair removal and the results have been incredible. The staff explained everything clearly and made me feel at ease.", stars: 5 },
  { name: "Priya L.", text: "Pretty Palace is my go-to salon in Uptown. Great atmosphere, incredible stylists, and they always nail exactly what I want.", stars: 5 },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <section className="relative bg-[#2C1A1D] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(201,169,110,0.15)_0%,transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-6 py-28 md:py-36 relative z-10">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A96E] bg-[#C9A96E]/10 border border-[#C9A96E]/25 px-4 py-1.5 rounded-full mb-6">
            Minneapolis — Uptown District
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-2xl mb-5">
            Minneapolis&apos; Premier <em className="not-italic text-[#C9A96E]">Hair Salon</em> & Spa
          </h1>
          <p className="text-white/75 text-lg max-w-xl leading-relaxed mb-8">
            Expert haircuts, vibrant color, laser hair removal, and hair restoration — all under one roof in the heart of Uptown Minneapolis.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/services" className="px-8 py-3.5 bg-[#C9A96E] text-white text-sm font-bold uppercase tracking-wider rounded hover:bg-[#b8923a] transition-colors">
              Book Appointment
            </Link>
            <Link href="/hair-salon-minneapolis" className="px-8 py-3.5 border border-white/30 text-white text-sm font-bold uppercase tracking-wider rounded hover:bg-white/10 transition-colors">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="bg-[#2C1A1D] border-t-2 border-[#C9A96E]">
        <div className="max-w-6xl mx-auto px-6 py-7 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            { num: "10+", label: "Years in Minneapolis" },
            { num: "5,000+", label: "Happy Clients" },
            { num: "4.9★", label: "Google Rating" },
            { num: "100%", label: "Satisfaction Guaranteed" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-serif text-2xl text-[#C9A96E] leading-none mb-1">{s.num}</p>
              <p className="text-[11px] text-white/60 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A96E]">What We Offer</span>
            <div className="w-10 h-0.5 bg-[#C9A96E] mx-auto my-3" />
            <h2 className="font-serif text-3xl md:text-4xl text-[#2C1A1D]">Our Services in Minneapolis</h2>
            <p className="text-[#6B6460] mt-3 max-w-xl mx-auto text-sm">From precision cuts to advanced laser treatments, we offer a full range of hair and beauty services.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-lg p-7 border border-[#E8E0D8] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C9A96E] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-serif text-lg text-[#2C1A1D] mb-2">{s.title}</h3>
                <p className="text-[#6B6460] text-sm mb-4 leading-relaxed">{s.desc}</p>
                <Link href={s.href} className="text-[11px] font-bold uppercase tracking-widest text-[#C9A96E] hover:text-[#2C1A1D] transition-colors inline-flex items-center gap-1.5">
                  {s.cta} <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A96E]">Why Choose Us</span>
              <div className="w-10 h-0.5 bg-[#C9A96E] my-3" />
              <h2 className="font-serif text-3xl md:text-4xl text-[#2C1A1D] leading-tight mb-4">
                Minneapolis&apos; Most Trusted Hair Salon & Spa
              </h2>
              <p className="text-[#6B6460] leading-relaxed mb-5 text-sm">
                Pretty Palace Salon & Spa has been a cornerstone of Minneapolis beauty culture for over a decade. Our expert stylists and technicians deliver results that go beyond the ordinary — combining artistry, technique, and genuine care in every service.
              </p>
              <div className="bg-[#FAF7F2] border-l-4 border-[#C9A96E] px-5 py-4 rounded-r mb-6">
                <p className="text-sm text-[#6B6460] italic">&ldquo;We believe every client deserves to leave feeling more confident, beautiful, and uniquely themselves.&rdquo;</p>
              </div>
              <Link href="/hair-salon-minneapolis" className="inline-block px-7 py-3 bg-[#2C1A1D] text-white text-sm font-bold uppercase tracking-wider rounded hover:bg-[#C9A96E] transition-colors">
                About Our Salon
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.title} className="flex gap-3.5">
                  <div className="w-9 h-9 flex-shrink-0 rounded-full bg-[#C9A96E]/15 flex items-center justify-center text-[#C9A96E] font-bold text-sm">✓</div>
                  <div>
                    <h3 className="font-semibold text-sm text-[#2C1A1D] mb-1">{f.title}</h3>
                    <p className="text-[#6B6460] text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A96E]">Client Reviews</span>
            <div className="w-10 h-0.5 bg-[#C9A96E] mx-auto my-3" />
            <h2 className="font-serif text-3xl text-[#2C1A1D]">What Minneapolis Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-lg p-7 border border-[#E8E0D8]">
                <p className="text-[#C9A96E] text-base tracking-widest mb-4">{"★".repeat(t.stars)}</p>
                <p className="text-[#6B6460] text-sm italic leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <span className="text-xs font-bold text-[#2C1A1D] uppercase tracking-wider">— {t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#C9A96E] to-[#b8923a] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Ready for a New Look?</h2>
          <p className="text-white/85 text-sm mb-8 leading-relaxed">
            Book your appointment at Pretty Palace Salon & Spa — Minneapolis&apos;s most-loved hair salon in Uptown.
          </p>
          <Link href="/services" className="inline-block px-10 py-4 bg-white text-[#2C1A1D] text-sm font-bold uppercase tracking-wider rounded hover:bg-[#2C1A1D] hover:text-white transition-colors">
            Book Appointment
          </Link>
        </div>
      </section>

      {/* CONTACT BAR */}
      <section className="py-14 bg-[#FAF7F2] border-t border-[#E8E0D8]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { label: "Address", value: "Uptown District, Minneapolis, MN 55405" },
            { label: "Phone", value: "(612) 000-0000" },
            { label: "Hours", value: "Mon–Fri 9–7 · Sat 9–6 · Sun 11–5" },
          ].map((c) => (
            <div key={c.label}>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A96E] mb-2">{c.label}</p>
              <p className="text-sm text-[#1A1A1A]">{c.value}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
