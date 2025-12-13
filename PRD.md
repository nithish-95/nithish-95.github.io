## 1. Product Overview

This product is a personal portfolio website built with an existing Next.js App Router project that already has shadcn/ui configured and shadcn MCP available through the Gemini CLI for installing and updating components via natural language.  The site will render education, experience, projects, and posts from structured content files under a `content` directory and allow UI restyling by changing global CSS variables only, without touching React components.[2][3][4][5][1]

### Goals

- Use the existing Next.js + shadcn/ui setup to build a professional, performant portfolio optimized for desktop and mobile.[6][7]
- Fully decouple data from presentation by loading content from `content/education.json`, `content/experience.json`, `content/projects.json`, and `content/posts/*.md`.  
- Achieve strong themeability by ensuring look and feel can be significantly altered via global CSS (variables/tokens) while keeping components and layout intact.[4][5]

***

## 2. Scope and Features

### 2.1 Routes and Structure

Using the App Router (`app/`), implement:

- `/` – Landing page (hero + highlights for Projects and Posts).[7]
- `/projects` – Projects list from `projects.json`, plus optional project details.  
- `/experience` – Experience timeline from `experience.json`.  
- `/education` – Education timeline from `education.json`.  
- `/posts` – Posts index from `content/posts/*.md`.  
- `/posts/[slug]` – Individual post pages resolved by slug.  
- `/about` – Optional personal summary using data from any of the JSON files.  

All pages must share a common layout defined in `app/layout.tsx` with header, navigation, and footer.[6][7]

### 2.2 Content Model and Files

Folder layout (already decided):

- `content/education.json`: List of education entries.  
- `content/experience.json`: List of experience entries.  
- `content/projects.json`: List of projects.  
- `content/posts/*.md`: Markdown files for posts, each with frontmatter fields like `title`, `summary`, `date`, `tags`, `slug`.  

Requirements:

- Define TypeScript types for `Education`, `Experience`, `Project`, and `PostMeta`.  
- Implement `lib/content` utilities for reading/parsing these files in server components (Node APIs).[7]
- Implement robust error handling and default fallbacks if files or fields are missing.

***

## 3. UX and UI Requirements

### 3.1 Visual Design and Theming

- Use shadcn/ui primitives (already installed) for buttons, cards, navigation, typography, layout, and forms.[5][4]
- All visual styling must be controlled through:
  - Tailwind config (for utility-level tokens) and  
  - `globals.css` (CSS variables for colors, typography, radius, spacing, shadows).  

Key theming requirements:

- Colors, fonts, radii, and spacing are set via CSS variables such as `--background`, `--foreground`, `--primary`, `--radius`, `--font-sans`.[4][5]
- No hard-coded color values inside components; they should reference Tailwind classes wired to those variables (following shadcn’s recommended theme pattern).[4]
- Light and dark mode supported via `.dark` class on `<html>` or `<body>` adjusting the same variables.[5][4]

Changing the UI:

- A designer or developer must be able to dramatically change the visual style by editing only the variables and a small set of utility classes in `globals.css` (and optionally Tailwind config), without updating JSX.[5]

### 3.2 Navigation and Layout

Use existing shadcn components (installed via regular CLI or via Gemini CLI MCP integration).[3][1][2]

- Header:
  - Displays name/logo and route links (Home, Projects, Posts, Experience, Education, About).  
  - Includes a theme toggle (light/dark) using a `Switch` or custom toggle.[4]

- Navigation:
  - Desktop: `NavigationMenu` or `Menubar` with clear hover/focus states.[4]
  - Mobile: `Sheet`/drawer opened from a menu icon.[4]

- Footer:
  - Contains copyright.
  - Contains social icons/links and a contact link or mailto.

Layout:

- Main content constrained to a centered container (`max-w-4xl` or `max-w-5xl`) with consistent vertical rhythm.[7]
- Critical sections (hero, projects list, timelines) use shadcn `Card`, `Badge`, `Tabs`, and typography.[6][4]

***

## 4. Feature Details

### 4.1 Landing Page (`/`)

Content:

- Hero section: name, title, short intro, and 1–2 key CTAs (e.g., “View Projects”, “Read Posts”).  
- Highlight strips for:
  - Recent projects (top 2–3 from `projects.json`).  
  - Latest posts (top 2–3 from Markdown).  

UI:

- Use `Card`, `Button`, `Badge`, `Avatar` (if profile image), and typographic components from shadcn/ui.[4]
- Optional subtle background effect or gradient implemented purely via CSS classes/variables to remain themable.[5]

### 4.2 Projects (`/projects` and optional details)

List view:

- Display each project as a `Card` with:
  - Title and short description.  
  - Technologies/tags (via `Badge`).  
  - Links (GitHub, live demo) as `Button` or styled `Link`.[4]

Details:

- Option A: `/projects/[slug]` page using extra fields in `projects.json`.  
- Option B: `Dialog` or `Sheet` from shadcn/ui opened from the card to show extended description, responsibilities, and tech stack.[4]

Enhancements (optional):

- Filter by tag/technology using `Tabs`, `Select`, or `Toggle Group`.[4]

### 4.3 Experience (`/experience`)

- Render a vertical timeline or stacked `Card` layout.  
- Each entry shows company, role, date range, location, summary, and bullet points from `experience.json`.  
- For long entries, use `Accordion` or `Collapsible` to keep the page scannable.[4]

### 4.4 Education (`/education`)

