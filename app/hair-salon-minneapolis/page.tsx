import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Hair Salon Minneapolis MN | Pretty Palace Salon & Spa",
  description:
    "Looking for the best hair salon in Minneapolis? Pretty Palace Salon & Spa in Uptown offers expert cuts, color, styling & spa treatments. Rated 4.9★ by 187+ clients.",
  alternates: { canonical: "https://www.prettypalacesalonspa.com/hair-salon-minneapolis" },
  openGraph: {
    title: "Best Hair Salon Minneapolis MN | Pretty Palace",
    description: "Minneapolis's #1 rated hair salon in the Uptown district. Expert cuts, color & styling by licensed professionals.",
    url: "https://www.prettypalacesalonspa.com/hair-salon-minneapolis",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Pretty Palace Salon & Spa — Minneapolis Hair Salon",
  url: "https://www.prettypalacesalonspa.com/hair-salon-minneapolis",
  telephone: "+16120000000",
  description: "Best hair salon in Minneapolis, MN. Located in the Uptown district, offering expert haircuts, hair coloring, balayage, keratin treatments, and styling services.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Uptown District",
    addressLocality: "Minneapolis",
    addressRegion: "MN",
    postalCode: "55405",
    addressCountry: "US",
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "187" },
};

const faq = [
  { q: "Where is Pretty Palace Salon located in Minneapolis?", a: "Pretty Palace Salon & Spa is located in the Uptown district of Minneapolis, MN — one of the city's most vibrant neighborhoods, easily accessible from Hennepin Ave." },
  { q: "Do I need an appointment at your Minneapolis hair salon?", a: "We recommend booking an appointment to secure your preferred time slot. We do accommodate walk-ins based on availability, but appointments are always prioritized." },
  { q: "What hair salon services do you offer in Minneapolis?", a: "We offer a full range of services: haircuts, color, balayage, highlights, keratin treatments, blowouts, special occasion styling, laser hair removal, and hair restoration." },
  { q: "How much does a haircut cost at your Minneapolis salon?", a: "Women's haircuts start from $55, men's haircuts from $35. All cuts include a wash, consultation, and blow-dry. Pricing varies by stylist level and hair length." },
  { q: "Is Pretty Palace a good hair salon for natural hair in Minneapolis?", a: "Absolutely. Our stylists are experienced with all hair textures, including curly, coily, and natural hair. We offer curl-specific cuts and treatments." },
];

