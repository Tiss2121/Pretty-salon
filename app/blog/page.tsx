import type { Metadata } from "next";
import Link from "next/link";
import { allArticles } from "@/components/BlogLayout";

export const metadata: Metadata = {
  title: "Blog — Minneapolis Spa & Wellness Guide | Pretty Palace Salon & Spa",
  description:
    "Expert guides on massage, sensual wellness, and spa experiences in Minneapolis. Discover the best studios, what's legal, and how to book the right experience.",
  alternates: { canonical: "https://www.prettypalacesalonspa.com/blog" },
  openGraph: {
    title: "Blog — Minneapolis Spa & Wellness Guide",
    description: "Expert spa and wellness guides for Minneapolis — from the team at Pretty Palace Salon & Spa.",
    url: "https://www.prettypalacesalonspa.com/blog",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Pretty Palace Salon & Spa Blog — Minneapolis Wellness Guide",
  url: "https://www.prettypalacesalonspa.com/blog",
  publisher: {
    "@type": "Organization",
    name: "Pretty Palace Salon & Spa",
    url: "https://www.prettypalacesalonspa.com",
  },
};

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Breadcrumb */}
      <nav className="bg-[#FAF7F2] border-b border-[#E8E0D8] py-3 text-xs text-[#6B6460]">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/" className="hover:text-[#C9A96E]">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-[#2C1A1D]">Blog</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#2C1A1D] py-14 md:py-18">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A96E]">Minneapolis Wellness</span>
          <div className="w-8 h-0.5 bg-[#C9A96E] my-3" />
          <h1 className="font-serif text-3xl md:text-4xl text-white mb-3">
            Minneapolis Spa & Wellness Blog
          </h1>
          <p className="text-white/70 text-sm max-w-xl leading-relaxed">
            Expert guides on massage, sensual wellness, and spa experiences in the Twin Cities — from the team at Pretty Palace Salon & Spa, Uptown Minneapolis.
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-16 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {allArticles.map((article, i) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="block bg-white border border-[#E8E0D8] rounded-xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                {i === 0 && (
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-white bg-[#C9A96E] px-2.5 py-1 rounded-full mb-3">
                    Featured
                  </span>
                )}
                <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-[#C9A96E] mb-2">
                  {article.keyword}
                </span>
                <h2 className="font-serif text-lg text-[#2C1A1D] group-hover:text-[#C9A96E] transition-colors leading-snug mb-3">
                  {article.title}
                </h2>
                <p className="text-xs text-[#6B6460] leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-[#6B6460]">{article.readTime} read</span>
                  <span className="text-xs font-bold text-[#C9A96E] group-hover:translate-x-1 transition-transform inline-block">
                    Read Article →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Internal links to salon pages */}
          <div className="bg-[#2C1A1D] rounded-xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A96E] mb-2">Pretty Palace Salon & Spa</p>
                <h2 className="font-serif text-2xl mb-3">Minneapolis&apos;s Premier Hair Salon & Spa</h2>
                <p className="text-white/70 text-sm leading-relaxed">
                  Located in the heart of Uptown Minneapolis, Pretty Palace offers expert hair, beauty, and spa treatments — cuts, color, laser hair removal, and more.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: "Hair Salon Minneapolis", href: "/hair-salon-minneapolis" },
                  { label: "All Services & Pricing", href: "/services" },
                  { label: "Laser Hair Removal", href: "/laser-hair-removal-minneapolis" },
                  { label: "Hair Styling Minneapolis", href: "/hair-styling-minneapolis" },
                  { label: "Hair Restoration", href: "/hair-transplant-minneapolis" },
                  { label: "Book Appointment", href: "/contact" },
                ].map((l) => (
                  <Link key={l.href} href={l.href} className="block text-xs text-white/70 hover:text-[#C9A96E] transition-colors flex items-center gap-1.5 py-1">
                    <span className="text-[#C9A96E]">→</span> {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
