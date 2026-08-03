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
    title: "University of Perpetual Help System Laguna",
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
    slug: "rides-tayo",
    title: "Rides Tayo",
    tagline: "Ride together, hear each other — a modern ride-sharing platform",
    description:
      "A ride-sharing platform designed to connect drivers and passengers in a simple, reliable way. Ride together, hear each other.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    category: "Web App",
    year: "2025",
    role: "Developer",
    color: "#34d399",
    liveUrl: "https://rides-tayo.vercel.app/",
    problem:
      "Commuters need a straightforward way to book rides and connect with drivers without the friction of complex platforms.",
    solution:
      "Built a clean, easy-to-use ride-sharing web app where passengers can find rides and drivers can manage trips, all in one place.",
    impact:
      "Provides a lightweight, accessible ride-sharing experience deployed and accessible to anyone online.",
    gallery: [],
  },
  {
    slug: "hrms",
    title: "HRMS",
    tagline: "Human resource management system — manage your workforce with confidence",
    description:
      "A human resource management system that helps organizations manage their workforce with confidence — from employee records to day-to-day HR operations.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    category: "Web App",
    year: "2025",
    role: "Developer",
    color: "#60a5fa",
    liveUrl: "https://hrms-seven-silk.vercel.app/",
    problem:
      "Managing employee data and HR processes with spreadsheets is error-prone and hard to scale as a team grows.",
    solution:
      "Built an HRMS web app with a secure sign-in flow and clean interface for managing employee and workforce information.",
    impact:
      "Gives organizations a central, confident way to handle HR operations from anywhere.",
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
    company: "University of Perpetual Help System Laguna",
    role: "Web Administrator",
    period: "Sep 2025 — Present",
    description:
      "Website development for JONELTA System campuses using PHP, MySQL, and cPanel. Manage Google, Microsoft, Moodle, and Information System accounts. Build in-house systems and deploy student project web applications. Also produce multimedia content with Canva, Photoshop, and Premiere Pro.",
  },
  {
    company: "J'Diamond Car Rental Services Inc.",
    role: "TMD Staff",
    period: "Mar 2025 — Aug 2025",
    description:
      "Website development using WordPress, hardware and software troubleshooting and repair, multimedia editing, social media management, CCTV monitoring, and photography and videography.",
  },
  {
    company: "OrangeApps Inc.",
    role: "Junior Software Engineer",
    period: "Sep 2024 — Jan 2025",
    description:
      "Developed features for in-house School Management Systems using Laravel, MySQL, and JavaScript for schools across the Philippines.",
  },
  {
    company: "Pamantasan ng Lungsod ng Muntinlupa",
    role: "Web Developer Intern",
    period: "Oct 2023 — May 2024",
    description:
      "Built an Internship Placement System using PHP, MySQL, and Bootstrap. Responsible for testing, debugging, and managing weekly tasks for a two-man team.",
  },
];

export const socialLinks = {
  github: "https://github.com/NicoGarce",
  linkedin: "https://www.linkedin.com/in/nico-roell-garce-100581322/",
  email: "garcenicoroell@gmail.com",
};
