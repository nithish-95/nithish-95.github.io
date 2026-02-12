"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Software Development Engineer - GenAI",
    company: "Square Results",
    location: "Seattle, WA",
    period: "Aug 2025 - Present",
    description: "Architected a multi-tenant centralized backend with Supabase, unifying authentication and user management across multiple company websites, reducing login friction by 30% and enabling scalable access for thousands of users.",
    technologies: ["Supabase", "Go", "PostgreSQL", "Authentication"],
    current: true,
  },
  {
    id: 2,
    role: "Software Developer - Contract",
    company: "ClassA.AI",
    location: "Seattle, WA",
    period: "Jul 2025 - Aug 2025",
    description: "Delivered complete TypeScript schema library and data integration system for 200+ aviation insurance endorsements, automating .docx policy generation with TypeBox validation.",
    technologies: ["TypeScript", "TypeBox", "Node.js", "Document Generation"],
    current: false,
  },
  {
    id: 3,
    role: "Full Stack Engineer",
    company: "Central Marine Research Institute",
    location: "Remote, WA",
    period: "Jan 2025 - Jul 2025",
    description: "Developed full-stack applications using Vue.js, Flutter, and Go, serving 100+ researchers with real-time marine data access. Built an offline-first system with automatic sync for preserving data during connection loss.",
    technologies: ["Vue.js", "Flutter", "Go", "Offline-First"],
    current: false,
  },
  {
    id: 4,
    role: "Research Assistant - GenAI DeepFake",
    company: "University of Michigan",
    location: "Dearborn, MI",
    period: "Sep 2024 - Dec 2024",
    description: "Designed and validated deepfake detection models using TensorFlow, achieving 88.37% accuracy by benchmarking eight models across diverse GenAI image generation datasets. Architected a full-stack Next.js platform for public testing.",
    technologies: ["TensorFlow", "Next.js", "Deep Learning", "Python"],
    current: false,
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-2 block">
            Work History
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the companies I&apos;ve had the privilege to work with.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary md:-translate-x-1/2 mt-2 ring-4 ring-background" />

              {/* Content Card */}
              <div
                className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                }`}
              >
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  {/* Header */}
                  <div className={`mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      {exp.current && (
                        <Badge variant="default" className="text-xs">
                          Current
                        </Badge>
                      )}
                    </div>
                    <div
                      className={`flex items-center gap-4 text-muted-foreground text-sm flex-wrap ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <span className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                    <span
                      className={`flex items-center gap-1 text-sm text-primary font-medium mt-2 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div
                    className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
