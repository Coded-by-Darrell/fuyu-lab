"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const tabs = ["Today", "Upcoming", "Done"];

const eventSchedules = [
  {
    month: "November 2024",
    theme: "dark",
    events: [
      "Nov 4 - Market Analysis Live",
      "Nov 11 - OKX Campaign Launch",
      "Nov 18 - Trading Workshop",
      "Nov 25 - Community AMA",
    ],
  },
  {
    month: "December 2024",
    theme: "light",
    events: [
      "Dec 2 - Year-End Outlook",
      "Dec 9 - BingX Exclusive",
      "Dec 16 - Holiday Trading",
      "Dec 23 - Year in Review",
    ],
  },
];

export function Events() {
  const [activeTab, setActiveTab] = useState("Upcoming");

  return (
    <section id="events" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Sticker heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex justify-center"
        >
          <Image
            src="/assets/image-14123f8c-c19d-43e9-803b-afcc9f867838.png"
            alt="EVENTS"
            width={300}
            height={100}
            className="w-full max-w-xs h-auto object-contain"
          />
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-[#A6FF4D] text-[#0a0a0b]"
                  : "bg-white/5 text-white/70 hover:text-white border border-white/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Event cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {eventSchedules.map((schedule, i) => (
            <motion.div
              key={schedule.month}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`rounded-[24px] overflow-hidden p-8 ${
                schedule.theme === "dark"
                  ? "bg-[#1a1a1c]"
                  : "bg-[#f0ede1] text-[#1a1a1c]"
              }`}
              style={{
                border: "1px solid rgba(166,255,77,0.3)",
                boxShadow: "0 0 40px rgba(166,255,77,0.15)",
              }}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="text-[#A6FF4D]">📈</span>
                <span className="text-[#FF4D4D]">📉</span>
                <h3
                  className={`font-bold text-lg ${
                    schedule.theme === "dark" ? "text-white" : "text-[#1a1a1c]"
                  }`}
                >
                  FUYU LAB {schedule.month.toUpperCase()} SCHEDULE
                </h3>
              </div>
              <ul className="space-y-3">
                {schedule.events.map((event) => (
                  <li
                    key={event}
                    className={`text-sm ${
                      schedule.theme === "dark"
                        ? "text-white/80"
                        : "text-[#1a1a1c]/80"
                    }`}
                  >
                    {event}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
