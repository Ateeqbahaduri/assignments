import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About'
import Dogs from './Dogs';
import './style.css';

const App = props => {
    return (
      <div className="app">
          <Navbar />
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/dogs" component={Dogs}/>
          </Switch>
          <Footer />
      </div>
    );
  }


export default App;
