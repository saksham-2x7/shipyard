import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

// Self-host Google Font via next/font to eliminate external font requests and layout shifts.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://shipyard-storefront.vercel.app"
  ),
  title: {
    default: "ShipYard",
    template: "%s | ShipYard",
  },
  description: "Gear for people who build, run, and explore.",
  keywords: ["storefront", "gear", "sneakers", "audio", "wearables", "gadgets"],
  openGraph: {
    title: "ShipYard",
    description: "Gear for people who build, run, and explore.",
    type: "website",
    siteName: "ShipYard",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <nav className="nav">
          <div className="nav-inner">
            <Link href="/" className="nav-brand">
              ⚓ ShipYard
            </Link>
            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/#Sneakers">Sneakers</Link>
              <Link href="/#Audio">Audio</Link>
              <Link href="/#Wearables">Wearables</Link>
              <Link href="/#Gadgets">Gadgets</Link>
            </div>
            <span className="nav-cart">🛒</span>
          </div>
        </nav>
        {children}
        <footer className="footer">
          <p>Built with Next.js. ShipYard is a demo storefront.</p>
        </footer>
      </body>
    </html>
  );
}
