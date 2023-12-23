import { hackreactor, ethica, fontana } from "../assets/images";
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
    snapgram,
    summiz,
    tailwindcss,
    websocket,
    threejs,
    docker
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
        title: "Full Stack Software Engineering Student",
        company_name: "Hack Reactor by Galvanize",
        icon: hackreactor,
        iconBg: "#accbe1",
        date: "June 2023 - November 2023",
        points: [
            "Explored Domain Driven Design, built scalable and fault-tolerant applications, and created microservices using JavaScript and React. Participated in a team project to build a complex web application, employing Agile development practices.",
            "Gained experience in building near-real-time applications with WebSockets and FastAPI. Worked with various data structures and managed different types of data using PostgreSQL.",
            "Implemented continuous integration and delivery pipelines using GitLab Pipelines. Developed a web application utilizing cloud-native services, focusing on robustness and scalability in a cloud environment.",
            "Developed a full-stack web application using Python, Django, HTML, CSS, and relational databases. Designed and implemented both front-end and back-end components, integrating server-side logic with a user-friendly interface.",
        ],
    },
    {
        title: "Regional Sales Manager",
        company_name: "Ethica Wines",
        icon: ethica,
        iconBg: "#dae6dc",
        date: "Feb 2019 - July 2023",
        points: [
            "Led all sales operations in Colorado and six other states, managing distribution growth, sales targets, and successful order fulfillment by working closely with clients’ senior leadership, sales, purchasing, and logistics teams.",
            "Increased annual revenue by 12x in four years by establishing partnerships with new distributors, conducting frequent sales meetings, managing budgets, and participating in industry events.",
        ],
    },
    {
        title: "Export Area Manager",
        company_name: "Fontanafredda",
        icon: fontana,
        iconBg: "#baadcc",
        date: "Aug 2017 - Dec 2018",
        points: [
            "Grew overall sales revenue by 26% across clients in the UK, Ireland, Belgium, Netherlands, Poland, Czech Republic, South Africa, Belarus, Hungary, Moldova, Uzbekistan, Slovakia, Slovenia.",
            "Pioneered the opening of markets in Ireland, Poland, Belarus, and Kaliningrad by conducting sales negotiations with new partners, leading meetings, visiting key accounts.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'GET2GETHER',
        description: 'A full-stack web application aimed at simplifying event planning for social gatherings by allowing authenticated users to create and manage friend groups and group events as well as communicate with other group members through a built-in group chat feature.',
        link: 'https://gitlab.com/cappuccino-coders/get-2-gether',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Vehicle Management System',
        description: 'A robust full-stack web app designed for tracking, reporting, and managing vehicle inventory, sales, and service.',
        link: 'https://gitlab.com/patrick.laviola/project-beta',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-green',
        name: 'Conference Management System',
        description: 'A web application that serves as a hub for managing various conferences, conference attendees, and events.',
        link: 'https://gitlab.com/patrick.laviola/conference-go',
    },
];