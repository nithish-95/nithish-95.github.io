"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Software Development Engineer - GenAI",
    company: "Square Results",
    location: "Remote, WA",
    period: "Aug 2025 – Present",
    highlights: [
      "Designed and implemented a RAG-based job matching pipeline using Gemini 2.5 Flash that ingests resumes from AWS S3, queries job descriptions from Bedrock, and generates personalized recommendations",
      "Built scheduled pipeline with Supabase caching for fast retrieval and improved system responsiveness",
      "Automated CI/CD pipelines using GitHub Actions and Docker, deploying backend via AWS App Runner and frontend via AWS Amplify",
      "Engineered secure multi-tenant platform using FastAPI and Next.js with strict data isolation and access controls",
      "Led redesign of Square Results V2, transforming static website into scalable full-stack platform with chatbot integration and admin dashboards",
      "Owned and delivered end-to-end athlete scouting platform using Next.js, Convex, and Amazon S3",
      "Built AI-powered recruitment platform MVP in 30 days from ideation to investor-ready demo",
      "Designed infrastructure using Terraform and developed monorepo system with Turborepo including web, backend, and mobile app",
    ],
    technologies: ["FastAPI", "Next.js", "AWS", "Gemini", "Supabase", "Docker", "Terraform", "Turborepo", "Convex"],
    current: true,
  },
  {
    id: 2,
    role: "Software Developer - Contract",
    company: "ClassA.AI",
    location: "Remote, WA",
    period: "Jul 2025 – Aug 2025",
    highlights: [
      "Re-architected document-generation workflow for aviation insurance platform using Temporal, enabling 30-branch decision tree for private-jet policies",
      "Replaced fragmented database-backed state machine with durable workflow model, eliminating manual state persistence",
      "Enhanced data consistency and fault tolerance using Temporal's stateful history for deterministic resume of interrupted document generations",
    ],
    technologies: ["Temporal", "TypeScript", "Node.js", "Document Generation"],
    current: false,
  },
  {
    id: 3,
    role: "Full Stack Engineer",
    company: "Central Marine Research Institute",
    location: "Remote, WA",
    period: "Jan 2025 – Jul 2025",
    highlights: [
      "Transformed unstructured PDFs of marine encyclopedia into structured SQLite3 database by extracting images and metadata with Python",
      "Built responsive web application using Vue.js and Go backend for real-time visualization and search of marine research data",
      "Developed cross-platform mobile app using Flutter with offline-first architecture for researchers in remote settings",
    ],
    technologies: ["Go", "Vue.js", "Flutter", "SQLite", "Python"],
    current: false,
  },
  {
    id: 4,
    role: "Research Assistant - GenAI DeepFake",
    company: "University of Michigan",
    location: "Dearborn, MI",
    period: "Sep 2024 – Dec 2024",
    highlights: [
      "Developed benchmarking pipelines using Python and TensorFlow to evaluate eight Deepfake detection models",
      "Achieved 88.37% accuracy on diverse GenAI image datasets with custom model",
      "Engineered continuous feedback loop by deploying full-stack Next.js prototype for public testing with SQLite schema capturing user data for iterative retraining",
    ],
    technologies: ["Python", "TensorFlow", "Next.js", "SQLite", "ML"],
    current: false,
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
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
            Impact-driven engineering across GenAI, backend, and full-stack roles.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="relative pl-8 md:pl-0">
                {/* Timeline connector */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-[11px] md:left-[calc(50%-1px)] top-12 bottom-[-32px] w-px bg-border" />
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-3 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className={`w-3 h-3 rounded-full ${exp.current ? 'bg-primary' : 'bg-primary/60'}`} />
                </div>

                {/* Content */}
                <div className={`md:grid md:grid-cols-2 md:gap-8 ${
                  index % 2 === 0 ? '' : 'md:text-right'
                }`}>
                  {/* Date - shown on opposite side for alternating */}
                  <div className={`hidden md:block ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:order-2 md:pl-8'}`}>
                    <span className="text-sm font-medium text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>

                  {/* Card */}
                  <div className={`${index % 2 === 0 ? 'md:order-2 md:pl-8' : 'md:pr-8'}`}>
                    <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <h3 className="text-lg font-bold">{exp.role}</h3>
                          {exp.current && (
                            <Badge variant="default" className="text-[10px]">
                              Current
                            </Badge>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Building2 className="w-3.5 h-3.5" />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </span>
                          <span className="md:hidden flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2 mb-4">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ArrowUpRight className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className={`flex flex-wrap gap-1.5 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-[10px] font-medium"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}