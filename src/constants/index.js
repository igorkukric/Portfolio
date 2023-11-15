import { udemy, facebook, instagram } from "../assets/images";
import {
  email,
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  prisma,
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
  gym,
  car,
  weather,
  threads,
  food
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
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
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: prisma,
    name: "PrismaDB",
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
    imageUrl: chakra,
    name: "Chakra-UI",
    type: "Frontend",
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
    imageUrl: figma,
    name: "Figma",
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
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Online Marketing Manager",
    company_name: "Facebook",
    icon: facebook,
    iconBg: "#accbe1",
    date: "Mar 2012 - Aug 2016",
    points: [
      "Over four and a half years as an online Facebook manager, I mastered dynamic social media landscapes.",
      "Crafting engaging content and implementing targeted marketing strategies, I played a pivotal role in enhancing clients' online presence.",
      "Proficient in analyzing Facebook algorithms and leveraging data analytics, I optimized campaigns for peak performance.",
      "Beyond technical aspects, I developed effective communication skills, fostering meaningful connections within online communities.",
    ],
  },
  {
    title: "Online Marketing Specialist",
    company_name: "Instagram",
    icon: instagram,
    iconBg: "#accbe1",
    date: "Sep 2016 - Nov 2023",
    points: [
      "Over the past 7 years, I've cultivated extensive experience as an Online Marketing Specialist specializing in Instagram.",
      "My role involved developing and implementing targeted marketing campaigns, contributing to the enhanced online presence of various clients and businesses on the Instagram platform.",
      "A significant aspect of my success has been my adeptness in analyzing Instagram algorithms and utilizing data analytics to optimize strategies for maximum engagement and visibility.",
      "Going beyond technical expertise, I've excelled in effective communication, building lasting relationships, and fostering engagement within the diverse communities present on Instagram.",
    ],
  },
  {
    title: "Frontend Developer",
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
    iconUrl: email,
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
  {
    iconUrl: gym,
    theme: "btn-back-pink",
    name: "Gym Exercises",
    description:
      "The Gym Exercises React App is a web application built with React, utilizing Material-UI for the user interface. The app allows users to browse and learn about various gym exercises, along with watching video demonstrations fetched from YouTube.",
    link: "https://gym-exercisesappigorkukric.netlify.app/",
  },
  {
    iconUrl: car,
    theme: "btn-back-black",
    name: "Car Showcase",
    description:
      "The CarShowcase App is a web application built with NEXT.js, Tailwind CSS, allowing users to browse a collection of cars, fetch images for each car, search for specific cars, and benefit from autocomplete functionality to streamline their browsing experience.",
    link: "https://car-showcase-two-rho.vercel.app/",
  },
  {
    iconUrl: weather,
    theme: "btn-back-yellow",
    name: "Weather Forecast",
    description:
      "This application allows users to check the weather forecast for the next 5 days for various cities, along with live time zone information for each city. Technologies used: Plain JavaScript,HTML,CSS.",
    link: "https://weather-forecast-app-rosy.vercel.app/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Threads",
    description:
      "Real-time chat in a MERN/Clerk Next.js app streamlines workplace communication, enhancing productivity and team connectivity.",
    link: "https://threads-mern-clerk.vercel.app/",
  },
  {
    iconUrl: food,
    theme: "btn-back-pink",
    name: "Food Recipe",
    description:
      "Welcome to the Plain JavaScript Food Recipe App. Discover and save your favorite recipes with ease. Enjoy detailed instructions and video support for a delightful cooking experience. Let's dive in!",
    link: "https://food-recipe-app-pearl.vercel.app/",
  },
];
