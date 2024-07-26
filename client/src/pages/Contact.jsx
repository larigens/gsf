import { Container, Row, Col } from 'react-bootstrap';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { HelmetCP } from '../components/Helmet';
import { ContactForm } from '../components/Forms/ContactForm';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useTheme } from '../components/ThemeContext';

const Contact = () => {
    const { theme } = useTheme();

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    const containerStyle = {
        height: '400px',
        width: '100%'
    };

    const center = {
        lat: 33.97986778259426,
        lng: -84.34810177670815
    };

    const faqItems = [
        {
            question: 'Do I Need Good Credit?',
            answer: 'No. We will not deny you because of no credit, low credit, or bad credit. We look at the creditworthiness of your customers to make sure that they pay on time. Once you sign up with us, you will have access to credit reports to ensure that customers are reliable.'
        },
        {
            question: 'How Much Does It Cost?',
            answer: 'You are only charged for invoices that you factor. You will never be forced to factor every invoice. The rates depend on the volume of your business. The higher the volume, the lower your rate will be. Rates are as low as 1.5%.'
        },
        {
            question: 'How Much Do I Need To Factor?',
            answer: `It all depends on your business needs. Some companies factor invoices for customers that take longer to pay, while others factor all their invoices so that they don't have to worry about invoicing and collections.`
        },
        {
            question: 'How To Apply?',
            answer: (
                <>
                    <Link className='link-color hover-link-color' to="/apply-now">Apply Here</Link> or give us a call at <Link className='link-color hover-link-color' to="tel:+18889427253">+1 (888) 942-7253</Link> and one of our Business Development Officers will be able to help!
                </>
            )
        }
    ];

    return (
        <>
            <HelmetCP
                pageTitle={'Contact Us | Unlock Working Capital'}
                pageDescription={'Get in Touch with Us Today to Explore Partnership Opportunities or Inquire About Our Services in the Transportation and Trucking Sector. Our Team is Ready to Assist You. Contact Us Now!'}
                pageKeywords={'Transportation company contact; Trucking industry inquiries; Contact us trucking; Transportation service inquiries; Trucking partnership opportunities; Logistics collaboration; Reach out to us in transportation; Contact information for trucking services; Trucking business inquiries; Transportation service provider contact; factoring companies; factoring company in Atlanta; factoring company in Georgia; truck factors; best factoring companies; factoring solutions; financial services; factoring services for trucking companies; invoice factoring'}
                canonicalURL={'contact-us'}
            />
            <Container fluid className="mb-4 p-4">
                <p className="fw-bold text-justify mb-3 fs-40">Contact Us</p>
                <Container fluid className="d-flex align-items-center my-2">
                    <FaPhone className='icon-color icon-20' />
                    <Link to="tel:+18889427253" className='fs-19 main-color mx-2'>
                        +1 888-942-7253
                    </Link>
                </Container>
                <Container fluid className="d-flex align-items-center my-3">
                    <MdEmail className='icon-color icon-20' />
                    <Link to="mailto:contact@gsquaredfunding.com" className='fs-19 main-color mx-2'>
                        contact@gsquaredfunding.com
                    </Link>
                </Container>

                <Row className='my-5'>
                    <Col md={4} className="mt-2 mb-3 me-3">
                        <ContactForm />
                    </Col>
                    <Col md={7} className='mt-2'>
                        <Container fluid
                            className={classNames(
                                theme === 'Light Mode' ? 'secondary-bg' : 'bg-dark-accent',
                                'ms-2 p-4 radius-20',
                            )}>
                            <p className="fw-bold text-justify mb-3 fs-32 secondary-color">Our Location</p>
                            <p className="fw-bold text-justify mb-2 fs-20">G Squared Funding, LLC</p>
                            <p className="text-justify mb-1 fs-18">8215 Roswell Road, Bldg 600</p>
                            <p className="text-justify mb-4 fs-18">Atlanta, GA 30350</p>

                            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} mapIds={['GSFLocation']}>
                                <GoogleMap
                                    mapContainerStyle={containerStyle}
                                    center={center}
                                    zoom={17}
                                    options={{ mapId: 'GSFLocation' }}
                                />
                            </LoadScript>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="mb-4 mx-0 px-0">
                <svg id="clouds" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M-5 100 Q 0 20 5 100 Z
						 M0 100 Q 5 0 10 100
						 M5 100 Q 10 30 15 100
						 M10 100 Q 15 10 20 100
						 M15 100 Q 20 30 25 100
						 M20 100 Q 25 -10 30 100
						 M25 100 Q 30 10 35 100
						 M30 100 Q 35 30 40 100
						 M35 100 Q 40 10 45 100
						 M40 100 Q 45 50 50 100
						 M45 100 Q 50 20 55 100
						 M50 100 Q 55 40 60 100
						 M55 100 Q 60 60 65 100
						 M60 100 Q 65 50 70 100
						 M65 100 Q 70 20 75 100
						 M70 100 Q 75 45 80 100
						 M75 100 Q 80 30 85 100
						 M80 100 Q 85 20 90 100
						 M85 100 Q 90 50 95 100
						 M90 100 Q 95 25 100 100
						 M95 100 Q 100 15 105 100 Z"
                        className={classNames(theme === 'Light Mode' ? 'secondary-fill' : 'dark-accent-fill', '')}
                    >
                    </path>
                </svg>
                <Row className={classNames(
                    theme === 'Light Mode' ? 'secondary-bg' : 'bg-dark-accent',
                    'p-3 radius-20',
                )}>
                    <p className="fw-bold text-justify my-3 fs-32">FAQ</p>
                    {faqItems.map((faqItem, index) => (
                        <div key={index} className="mb-4">
                            <p className="text-justify fw-bold secondary-color fs-22 mb-2">{faqItem.question}</p>
                            <p className='text-justify fs-18 mb-3'>{faqItem.answer}</p>
                        </div>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default Contact;
