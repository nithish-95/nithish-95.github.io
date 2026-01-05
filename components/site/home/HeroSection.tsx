import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
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
  );
}
