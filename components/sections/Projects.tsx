"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink, ArrowUpRight, Sparkles, Layout, Server } from "lucide-react";
import Link from "next/link";
import { getFeaturedProjects } from "@/app/lib/projects";
import { Project } from "@/app/types/projects";

const filterCategories = [
  { id: "all", label: "All Projects", icon: Layout },
  { id: "ai", label: "AI & ML", icon: Sparkles },
  { id: "web", label: "Full-Stack", icon: Layout },
  { id: "backend", label: "Backend", icon: Server },
];

function getImpactBadge(project: Project) {
  if (project.outcomes && project.outcomes.length > 0) {
    return project.outcomes[0];
  }
  if (project.projectType === "production") return "Production Ready";
  if (project.projectType === "open-source") return "Open Source";
  return "Personal Project";
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const impact = getImpactBadge(project);
  const isAiProject = project.technologies.some(t => 
    ["LangGraph", "LangChain", "OpenAI", "Gemini", "Bedrock", "TensorFlow", "PyTorch"].some(ai => 
      t.toLowerCase().includes(ai.toLowerCase())
    )
  );

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Card className="group h-full overflow-hidden border-border hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 bg-card">
        <CardContent className="p-0">
          {/* Project Header */}
          <div className="p-6 pb-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {project.category}
                </span>
                {isAiProject && (
                  <Badge variant="secondary" className="text-[10px] bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20">
                    AI
                  </Badge>
                )}
              </div>
              {project.cloudDeployment && (
                <Badge variant="outline" className="text-[10px]">
                  {project.cloudDeployment}
                </Badge>
              )}
            </div>

            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Impact */}
          <div className="px-6 py-3 bg-primary/5 border-y border-border/50">
            <p className="text-xs font-medium text-primary">
              {impact}
            </p>
          </div>

          {/* Technologies & Links */}
          <div className="p-6 pt-4">
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.technologies.slice(0, 6).map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-[10px] font-medium px-2 py-0.5"
                >
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 6 && (
                <Badge variant="outline" className="text-[10px]">
                  +{project.technologies.length - 6}
                </Badge>
              )}
            </div>

            <div className="flex gap-3">
              {project.githubUrl && (
                <Button variant="outline" size="sm" className="flex-1 group/btn" asChild>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-3.5 h-3.5 mr-2" />
                    Code
                  </Link>
                </Button>
              )}
              {project.demoUrl && (
                <Button size="sm" className="flex-1 group/btn" asChild>
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-3.5 h-3.5 mr-2" />
                    Demo
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const featuredProjects = getFeaturedProjects();

  const filteredProjects = activeFilter === "all"
    ? featuredProjects
    : activeFilter === "ai"
    ? featuredProjects.filter(p => 
        p.technologies.some(t => 
          ["LangGraph", "LangChain", "OpenAI", "Gemini", "Bedrock", "TensorFlow", "PyTorch", "AI"].some(ai => 
            t.toLowerCase().includes(ai.toLowerCase())
          )
        )
      )
    : featuredProjects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
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
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Production-grade applications showcasing backend architecture, AI integration, and full-stack delivery.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1 bg-card border border-border rounded-xl">
            {filterCategories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeFilter === category.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-muted-foreground">No projects found in this category.</p>
          </motion.div>
        )}

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Button asChild size="lg" variant="outline">
            <Link href="/projects" className="group">
              View All Projects
              <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}