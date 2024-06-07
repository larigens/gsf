import { Container, Row, Col } from 'react-bootstrap';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { ContactForm } from '../components/Forms/ContactForm';
import { Link } from 'react-router-dom';
import { HelmetCP } from '../components/Helmet';
import { useTheme } from '../components/ThemeContext.jsx';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export const Contact = () => {
    const { theme } = useTheme();

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
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
            answer: 'You are only charged for invoices that you factor. You will never be forced to factor every invoice. The rates depend on the volume of your business. The higher the volume, the lower your rate will be. Rates are as low as 1.5%'
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
    ]

    return (
        <>
            <HelmetCP pageTitle={'Contact Us | Unlock Working Capital'}
                pageDescription={'Get in Touch with Us Today to Explore Partnership Opportunities or Inquire About Our Services in the Transportation and Trucking Sector. Our Team is Ready to Assist You. Contact Us Now!'}
                pageKeywords={'Transportation company contact; Trucking industry inquiries; Contact us trucking; Transportation service inquiries; Trucking partnership opportunities; Logistics collaboration; Reach out to us in transportation; Contact information for trucking services; Trucking business inquiries; Transportation service provider contact; factoring companies; factoring company in Atlanta; factoring company in Georgia; truck factors; best factoring companies; factoring solutions; financial services; factoring services for trucking companies; invoice factoring'} />
            <Container fluid className="mb-4 p-4">
                <p className="fw-bold text-justify mb-3 fs-40">Contact Us</p>
                <Container fluid className="d-flex align-items-center my-2">
                    <FaPhone className='icon-color' />
                    <Link to="tel:+18889427253" className='fs-19 main-color mx-2'>
                        +1 888-942-7253
                    </Link>
                </Container>
                <Container fluid className="d-flex align-items-center my-3">
                    <MdEmail className='icon-color' />
                    <Link to="mailto: contact@gsquaredfunding.com" className='fs-19 main-color mx-2'>
                        contact@gsquaredfunding.com
                    </Link>
                </Container>

                <Row className='my-5'>
                    <Col md={4} className="mb-2 me-3">
                        <ContactForm />
                    </Col>
                    <Col md={7}>
                        <Container fluid
                            className={classNames(
                                theme === 'Light Mode' ? 'secondary-bg' : '',
                                'ms-3 p-4',
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
                                >
                                    {/* add markers or other components here */}
                                </GoogleMap>
                            </LoadScript>
                        </Container>
                    </Col>
                </Row>
                <Row className='mt-5 mb-2'>
                    <p className="fw-bold text-justify mb-3 mt-5 fs-32">FAQ</p>
                    {faqItems.map((faqItem, index) => (
                        <>
                            <p key={index} className="text-justify fw-bold secondary-color fs-22 mb-2">{faqItem.question}</p>
                            <p className='text-justify fs-18 mb-3'>{faqItem.answer}</p>
                        </>
                    ))}
                </Row>
            </Container>
        </>
    );
}