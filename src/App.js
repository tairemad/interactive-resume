import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/header';
import Contact from './components/contact';
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
      <div>
         <a href={require('./downloads/Resume-TDailey.pdf')} download="Resume-TDailey.pdf" className="download"><i className="fa fa-download"></i> Download Resume</a>
        <div className="header-bg"></div>
        <div className="res-container">
            <aside>
            <Contact basic={basic} social={social} />
            <Education education={education}/>
            <Skills skills={skills} />
            </aside>
            <article>
            <Header basic={basic} />
            <Experience experience={experience} />
            <Projects projects={projects}/>
            <Volunteer volunteer={volunteer}/>
            <Footer basic={basic}/>
            </article>
        </div>
      </div>
        
    );
};

App.propTypes = {
    resumeInfo: PropTypes.object.isRequired,
};


export default App;
