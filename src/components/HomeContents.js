import React from 'react';
import '../App.css';
import'./Home.css';
import ContactUs from './ContactUs.js'
import ParticlesHome from './ParticlesHome'
import "pathseg";
import {makeStyles} from '@material-ui/core/styles'
import {Grid} from '@material-ui/core'
import DeskPhone from '../images/DeskPhone.png'
import BroadbandRouter from '../images/BroadbandRouter.jpg'
import SimCard from '../images/SimCard.jpeg'
import VideoConferencing from '../images/VideoConference.jpeg'
import MicklefieldHall from '../images/micklefieldhall.svg'
import TravelTimeWorld from '../images/TravelTimeWorld.png'
import Yellowyoyo from '../images/Yellowyoyo.svg'
import OliverMyles from '../images/OliverMyles.svg'
import DavyAssociates from '../images/DavyAssociates.png'
import Greens from '../images/Greens.jpg'
import PinkWifiUp from '../images/icons/PinkWifiUp.png'
import BlueWifiUp from '../images/icons/BlueWifiUp.png'
import PinkPhoneDown from '../images/icons/PinkPhoneDown.png'
import BluePhoneDown from '../images/icons/BluePhoneDown.png'


const useStyles = makeStyles((theme)=>({
  grid: {
      width: '100%',
      margin: '0px',
      height: '100%'

  }
}));

