import { Project } from '../../types/projects';

export const chatWebapp: Project = {
  id: 'chat-webapp',
  title: 'Chat WebApp - Scalable Real-Time Messaging',
  description: 'Scalable web chat application with WebSocket support, consistent hashing for horizontal scaling, and Kubernetes-ready architecture.',
  role: 'Backend Developer',
  technologies: ['Go', 'Gorilla WebSocket', 'SQLite', 'Kubernetes', 'Consistent Hashing', 'gcache'],
  githubUrl: 'https://github.com/nithish-95/chat-webapp',
  featured: true,
  category: 'backend',
  completionDate: '2025',
  projectType: 'open-source',
  keyFeatures: [
    'Real-time messaging via WebSockets',
    'Consistent hashing for horizontal scaling',
    'Kubernetes-ready deployment architecture',
    'Channel-based chat rooms',
    'Message persistence with SQLite',
    'In-memory caching for active channels',
    'Concurrent client handling'
  ],
  challenges: [
    'Implementing consistent hashing for load distribution',
    'Managing WebSocket connections at scale',
    'Designing horizontal scaling architecture',
    'Ensuring message delivery reliability'
  ],
  outcomes: [
    'Supports 1000+ concurrent WebSocket connections',
    'Horizontal scaling ready for production deployment',
    'Sub-50ms message latency',
    'Successfully deployed on Kubernetes cluster'
  ],
  slug: 'chat-webapp'
};
