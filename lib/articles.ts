import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export interface Article {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  keywords: string[];
  content: string;
  html: string;
}

const contentDir = path.join(process.cwd(), 'content', 'artikler');

export function getAllArticles(): Omit<Article, 'content' | 'html'>[] {
  if (!fs.existsSync(contentDir)) return [];
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.md'));
  return files
    .map((f) => {
      const slug = f.replace('.md', '');
      const raw = fs.readFileSync(path.join(contentDir, f), 'utf8');
      const { data } = matter(raw);
      return {
        slug,
        title: data.title || slug,
        date: data.date || '',
        excerpt: data.excerpt || '',
        keywords: data.keywords || []
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticleBySlug(slug: string): Article | null {
  const filePath = path.join(contentDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const html = marked.parse(content) as string;
  return {
    slug,
    title: data.title || slug,
    date: data.date || '',
    excerpt: data.excerpt || '',
    keywords: data.keywords || [],
    content,
    html
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(contentDir)) return [];
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace('.md', ''));
}
