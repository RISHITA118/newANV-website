import React, { useState } from 'react'
import '../styles/PricingPage.css'
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import Fade from 'react-reveal/Fade';
import DemoForm from '../components/DemoForm';

import '../styles/DemoForm.css'

import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
import { Slide } from 'react-reveal';

import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
} from 'mdb-react-ui-kit';


function PricingPage() {
    // demopopup form

    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);

    const [justifyActive, setJustifyActive] = useState('tab1');

    const handleJustifyClick = (value: string) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };


    return (
        <>
            <div className='price-table'>
                <div className='p-title'>
                    <Slide bottom>
                        <h1>Our Pricing Plans</h1>
                        <MDBBreadcrumb>
                            <MDBBreadcrumbItem>
                                <a href='home'>Home</a>
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem active>Pricing</MDBBreadcrumbItem>
                        </MDBBreadcrumb>
                    </Slide>
                </div>
            </div>


            <div className='pricing'>
                <div className='container'>
                    <div className='pricing-p'>
                        <div className='pricing-f'>
                            <div className='plans-content'>
                                <div className="wrapper">
                                    <div className="p-table gprice-single">
                                        <div className="head">
                                            <h4 className="title">RoboTrader</h4>
                                        </div>
                                        <div className="content">
                                            <p>
                                                Explore reliable algo platform for quant traders. Enjoy user-friendliness, advanced features, and streamlined strategy execution. Elevate your trading now.</p>
                                            <ul>
                                                <li>5 GB Ram</li>
                                                <li>40GB SSD Cloud Storage</li>
                                                <li>Month Subscription</li>
                                                <li>Responsive Framework</li>
                                                <li> <del>Monthly Billing Software</del> </li>
                                                <li> <del>1 Free Website</del></li>
                                            </ul>
                                            {/* <div className="sign-up">
                                                <a href="#" className="btn bordered radius">Signup Now</a>
                                            </div> */}
                                            <button className='button'> Free
                                            </button>
                                            <button className='button'> Premium
                                            </button>
                                        </div>

                                    </div>
                                    <div className="p-table gprice-single">
                                        <div className="head">
                                            <h4 className="title">ScanRisk</h4>
                                        </div>
                                        <div className="content">
                                            <p>Optimize capital, derivatives, and currency trading with dynamic exposure software. Real-time insights enhance risk management, boosting confident, profitable decisions.</p>
                                            <ul>
                                                <li>5 GB Ram</li>
                                                <li>40GB SSD Cloud Storage</li>
                                                <li>Month Subscription</li>
                                                <li>Responsive Framework</li>
                                                <li>Monthly Billing Software</li>
                                                <li><del>1 Free Website</del></li>
                                            </ul>
                                            <button className='button'> Free
                                            </button>
                                            <button className='button'> Premium
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='plans-content'>
                                <div className="wrapper">
                                    <div className="p-table gprice-single">
                                        <div className="head">
                                            <h4 className="title">ScanGreeks</h4>
                                        </div>
                                        <div className="content">
                                            <p>Empower traders with Greek insights, VAR analysis, and real-time connectivity. Advanced risk tools mitigate risk, inform decisions, and enhance trading strategies.</p>
                                            <ul>
                                                <li>5 GB Ram</li>
                                                <li>40GB SSD Cloud Storage</li>
                                                <li>Month Subscription</li>
                                                <li>Responsive Framework</li>
                                                <li> <del>Monthly Billing Software</del> </li>
                                                <li> <del>1 Free Website</del></li>
                                            </ul>
                                            <button className='button'> Free
                                            </button>
                                            <button className='button'> Premium
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-table gprice-single">
                                        <div className="head">
                                            <h4 className="title">ExchangeFeed</h4>
                                        </div>
                                        <div className="content">
                                            <p>Revolutionize market data integration with Exchange Feed Reader. Direct exchange data retrieval cuts API calls, reduces latency, ensures real-time insights, and boosts trading efficiency.</p>
                                            <ul>
                                                <li>5 GB Ram</li>
                                                <li>40GB SSD Cloud Storage</li>
                                                <li>Month Subscription</li>
                                                <li>Responsive Framework</li>
                                                <li>Monthly Billing Software</li>
                                                <li><del>1 Free Website</del></li>
                                            </ul>
                                            <button className='button'> Free
                                            </button>
                                            <button className='button'> Premium
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* <div className='plans'>
                <div className='plans-p'>
                    <MDBTabs justify className='pt-4 ps-3'>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                                RoboTrader
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                                ScanRisk
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleJustifyClick('tab3')} active={justifyActive === 'tab3'}>
                                ScanGreeks
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleJustifyClick('tab4')} active={justifyActive === 'tab4'}>
                                ExchangeFeed
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>

                    <MDBTabsContent>
                        <MDBTabsPane show={justifyActive === 'tab1'}>
                            <div className='plans-content'>
                                <div className="wrapper">
                                    <div className="p-table gprice-single">
                                        <div className="head">
                                            <h4 className="title">Basic</h4>
                                        </div>
                                        <div className="content">
                                            <div className="price">
                                                <h1>Rs</h1>
                                            </div>
                                            <ul>
                                                <li>5 GB Ram</li>
                                                <li>40GB SSD Cloud Storage</li>
                                                <li>Month Subscription</li>
                                                <li>Responsive Framework</li>
                                                <li> <del>Monthly Billing Software</del> </li>
                                                <li> <del>1 Free Website</del></li>
                                            </ul>
                                            <div className="sign-up">
                                                <a href="#" className="btn bordered radius">Signup Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-table gprice-single">
                                        <div className="head">
                                            <h4 className="title">Standard</h4>
                                        </div>
                                        <div className="content">
                                            <div className="price">
                                                <h1>$</h1>
                                            </div>
                                            <ul>
                                                <li>5 GB Ram</li>
                                                <li>40GB SSD Cloud Storage</li>
                                                <li>Month Subscription</li>
                                                <li>Responsive Framework</li>
                                                <li>Monthly Billing Software</li>
                                                <li><del>1 Free Website</del></li>
                                            </ul>
                                            <div className="sign-up">
                                                <a href="#" className="btn bordered radius">Signup Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-table gprice-single">
                                        <div className="head">
                                            <h4 className="title">Premium</h4>
                                        </div>
                                        <div className="content">
                                            <div className="price">
                                                <h1>$</h1>
                                            </div>
                                            <ul>
                                                <li>5 GB Ram</li>
                                                <li>40GB SSD Cloud Storage</li>
                                                <li>Month Subscription</li>
                                                <li>Responsive Framework</li>
                                                <li>Monthly Billing Software</li>
                                                <li>1 Free Website</li>
                                            </ul>
                                            <div className="sign-up">
                                                <a href="#" className="btn bordered radius">Signup Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </MDBTabsPane>
                        <MDBTabsPane show={justifyActive === 'tab2'}>
                            <div className='plans-content'>

                                <div className="wrapper">
                                    <div className="p-table gprice-single">
                                        <div className="head">
                                            <h4 className="title">Basic</h4>
                                        </div>
                                        <div className="content">
                                            <div className="price">
                                                <h1>Rs</h1>
                                            </div>
                                            <ul>
                                                <li>5 GB Ram</li>
                                                <li>40GB SSD Cloud Storage</li>
                                                <li>Month Subscription</li>
                                                <li>Responsive Framework</li>
                                                <li> <del>Monthly Billing Software</del> </li>
                                                <li> <del>1 Free Website</del></li>
                                            </ul>
                                            <div className="sign-up">
                                                <a href="#" className="btn bordered radius">Signup Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-table gprice-single">
                                        <div className="head">
                                            <h4 className="title">Standard</h4>
                                        </div>
                                        <div className="content">
                                            <div className="price">
                                                <h1>$</h1>
                                            </div>
                                            <ul>
                                                <li>5 GB Ram</li>
                                                <li>40GB SSD Cloud Storage</li>
                                                <li>Month Subscription</li>
                                                <li>Responsive Framework</li>
                                                <li>Monthly Billing Software</li>
                                                <li><del>1 Free Website</del></li>
                                            </ul>
                                            <div className="sign-up">
                                                <a href="#" className="btn bordered radius">Signup Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-table gprice-single">
                                        <div className="head">
                                            <h4 className="title">Premium</h4>
                                        </div>
                                        <div className="content">
                                            <div className="price">
                                                <h1>$</h1>
                                            </div>
                                            <ul>
                                                <li>5 GB Ram</li>
                                                <li>40GB SSD Cloud Storage</li>
                                                <li>Month Subscription</li>
                                                <li>Responsive Framework</li>
                                                <li>Monthly Billing Software</li>
                                                <li>1 Free Website</li>
                                            </ul>
                                            <div className="sign-up">
                                                <a href="#" className="btn bordered radius">Signup Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </MDBTabsPane>
                        <MDBTabsPane show={justifyActive === 'tab3'}>
                            <div className='plans-content'>

                                <div className="wrapper">
                                    <div className="p-table gprice-single">
                                        <div className="head">
                                            <h4 className="title">Basic</h4>
                                        </div>
                                        <div className="content">
                                            <div className="price">
                                                <h1>Rs</h1>
                                            </div>
                                            <ul>
                                                <li>5 GB Ram</li>
                                                <li>40GB SSD Cloud Storage</li>
                                                <li>Month Subscription</li>
                                                <li>Responsive Framework</li>
                                                <li> <del>Monthly Billing Software</del> </li>
                                                <li> <del>1 Free Website</del></li>
                                            </ul>
                                            <div className="sign-up">
                                                <a href="#" className="btn bordered radius">Signup Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-table gprice-single">
                                        <div className="head">
                                            <h4 className="title">Standard</h4>
                                        </div>
                                        <div className="content">
                                            <div className="price">
                                                <h1>$</h1>
                                            </div>
                                            <ul>
                                                <li>5 GB Ram</li>
                                                <li>40GB SSD Cloud Storage</li>
                                                <li>Month Subscription</li>
                                                <li>Responsive Framework</li>
                                                <li>Monthly Billing Software</li>
                                                <li><del>1 Free Website</del></li>
                                            </ul>
                                            <div className="sign-up">
                                                <a href="#" className="btn bordered radius">Signup Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-table gprice-single">
                                        <div className="head">
                                            <h4 className="title">Premium</h4>
                                        </div>
                                        <div className="content">
                                            <div className="price">
                                                <h1>$</h1>
                                            </div>
                                            <ul>
                                                <li>5 GB Ram</li>
                                                <li>40GB SSD Cloud Storage</li>
                                                <li>Month Subscription</li>
                                                <li>Responsive Framework</li>
                                                <li>Monthly Billing Software</li>
                                                <li>1 Free Website</li>
                                            </ul>
                                            <div className="sign-up">
                                                <a href="#" className="btn bordered radius">Signup Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </MDBTabsPane>
                        <MDBTabsPane show={justifyActive === 'tab4'}>
                            <div className='plans-content'>
                                <div className="wrapper">
                                    <div className="p-table gprice-single">
                                        <div className="head">
                                            <h4 className="title">Basic</h4>
                                        </div>
                                        <div className="content">
                                            <div className="price">
                                                <h1>Rs</h1>
                                            </div>
                                            <ul>
                                                <li>5 GB Ram</li>
                                                <li>40GB SSD Cloud Storage</li>
                                                <li>Month Subscription</li>
                                                <li>Responsive Framework</li>
                                                <li> <del>Monthly Billing Software</del> </li>
                                                <li> <del>1 Free Website</del></li>
                                            </ul>
                                            <div className="sign-up">
                                                <a href="#" className="btn bordered radius">Signup Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-table gprice-single">
                                        <div className="head">
                                            <h4 className="title">Standard</h4>
                                        </div>
                                        <div className="content">
                                            <div className="price">
                                                <h1>$</h1>
                                            </div>
                                            <ul>
                                                <li>5 GB Ram</li>
                                                <li>40GB SSD Cloud Storage</li>
                                                <li>Month Subscription</li>
                                                <li>Responsive Framework</li>
                                                <li>Monthly Billing Software</li>
                                                <li><del>1 Free Website</del></li>
                                            </ul>
                                            <div className="sign-up">
                                                <a href="#" className="btn bordered radius">Signup Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-table gprice-single">
                                        <div className="head">
                                            <h4 className="title">Premium</h4>
                                        </div>
                                        <div className="content">
                                            <div className="price">
                                                <h1>$</h1>
                                            </div>
                                            <ul>
                                                <li>5 GB Ram</li>
                                                <li>40GB SSD Cloud Storage</li>
                                                <li>Month Subscription</li>
                                                <li>Responsive Framework</li>
                                                <li>Monthly Billing Software</li>
                                                <li>1 Free Website</li>
                                            </ul>
                                            <div className="sign-up">
                                                <a href="#" className="btn bordered radius">Signup Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </MDBTabsPane>
                    </MDBTabsContent>
                </div>

            </div> */}

            <div className='demo'>
                <div className='container'>
                    <Slide bottom>
                        <div className='demo-content'>
                            <h5>Gain a competitive edge in the fast-paced world of trading with our revolutionary Trading Tools.</h5>
                            <p>Experience the future of trading today!</p>
                            <div className="btn-conteiner">
                                <a className="btn-content" onClick={toggleShow}>
                                    <span className="btn-title">Book A Demo</span>
                                    <span className="icon-arrow">
                                        <svg width="66px" height="43px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                            <g id="arrow" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                <path id="arrow-icon-one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF" />
                                                <path id="arrow-icon-two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF" />
                                                <path id="arrow-icon-three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF" />
                                            </g>
                                        </svg>
                                    </span>
                                </a>
                            </div>

                        </div>
                    </Slide>
                </div>
            </div >


            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle></MDBModalTitle>
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

export default PricingPage