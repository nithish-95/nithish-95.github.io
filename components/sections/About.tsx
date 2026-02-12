"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, Coffee, Briefcase, Award, Download, Zap, Server, Cloud, Target } from "lucide-react";


const stats = [
  { icon: Code2, label: "Years Experience", value: "3+" },
  { icon: Award, label: "Projects Deployed", value: "10+" },
  { icon: Briefcase, label: "Cloud Platforms", value: "AWS" },
  { icon: Coffee, label: "Go Projects", value: "5+" },
];

const skills = [
  "Go", "TypeScript", "Python", "JavaScript", "HTML/CSS",
  "React", "Next.js", "Vue.js", "Tailwind CSS", "Shadcn UI",
  "React Native", "Expo", "Flutter",
  "Go Chi", "FastAPI", "WebSockets", "REST APIs",
  "PostgreSQL", "Supabase", "Convex", "PocketBase",
  "AWS Lambda", "App Runner", "RDS", "S3", "Fargate", "IAM", "API Gateway", "Route53",
  "Docker", "Kubernetes", "k3s", "CI/CD", "Vercel", "Coolify", "Dokploy",
  "Google AI SDK(Go, Python, JS)", "AWS Bedrock", "Rekognition", "Polly",
  "TensorFlow", "LangChain", "MCPs", "AI Tools", "Prompt Engineering",
  "Postman"
];

const projectHighlights = [
  {
    title: "Chrono SaaS",
    description: "AI-powered time tracking with Google Gemini integration",
    tech: "Next.js, SQLite, AWS EC2",
    impact: "30% productivity increase"
  },
  {
    title: "Local-Vibes Platform",
    description: "Real-time event platform with Go backend",
    tech: "Go, Vue.js, WebSockets, Docker, Supabase",
    impact: "Sub-100ms API responses"
  },
  {
    title: "Tic-Tac-Toe AWS",
    description: "Multiplayer game on AWS Fargate",
    tech: "Go, AWS Fargate, Docker, Redis",
    impact: "100+ concurrent sessions"
  },
  {
    title: "Production Enterprise App",
    description: "Kubernetes-orchestrated microservices",
    tech: "TypeScript, Kubernetes, GraphQL",
    impact: "99.99% uptime SLA"
  }
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
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I&apos;m a Software Development Engineer - GenAI with expertise in full-stack
                development and AI integration. I hold a Master&apos;s in Computer
                and Information Science from the University of Michigan (GPA: 3.9) and a
                Bachelor&apos;s from Anna University.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I specialize in building scalable, multi-tenant platforms and designing
                robust data synchronization systems. My tech stack includes Go, Python,
                TypeScript, and modern frameworks like Next.js and Vue.js. I&apos;m also
                experienced in AI/ML.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m an active open-source contributor to Google&apos;s go-github library,
                where I&apos;ve implemented new API methods for GitHub Enterprise. I&apos;m passionate
                about creating elegant solutions to complex problems and driving innovative,
                scalable software solutions.
              </p>

              {/* Resume Download Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="mt-8"
              >
                <Button asChild size="lg" className="group">
                  <a href="/resume/Nithish%20Resume.pdf" download target="_blank" className="flex items-center">
                    <Download className="w-4 h-4 mr-2 transition-transform group-hover:translate-y-0.5" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors duration-300"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.02 * index }}
              >
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Project Highlights</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {projectHighlights.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    {index === 0 && <Zap className="w-5 h-5 text-primary" />}
                    {index === 1 && <Server className="w-5 h-5 text-primary" />}
                    {index === 2 && <Cloud className="w-5 h-5 text-primary" />}
                    {index === 3 && <Target className="w-5 h-5 text-primary" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-base mb-1">{project.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tech.split(", ").map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-xs text-primary font-medium">{project.impact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
