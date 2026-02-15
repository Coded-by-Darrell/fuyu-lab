"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    number: "1",
    title: "Register Via OKX",
    description: "Sign up using our exclusive OKX referral link to start your journey.",
    links: [
      { label: "OKX REFERRAL LINK", href: "https://www.okx.com" },
    ],
  },
  {
    number: "2",
    title: "Fund Your Account",
    description: "Deposit $100 to your OKX account to get started.",
    links: [
      { label: "HOW TO BUY USDT", href: "https://www.okx.com" },
      { label: "HOW TO DEPOSIT", href: "https://www.okx.com" },
    ],
  },
  {
    number: "3",
    title: "Join Fuyu Lab",
    description: "Join our Discord community and send a ticket with your Discord name and OKX UID to the #help-desk.",
    descriptionClassName: "max-w-[320px]",
    links: [
      { label: "DISCORD LINK", href: "https://discord.gg" },
    ],
  },
];

export function HowToJoin() {
  return (
    <section id="how-to-join" className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden font-sans">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Sticker heading - constrained size to avoid pixelation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-20 flex justify-center px-2"
        >
          <Image
            src="/assets/image-fbae4c26-6882-4d65-b09b-63448c3a7af7.png"
            alt="HOW CAN I BECOME PART OF FUYU LAB?"
            width={520}
            height={120}
            className="h-auto w-full object-contain"
            style={{ maxWidth: "min(420px, 90vw)" }}
            unoptimized
          />
        </motion.div>

        {/* 3-step timeline */}
        <div className="relative">
          {/* Progress line */}
          <div
            className="absolute top-12 left-0 right-0 h-1 hidden md:block"
            style={{
              background: "linear-gradient(90deg, #AFFC6D 0%, #AFFC6D 100%)",
              boxShadow: "0 0 20px rgba(175,252,109,0.5)",
              marginLeft: "16.666%",
              marginRight: "16.666%",
            }}
          />

          <div className="grid md:grid-cols-3 gap-10 sm:gap-12 md:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-24 h-24 rounded-full flex items-center justify-center mb-6 relative z-10"
                  style={{
                    backgroundColor: "#AFFC6D",
                    boxShadow:
                      "0 0 40px rgba(175,252,109,0.5), 0 0 80px rgba(175,252,109,0.2)",
                  }}
                >
                  <span className="text-3xl font-bold text-white">
                    {step.number}
                  </span>
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className={`text-white text-sm font-normal leading-relaxed mb-4 mx-auto ${(step as { descriptionClassName?: string }).descriptionClassName ?? "max-w-[280px]"}`}>
                  {step.description}
                </p>
                <div className="flex flex-col gap-2 items-center">
                  {step.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-normal text-white hover:text-[#AFFC6D] transition-colors inline-flex items-center gap-1 underline underline-offset-2 decoration-white hover:decoration-[#AFFC6D]"
                    >
                      {link.label}
                      <span>→</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <Link
            href="/"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center justify-center px-8 sm:px-12 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base text-[#0a0a0b] uppercase tracking-wide transition-opacity hover:opacity-95"
            style={{
              backgroundColor: "#AFFC6D",
              boxShadow: "0 0 20px rgba(175,252,109,0.3), 0 0 40px rgba(175,252,109,0.15)",
            }}
          >
            JOIN FUYU LAB
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
