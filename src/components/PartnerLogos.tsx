"use client";

import Image from "next/image";

export function PartnerLogos() {
  return (
    <section className="py-12 px-4 bg-black/40">
      {/* Partners label */}
      <p className="text-center text-white/80 text-sm font-medium mb-8">
        Partners
      </p>

      {/* Scrolling container - right to left */}
      <div className="overflow-hidden">
        <div className="flex animate-scroll-rtl">
          <div className="flex shrink-0 items-center gap-16 px-8">
            <Image
              src="/assets/partners-logos.png"
              alt="Bitget, BingX, Blue Guardian"
              width={800}
              height={120}
              className="h-12 w-auto object-contain opacity-90"
              unoptimized
            />
          </div>
          <div className="flex shrink-0 items-center gap-16 px-8">
            <Image
              src="/assets/partners-logos.png"
              alt="Bitget, BingX, Blue Guardian"
              width={800}
              height={120}
              className="h-12 w-auto object-contain opacity-90"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
