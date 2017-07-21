import React from 'react';


const Experience = props =>{
    return(
        <div className="col-md-12">
            <h2 className="section-header">Experience</h2>
                {props.experience.map((job, j) =>
                    <div key={j}>
                        <h5><a href={job.url} target="_blank" rel="noopener noreferrer"> {job.company}</a> - <span className="position">{job.position}</span></h5>
                        <h6>{job.location} <span className="pull-right">{job.startDate} - {job.endDate}</span></h6>
                        <ul>
                            {job.jobDesc.map((desc, i) => <li key={i}>{desc}</li>)}
                        </ul>
                    </div>
                )}
        </div>
    );
};

export default Experience;
