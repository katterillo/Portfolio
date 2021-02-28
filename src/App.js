import React from 'react';
import './App.css';
import About from './About.js';
import Projects from './Projects.js';


const App = () => {
  return (
    <div className="App">
      <h1> Hello World </h1>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;