import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <ProjectItem
        key={index}
        name={project.name}
        about={project.about}
        technologies={project.technologies}
        />
      ))}
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}</div>
    </div>
  );
}

export default ProjectList;
