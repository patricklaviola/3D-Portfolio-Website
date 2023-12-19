import React, { useEffect, useState } from 'react';
import { Tilt } from 'react-tilt';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import { motion } from 'framer-motion';
import { fadeIn, fadeOut } from '../utils/motion';



const InfoBox = ({ text, link, btnText }) => (
    <Tilt options={{ max: 20, scale: 1, speed: 300, glare: true, 'max-glare': 0.5 }}>
        <motion.div
            initial="hidden"
            animate="show"
            variants={fadeIn("down", "spring", 0.1, 0.9)}
            className='info-box w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
                <div className='font-medium sm:text-xl text-center'>{text}</div>
                {link && btnText && (
                    <Link to={link} className='neo-brutalism-white neo-btn'>
                        {btnText}
                        <img src={arrow} className='w-4 h-4 object-contain' />
                    </Link>
                )}
            </div>
        </motion.div>
        <div className='mt-10 w-full flex justify-center items-center'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
                animate={{
                    y: [0, 24, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
            </div>
        </div>
    </Tilt>
)

const renderContent = {
    1: (
        <InfoBox
            text={
                <div>
                    <strong>HELLO, WORLD! I'm <span className='green-pink-gradient-text'>Patrick</span></strong>
                    <br />
                    <br />
                    <span>
                        Welcome to my interactive, 3D portfolio website.
                    </span>
                    <br />
                    <br />
                    <span style={{ fontSize: 'smaller' }}>
                        <em>
                            Be sure to take the <strong className='green-pink-gradient-text'>black hole </strong> for a spin OR bounce the <strong className='green-pink-gradient-text'>Sun </strong> around the screen.                                
                        </em>
                    </span>
                </div>
            }
        />
    ),
    2: (
        <InfoBox
            text="I used to travel the world selling fine Italian wines, now I'm a full-stack web developer!"
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox
            text="I'm avidly learning new technologies and working on new projects"
            link="/projects"
            btnText="See my work"
        />
    ),
    4: (
        <InfoBox
            text="Looking for a dev? I'm just a few keystrokes away."
            link="/contact"
            btnText="Let's connect"
        />
    ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo