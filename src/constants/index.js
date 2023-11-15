import { udemy } from "../assets/images";
import {
  contact,
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  react,
  sass,
  tailwindcss,
  typescript,
  threejs,
  figma,
  chakra,
  estore,
  jotion,
  netflex,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: figma,
    name: "Figma",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: threejs,
    name: "Threejs",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: chakra,
    name: "Chakra-UI",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Freelance Developer",
    company_name: "Udemy",
    icon: udemy,
    iconBg: "#accbe1",
    date: "Apr 2022 - Mar 2023",
    points: [
      "Working on the development and upkeep of web applications utilizing React.js and associated technologies.",
      "Engaging with interdisciplinary teams, such as designers, product managers, and fellow developers, to craft top-tier products.",
      "Executing responsive design and verifying compatibility across different browsers.",
      "Taking part in code evaluations and offering valuable input to fellow developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/igorkukric",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://linkedin.com/in/igorkukric",
  },
];

export const projects = [
  {
    iconUrl: estore,
    theme: "btn-back-red",
    name: "New Line Shop",
    description:
      "Shop confidently at New Line Shop with Next.js for speed, Stripe for security, Clerk for ease, and PrismaDB for efficiency. Your satisfaction is our priority.",
    link: "https://newlineshop.vercel.app/",
  },
  {
    iconUrl: jotion,
    theme: "btn-back-green",
    name: "Jotion",
    description:
      "Jotion combines Next.js for speed, Convex for database management, and Tailwind/Shadcn for aesthetics, providing users with a powerful platform for effortless text and media creation, editing, and management.",
    link: "https://jotion-tan.vercel.app/",
  },
  {
    iconUrl: netflex,
    theme: "btn-back-blue",
    name: "NetflEx",
    description:
      "App provides a vast library of movies and TV shows, personalized recommendations, and an intuitive interface for an exceptional streaming experience.",
    link: "https://movie-app-react-firebase-pied.vercel.app/",
  },
];
