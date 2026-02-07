import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Fuyu Lab | Learn, Trade, Glow",
  description:
    "Fuyu Lab is a Discord trading community exclusively for traders using OKX and BingX. Join to get access to premium trading signals, mentorship, and events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans text-white bg-[#050506]">{children}</body>
    </html>
  );
}
