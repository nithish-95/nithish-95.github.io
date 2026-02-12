import { Project } from '../../types/projects';

export const ticTacToe: Project = {
  id: 'tic-tac-toe',
  title: 'Real-Time Tic-Tac-Toe - AWS Fargate',
  description: 'Multiplayer real-time tic-tac-toe game deployed on AWS Fargate with Docker. Features WebSocket-based gameplay, game rooms, and persistent game state.',
  role: 'Backend Developer',
  technologies: ['Go', 'AWS Fargate', 'Docker', 'WebSockets', 'AWS ECS', 'Redis'],
  githubUrl: 'https://github.com/nithish-95/tic-tac-toe',
  featured: true,
  category: 'backend',
  cloudDeployment: 'AWS Fargate',
  completionDate: '2024',
  projectType: 'personal',
  keyFeatures: [
    'Real-time multiplayer gameplay via WebSockets',
    'Game room creation and management',
    'Persistent game state with Redis',
    'Docker containerization',
    'AWS Fargate auto-scaling',
    'Matchmaking system'
  ],
  challenges: [
    'Configuring AWS Fargate for real-time applications',
    'Managing WebSocket connections at scale',
    'Implementing game state synchronization'
  ],
  outcomes: [
    'Successfully deployed on AWS Fargate with auto-scaling',
    'Supports 100+ concurrent game sessions',
    'Sub-50ms latency for real-time gameplay'
  ],
  slug: 'tic-tac-toe'
};
