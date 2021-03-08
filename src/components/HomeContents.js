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
import Carousel from 'react-elastic-carousel'
import FiveStars from '../images/icons/5Stars.png'
import HeroPhone from '../images/Phone_Stock_Image_Hero.png'
import HeroPhone1 from '../images/Phone_Stock_Image_Hero1.png'
import HeroPhone2 from '../images/Phone_Stock_Image_Hero2.png'




const useStyles = makeStyles((theme)=>({
  grid: {
      width: '100%',
      margin: '0px',
      height: '100%',
      alignContent: 'center',
      alignItems: 'alignItems'
  }
}));


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];


function HomeContents() {

  const classes = useStyles();

    return ( 


        <div >
            
          <div className =  'MainBanner-container'>

            <Grid container spacing={3} className={classes.grid}>
              <Grid item xs={0} sm={12} md= {6}>
                <div className = 'HeroImage'>
                  {/* <ParticlesHome/> */}
                  <img src={HeroPhone} alt="Business Phone System Just2Connect" className='Hero_Stock_Image' draggable="false"/>                </div>
              </Grid>
              <Grid item xs={12} sm={12} md= {6}>
                <div className = 'HeroSlogan'>
                  <h1 className='Slogan'>Telephony and broadband under one local roof</h1>
                  <h1 className='SloganDescription'>Just 2 Connect are your local provider of everything Telecoms in Hertfordshire, Bedfordshire and Buckinghamshire. Whether it be x for your small company of y for your mid - large company, you will not get a better rate or service than through Just2Connect</h1>

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


            <Grid 
              container spacing={7} 
              className='outerGrid'
              align = "center" justify = "center" alignItems = "center"
              >
              <Grid item xs={12} sm={12} md= {6} lg={6}>
                <div className = 'servicesContainer'>
                  <h1 className='outServicesHeader' >Telephone Systems</h1>
                  <img src={DeskPhone} alt="Best Telephone Systems In Hertfordshire" className='ServicesIMG'/>

                </div>
              </Grid>
              <Grid item xs={12} sm={12} md= {6} lg={6}>
                <div className = 'servicesContainer'>
                  <h1 className='outServicesHeader'  >Broadband</h1>
                     <img src={BroadbandRouter} alt="Best Business Mobile Sim Card In Hertfordshire" className='ServicesIMG'/>

                </div>
              </Grid>
              <Grid item xs={12} sm={12} md= {6} lg={6} >
                <div className = 'servicesContainer'>
                  <h1 className='outServicesHeader'  >Video Conferencing</h1>
                    <img src={VideoConferencing} alt="Best Video Conferencing In Hertfordshire" className='ServicesIMG'/>

                 </div>
              </Grid>
              <Grid item xs={12} sm={12} md= {6} lg={6}>
                <div  className = 'servicesContainer'>
                  <h1 className='outServicesHeader'  >Mobile SIM</h1>
                     <img src={SimCard} alt="Best Business Mobile Sim Card In Hertfordshire" className='SIMIMG'/>

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

{/* About us */}

{/* ---------------------------------------------------------------------------------------------------------------------------- */}


<div className = 'AboutContainer'> 



      <h2 className = 'aboutHeading'> 
         Welcome to Just2Connect: Professional business telephones and broadband in Hertfordshire, Bedfordshire and Buckinghamshire
      </h2>
      <p className = 'aboutParagraph'>
         Just2Connect offers low-cost, flexible and tailored professional business telephony and broadband solutions.
      </p>
      <p className = 'aboutParagraph'>
          Our experts understand the full range of business telephony systems. We can ensure you have a stable broadband connection at the speed that your business needs and provide professional landline numbers that connect to your home, your mobile or your office.
      </p>
      <p className = 'aboutParagraph'>
          Whether you want traditional or cloud-based telephony, a new or additional phone number, a business-strength broadband connection or enterprise-class services for your phones, we will find the right solution for your business at a price you can afford.
      </p>
      
</div>

<div className='transparentSection'></div>

{/* ---------------------------------------------------------------------------------------------------------------------------- */}

{/* trusted by */}

{/* ---------------------------------------------------------------------------------------------------------------------------- */}
                                                              
  <div className =  'TrustedBy-container'>

                
    <h1 className = 'trustedByTitle'>Trusted By</h1>
               

                <Carousel breakPoints={breakPoints} focusOnSelect={true}>
              
                        
                    <div className ='testimonialContainer'>
                        <img src={FiveStars} alt="5 Star Review of Just 2 Connect" className = 'FiveStar'/>
                        <div className = 'rightTextContainer'>
                            <p className='Quote' >"Very helpful and a pleasure to deal with"</p>
                            <p className='Blanc' >"...................................................................,......................................"</p>
                            <div class='text-colourTextDark font-bold uppercase mt-6' >- Jamie Rankin, CEO</div>
                            <div className='Company' >Micklefield Hall</div>
                        </div>
                        <div className='leftImageContainer'>
                            <img src={MicklefieldHall} alt="Micklefield Hall Logo" className = 'MicklefieldHall'/>
                        </div>
                    </div>

                    

                    <div className ='testimonialContainer'>
                      <img src={FiveStars} alt="5 Star Review of Just 2 Connect" className = 'FiveStar'/>
                        <div className = 'rightTextContainer'>
                            <p className='Quote' >"It was the best thing we ever did!  Terry and his team offer a first class service - Highly recommend them"</p>
                            <div class="text-colourTextDark font-bold uppercase mt-6">- Jackie Steadman, Founder</div>
                            <div className='Company'>TravelTimeWorld</div>
                        </div>
                        <div className='leftImageContainer'>
                            <img src={TravelTimeWorld} alt="TravelTime World Logo" className = 'TravelTimeWorld'/>
                        </div>
                    </div>

                    <div className ='testimonialContainer'>
                        <img src={FiveStars} alt="5 Star Review of Just 2 Connect" className = 'FiveStar'/>

                        <div className = 'rightTextContainer'>
                            <p className='Quote' >"Terry Martin is the epitome of great service who goes out of his way to make sure everything is first rate. Use him. You will not be dissapointed."</p>
                            <div class="text-colourTextDark font-bold uppercase mt-6">- Bryan Wright, Director</div>
                            <div className='Company'>Yellowyoyo</div>
                        </div>
                         <div className='leftImageContainer'>
                            <img src={Yellowyoyo} alt="Yellowyoyo Logo" className = 'Yellowyoyo'/>
                        </div>                       
                    </div>

                    <div className ='testimonialContainer'>
                       <img src={FiveStars} alt="5 Star Review of Just 2 Connect" className = 'FiveStar'/>

                        <div className = 'rightTextContainer'>
                            <p className='Quote' >"They are a great company to work with, they know us and our set up personally - I really could not be happier with the service"</p>
                            <div class="text-colourTextDark font-bold uppercase mt-6">- Melanie Langley, Managing Director</div>
                            <div className='Company'>Oliver Myles</div>
                        </div>

                        <div className='leftImageContainer'>
                            <img src={OliverMyles} alt="OliverMyles Logo" className = 'OliverMyles'/>
                        </div>                        
                    </div>

                    <div className ='testimonialContainer'>
                        <img src={FiveStars} alt="5 Star Review of Just 2 Connect" className = 'FiveStar'/>

                        <div className = 'rightTextContainer'>
                            <p className='Quote' >"Amazing and excellent are just not enough to describe the level of service received from this company - And fantastic value too. Cannot praise these guys enough. Thank you"</p>
                            <div class="text-colourTextDark font-bold uppercase mt-6">- Chris Davy, Owner</div>
                            <div className='Company'>Davy Associates</div>
                        </div>
                        <div className='leftImageContainer'>
                            <img src={DavyAssociates} alt="DavyAssociates Logo" className = 'DavyAssociates'/>
                        </div>
                    </div>

                    <div className ='testimonialContainer'>
                        <img src={FiveStars} alt="5 Star Review of Just 2 Connect" className = 'FiveStar'/>

                        <div className = 'rightTextContainer'>
                            <p className='Quote' >"Reliable, responsive and helpful for my business needs. I would highly reccomend them to anyone"</p>
                            <div class="text-colourTextDark font-bold uppercase mt-6">- David Green, Owner</div>
                            <div className='Company'>Greens Of Berkhamsted</div>
                        </div>
                        <div className='leftImageContainer'>
                            <img src={Greens} alt="Greens Of Berkhamsted" className = 'Greens'/>
                        </div>
                    </div>
            </Carousel>  

        </div>

        {/* <div className='transparentSection'></div>    */}


        <div className='HomeContactUs'>
          <ContactUs/>

        </div>
            
        </div>









    )
}

export default HomeContents
