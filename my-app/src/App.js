// App.js

import React, { useState } from 'react';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [projectDetails, setProjectDetails] = useState({
    projectName: '',
    projectDescription: ''
  });

  const handleAddProject = () => {
    if (projectDetails.projectName !== '' && projectDetails.projectDescription !== '') {
      setProjects([...projects, projectDetails]);
      setProjectDetails({ projectName: '', projectDescription: '' });
    }
  };

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </nav>
      </header>

      <section id="about">
        {/* About section content */}
        <h2>About Section</h2>
        {/* Your about content goes here */}
      </section>

      <section id="projects">
        <h2>Projects Section</h2>
        {/* Project adding form */}
        <div>
          <h3>Add Project</h3>
          <input
            type="text"
            placeholder="Project Name"
            value={projectDetails.projectName}
            onChange={(e) =>
              setProjectDetails({ ...projectDetails, projectName: e.target.value })
            }
          />
          <textarea
            placeholder="Project Description"
            value={projectDetails.projectDescription}
            onChange={(e) =>
              setProjectDetails({ ...projectDetails, projectDescription: e.target.value })
            }
          ></textarea>
          <button onClick={handleAddProject}>Add</button>
        </div>

        {/* Display added projects */}
        <div>
          <h3>Projects View</h3>
          <ul>
            {projects.map((project, index) => (
              <li key={index}>
                <strong>{project.projectName}</strong>: {project.projectDescription}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact">
        {/* Contact section content */}
        <h2>Contact Section</h2>
        {/* Your contact content goes here */}
      </section>
    </div>
  );
}

export default App;

