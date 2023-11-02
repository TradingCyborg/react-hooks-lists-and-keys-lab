import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
         {projects &&
          projects.map((project, index) => (
            <div key={index}>
              <h1 >{project.name}</h1>
            <p>
              { project.about}
            </p>
            {project.technologies.map((technology,index)=>(
              <button key={index} >{technology}</button>
            ))}
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProjectList;
