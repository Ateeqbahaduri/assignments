import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newBear } from '../redux';


class AddBear extends Component {
    constructor(props){
    super(props);

    this.state = {
        title: "",
        body: "",
        image_url: ""

    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
}
handleChange(e){            // makes a way to write ine fuction to handle everything.
    this.setState({
        ...this.state,
        [e.target.name]: e.target.value
    })
}
handleSubmit(e) {
    e.preventDefault();
    e.target.submit.disabled = true;
    this.props.newBear(this.state)
    console.log(this.state);
    window.location.assign('/')
}
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    title<input name="title" onChange={this.handleChange}/>
                    <textarea name="body" id="" cols="30" rows="10" onChange={this.handleChange}></textarea>
                    <input type="text" name="image_url" onChange={this.handleChange}/>
                    <button id="submit">submit</button>
                </form>
                
            </div>
        )
    }
}
export default connect (null, { newBear})(AddBear);