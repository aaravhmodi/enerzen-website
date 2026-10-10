import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geist = localFont({ src: "./fonts/geist-latin.woff2", variable: "--font-geist", weight: "100 900", display: "swap" });

export const metadata: Metadata = {
  title: "EnerZen | Better homes, better lives",
  description: "Canadian building science. Thoughtful design. EnerZen brings panelized construction and Passive House principles together for better homes and communities.",
  openGraph: { title: "EnerZen — Better homes. Better lives.", description: "A more thoughtful way to build high-performance, low-carbon housing in Canada.", type: "website", locale: "en_CA" },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={geist.variable} suppressHydrationWarning><body>{children}</body></html>;
}
