import {
  orce,
  DataAnnotation,
  hackreactor,
  ethica,
  fontana,
  favicon,
  get2gether,
} from "../assets/images";
import {
  car,
  python,
  postgresql,
  django,
  fastapi,
  contact,
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  react,
  summiz,
  tailwindcss,
  threejs,
  docker,
  typescript,
  remix,
  reactrouter,
  aws,
  express,
  graphql,
  puppeteer,
  giveawaygameplan,
  splitflap,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
  },
  {
    imageUrl: css,
    name: "CSS",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
  },
  {
    imageUrl: react,
    name: "React",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
  },
  {
    imageUrl: remix,
    name: "Remix",
  },
  {
    imageUrl: reactrouter,
    name: "React Router",
  },
  {
    imageUrl: express,
    name: "Express",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
  },
  {
    imageUrl: postgresql,
    name: "PostgreSQL",
  },
  {
    imageUrl: graphql,
    name: "GraphQL",
  },
  {
    imageUrl: docker,
    name: "Docker",
  },
  {
    imageUrl: aws,
    name: "AWS",
  },
  {
    imageUrl: puppeteer,
    name: "Puppeteer",
  },
  {
    imageUrl: python,
    name: "Python",
  },
  {
    imageUrl: django,
    name: "Django",
  },
  {
    imageUrl: fastapi,
    name: "Fastapi",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
  },
  {
    imageUrl: threejs,
    name: "Three.js",
  },
  {
    imageUrl: git,
    name: "Git",
  },
  {
    imageUrl: github,
    name: "GitHub",
  },
];

export const experiences = [
  {
    title: "Founding Software Engineer",
    company_name: "Giveaway Gameplan",
    icon: giveawaygameplan,
    iconBg: "#234660",
    date: "June 2025 - Present",
    points: [
      "Led full-stack development of a web platform that centralizes professional sports gameday giveaways across the major U.S. leagues",
      "Developed a Puppeteer scraper with optimized headless browser handling to extract and batch-upload data from 30+ sites in ~1 min",
      "Shipped an Express REST API with validation and parameterized SQL, supporting flexible GETs and bulk data ingestion to AWS RDS",
      "Engineered a Next.js/Tailwind UI, combining SSR/CSR with search param management for filterable listings and zero-reload navigation",
      "Containerized full stack with multi-stage Docker builds, publishing images to Docker Hub for deployment to EC2 via Docker Compose",
      "Routed DNS through Cloudflare to an NGINX reverse proxy on EC2 for SSL/TLS and DDoS protection, isolating web/API containers behind a single entrypoint, with RDS colocated in the same VPC for stronger security and low-latency access",
      "Coordinated directly with equity partners to translate business requirements into technical milestones for MVP delivery",
    ],
  },
  {
    title: "Software Engineer (Contract)",
    company_name: "Orcé Cosmetics",
    icon: orce,
    iconBg: "#152448",
    date: "December 2024 - Present",
    points: [
      "Rebuilt site from Gatsby SSG to Hydrogen/Remix SSR, cutting deployment time by 90% and enabling faster content updates",
      "Architected a headless storefront, fetching product/customer data via Shopify’s GraphQL APIs for seamless commerce functionality",
      "Optimized TTFB by parallelizing Remix loader queries, prioritizing critical data while streaming deferred content via Suspense/Await",
      "Created and mapped Storyblok-driven React components to CMS schemas, enabling non-technical teams to update content independently",
      "Contributed to app setup, debugging, and deployment, ensuring smooth releases to Netlify and stable Shopify and CMS connections",
      "Collaborated closely with a senior engineer while rapidly upskilling in TypeScript, GraphQL, Remix, Hydrogen, and Storyblok",
    ],
  },
  {
    title: "AI Software Engineering Tutor",
    company_name: "DataAnnotation.tech",
    icon: DataAnnotation,
    iconBg: "#000",
    date: "April 2024 - November 2024",
    points: [
      "Executed in-depth analysis of hundreds of model-generated JavaScript and Python scripts and plain text responses, evaluating correctness, functionality, and compliance with project requirements through rigorous manual testing",
      "Crafted sophisticated solutions to complex data queries and analyzed large datasets utilizing Pandas, NumPy, Matplotlib, Altair, Seaborn, and JupyterLab, ensuring data integrity through meticulous data cleaning, transformation, and normalization",
    ],
  },
  {
    title: "Regional Sales Manager",
    company_name: "Ethica Wines",
    icon: ethica,
    iconBg: "#dae6dc",
    date: "March 2019 - September 2023",
    points: [
      "Led all sales operations in Colorado and six other states, managing distribution growth, sales targets, and successful order fulfillment by working closely with clients’ senior leadership, sales, purchasing, and logistics teams",
      "Increased annual revenue by 12x in four years by establishing partnerships with new distributors, conducting frequent sales meetings, managing budgets, and participating in industry events",
    ],
  },
  {
    title: "Export Area Manager",
    company_name: "Fontanafredda",
    icon: fontana,
    iconBg: "#baadcc",
    date: "November 2017 - February 2019",
    points: [
      "Increased company YoY sales revenue by 26% across clients in the UK, Ireland, Belgium, Netherlands, Poland, Czech Republic, South Africa, Belarus, Hungary, Moldova, Uzbekistan, Slovakia, Slovenia",
      "Pioneered the opening of markets in Ireland, Poland, Belarus, and Kaliningrad by conducting sales negotiations with new partners, leading meetings, visiting key accounts",
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
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: splitflap,
    theme: "btn-back-black",
    name: "Split Flap App",
    description:
      "A lightweight, interactive split-flap display built with TypeScript, Vite, and Canvas API, inspired by classic mechanical departure boards. The project simulates the flipping animation of split-flap displays, supports dynamic text input, and includes audio effects powered by the Web Audio API.",
    link: "https://github.com/patricklaviola/Split-Flap-App",
  },
  {
    iconUrl: favicon,
    theme: "btn-back-black",
    name: "3D Portfolio Website (this site)",
    description:
      "An interactive React application that integrates 3D graphics using Three.js, @react-three/fiber, @react-three/drei, and GLTF models for high-quality visual elements. It features interactive components such as draggable 3D objects, implemented using react-use-gesture, and dynamic animations via Framer Motion. Styling was achieved with Tailwind CSS and email functionality is enabled by EmailJS. Custom hooks and components are utilized for specific functionalities, enhancing the interactive user experience.",
    link: "https://github.com/patricklaviola/3D-Portfolio-Website",
  },
  {
    iconUrl: get2gether,
    theme: "btn-back-pink",
    name: "Get2Gether",
    description:
      "A full-stack web application aimed at simplifying event planning for social gatherings by allowing authenticated users to create and manage friend groups and group events as well as communicate with other group members through a built-in group chat feature.",
    link: "https://github.com/patricklaviola/get-2-gether",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Car",
    description:
      "A robust full-stack web app designed for tracking, reporting, and managing vehicle inventory, sales, and service.",
    link: "https://github.com/patricklaviola/Vehicle-Management-System",
  },
];
