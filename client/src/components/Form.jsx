import { Form, Button, Row, Col, Modal } from 'react-bootstrap';
import React, { useState, useRef } from 'react';
// import emailjs from '@emailjs/browser'; 
import { MdArrowDropDown } from "react-icons/md";
import { GetAllBrokers } from '../utils/helper.jsx';

export const FormCP = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [mcNumber, setMcNumber] = useState('');
    const [referral, setReferral] = useState('');
    const [message, setMessage] = useState('');
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
        } else if (name === 'mcNumber') {
            setMcNumber(value);
        } else if (name === 'referral') {
            setReferral(value);
        } else if (name === 'message') {
            setMessage(value);
        }
    };

    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalBody, setModalBody] = useState('');

    const handleCloseModal = () => setShowModal(false);

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
            handleShowModal(`Thank you ${firstName} ${lastName}!`, 'I received your message and will respond within 24 hours!');
            setFirstName('');
            setLastName('');
            setEmail('');
            setPhone('');
            setMcNumber('');
            setReferral('');
            setMessage('');
        }
    };

    const brokers = GetAllBrokers();

    return (
        <>
            <Form ref={form} name="newMessage" method="post" action="newMessage" onSubmit={handleFormSubmit} className='glassmorphism radius-20 main-color p-4'>
                <h2>Connect with Us</h2>
                <p className='fs-17'>Fill out this form, and one of our Business Development Officers will promptly contact you to provide personalized answers and assistance!</p>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control required value={firstName} name='firstName' onChange={handleInputChange} type="text" placeholder="Enter first name" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control required value={lastName} name='lastName' onChange={handleInputChange} type="text" placeholder="Enter last name" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required value={email} name='email' onChange={handleInputChange} type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="phone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control required value={phone} name='phone' onChange={handleInputChange} type="tel" placeholder="Enter phone number" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="mcNumber">
                            <Form.Label>MC Number</Form.Label>
                            <Form.Control value={mcNumber} name='mcNumber' onChange={handleInputChange} type="number" placeholder="Mc Number" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="referral">
                            <Form.Label>Who referred you to us?</Form.Label>
                            <div style={{ position: "relative" }}>
                                <MdArrowDropDown style={{ position: "absolute", right: "8%", top: "50%", transform: "translateY(-50%)" }} />
                                <Form.Control as="select" value={referral} name='referral' onChange={handleInputChange}>
                                    <option value="">Select an option</option>
                                    {brokers.map(broker => (
                                        <option key={broker._id} value={broker.name}>
                                            {broker.name}
                                        </option>
                                    ))}
                                </Form.Control>
                            </div>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control required as="textarea" value={message} name='message' onChange={handleInputChange} rows={3} />
                </Form.Group>
                <Row className='d-flex justify-content-end me-1'>
                    <Button className='submit-btn radius-20 border-none' type="submit">
                        Submit
                    </Button>
                </Row>
            </Form>
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