import React, {Component} from 'react';
import '../App.css';
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
import * as testData from '../sample-fishes';
import Fish from "./Fish";

class App extends Component {

    state = {
        fishes: {},
        order: {}
    };

    addFish = (fishOrder) => {
        const fishes = {...this.state.fishes};
        fishes[`fish-${Date.now()}`] = fishOrder;
        this.setState({
            fishes
        })
    };

    addToOrder = (key) =>{
        const order = {...this.state.order};
        // order[key] = {
        //     'name': this.state.fishes[key].name,
        //     'count': order[key] + 1 || 1,
        //     'price': this.state.fishes[key].price + this.state.fishes[key].price || this.state.fishes[key].price,
        // }
        //     this.setState({
        //         order
        //     })
        order[key] = order[key] + 1 || 1;

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
                <Order order={this.state.order} fishes={this.state.fishes}/>
                <Inventory fish={this.addFish} loadSample={this.loadSample} />
            </div>
        );
    }
}

export default App;
