"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    number: "1",
    title: "Register via OKX",
    description:
      "Create a new OKX account through our exclusive link. Complete verification to get started.",
  },
  {
    number: "2",
    title: "Fund your account",
    description:
      "Deposit the required minimum trading capital to qualify for Fuyu Lab membership.",
  },
  {
    number: "3",
    title: "Join Fuyu Lab Discord",
    description:
      "Verify your OKX account to gain access to our Discord community and all premium features.",
  },
];

export function HowToJoin() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Sticker heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex justify-center"
        >
          <Image
            src="/assets/image-fbae4c26-6882-4d65-b09b-63448c3a7af7.png"
            alt="HOW CAN I BECOME PART OF FUYU LAB?"
            width={700}
            height={140}
            className="w-full max-w-2xl h-auto object-contain"
          />
        </motion.div>

        {/* 3-step timeline */}
        <div className="relative">
          {/* Progress line */}
          <div
            className="absolute top-12 left-0 right-0 h-1 hidden md:block"
            style={{
              background: "linear-gradient(90deg, #A6FF4D 0%, #A6FF4D 100%)",
              boxShadow: "0 0 20px rgba(166,255,77,0.5)",
              marginLeft: "16.666%",
              marginRight: "16.666%",
            }}
          />

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
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
                  className="w-24 h-24 rounded-full flex items-center justify-center mb-6 relative z-10 bg-[#A6FF4D]"
                  style={{
                    boxShadow:
                      "0 0 40px rgba(166,255,77,0.5), 0 0 80px rgba(166,255,77,0.2)",
                  }}
                >
                  <span className="text-3xl font-bold text-[#0a0a0b]">
                    {step.number}
                  </span>
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
