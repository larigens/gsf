import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Card, Image, Button } from 'react-bootstrap';
import household from '../assets/icons/household.png';
import passenger from '../assets/icons/passenger.png';
import property from '../assets/icons/property.png';
import insurance from '../assets/icons/insurance.png';
import truckinfo from '../assets/icons/truckinfo.png';
import location from '../assets/icons/location.png';

import { FindCarrierForm } from '../components/Forms/FindCarrierForm.jsx';

export const FMCSA = () => {
    const [carrierData, setCarrierData] = useState(null);
    const [carrierBasicsData, setCarrierBasicsData] = useState(null);
    const [cargoCarriedData, setCargoCarriedData] = useState(null);
    const [carrierAuthData, setCarrierAuthData] = useState(null);
    const [carrierMcData, setCarrierMcData] = useState(null);
    const [carrierOperationData, setCarrierOperationData] = useState(null);
    const [carrierEIN, setCarrierEIN] = useState('');
    const [insuranceOnFile, setInsuranceOnFile] = useState('');
    const [insuranceCode, setInsuranceCode] = useState('');
    const [submittedCarrierInfo, setSubmittedCarrierInfo] = useState(null);
    const [typeOfCarrierInfo, setTypeOfCarrierInfo] = useState(null);
    const [dotNumber, setDotNumber] = useState(null);

    const [authorityStatus, setAuthorityStatus] = useState(null);
    const [MCNumber, setMCNumber] = useState(null);
    const [authority, setAuthority] = useState(null);
    const [carrierList, setCarrierList] = useState(null);


    useEffect(() => {
        if (submittedCarrierInfo) {
            const fetchCarrierData = async () => {
                try {
                    if (typeOfCarrierInfo === 'dotNumber') {
                        const response = await fetch(`https://mobile.fmcsa.dot.gov/qc/services/carriers/${submittedCarrierInfo}?webKey=${process.env.REACT_APP_WEBKEY}`);
                        const json = await response.json();
                        setCarrierData(json.content.carrier);
                        setDotNumber(json.content.carrier.dotNumber);
                    }
                    else if (typeOfCarrierInfo === 'mcNumber') {
                        const response = await fetch(`https://mobile.fmcsa.dot.gov/qc/services/carriers/docket-number/${submittedCarrierInfo}?webKey=${process.env.REACT_APP_WEBKEY}`);
                        const json = await response.json();
                        setCarrierData(json.content[0].carrier);
                        setDotNumber(json.content[0].carrier.dotNumber)
                    }
                    else {
                        const response = await fetch(`https://mobile.fmcsa.dot.gov/qc/services/carriers/name/${submittedCarrierInfo}?webKey=${process.env.REACT_APP_WEBKEY}`);
                        const json = await response.json();
                        setCarrierList(json.content);
                        // setDotNumber(json);
                    }
                } catch (error) {
                    console.error('Error fetching carrier data:', error);
                }
            };
            fetchCarrierData();
        }

    }, [submittedCarrierInfo, typeOfCarrierInfo]);

    useEffect(() => {
        if (dotNumber) {
            const fetchMoreCarrierData = async () => {
                try {
                    // Basics - 4
                    const responseBasics = await fetch(`https://mobile.fmcsa.dot.gov/qc/services/carriers/${dotNumber}/basics?webKey=${process.env.REACT_APP_WEBKEY}`);
                    const jsonBasics = await responseBasics.json();
                    setCarrierBasicsData(jsonBasics.content)
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
            fetchMoreCarrierData();
        }

    }, [dotNumber]);

    useEffect(() => {
        if (carrierData) {
            const splitEIN = () => {
                if (carrierData.ein) {
                    const einString = carrierData.ein.toString();
                    const firstPart = einString.substring(0, 2);
                    const secondPart = einString.substring(2);
                    setCarrierEIN(`${firstPart}-${secondPart}`);
                }
                else { setCarrierEIN('N/A') }
            };
            splitEIN();

            const getInsuranceInfo = () => {
                if (carrierData.commonAuthorityStatus !== 'N') {
                    setInsuranceCode('BIPD');
                    if (carrierData.bipdRequiredAmount === carrierData.bipdInsuranceOnFile) {
                        setInsuranceOnFile('Y');
                    } else {
                        setInsuranceOnFile('N');
                    }
                } else if (carrierData.brokerAuthorityStatus !== 'N') {
                    setInsuranceCode('BOND');
                    setInsuranceOnFile(carrierData.bondInsuranceOnFile);
                } else {
                    setInsuranceCode('CARGO');
                    setInsuranceOnFile(carrierData.cargoInsuranceRequired);
                }
            };
            getInsuranceInfo();

            const getAuthorityStatus = (authorityStatus) => {
                if (authorityStatus === 'A') {
                    setAuthorityStatus('Active')
                }
                else if (authorityStatus === 'I') {
                    setAuthorityStatus('Inactive')
                }
                else if (authorityStatus === 'MULTIPLE') {
                    setAuthorityStatus('Multiple - please check Operation Classification section for more details.')
                }
                else {
                    setAuthorityStatus('Pending')
                }
            };

            const findAuthority = () => {
                // if (carrierData.censusTypeId) {
                //     if (carrierData.censusTypeId.censusTypeDesc === 'CARRIER') {
                //         getAuthorityStatus(carrierData.commonAuthorityStatus);
                //         setAuthority('Common');
                //     }
                //     else if (carrierData.censusTypeId.censusTypeDesc === 'CONTRACT') {
                //         getAuthorityStatus(carrierData.contractAuthorityStatus);
                //         setAuthority('Contract');
                //     }
                //     else if (carrierData.censusTypeId.censusTypeDesc === 'BROKER') {
                //         getAuthorityStatus(carrierData.brokerAuthorityStatus);
                //         setAuthority('Broker');
                //     }
                // }
                // else {
                if (carrierData.brokerAuthorityStatus !== 'N' && carrierData.contractAuthorityStatus === 'N' && carrierData.commonAuthorityStatus === 'N') {
                    getAuthorityStatus(carrierData.brokerAuthorityStatus);
                    setAuthority('Broker');
                }
                else if (carrierData.contractAuthorityStatus !== 'N' && carrierData.brokerAuthorityStatus === 'N' && carrierData.commonAuthorityStatus === 'N') {
                    getAuthorityStatus(carrierData.contractAuthorityStatus);
                    setAuthority('Contract');
                }
                else if (carrierData.commonAuthorityStatus !== 'N' && carrierData.brokerAuthorityStatus === 'N' && carrierData.contractAuthorityStatus === 'N') {
                    getAuthorityStatus(carrierData.commonAuthorityStatus);
                    setAuthority('Common');
                }
                else if (carrierData.commonAuthorityStatus !== 'N' && carrierData.brokerAuthorityStatus !== 'N' && carrierData.contractAuthorityStatus === 'N') {
                    getAuthorityStatus('MULTIPLE');
                    setAuthority('Common & Broker');
                }
                else if (carrierData.commonAuthorityStatus !== 'N' && carrierData.brokerAuthorityStatus === 'N' && carrierData.contractAuthorityStatus !== 'N') {
                    getAuthorityStatus('MULTIPLE');
                    setAuthority('Common & Contract');
                }
                else if (carrierData.commonAuthorityStatus === 'N' && carrierData.brokerAuthorityStatus !== 'N' && carrierData.contractAuthorityStatus !== 'N') {
                    getAuthorityStatus('MULTIPLE');
                    setAuthority('Broker & Contract');
                }
                // }
            }
            findAuthority();
        }
    }, [carrierData]);

    useEffect(() => {
        if (carrierMcData) {
            const getDocketNumbers = () => {
                carrierMcData.map(mcNumber => (
                    setMCNumber(`MC Number: ${mcNumber.docketNumberId}`)
                ))
            }
            getDocketNumbers();
        } else {
            setMCNumber('DOT Only');
        }
    }, [carrierMcData]);

    console.log(carrierData);
    console.log(typeOfCarrierInfo);

    return (
        <>
            <FindCarrierForm submittedCarrierInfo={submittedCarrierInfo} setSubmittedCarrierInfo={setSubmittedCarrierInfo} typeOfCarrierInfo={typeOfCarrierInfo} setTypeOfCarrierInfo={setTypeOfCarrierInfo} />
            {submittedCarrierInfo &&
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
                                        <Card.Text className="mb-3 fs-5">{MCNumber}</Card.Text>
                                    </Col>
                                    <Col md={4}>
                                        <Card.Text className="mb-3 fs-5">Entity Type: {authority}</Card.Text>
                                        <Card.Text className="mb-3 fs-5">USDOT Status: {carrierData.allowedToOperate === 'Y' ? 'Active' : 'Inactive'}</Card.Text>
                                        {carrierData.censusTypeId ?
                                            <Card.Text className="mb-3 fs-5">Authority Status: {authorityStatus}</Card.Text>
                                            : null
                                        }

                                    </Col>
                                    <Col md={4}>
                                        {(authority === 'Common' || (authority === 'Contract' && (
                                            <Card.Text className="mb-3 fs-5">Carrier Operation: {carrierData.carrierOperation.carrierOperationDesc}</Card.Text>
                                        )))}
                                        < Card.Text className="mb-3 fs-5">Out of Service Date: {carrierData.oosDate ? carrierData.oosDate : 'N/A'}</Card.Text>
                                        <Card.Text className="mb-3 fs-5">MCS-150 Outdated: {carrierData.mcs150Outdated}</Card.Text>
                                    </Col>
                                </Row>
                                <Card.Text className="fw-bold my-3 fs-4 text-center">Company Information</Card.Text>
                                <Row className='d-flex align-center my-2'>
                                    <Col md={4}>
                                        <Container fluid className='d-flex align-items-baseline ps-0'>
                                            <Card.Text className="fw-bold mb-3 fs-5">Business Address</Card.Text>
                                            <Image className="img-fluid ms-2 icon-color icon-20" src={location} alt="location icon" loading="lazy" />
                                        </Container>
                                        <Card.Text className="mb-3 fs-5">{carrierData.phyStreet}</Card.Text>
                                        <Card.Text className="mb-3 fs-5">{carrierData.phyCity}, {carrierData.phyState} {carrierData.phyZipcode}</Card.Text>
                                    </Col>

                                    <Col md={4}>
                                        <Container fluid className='d-flex align-items-baseline ps-0'>
                                            <Card.Text className="fw-bold mb-3 fs-5">Insurance Details</Card.Text>
                                            <Image className="img-fluid ms-2 icon-color icon-20" src={insurance} alt="insurance icon" loading="lazy" />
                                        </Container>
                                        <Card.Text className="mb-3 fs-5">Insurance Code: {insuranceCode}</Card.Text>
                                        <Card.Text className="mb-3 fs-5">Insurance On File: {insuranceOnFile}</Card.Text>
                                        {insuranceCode === 'BIPD' && (
                                            <Card.Text className="mb-3 fs-5">BIPD: ${carrierData.bipdInsuranceOnFile},000</Card.Text>
                                        )}

                                    </Col>
                                    <Col md={4}>
                                        <Container fluid className='d-flex align-items-center'>
                                            <Image className="img-fluid me-2 icon-color icon-80" src={truckinfo} alt="truckinfo icon" loading="lazy" />
                                            <Container className='mt-2'>
                                                <Card.Text className="my-3 fs-5">Power Units: {carrierData.totalPowerUnits}</Card.Text>
                                                <Card.Text className="mb-3 fs-5">Drivers: {carrierData.totalDrivers}</Card.Text>
                                            </Container>
                                        </Container>
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
                                    <Card.Text className="mb-3 fs-5">Common Authority Status: {carrierData.commonAuthorityStatus === 'A' ? 'Active' : 'None'}</Card.Text>
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

                                    {carrierBasicsData && carrierBasicsData.length !== 0 ?
                                        <>
                                            <Card.Text className="fw-bold my-3 fs-4 text-center">BASIC Details</Card.Text>
                                            {carrierBasicsData.map(basicData => (
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
                                        </>
                                        : null}
                                </Row>

                                {carrierBasicsData && carrierBasicsData.length !== 0 ?
                                    <>
                                        <Card.Text className="fw-bold mb-3 fs-4">Cargo Carried</Card.Text>
                                        {cargoCarriedData && cargoCarriedData.map(cargoData => (
                                            <React.Fragment key={cargoData.id.cargoClassId}>
                                                <Card.Text className="mb-3 fs-5">{cargoData.cargoClassDesc}</Card.Text>
                                            </React.Fragment>
                                        ))}
                                    </>
                                    : null}
                            </Card.Body>
                        </Card>
                    ) :
                        (carrierList ?
                            carrierList.map(carrier => (
                                <Card key={carrier.carrier.dotNumber} className="glassmorphism radius-20 main-color p-4 my-3">
                                    <Card.Body>
                                        {/* add link to check more details - grab dot number */}
                                        <Card.Text className="fw-bold mb-3 fs-5">{carrier.carrier.legalName}</Card.Text>
                                        <Card.Text className="mb-3 fs-5 ">USDOT: {carrier.carrier.dotNumber}</Card.Text>
                                        <Button onClick={() => {
                                            setCarrierData(carrier.carrier);
                                            setDotNumber(carrier.carrier.dotNumber);
                                        }}> View Details </Button>
                                    </Card.Body>
                                </Card>
                            )) : <p>Loading...</p>)
                    }
                </Container>
            }
        </>
    );
};

