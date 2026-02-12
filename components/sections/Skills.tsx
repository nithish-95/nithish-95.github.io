"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone, 
  Globe, 
  Cpu,
  Layout,
  Server,
  Terminal,
  Box,
  Layers,
  Wrench,
  Sparkles,
  Rocket,
  Zap,
  Hexagon
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
      { name: "HTML/CSS", level: 96, projects: ["All Web Projects"] },
    ],
  },
  {
    title: "Frontend & Mobile",
    icon: Layout,
    skills: [
      { name: "React", level: 93, projects: ["AI Recipe Generator", "Multiple Projects"] },
      { name: "Next.js", level: 95, projects: ["Chrono", "Next Auth Template", "Portfolio"] },
      { name: "Vue.js", level: 85, projects: ["Local-Vibes Platform"] },
      { name: "Tailwind CSS", level: 95, projects: ["All Recent Projects"] },
      { name: "Shadcn UI", level: 90, projects: ["Chrono", "Portfolio"] },
      { name: "React Native", level: 82, projects: ["Mobile Apps"] },
      { name: "Expo", level: 80, projects: ["Mobile Development"] },
      { name: "Flutter", level: 78, projects: ["Cross-platform Apps"] },
      { name: "AWS Amplify", level: 85, projects: ["Full-stack Projects"] },
    ],
  },
  {
    title: "Backend & Headless CMS",
    icon: Server,
    skills: [
      { name: "Go Chi", level: 90, projects: ["Local-Vibes", "Tic-Tac-Toe", "Manga"] },
      { name: "FastAPI", level: 88, projects: ["AI/ML APIs", "Python Projects"] },
      { name: "WebSockets", level: 88, projects: ["Tic-Tac-Toe", "Local-Vibes"] },
      { name: "REST APIs", level: 92, projects: ["Go-Lang Projects", "Multiple APIs"] },
      { name: "PostgreSQL", level: 90, projects: ["Local-Vibes", "Production App"] },
      { name: "Supabase", level: 88, projects: ["Full-stack Apps"] },
      { name: "Convex", level: 85, projects: ["Real-time Apps"] },
      { name: "PocketBase", level: 82, projects: ["Backend Services"] },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS Lambda", level: 88, projects: ["Serverless Functions"] },
      { name: "AWS App Runner", level: 85, projects: ["Containerized Apps"] },
      { name: "AWS RDS", level: 87, projects: ["Database Management"] },
      { name: "AWS S3", level: 90, projects: ["File Storage", "Static Hosting"] },
      { name: "AWS Fargate", level: 85, projects: ["Tic-Tac-Toe Game"] },
      { name: "AWS IAM", level: 86, projects: ["Security Management"] },
      { name: "API Gateway", level: 84, projects: ["API Management"] },
      { name: "Route53", level: 83, projects: ["DNS Management"] },
      { name: "Docker", level: 88, projects: ["Local-Vibes", "Manga", "Tic-Tac-Toe"] },
      { name: "Kubernetes", level: 82, projects: ["Production App", "Go-Lang"] },
      { name: "k3s", level: 80, projects: ["Lightweight K8s"] },
      { name: "CI/CD", level: 85, projects: ["Deployment Pipelines"] },
      { name: "Vercel", level: 92, projects: ["Next.js Deployments"] },
      { name: "Coolify", level: 80, projects: ["Self-hosted PaaS"] },
      { name: "Dokploy", level: 78, projects: ["Self-hosted Deployments"] },
    ],
  },
  {
    title: "AI/ML & Tools",
    icon: Sparkles,
    skills: [
      { name: "Google Gemini", level: 88, projects: ["Chrono AI Analytics"] },
      { name: "AWS Bedrock", level: 85, projects: ["AI Model Integration"] },
      { name: "AWS Rekognition", level: 84, projects: ["Image Analysis"] },
      { name: "AWS Polly", level: 83, projects: ["Text-to-Speech"] },
      { name: "TensorFlow", level: 85, projects: ["Deep Learning", "Face Detection"] },
      { name: "LangChain", level: 86, projects: ["AI Applications"] },
      { name: "MCPs", level: 84, projects: ["AI Development"] },
      { name: "AI Tools", level: 87, projects: ["Multiple AI Projects"] },
      { name: "Prompt Engineering", level: 90, projects: ["AI Integration"] },
      { name: "Postman", level: 92, projects: ["API Testing"] },
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
  { name: "React Native", icon: Smartphone, color: "text-cyan-400" },
  { name: "PostgreSQL", icon: Database, color: "text-blue-400" },
  { name: "Supabase", icon: Database, color: "text-green-400" },
  { name: "Convex", icon: Zap, color: "text-orange-500" },
  { name: "PocketBase", icon: Box, color: "text-purple-500" },
  { name: "AWS", icon: Cloud, color: "text-orange-500" },
  { name: "Docker", icon: Layers, color: "text-blue-500" },
  { name: "Kubernetes", icon: Rocket, color: "text-blue-600" },
  { name: "k3s", icon: Hexagon, color: "text-yellow-500" },
  { name: "Vercel", icon: Globe, color: "text-foreground" },
  { name: "FastAPI", icon: Zap, color: "text-green-500" },
  { name: "Postman", icon: Wrench, color: "text-orange-500" },
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
            Comprehensive tech stack spanning frontend, backend, cloud, and AI. Each skill shows real-world projects where it&apos;s applied.
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    transition={{ duration: 0.3, delay: 0.05 * skillIndex + 0.1 * categoryIndex }}
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
                        transition={{ duration: 1, delay: 0.1 * skillIndex + 0.1 * categoryIndex, ease: "easeOut" }}
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

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">Also experienced with:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Coolify", "Dokploy", "MCPs", "AI Tools", "Route53", "IAM", "Expo", "PocketBase", "k3s"].map((skill) => (
              <Badge key={skill} variant="secondary" className="px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
