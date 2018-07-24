import React, {Component} from 'react';

class EditFishForm extends Component {
    handleChange = ({currentTarget}) => {
        const updatedFish = {
            ...this.props.fish,
            [currentTarget.name]: currentTarget.value
        }

        this.props.updateFish(this.props.index, updatedFish)
        console.log(updatedFish);
    }

    render() {
      const {desc, image, name, price, status} = this.props.fish;
        return (
         <React.Fragment>
        <div className="fish-edit">
                <input 
                    type="text" 
                    name="name" 
                    onChange={this.handleChange}
                    value={name}/>
                <input 
                    type="text"
                    name="price"  
                    onChange={this.handleChange}
                    value={price}/>
                <select type="text" name="status" value={status}>
                        <option value="available">Fresh!</option>
                        <option value="unavailable">Sold Out!</option>
                  </select>
                <textarea 
                        name="desc"  
                        placeholder="Desc"  
                        onChange={this.handleChange}
                        value={desc}/>
                    <input
                        name="image"
                        onChange={this.handleChange}
                        value={image}
                        type="text"
                        placeholder="Image"
                />
                <button type="submit">+ Edit</button>
        </div>
             </React.Fragment>
        );
    }
}

export default EditFishForm;
