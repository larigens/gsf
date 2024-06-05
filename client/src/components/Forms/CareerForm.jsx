import { Form, Container, Button, Row, Col, Modal } from 'react-bootstrap';
import React, { useState, useRef } from 'react';
// import emailjs from '@emailjs/browser'; 

export const CareerForm = ({ position }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [hearAbout, setHearAbout] = useState('');
    const [authorized, setAuthorized] = useState(true);
    const [sponsorship, setSponsorship] = useState(null);
    const [resume, setResume] = useState('');
    const [coverLetter, setCoverLetter] = useState('');
    const [availability, setAvailability] = useState(Date());

    const form = useRef();
    console.log(position)

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

    const handleCloseModal = () => {
        setShowModal(false);
        window.location.replace(
            "/",
        );
    }

    const handleShowModal = (title, body) => {
        setModalTitle(title);
        setModalBody(body);
        setShowModal(true);
    };

    const phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

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
            handleShowModal(`Thank you ${firstName} ${lastName} for applying to our recent job posting!`, `The Recruitment Department has received your application and will be reviewing it shortly. We appreciate the time and effort you've taken to reach out to us, and we look forward to exploring the possibility of having you join our team.`);
            setFirstName('');
            setLastName('');
            setEmail('');
            setPhone('');
            setLinkedin('');
            setHearAbout('');
            setAuthorized(null);
            setSponsorship(null);
            setResume('');
            setCoverLetter('');
            setAvailability('');
        }
    };


    return (
        <>
            <Form ref={form} name="newMessage" method="post" action="newMessage" onSubmit={handleFormSubmit} className='glassmorphism radius-20 main-color p-4'>

                <h2>Personal Information</h2>
                <Row className='border-top mt-2 mx-1'>
                    <Col>
                        <Form.Group className="my-3" controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control required value={firstName} name='firstName' onChange={handleInputChange} type="text" placeholder="Enter first name" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="my-3" controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control required value={lastName} name='lastName' onChange={handleInputChange} type="text" placeholder="Enter last name" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className='mx-1'>
                    <Col>
                        <Form.Group className="my-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required value={email} name='email' onChange={handleInputChange} type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="my-3" controlId="phone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control required value={phone} name='phone' onChange={handleInputChange} type="tel" placeholder="Enter phone number" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className='mb-2 mt-0 mx-1'>
                    <Col>
                        <Form.Group className="my-3" controlId="linkedin">
                            <Form.Label>LinkedIn</Form.Label>
                            <Form.Control value={linkedin} name='linkedin' onChange={handleInputChange} type="text" placeholder="http://www.linkedin.com/in/example" />
                        </Form.Group>
                    </Col>
                </Row>

                <h2>Position</h2>
                <Row className='border-top my-2 mx-1'>
                    <Form.Group className="my-3" controlId="position">
                        <Form.Label>What position are you applying for?</Form.Label>
                        <Form.Control type="text" value={position} disabled />
                    </Form.Group>

                    <Form.Group className="my-3" controlId="hearAbout">
                        <Form.Label>How did you hear about this job?</Form.Label>
                        <Form.Control value={hearAbout} name='hearAbout' onChange={handleInputChange} type="text" />

                    </Form.Group>
                </Row>

                <h2>Work Eligibility</h2>
                <Row className='border-top my-2 mx-1'>
                    <Form.Group className="my-3" controlId="authorized">
                        <Form.Label>Are you legally authorized to work in the United States?</Form.Label>
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
                        <Form.Label>Please note that this position is not eligible for sponsorship. Do you require sponsorship now or in the future?</Form.Label>
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
                        <Form.Label>Resume</Form.Label>
                        <Form.Control value={resume} name='resume' onChange={handleInputChange} type="file" required />
                    </Form.Group>
                    <Form.Group controlId="coverLetter" className="my-3">
                        <Form.Label>Cover Letter</Form.Label>
                        <Form.Control value={coverLetter} name='coverLetter' onChange={handleInputChange} type="file" />
                    </Form.Group>
                </Row>

                <h2>Availability</h2>
                <Row className='border-top my-2 mx-1'>
                    <Form.Group controlId="availability" className="my-3">
                        <Form.Label>Available start date</Form.Label>
                        <Form.Control required value={availability} name='availability' onChange={handleInputChange} type="date" />
                    </Form.Group>
                </Row>

                <Row className='d-flex justify-content-end me-1 my-3'>
                    <Button className='submit-btn radius-20 border-none mt-1' type="submit">
                        Submit
                    </Button>
                </Row>
            </Form >
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton className="background border-none secondary-color">
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="background border-none main-color">{modalBody}</Modal.Body>
                <Modal.Footer className="background border-none">
                    <Button className='background-light border-none' onClick={handleCloseModal}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}