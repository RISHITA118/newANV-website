import React from 'react'
import '../styles/Contact.css'

import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';

import Slide from 'react-reveal/Fade';

import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Contact() {
  return (
    <>
      <div className='contact'>
        <Slide bottom>
          <div className='contact-title'>
            <h1>Contact with ANV-Tech</h1>
            <MDBBreadcrumb>
              <MDBBreadcrumbItem>
                <a href='home'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>Contact</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </div>
        </Slide>
      </div>

      <div className='contact-add'>
        <div className='container'>
          <div className='contact-p'>
            {/* <Slide bottom> */}
              <div className='contact-f'>
                <div className='address'>
                  {/* <Slide bottom> */}
                    <h3>Get intouch with us & let's talk.</h3>
                  {/* </Slide> */}
                  {/* <Slide bottom> */}
                    <div className='add-f'>
                      <div className='add-address'>
                        <FontAwesomeIcon icon={faLocationDot} className='icon' />
                        <div className='data'>
                          <h6>Our Address</h6>
                          <p>U-8, Jolly Plaza, Athwagate, Surat – 395001</p>
                        </div>
                      </div>
                      <div className='add-contact'>
                        <FontAwesomeIcon icon={faPhone} className='icon' />
                        <div className='data'>
                          <h6>Get in touch</h6>
                          <p>8866214525</p>
                        </div>
                      </div>
                      <div className='add-mail'>
                        <FontAwesomeIcon icon={faEnvelope} className='icon' />
                        <div className='data'>
                          <h6>Email id</h6>
                          <p>contact@anv-tech.in</p>
                        </div>
                      </div>
                    </div>
                  {/* </Slide> */}

                </div>
                <div className='contact-img'>
                  <img src='https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_System_Software.jpg' width='100%' />
                </div>

              </div>
            {/* </Slide> */}
          </div>
        </div>
      </div >

      <div className='map'>
        <div className='container'>
          <div className='map-p'>
            {/* <Slide bottom> */}
              <div className='map-img'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.1405302428075!2d72.80823697507618!3d21.18657568233974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e7a063f67c5%3A0x1a0982b3472f2666!2sJolly%20Plaza%2C%20Navdi%20Bandar%20Rd%2C%20Near%20Athwa%20Arcade%2C%20Kharwawad%2C%20Nanpura%2C%20Surat%2C%20Gujarat%20395001!5e0!3m2!1sen!2sin!4v1691385700245!5m2!1sen!2sin" width="100%" height="200" style={{ margin: '0px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            {/* </Slide> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
