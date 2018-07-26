import React, {Component} from 'react';
import '../App.css';
import PropTypes from 'prop-types'
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

Header.propTypes = {
    tagline: PropTypes.string.isRequired
}

export default Header;
