"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Hair Salon", href: "/hair-salon-minneapolis" },
  { label: "Hair Styling", href: "/hair-styling-minneapolis" },
  { label: "Laser Removal", href: "/laser-hair-removal-minneapolis" },
  { label: "Uptown", href: "/uptown-hair-district-salon-minneapolis" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E8E0D8] shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-[72px]">
        <Link href="/" className="font-serif text-xl text-[#2C1A1D] whitespace-nowrap">
          Pretty Palace <span className="text-[#C9A96E]">Salon & Spa</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-widest text-[#1A1A1A] hover:text-[#C9A96E] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/services"
            className="ml-2 px-5 py-2.5 text-xs font-bold uppercase tracking-widest bg-[#2C1A1D] text-white rounded hover:bg-[#C9A96E] transition-colors"
          >
            Book Now
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-[#2C1A1D] transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#2C1A1D] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#2C1A1D] transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="lg:hidden border-t border-[#E8E0D8] bg-white px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold uppercase tracking-wider text-[#1A1A1A] hover:text-[#C9A96E] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/services"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-3 text-sm font-bold uppercase tracking-widest bg-[#2C1A1D] text-white rounded text-center hover:bg-[#C9A96E] transition-colors"
          >
            Book Now
          </Link>
        </nav>
      )}
    </header>
  );
}
