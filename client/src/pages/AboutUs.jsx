import { Container, Row, Col, Image } from 'react-bootstrap';
import entry from '../assets/about.png';

import apply from '../assets/icons/apply.png';
import line from '../assets/icons/line.png';
import { Link } from 'react-router-dom';
import { useTheme } from '../components/ThemeContext.jsx';
import { HelmetCP } from '../components/Helmet';
import { Cards } from '../components/Cards/Cards';

export const AboutUs = () => {
    const { theme } = useTheme();

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const aboutInfo = [
        {
            title: 'Client-Centric',
            image: 'clientCentric',
            description: `We prioritize companies that find delight in our invoice factoring process. Your satisfaction is paramount, and we are committed to earning and maintaining your trust through exceptional service.`
        },
        {
            title: 'Integrity & Reliability',
            image: 'reliability',
            description: `Our unwavering commitment to integrity and transparency ensures a relationship built on trust and reliability. You can count on us as a steadfast financial partner, providing consistent and dependable factoring services that promote your business's stability and growth.`
        },
        {
            title: 'Innovation',
            image: 'innovation',
            description: `In an ever-evolving industry, we stay at the forefront by embracing innovation and leveraging cutting-edge technology to simplify your factoring experience.`
        },
        {
            title: 'Flexibility',
            image: 'flexibility',
            description: `Recognizing the uniqueness of every transportation company, we offer flexible factoring solutions that seamlessly adapt to your specific requirements.`
        }
    ]


    return (
        <>
            <HelmetCP pageTitle={'About Us | Your Favorite Factor'}
                pageDescription={'Discover Our Story and Commitment to Excellence in the Transportation and Trucking Sector. Learn About Our Passion, Values, and Dedication to Serving Our Clients with Integrity and Innovation.'}
                pageKeywords={'Transportation company history; Trucking industry expertise; Our mission in transportation; About us trucking; Our team in logistics; Company values in transportation; Commitment to excellence trucking; Trucking industry innovation; Our story in transportation; Serving clients in logistics; factoring companies; factoring company in Atlanta; factoring company in Georgia; truck factors; best factoring companies; factoring solutions; financial services; factoring services for trucking companies; invoice factoring'} />
            <Container fluid className="mb-4 p-4">
                <p className="fw-bold text-justify mb-3 fs-40">About Us</p>
                <Row className="mt-4 mb-2">
                    <Col md={7} className="me-auto">
                        <p className="fw-bold text-justify mb-2 fs-28">Our Company's History</p>
                        <p className="text-justify mb-2 fs-24 secondary-color">Founded in 2010</p>
                        <p className="text-justify mb-2 fs-20 line-30">G Squared Funding has become a leading authority in Invoice Factoring Services nationwide. Our inception was driven by a vision to empower transportation companies with tailored and innovative financial solutions.</p>
                        <br />
                        <p className="fw-bold text-justify mb-2 fs-28">Our Mission</p>
                        <p className="text-justify mb-2 fs-20 line-30">We are dedicated to fostering growth and prosperity within the transportation industry. We take pride in offering immediate, cost-effective business factoring services that simplify your financial journey. Your satisfaction and success are our top priorities, and our ultimate goal is to meet your needs while providing an effortless and satisfying experience.</p>
                    </Col>
                    <Col md={4}>
                        <Image className="img-fluid radius-20 my-1" src={entry} alt="gsf office" loading="lazy" />
                    </Col>
                </Row>
                {/* Values section */}
                <Row>
                    <p className="fw-bold text-justify mb-2 fs-28">Our Values</p>
                    <Row className="mt-3">
                        <Cards cardInfo={aboutInfo} />
                    </Row>
                </Row>
                {/* Why Choose section */}
                <Row className="mt-5 text-justify">
                    <Container fluid
                        className={classNames(
                            theme === 'Light Mode' ? 'secondary-bg' : '',
                            'ms-auto pb-2 ms-2',
                        )}>
                        <Row className="mt-5 text-justify">
                            <p className="fw-bold text-justify mb-3 fs-28">Why Choose G Squared Funding?</p>
                        </Row>
                        <Container fluid className="d-flex align-items-center mb-2">
                            <Image className="me-2 icon-20" src={line} alt="trucks" loading="lazy" />
                            <p className="fw-bold mb-0 fs-22">Industry Leadership</p>
                        </Container>
                        <p className="ms-4 ps-3 mb-4 text-justify fs-18">With Expertise since 2010, we understand the intricacies of your industry, making us one of the nation's foremost and trusted Invoice Factoring Companies.</p>
                        <Container fluid className="d-flex align-items-center mb-2">
                            <Image className="me-2 icon-20" src={line} alt="trucks" loading="lazy" />
                            <p className="fw-bold mb-0 fs-22">Immediate Solutions</p>
                        </Container>
                        <p className="ms-4 ps-3 mb-4 text-justify fs-18">Our commitment to providing immediate, cost-effective business factoring services allows you to focus on what matters most - growing your business.</p>
                        <Container fluid className="d-flex align-items-center mb-2">
                            <Image className="me-2 icon-20" src={line} alt="trucks" loading="lazy" />
                            <p className="fw-bold mb-0 fs-22">Exceptional Customer Service</p>
                        </Container>
                        <p className="ms-4 ps-3 mb-4 text-justify fs-18">We pride ourselves on delivering the highest level of customer service, putting your needs at the forefront of every interaction.</p>
                        <Container fluid className="d-flex align-items-center mb-2">
                            <Image className="me-2 icon-20" src={line} alt="trucks" loading="lazy" />
                            <p className="fw-bold mb-0 fs-22">Simplified Factoring</p>
                        </Container>
                        <p className="ms-4 ps-3 mb-4 text-justify fs-18">Our mission is to make the factoring process as simple and worry-free as possible, ensuring a pleasurable transaction.</p>
                    </Container>
                </Row>
                {/* Apply Now section */}
                <Row className="my-2 justify-content-center align-items-center my-5 border-total p-1">
                    <Col md={3} className="text-center">
                        <Link to='/apply-now' className="mt-2">
                            <Image className='icon-color icon-80' src={apply} alt="apply now icon" loading="lazy" />
                        </Link>
                    </Col>
                    <Col md={8} className="mt-2">
                        <p className="text-justify mb-3 fs-18">Embark on a journey to elevate your transportation business to new heights with G Squared Funding. Your satisfaction drives us, and we look forward to becoming your trusted financial partner.</p>
                        <p className="text-justify fs-18">Thank you for considering us for your factoring needs. We are excited about the opportunity to serve you and contribute to your continued success in the transportation industry!</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

