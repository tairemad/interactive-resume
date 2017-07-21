import React from 'react';


const Volunteer = props =>{
    return(
        <div className="col-md-12">
            <h2 className="section-header">Personal Development</h2>
                {props.volunteer.map((org) =>
                        <div key={org.organization}>
                            <h5>{org.position} for <a href={org.website} target="_blank" rel="noopener noreferrer">{org.organization}</a> <span className="pull-right font-14">{org.startDate} - {org.endDate}</span></h5>
                            <p>{org.summary}</p>
                        </div>
                )}
        </div>
    );
};

export default Volunteer;

