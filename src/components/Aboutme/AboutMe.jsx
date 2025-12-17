import React from 'react';
import { motion } from 'framer-motion';
import './AboutMe.scss';

const AboutMe = () => {
  const skills = {
    development: ["HTML5 & CSS3", "JavaScript (ES6+)", "React.js", "Tailwind & Bootstrap", "Git & GitHub"],
    design: ["Adobe Photoshop", "Adobe Illustrator", "Affinity Designer", "UI/UX Layouts", "Branding"]
  };

  // Animation Variants
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.3 } 
    }
  };

  const itemVars = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="about-container">
      {/* Background Decorative Elements */}
      <div className="bg-glow"></div>
      
      <motion.div 
        className="wrapper"
        variants={containerVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <header className="header">
          <motion.p variants={itemVars} className="about-label">About Me —</motion.p>
          <motion.h1 variants={itemVars} className="name">Tanvir Islam Fahad</motion.h1>
          <motion.div variants={itemVars} className="divider"></motion.div>
          <motion.p variants={itemVars} className="title">Front-End Developer & Graphic Designer</motion.p>
        </header>

        <div className="content-grid">
          {/* Bio Section */}
          <motion.div variants={itemVars} className="bio-card">
            <h2 className="section-heading">My Creative Journey</h2>
            <p className="bio-text">
              Hello! I'm <span className="highlight-name">Tanvir</span>, a creator who thrives at the intersection of 
              <span className="highlight"> clean code </span> and 
              <span className="highlight"> impactful design</span>. 
            </p>
            <p className="bio-text secondary">
              With my dual background, I bridge the gap between aesthetics and functionality. 
              My goal is always the same: <span className="accent">excellence.</span>
            </p>
          </motion.div>

          {/* Skills Section */}
          <div className="skills-layout">
            <motion.div variants={itemVars} className="skill-glass-box">
              <div className="accent-bar"></div>
              <h3>Development</h3>
              <ul>
                {skills.development.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVars} className="skill-glass-box">
              <div className="accent-bar orange"></div>
              <h3>Design Tools</h3>
              <ul>
                {skills.design.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;