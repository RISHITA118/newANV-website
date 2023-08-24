import React from 'react'
import '../styles/Pricing.css'
import Fade from 'react-reveal/Fade';


function Pricing() {
  return (
    <>
      <div className="pricing">
        <div className='container'>
          <Fade bottom>
            <h1>Choose Plans</h1>
            <div className='pricing-table'>
              <div className="ptable-item">
                <div className="ptable-single">
                  <div className="ptable-header">
                    <div className="ptable-title">
                      <h2>Silver</h2>
                    </div>
                    <div className="ptable-price">
                      <h2><small>$</small><span>/ M</span></h2>
                    </div>
                  </div>
                  <div className="ptable-body">
                    <div className="ptable-description">
                      <ul>
                        <li>Pure HTML & CSS</li>
                        <li>Responsive Design</li>
                        <li>Well-commented Code</li>
                        <li>Easy to Use</li>
                      </ul>
                    </div>
                  </div>
                  <div className="ptable-footer">
                    <div className="ptable-action">
                      <a href="">Buy Now</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ptable-item featured-item">
                <div className="ptable-single">
                  <div className="ptable-header">
                    <div className="ptable-status">
                      <span>Hot</span>
                    </div>
                    <div className="ptable-title">
                      <h2>Gold</h2>
                    </div>
                    <div className="ptable-price">
                      <h2><small>$</small><span>/ M</span></h2>
                    </div>
                  </div>
                  <div className="ptable-body">
                    <div className="ptable-description">
                      <ul>
                        <li>Pure HTML & CSS</li>
                        <li>Responsive Design</li>
                        <li>Well-commented Code</li>
                        <li>Easy to Use</li>
                      </ul>
                    </div>
                  </div>
                  <div className="ptable-footer">
                    <div className="ptable-action">
                      <a href="">Buy Now</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ptable-item">
                <div className="ptable-single">
                  <div className="ptable-header">
                    <div className="ptable-title">
                      <h2>Platinum</h2>
                    </div>
                    <div className="ptable-price">
                      <h2><small>$</small><span>/ M</span></h2>
                    </div>
                  </div>
                  <div className="ptable-body">
                    <div className="ptable-description">
                      <ul>
                        <li>Pure HTML & CSS</li>
                        <li>Responsive Design</li>
                        <li>Well-commented Code</li>
                        <li>Easy to Use</li>
                      </ul>
                    </div>
                  </div>
                  <div className="ptable-footer">
                    <div className="ptable-action">
                      <a href="">Buy Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  )
}

export default Pricing