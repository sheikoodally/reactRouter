import React from 'react';
import './App.css';

import Home from './components/Home.js';
import Page1 from './components/Page1.js';
import Page2 from './components/Page2.js';
import Page3 from './components/Page3.js';
import Nav from './components/Nav.js';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import {Route, Switch} from "react-router";

function App() {
  return (
    <div className="App">
        
        <Router>
          <Nav/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/page1" component={Page1}/>
            <Route path="/page2" component={Page2}/>
            <Route path="/page3" component={Page3}/>
          </Switch>
        </Router>
        

    </div>
  );
}

export default App;
