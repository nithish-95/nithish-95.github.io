import { Project } from '../../types/projects';

export const prodApp: Project = {
  id: 'prod-app',
  title: 'Production Enterprise Application',
  description: 'Full-stack production enterprise application with Kubernetes deployment, microservices architecture, and enterprise-grade features.',
  role: 'Full Stack Developer',
  technologies: ['TypeScript', 'Node.js', 'Kubernetes', 'Docker', 'PostgreSQL', 'Redis', 'Microservices', 'GraphQL'],
  githubUrl: 'https://github.com/nithish-95/prod-app',
  featured: true,
  category: 'devops',
  cloudDeployment: 'Kubernetes',
  completionDate: '2024',
  projectType: 'production',
  keyFeatures: [
    'Kubernetes orchestration and deployment',
    'Microservices architecture',
    'GraphQL API gateway',
    'Enterprise authentication and authorization',
    'Automated CI/CD pipelines',
    'Monitoring and logging with Prometheus/Grafana'
  ],
  challenges: [
    'Setting up Kubernetes cluster configuration',
    'Implementing service mesh for microservices',
    'Ensuring high availability and fault tolerance'
  ],
  outcomes: [
    '99.99% uptime SLA achieved',
    'Successfully deployed to production Kubernetes cluster',
    'Scaled to handle 10K+ concurrent users'
  ],
  slug: 'prod-app'
};
