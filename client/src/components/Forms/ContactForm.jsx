import { Form, Button, Row, Col } from 'react-bootstrap';
import React, { useState, useRef } from 'react';
import { MdArrowDropDown } from "react-icons/md";
import { GetAllBrokers, GetAllReferrals } from '../../utils/helper.jsx';
import { Modals } from '../Modals';

export const ContactForm = ({ referralLink, referralName }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        mcNumber: '',
        referral: '',
        message: '',
        agree: false,
    });

    const [modalInfo, setModalInfo] = useState({ show: false, title: '', body: '' });
    const form = useRef();
    const brokers = GetAllBrokers();
    const referrals = GetAllReferrals();

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleShowModal = (title, body) => {
        setModalInfo({ show: true, title, body });
    };

    const phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!phoneRegex.test(formData.phone)) {
            handleShowModal('Error', 'Please enter a valid phone number!');
        } else {
            // Placeholder for emailjs integration
            handleShowModal(`Thank you ${formData.firstName} ${formData.lastName}!`, 'I received your message and will respond within 24 hours!');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                mcNumber: '',
                referral: '',
                message: '',
                agree: false,
            });
        }
    };

    return (
        <>
            <Form ref={form} name="newMessage" method="post" action="newMessage" onSubmit={handleFormSubmit} className='glassmorphism radius-20 main-color p-4'>
                <h2>Connect with Us</h2>
                <p className='fs-17'>Fill out this form, and one of our Business Development Officers will promptly contact you to provide personalized answers and assistance!</p>
                <Row>
                    <InputField name="firstName" label="First Name" value={formData.firstName} onChange={handleInputChange} />
                    <InputField name="lastName" label="Last Name" value={formData.lastName} onChange={handleInputChange} />
                </Row>
                <Row>
                    <InputField name="email" label="Email address" type="email" value={formData.email} onChange={handleInputChange} />
                    <InputField name="phone" label="Phone Number" type="tel" value={formData.phone} onChange={handleInputChange} />
                </Row>
                <Row>
                    <InputField name="mcNumber" label="MC Number" type="number" value={formData.mcNumber} onChange={handleInputChange} />
                    <Col>
                        <Form.Group className="mb-3" controlId="referral">
                            <Form.Label>Who referred you to us?</Form.Label>
                            <div style={{ position: "relative" }}>
                                <MdArrowDropDown className='dark-color' style={{ position: "absolute", right: "8%", top: "50%", transform: "translateY(-50%)" }} />
                                <Form.Control as="select" value={formData.referral} name='referral' onChange={handleInputChange} disabled={referralLink}>
                                    {referralLink ? (
                                        <option value={referralName}>{referralName}</option>
                                    ) : (
                                        <>
                                            <option value="">Select an option</option>
                                            {brokers.map(broker => (
                                                <option key={broker._id} value={broker.name}>{broker.name}</option>
                                            ))}
                                            {referrals.map(referral => (
                                                <option key={referral._id} value={referral.company}>{referral.company}</option>
                                            ))}
                                            <option value='Other'>Other</option>
                                        </>
                                    )}
                                </Form.Control>
                            </div>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control required as="textarea" value={formData.message} name='message' onChange={handleInputChange} rows={3} />
                </Form.Group>
                <Form.Group className="my-3" controlId="agree">
                    <Form.Check
                        type="checkbox"
                        label={`By checking this box you agree to receive recurring messages from G Squared Funding, LLC. Reply STOP to Opt out. Reply HELP for help. Message frequency varies. Message and data rates may apply. Carriers are not liable for delayed or undelivered messages.`}
                        checked={formData.agree}
                        onChange={handleInputChange}
                        name="agree"
                        className='me-2 fs-15 text-justify'
                        required
                    />
                </Form.Group>
                <Row className='d-flex justify-content-end me-1 my-2'>
                    <Button className='submit-btn radius-20 border-none mt-2' type="submit">Submit</Button>
                </Row>
            </Form>
            <Modals title={modalInfo.title} body={modalInfo.body} showModal={modalInfo.show} setShowModal={(show) => setModalInfo({ ...modalInfo, show })} />
        </>
    );
};

const InputField = ({ name, label, type = 'text', value, onChange }) => (
    <Col>
        <Form.Group className="mb-3" controlId={name}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                name={name}
                value={value}
                onChange={onChange}
                type={type}
                placeholder={`Enter ${label.toLowerCase()}`}
                required
            />
        </Form.Group>
    </Col>
);
