export interface NavItem {
  id: string;
  label: string;
  href?: string;
}

export interface TechCategory {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface SkillItem {
  title: string;
  value: number;
  label: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface AchievementItem {
  label: string;
  value: string;
  suffix?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  company: string;
}

export interface ProjectPlaceholder {
  title: string;
  description: string;
  tags: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
