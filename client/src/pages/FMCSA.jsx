import React, { useState, useRef, useEffect } from 'react';
import { Form, Button, Row, Col, Container, Card, Image } from 'react-bootstrap';
import household from '../assets/icons/household.png';
import passenger from '../assets/icons/passenger.png';
import property from '../assets/icons/property.png';

export const FMCSA = ({ dotNumber }) => {
    const [carrierData, setCarrierData] = useState(null);
    const [carrierBasicsData, setCarrierBasicsData] = useState(null);
    const [cargoCarriedData, setCargoCarriedData] = useState(null);
    const [carrierAuthData, setCarrierAuthData] = useState(null);
    const [carrierMcData, setCarrierMcData] = useState(null);
    const [carrierOperationData, setCarrierOperationData] = useState(null);
    const [carrierEIN, setCarrierEIN] = useState('');
    const [insuranceOnFile, setInsuranceOnFile] = useState('');
    const [insuranceCode, setInsuranceCode] = useState('');

    useEffect(() => {
        if (dotNumber) {
            const fetchCarrierData = async () => {
                try {
                    const response = await fetch(`https://mobile.fmcsa.dot.gov/qc/services/carriers/${dotNumber}?webKey=${process.env.REACT_APP_WEBKEY}`);
                    const json = await response.json();
                    setCarrierData(json.content.carrier);
                    // Basics - 4
                    const responseBasics = await fetch(`https://mobile.fmcsa.dot.gov/qc/services/carriers/${dotNumber}/basics?webKey=${process.env.REACT_APP_WEBKEY}`);
                    const jsonBasics = await responseBasics.json();
                    setCarrierBasicsData(jsonBasics.content)
                    console.log(jsonBasics.content)
                    // Cargo Carried
                    const responseCargoCarried = await fetch(`https://mobile.fmcsa.dot.gov/qc/services/carriers/${dotNumber}/cargo-carried?webKey=${process.env.REACT_APP_WEBKEY}`);
                    const jsonCargoCarried = await responseCargoCarried.json();
                    setCargoCarriedData(jsonCargoCarried.content);
                    // Carrier Active-For-Hire Authority
                    const responseCarrierActive = await fetch(`https://mobile.fmcsa.dot.gov/qc/services/carriers/${dotNumber}/authority?webKey=${process.env.REACT_APP_WEBKEY}`);
                    const jsonCarrierActive = await responseCarrierActive.json();
                    setCarrierAuthData(jsonCarrierActive.content)
                    // Docket Numbers
                    const responseDocketNumbers = await fetch(`https://mobile.fmcsa.dot.gov/qc/services/carriers/${dotNumber}/docket-numbers?webKey=${process.env.REACT_APP_WEBKEY}`);
                    const jsonDocketNumbers = await responseDocketNumbers.json();
                    setCarrierMcData(jsonDocketNumbers.content)
                    // Operation Classification
                    const responseOperation = await fetch(`https://mobile.fmcsa.dot.gov/qc/services/carriers/${dotNumber}/operation-classification?webKey=${process.env.REACT_APP_WEBKEY}`);
                    const jsonOperation = await responseOperation.json();
                    setCarrierOperationData(jsonOperation.content)
                } catch (error) {
                    console.error('Error fetching carrier data:', error);
                }
            };
            fetchCarrierData();
        }
    }, [dotNumber]);

    useEffect(() => {
        if (carrierData) {
            const splitEIN = () => {
                const einString = carrierData.ein.toString();
                const firstPart = einString.substring(0, 2);
                const secondPart = einString.substring(2);
                setCarrierEIN(`${firstPart}-${secondPart}`);
            };
            splitEIN();
            const getInsuranceInfo = () => {
                if (carrierData.censusTypeId.censusTypeDesc === 'CARRIER') {
                    setInsuranceCode('BIPD');
                    if (carrierData.bipdRequiredAmount === carrierData.bipdInsuranceOnFile) {
                        setInsuranceOnFile('Y');
                    } else {
                        setInsuranceOnFile('N');
                    }
                } else if (carrierData.censusTypeId.censusTypeDesc === 'BROKER') {
                    setInsuranceCode('BOND');
                    setInsuranceOnFile(carrierData.bondInsuranceOnFile);
                } else {
                    setInsuranceCode('CARGO');
                    setInsuranceOnFile(carrierData.cargoInsuranceRequired);
                }
            };
            getInsuranceInfo();
        }
    }, [carrierData]);

    console.log(carrierData)
    return (
        <Container fluid className="mb-4 p-4">
            {carrierData ? (
                <Card className="glassmorphism radius-20 main-color p-4 my-3">
                    <Card.Body>
                        <Card.Title className="fw-bold text-center mb-4 fs-2">{carrierData.legalName}</Card.Title>
                        <Card.Subtitle className="fw-bold text-center mb-3 fs-5">DBA: {carrierData.dbaName ? carrierData.dbaName : 'N/A'}</Card.Subtitle>
                        <Card.Subtitle className="fw-bold text-center mb-3 fs-5">EIN: {carrierEIN}</Card.Subtitle>

                        <Card.Text className="fw-bold mt-5 mb-3 fs-4 text-center">Authority Details</Card.Text>
                        <Row className='d-flex align-center my-2'>
                            <Col md={4}>
                                <Card.Text className="mb-3 fs-5">USDOT Number: {carrierData.dotNumber}</Card.Text>
                                {carrierMcData && carrierMcData.map(mcNumber => (
                                    <React.Fragment key={mcNumber.docketNumberId}>
                                        <Card.Text className="mb-3 fs-5">MC Number: {mcNumber.docketNumber}</Card.Text>
                                    </React.Fragment>
                                ))}                            </Col>
                            <Col md={4}>
                                <Card.Text className="mb-3 fs-5">Entity Type: {carrierData.censusTypeId.censusTypeDesc}</Card.Text>
                                <Card.Text className="mb-3 fs-5">USDOT Status: {carrierData.allowedToOperate === 'Y' ? 'Active' : 'Inactive'}</Card.Text>
                            </Col>
                            <Col md={4}>
                                < Card.Text className="mb-3 fs-5">Out of Service Date: {carrierData.oosDate ? carrierData.oosDate : 'N/A'}</Card.Text>
                                <Card.Text className="mb-3 fs-5">MCS-150 Outdated: {carrierData.mcs150Outdated}</Card.Text>
                            </Col>
                        </Row>
                        <Card.Text className="fw-bold my-3 fs-4 text-center">Company Information</Card.Text>
                        <Row className='d-flex align-center my-2'>
                            <Col md={4}>
                                <Card.Text className="fw-bold mb-3 fs-5">Business Address</Card.Text>
                                <Card.Text className="mb-3 fs-5">{carrierData.phyStreet}</Card.Text>
                                <Card.Text className="mb-3 fs-5">{carrierData.phyCity}, {carrierData.phyState} {carrierData.phyZipcode}</Card.Text>
                            </Col>

                            <Col md={4}>
                                <Card.Text className="fw-bold mb-3 fs-5">Insurance Details</Card.Text>
                                <Card.Text className="mb-3 fs-5">Insurance Code: {insuranceCode}</Card.Text>
                                <Card.Text className="mb-3 fs-5">Insurance On File: {insuranceOnFile}</Card.Text>
                                {insuranceCode === 'BIPD' && (
                                    <Card.Text className="mb-3 fs-5">BIPD: ${carrierData.bipdInsuranceOnFile},000</Card.Text>
                                )}
                                {carrierData.censusTypeId.censusTypeDesc === 'CARRIER' && (
                                    <Card.Text className="mb-3 fs-5">Carrier Operation: {carrierData.carrierOperation.carrierOperationDesc}</Card.Text>
                                )}
                            </Col>
                            <Col md={4}>
                                <Card.Text className="mb-3 fs-5">Power Units: {carrierData.totalPowerUnits}</Card.Text>
                                <Card.Text className="mb-3 fs-5">Drivers: {carrierData.totalDrivers}</Card.Text>
                            </Col>
                        </Row>

                        <Card.Text className="fw-bold my-3 fs-4 text-center">Operation Classification</Card.Text>

                        {carrierOperationData && carrierOperationData.map(opsData => (
                            <React.Fragment key={opsData.id.operationClassId}>
                                <Card.Text className="fw-bold mb-3 fs-5 text-center">{opsData.operationClassDesc}</Card.Text>
                            </React.Fragment>
                        ))}


                        {carrierAuthData && carrierAuthData.map(authData => (
                            <Row key={authData.carrierAuthority.applicantID} className="mb-3">
                                <Col md={4} className='text-center'>
                                    <Image className="img-fluid my-2 icon-color icon-80" src={household} alt="household icon" loading="lazy" />
                                    <Card.Text className="fs-5">Authorized For Household Goods: {authData.carrierAuthority.authorizedForHouseholdGoods}</Card.Text>
                                </Col>
                                <Col md={4} className='text-center'>
                                    <Image className="img-fluid my-2 icon-color icon-80" src={passenger} alt="passenger icon" loading="lazy" />
                                    <Card.Text className="fs-5">Authorized For Passenger: {authData.carrierAuthority.authorizedForPassenger}</Card.Text>
                                </Col>
                                <Col md={4} className='text-center'>
                                    <Image className="img-fluid my-2 icon-color icon-80" src={property} alt="property icon" loading="lazy" />
                                    <Card.Text className="fs-5">Authorized For Property: {authData.carrierAuthority.authorizedForProperty}</Card.Text>
                                </Col>
                            </Row>
                        ))}

                        <Row className='mt-5'>
                            <Card.Text className="mb-3 fs-5">Contract Authority Status: {carrierData.contractAuthorityStatus === 'A' ? 'Active' : 'None'}</Card.Text>
                            <Card.Text className="mb-3 fs-5">Broker Authority Status: {carrierData.bondInsuranceRequired === 'Y' ? 'Active' : 'None'}</Card.Text>
                        </Row>



                        <Row className="my-2 justify-content-center">
                            <Card.Text className="fw-bold mb-3 fs-3 text-center">Other Details</Card.Text>

                            <Card.Text className="mb-3 fs-5">Complaint Count: {carrierData.complaintCount ? carrierData.complaintCount : 'None'}</Card.Text>
                            <Card.Text className="mb-3 fs-5">Safety Rating: {carrierData.safetyRating ? carrierData.safetyRating : 'None'}</Card.Text>
                            <Col md={5} className="text-center m-3 p-3 glassmorphism">
                                <Card.Text className="fw-bold mb-3 fs-4">OOS Details</Card.Text>
                                <Card.Text className="mb-3 fs-5">Driver Insp: {carrierData.driverInsp}</Card.Text>
                                <Card.Text className="mb-3 fs-5">Driver OOS Insp: {carrierData.driverOosInsp}</Card.Text>
                                <Card.Text className="mb-3 fs-5">Driver OOS Rate: {carrierData.driverOosRate}</Card.Text>
                                <Card.Text className="mb-3 fs-5">Driver OOS Rate National Average: {carrierData.driverOosRateNationalAverage}</Card.Text>
                            </Col>
                            <Col md={5} className="text-center m-3 p-3 glassmorphism">
                                <Card.Text className="fw-bold mb-3 fs-4">Hazmat Details</Card.Text>
                                <Card.Text className="mb-3 fs-5">Hazmat Insp: {carrierData.hazmatInsp}</Card.Text>
                                <Card.Text className="mb-3 fs-5">Hazmat OOS Insp: {carrierData.hazmatOosInsp}</Card.Text>
                                <Card.Text className="mb-3 fs-5">Hazmat OOS Rate: {carrierData.hazmatOosRate}</Card.Text>
                                <Card.Text className="mb-3 fs-5">Hazmat OOS Rate National Average: {carrierData.hazmatOosRateNationalAverage}</Card.Text>
                            </Col>

                            <Col md={5} className="text-center m-3 p-3 glassmorphism">
                                <Card.Text className="fw-bold mb-3 fs-4">Crash Details</Card.Text>
                                <Card.Text className="mb-3 fs-5">Crash Total: {carrierData.crashTotal}</Card.Text>
                                <Card.Text className="mb-3 fs-5">Fatal Crash: {carrierData.fatalCrash}</Card.Text>
                                <Card.Text className="mb-3 fs-5">Injury Crash: {carrierData.injCrash}</Card.Text>
                                <Card.Text className="mb-3 fs-5">Tow-Away Crash: {carrierData.towawayCrash}</Card.Text>
                            </Col>

                            <Col md={5} className="text-center m-3 p-3 glassmorphism">
                                <Card.Text className="fw-bold mb-3 fs-4">Vehicle Details</Card.Text>
                                <Card.Text className="mb-3 fs-5">Vehicle Insp: {carrierData.vehicleInsp}</Card.Text>
                                <Card.Text className="mb-3 fs-5">Vehicle OOS Insp: {carrierData.vehicleOosInsp}</Card.Text>
                                <Card.Text className="mb-3 fs-5">Vehicle OOS Rate: {carrierData.vehicleOosRate}</Card.Text>
                                <Card.Text className="mb-3 fs-5">Vehicle OOS Rate National Average: {carrierData.vehicleOosRateNationalAverage}</Card.Text>
                            </Col>

                        </Row>
                        <Row className="my-2 justify-content-center">
                            <Card.Text className="fw-bold my-3 fs-4 text-center">BASIC Details</Card.Text>
                            {carrierBasicsData && carrierBasicsData.map(basicData => (
                                <Col md={5} className="text-center m-3 p-3 glassmorphism" key={basicData.basic.id.basicsId}>
                                    <Card.Text className="mb-3 fs-5">Basics Code: {basicData.basic.basicsType.basicsCode}</Card.Text>
                                    <Card.Text className="mb-3 fs-5">Violation Threshold: {basicData.basic.basicsViolationThreshold}</Card.Text>
                                    <Card.Text className="mb-3 fs-5">Measure Value: {basicData.basic.measureValue}</Card.Text>
                                    <Card.Text className="mb-3 fs-5">Total Inspection With Violation: {basicData.basic.totalInspectionWithViolation}</Card.Text>
                                    <Card.Text className="mb-3 fs-5">Total Violation: {basicData.basic.totalViolation}</Card.Text>
                                    <Card.Text className="mb-3 fs-5">Serious Violation From Investigation (Cited within the last 12 months): {basicData.basic.seriousViolationFromInvestigationPast12MonthIndicator}</Card.Text>
                                </Col>
                            ))}
                            <Card.Text className="my-3 fs-5">For information regarding BASIC elements please, visit <a href='https://csa.fmcsa.dot.gov/'>FMCSA CSA (Compliance, Safety, Accountability). </a> </Card.Text>
                        </Row>
                        <Card.Text className="fw-bold mb-3 fs-4">Cargo Carried</Card.Text>
                        {cargoCarriedData && cargoCarriedData.map(cargoData => (
                            <React.Fragment key={cargoData.id.cargoClassId}>
                                <Card.Text className="mb-3 fs-5">{cargoData.cargoClassDesc}</Card.Text>
                            </React.Fragment>
                        ))}
                    </Card.Body>
                </Card>
            ) : (
                <p>Loading...</p>
            )
            }
        </Container >
    );
};

export const FindDOTForm = () => {
    const [dotNumber, setDotNumber] = useState('');
    const [submittedDotNumber, setSubmittedDotNumber] = useState('');
    const form = useRef();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'dotNumber') {
            setDotNumber(value);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setSubmittedDotNumber(dotNumber);
        setDotNumber('');
    };

    return (
        <>
            <Form ref={form} name="newMessage" method="post" action="newMessage" onSubmit={handleFormSubmit} className='glassmorphism radius-20 main-color p-4 mx-4'>
                <h2>Find Carrier</h2>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="dotNumber">
                            <Form.Label>DOT Number</Form.Label>
                            <Form.Control required value={dotNumber} name='dotNumber' onChange={handleInputChange} type="text" placeholder="Enter DOT Number" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-end me-1'>
                    <Button className='submit-btn radius-20 border-none' type="submit">
                        Submit
                    </Button>
                </Row>
            </Form>
            {submittedDotNumber && <FMCSA dotNumber={submittedDotNumber} />}
        </>
    );
};
