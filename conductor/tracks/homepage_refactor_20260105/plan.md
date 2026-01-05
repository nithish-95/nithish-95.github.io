# Plan: Homepage Refactoring

This plan outlines the steps to refactor the homepage for better code organization and reusability.

## Phase 1: Component Creation and Refactoring
- [x] Task: Create the `components/site/home` directory. [94e9569]
- [x] Task: Create the `ArrowLink.tsx` component inside the `components/ui/` directory. [52f5145]
- [x] Task: Create the `HeroSection.tsx` component in `components/site/home/`. [0d6aab8]
- [ ] Task: Create the `RecentProjectsSection.tsx` component in `components/site/home/`.
- [ ] Task: Create the `LatestPostsSection.tsx` component in `components/site/home/`.
- [ ] Task: Move the corresponding JSX and logic from `app/page.tsx` into each new section component.
- [ ] Task: Update `app/page.tsx` to import and render the `HeroSection`, `RecentProjectsSection`, and `LatestPostsSection` components.
- [ ] Task: Replace the hardcoded links in the `RecentProjectsSection` and `LatestPostsSection` with the new `ArrowLink` component.
- [ ] Task: Conductor - User Manual Verification 'Component Creation and Refactoring' (Protocol in workflow.md)
