import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { getEducation } from "@/lib/content";
import Image from "next/image";

export default function EducationPage() {
  const education = getEducation();

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
        Education
      </h1>
      <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
        My academic background.
      </p>
      <div className="mt-8 grid gap-8">
        {education.map((edu) => (
          <Card key={edu.id}>
            <CardHeader className="flex flex-row items-center gap-4">
              {edu.logoUrl && (
                <Image
                  src={edu.logoUrl}
                  alt={edu.logoAlt}
                  width={64}
                  height={64}
                  className="rounded-lg"
                />
              )}
              <div>
                <CardTitle>{edu.institution}</CardTitle>
                <CardDescription>
                  {edu.degree} | {edu.year}
                </CardDescription>
              </div>
            </CardHeader>
            {edu.description && (
              <CardContent>
                <p>{edu.description}</p>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