- Similar timeline or card layout for education entries from `education.json`.  
- Show institution, degree, dates, location, and any extra details you include in JSON.  

### 4.5 Blog (`/posts` and `/posts/[slug]`)

Posts index:

- List posts with title, date, summary, and tags from Markdown frontmatter.  
- Use `Card` plus `Badge` for tags and add pagination or “load more” if needed.[4]

Post detail:

- Parse Markdown with frontmatter and render using a Markdown/MDX renderer.  
- Map standard HTML tags (h1–h3, p, a, ul, code, blockquote) to stylized components consistent with shadcn’s typography and code styling.[4]
- Integrate syntax highlighting theme aligned to your CSS variables.  

### 4.6 About and Contact (Optional)

About (`/about`):

- Use `Card` and typography to show bio, skills (as `Badge` tags), and possibly a compact timeline summary.[4]

Contact:

- Either:
  - Simple contact links and social buttons in footer and/or About page, or  
  - A form using shadcn `Form`, `Input`, `Textarea`, and `Button` with client-side validation only.[4]

***

## 5. Technical Architecture

### 5.1 Existing Setup and Constraints

- The Next.js project is already created with shadcn/ui wired into Tailwind and `globals.css`.[6]
- shadcn MCP is configured and accessible via Gemini CLI, so components can be installed/updated by asking Gemini instead of manually running shadcn commands.[2][3]

Constraints:

- All new UI primitives should be added via shadcn components (through MCP + Gemini or plain CLI), not custom-styled raw HTML where shadcn provides an equivalent.[5][4]
- Do not reconfigure the project structure; build on the existing `app/` layout and Tailwind setup.

### 5.2 Data Loading

Implement utilities in `lib/content.ts` (or similar):

- JSON loaders:
  - `getEducation()`: reads and parses `content/education.json`.  
  - `getExperience()`: reads and parses `content/experience.json`.  
  - `getProjects()`: reads and parses `content/projects.json`.  

- Markdown loaders:
  - `getAllPosts()`: reads all `content/posts/*.md`, returns list of metadata.  
  - `getPostBySlug(slug)`: returns content and metadata for a given slug.  

Implementation:

- Use Node `fs` and `path` in server utilities, ensuring functions are called only from server components or `generateStaticParams`.[7]
- Prefer static generation for all pages; use `generateStaticParams` and `generateMetadata` where appropriate.[7]

***

## 6. Theming and Global CSS

To meet “change the UI just by changing the global CSS”:

- Ensure `globals.css` defines the full visual token set:

  - Color variables: base, surface, primary, secondary, accent, border, muted, etc.  
  - Typography variables: font families, font sizes/line-heights.  
  - Radius, border widths, shadows, and spacing.[5][4]

- Tailwind config must map its `colors`, `borderRadius`, etc. to these CSS variables in the shadcn-recommended way.[4]
- Components must use Tailwind classes that ultimately reference these shared variables.  

Theme switching:

- Implement a theme provider pattern (e.g., using `next-themes`) or a custom context that toggles `.dark` or data attributes on `<html>`.[5][4]
- Confirm that toggling themes and editing variables in `globals.css` yields substantial visual changes (e.g., from a neutral minimal theme to a bright accent-heavy theme) without modifying component files.[5]

***

## 7. Integration with Gemini CLI and shadcn MCP

- Rely on the already-configured shadcn MCP in Gemini CLI to:  
  - Search for needed shadcn components (e.g., “navigation menu”, “timeline-like layout”).[3][2]
  - Generate and execute shadcn CLI commands to install missing components into the project (e.g., adding `card`, `navigation-menu`, `sheet`, `tabs`, `form`).[1][2]

- Requirement: All new component additions for this portfolio should go through MCP-assisted shadcn CLI commands where possible, so the component registry and project remain in sync.[8][2]

***

## 8. Non-Functional Requirements

- Performance:
  - Static pages where possible, image optimization, and minimal client-side JS beyond navigation and interactive widgets.[6][7]

- Accessibility:
  - Use shadcn components’ accessible patterns; ensure keyboard navigation, focus outlines, and adequate color contrast across themes.[5][4]

- SEO:
  - Per-page `metadata` in Next.js, semantic headings, and descriptive copy in content files.[7]

- Maintainability:
  - Keep components small and composable (e.g., separate `ProjectCard`, `ExperienceItem`, `PostCard`), and rely on shadcn primitives plus global CSS variables for styling.[5][4]

[1](https://blog.logrocket.com/shadcn-cli-3-0-update-overview/)
[2](https://ui.shadcn.com/docs/mcp)
[3](https://glama.ai/mcp/servers/integrations/shadcn-ui)
[4](https://ui.shadcn.com/docs/components)
[5](https://ui.shadcn.com)
[6](https://www.youtube.com/watch?v=M77XZ12NHuw)
[7](https://dev.to/mintycyber/introduction-to-nextjs-and-building-a-portfolio-site-with-nextjs-1n0o)
[8](https://ui.shadcn.com/docs/registry/mcp)
[9](https://www.reddit.com/r/mcp/comments/1mx8tuu/i_tried_shadcns_new_registry_mcp_and_heres_what_i/)
[10](https://github.com/google-gemini/gemini-cli/issues/13423)
[11](https://www.youtube.com/watch?v=SfC1u8eNKsY)
[12](https://github.com/Jpisnice/shadcn-ui-mcp-server)
[13](https://next.jqueryscript.net/next-js/developer-portfolio-template-shadcn/)