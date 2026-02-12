"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cloud,
  Smartphone,
  Layout,
  Server,
  Terminal,
  Box,
  Layers,
  Wrench,
  Sparkles,
  Rocket,
  Zap,
  Hexagon,
  LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";


// Import simple-icons
import {
  siGo,
  siTypescript,
  siPython,
  siJavascript,
  siHtml5,
  siReact,
  siNextdotjs,
  siVuedotjs,
  siTailwindcss,
  siShadcnui,
  siPostgresql,
  siDocker,
  siKubernetes,
  siTensorflow,
  siLangchain,
  siSupabase,
  siVercel,
  siFastapi,
  siFlutter,
  siExpo,
  siGooglegemini,
} from "simple-icons";

interface SimpleIcon {
  title: string;
  slug: string;
  hex: string;
  path: string;
  source: string;
  guidelines?: string | undefined;
  license?: { type: string; url?: string } | undefined;
}

interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: SimpleIcon;
  fallbackIcon: LucideIcon;
  projects: string[];
}

// Icon mapping for skills
const iconMap: Record<string, SimpleIcon | undefined> = {
  "Go": siGo,
  "TypeScript": siTypescript,
  "Python": siPython,
  "JavaScript": siJavascript,
  "HTML/CSS": siHtml5,
  "React": siReact,
  "Next.js": siNextdotjs,
  "Vue.js": siVuedotjs,
  "Tailwind CSS": siTailwindcss,
  "Shadcn UI": siShadcnui,
  "PostgreSQL": siPostgresql,
  "Supabase": siSupabase,
  "Docker": siDocker,
  "Kubernetes": siKubernetes,
  "Vercel": siVercel,
  "FastAPI": siFastapi,
  "Flutter": siFlutter,
  "Expo": siExpo,
  "Google Gemini": siGooglegemini,
  "TensorFlow": siTensorflow,
  "LangChain": siLangchain,
};

const categories = [
  { id: "all", label: "All", icon: Layout },
  { id: "Languages", label: "Languages", icon: Terminal },
  { id: "Frontend", label: "Frontend", icon: Layout },
  { id: "Backend", label: "Backend", icon: Server },
  { id: "Cloud", label: "Cloud & DevOps", icon: Cloud },
  { id: "AI/ML", label: "AI/ML", icon: Sparkles },
];

