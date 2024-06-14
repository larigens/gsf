import { Container, Image, Col, Row, Button } from 'react-bootstrap';
import { HelmetCP } from '../../components/Helmet';
import { Link } from 'react-router-dom';
import creditck from '../../assets/creditck.png';
import creditScore from '../../assets/icons/credit-score.png';
import { useTheme } from '../../components/ThemeContext';


export const Credit = () => {
    const { theme } = useTheme();

    const classNames = (...classes) => classes.filter(Boolean).join(' ');

    
    return (
        <>
            <HelmetCP pageTitle={'Credit Services'}
                pageDescription={`Ensure Financial Stability with Our Reliable Credit Services for Transportation and Trucking Companies. Discover How We Assess and Manage Credit to Support Your Business Growth Safely and Strategically.`}
                pageKeywords={'Credit services for transportation businesses; Trucking company credit checks; Transportation industry credit assessment; Credit management for trucking companies; Freight carrier credit services; Credit evaluation for logistics firms; Trucking industry credit solutions; Credit monitoring for transportation companies; Transportation credit analysis; Trucking business credit management; factoring companies; factoring company in Atlanta; factoring company in Georgia; truck factors; best factoring companies; factoring solutions; financial services; factoring services for trucking companies; invoice factoring'} />
            <Container fluid className="p-4">
                <p className="fw-bold text-justify mb-4 fs-40">Working with GSF</p>

                <Row className="d-flex justify-content-center">
                    <Col md={4} className='text-center'>
                        <Image className="img-fluid" style={{ width: '350px', height: 'auto' }} src={creditck} alt="factors network webpage screenshot" />
                    </Col>
                    <Col md={8} className={classNames(theme === 'Light Mode' ? 'secondary-bg' : 'bg-dark-accent', 'me-auto p-5 radius-20')}>
                        <h2 className="secondary-color fw-bold my-2 fs-36 tracking-in-expand">Credit Services</h2>
                        <p className="fs-18 text-justify my-4">
                            <span className='fw-bold me-1'>This service is a free service to our factoring clients.</span>
                            Make sure to check the credit and payment history on your customers prior to hauling a load. Don't haul for someone that does not pay!</p>
                        <p className="fs-18 text-justify my-4">Please refer to the "Is It Factorable" guide that you received with your welcome package. It explains how to read and use the credit report to determine if a load is factorable.</p>
                        <Row className="mx-1 mt-4">
                            <Button className="my-2 contact-btn px-2 py-1 radius-20 border-none" role="button" href="https://www.factorsnetwork.com/login">
                                <span class="contact-btn-span px-3 fs-22">Check Credit
                                    <Image class="img-fluid ms-2 mb-1 arrow-icon icon-color btn-icon" src={creditScore} alt="credit-score icon" width="30" loading="lazy" />
                                </span>
                            </Button>
                        </Row>
                        <Container className="text-end mt-5">
                            <p className="my-3 fs-18">For questions on how to use this service, please call <span className="secondary-color">+1-888-942-7253.</span></p>
                            <p className="my-3 fs-18">Need access to check credit? <Link className="link-color hover-link-color fs-19" href="mailto:dramirez@gsquaredfunding.com?subject=Login%20Request%20for%20Factor%E2%80%99s%20Network">Request Login for Credit Check</Link></p>
                            <p className="mt-1 fs-15">* Please include your company's name, MC number and email address.</p>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}