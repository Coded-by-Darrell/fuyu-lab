"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    name: "Live with the Flow Tee",
    description: "Beige/Off-white",
    color: "bg-pink-400/30",
  },
  {
    name: "Bucket Hat",
    description: "Black with neon accents",
    color: "bg-pink-300/20",
  },
  {
    name: "Black Logo Tee",
    description: "Classic black",
    color: "bg-[#A6FF4D]/20",
  },
];

export function Merch() {
  return (
    <section id="merch" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Sticker heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex justify-center"
        >
          <Image
            src="/assets/image-26e2ed11-c69f-46d8-b1ff-8e5ef649b315.png"
            alt="MERCH"
            width={250}
            height={100}
            className="w-full max-w-[250px] h-auto object-contain"
          />
        </motion.div>

        {/* Product cards */}
        <div className="grid sm:grid-cols-3 gap-8 mb-12">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 50px rgba(166,255,77,0.3)",
              }}
              className="rounded-[24px] overflow-hidden p-8 aspect-square flex flex-col items-center justify-center relative"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                border: "1px solid rgba(166,255,77,0.3)",
                boxShadow: "0 0 40px rgba(166,255,77,0.1)",
              }}
            >
              <div
                className={`absolute inset-4 rounded-2xl ${product.color} opacity-50`}
              />
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center text-4xl">
                  👕
                </div>
                <h3 className="font-bold text-white mb-2">{product.name}</h3>
                <p className="text-white/60 text-sm">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#A6FF4D] text-[#0a0a0b] font-bold"
            style={{
              boxShadow: "0 0 30px rgba(166,255,77,0.4)",
            }}
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
