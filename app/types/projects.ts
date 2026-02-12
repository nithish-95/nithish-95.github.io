export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'backend' | 'ai' | 'devops';
  cloudDeployment?: string;
  completionDate: string;
  projectType: 'personal' | 'open-source' | 'production';
  keyFeatures: string[];
  challenges: string[];
  outcomes: string[];
  screenshots?: string[];
  database?: string;
  slug?: string;
}

export interface ProjectHighlight {
  title: string;
  description: string;
  technologies: string[];
  role: string;
  impact: string;
}

export interface SkillWithContext {
  name: string;
  category: 'backend' | 'frontend' | 'cloud' | 'ai' | 'database' | 'devops';
  projectsUsedIn: string[];
}

export interface TechnologyTag {
  name: string;
  proficiency: 'expert' | 'intermediate' | 'learning';
  yearsExperience: number;
  lastUsed: string;
}