import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Uptown Hair District Salon Minneapolis | Pretty Palace Salon & Spa",
  description:
    "Pretty Palace Salon & Spa is located in the Uptown Hair District of Minneapolis — the city's most vibrant beauty neighborhood. Expert hair, spa & laser services near you.",
  alternates: { canonical: "https://www.prettypalacesalonspa.com/uptown-hair-district-salon-minneapolis" },
  openGraph: {
    title: "Uptown Hair District Salon Minneapolis | Pretty Palace",
    description: "Minneapolis's premier Uptown hair salon. Located in the heart of the Uptown Hair District — expert cuts, color, styling & spa services.",
    url: "https://www.prettypalacesalonspa.com/uptown-hair-district-salon-minneapolis",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Pretty Palace Salon & Spa — Uptown Minneapolis",
  url: "https://www.prettypalacesalonspa.com/uptown-hair-district-salon-minneapolis",
  telephone: "+16120000000",
  description: "Premier hair salon in the Uptown Hair District of Minneapolis. Expert cuts, color, styling, laser hair removal, and hair restoration in the heart of Uptown.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Uptown District",
    addressLocality: "Minneapolis",
    addressRegion: "MN",
    postalCode: "55405",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 44.9487, longitude: -93.2975 },
  hasMap: "https://maps.google.com/?q=Pretty+Palace+Salon+Spa+Uptown+Minneapolis",
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "11:00", closes: "17:00" },
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "187" },
};

const nearbyNeighborhoods = [
  "Lowry Hill", "Whittier", "Lyndale", "Loring Park", "Kenwood", "Lake of the Isles"
];

const allServices = [
  { label: "Hair Cuts & Styling", href: "/hair-styling-minneapolis" },
  { label: "Hair Color & Balayage", href: "/services" },
  { label: "Laser Hair Removal", href: "/laser-hair-removal-minneapolis" },
  { label: "Hair Restoration", href: "/hair-transplant-minneapolis" },
  { label: "Spa Treatments", href: "/services" },
  { label: "Minneapolis Hair Salon", href: "/hair-salon-minneapolis" },
];

const faq = [
  { q: "Where exactly is Pretty Palace Salon located in Uptown Minneapolis?", a: "Pretty Palace Salon & Spa is located in the heart of the Uptown neighborhood in Minneapolis, MN 55405. The area is easily accessible via Hennepin Ave and is well-served by Minneapolis public transit." },
  { q: "What makes Uptown Minneapolis a great neighborhood for a hair salon?", a: "The Uptown district is Minneapolis's most vibrant and style-conscious neighborhood, home to an eclectic mix of boutiques, restaurants, and beauty services. Our clients appreciate the walkable location, creative community, and the area's commitment to quality local businesses." },
  { q: "Is there parking near Pretty Palace Salon in Uptown?", a: "Yes, there is street parking on nearby streets as well as several parking lots within walking distance of our Uptown Minneapolis location. We recommend checking the Minneapolis Parking Finder for real-time availability." },
  { q: "What neighborhoods near Minneapolis does Pretty Palace serve?", a: "We welcome clients from across Minneapolis and the Twin Cities metro, including Lowry Hill, Whittier, Lyndale, Loring Park, Kenwood, Bryn Mawr, South Minneapolis, and beyond." },
  { q: "Are you the best hair salon in the Uptown district of Minneapolis?", a: "We're proud to be rated 4.9★ by over 187 Minneapolis clients, making Pretty Palace Salon & Spa one of the highest-rated hair salons in the Uptown district. Our team works hard to earn that rating with every appointment." },
];

