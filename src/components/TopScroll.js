import React, { useState, useEffect } from 'react'
import '../styles/TopScroll.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

function TopScroll() {


    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


    return (
        <>
            <div className="top-to-btm">
                {showTopBtn && (
                    <FontAwesomeIcon icon={faArrowUp} className="icon-position icon-style"
                        onClick={goToTop} />
                )}
            </div>
        </>
    )
}

export default TopScroll