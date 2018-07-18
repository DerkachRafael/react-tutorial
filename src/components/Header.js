import React, {Component} from 'react';
import '../App.css';

function Header({tagline}) {
    return (
        <header className="top">
            <h1> {tagline} </h1>
            <h3 className="tagline">
                    <span>
                        test
                    </span>
            </h3>
        </header>
    );
}

export default Header;
