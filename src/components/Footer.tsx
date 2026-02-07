"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SocialIcons } from "./SocialIcons";

export function Footer() {
  return (
    <footer id="contact" className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-[#A6FF4D] py-12 px-6"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <Image
              src="/logo-dark.svg"
              alt="Fuyu Lab"
              width={48}
              height={48}
              className="object-contain"
            />
            <span className="font-bold text-[#0a0a0b] text-xl">Fuyu Lab</span>
          </a>

          {/* Social icons */}
          <SocialIcons />

          {/* Description */}
          <p className="text-[#0a0a0b]/80 text-sm font-medium text-center md:text-right max-w-xs">
            Become part of our trading community.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
