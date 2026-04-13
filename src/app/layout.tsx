import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Agradip's Portfolio",
  description:
    "Don't cover a judge by its a book gang, there could be some cool things in here who knows.",
  keywords: ["Agradip", "Developer", "Portfolio", "Frontend", "Projects"],
  authors: [{ name: "Agradip", url: "https://agradip.fyi" }],
  openGraph: {
    title: "Agradip's Portfolio",
    description:
      "Don't cover a judge by its book gang, there could be some cool things in here who knows.",
    url: "https://agradip.fyi",
    siteName: "agradip.fyi",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.png`,
        alt: "Dogesh lmao",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

import VantaBackground from "@/components/VantaBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative min-h-screen overflow-x-hidden">
          <VantaBackground />

          {/* Strong backdrop blur overlay for legibility and abstract look */}
          <div className="fixed inset-0 backdrop-blur-[8px] bg-zinc-950/20 pointer-events-none -z-10" />

          <div className="relative z-10">
            {children}

            <div className="max-w-4xl mx-auto text-center">
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
