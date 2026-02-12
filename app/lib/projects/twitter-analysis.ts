import { Project } from '../../types/projects';

export const twitterAnalysis: Project = {
  id: 'twitter-analysis',
  title: 'Twitter Social Media Analysis',
  description: 'Data processing pipeline for Twitter/X social media analysis. Features sentiment analysis, trend detection, and real-time data streaming.',
  role: 'Data Engineer',
  technologies: ['Python', 'Apache Kafka', 'Spark', 'NLP', 'Sentiment Analysis', 'AWS'],
  githubUrl: 'https://github.com/nithish-95/twitter-analysis',
  featured: false,
  category: 'backend',
  cloudDeployment: 'AWS',
  completionDate: '2024',
  projectType: 'personal',
  keyFeatures: [
    'Real-time Twitter data streaming with Kafka',
    'Sentiment analysis using NLP',
    'Trend detection and visualization',
    'Big data processing with Spark',
    'Automated data pipeline',
    'AWS cloud deployment'
  ],
  challenges: [
    'Handling high-volume real-time data streams',
    'Implementing accurate sentiment analysis',
    'Optimizing Spark jobs for performance'
  ],
  outcomes: [
    'Processes 10K+ tweets per minute',
    'Real-time sentiment dashboard',
    'Scalable cloud architecture'
  ],
  slug: 'twitter-analysis'
};
