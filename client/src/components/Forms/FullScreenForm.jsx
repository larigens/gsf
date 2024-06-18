import React, { useState } from 'react';
import { Container, Form, Button, ProgressBar } from 'react-bootstrap';

export const FullScreenForm = () => {
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        q6: '',
        q7: '',
        q8: '',
        q9: '',
        q10: '',
        q11: ''
    });

    const today = new Date().toISOString().split('T')[0];

    const usStates = [
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida',
        'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
        'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska',
        'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
        'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas',
        'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleNext = () => {
        const requiredFields = {
            1: ['q1'],
            2: [],
            3: [],
            4: ['q4'],
            5: ['q5'],
            6: ['q6'],
            7: ['q7'],
            8: ['q8'],
            9: ['q9'],
            10: ['q10'],
            11: ['q11']
        };

        const required = requiredFields[step];
        const allFieldsFilled = required.every(field => !!formData[field]);

        if (allFieldsFilled) {
            if (step === 10) {
                const phonePattern = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
                const phoneNumber = formData.q10;

                if (!phonePattern.test(phoneNumber)) {
                    alert('Please enter a valid phone number in the format (123) 456-7890');
                    return;
                }
            }

            setStep(step + 1);
        } else {
            alert('Please fill out all required fields before proceeding.');
        }
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
    };

    const renderFormContent = () => {
        switch (step) {
            case 1:
                return (
                    <div>
                        <Form.Group controlId="q1">
                            <Form.Label className="fs-field-label fs-anim-upper">Business Exact Legal Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="q1"
                                placeholder="ABC Trucking LLC"
                                value={formData.q1}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={handleNext}>Next</Button>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <Form.Group controlId="q2">
                            <Form.Label className="fs-field-label fs-anim-upper">DBA (“doing business as”)</Form.Label>
                            <Form.Text className='text-muted'>Write 'N/A' if you don't have a DBA or simply click 'next'.</Form.Text>
                            <Form.Control
                                type="text"
                                name="q2"
                                placeholder="X Trucking"
                                value={formData.q2}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button variant="secondary" onClick={handlePrevious}>Previous</Button>
                        <Button variant="primary" onClick={handleNext}>Next</Button>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <Form.Group controlId="q3">
                            <Form.Label className="fs-field-label fs-anim-upper">Date Established</Form.Label>
                            <Form.Control
                                type="date"
                                max={today}
                                name="q3"
                                value={formData.q3}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button variant="secondary" onClick={handlePrevious}>Previous</Button>
                        <Button variant="primary" onClick={handleNext}>Next</Button>
                    </div>
                );
            case 4:
                return (
                    <div>
                        <Form.Group controlId="q4">
                            <Form.Label className="fs-field-label fs-anim-upper">State of Incorporation</Form.Label>
                            <Form.Control
                                as="select"
                                name="q4"
                                value={formData.q4}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select State</option>
                                {usStates.map((state, index) => (
                                    <option key={index} value={state}>{state}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Button variant="secondary" onClick={handlePrevious}>Previous</Button>
                        <Button variant="primary" onClick={handleNext}>Next</Button>
                    </div>
                );
            case 5:
                return (
                    <div>
                        <Form.Group>
                            <Form.Label className="fs-field-label fs-anim-upper">Legal Status</Form.Label>
                            <div className="fs-radio-group fs-radio-custom clearfix fs-anim-lower">
                                <Form.Check
                                    type="radio"
                                    id="q5a"
                                    name="q5"
                                    value="corporation"
                                    label="Corporation"
                                    checked={formData.q5 === 'corporation'}
                                    onChange={handleChange}
                                />
                                <Form.Check
                                    type="radio"
                                    id="q5b"
                                    name="q5"
                                    value="sole-prop"
                                    label="Sole Proprietor"
                                    checked={formData.q5 === 'sole-prop'}
                                    onChange={handleChange}
                                />
                                <Form.Check
                                    type="radio"
                                    id="q5c"
                                    name="q5"
                                    value="LLC/LLP"
                                    label="LLC/LLP"
                                    checked={formData.q5 === 'LLC/LLP'}
                                    onChange={handleChange}
                                />
                                <Form.Check
                                    type="radio"
                                    id="q5d"
                                    name="q5"
                                    value="partnership"
                                    label="Partnership"
                                    checked={formData.q5 === 'partnership'}
                                    onChange={handleChange}
                                />
                            </div>
                        </Form.Group>
                        <Button variant="secondary" onClick={handlePrevious}>Previous</Button>
                        <Button variant="primary" onClick={handleNext}>Next</Button>
                    </div>
                );
            case 6:
                return (
                    <div>
                        <Form.Group controlId="q6">
                            <Form.Label className="fs-field-label fs-anim-upper my-2">Business Address</Form.Label>
                            <div>
                                <Form.Text className='text-muted'>Street Address:</Form.Text>
                            </div>
                            <Form.Control
                                type="text"
                                name="q6"
                                placeholder="124 Street"
                                value={formData.q6}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="secondary" onClick={handlePrevious}>Previous</Button>
                        <Button variant="primary" onClick={handleNext}>Next</Button>
                    </div>
                );
            case 7:
                return (
                    <div>
                        <Form.Group controlId="q7">
                            <Form.Label className="fs-field-label fs-anim-upper">Business Address</Form.Label>
                            <div>
                                <Form.Text className='text-muted'>City:</Form.Text>
                            </div>
                            <Form.Control
                                type="text"
                                name="q7"
                                placeholder="Anytown"
                                value={formData.q7}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="secondary" onClick={handlePrevious}>Previous</Button>
                        <Button variant="primary" onClick={handleNext}>Next</Button>
                    </div>
                );
            case 8:
                return (
                    <div>
                        <Form.Group controlId="q8">
                            <Form.Label className="fs-field-label fs-anim-upper">Business Address</Form.Label>
                            <div>
                                <Form.Text className='text-muted'>State:</Form.Text>
                            </div>
                            <Form.Control
                                as="select"
                                name="q8"
                                value={formData.q8}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select State</option>
                                {usStates.map((state, index) => (
                                    <option key={index} value={state}>{state}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Button variant="secondary" onClick={handlePrevious}>Previous</Button>
                        <Button variant="primary" onClick={handleNext}>Next</Button>
                    </div>
                );
            case 9:
                return (
                    <div>
                        <Form.Group controlId="q9">
                            <Form.Label className="fs-field-label fs-anim-upper">Business Address</Form.Label>
                            <div>
                                <Form.Text className='text-muted'>Zip Code:</Form.Text>
                            </div>
                            <Form.Control
                                type="number"
                                name="q9"
                                placeholder="12345"
                                value={formData.q9}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="secondary" onClick={handlePrevious}>Previous</Button>
                        <Button variant="primary" onClick={handleNext}>Next</Button>
                    </div>
                );
            case 10:
                return (
                    <div>
                        <Form.Group controlId="q10">
                            <Form.Label className="fs-field-label fs-anim-upper">Business Phone:</Form.Label>
                            <Form.Control
                                type="tel"
                                name="q10"
                                placeholder="(123) 456-7890"
                                value={formData.q10}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="secondary" onClick={handlePrevious}>Previous</Button>
                        <Button variant="primary" onClick={handleNext}>Next</Button>
                    </div>
                );
            case 11:
                return (
                    <div>
                        <Form.Group controlId="q11">
                            <Form.Label className="fs-field-label fs-anim-upper">Business E-mail:</Form.Label>
                            <Form.Control
                                type="email"
                                name="q11"
                                placeholder="ap@abctrucking.com"
                                value={formData.q11}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="secondary" onClick={handlePrevious}>Previous</Button>
                        <Button variant="primary" type="submit">Submit</Button>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <Container fluid className="fullscreen-form">
            <div className="fs-form-wrap" id="fs-form-wrap">
                <div className="fs-title">
                    <h1>Account Receivable Factoring Application</h1>
                </div>
                <Form id="myform" className="fs-form fs-form-full" autoComplete="off" onSubmit={handleSubmit}>
                    <ProgressBar now={(step / 11) * 100} className="mb-4" />
                    {renderFormContent()}
                </Form>
            </div>
        </Container>
    );
};

