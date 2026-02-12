import { chronoNext } from './projects/chrono-next';
import { localVibes } from './projects/local-vibes';
import { ticTacToe } from './projects/tic-tac-toe';
import { aiRecipeGenerator } from './projects/ai-recipe-generator';
import { manga } from './projects/manga';
import { goLang } from './projects/go-lang';
import { prodApp } from './projects/prod-app';
import { vitFaceDetection } from './projects/vit-face-detection';
import { twitterAnalysis } from './projects/twitter-analysis';
import { nextAuthTemplate } from './projects/next-auth-template';
import { reefGuide } from './projects/reef-guide';
import { chatWebapp } from './projects/chat-webapp';
import { closApp } from './projects/clos-app';
import { llmCli } from './projects/llm-cli';
import { microSaasTemplate } from './projects/micro-saas-template';
import { Project } from '../types/projects';

// All projects array
export const allProjects: Project[] = [
  chronoNext,
  localVibes,
  ticTacToe,
  aiRecipeGenerator,
  manga,
  goLang,
  prodApp,
  vitFaceDetection,
  twitterAnalysis,
  nextAuthTemplate,
  reefGuide,
  chatWebapp,
  closApp,
  llmCli,
  microSaasTemplate
];

// Get featured projects
export function getFeaturedProjects(): Project[] {
  return allProjects.filter(project => project.featured);
}

// Get project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find(project => project.id === slug);
}

// Get all projects
export function getAllProjects(): Project[] {
  return allProjects;
}

// Get related projects
export function getRelatedProjects(project: Project): Project[] {
  return allProjects.filter(
    p => p.id !== project.id && 
         p.category === project.category &&
         p.technologies.some(tech => project.technologies.includes(tech))
  ).slice(0, 3);
}

// Get projects by category
export function getProjectsByCategory(category: Project['category']): Project[] {
  return allProjects.filter(project => project.category === category);
}

// Get projects by technology
export function getProjectsByTechnology(technology: string): Project[] {
  return allProjects.filter(project => 
    project.technologies.some(tech => tech.toLowerCase().includes(technology.toLowerCase()))
  );
}

// Get projects by role
export function getProjectsByRole(role: string): Project[] {
  return allProjects.filter(project => project.role.toLowerCase().includes(role.toLowerCase()));
}

// Get projects by completion date range
export function getProjectsByCompletionDateRange(
  startYear: number, 
  endYear: number
): Project[] {
  return allProjects.filter(project => {
    const year = parseInt(project.completionDate);
    return year >= startYear && year <= endYear;
  });
}

// Get project statistics
export function getProjectStatistics(): {
  totalProjects: number;
  featuredProjects: number;
  byCategory: Record<string, number>;
  byTechnology: Record<string, number>;
  byRole: Record<string, number>;
} {
  const byCategory: Record<string, number> = {};
  const byTechnology: Record<string, number> = {};
  const byRole: Record<string, number> = {};

  allProjects.forEach(project => {
    // Count by category
    byCategory[project.category] = (byCategory[project.category] || 0) + 1;
    
    // Count by role
    byRole[project.role] = (byRole[project.role] || 0) + 1;
    
    // Count by technology
    project.technologies.forEach(tech => {
      byTechnology[tech] = (byTechnology[tech] || 0) + 1;
    });
  });

  return {
    totalProjects: allProjects.length,
    featuredProjects: allProjects.filter(p => p.featured).length,
    byCategory,
    byTechnology,
    byRole
  };
}

// Search projects
export function searchProjects(query: string): Project[] {
  const lowerQuery = query.toLowerCase();
  return allProjects.filter(project => 
    project.title.toLowerCase().includes(lowerQuery) ||
    project.description.toLowerCase().includes(lowerQuery) ||
    project.technologies.some(tech => tech.toLowerCase().includes(lowerQuery)) ||
    project.role.toLowerCase().includes(lowerQuery)
  );
}

// Get technology proficiency
export function getTechnologyProficiency(technology: string): {
  proficiency: 'expert' | 'intermediate' | 'learning';
  yearsExperience: number;
  lastUsed: string;
} {
  // Based on project data analysis
  const projectsUsingTech = allProjects.filter(project => 
    project.technologies.some(tech => tech.toLowerCase().includes(technology.toLowerCase()))
  );

  if (projectsUsingTech.length === 0) {
    return {
      proficiency: 'learning',
      yearsExperience: 0,
      lastUsed: 'Never'
    };
  }

  const yearsExperience = projectsUsingTech.reduce((sum, project) => {
    const year = parseInt(project.completionDate);
    return sum + (year > 0 ? 1 : 0); // Simplified experience calculation
  }, 0);

  const lastUsed = projectsUsingTech
    .map(project => parseInt(project.completionDate))
    .filter(year => year > 0)
    .sort((a, b) => b - a)[0] || '2024';

  const proficiency = yearsExperience >= 3 ? 'expert' : 
                     yearsExperience >= 1 ? 'intermediate' : 'learning';

  return {
    proficiency,
    yearsExperience,
    lastUsed: `${lastUsed}`
  };
}