import React from 'react';
import '../App.css';
import'./HomeBottomSection.css';
import {makeStyles} from '@material-ui/core/styles'
import {createMuiTheme, Grid,Paper} from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
  grid: {
      width: '100%',
      margin: '0px',
      height: '100%'
  },
  paper: {
      height: '60%'
  }

}));

function HomeBottomSection() {

      const classes = useStyles();


    return (
    <div>
      <div className='titleDiv'>
        <h1>Our Services</h1>
      </div>

        <div className =  'homeBottomSection1-container'>
            

            <Grid container spacing={5} className={classes.grid}>
              <Grid item xs={12} sm={6} md= {3}>
                <div className = 'servicesContainer'>
                  <h1 className='servicesH1'>Telephone Systems</h1>
                  <p>Find Out More </p>
                </div>
              </Grid>
              <Grid item xs={12}  sm={6}  md= {3}>
                <div className = 'servicesContainer'>
                  <h1 className='servicesH1'>Broadband</h1>
                  <p>Find Out More </p>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}  md= {3}>
                <div className = 'servicesContainer'>
                  <h1 className = 'servicesH1'>Video Conferencing</h1>
                  <p>Find Out More </p>
                 </div>
              </Grid>
              <Grid item xs={12} sm={6}  md= {3}>
                <div  className = 'servicesContainer'>
                  <h1 className='servicesH1'>Mobile SIM</h1>
                  <p>Find Out More</p>
                </div>
              </Grid>
            </Grid>
        </div>

    <div className='titleDiv'>
      <h1>Trusted By</h1>
    </div>

  <div className =  'homeBottomSection2-container'>
       <Grid container spacing={5} className={classes.grid}>
              <Grid item xs={12} sm={6} md= {4}>
                <div className = 'reviewsContainer'>
                  <h1>Company Name</h1>
                  <h2>Person, Title</h2>
                  <p>Quotation</p>
                </div>
              </Grid>
            <Grid item xs={12} sm={6} md= {4}>
                <div className = 'reviewsContainer'>
                  <h1>Company Name</h1>
                  <h2>Person, Title</h2>
                  <p>Quotation</p>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md= {4}>
                <div className = 'reviewsContainer'>
                  <h1>Company Name</h1>
                  <h2>Person, Title</h2>
                  <p>Quotation</p>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md= {4}>
                <div className = 'reviewsContainer'>
                  <h1>Company Name</h1>
                  <h2>Person, Title</h2>
                  <p>Quotation</p>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md= {4}>
                <div className = 'reviewsContainer'>
                  <h1>Company Name</h1>
                  <h2>Person, Title</h2>
                  <p>Quotation</p>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md= {4}>
                <div className = 'reviewsContainer'>
                  <h1>Company Name</h1>
                  <h2>Person, Title</h2>
                  <p>Quotation</p>
                </div>
              </Grid>
            </Grid>
        </div>
  </div>
    )


}

export default HomeBottomSection