export default function UptownHairDistrictPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <nav className="bg-[#FAF7F2] border-b border-[#E8E0D8] py-3 text-xs text-[#6B6460]">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/" className="hover:text-[#C9A96E]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/hair-salon-minneapolis" className="hover:text-[#C9A96E]">Hair Salon Minneapolis</Link>
          <span className="mx-2">›</span>
          <span className="text-[#2C1A1D]">Uptown Hair District</span>
        </div>
      </nav>

      <section className="bg-[#2C1A1D] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A96E]">Uptown District · Minneapolis, MN 55405</span>
          <div className="w-8 h-0.5 bg-[#C9A96E] my-3" />
          <h1 className="font-serif text-3xl md:text-5xl text-white leading-tight mb-4 max-w-2xl">
            Uptown Hair District Salon Minneapolis — Pretty Palace
          </h1>
          <p className="text-white/70 text-sm max-w-xl leading-relaxed mb-7">
            In the heart of Minneapolis&apos;s iconic Uptown district, Pretty Palace Salon & Spa is your neighborhood destination for expert hair, beauty, and spa services. We&apos;re proudly local, expertly staffed, and passionate about making you look and feel your best.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:+16120000000" className="px-7 py-3 bg-[#C9A96E] text-white text-sm font-bold uppercase tracking-wider rounded hover:bg-[#b8923a] transition-colors">
              Book Appointment
            </a>
            <Link href="/services" className="px-7 py-3 border border-white/30 text-white text-sm font-bold uppercase tracking-wider rounded hover:bg-white/10 transition-colors">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Location card */}
      <section className="py-14 bg-[#FAF7F2] border-b border-[#E8E0D8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-[#2C1A1D] text-white rounded-lg p-6">
              <h2 className="font-serif text-lg mb-4 text-[#C9A96E]">Salon Location</h2>
              <div className="space-y-3 text-sm text-white/75">
                <p>📍 Uptown District<br />Minneapolis, MN 55405</p>
                <p>📞 <a href="tel:+16120000000" className="hover:text-[#C9A96E] transition-colors">(612) 000-0000</a></p>
                <p>✉ <a href="mailto:info@prettypalacesalonspa.com" className="hover:text-[#C9A96E] transition-colors">info@prettypalacesalonspa.com</a></p>
                <div className="border-t border-white/10 pt-3">
                  <p>Mon – Fri: 9:00 AM – 7:00 PM</p>
                  <p>Saturday: 9:00 AM – 6:00 PM</p>
                  <p>Sunday: 11:00 AM – 5:00 PM</p>
                </div>
              </div>
              <a href="tel:+16120000000" className="mt-5 block text-center py-2.5 bg-[#C9A96E] text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-[#b8923a] transition-colors">
                Call Us Now
              </a>
            </div>

            <div className="lg:col-span-2 space-y-5">
              <div>
                <h2 className="font-serif text-2xl text-[#2C1A1D] mb-3">Your Uptown Minneapolis Hair Salon</h2>
                <p className="text-[#6B6460] text-sm leading-relaxed mb-3">
                  Uptown Minneapolis is known for its creative energy, independent boutiques, and commitment to quality — values that Pretty Palace Salon & Spa shares completely. Our salon sits at the intersection of beauty, wellness, and Minneapolis culture.
                </p>
                <p className="text-[#6B6460] text-sm leading-relaxed">
                  Whether you&apos;re a long-time Uptown resident, a visitor exploring the neighborhood, or driving in from across the Twin Cities, our salon offers a premium experience in a welcoming, stylish environment.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-[#2C1A1D] mb-2">Neighborhoods We Serve</h3>
                <div className="flex flex-wrap gap-2">
                  {nearbyNeighborhoods.map((n) => (
                    <span key={n} className="text-xs px-3 py-1.5 bg-white border border-[#E8E0D8] text-[#6B6460] rounded-full">{n}</span>
                  ))}
                  <span className="text-xs px-3 py-1.5 bg-white border border-[#E8E0D8] text-[#6B6460] rounded-full">All Minneapolis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services available at this location */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A96E]">Available at Our Uptown Location</span>
            <div className="w-8 h-0.5 bg-[#C9A96E] mx-auto my-3" />
            <h2 className="font-serif text-2xl text-[#2C1A1D]">Full-Service Uptown Hair Salon & Spa</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allServices.map((s) => (
              <Link key={s.href} href={s.href} className="flex items-center gap-3 p-4 bg-[#FAF7F2] rounded-lg border border-[#E8E0D8] hover:border-[#C9A96E] hover:shadow-md transition-all group">
                <span className="text-[#C9A96E] text-lg">→</span>
                <span className="text-sm font-semibold text-[#2C1A1D] group-hover:text-[#C9A96E] transition-colors">{s.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 bg-[#FAF7F2]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-2xl text-[#2C1A1D] mb-5">Why Uptown Minneapolis Loves Pretty Palace</h2>
          <p className="text-[#6B6460] text-sm leading-relaxed mb-4">
            Since opening our doors in the Uptown district, Pretty Palace Salon & Spa has become a beloved fixture of the neighborhood&apos;s beauty scene. Our clients come from Uptown, Lowry Hill, Whittier, and all across Minneapolis for services they can&apos;t find elsewhere: genuine expertise, consistent results, and a warm atmosphere that feels like home.
          </p>
          <p className="text-[#6B6460] text-sm leading-relaxed mb-4">
            Our location puts us in the heart of the Uptown Hair District — a cluster of Minneapolis&apos;s most talented independent salons and stylists. We&apos;re proud to represent this community with the quality and character Uptown is known for.
          </p>
          <div className="bg-white border border-[#E8E0D8] rounded-lg p-5">
            <h3 className="font-semibold text-sm text-[#2C1A1D] mb-3">Getting to Our Uptown Minneapolis Salon</h3>
            <ul className="space-y-2 text-xs text-[#6B6460]">
              <li>🚌 <strong className="text-[#2C1A1D]">Bus:</strong> Multiple Metro Transit routes serve the Uptown area on Hennepin Ave and Lake St</li>
              <li>🚗 <strong className="text-[#2C1A1D]">By Car:</strong> Street parking available + nearby parking ramps on W 28th St</li>
              <li>🚲 <strong className="text-[#2C1A1D]">By Bike:</strong> Nice Ride docking station nearby. Uptown is highly bikeable</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-white border-t border-[#E8E0D8]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-2xl text-[#2C1A1D] mb-8">FAQs — Uptown Hair District Salon Minneapolis</h2>
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

      {/* Related pages internal linking */}
      <section className="py-12 bg-[#FAF7F2] border-t border-[#E8E0D8]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-xl text-[#2C1A1D] mb-6 text-center">Explore Pretty Palace Minneapolis</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Hair Salon Minneapolis", href: "/hair-salon-minneapolis" },
              { label: "Hair Styling Minneapolis", href: "/hair-styling-minneapolis" },
              { label: "Laser Hair Removal", href: "/laser-hair-removal-minneapolis" },
              { label: "Hair Restoration", href: "/hair-transplant-minneapolis" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="block text-center p-4 bg-white border border-[#E8E0D8] rounded-lg hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all text-xs font-semibold text-[#2C1A1D]">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#2C1A1D] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-2xl text-white mb-3">Visit Us in Uptown Minneapolis Today</h2>
          <p className="text-white/70 text-sm mb-6">Walk-ins welcome. Appointments recommended for specialty services.</p>
          <a href="tel:+16120000000" className="inline-block px-10 py-3.5 bg-[#C9A96E] text-white text-sm font-bold uppercase tracking-wider rounded hover:bg-[#b8923a] transition-colors">
            Call (612) 000-0000
          </a>
        </div>
      </section>
    </>
  );
}
