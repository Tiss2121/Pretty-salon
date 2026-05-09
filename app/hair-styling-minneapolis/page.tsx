import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hair Styling Minneapolis | Pretty Palace Salon & Spa",
  description:
    "Professional hair styling in Minneapolis at Pretty Palace Salon & Spa. Blowouts, updos, bridal styling, special occasion & everyday styling by expert Minneapolis stylists.",
  alternates: { canonical: "https://www.prettypalacesalonspa.com/hair-styling-minneapolis" },
  openGraph: {
    title: "Hair Styling Minneapolis | Pretty Palace Salon & Spa",
    description: "Expert hair styling in Minneapolis — blowouts, updos, bridal, special occasion & everyday looks by Pretty Palace's licensed stylists.",
    url: "https://www.prettypalacesalonspa.com/hair-styling-minneapolis",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hair Styling Minneapolis",
  serviceType: "Hair Styling Services",
  provider: {
    "@type": "HairSalon",
    name: "Pretty Palace Salon & Spa",
    url: "https://www.prettypalacesalonspa.com",
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
  description: "Professional hair styling services in Minneapolis including blowouts, updos, bridal styling, and special occasion looks.",
};

const stylingServices = [
  {
    category: "Everyday Styling",
    services: [
      { name: "Signature Blowout", desc: "Volume-rich, frizz-free blowout with your choice of straight, wavy, or curly finish.", price: "From $45" },
      { name: "Express Blowout", desc: "Quick 30-minute blowout for busy Minneapolis days.", price: "From $35" },
      { name: "Curling / Waving", desc: "Beachy waves, defined curls, or voluminous ringlets — your choice.", price: "From $50" },
      { name: "Flat Iron Styling", desc: "Sleek, smooth, straight styling for all hair lengths.", price: "From $40" },
    ],
  },
  {
    category: "Special Occasion & Bridal",
    services: [
      { name: "Bridal Hair Styling", desc: "Stunning updo or down style for your wedding day. Trial session included.", price: "From $150" },
      { name: "Prom & Formal Styling", desc: "Event-ready styles that last all night — intricate updos and glamorous looks.", price: "From $85" },
      { name: "Bridesmaid Styling", desc: "Coordinated styles for your bridal party. Group bookings welcome.", price: "From $65/person" },
      { name: "Party & Event Glam", desc: "Red carpet-ready styles for galas, parties, and corporate events.", price: "From $75" },
    ],
  },
  {
    category: "Texture & Treatment Styling",
    services: [
      { name: "Keratin Blowout", desc: "Smooth, frizz-free styling using professional keratin treatment.", price: "From $150" },
      { name: "Curl Definition Styling", desc: "Enhancing and defining natural curls using Curly Girl-friendly techniques.", price: "From $55" },
      { name: "Natural Hair Styling", desc: "Twist-outs, wash-and-gos, braided styles and protective looks.", price: "From $60" },
      { name: "Silk Press", desc: "Heat-free straightening technique for natural hair with lasting smoothness.", price: "From $80" },
    ],
  },
];

const internalLinks = [
  { label: "Hair Salon Minneapolis", href: "/hair-salon-minneapolis", desc: "Our full-service Minneapolis hair salon" },
  { label: "Hair Color & Balayage", href: "/services", desc: "Color services to complement your new style" },
  { label: "Laser Hair Removal", href: "/laser-hair-removal-minneapolis", desc: "Permanent hair reduction services" },
  { label: "Hair Restoration Minneapolis", href: "/hair-transplant-minneapolis", desc: "Extensions & restoration solutions" },
  { label: "Uptown Hair District", href: "/uptown-hair-district-salon-minneapolis", desc: "Our Minneapolis Uptown location" },
];

const faq = [
  { q: "How long does a professional blowout last in Minneapolis's weather?", a: "A professional blowout at Pretty Palace typically lasts 3–5 days, even with Minneapolis's humid summers and dry winters. We use professional finishing products to extend longevity and protect against humidity and weather." },
  { q: "Do you offer bridal hair trials in Minneapolis?", a: "Yes! We highly recommend a bridal hair trial, typically 4–8 weeks before your wedding day. This allows us to perfect your desired look and ensure your wedding day hair is exactly as imagined." },
  { q: "Can I book group styling for a bridal party in Minneapolis?", a: "Absolutely. We accommodate bridal parties of all sizes at our Uptown Minneapolis salon. For groups of 4 or more, we recommend booking at least 4–6 weeks in advance to secure your date." },
  { q: "What hair types do you specialize in for styling?", a: "Our Minneapolis stylists are trained to work with all hair types — straight, wavy, curly, coily, fine, thick, relaxed, and natural. We have specialists for every texture and technique." },
];

export default function HairStylingMinneapolisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <nav className="bg-[#FAF7F2] border-b border-[#E8E0D8] py-3 text-xs text-[#6B6460]">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/" className="hover:text-[#C9A96E]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/hair-salon-minneapolis" className="hover:text-[#C9A96E]">Hair Salon Minneapolis</Link>
          <span className="mx-2">›</span>
          <span className="text-[#2C1A1D]">Hair Styling Minneapolis</span>
        </div>
      </nav>

      <section className="bg-[#2C1A1D] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A96E]">Hair Styling · Minneapolis, MN</span>
          <div className="w-8 h-0.5 bg-[#C9A96E] my-3" />
          <h1 className="font-serif text-3xl md:text-5xl text-white leading-tight mb-4 max-w-2xl">
            Professional Hair Styling in Minneapolis — Pretty Palace Salon
          </h1>
          <p className="text-white/70 text-sm max-w-xl leading-relaxed mb-7">
            From effortless everyday blowouts to show-stopping bridal updos, our Minneapolis hair stylists bring out the best in your hair. Whether you&apos;re preparing for a wedding, a night out, or just want to look your best — Pretty Palace delivers.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:+16120000000" className="px-7 py-3 bg-[#C9A96E] text-white text-sm font-bold uppercase tracking-wider rounded hover:bg-[#b8923a] transition-colors">
              Book a Style
            </a>
            <Link href="/services" className="px-7 py-3 border border-white/30 text-white text-sm font-bold uppercase tracking-wider rounded hover:bg-white/10 transition-colors">
              Full Service Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Styling services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          {stylingServices.map((cat) => (
            <div key={cat.category}>
              <h2 className="font-serif text-xl text-[#2C1A1D] mb-5 pb-3 border-b-2 border-[#C9A96E] inline-block pr-8">{cat.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cat.services.map((svc) => (
                  <div key={svc.name} className="flex justify-between items-start p-5 bg-[#FAF7F2] rounded-lg border border-[#E8E0D8] hover:border-[#C9A96E] transition-colors gap-4">
                    <div>
                      <h3 className="font-semibold text-sm text-[#2C1A1D] mb-1">{svc.name}</h3>
                      <p className="text-xs text-[#6B6460] leading-relaxed">{svc.desc}</p>
                    </div>
                    <span className="font-serif text-[#C9A96E] text-sm whitespace-nowrap flex-shrink-0">{svc.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Internal linking section */}
      <section className="py-14 bg-[#FAF7F2] border-t border-[#E8E0D8]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-xl text-[#2C1A1D] mb-6 text-center">Explore More at Pretty Palace Salon & Spa</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {internalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block bg-white rounded-lg p-4 border border-[#E8E0D8] hover:border-[#C9A96E] hover:shadow-md transition-all text-center group">
                <h3 className="text-xs font-semibold text-[#2C1A1D] group-hover:text-[#C9A96E] transition-colors mb-1">{link.label}</h3>
                <p className="text-[10px] text-[#6B6460]">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Content block */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-2xl text-[#2C1A1D] mb-5">Why Minneapolis Clients Choose Us for Hair Styling</h2>
          <p className="text-[#6B6460] text-sm leading-relaxed mb-4">
            Great hair styling is more than technique — it&apos;s about understanding your hair, your face, and your lifestyle. Our Minneapolis stylists take the time to consult with every client before picking up a brush. Whether you have fine, straight hair or thick natural coils, we have the skills and products to create your ideal look.
          </p>
          <p className="text-[#6B6460] text-sm leading-relaxed mb-4">
            Located in the Uptown district — Minneapolis&apos;s hub for style and beauty — Pretty Palace is the go-to salon for professional hair styling that turns heads. We regularly style clients for weddings at The Depot, the W Minneapolis, and events throughout the Twin Cities.
          </p>
          <div className="bg-[#FAF7F2] border-l-4 border-[#C9A96E] px-5 py-4 rounded-r my-5">
            <p className="text-sm text-[#6B6460]">
              Also looking to complement your new style? Explore our <Link href="/hair-salon-minneapolis" className="text-[#C9A96E] font-semibold hover:underline">hair salon services</Link>, <Link href="/laser-hair-removal-minneapolis" className="text-[#C9A96E] font-semibold hover:underline">laser hair removal</Link>, and <Link href="/hair-transplant-minneapolis" className="text-[#C9A96E] font-semibold hover:underline">hair restoration</Link> options.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-[#FAF7F2] border-t border-[#E8E0D8]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-2xl text-[#2C1A1D] mb-8">Hair Styling FAQs — Minneapolis</h2>
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

      <section className="py-14 bg-gradient-to-r from-[#C9A96E] to-[#b8923a] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-3">Book Your Minneapolis Hair Styling Appointment</h2>
          <p className="text-white/85 text-sm mb-6">Walk-ins welcome · Appointments recommended · Uptown Minneapolis location</p>
          <a href="tel:+16120000000" className="inline-block px-10 py-3.5 bg-white text-[#2C1A1D] text-sm font-bold uppercase tracking-wider rounded hover:bg-[#2C1A1D] hover:text-white transition-colors">
            Call (612) 000-0000
          </a>
        </div>
      </section>
    </>
  );
}
