export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  github: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive analytics dashboard for online retailers with real-time data visualization and inventory management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "AI Chat Application",
    description: "Modern chat interface powered by OpenAI API, featuring markdown support, code highlighting, and conversation history.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
    technologies: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL"],
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Task Management Tool",
    description: "Collaborative task manager with drag-and-drop boards, team assignments, and deadline tracking.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
    technologies: ["Vue.js", "Firebase", "Pinia", "Sass"],
    link: "#",
    github: "#"
  }
];
