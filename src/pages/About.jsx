import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { skills, experiences } from "../constants";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hi! I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Patrick
        </span>
      </h1>
      <div className="mt-5 flex-col gap-3 text-slate-500">
        <p>
          Software engineer specializing in TypeScript, React, Remix / React
          Router v7, Next.js, Node / Express, and SQL/NoSQL databases.
        </p>
        <br />
        <p>
          I enjoy building full-stack applications and architecting clean,
          scalable systems, while also exploring creative technologies like the
          HTML5 Canvas API and Three.js to turn ideas into interactive
          experiences.
        </p>
        <br />
        <p>
          Recently, I’ve been focused on server-side rendering, web scraping
          with Puppeteer, and deploying applications on AWS (EC2, RDS) with the
          help of Docker, NGINX, and Cloudflare.
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="relative group block-container w-20 h-20"
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
              <span className="absolute bottom-full mb-5 hidden group-hover:block bg-slate-600 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3 className="subhead-text">My Experience</h3>
        <div className="mt-5 flex-col gap-3 text-slate-500"></div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
