import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Book an Appointment | Pretty Palace Salon & Spa Minneapolis",
  description:
    "Book your appointment at Pretty Palace Salon & Spa in Uptown Minneapolis. Hair cuts, color, styling, laser hair removal & more. Contact us today.",
  alternates: { canonical: "https://www.prettypalacesalonspa.com/contact" },
  openGraph: {
    title: "Book an Appointment | Pretty Palace Salon & Spa Minneapolis",
    description: "Schedule your visit at Pretty Palace Salon & Spa — Uptown Minneapolis's premier hair salon & spa.",
    url: "https://www.prettypalacesalonspa.com/contact",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Book an Appointment — Pretty Palace Salon & Spa",
  url: "https://www.prettypalacesalonspa.com/contact",
  mainEntity: {
    "@type": "HairSalon",
    name: "Pretty Palace Salon & Spa",
    telephone: "+16120000000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Uptown District",
      addressLocality: "Minneapolis",
      addressRegion: "MN",
      postalCode: "55405",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "19:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "11:00", closes: "17:00" },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Breadcrumb */}
      <nav className="bg-[#FAF7F2] border-b border-[#E8E0D8] py-3 text-xs text-[#6B6460]">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/" className="hover:text-[#C9A96E]">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-[#2C1A1D]">Book Appointment</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#2C1A1D] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A96E]">Uptown Minneapolis</span>
          <div className="w-8 h-0.5 bg-[#C9A96E] my-3" />
          <h1 className="font-serif text-3xl md:text-4xl text-white mb-3">Book Your Appointment</h1>
          <p className="text-white/70 text-sm max-w-xl leading-relaxed">
            Fill out the form below and our team will confirm your appointment within 24 hours. You can also call us directly at{" "}
            <a href="tel:+16120000000" className="text-[#C9A96E] hover:underline">(612) 000-0000</a>.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Sidebar info */}
            <aside className="space-y-5">
              <div className="bg-[#2C1A1D] text-white rounded-lg p-6">
                <h2 className="font-serif text-lg text-[#C9A96E] mb-4">Salon Info</h2>
                <div className="space-y-3 text-sm text-white/75">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#C9A96E] mb-1">Address</p>
                    <p>Uptown District<br />Minneapolis, MN 55405</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#C9A96E] mb-1">Phone</p>
                    <a href="tel:+16120000000" className="hover:text-[#C9A96E] transition-colors">(612) 000-0000</a>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#C9A96E] mb-1">Email</p>
                    <a href="mailto:info@prettypalacesalonspa.com" className="hover:text-[#C9A96E] transition-colors text-xs break-all">info@prettypalacesalonspa.com</a>
                  </div>
                  <div className="border-t border-white/10 pt-3">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#C9A96E] mb-2">Hours</p>
                    <p>Mon – Fri: 9:00 AM – 7:00 PM</p>
                    <p>Saturday: 9:00 AM – 6:00 PM</p>
                    <p>Sunday: 11:00 AM – 5:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-[#E8E0D8] rounded-lg p-5">
                <h3 className="font-semibold text-sm text-[#2C1A1D] mb-3">Our Services</h3>
                <ul className="space-y-2">
                  {[
                    { label: "Hair Salon Minneapolis", href: "/hair-salon-minneapolis" },
                    { label: "Hair Styling Minneapolis", href: "/hair-styling-minneapolis" },
                    { label: "Laser Hair Removal", href: "/laser-hair-removal-minneapolis" },
                    { label: "Hair Restoration", href: "/hair-transplant-minneapolis" },
                    { label: "Uptown Hair District", href: "/uptown-hair-district-salon-minneapolis" },
                    { label: "All Services & Prices", href: "/services" },
                  ].map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-xs text-[#6B6460] hover:text-[#C9A96E] transition-colors flex items-center gap-1.5">
                        <span className="text-[#C9A96E]">→</span> {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#C9A96E]/10 border border-[#C9A96E]/30 rounded-lg p-5">
                <p className="text-xs text-[#2C1A1D] leading-relaxed">
                  <strong>Walk-ins welcome</strong> based on availability. For specialty services (color, laser, restoration), we recommend booking at least 48h in advance.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
