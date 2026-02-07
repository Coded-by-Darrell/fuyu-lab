"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const tabs = ["Today", "Upcoming", "Done"];

const eventSchedules = [
  {
    id: "november-2024",
    image: "/assets/events-november-2024.png",
    alt: "FUYU LAB November 2024 Schedule",
    glowColor: "green" as const,
  },
  {
    id: "december-2024",
    image: "/assets/events-december-2024.png",
    alt: "FUYU LAB December 2024 Schedule",
    glowColor: "red" as const,
  },
];

const glowStyles = {
  green: {
    boxShadow:
      "0 0 32px rgba(175,252,109,0.35), 0 0 64px rgba(175,252,109,0.2), 0 0 96px rgba(175,252,109,0.12), inset 0 0 0 1px rgba(175,252,109,0.4)",
  },
  red: {
    boxShadow:
      "0 0 32px rgba(255,80,140,0.35), 0 0 64px rgba(255,80,140,0.2), 0 0 96px rgba(255,80,140,0.12), inset 0 0 0 1px rgba(255,80,140,0.4)",
  },
};

export function Events() {
  const [activeTab, setActiveTab] = useState("Upcoming");

  return (
    <section
      id="events"
      className="relative h-screen min-h-[600px] flex flex-col overflow-hidden"
      style={{
        paddingTop: 16,
        paddingBottom: 40,
        paddingLeft: 24,
        paddingRight: 24,
        scrollMarginTop: 88,
      }}
    >
      <div
        className="relative z-10 flex-1 min-h-0 flex flex-col mx-auto w-full"
        style={{ maxWidth: 1240 }}
      >
        {/* EVENTS title — subtle glow to avoid visible section split */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-shrink-0 flex justify-center"
          style={{ marginBottom: 8 }}
        >
          <div
            style={{
              filter:
                "drop-shadow(0 0 4px rgba(175,252,109,0.4)) drop-shadow(0 0 2px rgba(175,252,109,0.25))",
            }}
          >
            <Image
              src="/assets/events-heading.png"
              alt="EVENTS"
              width={240}
              height={90}
              className="h-auto object-contain"
              style={{ width: "min(240px, 22vw)" }}
              unoptimized
            />
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex-shrink-0 flex justify-center"
          style={{ gap: 10, marginBottom: 24 }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="rounded-full text-sm font-medium transition-all flex items-center"
              style={{
                height: 38,
                paddingLeft: 18,
                paddingRight: 18,
                ...(activeTab === tab
                  ? {
                      backgroundColor: "#AFFC6D",
                      color: "#0a0a0b",
                      boxShadow: "0 0 12px rgba(175,252,109,0.5), 0 0 24px rgba(175,252,109,0.25)",
                    }
                  : {
                      backgroundColor: "rgba(255,255,255,0.05)",
                      color: "rgba(255,255,255,0.7)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }),
              }}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Cards — aligned to top so View More stays visible */}
        <div
          className="flex-1 min-h-0 w-full flex flex-wrap justify-center gap-8 md:gap-12 items-start"
          style={{ maxWidth: 1240, margin: "0 auto" }}
        >
          {eventSchedules.map((schedule, i) => (
            <motion.div
              key={schedule.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-[20px] overflow-hidden shrink-0"
              style={glowStyles[schedule.glowColor]}
            >
              <Image
                src={schedule.image}
                alt={schedule.alt}
                width={340}
                height={486}
                className="block object-contain w-full h-auto"
                style={{ maxWidth: 340, maxHeight: "min(400px, calc(100vh - 280px))" }}
                unoptimized
                sizes="(max-width: 768px) 100vw, 340px"
              />
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-shrink-0 flex justify-center"
          style={{ marginTop: 20, marginBottom: 100}}
        >
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full font-semibold transition-opacity hover:opacity-95"
            style={{
              paddingLeft: 28,
              paddingRight: 28,
              paddingTop: 12,
              paddingBottom: 12,
              fontSize: 14,
              backgroundColor: "#AFFC6D",
              color: "#0a0a0b",
              boxShadow: "0 0 24px rgba(175,252,109,0.35), 0 0 48px rgba(175,252,109,0.15)",
            }}
          >
            View More
          </a>
        </motion.div>
      </div>
    </section>
  );
}
