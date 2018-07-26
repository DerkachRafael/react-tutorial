import React, {Component} from 'react';
import '../App.css';
class AddFishForm extends Component {

    form = React.createRef();
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();


    

    createOrder = (event) => {

        event.preventDefault();

        const dataOrder = {
            name: this.nameRef.value.value,
            price: parseFloat(this.priceRef.value.value),
            status: this.statusRef.value.value,
            desc: this.descRef.value.value,
            image: this.imageRef.value.value
        }

        this.props.fish(dataOrder);
        event.target.reset();
    };

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createOrder} ref={this.form}>
                <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
                <input
                    name="price"
                    ref={this.priceRef}
                    type="text"
                    placeholder="Price"
                />
                <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>

                <textarea name="desc" ref={this.descRef} placeholder="Desc" />
                <input
                    name="image"
                    ref={this.imageRef}
                    type="text"
                    placeholder="Image"
                />
                <button type="submit">+ Add Fish</button>
            </form>
        );
    }
}

export default AddFishForm;
