"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "events", label: "Events" },
  { id: "merch", label: "Merch" },
];

const SCROLL_THRESHOLD = 50;

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    handleScroll(); // check initial state on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-0 right-0 z-50 w-full px-4 flex justify-center"
    >
      <nav
        className={`flex items-center justify-between rounded-full bg-[#1a1a1e]/40 backdrop-blur-xl border border-white/20 w-[90%] transition-[max-width] duration-500 ease-in-out ${
          isScrolled ? "max-w-2xl" : "max-w-5xl"
        }`}
        style={{
          height: 64,
          paddingLeft: 28,
          paddingRight: 28,
          boxShadow: "0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
            setMobileOpen(false);
          }}
          className="flex items-center shrink-0"
        >
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
          {navLinks.map((link, i) => (
            <a
              key={link.id}
              href="/"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                i === 0 ? "text-[#A6FF4D]" : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Contact Button */}
        <div className="flex items-center gap-4">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
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
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
                key={link.id}
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                  setMobileOpen(false);
                }}
                className="px-4 py-3 rounded-xl text-white/90 hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
                setMobileOpen(false);
              }}
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
