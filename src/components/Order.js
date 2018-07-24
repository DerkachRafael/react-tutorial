import React, {Component} from 'react';
import '../App.css';
import {formatPrice} from "../helpers";
import  _30s from '30-seconds-of-code'

class Order extends Component {

    renderOrder = (key) => {
        const {fishes, order} = this.props;
        const fish = fishes[key];
        const count = order[key];

        if(!fish) return null;
        const isAvailable = fish && fish.status === 'available';
        if(!isAvailable) {
            return(
                <li index={key}>
                    sorry
                </li>
            )
        }
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
            const isAvailable = fish && fish.status === 'available';
             
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
               {
                    _30s.size(order) > 0 ?
                <span className="price">
                Total: {formatPrice(totalPrice)}
                </span> : "Your bag is empty" 
            }
            </div>
        );
    }
}

export default Order;
