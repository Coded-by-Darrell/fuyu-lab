"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhyJoin } from "@/components/WhyJoin";
import { HowToJoin } from "@/components/HowToJoin";
import { Events } from "@/components/Events";
import { Merch } from "@/components/Merch";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen overflow-x-hidden"
    >
      {/* Page-level background: dark base + organic blobs that flow across sections */}
      <div className="absolute inset-0 -z-10 min-h-full">
        {/* Dark base canvas */}
        <div className="absolute inset-0 bg-[#050506]" aria-hidden />

        {/* Bridge: seamless Hero→WhyJoin transition — spans boundary, pixel-perfect */}
        <div
          className="absolute inset-x-0 pointer-events-none"
          style={{
            top: "55vh",
            height: "95vh",
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(5,5,6,0.04) 15%, rgba(5,5,6,0.12) 30%, rgba(5,5,6,0.26) 45%, rgba(5,5,6,0.44) 58%, rgba(5,5,6,0.62) 70%, rgba(5,5,6,0.78) 82%, rgba(5,5,6,0.9) 92%, rgba(5,5,6,0.97) 97%, #050506 100%)",
          }}
          aria-hidden
        />

        {/* Hero: green blob top-left — vibrant, soft-edged */}
        <div
          className="absolute rounded-full hero-blob-1"
          style={{
            width: 1400,
            height: 1400,
            top: "-15%",
            left: "-30%",
            filter: "blur(140px)",
            background:
              "radial-gradient(circle, rgba(175,252,109,0.55) 0%, rgba(166,255,77,0.35) 25%, rgba(120,200,60,0.18) 45%, rgba(80,150,40,0.06) 65%, transparent 85%)",
          }}
          aria-hidden
        />

        {/* Hero: red/pink blob top-right — vibrant, soft-edged */}
        <div
          className="absolute rounded-full hero-blob-2"
          style={{
            width: 1400,
            height: 1400,
            top: "-15%",
            right: "-30%",
            filter: "blur(140px)",
            background:
              "radial-gradient(circle, rgba(255,80,140,0.55) 0%, rgba(255,100,160,0.35) 25%, rgba(220,60,120,0.18) 45%, rgba(180,40,90,0.06) 65%, transparent 85%)",
          }}
          aria-hidden
        />

        {/* WhyJoin→HowToJoin: subtle red glow bottom-right — emerges from dark */}
        <div
          className="absolute rounded-full"
          style={{
            width: 1300,
            height: 1300,
            top: "32%",
            right: "-20%",
            filter: "blur(160px)",
            background:
              "radial-gradient(circle, rgba(255,80,140,0.12) 0%, rgba(255,90,150,0.06) 30%, rgba(200,50,100,0.02) 55%, transparent 80%)",
          }}
          aria-hidden
        />

        {/* HowToJoin: prominent red blob right — flows into Events */}
        <div
          className="absolute rounded-full howtojoin-blob"
          style={{
            width: 1200,
            height: 1200,
            top: "42%",
            right: "-35%",
            filter: "blur(150px)",
            background:
              "radial-gradient(circle, rgba(255,80,140,0.4) 0%, rgba(255,90,150,0.25) 25%, rgba(240,70,130,0.12) 50%, rgba(200,50,100,0.04) 70%, transparent 90%)",
          }}
          aria-hidden
        />

        {/* HowToJoin/Events: soft green left — balances red */}
        <div
          className="absolute rounded-full"
          style={{
            width: 1100,
            height: 1100,
            top: "45%",
            left: "-28%",
            filter: "blur(150px)",
            background:
              "radial-gradient(circle, rgba(175,252,109,0.12) 0%, rgba(175,252,109,0.06) 35%, rgba(120,200,80,0.02) 60%, transparent 85%)",
          }}
          aria-hidden
        />

        {/* Events: green blob left — more pronounced */}
        <div
          className="absolute rounded-full"
          style={{
            width: 1000,
            height: 1000,
            top: "58%",
            left: "-25%",
            filter: "blur(140px)",
            background:
              "radial-gradient(circle, rgba(175,252,109,0.15) 0%, rgba(175,252,109,0.08) 30%, rgba(120,200,80,0.03) 55%, transparent 80%)",
          }}
          aria-hidden
        />

        {/* Merch: pink/magenta blob left */}
        <div
          className="absolute rounded-full"
          style={{
            width: 1000,
            height: 1000,
            top: "78%",
            left: "-30%",
            filter: "blur(140px)",
            background:
              "radial-gradient(circle, rgba(255,120,180,0.2) 0%, rgba(255,90,150,0.1) 30%, rgba(220,70,130,0.04) 55%, transparent 80%)",
          }}
          aria-hidden
        />

        {/* Merch: green blob right */}
        <div
          className="absolute rounded-full"
          style={{
            width: 900,
            height: 900,
            top: "78%",
            right: "-25%",
            filter: "blur(140px)",
            background:
              "radial-gradient(circle, rgba(175,252,109,0.12) 0%, rgba(175,252,109,0.06) 35%, rgba(120,200,80,0.02) 60%, transparent 85%)",
          }}
          aria-hidden
        />
      </div>

      <Navbar />
      <Hero />
      <WhyJoin />
      <HowToJoin />
      <Events />
      <Merch />
      <Footer />
    </motion.main>
  );
}
