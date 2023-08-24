import React from 'react'
import '../styles/FeedExchange.css'

import icon1 from '../images/feedExchange/ExchangeData.png'
import icon2 from '../images/feedExchange/Latency.png'
import icon3 from '../images/feedExchange/RealTimeMarket.png'
import icon4 from '../images/feedExchange/seamlessIntegration.png'
import icon5 from '../images/feedExchange/scalability.png'
import icon6 from '../images/feedExchange/CompetitiveEdge.jpg'


import Slide from 'react-reveal/Fade';


function FeedExchange() {
    return (
        <>
            <div className='feedExchange'>
                <div className='container'>
                    <div className='feedExchange-title'>
                        <Slide bottom>
                            <h1>Exchange Feed Reader</h1>
                        </Slide>

                        <Slide bottom>
                            <h5>Ultra-Fast Market Data Integration</h5>
                        </Slide>

                        <Slide bottom>
                            <p>The Exchange Feed Reader is a groundbreaking product that revolutionizes the way market data is integrated into your system. By directly retrieving data from the exchange, this powerful tool eliminates the need for API calls and significantly reduces latency. With Exchange Feed Reader, you can enjoy lightning-fast access to real-time market data, enhancing the speed and efficiency of your trading system.
                            </p>
                        </Slide>
                    </div>
                </div>
            </div >


            <div className='feed-det'>
                <div className='container'>
                    <div className='feed-p'>
                        <div className='feed-title'>

                            {/* <Slide bottom> */}
                                <h1>Why Choose Robotrader?</h1>
                            {/* </Slide> */}

                        </div>
                        <div className='data'>
                            {/* <Slide bottom> */}
                                <div className='det-f'>
                                    <div className='content'>
                                        <img src={icon1} />
                                        <h5>Direct Exchange Data Integration</h5>
                                        <p>Exchange Feed Reader directly fetches market data from the exchange, bypassing the traditional API call process. This direct integration eliminates unnecessary intermediaries, reducing latency and providing near-instantaneous access to real-time data.</p>
                                    </div>
                                    <div className='content'>
                                        <img src={icon2} />
                                        <h5>Ultra-low Latency</h5>
                                        <p>With Exchange Feed Reader, latency becomes a thing of the past. By eliminating the delays introduced by API calls, you can experience a super-fast data feed that enables quick decision-making and rapid response to market movements.</p>
                                    </div>
                                </div>
                            {/* </Slide> */}
                            {/* <Slide bottom> */}
                                <div className='det-f'>
                                    <div className='content'>
                                        <img src={icon3} />
                                        <h5>Real-Time Market Data</h5>
                                        <p>Stay up to date with the latest market data as Exchange Feed Reader delivers real-time information directly from the exchange. Accurate and timely data is crucial for making informed trading decisions, and this product ensures you have it at your fingertips.</p>
                                    </div>
                                    <div className='content'>
                                        <img src={icon4} />
                                        <h5>Seamless Integration</h5>
                                        <p>Integrating Exchange Feed Reader into your system is seamless and straightforward. Our user-friendly interface and comprehensive documentation make the setup process quick and hassle-free, allowing you to start benefiting from fast market data integration in no time.</p>
                                    </div>
                                </div>
                            {/* </Slide> */}
                            {/* <Slide bottom> */}
                                <div className='det-f'>
                                    <div className='content'>
                                        <img src={icon5} />
                                        <h5>Scalability and Reliability</h5>
                                        <p>Exchange Feed Reader is designed to handle high volumes of market data with ease. Whether you're a small trading operation or a large institutional firm, our product scales effortlessly to accommodate your data needs while ensuring reliable and uninterrupted data delivery.</p>
                                    </div>
                                    <div className='content'>
                                        <img src={icon6} />
                                        <h5>Competitive Edge</h5>
                                        <p>By leveraging the ultra-fast data integration capabilities of Exchange Feed Reader, you gain a significant competitive edge in the market. Instant access to real-time market data enables you to make faster and more informed trading decisions, potentially maximizing profitability and minimizing risks.</p>
                                    </div>
                                </div>
                            {/* </Slide> */}
                        </div>
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

export default FeedExchange