import React from 'react';
import './About.css';
import profileImage from './profile.jpg';
const About = () => {
  const technologies = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'Java',
    'Data Structures',
    'Algorithms',
    'HTML & CSS',
    'Git & GitHub'
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">01.</span> About Me
        </h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="animate-text">
              Hello! I'm <span className="highlight">Gaurav Prakash</span>, a passionate third-year Computer Science student at{' '}
              <span className="highlight">Quantum University</span> specializing in full-stack development with expertise in{' '}
              <span className="highlight">Java, DSA</span>, and the <span className="highlight">MERN stack</span>.
            </p>
            
            <p className="animate-text">
              My coding journey began when I built my first CRUD application in college. That experience ignited my passion for creating digital solutions that solve real-world problems.
            </p>
            
            <p className="animate-text">
              Currently, I'm focused on building responsive web applications while continuously expanding my knowledge in system design and cloud technologies.
            </p>
            
            <p className="animate-text">
              Here are some technologies I work with:
            </p>
            
            <div className="skills-container">
              <ul className="skills-list">
                {technologies.slice(0, Math.ceil(technologies.length/2)).map((skill, index) => (
                  <li key={index} className="skill-item">
                    <span className="skill-arrow">▹</span> {skill}
                  </li>
                ))}
              </ul>
              <ul className="skills-list">
                {technologies.slice(Math.ceil(technologies.length/2)).map((skill, index) => (
                  <li key={index} className="skill-item">
                    <span className="skill-arrow">▹</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-wrapper">
              <div className="image-overlay"></div>
              <img 
                src={profileImage}
                alt="Gaurav Prakash Profile"
                className="profile-image"
                loading="lazy"
              />
              <div className="image-border"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;