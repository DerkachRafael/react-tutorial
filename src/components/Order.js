import React, {Component} from 'react';
import '../App.css';
import {formatPrice} from "../helpers";
import {TransitionGroup, CSSTransition} from 'react-transition-group'
 import size from '30-seconds-of-code'

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
                <CSSTransition 
                    classNames="order" 
                    key={key} 
                    timeout={{enter: 250, exit: 250}}> 
                <li key={key}>
                  {count} lbs {fish.name}

                  {formatPrice(count * fish.price)}
                  <button onClick={() => this.props.removeFromOrder(key)}>
                        &times;
                  </button>
                </li>

                </CSSTransition>
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

                <TransitionGroup 
                    component="ul"
                    className="order">
                        {orderId.map(this.renderOrder)}
                </TransitionGroup>
               
                <span className="price">
                Total: {formatPrice(totalPrice)}
                </span> 
            
            </div>
        );
    }
}

export default Order;
