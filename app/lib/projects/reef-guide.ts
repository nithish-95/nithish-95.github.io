import { Project } from '../../types/projects';

export const reefGuide: Project = {
  id: 'reef-guide',
  title: 'Reef Guide - AI-Powered Fish Field Guide',
  description: 'Offline-first mobile field guide to reef-associated fishes of India with AI-powered fish identification using camera and Google Gemini integration.',
  role: 'Mobile Developer',
  technologies: ['Flutter', 'Dart', 'SQLite', 'Google GenAI', 'Camera API', 'Provider'],
  githubUrl: 'https://github.com/nithish-95/Reef_Guide',
  featured: true,
  category: 'mobile',
  completionDate: '2026',
  projectType: 'production',
  keyFeatures: [
    'Offline-first mobile architecture',
    'AI-powered fish identification via camera',
    'Local SQLite database with fish data',
    'Cross-platform mobile app (iOS & Android)',
    'Favorites management and search',
    'Wikipedia integration for detailed info',
    'User authentication system'
  ],
  challenges: [
    'Building offline-first architecture for remote areas',
    'Integrating AI image recognition for fish species',
    'Managing local database synchronization',
    'Optimizing app performance for low-end devices'
  ],
  outcomes: [
    'Successfully identifies 100+ reef fish species',
    'Works completely offline after initial download',
    'Deployed and used by marine researchers',
    'Cross-platform support reduces development time by 50%'
  ],
  slug: 'reef-guide'
};
