import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hair Salon Services Minneapolis | Pretty Palace Salon & Spa",
  description:
    "Full menu of hair salon & spa services in Minneapolis — cuts, color, balayage, keratin, laser hair removal, hair restoration, and spa treatments. Book today.",
  alternates: { canonical: "https://www.prettypalacesalonspa.com/services" },
  openGraph: {
    title: "Hair Salon Services Minneapolis | Pretty Palace Salon & Spa",
    description: "Complete service menu at Pretty Palace Salon & Spa — Minneapolis's premier hair salon in Uptown.",
    url: "https://www.prettypalacesalonspa.com/services",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Pretty Palace Salon & Spa",
  url: "https://www.prettypalacesalonspa.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Minneapolis",
    addressRegion: "MN",
    postalCode: "55405",
    addressCountry: "US",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Hair Salon & Spa Services Minneapolis",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Women's Haircut Minneapolis" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Balayage Minneapolis" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Laser Hair Removal Minneapolis" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hair Restoration Minneapolis" } },
    ],
  },
};

const categories = [
  {
    title: "Haircuts & Styling",
    icon: "✂️",
    services: [
      { name: "Women's Haircut", desc: "Consultation, wash, cut & blow-dry", price: "From $55" },
      { name: "Men's Haircut", desc: "Consultation, wash, precision cut", price: "From $35" },
      { name: "Children's Cut (under 12)", desc: "Gentle, patient service for kids", price: "From $28" },
      { name: "Blowout & Style", desc: "Wash, blow-dry, and style", price: "From $45" },
      { name: "Special Occasion Styling", desc: "Bridal, prom, event updo & styling", price: "From $85" },
      { name: "Keratin Smoothing Treatment", desc: "Frizz-free, smooth hair for 3–5 months", price: "From $150" },
    ],
  },
  {
    title: "Color Services",
    icon: "🎨",
    services: [
      { name: "Full Color", desc: "Single-process root-to-tip color", price: "From $75" },
      { name: "Balayage", desc: "Hand-painted natural-looking highlights", price: "From $130" },
      { name: "Highlights / Lowlights", desc: "Partial or full foil highlights", price: "From $95" },
      { name: "Ombre & Sombré", desc: "Seamless gradient color blending", price: "From $120" },
      { name: "Color Correction", desc: "Expert fix for unwanted color results", price: "Consultation" },
      { name: "Gloss & Toner", desc: "Add shine and tone to existing color", price: "From $45" },
    ],
  },
  {
    title: "Treatments & Spa",
    icon: "💆",
    services: [
      { name: "Deep Conditioning Treatment", desc: "Intensive moisture and repair mask", price: "From $35" },
      { name: "Scalp Treatment", desc: "Therapeutic scalp massage and treatment", price: "From $45" },
      { name: "Hot Oil Treatment", desc: "Nourishing hot oil for shine and strength", price: "From $30" },
      { name: "Protein Treatment", desc: "Rebuild and strengthen damaged hair", price: "From $50" },
      { name: "Olaplex Treatment", desc: "Bond-rebuilding for bleached/damaged hair", price: "From $40" },
    ],
  },
  {
    title: "Laser Hair Removal",
    icon: "✨",
    services: [
      { name: "Legs (Full)", desc: "Permanent hair reduction for full legs", price: "From $250/session" },
      { name: "Bikini / Brazilian", desc: "Precise, comfortable intimate area treatment", price: "From $100/session" },
      { name: "Underarms", desc: "Quick, effective underarm treatment", price: "From $75/session" },
      { name: "Face / Upper Lip", desc: "Gentle facial laser treatment", price: "From $60/session" },
      { name: "Back (Full)", desc: "Large area treatment with lasting results", price: "From $200/session" },
      { name: "Package Deals", desc: "6-session packages — save up to 30%", price: "Ask us" },
    ],
  },
  {
    title: "Hair Restoration",
    icon: "🌿",
    services: [
      { name: "Hair Extensions (Tape-In)", desc: "Seamless, natural-looking length and volume", price: "From $350" },
      { name: "Hair Extensions (Micro-Link)", desc: "Bead attachment, no heat or glue", price: "From $400" },
      { name: "Scalp PRP Therapy Consultation", desc: "Platelet-rich plasma for thinning hair", price: "Consultation" },
      { name: "Hair Thickening Treatment", desc: "Non-invasive topical thickening programs", price: "From $80" },
      { name: "Toupee / Hairpiece Fitting", desc: "Custom fitting and styling of hairpieces", price: "Consultation" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Breadcrumb */}
      <nav className="bg-[#FAF7F2] border-b border-[#E8E0D8] py-3 text-xs text-[#6B6460]">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/" className="hover:text-[#C9A96E]">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-[#2C1A1D]">Services</span>
        </div>
      </nav>

      {/* Page Hero */}
      <section className="bg-[#2C1A1D] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A96E]">Minneapolis Hair Salon</span>
          <div className="w-8 h-0.5 bg-[#C9A96E] my-3" />
          <h1 className="font-serif text-3xl md:text-4xl text-white mb-3">Hair Salon & Spa Services in Minneapolis</h1>
          <p className="text-white/70 text-sm max-w-2xl leading-relaxed">
            Discover our full menu of professional hair and beauty services at Pretty Palace Salon & Spa — Uptown Minneapolis&apos;s premier destination for cuts, color, laser treatments, and hair restoration.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-14">
        {categories.map((cat) => (
          <div key={cat.title}>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-[#C9A96E]">
              <span className="text-2xl">{cat.icon}</span>
              <h2 className="font-serif text-2xl text-[#2C1A1D]">{cat.title}</h2>
            </div>
            <div className="divide-y divide-[#E8E0D8]">
              {cat.services.map((svc) => (
                <div key={svc.name} className="flex items-center justify-between py-4 gap-4 hover:bg-[#FAF7F2] -mx-3 px-3 rounded transition-colors">
                  <div>
                    <h3 className="text-sm font-semibold text-[#2C1A1D]">{svc.name}</h3>
                    <p className="text-xs text-[#6B6460] mt-0.5">{svc.desc}</p>
                  </div>
                  <span className="font-serif text-[#C9A96E] whitespace-nowrap text-sm flex-shrink-0">{svc.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Note & CTA */}
      <section className="bg-[#FAF7F2] border-t border-[#E8E0D8] py-14">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-white border border-[#E8E0D8] rounded-lg p-7 mb-8">
            <p className="text-sm text-[#6B6460] leading-relaxed">
              <strong className="text-[#2C1A1D]">Pricing note:</strong> All prices are starting prices and may vary based on hair length, density, and specific requirements. We offer a complimentary consultation before every service. Contact us for an accurate quote.
            </p>
          </div>
          <h2 className="font-serif text-2xl text-[#2C1A1D] mb-3">Ready to Book Your Service?</h2>
          <p className="text-[#6B6460] text-sm mb-6">Call us or visit our Uptown Minneapolis salon to schedule your appointment.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+16120000000" className="px-8 py-3 bg-[#2C1A1D] text-white text-sm font-bold uppercase tracking-wider rounded hover:bg-[#C9A96E] transition-colors">
              Call (612) 000-0000
            </a>
            <Link href="/" className="px-8 py-3 border border-[#2C1A1D] text-[#2C1A1D] text-sm font-bold uppercase tracking-wider rounded hover:bg-[#2C1A1D] hover:text-white transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
