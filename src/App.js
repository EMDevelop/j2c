import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import NavbarTrial from './components/NavbarTrial';
import Home from './components/pages/Home'
import About from './components/pages/About'
// import Particles from 'react-particles-js';
import "pathseg";
import ParticlesBackground from "./components/ParticlesBackground.js";


function App() {
  
  return (
      <div className="App">
        <Router>
            <div class="body-particles">
              <div id="wrapper">
                <Navbar />
                {/* <NavbarTrial /> */}
                <switch>
                  <Route path='/' exact component ={Home}/>
                  <Route path='/About' exact component ={About}/>
                </switch>
              </div>
            </div>
            <div id="particles-background">                
                    {/* <ParticlesBackground/> */}
            </div>
        </Router>       
      </div>
  );
}

export default App;