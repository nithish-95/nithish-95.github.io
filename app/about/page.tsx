import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { GraduationCap, Trophy, Code2, Database, Cloud, Cpu, Terminal, Globe, Github } from "lucide-react";

export default function AboutPage() {
  const skillCategories = [
    {
      name: "Languages",
      icon: <Terminal className="h-4 w-4 mr-2" />,
      skills: ["Go", "Python", "JavaScript", "TypeScript", "C++"],
    },
    {
      name: "Full Stack & Web",
      icon: <Globe className="h-4 w-4 mr-2" />,
      skills: ["Next.js", "React", "Vue.js", "Tailwind CSS", "Go Chi", "FastAPI", "Supabase", "RESTful APIs", "Flutter", "React Native"],
    },
    {
      name: "DevOps & Cloud",
      icon: <Cloud className="h-4 w-4 mr-2" />,
      skills: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Git", "CI/CD Pipelines", "Agile Methodology"],
    },
    {
      name: "AI & Machine Learning",
      icon: <Cpu className="h-4 w-4 mr-2" />,
      skills: ["PyTorch", "TensorFlow", "LangChain", "AWS Rekognition", "Generative AI"],
    },
    {
      name: "Databases",
      icon: <Database className="h-4 w-4 mr-2" />,
      skills: ["PostgreSQL", "DynamoDB", "SQLite", "S3", "Redis", "SQL", "NoSQL"],
    },
    {
      name: "Systems & Architecture",
      icon: <Code2 className="h-4 w-4 mr-2" />,
      skills: ["System Design", "Distributed Systems", "Large-scale Design", "Multi-threading", "Networking Protocols", "Performance Optimization"],
    },
  ];

  const education = [
    {
      school: "University of Michigan",
      degree: "Master of Science, Computer and Information Science",
      location: "Michigan, USA",
      year: "Aug 2023 - Apr 2025",
      gpa: "GPA: 3.8",
      logo: "/logos/edu/umich.png",
    },
    {
      school: "Anna University",
      degree: "Bachelor of Technology, Computer Science and Engineering",
      location: "Chennai, India",
      year: "Jul 2018 - May 2022",
      gpa: "GPA: 3.4",
      logo: "/logos/edu/anna_univ.png",
    },
  ];

  const awards = [
    {
      title: "People's Choice of the Year",
      org: "Google Developer's Club (GDC)",
      year: "2025",
      description: "Recognized for developing an AI Insurance Quoting Call Agent with natural speech and advanced conversation handling.",
    },
    {
      title: "Top 80 Nationwide",
      org: "Vishwakarma Award, India",
      year: "2020",
      description: "Recognized for innovative technical project in a nationwide competition.",
    },
  ];

  const openSourceContributions = [
    {
      project: "GOOGLE | go-github",
      role: "CONTRIBUTOR",
      points: [
        "Engineered and implemented new API methods to manage GitHub Enterprise App repository installations, successfully enhancing the functionality of the widely-used library.",
        "Authored production-quality Go code and comprehensive unit tests to guarantee the reliability and stability of new library features.",
        "Collaborated with maintainers through the Pull Request (PR) review process, refactoring code to align with established project conventions and Go best practices.",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 space-y-16">
      {/* Intro Section */}
      <section className="space-y-4 text-center md:text-left">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">About Me</h1>
        <p className="mx-auto md:mx-0 max-w-[800px] text-gray-500 md:text-xl/relaxed dark:text-gray-400 leading-relaxed">
          I am a Software Engineer specializing in full-stack development and scalable system design, with a strong focus on AI integration and real-time systems. 
          I have a proven track record of delivering impactful projects, from multi-tenant architectures to AI-powered applications that boost user engagement. 
          Proficient in Go, Python, and AWS, I am eager to leverage these skills to drive technological innovation and contribute to dynamic teams.
        </p>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <Code2 className="mr-3 h-8 w-8" /> Technical Skills
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <Card key={category.name} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  {category.icon}
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <GraduationCap className="mr-3 h-8 w-8" /> Education
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu) => (
            <Card key={edu.school} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    {edu.logo && (
                      <Image 
                        src={edu.logo} 
                        alt={`${edu.school} logo`} 
                        width={40} 
                        height={40} 
                        className="rounded-full object-contain"
                      />
                    )}
                    <div>
                      <CardTitle className="text-xl">{edu.school}</CardTitle>
                      <CardDescription className="text-md mt-1 font-medium">{edu.location}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-sm">{edu.year}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-lg">{edu.degree}</p>
                <p className="text-sm text-muted-foreground mt-2">{edu.gpa}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Open Source Contributions Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <Github className="mr-3 h-8 w-8" /> Open Source Contributions
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {openSourceContributions.map((contribution, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{contribution.project}</CardTitle>
                <CardDescription className="font-medium">{contribution.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                  {contribution.points.map((point, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Awards Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <Trophy className="mr-3 h-8 w-8" /> Awards & Recognition
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {awards.map((award) => (
            <Card key={award.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <CardTitle className="text-lg">{award.title}</CardTitle>
                  <Badge variant="secondary">{award.year}</Badge>
                </div>
                <CardDescription className="font-medium">{award.org}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">{award.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}