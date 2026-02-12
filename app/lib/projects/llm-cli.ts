import { Project } from '../../types/projects';

export const llmCli: Project = {
  id: 'llm-cli',
  title: 'LLM CLI - Multi-Provider AI Terminal Tool',
  description: 'Command-line interface tool for interacting with multiple LLM providers (Gemini, OpenAI, Ollama) directly from the terminal with interactive chat capabilities.',
  role: 'CLI Developer',
  technologies: ['Go', 'Cobra', 'Google GenAI', 'LangChain', 'TikToken', 'Godotenv'],
  githubUrl: 'https://github.com/nithish-95/llm_Cli',
  featured: false,
  category: 'ai',
  completionDate: '2025',
  projectType: 'open-source',
  keyFeatures: [
    'Multi-provider LLM support (Gemini, OpenAI, Ollama)',
    'Interactive chat interface with history',
    'System prompt customization',
    'Token counting and management',
    'Graceful interrupt handling',
    'Environment-based configuration',
    'Terminal-based AI conversations'
  ],
  challenges: [
    'Abstracting different LLM provider APIs',
    'Managing chat history and context',
    'Implementing graceful shutdown handling',
    'Token counting across different providers'
  ],
  outcomes: [
    'Supports 3 major LLM providers in one tool',
    'Increases developer productivity for AI tasks',
    'Clean CLI interface with intuitive commands',
    'Successfully handles long conversation contexts'
  ],
  slug: 'llm-cli'
};