export default function HairSalonMinneapolisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <nav className="bg-[#FAF7F2] border-b border-[#E8E0D8] py-3 text-xs text-[#6B6460]">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/" className="hover:text-[#C9A96E]">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-[#2C1A1D]">Hair Salon Minneapolis</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#2C1A1D] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A96E]">Minneapolis, MN</span>
          <div className="w-8 h-0.5 bg-[#C9A96E] my-3" />
          <h1 className="font-serif text-3xl md:text-5xl text-white leading-tight mb-4 max-w-2xl">
            Best Hair Salon in Minneapolis — Pretty Palace Salon & Spa
          </h1>
          <p className="text-white/70 text-sm max-w-2xl leading-relaxed mb-7">
            Rated 4.9★ by over 187 Minneapolis clients, Pretty Palace Salon & Spa is your Uptown destination for precision haircuts, stunning color, and transformative hair treatments. Our licensed stylists bring artistry and expertise to every appointment.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="px-7 py-3 bg-[#C9A96E] text-white text-sm font-bold uppercase tracking-wider rounded hover:bg-[#b8923a] transition-colors">
              Book Appointment
            </Link>
            <a href="tel:+16120000000" className="px-7 py-3 border border-white/30 text-white text-sm font-bold uppercase tracking-wider rounded hover:bg-white/10 transition-colors">
              Call (612) 000-0000
            </a>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-serif text-2xl text-[#2C1A1D] mb-4">Minneapolis's Premier Hair Salon Experience</h2>
                <p className="text-[#6B6460] text-sm leading-relaxed mb-3">
                  Pretty Palace Salon & Spa has earned its reputation as the best hair salon in Minneapolis through consistent excellence, personalized service, and a passion for beautiful hair. Located in the vibrant Uptown district, our salon is a sanctuary where every client is welcomed with warmth and leaves transformed.
                </p>
                <p className="text-[#6B6460] text-sm leading-relaxed">
                  Our team of licensed and experienced hair stylists specializes in everything from precision cuts and balayage to keratin treatments and bridal styling. Whether you&apos;re a Minneapolis local or visiting from the surrounding metro area, Pretty Palace delivers a salon experience that stands above the rest.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl text-[#2C1A1D] mb-4">Hair Services at Our Minneapolis Salon</h2>
                <div className="space-y-3">
                  {[
                    { title: "Precision Haircuts Minneapolis", desc: "Face-shape analysis, scalp consultation, and a cut designed for your lifestyle and hair texture." },
                    { title: "Balayage & Highlights Minneapolis", desc: "Hand-painted, natural-looking color that grows out beautifully with minimal maintenance." },
                    { title: "Keratin Treatment Minneapolis", desc: "Frizz-free, smooth, manageable hair for up to 5 months — safe for color-treated hair." },
                    { title: "Bridal & Event Styling Minneapolis", desc: "Elegant updos, soft waves, and special occasion styles for your most important days." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3 p-4 bg-[#FAF7F2] rounded-lg border border-[#E8E0D8]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] mt-2 flex-shrink-0" />
                      <div>
                        <h3 className="text-sm font-semibold text-[#2C1A1D] mb-1">{item.title}</h3>
                        <p className="text-xs text-[#6B6460]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-serif text-xl text-[#2C1A1D] mb-4">Why We&apos;re Rated the Best Hair Salon in Minneapolis</h2>
                <p className="text-[#6B6460] text-sm leading-relaxed mb-3">
                  Minneapolis has no shortage of hair salons, but Pretty Palace consistently stands out for several reasons. Our stylists undergo continuous training to stay current with the latest techniques and trends. We use only professional-grade, cruelty-free products from trusted brands.
                </p>
                <p className="text-[#6B6460] text-sm leading-relaxed">
                  Every client receives a thorough consultation before any service begins. We listen, understand your hair goals, and execute with precision. Our results speak for themselves — and our clients keep coming back.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              <div className="bg-[#2C1A1D] text-white rounded-lg p-6">
                <h3 className="font-serif text-lg mb-4">Visit Our Minneapolis Salon</h3>
                <div className="space-y-3 text-sm">
                  <p className="text-white/70">📍 Uptown District<br />Minneapolis, MN 55405</p>
                  <p className="text-white/70">📞 <a href="tel:+16120000000" className="hover:text-[#C9A96E]">(612) 000-0000</a></p>
                  <div className="border-t border-white/10 pt-3 mt-3 text-white/70 space-y-1">
                    <p>Mon – Fri: 9:00 AM – 7:00 PM</p>
                    <p>Saturday: 9:00 AM – 6:00 PM</p>
                    <p>Sunday: 11:00 AM – 5:00 PM</p>
                  </div>
                </div>
                <a href="tel:+16120000000" className="mt-5 block text-center py-2.5 bg-[#C9A96E] text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-[#b8923a] transition-colors">
                  Book Now
                </a>
              </div>

              <div className="bg-[#FAF7F2] border border-[#E8E0D8] rounded-lg p-5">
                <h3 className="font-semibold text-sm text-[#2C1A1D] mb-3">Related Services</h3>
                <ul className="space-y-2">
                  {[
                    { label: "Hair Styling Minneapolis", href: "/hair-styling-minneapolis" },
                    { label: "Laser Hair Removal Minneapolis", href: "/laser-hair-removal-minneapolis" },
                    { label: "Hair Transplant Minneapolis", href: "/hair-transplant-minneapolis" },
                    { label: "Uptown Hair District", href: "/uptown-hair-district-salon-minneapolis" },
                    { label: "All Services", href: "/services" },
                  ].map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-xs text-[#6B6460] hover:text-[#C9A96E] transition-colors flex items-center gap-1.5">
                        <span className="text-[#C9A96E]">→</span> {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#FAF7F2] border-t border-[#E8E0D8]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-2xl text-[#2C1A1D] mb-8 text-center">Frequently Asked Questions — Minneapolis Hair Salon</h2>
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
    </>
  );
}
