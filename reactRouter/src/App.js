import React from 'react';
import './App.css';

import Home from "./components/Home.js";
import Page1 from "./components/Page1.js";
import Page2 from "./components/Page2.js";
import Page3 from "./components/Page3.js";

function App() {
  return (
    <div className="App">
        <h1>hello</h1>
        <Home/>
        <Page1/>
        <Page2/>
        <Page3/>
    </div>
  );
}

export default App;
