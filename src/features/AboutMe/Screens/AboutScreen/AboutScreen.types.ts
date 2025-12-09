export interface AboutScreenProps {
  // Add props here as needed
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  liveUrl?: string;
  sourceUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
