export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'tools' | 'specialized';
  icon: string;
  highlight?: boolean;
  yearsOfExp: number;
  description: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Video & E-Commerce' | 'Enterprise SaaS' | 'Healthcare & HIPAA' | 'Web3 & Social' | 'Logistics' | 'EdTech & Learning';
  description: string;
  longDescription: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
  architectureHighlights: string[];
  featured: boolean;
  domain: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Lead' | 'Senior';
  teamSize?: string;
  description: string;
  achievements: string[];
  technologies: string[];
  keyWins: { metric: string; label: string }[];
}

export interface CodeSnippet {
  id: string;
  title: string;
  language: string;
  category: string;
  description: string;
  code: string;
  takeaway: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  relationship: string;
}

export interface TerminalCommand {
  command: string;
  description: string;
  category: 'system' | 'navigation' | 'info' | 'interactive';
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
}
