import React, {Component} from 'react';
import '../App.css';
import AddFishForm from "./AddFishForm";

class Inventory extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="inventory">
              <AddFishForm fish={this.props.fish}/>
                <button type="button" onClick={this.props.loadSample}>
                    Load Sample
                </button>
            </div>
        );
    }
}

export default Inventory;
