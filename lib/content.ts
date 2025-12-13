import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Education, Experience, Project, Post, PostMeta } from './types';

const contentDirectory = path.join(process.cwd(), 'content');

export function getEducation(): Education[] {
  const fullPath = path.join(contentDirectory, 'education.json');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return JSON.parse(fileContents);
}

export function getExperience(): Experience[] {
  const fullPath = path.join(contentDirectory, 'experience.json');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return JSON.parse(fileContents);
}

export function getProjects(): Project[] {
  const fullPath = path.join(contentDirectory, 'projects.json');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return JSON.parse(fileContents);
}

export function getAllPosts(): PostMeta[] {
  const postsDirectory = path.join(contentDirectory, 'posts');
  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return { ...data, slug } as PostMeta;
  });
  return allPosts.sort((a, b) => (a.published_at < b.published_at ? 1 : -1));
}

export function getPostBySlug(slug: string): Post {
  const postsDirectory = path.join(contentDirectory, 'posts');
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return {
    meta: { ...data, slug } as PostMeta,
    content,
  };
}
