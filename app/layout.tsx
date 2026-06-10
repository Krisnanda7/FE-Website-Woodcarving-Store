import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CartSidebar from "./components/cart/CartSideBar";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MutraWoodCarving",
  description:
    "Explore Mutra Wood Carving’s exquisite collection of handcrafted wooden furniture and authentic Balinese carvings.",
  openGraph: {
    title: "Balinese Handcrafted Wooden Furniture & Carvings | MutraWoodCarving",
    description:
      "Explore Mutra Wood Carving’s exquisite collection of handcrafted wooden furniture and authentic Balinese carvings.",
    url: "https://mutrawoodcarving.com",
    siteName: "MutraWoodCarving",
      images: [
        {
          url: "https://mutrawoodcarving.com/logo.png",
          width: 1200,
          height: 630,
          alt: "Mutra Wood Carving - Handcrafted Wooden Furniture and Balinese Carvings",
        },
      ],
    type: "website",
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Schema Organization untuk Google Logo */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Mutra Wood Carving",
              url: "https://mutrawoodcarving.com",
              logo: "https://mutrawoodcarving.com/logo.png",
            }),
          }}
        />

        {children}
        <Analytics />
        <CartSidebar />
      </body>
    </html>
  );
}
