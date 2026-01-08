import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-[-20%] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[120px]" />
        <div className="absolute bottom-0 left-[-20%] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]" />
      </div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
          <div className="space-y-2">
            <Alert className="w-fit mx-auto md:mx-0">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Available for hire</AlertTitle>
              <AlertDescription>
                I'm currently looking for new opportunities.
              </AlertDescription>
            </Alert>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I&apos;m <span className="text-primary">Nithish Suresh Babu</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Software Engineer crafting robust web solutions.
              Specializing in high-performance, scalable systems using <span className="text-foreground font-medium">Golang</span>.
            </p>
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
              <Link href="/Nithish Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="h-11 px-8">
                  View Resume
                </Button>
              </Link>
              <Link href="/Nithish Resume.pdf" download>
                <Button size="lg" className="h-11 px-8">
                  Download Resume
                </Button>
              </Link>
            </div>
          </div>
          <Avatar className="w-[400px] h-[500px]">
            <AvatarImage src="/nithish.jpeg" alt="Nithish Suresh Babu" />
            <AvatarFallback>NS</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
}
