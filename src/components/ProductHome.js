import React from 'react'
import '../styles/ProductHome.css'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import icon from '../images/bookIcon.png'

function ProductHome() {
    return (
        <>
            <section>
                <div className='products'>
                    <div className='products-p'>
                        <h1>Our Products</h1>
                        <div className='products-f'>
                            <div className='products-img'>
                                <div className='products-background'>
                                    <img src='https://img.freepik.com/free-vector/flat-design-cms-concept-illustrated_23-2148796510.jpg?w=2000' width='60%' className='img1 shadow'></img>
                                </div>
                            </div>
                            <div className='products-content'>
                                <h1>RoboTrader</h1>
                                <h5>Discover a dependable algo trading platform tailored for quant traders. Enjoy reliability, user-friendliness, and advanced features to streamline your trading strategies effectively. Elevate your trading experience today.</h5>
                                <ul>
                                    <li>Seamless Integration</li>
                                    <li>Customized Strategy</li>
                                    <li>Risk Management Tools</li>
                                    <li>Accurate and Fast</li>
                                </ul>
                                <a href='/product/RoboTrader'>
                                    <button className='learnMore' >
                                        <span>Learn more</span>
                                        {/* <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="37" cy="37" r="35.5" stroke="black" stroke-width="3"></circle>
                                            <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                                        </svg> */}
                                        <img src={icon} width='100%' />
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className='products-f-right'>
                            <div className='products-content-right'>
                                <h1>ScanGreeks</h1>
                                <h5>Equip traders with cutting-edge Greek insights, VAR analysis, and real-time connectivity. Mitigate risk through advanced risk management tools, empowering informed decisions and enhanced trading strategies.</h5>
                                <ul>
                                    <li>Manage Risk of your portfolio</li>
                                    <li>Unparallel Speed & accuracy</li>
                                    <li>Live Risk Management</li>
                                    <li>Single comprehensive report containing all relevant information</li>
                                </ul>
                                <a href='/product/ScanGreeks'>
                                    <button className='learnMore' >
                                        <span>Learn more</span>
                                        {/* <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="37" cy="37" r="35.5" stroke="black" stroke-width="3"></circle>
                                            <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                                        </svg> */}
                                        <img src={icon} width='100%' />
                                    </button>
                                </a>
                            </div>
                            <div className='products-img-right'>
                                <div className='products-background-right'>
                                    <img src='https://cdn.dribbble.com/users/508588/screenshots/11263679/thg_m78_05_4x.jpg' width='60%' className='img1 shadow'></img>
                                </div>
                            </div>
                        </div>
                        <div className='products-f'>
                            <div className='products-img'>
                                <div className='products-background'>
                                    <img src='https://img.freepik.com/free-vector/tiny-graphic-designer-drawing-with-big-pen-computer-screen-creators-work-creative-woman-working-laptop-flat-vector-illustration-digital-design-concept-banner-landing-web-page_74855-25342.jpg?w=2000' width='60%' className='img1 shadow'></img>

                                </div>

                            </div>
                            <div className='products-content risk'>
                                <h1>ScanRisk</h1>
                                <h5>Experience dynamic exposure and margin management software for capital, derivatives, and currency trading. Real-time insights optimize risk management, ensuring confident and profitable trading decisions.</h5>
                                <ul>
                                    <li>Online Margin report and comparison</li>
                                    <li>What If Analysis tool</li>
                                    <li>Arbitrage Module to exploit Profitable Opportunity</li>
                                    <li>Alert based on specific requirements</li>
                                    <li>Margin forecast</li>
                                </ul>
                                <a href='/product/ScanRisk'>
                                    <button className='learnMore' >
                                        <span>Learn more</span>
                                        {/* <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="37" cy="37" r="35.5" stroke="black" stroke-width="3"></circle>
                                            <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                                        </svg> */}
                                        <img src={icon} width='100%' />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default ProductHome