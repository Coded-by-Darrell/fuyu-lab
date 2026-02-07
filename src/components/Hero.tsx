"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col pt-24 px-6 sm:px-8 overflow-hidden"
    >
      {/* Animated gradient background - green left, red right (not black) */}
      <div className="absolute inset-0">
        {/* Base: green on left → red/pink on right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #0f1a0a 0%, #1a2510 20%, #1a0f14 50%, #251018 80%, #1a0a10 100%)",
          }}
        />

        {/* Vibrant lime green - left side, dominant */}
        <div
          className="absolute w-[900px] h-[900px] rounded-full blur-[120px] hero-blob-1"
          style={{
            top: "-20%",
            left: "-25%",
            background:
              "radial-gradient(circle, rgba(175, 252, 109, 0.85) 0%, rgba(166, 255, 77, 0.6) 30%, rgba(120, 200, 60, 0.4) 50%, rgba(80, 150, 40, 0.2) 70%, transparent 90%)",
          }}
        />

        {/* Vibrant red/pink - right side, dominant */}
        <div
          className="absolute w-[900px] h-[900px] rounded-full blur-[120px] hero-blob-2"
          style={{
            top: "-20%",
            right: "-25%",
            background:
              "radial-gradient(circle, rgba(255, 80, 140, 0.85) 0%, rgba(255, 100, 160, 0.6) 30%, rgba(220, 60, 120, 0.4) 50%, rgba(180, 40, 90, 0.2) 70%, transparent 90%)",
          }}
        />

        {/* Center blend - subtle overlap */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(166, 255, 77, 0.15) 0%, rgba(255, 80, 140, 0.15) 50%, transparent 70%)",
          }}
        />

        {/* Smooth transition to black - fades as user scrolls toward Services */}
        <div
          className="absolute inset-x-0 bottom-0 h-[50vh] pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.85) 70%, #000 100%)",
          }}
          aria-hidden
        />
      </div>

      {/* Content: left = mockup, right = text + buttons */}
      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start pt-4 pb-48 flex-1">
        {/* Left - Mobile + Tablet mockup - larger, centered in column */}
        <div className="flex justify-center lg:justify-center order-2 lg:order-1">
          <div className="relative w-full max-w-[420px] lg:max-w-[480px]">
            <Image
              src="/assets/hero-mockup.png"
              alt="Benefits of joining Fuyu Lab"
              width={1564}
              height={1664}
              className="w-full h-auto object-contain"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* Right - Graphic Text Art + description + pill buttons - aligned top */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2 lg:pt-2">
          {/* LEARN, TRADE, GLOW AT FUYU LAB */}
          <div className="mb-8 w-full max-w-lg">
            <Image
              src="/assets/hero-headline.png"
              alt="LEARN, TRADE, GLOW AT FUYU LAB"
              width={600}
              height={200}
              className="w-full h-auto object-contain"
              priority
              unoptimized
            />
          </div>

          {/* Description text - more spacing */}
          <p className="text-white/90 text-base sm:text-lg max-w-md mb-10 leading-relaxed">
            Fuyu Lab is a Discord trading community exclusively for those who
            sign up on OKX and BingX. It&apos;s a project under 365Icarus.
          </p>

          {/* Two pill buttons - more spacing between */}
          <div className="flex flex-wrap gap-5">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-95"
              style={{ backgroundColor: "#AFFC6D", color: "#0a0a0b" }}
            >
              JOIN THE LAB
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>

            <a
              href="https://365icarus.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base border-2 border-white text-white bg-transparent hover:bg-white/10 transition-colors"
            >
              365Icarus
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Partners marquee - Figma: no black strip, logos on gradient, edge-to-edge seamless loop */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen max-w-none py-8">
        <p className="text-center text-white/80 text-sm font-medium mb-6 px-4">
          Partners
        </p>
        <div className="w-full overflow-hidden">
          <div className="flex animate-marquee mix-blend-lighten">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex shrink-0 items-center gap-8 lg:gap-12 px-6">
                <Image
                  src="/assets/logo-okx.png"
                  alt="OKX"
                  width={80}
                  height={40}
                  className="h-8 w-auto object-contain opacity-90"
                  unoptimized
                />
                <Image
                  src="/assets/logo-bitget.png"
                  alt="Bitget"
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain opacity-90"
                  unoptimized
                />
                <Image
                  src="/assets/logo-bingx.png"
                  alt="BingX"
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain opacity-90"
                  unoptimized
                />
                <Image
                  src="/assets/logo-blue-guardian.png"
                  alt="Blue Guardian"
                  width={140}
                  height={40}
                  className="h-8 w-auto object-contain opacity-90"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
