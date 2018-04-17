import React from 'react';
import dogReducer, { getDog } from './redux/dogs-redux';
import { connect } from 'react-redux';
import DogList from './DogList';
//import DogList from './DogList';



class Dogs extends React.Component {

    constructor(props) {
        super(props)
        this.initialState = {
            data: {}
        }
    }

    componentDidMount() {
        this.props.getDog();
    }
    // handleClick(){
    //     getDog()
    // }

    render() {
        console.log(this.props);
        const { data, loading, errMsg } = this.props;
        // const list= Object.entries(this.props.dog)
        //const dogComponents = dogs.map((dog, index)=><div key={index}>{dog}</div>)

        // const dogComponents = Object.entries(list[4][1].data.map((dog, index) =>{
        //     return <DogList key = {index} >{dog}</DogList>
        // }))

        if (loading) {
            return (
                <div>
                    ...Loading
                 </div>
            )
        } else if (errMsg) {
            return (
                <div>{errMsg}</div>
            )
        } else {
            return (
                <div className="images">
                    <img src={data} alt="" />
                    <div><button onClick={this.props.getDog}>Random</button></div>
                </div>
                
            )
        }

    }
}

const mapStateToProps = state => state.dog;
export default connect(mapStateToProps, { getDog })(Dogs);