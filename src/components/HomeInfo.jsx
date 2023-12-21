import React, { useEffect, useState } from 'react';
import { Tilt } from 'react-tilt';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import { motion } from 'framer-motion';
import { fadeIn, fadeOut } from '../utils/motion';



const InfoBox = ({ text, link, btnText }) => (
    <Tilt 
        options={{ max: 20, scale: 1, speed: 300, glare: true, 'max-glare': 0.9 }}
    >
        <motion.div
            initial="hidden"
            animate="show"
            variants={fadeIn("down", "spring", 0.1, 3)}
            className='info-box w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[150px] flex justify-evenly items-center'>
                <div className='text-center'>{text}</div>
                {link && btnText && (
                    <Link to={link} className='neo-brutalism-white neo-btn'>
                        {btnText}
                        <img src={arrow} className='w-4 h-4 object-contain' />
                    </Link>
                )}
            </div>
        </motion.div>
        <div className='mt-8 w-full flex justify-center items-center'>
            <div className='w-[30px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
                animate={{
                    y: [0, 24, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                }}
                className='w-2 h-3 rounded-full bg-secondary mb-1'
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
                        <strong className='green-pink-gradient-text'> Scroll </strong>↕️
                        or
                        <strong className='green-pink-gradient-text'> long-press arrow keys </strong> ↔️ ↕️
                        to see more content.
                        </em>
                        <br />
                        <br />
                        🤚
                        <em>
                            <strong className='green-pink-gradient-text'> Grab </strong>,
                            <strong className='green-pink-gradient-text'> drag </strong>, and
                            <strong className='green-pink-gradient-text'> release </strong>
                            the Sun to bounce it around the screen.
                        </em>
                    </span>
                </div>
            }
            />
            ),
            2: (
                <InfoBox
                text={
                    <div>
                        I used to travel the world selling <span className='green-pink-gradient-text'>fine Italian wines</span>🍷                                
                        <br />
                        <br />
                        Now I'm a <span className='green-pink-gradient-text'>full stack web developer </span>💻
                    </div>
                }
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

export default HomeInfo;