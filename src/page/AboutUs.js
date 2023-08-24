import React, { useState, useEffect } from 'react';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
} from 'mdb-react-ui-kit';
import '../styles/AboutUs.css'

// import Slide from 'react-reveal/Fade';
import { Slide } from 'react-reveal';


import icon1 from '../images/aboutUs/expertise.png'
import icon2 from '../images/aboutUs/Customer-CentricApproach.png'
import icon3 from '../images/aboutUs/innovation.png'
import icon4 from '../images/aboutUs/QualityAssurance.png'
import icon5 from '../images/aboutUs/TimelyDelivery.png'




function AboutUs() {


    const [fillActive, setFillActive] = useState('tab1');

    const handleFillClick = (value: string) => {
        if (value === fillActive) {
            return;
        }

        setFillActive(value);
    };
    return (
        <>
            <section className='about'>
                <Slide delay={100} duration={1200} bottom>
                    <div className='container'>
                        <Slide bottom>
                            <h1>Welcome to ANV-Tech</h1>
                        </Slide>
                        <Slide bottom>
                            <h6>A leading IT company based in Surat. We are a team of dedicated professionals passionate about harnessing the power of technology to drive innovation and transform businesses. With our comprehensive range of IT solutions and services, we strive to empower organizations to achieve their goals and stay ahead in the digital era.</h6>
                        </Slide>
                    </div>
                </Slide>
            </section>

            {/* <section className='company'>
                <div className='container'>
                    <MDBTabs fill className='mb-3'>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
                                Vision
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
                                Mission
                            </MDBTabsLink>
                        </MDBTabsItem>

                    </MDBTabs>

                    <MDBTabsContent>
                        <MDBTabsPane show={fillActive === 'tab1'}> <div className='company-f'>
                            <div className='content'>
                                <h2>Vision</h2>
                                <p>Our vision is to be a trusted partner for businesses seeking cutting-edge IT solutions. We aim to create a lasting impact by delivering innovative and tailored technology solutions that enable our clients to unlock their full potential.</p>
                            </div>
                            <div className='img'>
                                <img src='https://img.freepik.com/free-vector/vision-statement-concept-illustration_114360-7576.jpg?w=2000' width='100%' />
                            </div>
                        </div></MDBTabsPane>
                        <MDBTabsPane show={fillActive === 'tab2'}> <div className='company-f reverse'>
                            <div className='img'>
                                <img src='https://img.freepik.com/premium-vector/couple-cheerful-business-man-woman-characters-trowing-huge-pen-target_1016-5258.jpg' width='100%' />
                            </div>
                            <div className='content'>
                                <h2>Mission</h2>
                                <p>Our mission is to provide top-notch IT services that enhance operational efficiency, improve customer experiences, and drive business growth. We are committed to leveraging our expertise and industry insights to deliver transformative solutions that address the unique challenges faced by our clients.</p>
                            </div>
                        </div></MDBTabsPane>
                    </MDBTabsContent>
                </div>
            </section> */}

            {/* <div className='company'>
                <div className='container'>
                    <div className='company-p'>
                        <div className='company-future'>
                            <Slide delay={800} duration={1500} bottom>
                                <div className='company-f'>
                                    <div className='content'>
                                        <Slide delay={810} duration={1200} bottom>
                                            <h2>Vision</h2>
                                        </Slide>
                                        <Slide delay={810} duration={1200} bottom>
                                            <p>Our vision is to be a trusted partner for businesses seeking cutting-edge IT solutions. We aim to create a lasting impact by delivering innovative and tailored technology solutions that enable our clients to unlock their full potential.</p>
                                        </Slide>
                                    </div>
                                    <div className='img'>
                                        <img src='https://img.freepik.com/free-vector/vision-statement-concept-illustration_114360-7576.jpg?w=2000' width='100%' />
                                    </div>
                                </div>
                            </Slide>
                            <Slide delay={850} duration={1300} bottom>
                                <div className='company-f reverse'>
                                    <div className='img'>
                                        <img src='https://img.freepik.com/premium-vector/couple-cheerful-business-man-woman-characters-trowing-huge-pen-target_1016-5258.jpg' width='100%' />
                                    </div>
                                    <div className='content'>
                                        <Slide delay={900} duration={1600} bottom>
                                            <h2>Mission</h2>
                                        </Slide>
                                        <Slide delay={900} duration={1400} bottom>
                                            <p>Our mission is to provide top-notch IT services that enhance operational efficiency, improve customer experiences, and drive business growth. We are committed to leveraging our expertise and industry insights to deliver transformative solutions that address the unique challenges faced by our clients.</p>
                                        </Slide>

                                    </div>
                                </div>
                            </Slide>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className='company'>
                <div className='container'>
                    <div className='company-p'>
                        <div className='company-future'>
                            {/* <Slide delay={200} duration={1200} bottom> */}
                                <div className='company-f'>
                                    <div className='content'>
                                        {/* <Slide bottom> */}
                                            <h2>Vision</h2>
                                        {/* </Slide> */}
                                        {/* <Slide bottom> */}
                                            <p>Our vision is to be a trusted partner for businesses seeking cutting-edge IT solutions. We aim to create a lasting impact by delivering innovative and tailored technology solutions that enable our clients to unlock their full potential.</p>
                                        {/* </Slide> */}
                                    </div>
                                    <div className='img'>
                                        {/* <Slide bottom> */}
                                            <img src='https://img.freepik.com/free-vector/vision-statement-concept-illustration_114360-7576.jpg?w=2000' width='100%' alt='Vision' />
                                        {/* </Slide> */}
                                    </div>
                                </div>
                            {/* </Slide> */}
                            {/* <Slide delay={300} duration={1200} bottom> */}
                                <div className='company-f reverse'>
                                    <div className='img'>
                                        {/* <Slide bottom> */}
                                            <img src='https://img.freepik.com/premium-vector/couple-cheerful-business-man-woman-characters-trowing-huge-pen-target_1016-5258.jpg' width='100%' alt='Mission' />
                                        {/* </Slide> */}
                                    </div>
                                    <div className='content'>
                                        {/* <Slide bottom> */}
                                            <h2>Mission</h2>
                                        {/* </Slide> */}
                                        {/* <Slide bottom> */}
                                            <p>Our mission is to provide top-notch IT services that enhance operational efficiency, improve customer experiences, and drive business growth. We are committed to leveraging our expertise and industry insights to deliver transformative solutions that address the unique challenges faced by our clients.</p>
                                        {/* </Slide> */}
                                    </div>
                                </div>
                            {/* </Slide> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className='service'>
                <div className='container'>
                    <div className='service-p'>
                        {/* <Slide delay={400} duration={1400} bottom> */}
                            <h1>Why Choose ANV Tech?</h1>
                        {/* </Slide> */}
                        {/* <Slide delay={500} duration={1400} bottom> */}
                            <div className='services'>
                                <div className='card service-hover'>
                                    <div className='content'>
                                        <img src={icon1} className='icon' />
                                        <h5>Expertise</h5>
                                        <p>Our team comprises highly skilled professionals with extensive industry experience, ensuring that you receive solutions of the highest quality.</p>
                                    </div>
                                </div>
                                <div className='card service-hover'>
                                    <div className='content'>
                                        <img src={icon2} className='icon' />
                                        <h5>Customer-Centric Approach</h5>
                                        <p>We believe in building strong relationships with our clients. We listen to your needs, understand your challenges, and work closely with you to deliver personalized solutions.</p>
                                    </div>
                                </div>
                            </div>
                        {/* </Slide> */}
                        {/* <Slide delay={600} duration={1400} bottom> */}
                            <div className='services-single'>
                                <div className='card service-hover'>
                                    <div className='content'>
                                        <img src={icon3} className='icon' />
                                        <h5>Innovation</h5>
                                        <p>We stay up to date with the latest trends and emerging technologies to provide you with innovative solutions that give you a competitive edge.</p>
                                    </div>
                                </div>
                            </div>
                        {/* </Slide> */}
                        {/* <Slide delay={700} duration={1400} bottom> */}
                            <div className='services'>
                                <div className='card service-hover'>
                                    <div className='content'>
                                        <img src={icon4} className='icon' />
                                        <h5>Quality Assurance</h5>
                                        <p>We have stringent quality control measures in place to ensure that every project we undertake meets the highest standards of excellence.</p>
                                    </div>
                                </div>
                                <div className='card service-hover'>
                                    <div className='content'>
                                        <img src={icon5} className='icon' />
                                        <h5>Timely Delivery</h5>
                                        <p>We understand the importance of deadlines. Our agile project management methodology allows us to deliver projects on time, without compromising on quality.</p>
                                    </div>
                                </div>
                            </div>
                        {/* </Slide> */}
                    </div>
                </div >
            </div>


        </>
    )
}

export default AboutUs