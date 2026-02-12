import { Metadata } from "next";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SupabaseMultiTenantPost from "@/content/blog/supabase-multi-tenant.mdx";

export const metadata: Metadata = {
  title: "Building Multi-Tenant Authentication with Supabase | Nithish Suresh Babu",
  description: "How I architected a centralized authentication system that unified multiple company websites, reducing login friction by 30% for thousands of users.",
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
                August 1, 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                5 min read
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Building Multi-Tenant Authentication with Supabase
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              How I architected a centralized authentication system that unified multiple company websites, reducing login friction by 30% for thousands of users.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Supabase</Badge>
              <Badge variant="secondary">Go</Badge>
              <Badge variant="secondary">Authentication</Badge>
              <Badge variant="secondary">Architecture</Badge>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <SupabaseMultiTenantPost />
          </div>
        </article>
      </div>
    </main>
  );
}
