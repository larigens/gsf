import { Container, Row, Col, Image } from 'react-bootstrap';
import wallet from '../assets/icons/wallet.png';
import rightArrow from '../assets/icons/right-arrow.png';


export const Home = () => {
    return (
        <Container className="p-3 my-4" style={{ marginTop: '40px' }}>
            <Row className="align-items-center justify-content-center">
                <Col md={6}>
                    <Row className="my-2">
                        <h1 id="heroh1" className="slide-right bordered-text">Your Trusted Factoring Partner in Transportation</h1>
                    </Row>
                    <Row className="my-4">
                        <p className="light-shades leadh1 text-justify slide-right-2" style={{ lineHeight: '1.5' }}>At G Squared Funding, we understand the challenges that transportation companies face when it comes to managing cash flow and maintaining steady operations. That's why we're here to provide tailored factoring solutions designed specifically for you.</p>
                    </Row>
                    <Row className="my-2 mt-4">
                        <a id="contact-btn" className="my-3 slide-right-3" style={{ fontSize: '24px' }} role="button" href="https://gsquaredfunding.com/index.php/contact-us">
                            <span className="contact-btn-span px-3" style={{ fontSize: '24px' }}>
                                Contact us today
                                <Image className="img-fluid ml-3 white-img btn-icon" src={rightArrow} alt="right arrow icon" width="30" loading="lazy" />
                            </span>
                        </a>
                    </Row>
                </Col>
                <Col md={5} className="slide-bottom path" style={{ minHeight: '60vh' }}>
                    <Container className="p-2 glassmorphism" style={{ borderRadius: '20px', width: '80%' }}>
                        <Row className="p-1" style={{ borderBottom: '1px solid #f5f5f5' }}>
                            <Col md={5} className="mr-auto justify-content-start">
                                <div className="d-flex align-items-center mb-1">
                                    <Image className="img-fluid white-img" src={wallet} alt="wallet" width="40px" height="40px" />
                                    <p className="light-shades mx-2 mt-1" style={{ fontSize: '18px' }}>WALLET</p>
                                </div>
                            </Col>
                            <Col md={3} className="justify-content-end">
                                <p className="light-shades mt-3" style={{ fontSize: '15px', textAlign: 'right' }}>2 sec.</p>
                            </Col>
                        </Row>
                        <Row className="my-2 p-1">
                            <p className="light-shades mx-2 mt-1 font-weight-bold" style={{ fontSize: '20px' }}>You just got paid</p>
                        </Row>
                        <Row className="my-2 p-1">
                            <p className="light-shades mx-2" style={{ fontSize: '20px' }}>$10,856.52</p>
                        </Row>
                    </Container>
                    <Container className="my-2 p-2 glassmorphism justify-content-center" style={{ borderRadius: '20px', width: '80%' }}>
                        <Row className="p-1 d-flex justify-content-center" style={{ borderBottom: '1px solid #f5f5f5' }}>
                            <p className="light-shades m-1 mb-2" style={{ fontSize: '20px' }}>Open</p>
                        </Row>
                        <Row className="p-1 d-flex justify-content-center" style={{ textAlign: 'center' }}>
                            <p className="light-shades m-1 mt-2" style={{ fontSize: '20px' }}>Dismiss</p>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row>
                <center><iframe style='border:none; width:100%; max-width:1200px;' width="100%" height="1000" src="https://www.directfreight.com/gsquared-home/"></iframe></center>
            </Row>
        </Container >
    );
};
