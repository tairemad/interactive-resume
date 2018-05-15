import React from 'react';

const Education = props => {
    return(
        <div id="education">
            <h2 className="section-header">Education</h2>
            {props.education.map((school,index) =>
                <div key={index}>
                    <h6>{school.school}</h6>
                    <p className="city">{school.location}</p>
                    {(!(school.degree)) ? (
                        <p className="major"> {school.major}</p>
                    ) : (
                        <p className="major"> {school.degree}, {school.major}</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Education;