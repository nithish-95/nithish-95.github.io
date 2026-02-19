"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail, Trophy } from "lucide-react";
import Link from "next/link";
import { SplineScene } from "@/components/ui/SplineScene";

// Smooth scroll handler for hash links
const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (href.startsWith("#")) {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 text-white">
      {/* Spline 3D Background */}
      <SplineScene
        scene="https://prod.spline.design/1Fev8vLMMhgRYzuL/scene.splinecode"
        className="absolute inset-0 w-full h-full"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center pointer-events-none">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="text-white/60 text-lg font-medium">
            Hello, I&apos;m
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          Nithish{" "}
          <span className="text-primary">Suresh Babu</span>
        </motion.h1>

        {/* Title with typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <span className="text-2xl sm:text-3xl md:text-4xl text-white/60 font-medium">
            Software Developer
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg sm:text-xl text-white max-w-2xl mx-auto mb-6 leading-relaxed"
        >
          Software Development Engineer - GenAI with expertise in full-stack development
          and AI integration. Building scalable, multi-tenant platforms and robust data solutions.
        </motion.p>

        {/* Achievement Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-10 pointer-events-auto"
        >
          <Link
            href="https://chrono-next-6u7e.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 border border-yellow-500/20 rounded-full hover:border-yellow-500/40 transition-all duration-300 group"
          >
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span className="text-sm font-medium">
              People&apos;s Choice of the Year 2025
            </span>
            <span className="text-xs text-muted-foreground hidden sm:inline">
              Google Cloud Developers
            </span>
            <span className="text-xs bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 px-2 py-0.5 rounded-full ml-1">
              AI Voice Agent
            </span>
          </Link>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 pointer-events-auto"
        >
          <Button asChild size="lg" className="min-w-[160px]">
            <Link href="#projects" onClick={(e) => handleScrollClick(e, "#projects")}>View Projects</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="min-w-[160px]">
            <Link href="#contact" onClick={(e) => handleScrollClick(e, "#contact")}>Contact Me</Link>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center gap-6 pointer-events-auto"
        >
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-primary transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-primary transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link
            href="mailto:nithish952001@gmail.com"
            className="text-white/60 hover:text-primary transition-colors duration-300"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-auto"
      >
        <Link href="#about" onClick={(e) => handleScrollClick(e, "#about")} className="flex flex-col items-center gap-2 text-white/60 hover:text-primary transition-colors">
          <span className="text-sm font-medium">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
