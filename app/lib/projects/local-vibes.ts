import { Project } from '../../types/projects';

export const localVibes: Project = {
  id: 'local-vibes',
  title: 'Local-Vibes - Event Discovery Platform',
  description: 'Full-stack event discovery platform built with Go backend and Vue.js frontend. Features real-time updates via WebSockets, event creation, search, and location-based filtering.',
  role: 'Full Stack Developer',
  technologies: ['Go', 'Vue.js', 'WebSockets', 'PostgreSQL', 'Docker', 'REST API'],
  githubUrl: 'https://github.com/nithish-95/Local-Vibes',
  featured: true,
  category: 'web',
  cloudDeployment: 'Docker',
  completionDate: '2024',
  projectType: 'personal',
  keyFeatures: [
    'Real-time event updates via WebSockets',
    'Location-based event discovery',
    'Advanced search and filtering',
    'User authentication and profiles',
    'Event creation and management',
    'Responsive Vue.js frontend'
  ],
  challenges: [
    'Implementing real-time features with WebSockets',
    'Optimizing geolocation queries',
    'Building scalable Go backend architecture'
  ],
  outcomes: [
    'Successfully implemented real-time event notifications',
    'Achieved sub-100ms API response times',
    'Built with clean architecture patterns in Go'
  ],
  slug: 'local-vibes'
};
