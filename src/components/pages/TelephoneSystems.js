import React from 'react'
import {Grid} from '@material-ui/core'
import ContactUs from '../ContactUs.js'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {makeStyles} from '@material-ui/core/styles'
import'../pagescss/TelephoneSystems.css';



// const useStyles = makeStyles((theme)=>({
//   grid: {
//       width: '100%',
//       margin: '0px',
//       height: '100%',
//       alignContent: 'center',
//       alignItems: 'alignItems'
//   }
// }));



function TelephoneSystems() {

    // const classes = useStyles(); 
    return (
        <div>
            {/* --------------------------------------- */}
            {/* Hero */}
            {/* --------------------------------------- */}
            <div className="TSHero">
                <h1 className="TSHeroTitle">
                    Everything your business needs to speak to the outside world
                </h1>
            </div>

            {/* --------------------------------------- */}
            {/* Content */}
            {/* --------------------------------------- */}

            <div className='TSContentContainer'>

            <div className="TSContentTitle">
                Some Content Here
            </div>

            
                <div className-='TSGridContainer'>
                    <Grid 
                        container spacing={3} 
                        // className = {classes.grid}
                        className='outerGrid'
                        align = "center"
                        justify = "center" 
                        alignItems = "center"
                        backgroundColor = "red"
                    >

                        <Grid item xs={12} sm={6} md= {6}>
                            <div className="temp"></div>
                        </Grid>

                        <Grid item xs={12} sm={6} md= {6}>
                            <div className="temp"></div>
                        </Grid>
                        <Grid item xs={12} sm={6} md= {6}>
                            <div className="temp"></div>
                        </Grid>
                        <Grid item xs={12} sm={6} md= {6}>
                            <div className="temp"></div>
                        </Grid>
                        <Grid item xs={12} sm={6} md= {6}>
                            <div className="temp"></div>
                        </Grid>  
                         <Grid item xs={12} sm={6} md= {6}>
                            <div className="temp"></div>
                        </Grid>  
                          <Grid item xs={12} sm={6} md= {6}>
                            <div className="temp"></div>
                        </Grid>   
                          <Grid item xs={12} sm={6} md= {6}>
                            <div className="temp"></div>
                        </Grid>                     
                </Grid>
                </div>
            </div>

            {/* --------------------------------------- */}
            {/* FAQ */}
            {/* --------------------------------------- */}
             <div className="TSFAQ">
                
                <div className='TSFAQTitle'>
                    <h1 className='TSFAQText'>
                        FAQ
                    </h1>
                </div>

                <Accordion style={{marginLeft:"15%",marginRight:"15%",marginBottom:"5px",borderRadius:"10px",backgroundColor:"#e0e8fa", border:"none!important"}} >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <div className="font-semibold">What is VoIP?</div>
            
                    </AccordionSummary>
                    <AccordionDetails>
                    <div>
                        VoIP is an acronym for Voice over Internet Protocol. It’s a technology that lets you make and receive calls over the internet instead of using traditional phonelines.                    </div>
                    </AccordionDetails>
                    
                </Accordion>

                <Accordion style={{marginLeft:"15%",marginRight:"15%",marginBottom:"5px",borderRadius:"10px",backgroundColor:"#e0e8fa", border:"none!important",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);"}} >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel0a-content"
                    id="panel0a-header"
                    >
                    <div className="font-semibold">Who is it for?</div>
            
                    </AccordionSummary>
                    <AccordionDetails>
                    <div>
                        Whether your business is mobile, home, or office-based, a VoIP system offers a robust, cost-effective solution to your telephony needs. It’s also quick to install, giving you flexibility whether you are setting up or moving office, enjoying rapid growth, or need to take on seasonal or promotion-based teams that rely on their telephones
                    </div>
                    </AccordionDetails>
                    
                </Accordion>

                <Accordion style={{marginLeft:"15%",marginRight:"15%",marginBottom:"5px",borderRadius:"10px",backgroundColor:"#e0e8fa", border:"unset",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);"}} >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <div className="font-semibold">Why should I consider it for my business?</div>
            
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>
                            <p className="faq4text">
                                The most obvious reason to move to VoIP is cost. Calls made over the internet are significantly cheaper than calls using traditional phone lines, but you also save because you don’t need to pay traditional line rental or install private branch exchanges (PBX). Because it’s internet-based, there aren’t any hardware maintenance or upgrade charges.                        </p>
                            <p className="faq4text">
                                There are a string of other benefits including:
                            </p>
                                <li>VoIP technology is quick and easy to install, configure and maintain</li>
                                <li>VoIP is flexible, so you can add new users by just adding a new handset</li>
                                <li>VoIP lets you keep your current number even if you move your office to a different part of the country</li>
                                <li>VoIP offers all the features of an enterprise-class phone system at a fraction of the cost of traditional phonelines</li>
                                <li>VoIP helps remote workers operate seamlessly within the company</li>
                        </div>
                    </AccordionDetails>
                    
                </Accordion>

                <Accordion style={{marginLeft:"15%",marginRight:"15%",marginBottom:"5px",borderRadius:"10px",backgroundColor:"#e0e8fa", border:"unset",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);"}} >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    >
                    <div className="font-semibold">But I already have a phone system..?</div>

                    </AccordionSummary>
                    <AccordionDetails>
                    <div>
                        <p className="faq4text">
                        If you have an existing system, a VoIP solution will probably offer you the same features, more cheaply, with no loss of reliability.
                        </p>
                        <p className="faq4text">
                        If your current system doesn’t provide the features or the flexibility that you need, suffers reliability issues or if you are moving office and need to review your phone system, then you could benefit from a VoIP phone system.
                        </p>
                    </div>
                </AccordionDetails>    
            </Accordion>

            </div>

            {/* --------------------------------------- */}
            {/* Contact Us */}
            {/* --------------------------------------- */}


            <div className='TSContactUs'>
                 <ContactUs/>
             </div>

        </div>
    )
}

export default TelephoneSystems
