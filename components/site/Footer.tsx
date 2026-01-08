import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2026 Nithish Suresh. All rights reserved. Built with Next.js
        </p>
        <div className="flex gap-4">
          <Link
            href="https://x.com/nithish_95"
            className="text-muted-foreground transition-colors hover:text-foreground"
            prefetch={false}
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="https://github.com/nithish-95"
            className="text-muted-foreground transition-colors hover:text-foreground"
            prefetch={false}
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/nithish-suresh-babu/"
            className="text-muted-foreground transition-colors hover:text-foreground"
            prefetch={false}
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
