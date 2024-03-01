import React from 'react';
import './portfolio.css';

function Portfolio2 () {
  const projects = [
    {
      title: 'Youtube-Clone-Website using HTML & CSS.',
      description: 'Created a dynamic YouTube clone using ReactJS, showcasing advanced UI/UX features, seamless video playback, and responsive design. Applied modern web development principles for an engaging user experience.',
      link: 'https://youtubeclonekarthi.netlify.app',
    },
    {
      title: 'Amazon-Clone-Website using HTML & CSS.',
      description: 'Crafted Amazon-inspired e-commerce page using HTML and CSS, showcasing keen eye for visual design and core web development skills.',
      link: 'https://amazonclonepage.netlify.app',
    },
    {
      title:'Photography-Website using HTML, CSS & JavaScript.',
      description: 'Passionate about photography and web development! 📷💻 Ive designed and developed a stunning photography website using HTML, CSS, and JavaScript. With a platform that seamlessly showcases my photography skills while demonstrating proficiency in front-end web development. #PhotographyWebsite #WebDevelopment',
      link: 'https://karthiksantphotography.netlify.app',
    },
    {
      title:'iPhone text message app using HTML, CSS & JavaScript.',
      description: 'Excited to share my latest project – an innovative iPhone text message app brought to life with HTML, CSS, and JavaScript using web development skills, Ive created a dynamic and responsive platform that replicates the familiar iOS messaging experience.',
      link: 'https://iphonetextmessage.netlify.app',
    },
    // Add more projects as needed
  ];

  const skills = ['JAVA','ReactJS', 'JavaScript', 'HTML', 'CSS', 'SQL', 'J2EE','JDBC','HIBERNATE','SERVLETS','SPRINGBOOT', 'Responsive Design','PostMan'];

  const education = [
    {
      
      school: ' Sreenidhi Institute of Science & Technology',
      degree: 'Bachelor of Technology',
      year: '8.7 CGPA, 2018 - 2021',
    },
    {
      school: 'Sri Sangameshwara Govt Polytechnic College',
      degree: 'Diploma',
      year: '91% , 2014- 2017',
    },
    
  ];

  const workExperience = [
    {
      title: 'Software Developer Intern',
      company: 'Tech Company ABC',
      year: 'Summer 2021',
      description: 'Worked on developing and maintaining web applications.',
    },
  ];

  return (  
    //direct code
    <div className="portfolio">
      
      <header>
        <h2>KARTHIK GAMMATH</h2>
        <p>Full Stack Developer</p>
      </header>

      <section className="introduction">
        <h2>About Me</h2>
        <p>
        Passionate recent graduate with a Bachelor of Technology degree,
         seeking an entry-level position in the IT industry to enhance my
          knowledge and proficient IT technical skills that would provide 
          transparency and productivity in the organization. Eager to learn
           and contribute to a dynamic company culture.
        </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-list">
               {projects.map((project, index) => (
                    <div key={index} className="project">
                              <h3>{project.title}</h3>
                              <p>{project.description}</p>
                              <a href={project.link} target="_blank" rel="noopener noreferrer">
                                View Project
                              </a>
                    </div>
          ))}
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="education">
        <h2>Education</h2>
        <div className="education-list">
          {education.map((edu, index) => (
            <div key={index} className="education-entry">
              <h3>{edu.school}</h3>
              <p>{edu.degree}</p>
              <p>{edu.year}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="experience">
        <h2>Work Experience</h2>
        <div className="experience-list">
          {workExperience.map((experience, index) => (
            <div key={index} className="experience-entry">
              <h3>{experience.title}</h3>
              <p>{experience.company}</p>
              <p>{experience.year}</p>
              <p>{experience.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Email: <a href='karthikgammath13@gmail.com'>karthikgammath13@gmail.com</a> </p>
        <p>LinkedIn: <a href='https://www.linkedin.com/in/karthik-204a78217'>https://www.linkedin.com/in/karthik-204a78217</a></p>
        <p>GitHub: <a href='https://github.com/Karthiksant'>https://github.com/Karthiksant</a></p>
      </section>
    </div>
  );
};

export default Portfolio2;
