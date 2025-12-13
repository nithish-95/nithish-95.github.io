import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { getProjects } from "@/lib/content";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
        Projects
      </h1>
      <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
        Here are some of the projects I've worked on.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} id={project.id.toString()}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.summary}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href={project.repo_url}
                className="text-sm font-medium text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
