import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";

interface ArrowLinkProps {
  href: string;
  children: React.ReactNode;
}

export function ArrowLink({ href, children }: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-primary hover:underline inline-flex items-center"
    >
      {children}
      <ChevronRightIcon className="w-4 h-4 ml-1" />
    </Link>
  );
}