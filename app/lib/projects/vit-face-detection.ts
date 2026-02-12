import { Project } from '../../types/projects';

export const vitFaceDetection: Project = {
  id: 'vit-face-detection',
  title: 'Vision Transformer Face Detection',
  description: 'AI/ML project implementing Vision Transformer (ViT) architecture for face detection and recognition. Features real-time inference and high accuracy detection.',
  role: 'ML Engineer',
  technologies: ['Python', 'PyTorch', 'Vision Transformers', 'OpenCV', 'TensorFlow', 'CUDA'],
  githubUrl: 'https://github.com/nithish-95/vit-face-detection',
  featured: false,
  category: 'ai',
  completionDate: '2024',
  projectType: 'personal',
  keyFeatures: [
    'Vision Transformer architecture implementation',
    'Real-time face detection',
    'High accuracy recognition',
    'GPU acceleration with CUDA',
    'OpenCV integration',
    'Custom dataset training pipeline'
  ],
  challenges: [
    'Training Vision Transformer from scratch',
    'Optimizing inference speed for real-time use',
    'Handling varying lighting and angles'
  ],
  outcomes: [
    'Achieved 95%+ detection accuracy',
    'Real-time performance at 30 FPS',
    'Published as open-source project'
  ],
  slug: 'vit-face-detection'
};
