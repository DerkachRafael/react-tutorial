import React, {Component} from 'react';
import '../App.css';
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
import * as testData from '../sample-fishes';
import Fish from "./Fish";
import base from '../base';
import PropTypes from 'prop-types'

class App extends Component {

    state = {
        fishes: {},
        order: {}
    };

    static PropTypes = {
        match: PropTypes.object, 
    }


    addFish = (fishOrder) => {
        const fishes = {...this.state.fishes};
        fishes[`fish-${Date.now()}`] = fishOrder;
        this.setState({
            fishes
        })
    };

    updateFish = (key, updateFish) => {
            const fishes = {...this.state.fishes};

            fishes[key] = updateFish;

            this.setState({
                fishes
            })
    }

    deleteFish= (key) =>{
        const fishes = {...this.state.fishes};

        fishes[key] = null;
        this.setState({
            fishes
        })
    }

        componentDidMount() {
        
            const {storeId} = this.props.match.params;
            const localStorageRef = localStorage.getItem(storeId);

            if(localStorageRef) {
                this.setState({
                    order: JSON.parse(localStorageRef)
                })
            }

                this.ref = base.syncState(`${storeId}/fishes`, {
                    context: this,
                    state: 'fishes'
                });
         }

         componentWillUnmount() {
            base.removeBinding(this.ref);
         }

         componentDidUpdate() {
             localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order))
         }


    addToOrder = (key) =>{
        const order = {...this.state.order};
        order[key] = order[key] + 1 || 1;

        this.setState({
            order
        })
    };

    removeFromOrder = (key) =>{
        const order = {...this.state.order};
        delete order[key];

        this.setState({
            order
        })
    };

    loadSample = () => {
        this.setState({
            fishes: {...this.state.fishes, ...testData.default}
        })

    };

   

    render() {

        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Catch Of The Day"/>
                    <ul className="fish-list">
                        {
                        Object.keys(this.state.fishes).map(key => <Fish addToOrder={this.addToOrder} fish={this.state.fishes[key]} key={key} index={key}/> )
                        }
                    </ul>
                </div>
                <Order 
                    order={this.state.order} 
                    removeFromOrder={this.removeFromOrder}
                    fishes={this.state.fishes}/>
                <Inventory 
                    fish={this.addFish} 
                    loadSample={this.loadSample} 
                    fishes={this.state.fishes} 
                    storeId={this.props.match.params.storeId}
                    updateFish={this.updateFish} 
                    deleteFish={this.deleteFish} />
            </div>
        );
    }
}

export default App;
