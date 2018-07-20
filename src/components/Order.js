import React, {Component} from 'react';
import '../App.css';
import {formatPrice} from "../helpers";

class Order extends Component {

    renderOrder = (key) => {
        const {fishes, order} = this.props;
        const fish = fishes[key];
        const count = order[key];
            return(
                <li key={key}>
                  {count} lbs {fish.name}

                  {formatPrice(count * fish.price)}
                </li>
            )
    }

    render() {
        const {fishes, order} = this.props;
        const orderId = Object.keys(order);
        const totalPrice = orderId.reduce((prevTotal, key) => {
            const fish = fishes[key];
            const count = order[key];
            console.log({fish}, {count})
            const isAvailable = fish && fish.status;
                if(isAvailable) {
                    return prevTotal + count * fish.price;
                }

                return prevTotal;
        }, 0);

        return (
            <div className="order-wrap">
                <h2>
                    Order
                </h2>

                <ul className="order">
                    {orderId.map(this.renderOrder)}
                </ul>
                <span className="price">
                    {formatPrice(totalPrice)}
                </span>
            </div>
        );
    }
}

export default Order;
