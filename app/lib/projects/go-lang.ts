import { Project } from '../../types/projects';

export const goLang: Project = {
  id: 'go-lang',
  title: 'Go Language Expertise Projects',
  description: 'Collection of Go projects demonstrating backend development patterns, concurrency, and best practices. Includes REST APIs, gRPC services, and microservices architecture examples.',
  role: 'Backend Developer',
  technologies: ['Go', 'gRPC', 'REST API', 'Microservices', 'Docker', 'PostgreSQL', 'Redis', 'Kubernetes'],
  githubUrl: 'https://github.com/nithish-95/go-lang',
  featured: true,
  category: 'backend',
  cloudDeployment: 'Docker, Kubernetes',
  completionDate: '2024',
  projectType: 'open-source',
  keyFeatures: [
    'RESTful API implementations',
    'gRPC microservices examples',
    'Concurrency patterns and goroutines',
    'Database integration with PostgreSQL',
    'Caching with Redis',
    'Docker and Kubernetes deployment configs'
  ],
  challenges: [
    'Mastering Go concurrency patterns',
    'Implementing clean architecture in Go',
    'Building production-ready microservices'
  ],
  outcomes: [
    'Comprehensive Go learning resource',
    'Production-ready code examples',
    'Best practices documentation'
  ],
  slug: 'go-lang'
};
