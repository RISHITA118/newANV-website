import React, { useState } from 'react'
import '../styles/ContactUs.css'

import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';


import Fade from 'react-reveal/Fade';

import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function ContactUs() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        websiteName: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            // Submit the form data to the backend or perform any other action
            console.log('Form submitted successfully:', formData);
        } else {
            // Form validation failed, display error messages or take appropriate action
            console.log('Form validation failed:', validationErrors);
        }
    };

    const validateForm = (data) => {
        const errors = {};
        if (!data.firstName.trim()) {
            errors.firstName = 'First Name is required';
        }
        if (!data.lastName.trim()) {
            errors.lastName = 'Last Name is required';
        }
        if (!data.emailAddress.trim()) {
            errors.emailAddress = 'Email Address is required';
        } else if (!isValidEmail(data.emailAddress)) {
            errors.emailAddress = 'Invalid Email Address';
        }
        if (!data.websiteName.trim()) {
            errors.websiteName = 'Website Name is required';
        }
        if (!data.message.trim()) {
            errors.message = 'Message is required';
        }
        return errors;
    };

    const isValidEmail = (email) => {
        // Basic email validation using regular expression
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };






    return (
        <>
            <div className='contact'>
                <Fade bottom>
                    <div className='contact-title'>
                        <h1>Contact with ANV-Tech</h1>
                        <MDBBreadcrumb>
                            <MDBBreadcrumbItem>
                                <a href='home'>Home</a>
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem active>Contact</MDBBreadcrumbItem>
                        </MDBBreadcrumb>
                    </div>
                </Fade>
            </div>

            <div className='contact-form'>
                <div className='container'>
                    <div className='form-p'>
                        {/* <Fade bottom> */}
                            <div className='form-title'>
                                <h2>We're happy to hear from you</h2>
                            </div>
                            <div className='form-map'>
                                {/* <div className='map'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.1405302428075!2d72.80823697507618!3d21.18657568233974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e7a063f67c5%3A0x1a0982b3472f2666!2sJolly%20Plaza%2C%20Navdi%20Bandar%20Rd%2C%20Near%20Athwa%20Arcade%2C%20Kharwawad%2C%20Nanpura%2C%20Surat%2C%20Gujarat%20395001!5e0!3m2!1sen!2sin!4v1691385700245!5m2!1sen!2sin" width="100%" height="450" style={{ margin: '0px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div> */}
                                <div className='form-data'>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-row">
                                            <div className="input-data">
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <div className="underline"></div>
                                                <label htmlFor="firstName">First Name</label>
                                                {errors.firstName && <div className="error">{errors.firstName}</div>}
                                            </div>
                                            <div className="input-data">
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <div className="underline"></div>
                                                <label htmlFor="lastName">Last Name</label>
                                                {errors.lastName && <div className="error">{errors.lastName}</div>}
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="input-data">
                                                <input
                                                    type="text"
                                                    name="emailAddress"
                                                    value={formData.emailAddress}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <div className="underline"></div>
                                                <label htmlFor="emailAddress">Email Address</label>
                                                {errors.emailAddress && <div className="error">{errors.emailAddress}</div>}
                                            </div>
                                            <div className="input-data">
                                                <input
                                                    type="text"
                                                    name="websiteName"
                                                    value={formData.websiteName}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <div className="underline"></div>
                                                <label htmlFor="websiteName">Website Name</label>
                                                {errors.websiteName && <div className="error">{errors.websiteName}</div>}
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="input-data textarea">
                                                <textarea
                                                    rows="8"
                                                    cols="80"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                ></textarea>
                                                <br />
                                                <div className="underline"></div>
                                                <label htmlFor="message">Write your message</label>
                                                {errors.message && <div className="error">{errors.message}</div>}


                                            </div>
                                        </div>
                                        <div className="form-row submit-btn">
                                            <div className="input-data">
                                                <div className="inner"></div>
                                                <input type="submit" value="submit" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        {/* </Fade> */}

                    </div>
                </div>

            </div >

            <div className='contact-map'>
                <div className='container'>
                    {/* <Fade bottom> */}
                        <div className='map-p'>
                            <div className='map-f'>
                                <div className='map'>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.1405302428075!2d72.80823697507618!3d21.18657568233974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e7a063f67c5%3A0x1a0982b3472f2666!2sJolly%20Plaza%2C%20Navdi%20Bandar%20Rd%2C%20Near%20Athwa%20Arcade%2C%20Kharwawad%2C%20Nanpura%2C%20Surat%2C%20Gujarat%20395001!5e0!3m2!1sen!2sin!4v1691385700245!5m2!1sen!2sin" width="100%" height="350" style={{ margin: '0px' }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                                <div className='address'>
                                    <h3>Get intouch with us & let's talk.</h3>
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
                                </div>
                            </div>
                        </div>
                    {/* </Fade> */}
                </div>
            </div>
        </>
    )
}

export default ContactUs