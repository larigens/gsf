import React, { useState, useRef } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

export const FuelForm = ({ setFuelInfo, setAreaInfo }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const form = useRef();

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
        // Find the selected option's area name
        const selectedArea = stateOptions.find(option => option.code === e.target.value).states;
        setAreaInfo(selectedArea);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFuelInfo(selectedOption);
    };

    const stateOptions = [
        {
            area: 'PADD 1A (New England)',
            states: 'Connecticut, Maine, Massachusetts, New Hampshire, Rhode Island, and Vermont.',
            code: 'R1X'
        },
        {
            area: 'PADD 1B (Central Atlantic)',
            states: 'Delaware, District of Columbia, Maryland, New Jersey, New York, and Pennsylvania.',
            code: 'R1Y'
        },
        {
            area: 'PADD 1C (Lower Atlantic)',
            states: 'Florida, Georgia, North Carolina, South Carolina, Virginia, and West Virginia.',
            code: 'R1Z'
        },
        {
            area: 'PADD 2 (Midwest)',
            states: 'Illinois, Indiana, Iowa, Kansas, Kentucky, Michigan, Minnesota, Missouri, Nebraska, North Dakota, Ohio, Oklahoma, South Dakota, Tennessee, and Wisconsin.',
            code: 'R20'
        },
        {
            area: 'PADD 3 (Gulf Coast)',
            states: 'Alabama, Arkansas, Louisiana, Mississippi, New Mexico, and Texas.',
            code: 'R30'
        },
        {
            area: 'PADD 4 (Rocky Mountain)',
            states: 'Colorado, Idaho, Montana, Utah, and Wyoming.',
            code: 'R40'
        },
        {
            area: 'PADD 5 (West Coast)',
            states: 'Alaska, Arizona, California, Hawaii, Nevada, Oregon, and Washington.',
            code: 'R50'
        }
    ]

    return (
        <>
            <Form ref={form} name="newMessage" method="post" action="newMessage" onSubmit={handleFormSubmit} className='glassmorphism radius-20 main-color p-4 mx-4'>
                <p className="fs-26 mb-2">Check Fuel Prices</p>

                <p className='fs-16'><span className='fw-bold secondary-color'>PADD 1A (New England):</span> Connecticut, Maine, Massachusetts, New Hampshire, Rhode Island, and Vermont.</p>
                <p className='fs-16'><span className='fw-bold secondary-color'>PADD 1B (Central Atlantic):</span> Delaware, District of Columbia, Maryland, New Jersey, New York, and Pennsylvania.</p>
                <p className='fs-16'><span className='fw-bold secondary-color'>PADD 1C (Lower Atlantic):</span> Florida, Georgia, North Carolina, South Carolina, Virginia, and West Virginia.</p>
                <p className='fs-16'><span className='fw-bold secondary-color'>PADD 2 (Midwest):</span> Illinois, Indiana, Iowa, Kansas, Kentucky, Michigan, Minnesota, Missouri, Nebraska, North Dakota, Ohio, Oklahoma, South Dakota, Tennessee, and Wisconsin.</p>
                <p className='fs-16'><span className='fw-bold secondary-color'>PADD 3 (Gulf Coast):</span> Alabama, Arkansas, Louisiana, Mississippi, New Mexico, and Texas.</p>
                <p className='fs-16'><span className='fw-bold secondary-color'>PADD 4 (Rocky Mountain):</span> Colorado, Idaho, Montana, Utah, and Wyoming.</p>
                <p className='fs-16'><span className='fw-bold secondary-color'>PADD 5 (West Coast):</span> Alaska, Arizona, California, Hawaii, Nevada, Oregon, and Washington.</p>

                <Row>
                    <Col>
                        <Form.Group className="my-3" controlId="selectOption">
                            <Form.Label>For more details, please select one of the options:</Form.Label>
                            <Form.Select value={selectedOption} onChange={handleSelectChange}>
                                {stateOptions.map((option, index) => (
                                    <option key={index} value={option.code}>{option.area}</option>
                                ))}

                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-end me-1 my-2'>
                    <Button className='submit-btn radius-20 border-none' type="submit">
                        Submit
                    </Button>
                </Row>
            </Form>
        </>
    );
};
