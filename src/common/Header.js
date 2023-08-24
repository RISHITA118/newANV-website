import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import '../styles/Header.css'
import logo from '../images/newLogo.png'


import { Link, useLocation } from "react-router-dom";



function Header() {
    const [scrolling, setScrolling] = useState(false);



    // Add an event listener to track scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownOpen = () => {
        setDropdownOpen(true);
    };

    const handleDropdownClose = () => {
        setDropdownOpen(false);
    };

    return (
        <>
            {/* <Navbar
                collapseOnSelect
                expand="lg"
                className={`nav ${scrolling ? 'scrolling' : ''} shadow-3`}
                fixed="top"
            >
                <Container>
                    <Navbar.Brand href="/home">
                        <img src={logo} width='200px' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='navigation'>
                        <Nav className="">
                            <Nav.Link href="/aboutUs">ABOUT US</Nav.Link>
                            <NavDropdown title="PRODUCT" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/product/RoboTrader">RoboTrader</NavDropdown.Item>
                                <NavDropdown.Item href="/product/ScanRisk">
                                    ScanRisk
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/product/ScanGreeks">ScanGreeks</NavDropdown.Item>
                                <NavDropdown.Item href="/product/feedExchange">
                                    ExchangeFeed
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/pricing">PRICING</Nav.Link>
                            <Nav.Link href="/careers">CAREERS</Nav.Link>
                            <Nav.Link href="/contactUs">CONTACT US</Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}

            <Navbar
                collapseOnSelect
                expand="lg"
                className={`nav ${scrolling ? 'scrolling' : ''} shadow-3`}
                fixed="top"
            >
                <Container>
                    <Navbar.Brand href="/home">
                        <img src={logo} width="150px" alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="navigation">
                        <Nav className="">
                            <Nav.Link href="/aboutUs">ABOUT US</Nav.Link>
                            <NavDropdown
                                title="PRODUCT"
                                id="collapsible-nav-dropdown"
                                show={dropdownOpen}
                                onMouseEnter={handleDropdownOpen}
                                onMouseLeave={handleDropdownClose}
                            >
                                <NavDropdown.Item href="/product/RoboTrader">RoboTrader</NavDropdown.Item>
                                <NavDropdown.Item href="/product/ScanRisk">ScanRisk</NavDropdown.Item>
                                <NavDropdown.Item href="/product/ScanGreeks">ScanGreeks</NavDropdown.Item>
                                <NavDropdown.Item href="/product/feedExchange">ExchangeFeed</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/pricing">PRICING</Nav.Link>
                            <Nav.Link href="/careers">CAREERS</Nav.Link>
                            <Nav.Link href="/contactUs">CONTACT US</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Header