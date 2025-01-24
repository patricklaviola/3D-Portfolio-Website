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
  redux,
  summiz,
  tailwindcss,
  websocket,
  threejs,
  docker,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
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
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: fastapi,
    name: "Fastapi",
    type: "Backend",
  },
  {
    imageUrl: django,
    name: "Django",
    type: "Backend",
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
    imageUrl: docker,
    name: "Docker",
    type: "Containerization",
  },
  {
    imageUrl: postgresql,
    name: "PostgreSQL",
    type: "Database",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
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
    imageUrl: threejs,
    name: "Three.js",
    type: "Backend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: websocket,
    name: "Websocket",
    type: "Backend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Software Engineer (Contract)",
    company_name: "Orcé Cosmetics",
    icon: orce,
    iconBg: "#152448",
    date: "October 2024 - Present",
    points: [
      "Collaborated with lead engineer to overhaul company website for enhanced, on-the-fly synchronization with Shopify and Prismic",
      "Migrated an e-commerce platform from a Gatsby SSG architecture to a Remix-driven SSR framework, reducing deployment time by 90% via dynamic content delivery and selective data prefetching, eliminating pre-build asset generation bottlenecks",
      "Architected a modular headless system with a decoupled presentation layer, integrating Shopify Storefront API for product data and Prismic CMS for marketing content, enabling scalable, real-time API interactions",
      "Devised efficient client-side routing using Remix’s declarative, file-based structure with dynamic code-splitting and lazy-loading, enabling non-blocking navigation, seamless content hydration, and persistent application state across transitions",
      "Implemented nested and dynamic routing, using React Router’s Outlet to render sub-routes and programmatically extract URL parameters for data-driven logic, enabling modular component reuse and flexible URL structures for improved scalability",
      "Incorporated concurrent GraphQL queries into Remix loaders, prioritizing critical content for immediate rendering while deferring non-essential data through Suspense and Await for seamless promise resolution, reducing load times and boosting responsiveness",
    ],
  },
  {
    title: "AI Software Engineering Tutor",
    company_name: "DataAnnotation.tech",
    icon: DataAnnotation,
    iconBg: "#000",
    date: "February 2024 - Present",
    points: [
      "Executed in-depth analysis of hundreds of AI-generated JavaScript and Python scripts, evaluating correctness, functionality, and compliance with project requirements through rigorous manual and automated testing in various runtime environments",
      "Crafted sophisticated solutions to complex data queries and analyzed large datasets utilizing Pandas, NumPy, Matplotlib, Altair, Seaborn, and JupyterLab ensuring data integrity through rigorous data cleaning, transformation, and normalization",
      "Performed in-depth validation of API calls, ensuring reliable integration and execution by meticulously reviewing API documentation",
      "Discerned subtle differences in explanations and insights across responses to improve the model’s learning feedback loop",
    ],
  },
  {
    title: "Software Engineer (Contract)",
    company_name: "Get2gether",
    icon: get2gether,
    iconBg: "#8561c5",
    date: "2023",
    points: [
      "Produced a high-performance React SPA with integrated user session management, React Router for client-side routing, modular components styled with Bootstrap, React Hooks, and seamless backend communication via asynchronous Fetch API requests",
      "Orchestrated a multi-container architecture with PostgreSQL, FastAPI, and Node.js services, enabling secure service communication, persistent storage, hot-reloading, automated database migrations, CORS management, and multi-stage builds for seamless deployment",
      "Constructed a normalized database schema with referential integrity and cascading deletes for scalability and consistency",
      "Abstracted database logic to a repository layer for maintainability, optimizing PostgreSQL interactions through connection pooling and efficient SQL execution with Pydantic for data validation and transformation",
      "Encapsulated RESTful endpoints in modular routers, leveraging dependency injection for repository patterns and JWT authentication",
      "Automated CI/CD with GitLab, using Docker and Cirrus CLI to streamline testing and deploy applications to Google Cloud VMs",
      "Built unit tests with dependency overrides to simulate authentication and validate API responses in isolated mock environments",
      "Drove collaboration in an Agile team, managing user stories and promoting iterative development through standups and merge requests",
    ],
  },
  // {
  //   title: "Full Stack Software Engineering Student",
  //   company_name: "Hack Reactor by Galvanize",
  //   icon: hackreactor,
  //   iconBg: "#accbe1",
  //   date: "June 2023 - November 2023",
  //   points: [
  //     "Explored Domain Driven Design, built scalable and fault-tolerant applications, and created microservices using JavaScript and React. Participated in a team project to build a complex web application, employing Agile development practices",
  //     "Gained experience in building near-real-time applications with WebSockets and FastAPI. Worked with various data structures and managed different types of data using PostgreSQL",
  //     "Implemented continuous integration and delivery pipelines using GitLab Pipelines. Developed a web application utilizing cloud-native services, focusing on robustness and scalability in a cloud environment",
  //     "Developed a full-stack web application using Python, Django, HTML, CSS, and relational databases. Designed and implemented both front-end and back-end components, integrating server-side logic with a user-friendly interface",
  //   ],
  // },
  {
    title: "Regional Sales Manager",
    company_name: "Ethica Wines",
    icon: ethica,
    iconBg: "#dae6dc",
    date: "Feb 2019 - July 2023",
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
    date: "Aug 2017 - Dec 2018",
    points: [
      "Grew overall sales revenue by 26% across clients in the UK, Ireland, Belgium, Netherlands, Poland, Czech Republic, South Africa, Belarus, Hungary, Moldova, Uzbekistan, Slovakia, Slovenia",
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
    iconUrl: favicon,
    theme: "btn-back-black",
    name: "3D PORTFOLIO",
    description:
      "An interactive React application that integrates 3D graphics using Three.js, @react-three/fiber, @react-three/drei, and GLTF models for high-quality visual elements. It features interactive components such as draggable 3D objects, implemented using react-use-gesture, and dynamic animations via Framer Motion. Styling was achieved with Tailwind CSS and email functionality is enabled by EmailJS. Custom hooks and components are utilized for specific functionalities, enhancing the interactive user experience.",
    link: "https://github.com/patricklaviola/3D-Portfolio-Website",
  },
  // {
  //   iconUrl: get2gether,
  //   theme: "btn-back-pink",
  //   name: "GET2GETHER",
  //   description:
  //     "A full-stack web application aimed at simplifying event planning for social gatherings by allowing authenticated users to create and manage friend groups and group events as well as communicate with other group members through a built-in group chat feature.",
  //   link: "https://gitlab.com/cappuccino-coders/get-2-gether",
  // },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Car",
    description:
      "A robust full-stack web app designed for tracking, reporting, and managing vehicle inventory, sales, and service.",
    link: "https://gitlab.com/patrick.laviola/project-beta",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-green",
    name: "Conference Management System",
    description:
      "A web application that serves as a hub for managing various conferences, conference attendees, and events.",
    link: "https://gitlab.com/patrick.laviola/conference-go",
  },
];
