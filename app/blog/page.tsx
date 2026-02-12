"use client";

import { motion } from "framer-motion";
import { BlogCard } from "@/components/blog/BlogCard";

const posts = [
  {
    slug: "building-chrono-nextjs",
    title: "Building Chrono: A Time Tracking SaaS with Next.js 16",
    date: "2025-01-20",
    excerpt: "How I built a full-stack SaaS application featuring weekly timesheets, Kanban boards, role-based management, and AI-powered analytics using the latest Next.js features.",
    tags: ["Next.js 16", "React 19", "TypeScript", "SQLite", "AI"],
    readingTime: "10 min read",
  },
  {
    slug: "supabase-multi-tenant",
    title: "Building Multi-Tenant Authentication with Supabase",
    date: "2025-08-01",
    excerpt: "How I architected a centralized authentication system that unified multiple company websites, reducing login friction by 30% for thousands of users.",
    tags: ["Supabase", "Go", "Authentication", "Architecture"],
    readingTime: "5 min read",
  },
  {
    slug: "deepfake-detection-tensorflow",
    title: "Detecting DeepFakes with TensorFlow: A Research Journey",
    date: "2024-12-15",
    excerpt: "How I achieved 88.37% accuracy in deepfake detection by benchmarking eight models across diverse GenAI image generation datasets.",
    tags: ["TensorFlow", "Deep Learning", "GenAI", "Computer Vision"],
    readingTime: "8 min read",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-24 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-2 block">
            Technical Writing
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughts on software development, AI/ML, and building scalable systems.
          </p>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid gap-8">
          {posts.map((post, index) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              tags={post.tags}
              readingTime={post.readingTime}
              index={index}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
