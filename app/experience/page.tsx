import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { getExperience } from "@/lib/content";

export default function ExperiencePage() {
  const experience = getExperience();

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
        Work Experience
      </h1>
      <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
        A timeline of my professional experience.
      </p>
      <div className="mt-8 grid gap-8">
        {experience.map((exp) => (
          <Card key={exp.id}>
            <CardHeader>
              <CardTitle>{exp.role}</CardTitle>
              <CardDescription>
                {exp.company} | {exp.start_date} - {exp.end_date} |{" "}
                {exp.location}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
