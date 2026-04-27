import { type LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  image: string;
  benefits: string[];
  process: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  pickup: string;
  drop: string;
  houseSize: string;
}
