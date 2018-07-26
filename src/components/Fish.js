import React, {Component} from 'react';
import '../App.css';
import PropTypes from 'prop-types'

class Fish extends Component {

    static PropTypes = {
        fish: PropTypes.shape({
            color: PropTypes.string,
            fontSize: PropTypes.number
          }),
        addToOrder: PropTypes.func
    }


    handleClick = () => {
        this.props.addToOrder(this.props.index);
    };

    render() {
        const {fish} = this.props;
        const isAvailable = fish.status === 'available';

        return (
            <li className="menu-fish">
                <img src={fish.image} alt=""/>
                <h3 className="fish-name">
                    {fish.name}
                <span className="price">{fish.price}</span>
                    </h3>
                <p>
                    {fish.desc}
                </p>
                <button type="button" disabled={!isAvailable} onClick={this.handleClick}>
                    {isAvailable ? 'Add to bag' : 'Sold out'}
                </button>
            </li>
        );
    }
}

export default Fish;
