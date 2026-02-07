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
        className="bg-[#A6FF4D] py-10 sm:py-12 px-4 sm:px-6 rounded-t-[32px] sm:rounded-t-[48px] md:rounded-t-[56px] relative"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-6 sm:gap-8">
          {/* Logo */}
          <a href="/" onClick={(e) => { e.preventDefault(); document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }); }} className="flex items-center justify-center md:justify-start shrink-0 overflow-visible order-1 md:order-none">
            <Image
              src="/assets/logo-fuyu-lab.png"
              alt="Fuyu Lab"
              width={200}
              height={64}
              className="h-10 sm:h-12 md:h-14 w-auto object-contain scale-125 sm:scale-150 md:scale-[1.75] origin-center"
              unoptimized
            />
          </a>

          {/* Middle: 3 images + text — centered in middle column */}
          <div className="flex flex-col items-center justify-center gap-4 order-2 md:order-none">
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
              <Image
                src="/assets/footer-circle-shark.png"
                alt=""
                width={72}
                height={72}
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-[#0a0a0b]/20"
                unoptimized
              />
              <Image
                src="/assets/footer-circle-person.png"
                alt=""
                width={72}
                height={72}
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-[#0a0a0b]/20"
                unoptimized
              />
              <Image
                src="/assets/footer-circle-fractal.png"
                alt=""
                width={72}
                height={72}
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-[#0a0a0b]/20"
                unoptimized
              />
            </div>
            <p className="text-[#0a0a0b]/80 text-xs sm:text-sm font-medium text-center max-w-xs px-2">
              Become a part of our thriving <strong>community</strong>.
            </p>
          </div>

          {/* Right: text centered above icons */}
          <div className="flex flex-col items-center gap-3 justify-center order-3 md:order-none">
            <p className="text-[#0a0a0b]/80 text-xs sm:text-sm font-medium text-center">
              Get in touch with me.
            </p>
            <SocialIcons />
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
