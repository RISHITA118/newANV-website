import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './common/Header';
import Home from './page/Home';
import { motion, useScroll, useSpring } from "framer-motion"
import Footer from './common/Footer';
import ProductHome from './components/ProductHome';
import AboutUs from './page/AboutUs';
import ContactUs from './page/ContactUs';
import Pricing from './page/PricingPage';
import RoboTraders from './page/RoboTraders';
import ScanRisk from './page/ScanRisk';
import ScanGreeks from './page/ScanGreeks';
import Career from './page/Career';
import FeedExchange from './page/FeedExchange';
import Contact from './page/Contact';


function App() {
  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001
  // });
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <motion.div className="progressBar" style={{ scaleX }} /> */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/product/RoboTrader" element={<RoboTraders />} />
          <Route path="/product/ScanRisk" element={<ScanRisk />} />
          <Route path="/product/ScanGreeks" element={<ScanGreeks />} />
          <Route path="/product/feedExchange" element={<FeedExchange />} />
          <Route path="/careers" element={<Career />} />

        </Routes>
        <Footer />
      </BrowserRouter >
    </>
  );
}

export default App;
