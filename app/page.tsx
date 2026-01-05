import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAllPosts, getProjects } from "@/lib/content";

export default function Home() {
  const projects = getProjects().slice(0, 3);
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-[-20%] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[120px]" />
          <div className="absolute bottom-0 left-[-20%] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]" />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="secondary" className="mb-4">
                Available for hire
              </Badge>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Hi, I&apos;m <span className="text-primary">Nithish Suresh Babu</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Software Engineer building high-quality web applications.
                Specializing in React, Next.js, and Modern UI/UX.
              </p>
            </div>
            <div className="space-x-4 pt-4">
              <Link href="/projects">
                <Button size="lg" className="h-11 px-8">
                  View Projects
                </Button>
              </Link>
              <Link href="/experience">
                <Button variant="outline" size="lg" className="h-11 px-8">
                  View Experience
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Recent Projects
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                A selection of my recent work and experiments.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.id} className="h-full flex flex-col transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Link
                    href={`/projects#${project.id}`}
                    className="text-sm font-medium text-primary hover:underline inline-flex items-center"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link href="/projects">
              <Button variant="outline">View All Projects</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Latest Posts
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                Thoughts, tutorials, and insights on development.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.id} className="h-full flex flex-col transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {post.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Link
                    href={`/posts/${post.slug}`}
                    className="text-sm font-medium text-primary hover:underline inline-flex items-center"
                  >
                    Read Post
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link href="/posts">
              <Button variant="outline">View All Posts</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
