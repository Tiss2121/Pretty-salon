import Link from "next/link";

export const allArticles = [
  {
    slug: "erotic-massage-minneapolis",
    title: "Erotic Massage in Minneapolis: What You Need to Know Before You Book",
    excerpt: "Minneapolis has a quietly thriving wellness scene. Understanding what erotic massage really means in the Twin Cities, what's legal, and where the best licensed studios are.",
    keyword: "erotic massage minneapolis",
    readTime: "5 min",
  },
  {
    slug: "erotic-services-minneapolis",
    title: "Erotic Services in Minneapolis: What Exists, What's Legal and Where to Go",
    excerpt: "A clear-eyed guide to the full landscape of erotic services in Minneapolis — sensual massage, adult entertainment, and sexual wellness. What's legal, what to avoid.",
    keyword: "erotic services minneapolis",
    readTime: "6 min",
  },
  {
    slug: "best-massage-minneapolis",
    title: "Best Massage in Minneapolis: 6 Studios Worth Your Time and Money in 2025",
    excerpt: "From Sabai Body Temple to the Four Seasons Spa, here are the massage studios in Minneapolis that actually deliver — ranked by experience type.",
    keyword: "best massage minneapolis",
    readTime: "7 min",
  },
  {
    slug: "best-erotic-spa-minneapolis",
    title: "Best Erotic Spa in Minneapolis: 5 Sensual and Luxurious Experiences Worth Booking",
    excerpt: "Sensual couples treatments, immersive bodywork, and luxury wellness in Minneapolis. All legal, all licensed — the studios that define the city's sensual spa scene.",
    keyword: "best erotic spa minneapolis",
    readTime: "6 min",
  },
  {
    slug: "sensual-massage-minneapolis-luxury-wellness",
    title: "Sensual Massage in Minneapolis: Why Luxury Wellness Is Growing in MN",
    excerpt: "Le massage sensuel et le bien-être de luxe explosent à Minneapolis en 2026. Spas, tendances, lieux incontournables et ce que ça dit de la culture wellness MN.",
    keyword: "sensual massage minneapolis",
    readTime: "7 min",
  },
  {
    slug: "laser-hair-removal-minneapolis",
    title: "Laser Hair Removal Minneapolis: Trends, Prices and Beauty Benefits in 2026",
    excerpt: "Prix par zone, meilleures cliniques et tendances beauté : tout sur l'épilation laser à Minneapolis en 2026 et pourquoi c'est devenu un investissement incontournable.",
    keyword: "laser hair removal minneapolis",
    readTime: "6 min",
  },
  {
    slug: "full-body-massage-self-care-minneapolis",
    title: "Full Body Massage and Self-Care Trends in Minneapolis in 2026",
    excerpt: "Les nouvelles tendances du massage corps entier et du self-care à Minneapolis en 2026 — modalités, spas, prix et ce que dit la science sur le soin corporel régulier.",
    keyword: "full body massage minneapolis",
    readTime: "7 min",
  },
  {
    slug: "content-creators-beauty-personal-branding",
    title: "Why Modern Content Creators Invest in Beauty and Personal Branding in 2026",
    excerpt: "En 2026, les créateurs de contenu qui réussissent investissent massivement dans leur image et leur beauté. Voici pourquoi c'est devenu une stratégie business, pas un luxe.",
    keyword: "content creators beauty personal branding",
    readTime: "6 min",
  },
  {
    slug: "premium-content-platforms-subscription-creators",
    title: "Premium Content Platforms and the Rise of Subscription-Based Creators in 2026",
    excerpt: "Comment les plateformes d'abonnement ont transformé l'économie des créateurs en 2026 : chiffres, stratégies et ce que les top creators font différemment pour fidéliser.",
    keyword: "premium content platforms creators",
    readTime: "7 min",
  },
];

export const internalLinks = [
  { label: "Hair Salon Minneapolis", href: "/hair-salon-minneapolis" },
  { label: "Spa Treatments & Services", href: "/services" },
  { label: "Laser Hair Removal Minneapolis", href: "/laser-hair-removal-minneapolis" },
  { label: "Hair Styling Minneapolis", href: "/hair-styling-minneapolis" },
  { label: "Book an Appointment", href: "/contact" },
];