const skills: Skill[] = [
  // Languages
  { name: "Go", level: 92, category: "Languages", fallbackIcon: Terminal, projects: ["Local-Vibes", "Tic-Tac-Toe", "Manga", "Go-Lang"] },
  { name: "TypeScript", level: 95, category: "Languages", fallbackIcon: Terminal, projects: ["Chrono", "Next.js Projects", "Production App"] },
  { name: "Python", level: 90, category: "Languages", fallbackIcon: Terminal, projects: ["AI/ML Projects", "Twitter Analysis", "ViT Face Detection"] },
  { name: "JavaScript", level: 94, category: "Languages", fallbackIcon: Terminal, projects: ["Frontend Projects", "React Apps"] },
  { name: "HTML/CSS", level: 96, category: "Languages", fallbackIcon: Layout, projects: ["All Web Projects"] },

  // Frontend
  { name: "React", level: 93, category: "Frontend", fallbackIcon: Layout, projects: ["AI Recipe Generator", "Multiple Projects"] },
  { name: "Next.js", level: 95, category: "Frontend", fallbackIcon: Layout, projects: ["Chrono", "Next Auth Template", "Portfolio"] },
  { name: "Vue.js", level: 85, category: "Frontend", fallbackIcon: Layout, projects: ["Local-Vibes Platform"] },
  { name: "Tailwind CSS", level: 95, category: "Frontend", fallbackIcon: Layers, projects: ["All Recent Projects"] },
  { name: "Shadcn UI", level: 90, category: "Frontend", fallbackIcon: Box, projects: ["Chrono", "Portfolio"] },
  { name: "React Native", level: 82, category: "Frontend", fallbackIcon: Smartphone, projects: ["Mobile Apps"] },
  { name: "Expo", level: 80, category: "Frontend", fallbackIcon: Smartphone, projects: ["Mobile Development"] },
  { name: "Flutter", level: 78, category: "Frontend", fallbackIcon: Layers, projects: ["Cross-platform Apps"] },
  { name: "AWS Amplify", level: 85, category: "Frontend", fallbackIcon: Cloud, projects: ["Full-stack Projects"] },

  // Backend
  { name: "Go Chi", level: 90, category: "Backend", fallbackIcon: Server, projects: ["Local-Vibes", "Tic-Tac-Toe", "Manga"] },
  { name: "FastAPI", level: 88, category: "Backend", fallbackIcon: Zap, projects: ["AI/ML APIs", "Python Projects"] },
  { name: "WebSockets", level: 88, category: "Backend", fallbackIcon: Cloud, projects: ["Tic-Tac-Toe", "Local-Vibes"] },
  { name: "REST APIs", level: 92, category: "Backend", fallbackIcon: Server, projects: ["Go-Lang Projects", "Multiple APIs"] },
  { name: "PostgreSQL", level: 90, category: "Backend", fallbackIcon: Server, projects: ["Local-Vibes", "Production App"] },
  { name: "Supabase", level: 88, category: "Backend", fallbackIcon: Server, projects: ["Full-stack Apps"] },
  { name: "Convex", level: 85, category: "Backend", fallbackIcon: Zap, projects: ["Real-time Apps"] },
  { name: "PocketBase", level: 82, category: "Backend", fallbackIcon: Box, projects: ["Backend Services"] },

  // Cloud & DevOps
  { name: "AWS Lambda", level: 88, category: "Cloud", fallbackIcon: Cloud, projects: ["Serverless Functions"] },
  { name: "AWS App Runner", level: 85, category: "Cloud", fallbackIcon: Rocket, projects: ["Containerized Apps"] },
  { name: "AWS RDS", level: 87, category: "Cloud", fallbackIcon: Server, projects: ["Database Management"] },
  { name: "AWS S3", level: 90, category: "Cloud", fallbackIcon: Box, projects: ["File Storage", "Static Hosting"] },
  { name: "AWS Fargate", level: 85, category: "Cloud", fallbackIcon: Hexagon, projects: ["Tic-Tac-Toe Game"] },
  { name: "Docker", level: 88, category: "Cloud", fallbackIcon: Box, projects: ["Local-Vibes", "Manga", "Tic-Tac-Toe"] },
  { name: "Kubernetes", level: 82, category: "Cloud", fallbackIcon: Rocket, projects: ["Production App", "Go-Lang"] },
  { name: "k3s", level: 80, category: "Cloud", fallbackIcon: Hexagon, projects: ["Lightweight K8s"] },
  { name: "CI/CD", level: 85, category: "Cloud", fallbackIcon: Wrench, projects: ["Deployment Pipelines"] },
  { name: "Vercel", level: 92, category: "Cloud", fallbackIcon: Rocket, projects: ["Next.js Deployments"] },

  // AI/ML
  { name: "Google Gemini", level: 88, category: "AI/ML", fallbackIcon: Sparkles, projects: ["Chrono AI Analytics"] },
  { name: "AWS Bedrock", level: 85, category: "AI/ML", fallbackIcon: Cloud, projects: ["AI Model Integration"] },
  { name: "TensorFlow", level: 85, category: "AI/ML", fallbackIcon: Sparkles, projects: ["Deep Learning", "Face Detection"] },
  { name: "LangChain", level: 86, category: "AI/ML", fallbackIcon: Layers, projects: ["AI Applications"] },
  { name: "MCPs", level: 84, category: "AI/ML", fallbackIcon: Box, projects: ["AI Development"] },
  { name: "Prompt Engineering", level: 90, category: "AI/ML", fallbackIcon: Sparkles, projects: ["AI Integration"] },
];

interface SkillIconProps {
  skillName: string;
  className?: string;
}

function SkillIcon({ skillName, className }: SkillIconProps) {
  const icon = iconMap[skillName];
  const FallbackIcon = skills.find(s => s.name === skillName)?.fallbackIcon || Box;

  if (!icon) {
    return <FallbackIcon className={className} />;
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      role="img"
      aria-label={icon.title}
    >
      <path d={icon.path} />
    </svg>
  );
}

interface SkillCardProps {
  skill: Skill;
  index: number;
}

function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Card className="group relative overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/20%)] hover:scale-[1.02]">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-primary/10 shrink-0">
              <SkillIcon skillName={skill.name} className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-sm mb-2 truncate">{skill.name}</h4>
              <div className="flex flex-wrap gap-1 overflow-hidden h-5">
                {skill.projects.slice(0, 1).map((project) => (
                  <Badge key={project} variant="outline" className="text-[9px] px-1.5 py-0 whitespace-nowrap">
                    {project}
                  </Badge>
                ))}
                {skill.projects.length > 1 && (
                  <Badge variant="outline" className="text-[9px] px-1.5 py-0 whitespace-nowrap">
                    +{skill.projects.length - 1}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = activeCategory === "all"
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
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

        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-10"
        >
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-auto">
            <TabsList variant="line" className="flex-wrap justify-center h-auto gap-1">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:text-primary"
                  >
                    <Icon className="w-3.5 h-3.5 mr-1.5" />
                    {category.label}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Skills Grid with AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

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
            {["Coolify", "Dokploy", "Route53", "IAM", "AWS Rekognition", "AWS Polly", "Postman"].map((skill) => (
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
