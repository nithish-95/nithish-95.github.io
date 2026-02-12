"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone, 
  Globe, 
  Cpu,
  GitBranch,
  Shield,
  Zap,
  Layout,
  Server,
  Terminal,
  Sparkles
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages",
    icon: Terminal,
    skills: [
      { name: "Go", level: 92, projects: ["Local-Vibes", "Tic-Tac-Toe", "Manga", "Go-Lang"] },
      { name: "TypeScript", level: 95, projects: ["Chrono", "Next.js Projects", "Production App"] },
      { name: "Python", level: 90, projects: ["AI/ML Projects", "Twitter Analysis", "ViT Face Detection"] },
      { name: "JavaScript", level: 94, projects: ["Frontend Projects", "React Apps"] },
    ],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      { name: "Next.js", level: 95, projects: ["Chrono", "Next Auth Template", "Portfolio"] },
      { name: "React", level: 93, projects: ["AI Recipe Generator", "Multiple Projects"] },
      { name: "Vue.js", level: 85, projects: ["Local-Vibes Platform"] },
      { name: "Tailwind CSS", level: 95, projects: ["All Recent Projects"] },
    ],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: [
      { name: "Go Chi", level: 90, projects: ["Local-Vibes", "Tic-Tac-Toe", "Manga"] },
      { name: "WebSockets", level: 88, projects: ["Tic-Tac-Toe", "Local-Vibes"] },
      { name: "PostgreSQL", level: 90, projects: ["Local-Vibes", "Production App"] },
      { name: "REST APIs", level: 92, projects: ["Go-Lang Projects", "Multiple APIs"] },
    ],
  },
  {
    title: "AI/ML & Cloud",
    icon: Cpu,
    skills: [
      { name: "Google Gemini", level: 88, projects: ["Chrono AI Analytics"] },
      { name: "AWS Fargate", level: 85, projects: ["Tic-Tac-Toe Game"] },
      { name: "Docker", level: 85, projects: ["Local-Vibes", "Manga", "Tic-Tac-Toe"] },
      { name: "Kubernetes", level: 80, projects: ["Production App", "Go-Lang"] },
    ],
  },
];

const technologies = [
  { name: "Go", icon: Code2, color: "text-cyan-500" },
  { name: "TypeScript", icon: Terminal, color: "text-blue-600" },
  { name: "Python", icon: Cpu, color: "text-yellow-500" },
  { name: "Next.js", icon: Globe, color: "text-foreground" },
  { name: "React", icon: Code2, color: "text-blue-500" },
  { name: "Vue.js", icon: Layout, color: "text-green-500" },
  { name: "Flutter", icon: Smartphone, color: "text-blue-400" },
  { name: "PostgreSQL", icon: Database, color: "text-blue-400" },
  { name: "Supabase", icon: Database, color: "text-green-400" },
  { name: "AWS", icon: Cloud, color: "text-orange-500" },
  { name: "Docker", icon: Container, color: "text-blue-500" },
  { name: "TensorFlow", icon: Cpu, color: "text-orange-400" },
];

function Container({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
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
            My Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use across my projects. Each skill shows the projects where it&apos;s applied.
          </p>
        </motion.div>

        {/* Tech Icons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 mb-16"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
              className="flex flex-col items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
            >
              <tech.icon className={`w-8 h-8 ${tech.color} transition-transform duration-300 group-hover:scale-110`} />
              <span className="text-sm font-medium text-center">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories with Progress Bars */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * skillIndex + 0.1 * categoryIndex }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 * skillIndex + 0.1 * categoryIndex, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                      />
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {skill.projects && skill.projects.map((project: string) => (
                        <Badge key={project} variant="outline" className="text-[10px] px-1.5 py-0">
                          {project}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
