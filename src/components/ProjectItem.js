import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map(props=>{
        return <span key={props}>{props}</span>})}
      </div>
    </div>
  );
}

export default ProjectItem;
