import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nithish Suresh Babu | Full-Stack Software Engineer",
  description: "Full-Stack Software Engineer specializing in GenAI-driven systems and scalable cloud architectures. MS in Computer Science from University of Michigan.",
  keywords: ["software engineer", "full-stack", "genai", "ai", "next.js", "go", "python", "portfolio"],
  authors: [{ name: "Nithish Suresh Babu" }],
  openGraph: {
    title: "Nithish Suresh Babu | Full-Stack Software Engineer",
    description: "Full-Stack Software Engineer specializing in GenAI-driven systems and scalable cloud architectures.",
    type: "website",
    url: "https://portfolio.nithish.net",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nithish Suresh Babu | Full-Stack Software Engineer",
    description: "Full-Stack Software Engineer specializing in GenAI-driven systems and scalable cloud architectures.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} dark`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}