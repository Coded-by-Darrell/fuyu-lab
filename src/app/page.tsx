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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
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
