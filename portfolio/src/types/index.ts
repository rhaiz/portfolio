import { IconType } from 'react-icons';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  imageLink: string;
}

export interface Course {
  title: string;
  description: string;
  technologies: string[];
  certificateLink: string;
  completitionDate: string;
  institution: string;
}

export interface Certification {
  title: string;
  aquiredDate: string;
  description: string;
  imageLink: string;
}

export interface Skill {
    title: string;
    description: string;
    icon: IconType;
}

export interface Education {
    title: string;
    institution: string;
    period: string;
    format: string;
    description: string;
    topics_covered: string[];
    SVGComponent: React.ComponentType;
}

export interface Experience {
    title: string;
    company: string;
    period: string;
    format: string;
    topics_covered: string[];
}