"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Zap, Server, Brain, Globe, GraduationCap, Calendar } from "lucide-react";

const highlights = [
  {
    icon: Server,
    title: "Backend Systems",
    description: "Go, FastAPI, distributed systems, and cloud-native architectures on AWS & GCP.",
  },
  {
    icon: Brain,
    title: "GenAI & LLMs",
    description: "RAG pipelines, LangChain, Bedrock, Gemini, and intelligent workflow automation.",
  },
  {
    icon: Globe,
    title: "Full-Stack Delivery",
    description: "Next.js, React, React Native, and end-to-end product ownership from 0→1.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-2 block">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Full-Stack Engineer & GenAI Specialist
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Full-Stack Software Engineer specializing in GenAI-driven systems and scalable cloud architectures. 
                Experienced in building end-to-end AI platforms including RAG-based job matching and intelligent 
                workflow automation using modern cloud-native stacks.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Proven ability to take products from 0→1, design reliable backend systems, and deliver 
                production-ready applications with automated CI/CD pipelines. Master&apos;s in Computer and 
                Information Science from the University of Michigan.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Active open-source contributor to Google&apos;s go-github library and project maintainer for 
                Chrono—an AI-powered time tracking platform. Awarded People&apos;s Choice of the Year 2025 by 
                Google Cloud Developers for an AI Voice Agent that automates insurance quoting.
              </p>
              
              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="pt-4"
              >
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                  Education
                </h3>
                <div className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl">
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">University of Michigan</h4>
                    <p className="text-sm text-muted-foreground">
                      Master&apos;s in Computer and Information Science
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Aug 2023 – Apr 2025 · Michigan, USA
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <div className="pt-4">
                <Button asChild size="lg" variant="outline" className="group">
                  <a 
                    href="/resume/Nithish_Resume.pdf" 
                    download 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Download className="w-4 h-4 mr-2 transition-transform group-hover:translate-y-0.5" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="p-5 bg-card border border-border rounded-2xl hover:border-primary/30 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-primary/10 rounded-xl shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}