import React, {Component} from 'react';
import '../App.css';

class Fish extends Component {
    render() {

        const {fish} = this.props;
        return (
            <li className="menu-fish">
                <img src={fish.image} alt=""/>
                <h3 className="fish-name">
                    {fish.name}
                <span className="price">{fish.price}</span>
                    </h3>
            </li>
        );
    }
}

export default Fish;
