"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Lead AI Engineer",
    company: "Tech Torch",
    location: "South Elgin, IL",
    period: "Jul 2025 – Present",
    description: "Architected and sole-developed an AI-powered ARR/NARR Calculator replacing a manual process handled by 5–10 finance ops staff, reducing calculation time from days to seconds. Engineered a trigger-based LangGraph pipeline that activates on Salesforce Opportunity stage change, resolves complex deal lineage (renewals, amendments, upgrades), and writes computed ARR/NARR matrices directly back to Salesforce. Eliminated 1–3 hrs of daily manual FP&A effort by building a fully automated report pipeline ingesting Salesforce and NetSuite data and delivering daily outputs to SharePoint via Microsoft Graph API.",
    technologies: ["LangGraph", "Salesforce", "NetSuite", "Python", "React", "AWS", "Microsoft Graph API"],
    current: true,
  },
  {
    id: 2,
    role: "Software Development Engineer - GenAI",
    company: "Square Results",
    location: "Seattle, WA",
    period: "Aug 2023 – July 2025",
    description: "Architected RAG based job matching pipeline using Gemini 2.5 Flash that ingests user resume from AWS S3 and queries relevant job descriptions from AWS Bedrock knowledge base, generating personalised job recommendations. Built a secure, multi-tenant backend with FastAPI and responsive frontend with Next.js, ensuring strict data isolation.",
    technologies: ["FastAPI", "Next.js", "AWS S3", "AWS Bedrock", "Gemini 2.5", "Supabase", "Docker", "GitHub Actions"],
    current: false,
  },
  {
    id: 3,
    role: "Software Developer",
    company: "ClassA.AI",
    location: "Seattle, WA",
    period: "Jul 2022 - Jul 2023",
    description: "Re-architected a document generation workflow for an aviation insurance platform using Temporal to manage a complex 30-branch decision tree for private jet insurance policies. Replaced a fragmented, database-backed state machine with a durable workflow model.",
    technologies: ["Temporal", "TypeScript", "Node.js", "Document Generation"],
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