interface BlogLayoutProps {
  children: React.ReactNode;
  currentSlug: string;
  title: string;
  keyword: string;
  readTime: string;
}

export default function BlogLayout({ children, currentSlug, title, keyword, readTime }: BlogLayoutProps) {
  const related = allArticles.filter((a) => a.slug !== currentSlug).slice(0, 4);

  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-[#FAF7F2] border-b border-[#E8E0D8] py-3 text-xs text-[#6B6460]">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/" className="hover:text-[#C9A96E]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/blog" className="hover:text-[#C9A96E]">Blog</Link>
          <span className="mx-2">›</span>
          <span className="text-[#2C1A1D] line-clamp-1 max-w-xs inline-block align-bottom">{title}</span>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Article content */}
          <article className="lg:col-span-2">
            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A96E] bg-[#C9A96E]/10 px-3 py-1 rounded-full">
                {keyword}
              </span>
              <span className="text-xs text-[#6B6460]">{readTime} read</span>
            </div>

            {/* Article body */}
            <div className="prose-custom">
              {children}
            </div>

            {/* CTA box inside article */}
            <div className="mt-10 bg-[#2C1A1D] rounded-xl p-7 text-white">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A96E] mb-2">Pretty Palace Salon & Spa</p>
              <h3 className="font-serif text-xl mb-2">Looking for a Premium Spa Experience in Minneapolis?</h3>
              <p className="text-white/70 text-sm mb-5 leading-relaxed">
                Pretty Palace Salon & Spa in Uptown Minneapolis offers expert hair, beauty, and spa treatments in a welcoming, professional environment.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="px-6 py-2.5 bg-[#C9A96E] text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-[#b8923a] transition-colors">
                  Book Appointment
                </Link>
                <Link href="/services" className="px-6 py-2.5 border border-white/30 text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-white/10 transition-colors">
                  Our Services
                </Link>
              </div>
            </div>

            {/* Related articles */}
            <div className="mt-10">
              <h2 className="font-serif text-xl text-[#2C1A1D] mb-5 pb-3 border-b border-[#E8E0D8]">Related Articles</h2>
              <div className="space-y-4">
                {related.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="block p-4 bg-[#FAF7F2] border border-[#E8E0D8] rounded-lg hover:border-[#C9A96E] hover:shadow-md transition-all group"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A96E] mb-1 block">{article.keyword}</span>
                    <h3 className="text-sm font-semibold text-[#2C1A1D] group-hover:text-[#C9A96E] transition-colors leading-snug mb-1">{article.title}</h3>
                    <p className="text-xs text-[#6B6460] line-clamp-2">{article.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-5">
            {/* Salon CTA */}
            <div className="bg-[#2C1A1D] text-white rounded-xl p-6">
              <p className="font-serif text-base text-[#C9A96E] mb-1">Pretty Palace</p>
              <p className="text-white font-semibold text-sm mb-3">Salon & Spa — Uptown Minneapolis</p>
              <ul className="space-y-1.5 text-xs text-white/65 mb-4">
                <li>✂️ Hair Cuts & Styling</li>
                <li>🎨 Color & Balayage</li>
                <li>💆 Spa Treatments</li>
                <li>✨ Laser Hair Removal</li>
                <li>🌿 Hair Restoration</li>
              </ul>
              <Link href="/contact" className="block text-center py-2.5 bg-[#C9A96E] text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-[#b8923a] transition-colors">
                Book Now
              </Link>
            </div>

            {/* Salon pages */}
            <div className="bg-white border border-[#E8E0D8] rounded-xl p-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#2C1A1D] mb-3">Explore Our Salon</h3>
              <ul className="space-y-2.5">
                {internalLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-xs text-[#6B6460] hover:text-[#C9A96E] transition-colors flex items-center gap-1.5">
                      <span className="text-[#C9A96E]">→</span> {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* All blog posts */}
            <div className="bg-[#FAF7F2] border border-[#E8E0D8] rounded-xl p-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#2C1A1D] mb-3">All Articles</h3>
              <ul className="space-y-3">
                {allArticles.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/blog/${a.slug}`}
                      className={`text-xs leading-snug block hover:text-[#C9A96E] transition-colors ${a.slug === currentSlug ? "text-[#C9A96E] font-semibold" : "text-[#6B6460]"}`}
                    >
                      {a.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
