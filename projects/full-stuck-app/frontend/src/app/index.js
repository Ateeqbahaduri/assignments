import React, { Component } from 'react';
import AllBears from './allBears';
import newBear from './addBear';
import { Route, Switch } from 'react-router';
import editBear from './editBear';
import Bears from './bears';
import { Link }  from 'react-router-dom';





export default class App extends Component {

    render() {
        return (
            <div>
                <Link to = "/">Home</Link>
                <Link to = "/newbear">Add a new Bear</Link>
            
                <Switch>
                    <Route exact path='/' component={AllBears} />
                    <Route path='/newbear' component={newBear} />
                    <Route path='/editBear/:id' component={editBear} />
                    <Route path='/Bears/:id' component={Bears} />
                </Switch>

            </div>
        )
    }
}
