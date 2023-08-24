import React, { useState } from 'react'
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import '../styles/ScanRisk.css'

import Slide from 'react-reveal/Fade';


import feature1 from '../images/scanrisk/marginEmpowerment.png'
import feature2 from '../images/scanrisk/anyliticaTools.png'
import feature3 from '../images/scanrisk/alertAutomation.png'
import feature4 from '../images/scanrisk/dashboard.png'
import feature5 from '../images/scanrisk/alert.png'
import feature6 from '../images/scanrisk/arbitrageModule.png'
import feature7 from '../images/scanrisk/clientManagement.png'
import feature8 from '../images/scanrisk/limitMonitoring.png'


import value1 from '../images/scanrisk/realTimeVisibility.jpg'
import value2 from '../images/scanrisk/reportAcces.jpg'
import value3 from '../images/scanrisk/depositeCompliance.png'
import value4 from '../images/scanrisk/Reconciliation.jpg'


function ScanRisk() {

    const [verticalActive, setVerticalActive] = useState('tab1');

    const handleVerticalClick = (value: string) => {
        if (value === verticalActive) {
            return;
        }

        setVerticalActive(value);
    };
    return (
        <>
            <div className='risk'>
                <div className='container'>
                    <Slide bottom>
                        <div className='risk-title'>
                            <Slide bottom>
                                <h1>ScanRisk</h1>
                            </Slide>
                            <Slide bottom>
                                <p>In the dynamic landscape of Equity, Commodity, and Currency Markets, the need for real-time Exposure and Margin management has become a vital requirement for members engaged in Capital, Derivatives, and Currency trading.
                                </p>
                            </Slide>
                            <Slide bottom>
                                <p>As market conditions fluctuate, Margin requirements undergo rapid changes based on clients' trading positions. Scanrisk allows monitoring the positions of numerous dealers mapped across various locations which can become a challenge as the team expands. Scanrisk also helps in Identifying dealers in the High Alert zone, where margin calls are necessary due to fully utilized Cash & Non-Cash margins, becomes a critical aspect.</p>
                            </Slide>
                        </div>
                    </Slide>
                </div>
            </div>

            <div className='product'>
                {/* <div className='container'> */}
                <div className='feature-p'>
                    {/* <Slide bottom> */}
                    {/* <Slide bottom> */}
                    <h1>Features</h1>
                    {/* </Slide> */}
                    {/* <Slide bottom> */}
                    <div className='feature-f'>
                        <div className='feature'>
                            <div className='card shadow feature-hover'>
                                <div className='card-body'>
                                    <img src={feature2} className='feature-img' />
                                    <h5>Analytical Tools</h5>
                                    <p>Offers 'What if' analysis tools such as margin calculator and margin forecast for better decision-making</p>
                                </div>
                            </div>
                        </div>
                        <div className='feature' style={{ paddingTop: "25px" }}>
                            <div className='card shadow feature-hover'>
                                <div className='card-body'>
                                    <img src={feature1} className='feature-img' />
                                    <h5>Margin Empowerment</h5>
                                    <p>Empowers users with online margin reports and facilitates margin comparison.</p>
                                </div>
                            </div>
                        </div>
                        <div className='feature' style={{ paddingTop: "25px" }}>
                            <div className='card shadow feature-hover'>
                                <div className='card-body'>
                                    <img src={feature3} className='feature-img' />
                                    <h5>Alert Automation</h5>
                                    <p>Automates customized alerts based on clients' defined preferences seamlessly.</p>
                                </div>
                            </div>
                        </div>
                        <div className='feature'>
                            <div className='card shadow feature-hover'>
                                <div className='card-body'>
                                    <img src={feature4} className='feature-img' />
                                    <h5>obligations Dashboard</h5>
                                    <p>Provides a comprehensive dashboard that enables efficient monitoring of obligations across multiple exchanges in a single view.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </Slide> */}
                    {/* <Slide bottom> */}
                    <div className='feature-f'>
                        <div className='feature'>
                            <div className='card shadow feature-hover'>
                                <div className='card-body'>
                                    <img src={feature5} className='feature-img' />
                                    <h5>Alert Generation</h5>
                                    <p>Generates alerts based on specific requirements, ensuring timely notifications for margin calls and other critical events.</p>
                                </div>
                            </div>
                        </div>
                        <div className='feature'>
                            <div className='card shadow feature-hover'>
                                <div className='card-body'>
                                    <img src={feature6} className='feature-img' />
                                    <h5>Arbitrage Module</h5>
                                    <p>Incorporates an arbitrage module to identify and leverage profitable opportunities.</p>
                                </div>
                            </div>
                        </div>
                        <div className='feature'>
                            <div className='card shadow feature-hover'>
                                <div className='card-body'>
                                    <img src={feature7} className='feature-img' />
                                    <h5>Client Management</h5>
                                    <p>Includes a Client Master feature for efficient management of client information.</p>
                                </div>
                            </div>
                        </div>
                        <div className='feature'>
                            <div className='card shadow feature-hover'>
                                <div className='card-body'>
                                    <img src={feature8} className='feature-img' />
                                    <h5>Limit Monitoring</h5>
                                    <p>Facilitates Position Limit Monitoring to ensure compliance with regulatory limits and risk management protocols.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </Slide> */}
                    {/* </Slide> */}
                </div>
                {/* </div> */}
            </div >

            <div className='value-addition'>
                <div className='container'>
                    <div className='addition-p'>
                        {/* <Slide bottom> */}
                        <h1>Value additions</h1>
                        {/* </Slide> */}
                        {/* <Slide bottom> */}
                        <div className='addition-f'>
                            <div className='content'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <img src={value1} className='value-img' />
                                        <h5>Real Time Visibility</h5>
                                        <p>Empowers users with real-time access to the initial margin and position of each client in the equity and derivatives segment, regardless of their VSAT and leased line locations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='content'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <img src={value2} className='value-img' />
                                        <h5>Report Access</h5>
                                        <p>Scanrisk provides a comprehensive suite of reports for user, enabling seamless access to client information through.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='content'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <img src={value3} className='value-img' />
                                        <h5>Deposite Compliance</h5>
                                        <p>Enables users to accurately compare the client's cash and non-cash deposits with the exchange's required margin, ensuring transparency and compliance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='content'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <img src={value4} className='value-img' />
                                        <h5>Customizable Reconciliation</h5>
                                        <p>Provides the flexibility to customize file formats for trade files received from back-office and facilitates efficient trade reconciliation, both for one-to-one and one-to-many scenarios.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* </Slide> */}
                    </div>
                </div>
            </div>


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

export default ScanRisk