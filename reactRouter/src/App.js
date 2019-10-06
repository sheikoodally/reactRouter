import React from 'react';
import './App.css';

import Home from "./components/Home.js";
import Page1 from "./components/Page1.js";
import Page2 from "./components/Page2.js";
import Page3 from "./components/Page3.js";

function App() {
  return (
    <div className="App">
      <nav>
        <h1>hello</h1>

        <ul>
            <li><a> <Home/> </a></li>
            <li><a> <Page1/> </a></li>
            <li><a> <Page2/> </a></li>
            <li><a> <Page3/> </a></li>
        </ul>

          <Home/>
          <Page1/>
          <Page2/>
          <Page3/>
        </nav>
    </div>
  );
}

export default App;
