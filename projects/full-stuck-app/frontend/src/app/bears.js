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
             <div className="bears">
                 <h1 style={{gridColumn:"span 2", color:"Black"}}>{ title }</h1>
                <p style={{gridColumn:"span 2", color:"gold",
    margin: "auto", textAlign:"justify"}}>{ body }</p>
                <img src={image_url} alt="" placeholder="paste url here" style={{gridColumn:"span 2", margin:"auto", height:"600px"}} />
                <div style={{textAlign:"right"}}><button onClick={() => this.deleteBear(_id)} >Delete Bear</button></div>
                <div style={{textAlign:"left"}}><Link to = {`/editBear/${_id}`} style={{
                    color: "unset",
                    textDecoration: "unset",
                    marginRight: "unset",
                    float: "unset",
                    marginTop: "unset",
                }} > 
                    <button>Edit-Bear</button></Link></div>
            </div>
        )
    }
}
