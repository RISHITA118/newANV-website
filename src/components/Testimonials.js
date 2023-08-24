import React, { Component } from 'react'
import '../styles/Testimonials.css'

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


import Fade from 'react-reveal/Fade';



function Testimonials() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <div className='testimonial'>
                <Fade bottom>
                    <div className='test'>
                        <h1>Testimonials</h1>
                    </div>
                    <Carousel
                        showArrows={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        showStatus={false}
                        autoPlay={true}
                        interval={5000}
                    >
                        <div className=''>
                            <img src='https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png' width='100%' />
                            <div className="myCarousel">
                                <h3>Shirley Fultz</h3>
                                <h4>Designer</h4>
                                <p>
                                    It's freeing to be able to catch up on customized news and not be
                                    distracted by a social media element on the same site
                                </p>
                            </div>
                        </div>

                        <div>
                            <img src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png" />
                            <div className="myCarousel">
                                <h3>Daniel Keystone</h3>
                                <h4>Designer</h4>
                                <p>
                                    The simple and intuitive design makes it easy for me use. I highly
                                    recommend Fetch to my peers.
                                </p>
                            </div>
                        </div>

                        <div>
                            <img src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png" />
                            <div className="myCarousel">
                                <h3>Theo Sorel</h3>
                                <h4>Designer</h4>
                                <p>
                                    I enjoy catching up with Fetch on my laptop, or on my phone when
                                    I'm on the go!
                                </p>
                            </div>
                        </div>
                    </Carousel>
                </Fade>
            </div>
        </>
    );
}



export default Testimonials