import React, { useState } from 'react'
import '../styles/RoboTraders.css'

import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

import Fade from 'react-reveal/Fade';



import icon1 from '../images/robo/integration.png'
import icon2 from '../images/robo/statergy.png'
import icon3 from '../images/robo/speed.png'
import icon4 from '../images/robo/optimization.png'
import icon5 from '../images/robo/monitoring&notification.png'
import icon6 from '../images/robo/reliability.png'
import icon7 from '../images/robo/high-risk-.png'
import { Slide } from 'react-reveal';


function RoboTraders() {

    const [verticalActive, setVerticalActive] = useState('tab1');

    const handleVerticalClick = (value: string) => {
        if (value === verticalActive) {
            return;
        }

        setVerticalActive(value);
    };
    return (
        <>
            <div className='robo'>
                <div className='container'>
                    <div className='robo-title'>
                        <Fade bottom delay={200} duration={1200}>
                            <h1>RoboTraders</h1>
                        </Fade>
                        <Fade bottom delay={400} duration={1200}>
                            <h5>Automate Your Trades with Precision and Efficiency</h5>
                        </Fade>
                        <Fade bottom delay={600} duration={1200}>
                            <p>Unlock the Power of Automated Trading with ANV Tech's RoboTrader Application!
                            </p>
                        </Fade>
                        <Fade bottom delay={800} duration={1200}>
                            <p>Welcome to ANV Tech, where cutting-edge technology meets the world of finance. We are proud to present Robotrader, a revolutionary application designed to streamline your trading process and maximize your potential for success. With Robotrader, you can take advantage of automated trading strategies tailored to your specific requirements, allowing you to make informed decisions and execute trades with precision and efficiency.</p>
                        </Fade>
                    </div>
                </div>
            </div>

            <div className='product-det'>
                <div className='container'>
                    <div className='product-p'>
                        <div className='product-title'>
                            {/* <Fade bottom delay={1000} duration={1400}> */}
                            <h1>Why Choose Robotrader?</h1>
                            {/* </Fade> */}
                        </div>
                        <div className='data'>
                            <div className='det-f'>
                                {/* <Fade bottom delay={1200} duration={1400}> */}
                                <div className='content'>
                                    <img src={icon1} />
                                    <h5>Seamless Integration</h5>
                                    <p>Robotrader seamlessly integrates with your preferred trading platform through APIs, enabling direct communication and real-time data exchange. Connect with popular exchanges and trading platforms effortlessly, ensuring a smooth and hassle-free trading experience.</p>
                                </div>
                                {/* </Fade> */}
                                {/* <Fade bottom delay={1200} duration={1400}> */}
                                <div className='content'>
                                    <img src={icon2} />
                                    <h5>Customized Strategies</h5>
                                    <p>Our team of experienced professionals will work closely with you to develop trading strategies that align with your unique goals and risk tolerance. Whether you are a beginner looking for a simple strategy or a seasoned trader seeking advanced algorithms, Robotrader has you covered.</p>
                                </div>
                                {/* </Fade> */}
                            </div>
                            <div className='det-f'>
                                {/* <Fade bottom delay={1200} duration={1500}> */}
                                <div className='content'>
                                    <img src={icon3} />
                                    <h5>Precision and Speed</h5>
                                    <p>Eliminate the risk of human error and reduce response time with Robotrader's lightning-fast execution. Take advantage of split-second market opportunities, capitalize on price fluctuations, and stay one step ahead of the competition.</p>
                                </div>
                                {/* </Fade> */}
                                {/* <Fade bottom delay={1200} duration={1500}> */}
                                <div className='content'>
                                    <img src={icon4} />
                                    <h5>Back testing and Optimization</h5>
                                    <p>Test your strategies against historical market data to assess their performance and fine-tune them for optimal results. Our advanced back testing and optimization features empower you to make data-driven decisions and increase your profitability.</p>
                                </div>
                                {/* </Fade> */}
                            </div>
                            <div className='det-f'>
                                {/* <Fade bottom delay={1200} duration={1600}> */}
                                <div className='content'>
                                    <img src={icon5} />
                                    <h5>Real-Time Monitoring and Notifications</h5>
                                    <p>Stay informed about your trades at all times with Robotrader's comprehensive monitoring system. Receive instant notifications, alerts, and performance reports, allowing you to stay in control of your portfolio even when you're on the go.</p>
                                </div>
                                {/* </Fade> */}
                                {/* <Fade bottom delay={1200} duration={1600}> */}
                                <div className='content'>
                                    <img src={icon6} />
                                    <h5>Security and Reliability</h5>
                                    <p>At ANV Tech, we prioritize the security of your assets and sensitive information. Robotrader employs state-of-the-art encryption protocols and follows industry best practices to ensure your data remains secure and confidential.</p>
                                </div>
                                {/* </Fade> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div >


            {/* <div className='product-det'>
                <div className='container'>
                    <div className='product-p'>
                        <div className='product-title'>
                            <h1>Why Choose Robotrader?</h1>
                        </div>
                        <MDBRow>
                            <MDBCol size='4'>
                                <MDBTabs className='flex-column text-center'>
                                    <MDBTabsItem>
                                        <MDBTabsLink onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'}>
                                            <div className='features'>
                                                <div className='image'>
                                                    <img src={icon1} className=' ' />
                                                </div>
                                                <h5>Seamless Integration</h5>
                                            </div>
                                        </MDBTabsLink>
                                    </MDBTabsItem>
                                    <MDBTabsItem>
                                        <MDBTabsLink onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'}>
                                            <div className='features'>
                                                <div className='image'>
                                                    <img src={icon2} className='' />
                                                </div>
                                                <h5>Customized Strategies</h5>
                                            </div>
                                        </MDBTabsLink>
                                    </MDBTabsItem>

                                    <MDBTabsItem>
                                        <MDBTabsLink onClick={() => handleVerticalClick('tab3')} active={verticalActive === 'tab3'}>
                                            <div className='features'>
                                                <div className='image'>
                                                    <img src={icon3} className='' />
                                                </div>
                                                <h5>Precision and Speed</h5>
                                            </div>
                                        </MDBTabsLink>
                                    </MDBTabsItem>
                                    <MDBTabsItem>
                                        <MDBTabsLink onClick={() => handleVerticalClick('tab4')} active={verticalActive === 'tab4'}>
                                            <div className='features'>
                                                <div className='image'>
                                                    <img src={icon4} className='' />
                                                </div>
                                                <h5>Back testing and Optimization</h5>
                                            </div>
                                        </MDBTabsLink>
                                    </MDBTabsItem>
                                    <MDBTabsItem>
                                        <MDBTabsLink onClick={() => handleVerticalClick('tab5')} active={verticalActive === 'tab5'}>
                                            <div className='features'>
                                                <div className='image'>
                                                    <img src={icon5} className='' />
                                                </div>
                                                <h5>Real-Time Monitoring and Notifications</h5>
                                            </div>
                                        </MDBTabsLink>
                                    </MDBTabsItem>
                                    <MDBTabsItem>
                                        <MDBTabsLink onClick={() => handleVerticalClick('tab6')} active={verticalActive === 'tab6'}>
                                            <div className='features'>
                                                <div className='image'>
                                                    <img src={icon6} className='' />
                                                </div>
                                                <h5>Security and Reliability</h5>
                                            </div>
                                        </MDBTabsLink>
                                    </MDBTabsItem>
                                    <MDBTabsItem>
                                        <MDBTabsLink onClick={() => handleVerticalClick('tab7')} active={verticalActive === 'tab7'}>
                                            <div className='features'>
                                                <div className='image'>
                                                    <img src={icon7} className='' />
                                                </div>
                                                <h5>Risk Management Tools</h5>
                                            </div>
                                        </MDBTabsLink>
                                    </MDBTabsItem>
                                </MDBTabs>
                            </MDBCol>
                            <MDBCol size='8'>
                                <MDBTabsContent>
                                    <MDBTabsPane show={verticalActive === 'tab1'}>
                                        <p>Robotrader seamlessly integrates with your preferred trading platform through APIs, enabling direct communication and real-time data exchange. Connect with popular exchanges and trading platforms effortlessly, ensuring a smooth and hassle-free trading experience.</p>
                                    </MDBTabsPane>
                                    <MDBTabsPane show={verticalActive === 'tab2'}>
                                        <p>
                                            Our team of experienced professionals will work closely with you to develop trading strategies that align with your unique goals and risk tolerance. Whether you are a beginner looking for a simple strategy or a seasoned trader seeking advanced algorithms, Robotrader has you covered.
                                        </p>
                                    </MDBTabsPane>
                                    <MDBTabsPane show={verticalActive === 'tab3'}>
                                        <p>
                                            Eliminate the risk of human error and reduce response time with Robotrader's lightning-fast execution. Take advantage of split-second market opportunities, capitalize on price fluctuations, and stay one step ahead of the competition.
                                        </p>
                                    </MDBTabsPane>
                                    <MDBTabsPane show={verticalActive === 'tab4'}>
                                        <p>
                                            Test your strategies against historical market data to assess their performance and fine-tune them for optimal results. Our advanced back testing and optimization features empower you to make data-driven decisions and increase your profitability.
                                        </p>
                                    </MDBTabsPane>
                                    <MDBTabsPane show={verticalActive === 'tab5'}>
                                        <p>
                                            Stay informed about your trades at all times with Robotrader's comprehensive monitoring system. Receive instant notifications, alerts, and performance reports, allowing you to stay in control of your portfolio even when you're on the go.
                                        </p>
                                    </MDBTabsPane>
                                    <MDBTabsPane show={verticalActive === 'tab6'}>
                                        <p>
                                            At ANV Tech, we prioritize the security of your assets and sensitive information. Robotrader employs state-of-the-art encryption protocols and follows industry best practices to ensure your data remains secure and confidential.
                                        </p>
                                    </MDBTabsPane>
                                    <MDBTabsPane show={verticalActive === 'tab7'}>
                                        <p>
                                            Mitigate risks and protect your investments with Robotrader's built-in risk management tools. Implement stop-loss orders, trailing stops, and other risk management features to safeguard your capital and optimize your risk-to-reward ratio.
                                        </p>
                                    </MDBTabsPane>
                                </MDBTabsContent>
                            </MDBCol>
                        </MDBRow>
                    </div>
                </div>
            </div> */}



            <div className='demoContact'>
                <div className='container'>
                    <div className='demoContact-content'>
                        <h5>Gain a competitive edge in the fast-paced world of trading with our revolutionary Trading Tools.</h5>
                        <p>Experience the future of trading today!</p>
                        <p style={{ margin: '0px', padding: '0px' }}>Explore more by clicking the link to visit our website: <a href='contact@anv-tech.in'>contact@anv-tech.in</a></p>
                    </div>
                </div>
            </div >
        </>
    )
}

export default RoboTraders
