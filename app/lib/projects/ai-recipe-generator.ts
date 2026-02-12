import { Project } from '../../types/projects';

export const aiRecipeGenerator: Project = {
  id: 'ai-recipe-generator',
  title: 'AI Recipe Generator',
  description: 'React-based AI-powered recipe generator that creates custom recipes based on available ingredients and dietary preferences.',
  role: 'Frontend Developer',
  technologies: ['React', 'TypeScript', 'AI API', 'Tailwind CSS', 'Vercel'],
  githubUrl: 'https://github.com/nithish-95/ai-recipe-generator',
  featured: false,
  category: 'ai',
  cloudDeployment: 'Vercel',
  completionDate: '2024',
  projectType: 'personal',
  keyFeatures: [
    'AI-powered recipe generation',
    'Ingredient-based search',
    'Dietary preference filtering',
    'Responsive React frontend',
    'Recipe saving and sharing'
  ],
  challenges: [
    'Integrating AI API for recipe generation',
    'Handling asynchronous AI responses',
    'Building intuitive ingredient input UI'
  ],
  outcomes: [
    'Successfully generates recipes in under 5 seconds',
    'Supports multiple dietary restrictions',
    'Deployed and accessible worldwide'
  ],
  slug: 'ai-recipe-generator'
};
