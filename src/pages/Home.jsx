import { Container, Row, Col, Image } from 'react-bootstrap';
import wallet from '../assets/icons/wallet.png';
import rightArrow from '../assets/icons/right-arrow.png';
import fastFunding from '../assets/icons/fast_funding.png';
import referralFee from '../assets/icons/referral_fee.png';
import lineCredit from '../assets/icons/line_credit.png';
import overnight from '../assets/icons/overnight.png';
import { HelmetCP } from '../components/Helmet';

export const Home = () => {
    return (
        <>
            <HelmetCP pageTitle={'G Squared Funding, LLC | Factoring Services for Trucking Companies'} pageDescription={'Accelerate Your Cash Flow with Our Expert Factoring Services for Transportation and Trucking Companies. Unlock Working Capital and Fuel Your Business Growth Today!'} />
            <Container fluid className="d-flex align-items-center justify-content-center my-5" style={{ minHeight: '75vh' }}>
                <Row className="align-items-center justify-content-between">
                    <Col lg={7} className='mx-auto'>
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
                    <Col lg={4} className="slide-bottom" style={{ minHeight: '50vh' }}>
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
            {/* Call to Action */}
            <Container fluid className="my-4 p-2 mx-4">
                <h2 className="font-weight-bold my-3 light-accent">Unlock Your Transportation Company's Financial Potential Today!</h2>
                <h3 className="mb-4 light-shades">Explore Our Expert Factoring Services and Drive Your Business Forward.</h3>
                <Row className="text-justify my-4">
                    <Col md={6} className="mb-3 mt-4">
                        <Container className="p-3 d-flex align-items-center">
                            <Image className="img-fluid white-img icon-80" src={fastFunding} alt="fast funding icon" loading="lazy" />
                            <p className="ml-3 pl-1 mb-0 light-shades fs-22">Fast Same Day Funding</p>
                        </Container>
                    </Col>
                    <Col md={6} className="mb-3 mt-4">
                        <Container className="p-3 d-flex align-items-center">
                            <Image className="img-fluid white-img icon-80" src={referralFee} alt="referral fee icon" loading="lazy" />
                            <p className="ml-3 pl-1 mb-0 light-shades fs-22">Referral Fees</p>
                        </Container>
                    </Col>
                    <Col md={6} className="mb-3 mt-4">
                        <Container className="p-3 d-flex align-items-center">
                            <Image className="img-fluid white-img icon-80" src={lineCredit} alt="lines of credit icon" loading="lazy" />
                            <p className="ml-3 pl-1 mb-0 light-shades fs-22">Business Lines of Credit Available</p>
                        </Container>
                    </Col>
                    <Col md={6} className="mb-3 mt-4">
                        <Container className="p-3 d-flex align-items-center">
                            <Image className="img-fluid white-img icon-80" src={overnight} alt="overnight icon" loading="lazy" />
                            <p className="ml-3 pl-1 mb-0 light-shades fs-22">Fed Ex Overnight Discount Program</p>
                        </Container>
                    </Col>
                </Row>
                <Row className="text-justify my-5">
                    <p className="mb-3 light-shades fs-24">Join the ranks of satisfied clients who have experienced the benefits of partnering with us.</p>
                    <a className="gradient-hv text-decoration-none light-accent" href="/services">Discover More Now!</a>
                </Row>
            </Container>

        </>
    );
};
