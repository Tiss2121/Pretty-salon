import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://prettypalacesalonspa.com"),
  title: {
    default: "Pretty Palace Salon & Spa | Hair Salon Minneapolis",
    template: "%s | Pretty Palace Salon & Spa Minneapolis",
  },
  description:
    "Pretty Palace Salon & Spa — Minneapolis premier hair salon in the Uptown district. Expert haircuts, coloring, styling, laser hair removal & restoration services.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Pretty Palace Salon & Spa",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#1A1A1A]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
