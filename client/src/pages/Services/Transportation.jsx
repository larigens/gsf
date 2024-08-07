import { Container, Row, Col, Image } from 'react-bootstrap';
import { HelmetCP } from '../../components/Helmet';
import line from '../../assets/icons/line.png';
import { ContactForm } from '../../components/Forms/ContactForm';
import { useTheme } from '../../components/ThemeContext';

const Transportation = () => {
    const { theme } = useTheme();
    const classNames = (...classes) => classes.filter(Boolean).join(' ');

    const transportationItems = [
        {
            title: 'Non-Recourse Factoring and Recourse Factoring at Low Rates',
            listItems: [
                'No minimum volume requirements.',
                'No long term contracts.',
                'Competitive Fuel Advance Program.'
            ]
        },
        {
            title: 'Freight Broker Factoring',
            listItems: [
                'Offer Quick Pay to Your Clients.',
                'Build Excellent Credit for Your Company.',
                'Never Worry About Slow Paying Shippers.'
            ]
        },
        {
            title: 'Benefits:',
            listItems: [
                'Free Credit Checks.',
                'Free Fuel Card.',
                'Full Service Billing.',
                'Full Collection Services.',
                'Discounted FedEx Overnight Program.',
                'Choose your payment method.',
                'Online Account Information Available 24/7.'
            ]
        }
    ];

    return (
        <>
            <HelmetCP
                pageTitle={'Factoring for Trucking Companies'}
                pageDescription={`Streamline Your Transportation Business with Our Efficient Factoring Services. Gain Access to Immediate Cash Flow Solutions Tailored to Meet the Unique Needs of the Trucking and Transportation Industry. Drive Your Success Today!`}
                pageKeywords={'Transportation factoring services; Trucking invoice factoring; Freight bill factoring for transportation; Cash flow solutions for transportation companies; Transportation industry financing; Invoice factoring for logistics; Freight factoring for trucking companies; Transportation invoice financing; Trucking industry cash flow management; Transportation funding options; factoring companies; factoring company in Atlanta; factoring company in Georgia; truck factors; best factoring companies; factoring solutions; financial services; factoring services for trucking companies; invoice factoring'}
                canonicalURL={'services/transportation'}
            />
            <Container fluid className="mb-4 p-4">
                <p className="fw-bold text-justify mb-3 fs-40"> Transportation Factoring</p>
                <Row className="me-2">
                    <p className="mb-3 text-justify fs-22">
                        A big concern for many businesses today is cash flow, and freight brokerage and transportation companies are no exception.
                    </p>
                    <p className="text-justify fs-18 line-30">
                        If you’re in the trucking business and don’t like waiting up to ninety days for payment on your freight bills, a freight factoring company may be a great fit for you. Transportation factoring, also known as trucking factoring or freight bill factoring, is commonly available throughout both the USA and Canada, and G Squared Funding, LLC can provide fast cash for truckers in as little as 24 hours.
                    </p>
                    <Col sm={12} md={7} className='mt-4 mb-2 me-auto'>
                        {transportationItems.map((item, index) => (
                            <div key={index} className="mb-4">
                                <h3 className="secondary-color fs-24 mb-3">{item.title}</h3>
                                <ul className="list-unstyled">
                                    {item.listItems.map((listItem, idx) => (
                                        <li key={idx} className="d-flex align-items-start mb-3">
                                            <Image src={line} alt="lines" className="img-fluid me-2 icon-20" />
                                            <p className="mb-0 text-justify fs-18">{listItem}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </Col>
                    <Col md={1} className='mt-1'>
                        <svg id="bigHalfCircleLeft" xmlns="http://www.w3.org/2000/svg" version="1.1" width="113.4%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className='radius-20 ms-1'>
                            <path d="M100 0 C0 40 0 60 100 100 Z" className={classNames(theme === 'Light Mode' ? 'accent-fill' : 'main-fill', '')} />
                        </svg>
                    </Col>
                    <Col id='transportation-form' sm={12} md={4} className={classNames(theme === 'Light Mode' ? 'background-light' : 'bg-main-brand', 'd-flex align-items-center justify-content-center mt-1 p-3 radius-20')}>
                        <ContactForm />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Transportation;
