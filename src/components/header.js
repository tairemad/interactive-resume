import React from 'react';

const Header = props => {
    return(
        <header>
        <div className="col-md-12">
            <h1><a href={props.basic.website}>{props.basic.name}</a> - {props.basic.title}</h1>
            <div className="col-md-8">
            <ul className="contact-list">
                <li><i className="fa fa-envelope-o"></i> {props.basic.email}</li>
                <li><i className="fa fa-phone"></i> {props.basic.phone}</li>
                <li><i className="fa fa-link"></i> {props.basic.website}</li>
            </ul>
            </div>
            <div className="col-md-4 text-right">
                <ul className="social-links">
                    {props.social.map(link =>
                        <li key={link.network}>
                            <a href={link.url} target="_blank" rel="noopener noreferrer"><i className={link.icon}></i></a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
        </header>
    );
};

export default Header;


