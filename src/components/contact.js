import React from 'react';

const Contact = props => {
  return (
    <div id="contact">
      <img src={require("../images/me.jpg")} />
    <div>
    <h2 className="section-header">Contact</h2>
        <ul className="contact-list">
            <li><i className="fa fa-envelope-o"></i> {props.basic.email}</li>
            <li><i className="fa fa-phone"></i> {props.basic.phone}</li>
            <li><i className="fa fa-link"></i> {props.basic.website}</li>
        </ul>
    </div>
     <div>
     <ul className="social-links">
         {props.social.map(link =>
             <li key={link.network}>
                 <a href={link.url} target="_blank" rel="noopener noreferrer"><i className={link.icon}></i></a>
             </li>
         )}
     </ul>
 </div>
 </div>
  );
};

export default Contact;