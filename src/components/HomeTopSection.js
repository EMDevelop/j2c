import React from 'react';
import '../App.css';
import'./HomeTopSection.css';
import ContactUs from './ContactUs.js'
import ParticlesHome from './ParticlesHome'
// import Particles, { ThemeMode } from 'react-particles-js';
import "pathseg";
import {makeStyles} from '@material-ui/core/styles'
import {createMuiTheme, Grid,Paper} from '@material-ui/core'


const useStyles = makeStyles((theme)=>({
  grid: {
      width: '100%',
      margin: '0px',
      height: '100%'
    
  }
}));

function HomeTopSection() {

  const classes = useStyles();

    return ( 
        <div>
            
          <div className =  'homeTopSection1-container'>

            <Grid container spacing={1} className={classes.grid}>
              <Grid item xs={0} sm={6} md= {4}>
                <div className = 'homeParticleSection'>
                  <ParticlesHome/>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md= {4}>
                <div className = 'homeTopItems'>
                  <h1>All your telephony needs under one local roof</h1>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md= {4}>
                <div className = 'homeTopItems'>
                    <ContactUs/>
                </div>
              </Grid>
            </Grid>
          </div>






        <div className='titleDiv'>
          <h1> Why Just2Connect?</h1>
        </div>
          

          <div></div>
          <div className = 'homeTopSection2-container'>
            

            <Grid container spacing={10} className={classes.grid}>
              <Grid item xs={12} md= {6}>
                <div >
                  <h1 className='paperH1'>Local Service</h1>
                  <p className='paperP'>Professional business telephones and broadband in Berkhamsted, covering Hertfordshire, Bedfordshire and Buckinghamshire</p>
                </div>
              </Grid>
              <Grid item xs={12} md= {6}>
                <div>
                  <h1 className='paperH1'>Affordable Pricing</h1>
                  <p className='paperP'>Low cost, business grade telephone systems, tailored to your specific needs. </p>
                </div>
              </Grid>
              <Grid item xs={12} md= {6}>
                <div>
                  <h1 className='paperH1'>24-7 Support</h1>
                  <p className='paperP'>Reliable telephone systems and broadband with responsive technical support</p>
                </div>
              </Grid>
              <Grid item xs={12} md= {6}>
                <div >
                  <h1 className='paperH1'>30 Day Contracts</h1>
                  <p className='paperP'>Customisable contracts, from just 30 days, we’ll find the right package for your business</p>
                </div>
              </Grid>
            </Grid>
            </div>
        </div>
    )
}

export default HomeTopSection
