import '../../App.css';
import React from 'react';
import {Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import MicklefieldHall from '../../images/micklefieldhall.svg'




const useStyles = makeStyles((theme)=>({
  grid: {
      width: '100%',
      margin: '0px',
      height: '100%'
    
  }
}));

function About() {




  const classes = useStyles();

  return (
        <div>
            <Grid container spacing={10} className={classes.grid}>


                <Grid item xs={12} sm={6} md= {6} lg = {4}>
                    <div className ='testimonialContainertest1'>
                        <div className='leftImageContainertest1'>
                            <img src={MicklefieldHall} alt="Micklefield Hall Logo" className = 'MicklefieldHalltest'/>
                        </div>
                        <div className = 'rightTextContainertest1'>
                            <p className='Quotetest' >"Very helpful and a pleasure to deal with"</p>
                            <div class='text-colourTextDark font-bold uppercase mt-6' >- Jamie Rankin, CEO</div>
                            <div className='Companytest' >Micklefield Hall</div>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md= {6} lg = {4}>
                    <div className ='container2'>

                      <div className='top2' >
                        <p className='Quotetest' >"Very helpful and a pleasure to deal with"</p>
                      </div>
                      <div className='bottom2'>
                          <div className = 'logoContainer'>
                            <img src={MicklefieldHall} alt="Micklefield Hall Logo" className = 'Logo'/>
                          </div>
                          <div className = 'nameTitleContainer' >
                            <div class='text-colourTextDark font-bold uppercase mt-6' >- Jamie Rankin, CEO</div>
                            <div className='Companytest' >Micklefield Hall</div>
                          </div>
                      </div>

                    </div>
                </Grid>


            </Grid>
        </div>
  );


}

export default About;
