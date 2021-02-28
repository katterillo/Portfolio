import React from 'react';
import './App.css';
import NavBar from './NavBar.js'; 
import About from './About.js';
import Projects from './Projects.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ContactMe from './ContactMe';
import Resume from './Resume';
document.body.style = 'background: #f5f5f5;';

const App = () => {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Resume" component={Resume} />
        <Route path="/ContactMe" component={ContactMe} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;