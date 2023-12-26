import React from 'react'
import { FaLinkedin, FaGithubSquare, FaGitlab } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer bg-slate">
        <div className='footer-container'>
            <div className="footer-content">
                <p className="footer-follow">Follow me</p>
                <div className="footer-icons">
                    <a href="https://www.linkedin.com/in/patricklaviola/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="social-icon" />
                    </a>
                    <a href="https://github.com/patricklaviola" target="_blank" rel="noopener noreferrer">
                        <FaGithubSquare className="social-icon" />
                    </a>
                    <a href="https://gitlab.com/patrick.laviola" target="_blank" rel="noopener noreferrer">
                        <FaGitlab className="social-icon" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;