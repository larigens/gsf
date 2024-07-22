import { Form, Container, Button, Row, Col } from 'react-bootstrap';
import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Modals } from '../Modals';
import { HelmetCP } from '../Helmet';
import emailjs from '@emailjs/browser';
import axios from 'axios';

export const CareerForm = ({ jobTitle, jobPosition }) => {
    const location = useLocation();
    const form = useRef();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        linkedin: '',
        hearAbout: '',
        authorized: true,
        sponsorship: false,
        resume: null,
        coverLetter: null,
        availability: new Date().toISOString().split('T')[0],
        position: ''
    });
    const [modalInfo, setModalInfo] = useState({ show: false, title: '', body: '' });

    const handleInputChange = (e) => {
        const { name, type, value, checked, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : (type === 'file' ? files[0] : value),
        }));
    };

    const handleFileUpload = async (file) => {
        if (!file) return '';

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('File upload response:', response);
            return `/file/${response.data.file.filename}`;
        } catch (error) {
            console.error('Error uploading file:', error);
            return '';
        }
    };

    const handleShowModal = (title, body) => {
        setModalInfo({ show: true, title, body });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

        if (!phoneRegex.test(formData.phone)) {
            handleShowModal('Error', 'Please enter a valid phone number!');
            return;
        }

        const { firstName, lastName, authorized, sponsorship } = formData;
        let modalMessage='';

        if (!authorized && !sponsorship) {
            modalMessage = ` Unfortunately, we will not be moving forward with your application as this position requires legal authorization to work in the United States.`;
        } else if (sponsorship && authorized) {
            modalMessage = ` Unfortunately, we will not be moving forward with your application as this position is not eligible for sponsorship.`;
        } else if (!authorized && sponsorship) {
            modalMessage = ` Unfortunately, we will not be moving forward with your application as this position requires legal authorization to work in the United States and is not eligible for sponsorship.`;
        } else {
            try {
                const resumeUrl = await handleFileUpload(formData.resume);
                const coverLetterUrl = formData.coverLetter ? await handleFileUpload(formData.coverLetter) : '';
                const emailData = {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    phone: formData.phone,
                    linkedin: formData.linkedin,
                    hearAbout: formData.hearAbout,
                    authorized: formData.authorized,
                    sponsorship: formData.sponsorship,
                    resume: resumeUrl,
                    coverLetter: coverLetterUrl,
                    availability: formData.availability,
                    position: formData.position || jobPosition,
                };

                await emailjs.send('service_hdfufsq', 'template_oyrtuq6', emailData, 'MNwS57tO5kZNtyQeh');
                console.log('SUCCESS!');
                modalMessage = ` We've received your application and will be reviewing it shortly. We appreciate the time and effort you've taken to reach out to us, and we look forward to exploring the possibility of having you join our team.`;
                handleShowModal(`Thank you ${firstName} ${lastName} for applying to our recent job posting!`, `${modalMessage}`);

                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    linkedin: '',
                    hearAbout: '',
                    authorized: true,
                    sponsorship: false,
                    resume: null,
                    coverLetter: null,
                    availability: new Date().toISOString().split('T')[0],
                    position: ''
                });
            } catch (error) {
                console.log('FAILED...', error);
                handleShowModal(
                    `Oops, ${firstName} ${lastName}, there was an issue with your submission.`,
                    'Please try again, and if the problem persists, contact us for assistance.'
                );
            }
        }
    };

    return (
        <>
            <HelmetCP
                pageTitle={'Join our Team | Careers at GSF'}
                pageDescription={'Join Our Dynamic Team in the Transportation and Trucking Industry! Explore Exciting Career Opportunities with a Company Committed to Your Success. Apply Today and Drive Your Future Forward!'}
                pageKeywords={'Factoring job opportunities; Transportation industry careers; Trucking employment; Logistics job openings; Supply chain career opportunities; Join our team in transportation; Career growth in the trucking industry; Client relations manager; CRM job opportunity; Business Development Officer; factoring companies; factoring company in Atlanta; factoring company in Georgia; truck factors; best factoring companies; factoring solutions; financial services; factoring services for trucking companies; invoice factoring'}
                canonicalURL={'careers/application'}
            />
            <Container className='my-4 p-2'>
                {location.pathname === '/careers/application' && (
                    <p className="text-justify my-5 secondary-color fs-26">
                        Step into our team today and help us transform the factoring experience into a seamless, stress-free journey!
                    </p>
                )}
                <Form ref={form} onSubmit={handleFormSubmit} encType="multipart/form-data" className='glassmorphism radius-20 main-color p-3'>
                    <Section title="Personal Information">
                        <Row className='border-top mt-2 mx-1'>
                            <InputField name="firstName" label="First Name" value={formData.firstName} onChange={handleInputChange} />
                            <InputField name="lastName" label="Last Name" value={formData.lastName} onChange={handleInputChange} />
                        </Row>
                        <Row className='mx-1'>
                            <InputField name="email" label="Email address" type="email" value={formData.email} onChange={handleInputChange} />
                            <InputField name="phone" label="Phone Number" type="tel" value={formData.phone} onChange={handleInputChange} />
                        </Row>
                        <Row className='mb-2 mt-0 mx-1'>
                            <InputField name="linkedin" label="LinkedIn" value={formData.linkedin} onChange={handleInputChange} type='url' placeholder={'https://linkedin.com/in/your-name'} />
                        </Row>
                    </Section>
                    <Section title="Position">
                        <Row className='border-top my-2 mx-1'>
                            <Col>
                                <Form.Group className="my-3" controlId="position">
                                    <Form.Label className='fs-18'>What position are you applying for?</Form.Label>
                                    {location.pathname === '/careers/application' ? (
                                        <Form.Select name="position" value={formData.position} onChange={handleInputChange}>
                                            <option value="">Select One</option>
                                            <option value="CRM">Client Relations Manager</option>
                                            <option value="BDO">Business Development Officer</option>
                                        </Form.Select>
                                    ) : (
                                        <Form.Control type="text" value={jobTitle} disabled></Form.Control>
                                    )}
                                </Form.Group>
                                <InputField name="hearAbout" label="How did you hear about this job?" value={formData.hearAbout} onChange={handleInputChange} />
                            </Col>
                        </Row>
                    </Section>
                    <Section title="Work Eligibility">
                        <Row className='border-top my-2 mx-1'>
                            <RadioField
                                label="Are you legally authorized to work in the United States?"
                                name="authorized"
                                checked={formData.authorized}
                                onChange={handleInputChange}
                            />
                            <RadioField
                                label="Please note that this position is not eligible for sponsorship. Do you require sponsorship now or in the future?"
                                name="sponsorship"
                                checked={formData.sponsorship}
                                onChange={handleInputChange}
                            />
                        </Row>
                    </Section>
                    <Section title="Resume and Cover Letter Upload">
                        <Row className='border-top my-2 mx-1'>
                            <InputField name="resume" label="Resume" type="file" onChange={handleInputChange} required />
                            <InputField name="coverLetter" label="Cover Letter" type="file" onChange={handleInputChange} />
                        </Row>
                    </Section>
                    <Section title="Availability">
                        <Row className='border-top my-2 mx-1'>
                            <InputField
                                name="availability"
                                label="Available start date"
                                type="date"
                                value={formData.availability}
                                onChange={handleInputChange}
                                min={new Date().toISOString().split('T')[0]}
                                required
                            />
                        </Row>
                    </Section>
                    <Row className='d-flex justify-content-end me-1 my-3'>
                        <Button className='submit-btn radius-20 border-none mt-1' type="submit">
                            Submit
                        </Button>
                    </Row>
                </Form>
                <Modals title={modalInfo.title} body={modalInfo.body} showModal={modalInfo.show} setShowModal={(show) => setModalInfo({ ...modalInfo, show })} />
            </Container>
        </>
    );
};

const Section = ({ title, children }) => (
    <>
        <h2>{title}</h2>
        {children}
    </>
);

const InputField = ({ name, label, type = 'text', value, onChange, required = false, min, placeholder }) => (
    <Col>
        <Form.Group className="my-3" controlId={name}>
            <Form.Label className='fs-18'>{label}</Form.Label>
            <Form.Control
                name={name}
                onChange={onChange}
                type={type}
                placeholder={type !== 'url' ? `Enter ${label.toLowerCase()}` : placeholder}
                required={required}
                min={min}
                {...(type !== 'file' && { value })}
            />
        </Form.Group>
    </Col>
);

const RadioField = ({ label, name, checked, onChange }) => (
    <Form.Group className="my-3" controlId={name}>
        <Form.Label className='fs-18'>{label}</Form.Label>
        <Container fluid className='d-flex align-items-center'>
            <Form.Check
                type="radio"
                label="Yes"
                name={name}
                checked={checked}
                onChange={() => onChange({ target: { name, value: true } })}
                className='me-4'
                required
            />
            <Form.Check
                type="radio"
                label="No"
                name={name}
                checked={!checked}
                onChange={() => onChange({ target: { name, value: false } })}
                required
            />
        </Container>
    </Form.Group>
);
