"use client";

import { motion } from "framer-motion";
import { 
  Layout, 
  Server, 
  Brain, 
  Cloud,
  Database,
  Code2,
  Wrench
} from "lucide-react";

const skillCategories = [
  {
    id: "languages",
    label: "Languages",
    icon: Code2,
    skills: [
      "Go", "Python", "TypeScript", "JavaScript", "C++", "HTML", "CSS", "SQL"
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: Layout,
    skills: [
      "Next.js", "React", "Tailwind CSS", "Shadcn/ui", "React Native", "TanStack", "Flutter", "Vue.js"
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    skills: [
      "Go", "FastAPI", "Node.js", "Supabase", "Firebase", "Convex", "PocketBase", "REST APIs"
    ],
  },
  {
    id: "database",
    label: "Database",
    icon: Database,
    skills: [
      "PostgreSQL", "SQLite", "AWS RDS", "DynamoDB", "Redis"
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS", "GCP", "EC2", "CloudFront", "Amplify", "Fargate", "App Runner", "S3", "SageMaker", "CI/CD", "Docker", "GitHub Actions", "Route53", "Kubernetes", "Terraform"
    ],
  },
  {
    id: "ai",
    label: "AI / ML",
    icon: Brain,
    skills: [
      "LangChain", "Bedrock", "Ollama", "RAG", "AI Agents", "Gemini", "OpenAI", "TensorFlow", "PyTorch"
    ],
  },
];

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
            Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I use to build production-ready systems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <div className="h-full bg-card border border-border rounded-2xl p-6 hover:border-primary/20 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{category.label}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.2, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.02 
                        }}
                        className="px-3 py-1.5 text-sm font-medium bg-secondary text-secondary-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">Also experienced with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Temporal", "WebSockets", "Turborepo", "Expo", "AWS Rekognition",
              "MLflow", "N8N", "Cursor", "Claude Code", "Git"
            ].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 text-xs text-muted-foreground bg-muted rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}