function HomeContents() {

  const classes = useStyles();

    return ( 


        <div >
            
          <div className =  'MainBanner-container'>

            <Grid container spacing={3} className={classes.grid}>
              <Grid item xs={12} sm={12} md= {6}>
                <div className = 'homeParticleSection'>
                  {/* <ParticlesHome/> */}
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md= {6}>
                <div className = 'homeTopSlogan'>
                  <h1 className='Slogan'>All your telephony and broadband needs under one local roof</h1>
                </div>
              </Grid>
            </Grid>
          </div>

      {/* <div className='transparentSection'></div>    */}




{/* ---------------------------------------------------------------------------------------------------------------------------- */}

{/* Our Services */}

{/* ---------------------------------------------------------------------------------------------------------------------------- */}


        <div className =  'OurServices-container'>

          <h1 className='OurServicesTitle'>Our Services</h1>


            <Grid container spacing={2} className={classes.grid}>
              <Grid item xs={12} sm={6} md= {6} lg={3}>
                <div className = 'servicesContainer'>
                  <h1 class='text-2xl' >Telephone Systems</h1>
                  <img src={DeskPhone} alt="Best Telephone Systems In Hertfordshire" className='ServicesIMG'/>
                  <p>Find Out More </p>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md= {6} lg={3}>
                <div className = 'servicesContainer'>
                  <h1  class='text-2xl' >Broadband</h1>
                     <img src={BroadbandRouter} alt="Best Business Mobile Sim Card In Hertfordshire" className='ServicesIMG'/>
                  <p>Find Out More </p>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md= {6} lg={3} >
                <div className = 'servicesContainer'>
                  <h1 class='text-2xl' >Video Conferencing</h1>
                    <img src={VideoConferencing} alt="Best Video Conferencing In Hertfordshire" className='SIMIMG'/>
                  <p>Find Out More </p>
                 </div>
              </Grid>
              <Grid item xs={12} sm={6} md= {6} lg={3}>
                <div  className = 'servicesContainer'>
                  <h1 class='text-2xl' >Mobile SIM</h1>
                     <img src={SimCard} alt="Best Business Mobile Sim Card In Hertfordshire" className='SIMIMG'/>
                  <p>Find Out More</p>
                </div>
              </Grid>
            </Grid>

        </div>

    <div className='transparentSection'></div>   


{/* ---------------------------------------------------------------------------------------------------------------------------- */}

{/* Why Just2Connect? */}

{/* ---------------------------------------------------------------------------------------------------------------------------- */}


          <div className = 'whyJ2C-container'>
            
            <h1 className='WhyJ2CTitle'> Why Just2Connect?</h1>

            <Grid container spacing={10} className={classes.grid}>
              <Grid item xs={12} md= {6}>
                <div className = 'benefitContainer'>
                  <img src={PinkPhoneDown} alt="Berkhamsted Telephones" className ='PhoneDown'/>
                  <h1 className='Benefit' >Local Service</h1>
                  <p  className='BenefitDescription' >Professional business telephones and broadband in Berkhamsted, covering Hertfordshire, Bedfordshire and Buckinghamshire</p>
                </div>
              </Grid>
              <Grid item xs={12} md= {6}>
                <div className = 'benefitContainer' >
                  <img src={PinkWifiUp} alt="Berkhamsted Broadband" className ='WifiDown' />
                  <h1  className='Benefit'>Affordable Pricing</h1>
                  <p className='BenefitDescription'  >Low cost, business grade telephone systems, tailored to your specific needs. </p>
                </div>
              </Grid>
              <Grid item xs={12} md= {6}>
                <div className = 'benefitContainer'>
                  <img src={BluePhoneDown} alt="Berkhamsted Telephone Systems" className ='PhoneDown'/>
                  <h1  className='Benefit' >24-7 Support</h1>
                  <p  className='BenefitDescription' >Reliable telephone systems and broadband with responsive technical support</p>
                </div>
              </Grid>
              <Grid item xs={12} md= {6}>
                <div className = 'benefitContainer'>
                  <img src={BlueWifiUp} alt="Berkhamsted Broadband" className ='WifiDown'/>
                  <h1 className='Benefit' >30 Day Contracts</h1>
                  <p className='BenefitDescription' >Customisable contracts, from just 30 days, we’ll find the right package for your business</p>
                </div>
              </Grid>
            </Grid>
            </div>


          <div className='transparentSection'></div>

{/* ---------------------------------------------------------------------------------------------------------------------------- */}

{/* trusted by */}

{/* ---------------------------------------------------------------------------------------------------------------------------- */}
                                                              
  <div className =  'TrustedBy-container'>

                
    <h1 className = 'trustedByTitle'>Trusted By</h1>
               

                
       <Grid container spacing={10} className={classes.grid}>
                <Grid item xs={12} sm={6} md= {6} lg = {4}>
                    <div className ='testimonialContainer'>
                        <div className='leftImageContainer'>
                            <img src={MicklefieldHall} alt="Micklefield Hall Logo" className = 'MicklefieldHall'/>
                        </div>
                        <div className = 'rightTextContainer'>
                            <p className='Quote' >"Very helpful and a pleasure to deal with"</p>
                            <div class='text-colourTextDark font-bold uppercase mt-6' >- Jamie Rankin, CEO</div>
                            <div className='Company' >Micklefield Hall</div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md= {6} lg = {4}>
                    <div className ='testimonialContainer'>
                        <div className='leftImageContainer'>
                            <img src={TravelTimeWorld} alt="TravelTime World Logo" className = 'TravelTimeWorld'/>
                        </div>
                        <div className = 'rightTextContainer'>
                            <p className='Quote' >"It was the best thing we ever did!  Terry and his team offer a first class service - Highly recommend them"</p>
                            <div class="text-colourTextDark font-bold uppercase mt-6">- Jackie Steadman, Founder</div>
                            <div className='Company'>TravelTimeWorld</div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md= {6} lg = {4}>
                    <div className ='testimonialContainer'>
                        <div className='leftImageContainer'>
                            <img src={Yellowyoyo} alt="Yellowyoyo Logo" className = 'Yellowyoyo'/>
                        </div>
                        <div className = 'rightTextContainer'>
                            <p className='Quote' >"Terry Martin is the epitome of great service who goes out of his way to make sure everything is first rate. Use him. You will not be dissapointed."</p>
                            <div class="text-colourTextDark font-bold uppercase mt-6">- Bryan Wright, Director</div>
                            <div className='Company'>Yellowyoyo</div>
                        </div>
                    </div>
                </Grid>                
                <Grid item xs={12} sm={6} md= {6} lg = {4}>
                    <div className ='testimonialContainer'>
                        <div className='leftImageContainer'>
                            <img src={OliverMyles} alt="OliverMyles Logo" className = 'OliverMyles'/>
                        </div>
                        <div className = 'rightTextContainer'>
                            <p className='Quote' >"They are a great company to work with, they know us and our set up personally - I really could not be happier with the service"</p>
                            <div class="text-colourTextDark font-bold uppercase mt-6">- Melanie Langley, Managing Director</div>
                            <div className='Company'>Oliver Myles</div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md= {6} lg = {4}>
                    <div className ='testimonialContainer'>
                        <div className='leftImageContainer'>
                            <img src={DavyAssociates} alt="DavyAssociates Logo" className = 'DavyAssociates'/>
                        </div>
                        <div className = 'rightTextContainer'>
                            <p className='Quote' >"Amazing and excellent are just not enough to describe the level of service received from this company - And fantastic value too. Cannot praise these guys enough. Thank you"</p>
                            <div class="text-colourTextDark font-bold uppercase mt-6">- Chris Davy, Owner</div>
                            <div className='Company'>Davy Associates</div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md= {6} lg = {4}>
                    <div className ='testimonialContainer'>
                        <div className='leftImageContainer'>
                            <img src={Greens} alt="Greens Of Berkhamsted" className = 'Greens'/>
                        </div>
                        <div className = 'rightTextContainer'>
                            <p className='Quote' >"Just2Connect are very reliable, responsive and helpful for my business needs. They also reduced my costs from BT - I would highly reccomend them to anyone"</p>
                            <div class="text-colourTextDark font-bold uppercase mt-6">- David Green, Owner</div>
                            <div className='Company'>Greens Of Berkhamsted</div>
                        </div>
                    </div>
                </Grid>
              
        </Grid>

        </div>

        {/* <div className='transparentSection'></div>    */}


        <div className='HomeContactUs'>
          <ContactUs/>

        </div>
            
        </div>









    )
}

export default HomeContents
