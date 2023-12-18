import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <div className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            <h1>Welcome to my space!</h1>
            <br />
            <div>Sure, you can use the navbar for easy navigation..</div>
            {/* <br /> */}
            <div>OR</div>
            {/* <br /> */}
            <div>You can take the black hole for a spin</div>
        </div>
    ),
    2: (
        <InfoBox
            text="I used to work with fine Italian wines, now I build web apps!"
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox
            text="I'm having a blast learning new technologies and building new apps. Take a look!"
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox
            text="Need a project done or looking for a dev? I'm just a few keystrokes away."
            link="/contact"
            btnText="Let's talk"
        />
    ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo