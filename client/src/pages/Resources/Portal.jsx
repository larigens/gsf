import { Container, Image, Col, Row } from 'react-bootstrap';
import { HelmetCP } from '../../components/Helmet';
import { Link } from 'react-router-dom';
import website from '../../assets/website.png';
import { useTheme } from '../../components/ThemeContext';
import { FaChalkboardUser } from "react-icons/fa6";

export const Portal = () => {
    const { theme } = useTheme();

    const classNames = (...classes) => classes.filter(Boolean).join(' ');

    return (
        <>
            <HelmetCP
                pageTitle={'Client Portal'}
                pageDescription={`Access Your Dedicated Client Portal for Seamless Management of Your Transportation or Trucking Business. Streamline Operations, Track Invoices, and Stay Informed Anytime, Anywhere. Experience Efficiency at Your Fingertips!`}
                pageKeywords={'Transportation client portal; Trucking company dashboard; Logistics client management; Freight tracking portal; Trucking industry software; Transportation business portal; Client portal for freight carriers; Trucking company invoice tracking; Logistics management platform; Transportation business solutions; factoring companies; factoring company in Atlanta; factoring company in Georgia; truck factors; best factoring companies; factoring solutions; financial services; factoring services for trucking companies; invoice factoring'}
            />
            <Container fluid className="p-4">
                <p className="fw-bold text-justify mb-4 fs-40">Client Portal</p>

                <Row className="d-flex justify-content-center">
                    <Col md={6} className="text-center">
                        <Image className="img-fluid mt-5" src={website} alt="factoring software" />
                    </Col>
                    <Col md={6} className={classNames(theme === 'Light Mode' ? 'secondary-bg' : 'bg-dark-accent', 'me-auto p-5 radius-20')}>
                        <h2 className="secondary-color fw-bold my-2 fs-36 tracking-in-expand">Client Portal Access</h2>
                        <p className="fs-18 text-justify my-4">
                            You can easily submit your paperwork to your Client Relations Manager by logging into your account. You can also review any outstanding invoices and view funding reports, just click below!
                        </p>
                        <Row className="mx-1 mt-4">
                            <Link to="https://gsquared.winfactor.com/login/" className="link-color hover-link-color">
                                <FaChalkboardUser className="img-fluid text-center mb-1 icon-80" />
                            </Link>
                            <p>Don't have access? <Link className="link-color hover-link-color fs-18" to="mailto:dramirez@gsquaredfunding.com?subject=Login%20Request%20for%20WinFactor%20Client%20Portal">Request a Login</Link></p>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};