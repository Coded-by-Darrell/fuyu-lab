import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-sans/Geist-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans text-white bg-[#050506]" style={{ fontFamily: '"Geist Sans", ui-sans-serif, system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
