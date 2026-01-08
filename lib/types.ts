export interface Education {
  id: number;
  institution: string;
  degree: string;
  year: string;
  description: string;
  logoUrl: string;
  logoAlt: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  start_date: string;
  end_date: string;
  location: string;
  points: string[];
}

export interface Project {
  id: number;
  title: string;
  summary: string;
  repo_url: string;
  description_html: string;
  image_url: string;
}

export interface PostMeta {
  id: number;
  title: string;
  published_at: string;
  summary: string;
  slug: string;
}

export interface Post {
  meta: PostMeta;
  content: string;
}
