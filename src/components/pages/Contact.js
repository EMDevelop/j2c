import React from 'react'
import'../pagescss/Contact.css';
import {Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import ContactUs from '../ContactUs.js'
// Logo
import MicklefieldHall from '../../images/micklefieldhall.svg'
import TravelTimeWorld from '../../images/TravelTimeWorld.png'
import Yellowyoyo from '../../images/Yellowyoyo.svg'
import OliverMyles from '../../images/OliverMyles.svg'
import DavyAssociates from '../../images/DavyAssociates.png'
import Greens from '../../images/Greens.jpg'

function Contact() {
    return (
        <div>
            {/* Hero Banner - thin */}
            <div className="ContactHero">
                <h1 className="ContactHeroText">
                    Get in touch with the team
                </h1>
                <p className="ContactHeroTextSmall">
                    No matter what question you have, we'll find the right person to help you solve it. We'll tailor a solution for your business and we asure you - you will only pay for what you need.
                </p>
            </div>

            {/* New Contact us */}
            <div className="ContactFormContainer">
                 <div className="CompanyInfo">
                need to make this a grid boo
                 </div>
                 <div className="EmailForm">

                 </div>
            </div>
            

            {/* In Good Company */}
            <div className="GoodCompany">

                <div className="GoodCompanyTitle">
                    <h1 className="GoodCompanyText">
                        You're in great company
                    </h1>
                    </div>
                    <div className="GoodCompanyImages">
                    
                    <Grid 
                        container spacing={3} 
                        // className = {classes.grid}
                        className='outerGrid'
                        align = "center"
                        justify = "center" 
                        alignItems = "center"
                        backgroundColor = "red"
                    >

                        <Grid item xs={12} sm={3} md= {2}>
                            <img src={MicklefieldHall} alt="Micklefield Hall Logo" className = 'MicklefieldHall'/>
                        </Grid>

                        <Grid item xs={12} sm={3} md= {2}>
                            <img src={TravelTimeWorld} alt="TravelTime World Logo" className = 'TravelTimeWorld'/>
                        </Grid>
                        <Grid item xs={12} sm={3} md= {2}>
                            <img src={Yellowyoyo} alt="Yellowyoyo Logo" className = 'Yellowyoyo'/>
                        </Grid>
                        <Grid item xs={12} sm={3} md= {2}>
                             <img src={OliverMyles} alt="OliverMyles Logo" className = 'OliverMyles'/>
                        </Grid>
                        <Grid item xs={12} sm={3} md= {2}>
                            <img src={DavyAssociates} alt="DavyAssociates Logo" className = 'DavyAssociates'/>
                        </Grid>  
                         <Grid item xs={12} sm={3} md= {2}>
                            <img src={Greens} alt="Greens Of Berkhamsted" className = 'Greens'/>
                        </Grid>  
                          
                </Grid>
                    
                </div>
            </div>


            {/* Email Address, phone, address*/}


            {/* Google Maps */}
        </div>
    )
}

export default Contact
