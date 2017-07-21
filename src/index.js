import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const resumeJson = require('./data/resume.json');


ReactDOM.render(<App resumeInfo={resumeJson}/>, document.getElementById('root'));
registerServiceWorker();
