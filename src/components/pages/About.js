import '../../App.css';
import'../pagescss/About.css';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import HeroPhone from '../../images/Hero1.png'


  // componentDidMount = () => {
  //   console.log('hi')
  // }



function About() {


  return (
        <>
            <div className="AboutHero" >


                <h1 className="AboutHeroTitle">
                  About Just2Connect
                </h1>
                <div className="AboutHeroTextContainer">
                  <p className="AboutHeroText">
                    The Founders of Just2Connect have over 40 years of experience in providing IT and telecom solutions to small and medium sized businesses. We understand the importance of value for money and exceptional customer support.
                  </p>
                </div>
                <div className="AboutHeroTextContainer">
                  <p className="AboutHeroText">
                    We pride ourselves on being an approachable business, our senior leadership team are always available to discuss our clients’ needs.
                  </p>
                </div>
                <div className="AboutHeroTextContainer">
                   <p className="AboutHeroText">
                   Our expertise and experience means that we can quickly offer you exactly what you need and, as technology improves, we strive to pass on price reductions and service enhancements directly to you.
                   </p>
                </div> 

            
            </div>

      {/* https://www.npmjs.com/package/react-vertical-timeline-component
      Need to fix the height */}

            <div className="CEOExperience">
              <h1 className="CEOExperienceTitle">
                Our History
              </h1>
              <div className="CEOExperienceInnerContainer">
                  <VerticalTimeline>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{ background: '#1f306d', color: '#fff' }}
                      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                      date="2011 - present"
                      iconStyle={{ background: '#1f306d', color: '#fff' }}
                      // icon={<WorkIcon />}
                    >
                      <h3 className="vertical-timeline-element-title">Creative Director</h3>
                      <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                      <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                      </p>
                    </VerticalTimelineElement>




                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="2010 - 2011"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      // icon={<WorkIcon />}
                    >
                      <h3 className="vertical-timeline-element-title">Art Director</h3>
                      <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                      <p>
                        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                      </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="2010 - 2011"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      // icon={<WorkIcon />}
                    >
                      <h3 className="vertical-timeline-element-title">Art Director</h3>
                      <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                      <p>
                        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                      </p>
                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="2008 - 2010"
                      iconStyle={{ background: '#1f306d', color: '#fff' }}
                      // icon={<WorkIcon />}
                    >
                      <h3 className="vertical-timeline-element-title">Web Designer</h3>
                      <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                      <p>
                        User Experience, Visual Design
                      </p>
                    </VerticalTimelineElement>



                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="2006 - 2008"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      // icon={<WorkIcon />}
                    >
                      <h3 className="vertical-timeline-element-title">Web Designer</h3>
                      <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                      <p>
                        User Experience, Visual Design
                      </p>
                    </VerticalTimelineElement>



                    <VerticalTimelineElement
                      className="vertical-timeline-element--education"
                      date="April 2013"
                      iconStyle={{ background: '#1f306d', color: '#fff' }}
                      // icon={<SchoolIcon />}
                    >
                      <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                      <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                      <p>
                        Strategy, Social Media
                      </p>
                    </VerticalTimelineElement>



                    <VerticalTimelineElement
                      className="vertical-timeline-element--education"
                      date="November 2012"
                      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                      // icon={<SchoolIcon />}
                    >
                      <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                      <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                      <p>
                        Creative Direction, User Experience, Visual Design
                      </p>
                    </VerticalTimelineElement>



                    <VerticalTimelineElement
                      className="vertical-timeline-element--education"
                      date="2002 - 2006"
                      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                      // icon={<SchoolIcon />}
                    >
                      <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                      <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                      <p>
                        Creative Direction, Visual Design
                      </p>
                    </VerticalTimelineElement>
                    
                    <VerticalTimelineElement
                      iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                      // icon={<StarIcon />}
                    />
                  </VerticalTimeline>
               </div>
            </div>
        </>
  );


}

export default About;
