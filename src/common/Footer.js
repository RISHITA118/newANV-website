import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHouse, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

import '../styles/Footer.css'

function Footer() {
    return (
        <>
            {/* <MDBFooter className='text-center text-lg-start'>
                <section className='d-flex justify-content-center justify-content-lg-between p-2'>
                    <div className='ms-4 d-none d-lg-block'>
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href='' className='me-4 text-reset'>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href='' className='text-reset'>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-3'>
                        <MDBRow className='mt-3'>
                            <MDBCol md='4' lg='4' xl='3' className='mx-auto mb-4'>
                                <h6 className='text-uppercase  mb-4 ps-4'>
                                    <MDBIcon color='secondary' icon='gem' className='me-3' />
                                    ANV-Tech
                                </h6>
                                <p className='ps-4'>
                                    Our company specializes in developing user-friendly stock market software, delivering innovation and cutting-edge technology to stay ahead in the financial market.
                                </p>
                            </MDBCol>

                            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                                <h6 className='text-uppercase mb-4'>Products</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        RoboTrader
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        ScanRisk
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        ScanGreeks
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        FeedExchange
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                                <h6 className='text-uppercase mb-4'>Useful links</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Home
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Pricing
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Careers
                                    </a>
                                </p>

                            </MDBCol>

                            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase mb-4'>Contact</h6>
                                <p>
                                    <FontAwesomeIcon icon={faHouse} className='pe-2' />
                                    U-8, Jolly Plaza, Athwagate, Surat – 395001
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faEnvelope} className='pe-2' />
                                    contact@anv-tech.in
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faPhone} className='pe-2' /> 8866214525
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2023 Copyright:
                    <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                        ANV-Tech
                    </a>
                </div>
            </MDBFooter> */}

            <MDBFooter className='text-center text-lg-start'>
                {/* <section className='d-flex justify-content-center justify-content-lg-between p-2'>
                    <div className='ms-4 d-none d-lg-block'>
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href='' className='me-4 text-reset'>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href='' className='text-reset'>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </section> */}

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-3'>
                        <MDBRow className='mt-3 pt-4'>
                            <MDBCol md='4' lg='4' xl='4' className='mx-auto mb-4 p-0'>
                                <h6 className='text-uppercase  mb-4 px-5'>
                                    {/* <MDBIcon color='secondary' icon='gem' className='me-3' /> */}
                                    ANV-Tech
                                </h6>
                                <p className='px-5'>
                                    Our company specializes in developing user-friendly stock market software, delivering innovation and cutting-edge technology to stay ahead in the financial market.
                                </p>
                            </MDBCol>

                            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4 p-0'>
                                <h6 className='text-uppercase mb-4'>Products</h6>
                                <p>
                                    <a href='/product/RoboTrader' className='text-reset'>
                                        RoboTrader
                                    </a>
                                </p>
                                <p>
                                    <a href='/product/ScanRisk' className='text-reset'>
                                        ScanRisk
                                    </a>
                                </p>
                                <p>
                                    <a href='/product/ScanGreeks' className='text-reset'>
                                        ScanGreeks
                                    </a>
                                </p>
                                <p>
                                    <a href='/product/feedExchange' className='text-reset'>
                                        FeedExchange
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4 p-0'>
                                <h6 className='text-uppercase mb-4'>Useful links</h6>
                                <p>
                                    <a href='/home' className='text-reset'>
                                        Home
                                    </a>
                                </p>
                                <p>
                                    <a href='/pricing' className='text-reset'>
                                        Pricing
                                    </a>
                                </p>
                                <p>
                                    <a href='/careers' className='text-reset'>
                                        Careers
                                    </a>
                                </p>

                            </MDBCol>

                            <MDBCol md='2' lg='2' xl='2' className='mx-auto p-0 mb-md-0 mb-4'>
                                {/* <h6 className='text-uppercase mb-4'>Contact</h6>
                                <p>
                                    <FontAwesomeIcon icon={faHouse} className='pe-2' />
                                    U-8, Jolly Plaza, Athwagate, Surat – 395001
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faEnvelope} className='pe-2' />
                                    contact@anv-tech.in
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faPhone} className='pe-2' /> 8866214525
                                </p> */}

                                <a href='' className='me-4 text-reset'>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href='' className='me-4 text-reset'>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href='' className='text-reset'>
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2023 Copyright: &nbsp;
                    <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                        ANV-Tech
                    </a>
                </div>
            </MDBFooter>

        </>
    )
}

export default Footer