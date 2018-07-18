import React, {Component} from 'react';
import '../App.css';
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
import * as testData from '../sample-fishes';
import Fish from "./Fish";

console.log(testData.default);

class App extends Component {

    state = {
        fishes: {},
        dataOrder: {}
    };

    addFish = (fishOrder) => {
        const fishes = {...this.state.fishes};
        fishes[`fish-${Date.now()}`] = fishOrder;
        this.setState({
            fishes
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
                        Object.keys(this.state.fishes).map(key => <Fish fish={this.state.fishes[key]} /> )
                        }
                    </ul>
                </div>
                <Order/>
                <Inventory fish={this.addFish} loadSample={this.loadSample}/>
            </div>
        );
    }
}

export default App;
