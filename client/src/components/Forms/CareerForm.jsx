import { Form, Container, Button, Row, Col } from 'react-bootstrap';
import React, { useState, useRef } from 'react';
// import emailjs from '@emailjs/browser'; 
import { useLocation } from 'react-router-dom';
import { Modals } from '../Modals';

export const CareerForm = ({ jobTitle }) => {
    const location = useLocation();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [hearAbout, setHearAbout] = useState('');
    const [authorized, setAuthorized] = useState(true);
    const [sponsorship, setSponsorship] = useState(false);
    const [resume, setResume] = useState('');
    const [coverLetter, setCoverLetter] = useState('');
    const [availability, setAvailability] = useState(Date());
    const [position, setPosition] = useState('');

    const form = useRef();

    const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        if (name === 'firstName') {
            setFirstName(value);
        } else if (name === 'lastName') {
            setLastName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'phone') {
            setPhone(value);
        } else if (name === 'linkedin') {
            setLinkedin(value);
        } else if (name === 'hearAbout') {
            setHearAbout(value);
        } else if (name === 'resume') {
            setResume(value);
        } else if (name === 'coverLetter') {
            setCoverLetter(value);
        } else if (name === 'availability') {
            setAvailability(value);
        }
    };

    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalBody, setModalBody] = useState('');

    const handleShowModal = (title, body) => {
        setModalTitle(title);
        setModalBody(body);
        setShowModal(true);
    };

    const phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    // Get today's date in YYYY-MM-DD format 
    // .toISOString() converts the Date object to a string in ISO 8601 format. Example output: 2023-06-07T12:00:00.000Z
    const today = new Date().toISOString().split('T')[0]; //.split('T') splits the string at the T character, resulting in an array with two elements: the date part and the time part.

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!phoneRegex.test(phone)) {
            handleShowModal('Error', 'Please enter a valid phone number!');
        } else {
            // Need to set up emailjs
            // emailjs
            //     .sendForm('service_1f4dw4s', 'template_i6xmrco', form.current, 'PrwbsHNSIT0xwTbEs')
            //     .then(
            //         () => {
            //             console.log('SUCCESS!');
            //         },
            //         (error) => {
            //             console.log('FAILED...', error.text);
            //         }
            //     );
            if (!authorized && !sponsorship) {
                handleShowModal(`Thank you ${firstName} ${lastName} for applying to our recent job posting!`, `We appreciate your interest in working with us. Unfortunately, we will not be moving forward with your application as this position requires legal authorization to work in the United States. We wish you the best of luck in your job search!`);
            }
            else if (sponsorship && authorized) {
                handleShowModal(`Thank you ${firstName} ${lastName} for applying to our recent job posting!`, `We appreciate your interest in working with us. Unfortunately, we will not be moving forward with your application as this position is not eligible for sponsorship. We wish you the best of luck in your job search!`);
            }
            else if (!authorized && sponsorship) {
                handleShowModal(`Thank you ${firstName} ${lastName} for applying to our recent job posting!`, `We appreciate your interest in working with us. Unfortunately, we will not be moving forward with your application as this position requires legal authorization to work in the United States and is not eligible for sponsorship. We wish you the best of luck in your job search!`);
            }
            else {
                handleShowModal(`Thank you ${firstName} ${lastName} for applying to our recent job posting!`, `We've received your application and will be reviewing it shortly. We appreciate the time and effort you've taken to reach out to us, and we look forward to exploring the possibility of having you join our team.`);
                setFirstName('');
                setLastName('');
                setEmail('');
                setPhone('');
                setLinkedin('');
                setHearAbout('');
                setAuthorized(true);
                setSponsorship(false);
                setResume('');
                setCoverLetter('');
                setAvailability('');
            }
        }
    };


    return (
        <Container className='my-4 p-2'>
            {location.pathname === '/careers/application' ?
                <p className="text-justify my-5 gradient-text fs-26">Step into our team today and help us transform the factoring experience into a seamless, stress-free journey!</p>
                : null}
            <Form ref={form} name="newMessage" method="post" action="newMessage" onSubmit={handleFormSubmit} className='glassmorphism radius-20 main-color p-4'>
                <h2>Personal Information</h2>
                <Row className='border-top mt-2 mx-1'>
                    <Col>
                        <Form.Group className="my-3" controlId="firstName">
                            <Form.Label className='fs-18'>First Name</Form.Label>
                            <Form.Control required value={firstName} name='firstName' onChange={handleInputChange} type="text" placeholder="Enter first name" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="my-3" controlId="lastName">
                            <Form.Label className='fs-18'>Last Name</Form.Label>
                            <Form.Control required value={lastName} name='lastName' onChange={handleInputChange} type="text" placeholder="Enter last name" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className='mx-1'>
                    <Col>
                        <Form.Group className="my-3" controlId="email">
                            <Form.Label className='fs-18'>Email address</Form.Label>
                            <Form.Control required value={email} name='email' onChange={handleInputChange} type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="my-3" controlId="phone">
                            <Form.Label className='fs-18'>Phone Number</Form.Label>
                            <Form.Control required value={phone} name='phone' onChange={handleInputChange} type="tel" placeholder="Enter phone number" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className='mb-2 mt-0 mx-1'>
                    <Col>
                        <Form.Group className="my-3" controlId="linkedin">
                            <Form.Label className='fs-18'>LinkedIn</Form.Label>
                            <Form.Control value={linkedin} name='linkedin' onChange={handleInputChange} type="text" placeholder="http://www.linkedin.com/in/example" />
                        </Form.Group>
                    </Col>
                </Row>

                <h2>Position</h2>
                <Row className='border-top my-2 mx-1'>
                    <Form.Group className="my-3" controlId="position">
                        <Form.Label className='fs-18'>What position are you applying for?</Form.Label>
                        {location.pathname === '/careers/application' ?
                            <Form.Select value={position} onChange={(e) => { setPosition(e.target.value) }}>
                                <option value="CRM">Client Relations Manager</option>
                                <option value="BDO">Business Development Officer</option>
                            </Form.Select>

                            : <Form.Control type="text" value={jobTitle} disabled />
                        }
                    </Form.Group>

                    <Form.Group className="my-3" controlId="hearAbout">
                        <Form.Label className='fs-18'>How did you hear about this job?</Form.Label>
                        <Form.Control value={hearAbout} name='hearAbout' onChange={handleInputChange} type="text" />

                    </Form.Group>
                </Row>

                <h2>Work Eligibility</h2>
                <Row className='border-top my-2 mx-1'>
                    <Form.Group className="my-3" controlId="authorized">
                        <Form.Label className='fs-18'>Are you legally authorized to work in the United States?</Form.Label>
                        <Container fluid className='d-flex align-items-center'>
                            {/* Need to fix - no pre-select */}
                            <Form.Check
                                type="radio"
                                label={`Yes`}
                                checked={authorized}
                                onChange={() => setAuthorized(true)}
                                className='me-4'
                                required
                            />
                            <Form.Check
                                type="radio"
                                label={`No`}
                                checked={!authorized}
                                onChange={() => setAuthorized(false)}
                                required
                            />
                        </Container>
                    </Form.Group>


                    <Form.Group required className="my-3" controlId="sponsorship">
                        <Form.Label className='fs-18'>Please note that this position is not eligible for sponsorship. Do you require sponsorship now or in the future?</Form.Label>
                        <Container fluid className='d-flex align-items-center'>
                            <Form.Check
                                type="radio"
                                label={`Yes`}
                                checked={sponsorship}
                                onChange={() => setSponsorship(true)}
                                className='me-4'
                            />
                            <Form.Check
                                type="radio"
                                label={`No`}
                                checked={!sponsorship}
                                onChange={() => setSponsorship(false)}
                            />
                        </Container>
                    </Form.Group>
                </Row>

                <h2>Resume and Cover Letter Upload</h2>
                <Row className='border-top my-2 mx-1'>
                    <Form.Group controlId="resume" className="my-3">
                        <Form.Label className='fs-18'>Resume</Form.Label>
                        <Form.Control value={resume} name='resume' onChange={handleInputChange} type="file" required />
                    </Form.Group>
                    <Form.Group controlId="coverLetter" className="my-3">
                        <Form.Label className='fs-18'>Cover Letter</Form.Label>
                        <Form.Control value={coverLetter} name='coverLetter' onChange={handleInputChange} type="file" />
                    </Form.Group>
                </Row>

                <h2>Availability</h2>
                <Row className='border-top my-2 mx-1'>
                    <Form.Group controlId="availability" className="my-3">
                        <Form.Label className='fs-18'>Available start date</Form.Label>
                        <Form.Control
                            required
                            value={availability}
                            name='availability'
                            onChange={handleInputChange}
                            type="date"
                            min={today} // Set the minimum date to today
                        />
                    </Form.Group>
                </Row>

                <Row className='d-flex justify-content-end me-1 my-3'>
                    <Button className='submit-btn radius-20 border-none mt-1' type="submit">
                        Submit
                    </Button>
                </Row>
            </Form >
            <Modals title={modalTitle} body={modalBody} showModal={showModal} setShowModal={setShowModal} />
        </Container>
    )
}