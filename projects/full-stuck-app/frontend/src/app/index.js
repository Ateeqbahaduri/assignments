import React, { Component } from 'react';

import newBear from './addBear';
import { Route, Switch } from 'react-router';
import editBear from './editBear';
import Bears from './bears';
import { Link } from 'react-router-dom';
import "./style.css";
// import Footer from './Footer';
import Navbar from './Navbar';
import Body from './Body';
import About from './About';

export default class App extends Component {

    render() {
        return (
            <div className="app-wrapper">
                {/* <Link to="/">Home</Link>
                  <Link to="/About"> About </Link>
                  <Link to="/newbear">Add Your Favorite Bear</Link> */}
                {/* <div className="container"> */}

                <Navbar></Navbar>

                <div class="content">
                    <Switch>
                        <Route exact path='/' component={Body} />
                        <Route path='/newbear' component={newBear} />
                        <Route path='/editBear/:id' component={editBear} />
                        <Route path='/Bears/:id' component={Bears} />
                        <Route path='/About' component={About} />
                    </Switch>
                    
                </div>
                
                {/* <About></About> */}
            </div>

            // </div>
        )
    }
}
