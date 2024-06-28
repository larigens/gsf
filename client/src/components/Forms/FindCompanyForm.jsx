import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

export const FindCompanyForm = ({ submittedCompanyInfo, setSubmittedCompanyInfo, typeOfCompanyInfo, setTypeOfCompanyInfo }) => {
    const [formData, setFormData] = useState({
        companyInfo: '',
        selectedOption: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'companyInfo' ? value.toLowerCase().replace(/\s+/g, '%20') : value
        });
    };

    const handleSelectChange = (e) => {
        setFormData({
            ...formData,
            selectedOption: e.target.value
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setSubmittedCompanyInfo(formData.companyInfo);
        setTypeOfCompanyInfo(formData.selectedOption);
        setFormData({
            companyInfo: '',
            selectedOption: ''
        });
    };

    const { companyInfo, selectedOption } = formData;

    return (
        <Container className='mx-2'>
            <Form name="newMessage" method="post" action="newMessage" onSubmit={handleFormSubmit} className='glassmorphism radius-20 main-color p-4 mx-4'>
                <h2>Find Company</h2>
                <Row>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3" controlId="selectOption">
                            <Form.Label>Select Option</Form.Label>
                            <Form.Select value={selectedOption} onChange={handleSelectChange}>
                                <option value="">Select One</option>
                                <option value="dotNumber">DOT Number</option>
                                <option value="name">Name</option>
                                <option value="mcNumber">MC Number</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    {selectedOption && (
                        <Col xs={12} md={6}>
                            <Form.Group className="mb-3" controlId="companyInfo">
                                <Form.Label>{selectedOption === 'dotNumber' ? 'DOT Number' : selectedOption === 'name' ? 'Name' : 'MC Number'}</Form.Label>
                                <Form.Control
                                    required
                                    value={companyInfo}
                                    name="companyInfo"
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder={`Enter ${selectedOption === 'dotNumber' ? 'DOT Number' : selectedOption === 'name' ? 'Name' : 'MC Number'}`}
                                />
                            </Form.Group>
                        </Col>
                    )}
                </Row>
                <Row className='justify-content-end'>
                    <Col xs={12} md={3} className='mt-2 mt-md-0'>
                        <Button className='submit-btn radius-20 border-none w-100' type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};
