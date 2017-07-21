import React from 'react';

const Education = props => {
    return(
        <div className="col-md-12">
            <h2 className="section-header">Education</h2>
            {props.education.map((school,index) =>
                <div key={index}>
                    <h5>{school.school} <span className="font-14 pull-right">{school.location}</span></h5>
                    {(!(school.degree)) ? (
                        <p>{school.major}</p>
                    ) : (
                        <p>{school.degree}, {school.major}</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Education;