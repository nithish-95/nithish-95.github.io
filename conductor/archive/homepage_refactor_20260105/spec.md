# Specification: Homepage Refactoring

## Overview
This track focuses on refactoring the homepage (`app/page.tsx`) to improve code organization and reusability. The goal is to make the codebase more maintainable without altering the user-facing design or functionality.

## Functional Requirements
1.  **Create Reusable `ArrowLink` Component:**
    *   A new reusable component named `ArrowLink` will be created.
    *   This component will encapsulate the `Link` from `next/link` and the arrow SVG icon.
    *   It should accept `href` and `text` as props.
    *   The existing "View Project" and "Read Post" links on the homepage will be replaced with this new component.

2.  **Break Down Homepage into Smaller Components:**
    *   The existing code within `app/page.tsx` will be divided into smaller, more manageable components.
    *   The new components will be named:
        *   `HeroSection`
        *   `RecentProjectsSection`
        *   `LatestPostsSection`
    *   These new components will be placed in a new directory: `components/site/home/`.
    *   The `app/page.tsx` file will be updated to import and use these new section components.

## Non-Functional Requirements
*   **No Visual Changes:** The refactoring should not introduce any changes to the visual appearance, layout, or functionality of the homepage.
*   **Code Style:** All new code should adhere to the existing code style and conventions of the project.

## Out of Scope
*   Changes to the data fetching logic in `lib/content.ts`.
*   Modifications to the overall site layout, including the `Header` and `Footer` components.
