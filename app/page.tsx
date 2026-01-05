import { HeroSection } from "@/components/site/home/HeroSection";
import { RecentProjectsSection } from "@/components/site/home/RecentProjectsSection";
import { LatestPostsSection } from "@/components/site/home/LatestPostsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <RecentProjectsSection />
      <LatestPostsSection />
    </>
  );
}