import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { getProjects } from "@/lib/content";
import { ArrowLink } from "@/components/ui/arrow-link"; // Import the new component

export function RecentProjectsSection() {
  const projects = getProjects().slice(0, 3);

  return (
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
            <Card key={project.id} className="h-full flex flex-col transition-all hover:shadow-lg hover:-translate-y-1 animate-fade-in">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {project.summary}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <ArrowLink href={`/projects#${project.id}`}>
                  View Project
                </ArrowLink>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <ArrowLink href="/projects">
            <Button variant="outline">View All Projects</Button>
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
