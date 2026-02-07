"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const NEON = "#AFFC6D";

const smallCards = [
  {
    title: "TRADING SIGNALS",
    description:
      "Elevate your trading game through our live mentorship sessions and discussions. Connect with experienced traders, share insights, and learn in a supportive and interactive environment.",
    image: "/assets/card-trading-signals.png",
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <line x1="12" y1="20" x2="12.01" y2="20" />
      </svg>
    ),
  },
  {
    title: "EXCLUSIVE CAMPAIGN",
    description:
      "We have an exclusive campaign, supported by BingX, 365Icarus, and OKX. You can win free USDT, merchandise, challenge accounts, and more.",
    image: "/assets/card-exclusive-campaign.png",
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "WEEKLY OUTLOOK",
    description:
      "Stay informed with in-depth analyses in crypto, commodities, and various other forex pairs delivered straight to your feed on a regular basis.",
    image: "/assets/card-weekly-outlook.png",
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
      </svg>
    ),
  },
  {
    title: "PERSONALIZED MERCH",
    description:
      "We have merch sponsored by BingX and OKX, but Icarus Falls and Fuyu Lab have created their own merch.",
    image: "/assets/card-personalized-merch.png",
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
  },
];


const cardBaseStyle = {
  border: "1px solid #AFFC6D",
  boxShadow:
    "0 0 8px rgba(175,252,109,.2), 0 0 20px rgba(175,252,109,.12)",
  backdropFilter: "blur(4px)",
  background: "rgba(0,0,0,.65)",
};

const iconStyle = {
  width: 22,
  height: 22,
  borderRadius: 9999,
  boxShadow: "0 0 8px rgba(175,252,109,.25)",
  background: "rgba(175,252,109,.08)",
  border: "1px solid rgba(175,252,109,.4)",
  color: NEON,
};

const imageOverlay =
  "linear-gradient(to bottom, rgba(0,0,0,.35), rgba(0,0,0,.75))";

export function WhyJoin() {
  return (
    <section
      id="services"
      className="relative h-screen max-h-screen overflow-hidden bg-black flex flex-col items-center justify-center"
      style={{ scrollMarginTop: 0 }}
    >
      {/* Faint radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(175,252,109,.05), transparent 60%)",
        }}
        aria-hidden
      />

      {/* Main content - max-w-6xl mx-auto, centered, scaled down 20% */}
      <div className="relative w-full max-w-6xl mx-auto px-6 flex flex-col items-center justify-center flex-1 min-h-0 py-8">
        {/* Header - 50% larger, more margin-bottom */}
        <div className="flex-shrink-0 flex justify-center mt-17 mb-14">
          <div
            className="relative"
            style={{
              filter: "drop-shadow(0 0 10px rgba(175,252,109,.2)) drop-shadow(0 0 3px rgba(175,252,109,.3))",
            }}
          >
            <Image
              src="/assets/services-heading.png"
              alt="WHY CONSIDER JOINING FUYU?"
              width={630}
              height={176}
              className="h-auto object-contain w-full"
              style={{ maxWidth: "min(585px, 50vw)" }}
              unoptimized
            />
          </div>
        </div>

        {/* Bento grid - gap-8, scale ~85% */}
        <div className="flex-1 min-h-0 w-full max-w-6xl flex items-center justify-center">
          <div
            className="grid h-full max-h-[68vh] w-full grid-cols-1 sm:grid-cols-[2fr_1fr_1fr] grid-rows-6 sm:grid-rows-2 gap-8"
            style={{ transform: "scale(0.85)", transformOrigin: "center" }}
          >
            {/* Left card - ~50% width, row-span-2, tall vertical */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="col-span-1 row-span-2 sm:row-span-2 h-full min-h-0"
            >
              <div
                className="services-card relative h-full w-full overflow-hidden rounded-xl"
                style={cardBaseStyle}
              >
                <Image
                  src="/assets/card-mentorship.png"
                  alt="Live mentorship session"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,.35) 0%, transparent 40%, transparent 50%, rgba(0,0,0,.75) 100%)",
                  }}
                  aria-hidden
                />
                <div className="absolute top-2 right-2">
                  <div className="flex items-center justify-center rounded-full" style={iconStyle}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3
                    className="text-sm font-extrabold text-white uppercase mb-0.5"
                    style={{ letterSpacing: "0.03em", textShadow: "0 0 8px rgba(175,252,109,.2)" }}
                  >
                    Live Mentorship
                  </h3>
                  <p
                    className="text-xs leading-[1.45]"
                    style={{ color: "rgba(255,255,255,.78)" }}
                  >
                    Elevate your trading game through our live mentorship sessions
                    and discussions. Connect with experienced traders, share
                    insights, and learn in a supportive and interactive
                    environment.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right - 2x2 smaller cards, perfect squares */}
            {smallCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="h-full min-h-0 w-full aspect-square"
              >
                <div
                  className="services-card relative h-full w-full overflow-hidden rounded-xl aspect-square"
                  style={cardBaseStyle}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: imageOverlay }}
                    aria-hidden
                  />
                  <div className="absolute top-2 right-2">
                    <div className="flex items-center justify-center rounded-full" style={iconStyle}>
                      {card.icon}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2.5">
                    <h3
                      className="text-[11px] font-extrabold text-white uppercase mb-0.5"
                      style={{ letterSpacing: "0.03em", textShadow: "0 0 6px rgba(175,252,109,.2)" }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="text-[10px] leading-[1.3] line-clamp-2"
                      style={{ color: "rgba(255,255,255,.78)" }}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
