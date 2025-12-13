import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function AboutPage() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Go",
    "Python",
    "AWS",
    "Docker",
    "Kubernetes",
    "SQL",
    "NoSQL",
    "Generative AI",
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
        About Me
      </h1>
      <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
        I'm a passionate software engineer with a focus on building robust and
        scalable applications. I enjoy working with modern web technologies and
        exploring the exciting field of Generative AI.
      </p>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Interests</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              When I'm not coding, I enjoy hiking, playing chess, and learning
              new languages. I'm also a big fan of open-source projects and
              contributing to the developer community.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/contact"
          className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          prefetch={false}
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}
