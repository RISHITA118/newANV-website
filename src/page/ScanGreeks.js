import React from 'react'
import '../styles/ScanGreeks.css'


import Fade from 'react-reveal/Fade';
import { Slide } from 'react-reveal';


function ScanGreeks() {
    return (
        <>
            <div className='greeks'>
                <div className='container'>
                    <div className='greeks-title'>
                        <Slide bottom>
                            <h1>ScanGreeks</h1>
                        </Slide>

                        <Slide bottom>
                            <p>An invaluable tool designed to empower traders with comprehensive insights into position-wise and portfolio-wise Greeks.
                            </p>
                        </Slide>

                        <Slide bottom>
                            <p>With Scangreeks, traders gain access to advanced capabilities such as VAR Analysis, Simulation, Trade Trail, Auto position upload, Realtime Broadcast connectivity, Individual-level Risk management, V-WAP, and much more.</p>
                        </Slide>

                        <Slide bottom>
                            <p>By harnessing these powerful features, traders can swiftly and confidently make informed decisions, enabling faster and more successful trades. It’s a groundbreaking platform designed to revolutionize portfolio risk management. With its cutting-edge technology, Scangreeks offers an variety of powerful features to enhance your trading experience.</p>
                        </Slide>

                    </div>
                </div>
            </div>
            <div className='value'>
                <div className='container'>
                    <div className='value-p'>
                        {/* <Slide bottom> */}
                        <h1>Value additions</h1>
                        {/* </Slide> */}

                        {/* <Slide bottom> */}
                        <div className='value-f'>
                            <div className='content'>
                                <div className='card'>
                                    <div className='card-body content-det'>
                                        <h5>
                                            Effortless portfolio risk management
                                        </h5>
                                        <hr></hr>
                                        <p>
                                            Which is a core feature of Scangreeks. By providing insights into the market's current conditions, Scangreeks enables you to allocate your assets effectively among various elements within your portfolio.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='content'>
                                <div className='card'>
                                    <div className='card-body content-det'>
                                        <h5>
                                            Experience unparalleled speed and accuracy
                                        </h5>
                                        <hr></hr>
                                        <p>
                                            in calculations with Scangreeks' state-of-the-art technology and advanced software which swiftly performs complex calculations, saving you valuable time and effort while keeping you one step ahead of the competition.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='content'>
                                <div className='card'>
                                    <div className='card-body content-det'>
                                        <h5>
                                            Dynamic Portfolio Allocation for Markets
                                        </h5>
                                        <hr></hr>
                                        <p>
                                            with the help of Scangreeks. This versatile software empowers you to make timely adjustments, ensuring your portfolio remains aligned with evolving market conditions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* </Slide> */}
                    </div>
                </div>
            </div >


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

export default ScanGreeks
