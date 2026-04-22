"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Command,
  Search,
  Home,
  User,
  Briefcase,
  Code2,
  Mail,
  FileText,
  Github,
  Linkedin,
  ExternalLink,
  Trophy,
  GraduationCap,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";

interface CommandItem {
  id: string;
  label: string;
  icon: React.ElementType;
  shortcut?: string;
  action: () => void;
  category: string;
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const scrollToSection = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const commands: CommandItem[] = [
    {
      id: "home",
      label: "Go to Home",
      icon: Home,
      action: () => {
        setOpen(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      category: "Navigation",
    },
    {
      id: "about",
      label: "Go to About",
      icon: User,
      action: () => scrollToSection("#about"),
      category: "Navigation",
    },
    {
      id: "projects",
      label: "Go to Projects",
      icon: Code2,
      action: () => scrollToSection("#projects"),
      category: "Navigation",
    },
    {
      id: "experience",
      label: "Go to Experience",
      icon: Briefcase,
      action: () => scrollToSection("#experience"),
      category: "Navigation",
    },
    {
      id: "skills",
      label: "Go to Skills",
      icon: Code2,
      action: () => scrollToSection("#skills"),
      category: "Navigation",
    },
    {
      id: "contact",
      label: "Go to Contact",
      icon: Mail,
      action: () => scrollToSection("#contact"),
      category: "Navigation",
    },
    {
      id: "github",
      label: "Open GitHub",
      icon: Github,
      action: () => {
        setOpen(false);
        window.open("https://github.com/nithish-95", "_blank");
      },
      category: "Links",
    },
    {
      id: "linkedin",
      label: "Open LinkedIn",
      icon: Linkedin,
      action: () => {
        setOpen(false);
        window.open("https://www.linkedin.com/in/nithish-suresh-babu/", "_blank");
      },
      category: "Links",
    },
    {
      id: "resume",
      label: "Download Resume",
      icon: FileText,
      action: () => {
        setOpen(false);
        window.open("/resume/Nithish_Resume.pdf", "_blank");
      },
      category: "Links",
    },
    {
      id: "chrono",
      label: "View Chrono Project",
      icon: Trophy,
      action: () => {
        setOpen(false);
        window.open("https://chrono-next-6u7e.vercel.app/", "_blank");
      },
      category: "Projects",
    },
  ];

  const filteredCommands = search
    ? commands.filter(
        (cmd) =>
          cmd.label.toLowerCase().includes(search.toLowerCase()) ||
          cmd.category.toLowerCase().includes(search.toLowerCase())
      )
    : commands;

  const groupedCommands = filteredCommands.reduce((acc, cmd) => {
    if (!acc[cmd.category]) acc[cmd.category] = [];
    acc[cmd.category].push(cmd);
    return acc;
  }, {} as Record<string, CommandItem[]>);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      setOpen((prev) => !prev);
    }
    if (e.key === "Escape") {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl p-0 gap-0 bg-popover border-border overflow-hidden">
        <DialogTitle className="sr-only">Command Palette</DialogTitle>
        
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-border">
          <Search className="w-5 h-5 text-muted-foreground shrink-0" />
          <input
            type="text"
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs font-mono bg-muted rounded border border-border text-muted-foreground">
            ESC
          </kbd>
        </div>

        {/* Commands List */}
        <div className="max-h-[400px] overflow-y-auto py-2">
          {Object.entries(groupedCommands).map(([category, items]) => (
            <div key={category}>
              <div className="px-4 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                {category}
              </div>
              {items.map((cmd) => (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-accent transition-colors"
                >
                  <cmd.icon className="w-4 h-4 text-muted-foreground shrink-0" />
                  <span className="flex-1 text-left">{cmd.label}</span>
                  {cmd.shortcut && (
                    <kbd className="px-1.5 py-0.5 text-xs font-mono bg-muted rounded border border-border text-muted-foreground">
                      {cmd.shortcut}
                    </kbd>
                  )}
                </button>
              ))}
            </div>
          ))}
          
          {filteredCommands.length === 0 && (
            <div className="px-4 py-8 text-center text-muted-foreground text-sm">
              No commands found for &quot;{search}&quot;
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-4 px-4 py-2.5 border-t border-border text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <kbd className="px-1.5 py-0.5 font-mono bg-muted rounded border border-border">↑↓</kbd>
            <span>Navigate</span>
          </div>
          <div className="flex items-center gap-1.5">
            <kbd className="px-1.5 py-0.5 font-mono bg-muted rounded border border-border">↵</kbd>
            <span>Select</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}