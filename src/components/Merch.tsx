"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* Bright green padlock icon — matches design spec */
function PadlockIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v2.25a3 3 0 003 3h10.5a3 3 0 003-3v-2.25a3 3 0 00-3-3v-3A5.25 5.25 0 0012 1.5zM9.75 6.75a2.25 2.25 0 114.5 0v3h-4.5v-3z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const products = [
  { name: "Live with the Flow Tee", image: "/assets/merch-live-with-the-flow-tee.png" },
  { name: "Bucket Hat", image: "/assets/merch-bucket-hat.png" },
  { name: "Black Logo Tee", image: "/assets/merch-black-logo-tee.png" },
];

export function Merch() {
  return (
    <section
      id="merch"
      className="min-h-screen px-4 sm:px-6 py-8 sm:py-12"
      style={{
        scrollMarginTop: 88,
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* MERCH title — centered, design spec */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 sm:mb-10 flex justify-center"
        >
          <Image
            src="/assets/merch-heading.png"
            alt="MERCH"
            width={250}
            height={100}
            className="w-full max-w-[200px] sm:max-w-[250px] h-auto object-contain"
          />
        </motion.div>

        {/* Product cards — exact design: image fill, padlock top-right, subtle border */}
        <div className="grid sm:grid-cols-3 gap-6 md:gap-8 mb-8">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-xl overflow-hidden aspect-square max-h-[260px] sm:max-h-[320px] mx-auto sm:mx-0 w-full max-w-[280px] sm:max-w-none"
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
              }}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 33vw"
                unoptimized
              />
              {/* Padlock icon — top-right, bright green, per design */}
              <div
                className="absolute top-3 right-3 z-10 w-6 h-6 text-[#AFFC6D] drop-shadow-md"
                aria-hidden
              >
                <PadlockIcon className="w-full h-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learn More button — centered, lime green, per design */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.a
            href="/"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#A6FF4D] text-[#0a0a0b] font-bold"
            style={{
              boxShadow: "0 2px 12px rgba(166,255,77,0.4)",
            }}
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
