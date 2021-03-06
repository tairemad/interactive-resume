import React from 'react';

const Skills = props => {
    return(
        <div id="skills">
        <h2 className="section-header">Skills</h2>
        <ul className="skills-list">
            {props.skills[0].keywords.map((item,index) =>
                <li key={index}>{item}</li>
            )}
        </ul>
        </div>
    );
};

export default Skills;