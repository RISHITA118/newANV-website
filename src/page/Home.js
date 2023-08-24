import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Typewriter from 'typewriter-effect';
import '../styles/HomeBanner.css'
import '../styles/Product.css'
import {

  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn
} from 'mdb-react-ui-kit';
import TopScroll from '../components/TopScroll';

import Fade from 'react-reveal/Fade';
import ProductHome from '../components/ProductHome';

// import banner from '../images/img.png'
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import DemoForm from '../components/DemoForm';

import bookDemo from '../images/book.png'

import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';


import Reveal from 'react-reveal/Reveal';

import Slide from 'react-reveal/Slide';

function Home() {

  const [justifyActive, setJustifyActive] = useState('tab1');

  const handleJustifyClick = (value: string) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };


  // for small screen slider

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };



  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);



  return (
    <>
      <section className='home-banner'>
        <div className='banner'>
          <div className='banner-p'>
            <div className='banner-f'>
              {/* <Slide delay={500} duration={3000} left> */}
                <div className='banner-content'>
                  {/* <Slide delay={200} duration={2000} left> */}
                    <h1>
                      {/* <Typewriter
                    options={{
                      strings: ['Take your trading journey to new heights with ANV-Tech.'],
                      autoStart: true,
                      loop: true,
                      delay: 180,
                    }}
                  /> */}
                      Take your trading journey to new heights with <span style={{ color: '#ee6c4d' }}>ANV-Tech.</span>
                    </h1>
                  {/* </Slide> */}
                  {/* <Slide delay={1000} duration={1800} left> */}
                    <p>Gain a competitive edge in the fast-paced world of trading with our revolutionary Trading Tools.Experience the future of trading today!</p>
                  {/* </Slide> */}
                  {/* <h5 className='future'>Experience the future of trading today!</h5> */}
                  {/* <Slide delay={1500} duration={2500} left> */}
                    <button className='demoBtn'><a href='#' onClick={toggleShow}>Book a Demo  <img src={bookDemo} width='30px' style={{ marginBottom: '2px' }} className='demoIcon'></img> </a></button>
                  {/* </Slide> */}
                </div>
              {/* </Slide> */}
              <div className='banner-img'>
                <div className='imgs'>
                  <div className='img1 shadow'></div>
                  <div className='img2 shadow'></div>
                  <div className='img3 shadow'></div>
                  <div className='img4 shadow'></div>
                  <div className='img5 shadow'></div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='small-banner'>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg?w=900&t=st=1691137783~exp=1691138383~hmac=b0a578b362cf3b57d522f82b1293bd506c879e257ec02210f610069f6b4cc1e0"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Take your trading journey to new heights with ANV-Tech.</h3>
                <p>Gain a competitive edge in the fast-paced world of trading with our revolutionary Trading Tools.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?w=900&t=st=1691137800~exp=1691138400~hmac=7ee7732f1c615d2ff3cadae5ba99d0b4949894551bb6d24567eb85f252ff5207"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Take your trading journey to new heights with ANV-Tech.</h3>
                <p>Gain a competitive edge in the fast-paced world of trading with our revolutionary Trading Tools.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 opacity-10"
                src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010144.jpg?w=900&t=st=1691137810~exp=1691138410~hmac=fe48cb7591467b0d989af0e6d450bbfeeba1f0f7a5e4496db58f16f46e82c220"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Take your trading journey to new heights with ANV-Tech.</h3>
                <p>Gain a competitive edge in the fast-paced world of trading with our revolutionary Trading Tools.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>

      {/* <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://i.pcmag.com/imagery/roundups/02HDufdqeRUDu3tl0NnY2qZ-2..v1649351854.jpg')", height: '600px' }}
      >
        <div className='mask' >
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Heading</h1>
              <h4 className='mb-3'>Subheading</h4>
              <MDBBtn tag="a" outline size="lg">
                Call to action
              </MDBBtn>
            </div>
          </div>
        </div>
      </div> */}



      {/* <div className='product product-bg'>
        <div className='container'>
          <div className='product-p'>
            <div className='product-title'>
              <h1>Our Products</h1>
            </div>
            <MDBTabs justify className='my-3'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                  <h5>RoboTrader</h5>
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                  <h5>ScanRisk</h5>
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleJustifyClick('tab3')} active={justifyActive === 'tab3'}>
                  <h5>ScanGreeks</h5>
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
              <MDBTabsPane show={justifyActive === 'tab1'}>
                <div className='product-f'>
                  <Fade left>
                    <div className='product-img'>
                      <img src='https://media.istockphoto.com/id/1273360297/photo/future-financial-technology-controlled-by-ai-robot-using-machine-learning-and-artificial.jpg?s=612x612&w=0&k=20&c=s3vK0HhLmGmrEG3R4Ox60DPRgm_XuXRYEVnmTkK6HgI='></img>
                    </div>
                  </Fade>
                  <Fade right>
                    <div className='product-content robo'>
                      <h3>ROBOTRADER by ANV is Algo trading platform for quant traders
                        which is reliable and easy to use.</h3>
                      <ul>
                        <li>Seamless Integration</li>
                        <li>Customized Strategy</li>
                        <li>Risk Management Tools</li>
                        <li>Accurate and Fast</li>
                      </ul>
                      <button className='moreButton'>
                        More Info
                        <div class="arrow-wrapper">
                          <div class="arrow"></div>

                        </div>
                      </button>
                    </div>
                  </Fade>
                </div>
              </MDBTabsPane>
              <MDBTabsPane show={justifyActive === 'tab2'}>
                <div className='product-f'>
                  <Fade left>
                    <div className='product-img'>
                      <img src='https://blog.webhopers.com/wp-content/uploads/2022/03/Software-Development-Company-in-Lucknow.jpg'></img>
                    </div>
                  </Fade>
                  <Fade right>
                    <div className='product-content risk'>
                      <h3>Is a Real-time exposure and margin management software
                        for capital, derivatives, and currency trading.</h3>
                      <ul>
                        <li>Online Margin report and comparison</li>
                        <li>What If Analysis tool</li>
                        <li>Arbitrage Module to exploit Profitable Opportunity</li>
                        <li>Alert based on specific requirements</li>
                        <li>Margin forecast</li>

                      </ul>
                      <button className='moreButton'>
                        More Info
                        <div class="arrow-wrapper">
                          <div class="arrow"></div>

                        </div>
                      </button>
                    </div>
                  </Fade>
                </div>
              </MDBTabsPane>
              <MDBTabsPane show={justifyActive === 'tab3'}>
                <div className='product-f'>
                  <Fade left>
                    <div className='product-img'>
                      <img src='https://res.cloudinary.com/practicaldev/image/fetch/s--V0ekZaVJ--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/h68x0up43hmknl5tjcww.jpg'></img>
                    </div>
                  </Fade>
                  <Fade right>
                    <div className='product-content'>
                      <h3>Empower traders with advanced Greeks insights, VAR analysis, risk management, and real-time connectivity for informed decisions.</h3>
                      <ul>
                        <li>Manage Risk of your portfolio</li>
                        <li>Unparallel Speed & accuracy</li>
                        <li>Live Risk Management</li>
                        <li>Single comprehensive report containing all relevant information</li>
                      </ul>
                      <button className='moreButton'>
                        More Info
                        <div class="arrow-wrapper">
                          <div class="arrow"></div>

                        </div>
                      </button>
                    </div>
                  </Fade>
                </div>
              </MDBTabsPane>
            </MDBTabsContent>
          </div>
        </div>
      </div>  */}

      <ProductHome />

      <TopScroll />

      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              {/* <MDBModalTitle>BOOK  A DEMO</MDBModalTitle> */}
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <h4 style={{ textAlign: 'center' }}>BOOK A DEMO</h4>
              <p style={{ textAlign: 'center', paddingBottom: '15px', color: '#ee6c4d' }}>Your Data Securely Managed here</p>
              <form action="#">
                <div className="data">
                  {/* <label>Email or Phone</label> */}
                  <input type="text" required placeholder='Full Name' />
                </div>
                <div className="data">
                  {/* <label>Password</label> */}
                  <input type="password" required placeholder='Contact Number' />
                </div>
                <div className="data">
                  {/* <label>Password</label> */}
                  <input type="text" required placeholder='Email' />
                </div>
                <div className="btn">
                  <div className="inner"></div>
                  <button type="submit">Submit</button>
                </div>

              </form>
            </MDBModalBody>

            {/* <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={toggleShow}>
                                Close
                            </MDBBtn>
                            <MDBBtn>Save changes</MDBBtn>
                        </MDBModalFooter> */}
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  )
}

export default Home