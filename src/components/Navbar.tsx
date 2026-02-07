"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#events", label: "Events" },
  { href: "#merch", label: "Merch" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4"
    >
      <nav
        className="flex items-center justify-between rounded-full px-6 py-3 bg-[#1a1a1e]/95 backdrop-blur-md border border-white/10"
        style={{
          boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
        }}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center shrink-0">
          <Image
            src="/assets/logo-fuyu-lab.png"
            alt="Fuyu Lab"
            width={140}
            height={48}
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => {
            const baseClass =
              "px-4 py-2 rounded-full text-sm font-medium transition-colors";
            const colorClass = i === 0 ? "text-[#A6FF4D]" : "text-white/80 hover:text-white";
            return (
              <a
                key={link.href}
                href={link.href}
                className={baseClass + " " + colorClass}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Contact Button */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#25252a] text-white font-semibold text-sm border border-white/20 hover:bg-[#2a2a2e] transition-all"
          >
            CONTACT
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden mt-2 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 overflow-hidden"
        >
          <div className="p-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl text-white/90 hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 rounded-xl bg-[#25252a] text-white font-semibold text-center mt-2 border border-white/20"
            >
              CONTACT
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
