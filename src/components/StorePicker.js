import React, { Component, Fragment } from 'react';
import {getFunName} from '../helpers';

class StorePicker extends Component {

    fieldInput = React.createRef();

    goToStore = event => {
      event.preventDefault();

      const {value} = this.fieldInput.value;
      this.props.history.push(`store/${value}`);
    };

    render(){
        return (
            <Fragment>
                <form className='store-selector' onSubmit={this.goToStore}>
                    <h2>Title</h2>
                    <input type="text"
                           className=""
                           ref={this.fieldInput}
                           required
                           defaultValue={getFunName()}/>
                    <button type="submit" className="">
                        Visit
                    </button>
                </form>
            </Fragment>
        )
    }
}

export default StorePicker;