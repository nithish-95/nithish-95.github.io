import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getExperience } from "@/lib/content";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function ExperiencePage() {
  const experience = getExperience();

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl flex items-center gap-4">
          <Briefcase className="h-10 w-10 sm:h-12 sm:w-12" />
          Work Experience
        </h1>
        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          A timeline of my professional journey and key contributions.
        </p>
      </div>

      <div className="relative border-l border-gray-200 dark:border-gray-800 ml-3 md:ml-6 space-y-12 pb-12">
        {experience.map((exp, index) => (
          <div key={exp.id} className="relative pl-8 md:pl-12">
            {/* Timeline dot */}
            <div className="absolute -left-[5px] top-2 h-3 w-3 rounded-full border border-white bg-gray-900 dark:border-gray-950 dark:bg-gray-50" />
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div className="space-y-1">
                    <CardTitle className="text-xl md:text-2xl font-bold text-primary">
                      {exp.role}
                    </CardTitle>
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                      {exp.company}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {exp.start_date} - {exp.end_date}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}