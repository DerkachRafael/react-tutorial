import React, {Component} from 'react';
import '../App.css';
import AddFishForm from "./AddFishForm";
import EditFishForm from './EditFishForm';

class Inventory extends Component {
    render() {
        return (
           
            <div className="inventory">
             {
             Object.keys(this.props.fishes).map(key => <EditFishForm 
                                                            fish={this.props.fishes[key]} 
                                                            index={key}
                                                            key={key} 
                                                            updateFish={this.props.updateFish}/>)
             }
              <AddFishForm fish={this.props.fish}/>
                <button type="button" onClick={this.props.loadSample}>
                    Load Sample
                </button>
            </div>
        );
    }
}

export default Inventory;
