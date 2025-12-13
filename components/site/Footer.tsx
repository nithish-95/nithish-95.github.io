import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex w-full shrink-0 flex-col items-center justify-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
      <p className="text-xs text-muted-foreground">
        © 2025 My Portfolio. All rights reserved.
      </p>
      <div className="flex gap-4 sm:ml-auto">
        <Link
          href="https://twitter.com"
          className="text-xs hover:underline"
          prefetch={false}
        >
          <Twitter className="h-5 w-5" />
        </Link>
        <Link
          href="https://github.com"
          className="text-xs hover:underline"
          prefetch={false}
        >
          <Github className="h-5 w-5" />
        </Link>
        <Link
          href="https://linkedin.com"
          className="text-xs hover:underline"
          prefetch={false}
        >
          <Linkedin className="h-5 w-5" />
        </Link>
      </div>
    </footer>
  );
}
