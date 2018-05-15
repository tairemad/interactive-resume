import React from 'react';

const Header = props => {
    return(
        <header>
        <div>
            <h1><a href={props.basic.website}>{props.basic.name}</a> </h1>
            <h2>{props.basic.title}</h2> 
        </div>
        </header>
    );
};

export default Header;


