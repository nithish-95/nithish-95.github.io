import { Metadata } from "next";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import DeepfakeDetectionPost from "@/content/blog/deepfake-detection-tensorflow.mdx";

export const metadata: Metadata = {
  title: "Detecting DeepFakes with TensorFlow: A Research Journey | Nithish Suresh Babu",
  description: "How I achieved 88.37% accuracy in deepfake detection by benchmarking eight models across diverse GenAI image generation datasets.",
};

export default function BlogPostPage() {
  return (
    <main className="min-h-screen pt-24 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="pl-0">
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Header */}
        <article>
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                December 15, 2024
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                8 min read
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Detecting DeepFakes with TensorFlow: A Research Journey
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              How I achieved 88.37% accuracy in deepfake detection by benchmarking eight models across diverse GenAI image generation datasets.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">TensorFlow</Badge>
              <Badge variant="secondary">Deep Learning</Badge>
              <Badge variant="secondary">GenAI</Badge>
              <Badge variant="secondary">Computer Vision</Badge>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <DeepfakeDetectionPost />
          </div>
        </article>
      </div>
    </main>
  );
}
