import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import About from './components/pages/About'
import VideoConferencing from './components/pages/VideoConferencing'
import MobileSIM from './components/pages/MobileSIM'
import SmartInboundNumbers from './components/pages/SmartInboundNumbers'
import SIPTrunks from './components/pages/SIPTrunks'
import TelephoneSystems from './components/pages/TelephoneSystems'
import Broadband from './components/pages/Broadband'
import Contact from './components/pages/Contact'
// import Particles from 'react-particles-js';
import Footer from './components/Footer'
import "pathseg";
import ParticlesBackground from "./components/ParticlesBackground.js";


function App() {
  
  return (
      <div className="App">
        <Router>
            <div class="body-particles">
              <div id="wrapper">
                <Navbar />
                <switch>
                  <Route path='/' exact component ={Home}/>
                  <Route path='/VideoConferencing' exact component ={VideoConferencing}/>
                  <Route path='/MobileSIM' exact component ={MobileSIM}/>
                  <Route path='/SmartInboundNumbers' exact component ={SmartInboundNumbers}/>
                  <Route path='/SIPTrunks' exact component ={SIPTrunks}/>
                  <Route path='/TelephoneSystems' exact component ={TelephoneSystems}/>
                  <Route path='/Broadband' exact component ={Broadband}/>
                  <Route path='/About' exact component ={About}/>
                  <Route path='/Contact' exact component ={Contact}/>
                </switch>
              <Footer/>
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