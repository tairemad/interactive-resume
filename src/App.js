import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/header';
import Skills from './components/skills';
import Experience from './components/experiences';
import Projects from './components/projects';
import Volunteer from './components/volunteer';
import Education from './components/education';
import Footer from './components/footer';

const App = (props) => {
    const basic = props.resumeInfo.basicInfo;
    const social = props.resumeInfo.socialMedia;
    const skills = props.resumeInfo.skills;
    const experience = props.resumeInfo.experience;
    const projects = props.resumeInfo.projects;
    const volunteer = props.resumeInfo.volunteer;
    const education = props.resumeInfo.education;
    return (
        <div className="container">
            <Header basic={basic} social={social}/>
            <Skills skills={skills} />
            <Experience experience={experience} />
            <Projects projects={projects}/>
            <Volunteer volunteer={volunteer}/>
            <Education education={education}/>
            <Footer basic={basic}/>
        </div>
    );
};

App.propTypes = {
    resumeInfo: PropTypes.object.isRequired,
};


export default App;
