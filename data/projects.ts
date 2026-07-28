export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  category: string;
  year: string;
  role: string;
  image: string;
  color: string;
  liveUrl?: string;
  githubUrl?: string;
  problem: string;
  solution: string;
  impact: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    slug: "synth-dashboard",
    title: "Synth Dashboard",
    tagline: "Real-time analytics platform for SaaS metrics",
    description:
      "A high-performance analytics dashboard that processes millions of data points in real time, giving SaaS companies instant visibility into their key metrics.",
    techStack: ["Next.js", "TypeScript", "D3.js", "PostgreSQL", "Redis", "WebSocket"],
    category: "Web App",
    year: "2025",
    role: "Lead Frontend Engineer",
    image: "/projects/synth-dashboard.png",
    color: "#22d3ee",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    problem:
      "Existing analytics tools had 30+ second load times for large datasets, causing engineering teams to waste hours waiting for reports instead of iterating on their products.",
    solution:
      "Built a streaming data pipeline with WebSocket connections and incremental D3.js rendering, reducing perceived load time to under 200ms. Implemented virtual scrolling for table views handling 100k+ rows.",
    impact:
      "Adopted by 120+ teams within 3 months. Reduced average time-to-insight from 45 seconds to under 1 second. Featured in Product Hunt top 5.",
    gallery: ["/projects/synth-dashboard.png"],
  },
  {
    slug: "verde-marketplace",
    title: "Verde Marketplace",
    tagline: "Sustainable goods marketplace with carbon tracking",
    description:
      "An e-commerce platform that connects eco-conscious consumers with verified sustainable brands, featuring real-time carbon footprint tracking for every purchase.",
    techStack: ["React", "Node.js", "Stripe", "MongoDB", "Tailwind CSS", "Vercel"],
    category: "E-Commerce",
    year: "2024",
    role: "Full-Stack Developer",
    image: "/projects/verde-marketplace.png",
    color: "#4ade80",
    liveUrl: "https://example.com",
    problem:
      "Consumers wanting to shop sustainably had no centralized platform that verified environmental claims, leading to widespread greenwashing and consumer confusion.",
    solution:
      "Developed a verification system scoring brands on 12 sustainability metrics, integrated Stripe Connect for multi-vendor payments, and built a real-time carbon calculator that visualizes environmental impact.",
    impact:
      "Processed $2.4M in transactions in the first year. 94% customer satisfaction rate. Partnered with 85 verified sustainable brands across 12 categories.",
    gallery: ["/projects/verde-marketplace.png"],
  },
  {
    slug: "pulse-collaboration",
    title: "Pulse",
    tagline: "Async-first team collaboration tool",
    description:
      "A collaboration platform designed for distributed teams, prioritizing asynchronous communication with intelligent notification batching and context-aware updates.",
    techStack: ["Next.js", "TypeScript", "Prisma", "Supabase", "Framer Motion", "OpenAI"],
    category: "SaaS",
    year: "2025",
    role: "Technical Co-founder",
    image: "/projects/pulse-collaboration.png",
    color: "#a78bfa",
    liveUrl: "https://example.com",
    problem:
      "Remote teams were drowning in notifications and losing 2+ hours daily to context switching between Slack, email, and project management tools.",
    solution:
      "Created an intelligent notification engine that batches updates by priority and context, with AI-generated daily digests. Built a unified activity feed with threaded discussions that preserve conversational context.",
    impact:
      "Grew to 5,000 active users in 6 months. Users report 40% reduction in daily interruptions. Raised $1.2M seed round.",
    gallery: ["/projects/pulse-collaboration.png"],
  },
  {
    slug: "arcane-design-system",
    title: "Arcane UI",
    tagline: "Open-source design system with 50+ components",
    description:
      "A comprehensive, accessible design system built on Radix primitives with full TypeScript support, dark mode, and extensive documentation.",
    techStack: ["React", "TypeScript", "Radix UI", "Storybook", "Tailwind CSS", "MDX"],
    category: "Open Source",
    year: "2024",
    role: "Creator & Maintainer",
    image: "/projects/arcane-design-system.png",
    color: "#f472b6",
    githubUrl: "https://github.com",
    problem:
      "Most React component libraries force specific design opinions or lack accessibility compliance, making them unsuitable for production use in design-sensitive products.",
    solution:
      "Built 50+ unstyled, composable components on Radix primitives with full WCAG 2.1 AA compliance. Created an MDX-based documentation site with live code playgrounds and theme customization.",
    impact:
      "2,800+ GitHub stars. Used in production by 200+ companies. 98% accessibility score. Accepted into GitHub Accelerator program.",
    gallery: ["/projects/arcane-design-system.png"],
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "Redis", "GraphQL", "REST APIs"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Vercel", "AWS", "Docker", "Figma", "Git", "CI/CD"],
  },
  {
    title: "Practices",
    skills: ["Accessibility", "Performance Optimization", "Design Systems", "Testing", "Tech Writing"],
  },
];

export const experience = [
  {
    company: "Pulse",
    role: "Technical Co-founder",
    period: "2024 — Present",
    logo: "🚀",
  },
  {
    company: "Vercel",
    role: "Senior Frontend Engineer",
    period: "2022 — 2024",
    logo: "▲",
  },
  {
    company: "Stripe",
    role: "Software Engineer",
    period: "2020 — 2022",
    logo: "S",
  },
  {
    company: "Figma",
    role: "Frontend Engineer (Intern)",
    period: "2019",
    logo: "F",
  },
];

export const socialLinks = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  email: "hello@example.com",
};
