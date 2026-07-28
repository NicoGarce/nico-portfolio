export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  category: string;
  year: string;
  role: string;
  image?: string;
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
    slug: "boss-fight",
    title: "Boss Fight",
    tagline: "Turn-based web game — a job interview modeled after Pokémon",
    description:
      "A turn-based battle game where you play as a candidate fighting through the absurdities of a job interview. Each interviewer is a boss with unique attacks — dodge buzzwords, counter with charisma, and survive the final round.",
    techStack: ["Vue.js", "PostgreSQL", "TypeScript", "Tailwind CSS", "Vercel"],
    category: "Web Game",
    year: "2025",
    role: "Creator & Developer",
    color: "#f97316",
    liveUrl: "https://boss-fight-wheat.vercel.app/",
    githubUrl: "",
    problem:
      "Job interview prep is stressful, boring, and disconnected from the actual experience. Traditional mock interviews don't capture the chaotic, multi-phase nature of real interview loops.",
    solution:
      "Built a Pokémon-style turn-based RPG where each interview stage is a boss battle. Players build a character, dodge HR jargon attacks, and counter with career achievements. The game teaches interview dynamics through play.",
    impact:
      "Players report feeling more confident about interviews after a few rounds. The game's shareable boss-fight screenshots went viral on social media, driving thousands of plays within the first week.",
    gallery: [],
  },
  {
    slug: "uphsl",
    title: "UPHSL Laguna",
    tagline: "Official website for the University of Perpetual Help System Laguna",
    description:
      "The main institutional website for the UPHSL Laguna campus, serving as the digital front door for students, faculty, and applicants. Handles enrollment information, academic catalogs, news, and campus life content.",
    techStack: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "Bootstrap", "Apache"],
    category: "University Website",
    year: "2024",
    role: "Web Developer",
    color: "#f59e0b",
    liveUrl: "https://uphsl.edu.ph/",
    problem:
      "The university's existing website was outdated, hard to navigate, and didn't properly serve the needs of prospective students, current enrollees, and the academic community on the Laguna campus.",
    solution:
      "Rebuilt the full site with PHP and MySQL for dynamic content management, integrated enrollment guides, faculty directories, news feeds, and a responsive design that works across devices used by the campus community.",
    impact:
      "Serves as the primary online presence for the Laguna campus, handling thousands of monthly visits from students checking enrollment schedules, academic calendars, and university announcements.",
    gallery: [],
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
    color: "#a78bfa",
    problem:
      "Remote teams were drowning in notifications and losing 2+ hours daily to context switching between Slack, email, and project management tools.",
    solution:
      "Created an intelligent notification engine that batches updates by priority and context, with AI-generated daily digests. Built a unified activity feed with threaded discussions that preserve conversational context.",
    impact:
      "Grew to 5,000 active users in 6 months. Users report 40% reduction in daily interruptions. Raised $1.2M seed round.",
    gallery: [],
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
    color: "#f472b6",
    githubUrl: "",
    problem:
      "Most React component libraries force specific design opinions or lack accessibility compliance, making them unsuitable for production use in design-sensitive products.",
    solution:
      "Built 50+ unstyled, composable components on Radix primitives with full WCAG 2.1 AA compliance. Created an MDX-based documentation site with live code playgrounds and theme customization.",
    impact:
      "2,800+ GitHub stars. Used in production by 200+ companies. 98% accessibility score. Accepted into GitHub Accelerator program.",
    gallery: [],
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "VueJs", "NextJs", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend & Database",
    skills: ["PHP", "Laravel", "MySQL", "WordPress", "cPanel"],
  },
  {
    title: "Hosting & DevOps",
    skills: ["Vercel", "Render", "cPanel", "Git"],
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
  github: "https://github.com/NicoGarce",
  linkedin: "https://www.linkedin.com/in/nico-roell-garce-100581322/",
  twitter: "https://twitter.com",
  email: "garcenicoroell@gmail.com",
};
