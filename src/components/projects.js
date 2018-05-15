import React from 'react';

const Projects = props =>{
    return(
        <div id="projects">
            <h2 className="section-header">Personal Projects</h2>
                {props.projects.map((project, i) =>
                        <div key={i}>
                            <h5>{project.name}</h5>
                            <p>{project.details}</p>
                        </div>
                )}
        </div>
    );
};

export default Projects;