import React, { useState, useRef } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

export const FindCompanyForm = ({ submittedcompanyInfo, setSubmittedCompanyInfo, typeOfCompanyInfo, setTypeOfCompanyInfo }) => {

    const [companyInfo, setCompanyInfo] = useState('');

    const [selectedOption, setSelectedOption] = useState('');
    const form = useRef();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setCompanyInfo(value.toLowerCase().replace(/\s+/g, '%20'));
        } else {
            setCompanyInfo(e.target.value);
        }
    };

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setSubmittedCompanyInfo(companyInfo);
        setTypeOfCompanyInfo(selectedOption);
        setCompanyInfo('');
    };

    return (
        <Container className='mx-2'>
            <Form ref={form} name="newMessage" method="post" action="newMessage" onSubmit={handleFormSubmit} className='glassmorphism radius-20 main-color p-4 mx-4'>
                <h2>Find Company</h2>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="selectOption">
                            <Form.Label>Select Option</Form.Label>
                            <Form.Select value={selectedOption} onChange={handleSelectChange}>
                                <option value="dotNumber">DOT Number</option>
                                <option value="name">Name</option>
                                <option value="mcNumber">MC Number</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    {selectedOption ?
                        <Col>
                            <Form.Group className="mb-3" controlId="companyInfo">
                                <Form.Label>{selectedOption === 'dotNumber' ? 'DOT Number' : selectedOption === 'name' ? 'Name' : 'MC Number'}</Form.Label>
                                <Form.Control
                                    required
                                    value={companyInfo}
                                    name={selectedOption}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder={`Enter ${selectedOption === 'dotNumber' ? 'DOT Number' : selectedOption === 'name' ? 'Name' : 'MC Number'}`}
                                />
                            </Form.Group>
                        </Col> : null}
                </Row>
                <Row className='d-flex justify-content-end me-1 my-2'>
                    <Button className='submit-btn radius-20 border-none' type="submit">
                        Submit
                    </Button>
                </Row>
            </Form>
        </Container>
    );
};
