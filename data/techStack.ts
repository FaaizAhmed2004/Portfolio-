import type { TechCategory } from "../types";

export const techCategories: TechCategory[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Authentication","Fast APIs","Python","GraphQL"],
  },
  {
    title: "Database",
    items: ["MongoDB","MYSQL","Postgresql","VectorDB","Neo4j"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Docker" , "Claude"],
  },
  {
    title: "Others",
    items: ["JWT", "Three.js", "Framer Motion", "GSAP", "Responsive Design"],
  },
];
