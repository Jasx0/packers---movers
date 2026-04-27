import { Home, Building2, Truck, PackageCheck, Briefcase } from 'lucide-react';
import { type Service, type Testimonial, type BlogPost } from './types';

export const BUSINESS_INFO = {
  name: "Gandhi Packers & Movers",
  tagline: "Safe & Fast Shifting Services",
  location: "Chennai, Tamil Nadu, India",
  phone: "8220293589",
  email: "karthikrajaveluchamy2001@gmail.com",
  whatsapp: "https://wa.me/918220293589",
  instagram: "https://www.instagram.com/karthime__?igsh=MXlpanM5ZnNzZ3Zu",
  youtube: "https://youtube.com/@__techwithme?si=-DRt4bed1BOTNGSX",
  address: "Raja Agraharam 1St Street, Poonamallee",
  mapsLink: "https://share.google/oM0wAqHmoAXe2WxX5",
  experience: "5+ years",
};

export const SERVICES: Service[] = [
  {
    id: "house-shifting",
    title: "House Shifting",
    slug: "house-shifting",
    description: "Stress-free household relocation services with premium packing and safe transit.",
    longDescription: "Moving your home is a significant life event, and at Gandhi Packers and Movers, we make it seamless. Our expert team handles everything from fragile glassware to heavy furniture with utmost care. We use high-quality packing materials like bubble wrap, corrugated sheets, and sturdy boxes to ensure your belongings reach their new destination in perfect condition. Whether you are moving across the street or to a different part of Chennai, our local expertise ensures a smooth transition.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      "Customized packing for different items",
      "Safe and secure loading/unloading",
      "On-time delivery guarantee",
      "Transit insurance support",
      "Experienced and polite staff"
    ],
    process: [
      "Site survey and cost estimation",
      "Premium quality packing at your doorstep",
      "Careful loading onto specialized moving trucks",
      "Safe transit through optimized routes",
      "Unloading and careful placement at your new home"
    ]
  },
  {
    id: "office-shifting",
    title: "Office Shifting",
    slug: "office-shifting",
    description: "Efficient commercial relocation to minimize downtime and ensure business continuity.",
    longDescription: "Relocating an office requires precision and speed. We specialize in moving IT equipment, office workstations, files, and furniture. Our team works beyond office hours or on weekends to ensure your business operations resume as quickly as possible. We label every box meticulously to ensure that everything is organized at the new location.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      "Minimized business downtime",
      "IT equipment specialized handling",
      "Confidential document safety",
      "After-hours relocation options",
      "Project management for large offices"
    ],
    process: [
      "Inventory assessment and planning",
      "Meticulous labeling and packing",
      "Secure transport of servers and delicate electronics",
      "Systematic unloading to matching zones",
      "Assistance in quick setup"
    ]
  },
  {
    id: "local-moving",
    title: "Local Moving",
    slug: "local-moving",
    description: "Quick and affordable local moving services within Chennai and surrounding areas.",
    longDescription: "Moving within the city shouldn't be a hassle. We offer specialized local moving services in Chennai, covering areas like Velachery, Tambaram, T Nagar, Anna Nagar, and more. Our local team knows the routes and traffic timings of Chennai, ensuring that your move is completed within hours.",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      "Hourly or flat-rate pricing",
      "Same-day shifting options",
      "Local route expertise",
      "Small load flexibility",
      "No hidden extra costs"
    ],
    process: [
      "Instant quote over phone or visit",
      "Swift packing of essentials",
      "Local transit via small/medium trucks",
      "Direct unloading and placement"
    ]
  },
  {
    id: "long-distance",
    title: "Long Distance Moving",
    slug: "long-distance-moving",
    description: "Reliable interstate moving services with real-time tracking and safety assurance.",
    longDescription: "Moving to a different city? We offer comprehensive long-distance relocation services from Chennai to anywhere in India. Our long-haul drivers are experienced, and we use multi-layered packing to withstand longer travel times and various weather conditions.",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      "Nationwide network",
      "Shared or dedicated truck options",
      "Long-haul safety packing",
      "Storage and warehousing facilities",
      "Door-to-door delivery"
    ],
    process: [
      "Detailed long-distance planning",
      "Heavy-duty multi-layer packing",
      "Loading with weight distribution logic",
      "Interstate permit and documentation handling",
      "Safe storage options if needed"
    ]
  },
  {
    id: "packing-unpacking",
    title: "Packing & Unpacking",
    slug: "packing-unpacking",
    description: "Professional packing services using high-grade materials for maximum protection.",
    longDescription: "The most important part of any move is the quality of packing. We use five-layer packing for delicate items and double-walled cartons for heavy goods. Our unpacking service helps you settle in quickly by removing all debris and setting up your basic furniture.",
    icon: PackageCheck,
    image: "https://images.unsplash.com/photo-1520038410233-7141be7e6f97?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      "High-quality bubble wrap & foam",
      "Cardboard and plastic wrap protection",
      "Fragile item expertise",
      "Post-move debris removal",
      "Furniture assembly/disassembly"
    ],
    process: [
      "Material selection based on item type",
      "Systematic packing of every room",
      "Safe loading",
      "Careful unpacking at destination",
      "Removal of packing waste"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    location: "Anna Nagar, Chennai",
    rating: 5,
    text: "Gandhi Packers and Movers made my house shifting incredibly easy. The staff was very professional and handled my furniture with extreme care. Highly recommended!"
  },
  {
    id: "2",
    name: "Priya S.",
    location: "Velachery, Chennai",
    rating: 5,
    text: "Best packers in Chennai. They were on time, and their packing quality was top-notch. Not even a single scratch on my items."
  },
  {
    id: "3",
    name: "Arun V.",
    location: "Tambaram, Chennai",
    rating: 4,
    text: "Affordable and reliable service. They moved my 2BHK within 5 hours. Good communication from the team."
  }
];

export const SERVICE_AREAS = [
  "Chennai",
  "Velachery",
  "Tambaram",
  "T Nagar",
  "Anna Nagar",
  "Poonamallee",
  "Porur",
  "Guindy",
  "Adyar",
  "Mylapore"
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "10 Essential House Shifting Tips for Chennai Residents",
    slug: "house-shifting-tips-chennai",
    excerpt: "Moving in Chennai can be challenging due to traffic and narrow streets. Here are some tips to make it smoother.",
    content: "Full content about house shifting tips...",
    date: "May 15, 2024",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "2",
    title: "How to Estimate Your Moving Costs in Chennai",
    slug: "moving-cost-guide-chennai",
    excerpt: "Understand the factors that influence the price of packers and movers services in the city.",
    content: "Full content about moving costs...",
    date: "June 2, 2024",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "3",
    title: "Packing Safety Tips for Fragile Items",
    slug: "packing-safety-tips",
    excerpt: "Learn how to pack your delicate glassware and electronics for a safe journey.",
    content: "Full content about packing safety...",
    date: "June 20, 2024",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=800"
  }
];
