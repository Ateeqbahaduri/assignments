import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newBear } from '../redux';


class AddBear extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
            image_url: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {            // makes a way to write ine fuction to handle everything.
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
            <div className="add-bear">
             
                    <form onSubmit={this.handleSubmit}>
                        <p>Title:</p><input name="title" onChange={this.handleChange} placeholder="Title" />
                        <p>Image Url:</p><input type="text" name="image_url" placeholder="Bear url" onChange={this.handleChange} />
                        <p>Comment:</p><textarea name="body" id="" cols="30" rows="4" onChange={this.handleChange} placeholder="Comment"></textarea>
                       <div className="btns"><button className="submit">Add</button></div>
                    </form>
                </div>
        )
    }
}
export default connect(null, { newBear })(AddBear);