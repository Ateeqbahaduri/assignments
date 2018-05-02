import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newBear } from '../redux';
import axios from 'axios';

class EditBear extends Component {
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
    // this.props.newBear(this.state)
    // console.log(this.state);
    // window.location.assign('/bears')
    axios.put(`/bears/${this.state._id}`, this.state)
        .then (window.location.assign(`/bears/${this.state._id}`))
}
getOneBear = id => {
    axios.get(`/bears/${id}`)
        .then(response => {
            this.setState({
                ...this.state,
                _id: response.data._id,
                title: response.data.title,
                body: response.data.body,
                image_url: response.data.image_url
            })
        })
}
componentDidMount(){
    this.getOneBear(this.props.match.params.id)
}
    render() {
        console.log(this.state);
        
        return (
            <div className="edit-bear">
                <form onSubmit={this.handleSubmit}>
                    Title<input name="title" onChange={this.handleChange} value={this.state.title}/>
                    Comments<textarea name="body" id="" cols="30" rows="10" onChange={this.handleChange} value={this.state.body}></textarea>
                    URL<input type="text" name="image_url" onChange={this.handleChange} value={this.state.image_url}/>
                    <div className="btns"><button className="Enter">submit change</button></div>
                </form>
                
            </div>
        )
    }
}
export default connect (null, { newBear})(EditBear);