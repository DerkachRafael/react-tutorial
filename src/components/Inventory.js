import React, {Component} from 'react';
import PropTypes from "prop-types";
import firebase from "firebase";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import Login from "./login";
import base, { firebaseApp } from "../base";

class Inventory extends Component {
    static propTypes = {
        fishes: PropTypes.object,
        updateFish: PropTypes.func,
        deleteFish: PropTypes.func,
        loadSampleFishes: PropTypes.func
      };
    
      state = {
        uid: null,
        owner: null
      };
    authHandler = async (authData) =>{
        console.log(authData);
        const store = base.fetch(this.props.storeId, {context: this});
            if(!store.owner) {
                    await base.post(`${this.props.storeId}/owner`, {
                        data: authData.user.uid
                    })
            }
             // 3. Set the state of the inventory component to reflect the current user
    this.setState({
        uid: authData.user.uid,
        owner: store.owner || authData.user.uid
      });
    }

    logout = async () => {
        console.log("Logging out!");
        await firebase.auth().signOut();
        this.setState({ uid: null });
      };

    authenticate = provider =>{
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        firebaseApp
                .auth()
                .signInWithPopup(authProvider)
                .then(this.authHandler)

    }

    render() {
        const logout = <button onClick={this.logout}>Log Out!</button>;
         // 1. Check if they are logged in
    if (!this.state.uid) {
        return <Login authenticate={this.authenticate} />;
      }
  
      // 2. check if they are not the owner of the store
      if (this.state.uid !== this.state.owner) {
        return (
          <div>
            <p>Sorry you are not the owner!</p>
            {logout}
          </div>
        );
      }
        return (
           
            <div className="inventory">
            {logout}
          
             {
             Object.keys(this.props.fishes).map(key => <EditFishForm 
                                                            fish={this.props.fishes[key]} 
                                                            index={key}
                                                            key={key} 
                                                            deleteFish={this.props.deleteFish}
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
