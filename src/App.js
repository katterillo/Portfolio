import React from 'react';
import './App.css';
import About from './About.js';
import Projects from './Projects.js';

const App = () => {
  return (
    <div className="App">
      <h1 class="text-blue-500 text-center"> My Personal Website :) </h1>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;