import React, { useState, useRef } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

export const FindCarrierForm = ({ submittedCarrierInfo, setSubmittedCarrierInfo, typeOfCarrierInfo, setTypeOfCarrierInfo }) => {

    const [carrierInfo, setCarrierInfo] = useState('');

    const [selectedOption, setSelectedOption] = useState('dotNumber');
    const form = useRef();

    const handleInputChange = (e) => {
        setCarrierInfo(e.target.value);
    };

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setSubmittedCarrierInfo(carrierInfo);
        setTypeOfCarrierInfo(selectedOption);
        setCarrierInfo('');
    };

    return (
        <>
            <Form ref={form} name="newMessage" method="post" action="newMessage" onSubmit={handleFormSubmit} className='glassmorphism radius-20 main-color p-4 mx-4'>
                <h2>Find Carrier</h2>
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
                    <Col>
                        <Form.Group className="mb-3" controlId="dotNumber">
                            <Form.Label>{selectedOption === 'dotNumber' ? 'DOT Number' : selectedOption === 'name' ? 'Name' : 'MC Number'}</Form.Label>
                            <Form.Control
                                required
                                value={carrierInfo}
                                name={selectedOption}
                                onChange={handleInputChange}
                                type="text"
                                placeholder={`Enter ${selectedOption === 'dotNumber' ? 'DOT Number' : selectedOption === 'name' ? 'Name' : 'MC Number'}`}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-end me-1'>
                    <Button className='submit-btn radius-20 border-none' type="submit">
                        Submit
                    </Button>
                </Row>
            </Form>
        </>
    );
};
