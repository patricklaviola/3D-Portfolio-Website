import React from "react";
import { Tilt } from "react-tilt";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const tiltOptions = {
  reverse: true, // reverse the tilt direction
  max: 25, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, lower = more extreme tilt
  scale: 1, // 2 = 200%, 1.5 = 150%, etc
  speed: 300, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit
  axis: null, // Restrict the tilt direction (null = both, 'x' or 'y')
  reset: true, // Reset tilt on exit
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit
  glare: true, // Enable glare
  "max-glare": 0.9, // Set glare intensty (0 to 1)
};

const InfoBox = ({ text, link, btnText }) => (
  <Tilt options={tiltOptions}>
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeIn("down", "spring", 0.1, 1)}
      className="info-box w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-5 min-h-[150px] flex justify-evenly items-center">
        <div className="text-center">{text}</div>
        {link && btnText && (
          <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
          </Link>
        )}
        <div className="top-container">
          <div className="w-[10%] flex justify-center items-center ps-5">
            <div className="w-[30px] h-[60px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-2 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </div>
          <div className="container">
            <div className="top-box">
              <motion.div
                animate={{
                  y: [0, 3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="dot"
              />
            </div>
            <div className="row">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="box">
                  <motion.div
                    animate={{
                      y: [0, 3, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    className="dot"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const renderContent = {
  1: (
    <InfoBox
      text={
        <div>
          <strong>
            HELLO, WORLD! I'm{" "}
            <span className="green-pink-gradient-text">Patrick</span>
          </strong>
          <br />
          <br />
          <span>Welcome to my interactive, 3D portfolio website.</span>
          <br />
          <br />
          <span style={{ fontSize: "smaller" }}>
            <em>
              <strong className="green-pink-gradient-text"> Scroll </strong>
              or
              <strong className="green-pink-gradient-text">
                {" "}
                long-press arrow keys{" "}
              </strong>
              to see more content.
            </em>
            <br />
            <br />
            🤚
            <em>
              <strong className="green-pink-gradient-text"> Grab </strong>,
              <strong className="green-pink-gradient-text"> drag </strong>, and
              <strong className="green-pink-gradient-text"> release </strong>
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
          I travelled the world selling{" "}
          <span className="green-pink-gradient-text">fine Italian wines</span>🍷
          <br />
          <br />
          Now I'm a{" "}
          <span className="green-pink-gradient-text">
            full stack software engineer{" "}
          </span>
          💻
        </div>
      }
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text={
        <div>
          I'm avidly learning new technologies
          <br />
          <br />
          and working on new{" "}
          <span className="green-pink-gradient-text">projects</span>
        </div>
      }
      link="/projects"
      btnText="See my work"
    />
  ),
  4: (
    <InfoBox
      text={
        <div>
          Looking for a developer?
          <br />
          <br />
          I'm just a few keystrokes away.
        </div>
      }
      link="/contact"
      btnText="Let's connect"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
