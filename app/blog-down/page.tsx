"use client";

import { motion } from "framer-motion";
import { Construction } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogDownPage() {
  return (
    <main className="min-h-screen pt-24 pb-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md mx-auto"
      >
        <div className="mb-8">
          <Construction className="w-16 h-16 mx-auto text-primary mb-4" />
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Blog Temporarily Down
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8">
          The blog page is temporarily taken down! We&apos;re working on something awesome and will be back soon.
        </p>
        
        <Button asChild size="lg">
          <Link href="/">Go Back Home</Link>
        </Button>
      </motion.div>
    </main>
  );
}
