import '../../App.css';
import React from 'react';
import {Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'



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
                hi
            </Grid>
        </div>
  );


}

export default About;
