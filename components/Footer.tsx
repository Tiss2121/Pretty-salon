import Link from "next/link";

const services = [
  { label: "Hair Salon Minneapolis", href: "/hair-salon-minneapolis" },
  { label: "Hair Styling Minneapolis", href: "/hair-styling-minneapolis" },
  { label: "Laser Hair Removal", href: "/laser-hair-removal-minneapolis" },
  { label: "Hair Transplant Minneapolis", href: "/hair-transplant-minneapolis" },
  { label: "Uptown Hair District", href: "/uptown-hair-district-salon-minneapolis" },
  { label: "All Services", href: "/services" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2C1A1D] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="font-serif text-xl text-white mb-3">
              Pretty Palace <span className="text-[#C9A96E]">Salon & Spa</span>
            </p>
            <p className="text-white/65 text-sm leading-relaxed max-w-xs">
              Minneapolis&apos;s premier hair salon & spa, serving the Uptown community with expert
              cuts, color, styling, laser treatments, and hair restoration services.
            </p>
            <div className="mt-5 space-y-1.5">
              <p className="text-white/65 text-sm">
                📍 <span className="text-white/80">Minneapolis, MN — Uptown District</span>
              </p>
              <p className="text-white/65 text-sm">
                📞 <a href="tel:+16120000000" className="text-white/80 hover:text-[#C9A96E] transition-colors">(612) 000-0000</a>
              </p>
              <p className="text-white/65 text-sm">
                ✉ <a href="mailto:info@prettypalacesalonspa.com" className="text-white/80 hover:text-[#C9A96E] transition-colors">info@prettypalacesalonspa.com</a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A96E] mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-white/65 hover:text-[#C9A96E] transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A96E] mb-4">Hours</h4>
            <ul className="space-y-2 text-sm text-white/65">
              <li><span className="text-white/80">Mon – Fri</span>  9:00 AM – 7:00 PM</li>
              <li><span className="text-white/80">Saturday</span>  9:00 AM – 6:00 PM</li>
              <li><span className="text-white/80">Sunday</span>  11:00 AM – 5:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Pretty Palace Salon & Spa · Minneapolis, MN</p>
          <div className="flex gap-5">
            <Link href="/services" className="hover:text-[#C9A96E] transition-colors">Services</Link>
            <Link href="/hair-salon-minneapolis" className="hover:text-[#C9A96E] transition-colors">Hair Salon</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
