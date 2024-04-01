import { Container, Row, Col, Image } from 'react-bootstrap';
import wallet from '../assets/icons/wallet.png';
import rightArrow from '../assets/icons/right-arrow.png';
import { HelmetCP } from '../components/Helmet';

export const Home = () => {
    return (
        <>
            <HelmetCP pageTitle={'G Squared Funding, LLC | Factoring Services for Trucking Companies'} pageDescription={'Accelerate Your Cash Flow with Our Expert Factoring Services for Transportation and Trucking Companies. Unlock Working Capital and Fuel Your Business Growth Today!'} />
            <Container fluid className="d-flex align-items-center justify-content-center my-4">
                <Row className="align-items-center justify-content-between">
                    <Col lg={6} className='mx-auto'>
                        <Row className="mb-1">
                            <h1 className="slide-right bordered-text">Your Trusted Factoring Partner in Transportation</h1>
                        </Row>
                        <Row className="my-4">
                            <p className="light-shades slide-right-2 fs-19" style={{ lineHeight: '1.5', textAlign: 'justify' }}>At G Squared Funding, we understand the challenges that transportation companies face when it comes to managing cash flow and maintaining steady operations. That's why we're here to provide tailored factoring solutions designed specifically for you.</p>
                        </Row>
                        <Row className="my-2 mt-4 mx-1">
                            <a id="contact-btn" className="my-3 slide-right-3" role="button" href="https://gsquaredfunding.com/index.php/contact-us">
                                <span className="contact-btn-span px-3 py-1" style={{ fontSize: '24px' }}>
                                    Contact us today
                                    <Image className="img-fluid ml-1 px-2 white-img btn-icon" src={rightArrow} alt="right arrow icon" width="30" loading="lazy" />
                                </span>
                            </a>
                        </Row>
                    </Col>
                    <Col lg={5} className="slide-bottom" style={{ minHeight: '55vh' }}>
                        <Container className="p-2 glassmorphism radius-20 w-80">
                            <Row className="d-flex justify-content-between align-items-center mx-1" style={{ borderBottom: '1px solid #f5f5f5' }}>
                                <Col md={5} className="mr-auto d-flex align-items-center">
                                    <Image className="img-fluid white-img" src={wallet} alt="wallet" width="40px" height="40px" />
                                    <p className="light-shades mx-2 pt-3 fs-19 align-bottom">WALLET</p>
                                </Col>
                                <Col md={3} className="justify-content-end">
                                    <p className="light-shades mt-3 fs-15" style={{ textAlign: 'right' }}>2 sec.</p>
                                </Col>
                            </Row>
                            <Row className="mt-3 px-1">
                                <p className="light-shades mx-2 font-weight-bold fs-20">You just got paid</p>
                            </Row>
                            <Row className="mb-1 px-1">
                                <p className="light-shades mx-2 fs-20">$10,856.52</p>
                            </Row>
                        </Container>
                        <Container className="my-2 p-1 glassmorphism radius-20 w-80">
                            <Row className="p-1 p-2 mx-1 text-center" style={{ borderBottom: '1px solid #f5f5f5' }}>
                                <p className="light-shades m-1 mb-2 fs-20">Open</p>
                            </Row>
                            <Row className="p-1 p-2 mx-1 text-center">
                                <p className="light-shades m-1 mt-2 fs-20">Dismiss</p>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
