"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "events", label: "Events" },
  { id: "merch", label: "Merch" },
];

const SCROLL_THRESHOLD = 50;
const SECTION_IDS = ["home", "services", "events", "merch", "contact"];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
      const offset = 150;
      let current = "home";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const { top } = el.getBoundingClientRect();
          if (top <= offset) current = id;
        }
      }
      setActiveSection(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 sm:top-6 left-0 right-0 z-50 w-full px-3 sm:px-4 flex justify-center"
    >
      <nav
        className={`flex items-center justify-between rounded-full bg-[#1a1a1e]/40 backdrop-blur-xl border border-white/20 w-[95%] sm:w-[90%] px-4 sm:px-7 h-14 sm:h-16 transition-[max-width] duration-500 ease-in-out ${
          isScrolled ? "max-w-2xl" : "max-w-5xl"
        }`}
        style={{
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
            className="h-8 sm:h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href="/"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeSection === link.id ? "text-[#A6FF4D]" : "text-white/80 hover:text-white"
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
            className={`hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full font-semibold text-sm border transition-all ${
              activeSection === "contact"
                ? "bg-[#A6FF4D]/20 text-[#A6FF4D] border-[#A6FF4D]/40"
                : "bg-[#25252a] text-white border-white/20 hover:bg-[#2a2a2e]"
            }`}
          >
            CONTACT
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2.5 text-white -mr-1 min-w-[44px] min-h-[44px] flex items-center justify-center"
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

      {/* Mobile menu - slide-in panel from right */}
      <AnimatePresence>
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="md:hidden fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            aria-hidden
          />
          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
            className="md:hidden fixed top-0 right-0 z-[70] h-full w-[min(280px,85vw)] bg-[#1a1a1e]/95 backdrop-blur-xl border-l border-white/10 shadow-2xl flex flex-col"
          >
            {/* Panel header with close button */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <span className="text-white/80 text-sm font-medium">Menu</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 -mr-2 text-white hover:bg-white/10 rounded-full transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* Menu links */}
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                    setMobileOpen(false);
                  }}
                  className={`px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${
                    activeSection === link.id ? "text-[#A6FF4D] bg-[#A6FF4D]/10" : "text-white/90 hover:bg-white/10"
                  }`}
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
                className={`px-4 py-3.5 rounded-xl font-semibold text-center mt-4 border transition-colors ${
                  activeSection === "contact"
                    ? "bg-[#A6FF4D]/20 text-[#A6FF4D] border-[#A6FF4D]/40"
                    : "bg-[#25252a] text-white border-white/20 hover:bg-[#2a2a2e]"
                }`}
              >
                CONTACT
              </a>
            </nav>
          </motion.div>
        </>
      )}
      </AnimatePresence>
    </motion.header>
  );
}
