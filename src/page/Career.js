import React, { useState } from 'react'
import '../styles/Career.css'
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import Slide from 'react-reveal/Fade';


function Career() {

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [position, setPosition] = useState('');
    const [additional, setAdditional] = useState('');
    const [cv, setCv] = useState('');

    const [email, setEmail] = useState('');


    const handleFirtNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePositionChange = (e) => {
        setPosition(e.target.value);
    };

    const handleAdditionalChange = (e) => {
        setAdditional(e.target.value);
    };

    const handleCvUpload = (e) => {
        setCv(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform registration logic here
    };
    return (
        <>
            <div className='career'>
                <div className='container'>
                    <Slide bottom>
                        <div className='career-title'>
                            <h1>Interested? We're Hiring</h1>
                            <MDBBreadcrumb>
                                <MDBBreadcrumbItem>
                                    <a href='home'>Home</a>
                                </MDBBreadcrumbItem>
                                <MDBBreadcrumbItem active>Career</MDBBreadcrumbItem>
                            </MDBBreadcrumb>
                        </div>
                    </Slide>
                </div>
            </div>

            <div className='career-form'>
                <div className='container'>
                    <div className='career-p'>
                        <div className='career-title'>
                            {/* <Slide bottom> */}
                                <h5>Apply and grow your skill set to enable organizations to overcome complex business challenges and redefine what's possible.</h5>
                            {/* </Slide> */}
                        </div>
                        <div className="form">
                            {/* <Slide bottom> */}
                                <h4>CV Submission</h4>
                            {/* </Slide> */}

                            {/* <Slide bottom> */}
                                <p>Do you want to work with us? Please fill in your details below.</p>
                            {/* </Slide> */}

                            {/* <Slide bottom> */}
                                <div className='wrapper-form'>
                                    <form onSubmit={handleSubmit}>
                                        <div className="input-box">
                                            <input
                                                type="text"
                                                placeholder="Enter your Firstname"
                                                value={firstname}
                                                onChange={handleFirtNameChange}
                                                required
                                            />
                                        </div>
                                        <div className="input-box">
                                            <input
                                                type="text"
                                                placeholder="Enter your Lastname"
                                                value={lastname}
                                                onChange={handleLastNameChange}
                                                required
                                            />
                                        </div>
                                        <div className="input-box">
                                            <input
                                                type="text"
                                                placeholder="Enter your Email"
                                                value={email}
                                                onChange={handleEmailChange}
                                                required
                                            />
                                        </div>
                                        <div className="input-box">
                                            <input
                                                type="text"
                                                placeholder="Enter your Position"
                                                value={position}
                                                onChange={handlePositionChange}
                                                required
                                            />
                                        </div>
                                        <div className="input-box">
                                            <input
                                                type="text"
                                                placeholder="Enter your Additional Info"
                                                value={additional}
                                                onChange={handleAdditionalChange}
                                                required
                                            />
                                        </div>

                                        <div className="input-box">
                                            <input
                                                type="file"
                                                placeholder="Upload your cv"
                                                value={cv}
                                                onChange={handleCvUpload}
                                                required
                                                className='custom-file-input'
                                            />
                                        </div>
                                        <div className="input-box Button">
                                            <input type="submit" value="Submit" />
                                        </div>

                                    </form>
                                </div>
                            {/* </Slide> */}
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Career