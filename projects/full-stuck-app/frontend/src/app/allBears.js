import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBears } from '../redux';
import BearSummary from './bearsummary';

class AllBears extends Component {
    componentDidMount(){
        this.props.getBears();
    }
    render() {
        console.log(this.props);
        const bears = this.props.data.map(obj => <BearSummary key={obj._id} {...obj}/>)
        return (
            <div>
                {bears}
            </div>
        )
    }
}




export default connect(state => state, { getBears})(AllBears);
