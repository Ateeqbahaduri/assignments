import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



export default class Bears extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {},
        }

    }
getOneBear = id => {
    axios.get(`/bears/${id}`)
        .then(response => {
            this.setState({
                ...this.state,
                data: response.data
            })
        })
}
deleteBear = bearId => {
    let areYouSure = window.confirm("Are you sure removing this Bear?");
    if(areYouSure) {
        axios.delete(`/bears/${bearId}`)
             .then(responce =>{
                //  console.log();
                  window.location.assign('/')
              } )
    }
}
componentDidMount(){
    this.getOneBear(this.props.match.params.id)
}
    render() {
        console.log(this.state);
        const {_id, title, body, image_url}= this.state.data
        return (
             <div>
                 <h1>{ title }</h1>
                <div>{ body }</div>
                <img src={image_url} alt="" />
                <button onClick={() => this.deleteBear(_id)}>Delete Bear</button>
                <Link to = {`/editBear/${_id}`} >edit</Link>
            </div>
        )
    }
}
