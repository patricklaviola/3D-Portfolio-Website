import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { skills, experiences } from '../constants';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Patrick</span>
      </h1>
      <div className='mt-5 flex-col gap-3 text-slate-500'>
        <p>
          Bringing a solid academic foundation in languages like Python 3, JavaScript ES6+, and frameworks such as FastAPI, React, and Django 4, I look forward to embarking on an exciting journey as a Full-Stack Software Engineer. My diverse experience, including a rich background in sales and team leadership, has equipped me with unique problem-solving skills and a deep understanding of client needs.
        </p>
        <br />
        <p>
          Driven by a profound passion for technology and an eagerness to contribute innovative solutions to the tech industry, my academic knowledge and hands-on approach position me as a valuable asset in any software engineering role. I am eager to leverage my skills and contribute to exciting innovations in the field of software development.
        </p>
        <br />
        <p>
          If you're seeking a dedicated and innovative software engineer with a unique blend of technical acumen and interpersonal skills, feel free to message me here on LinkedIn and explore my work at gitlab.com/patricklaviola.
        </p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div key={skill.name} className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img 
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>            
          ))}
        </div>
      </div>
      <div className='py-16'>
        <h3 className='subhead-text'>Experience</h3>  
        <div className='mt-5 flex-col gap-3 text-slate-500'>
          <p>
            ***PLACEHOLDER*** write one sentence summarizing experience:
          </p>
        </div>
        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                    {experience.company_name}
                  </p>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className='border-slate-200'/>
      <CTA />
    </section>
  )
}

export default About;