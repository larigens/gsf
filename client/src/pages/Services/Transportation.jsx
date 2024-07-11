import { Container, Row, Col, Image } from 'react-bootstrap';
import { HelmetCP } from '../../components/Helmet';
import line from '../../assets/icons/line.png';
import { ContactForm } from '../../components/Forms/ContactForm';

const Transportation = () => {

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
                <Row className="me-2 d-flex align-items-center">
                    <p className="mb-3 text-justify fs-22">
                        A big concern for many businesses today is cash flow, and freight brokerage and transportation companies are no exception.
                    </p>
                    <p className="text-justify fs-18 line-30">
                        If you’re in the trucking business and don’t like waiting up to ninety days for payment on your freight bills, a freight factoring company may be a great fit for you. Transportation factoring, also known as trucking factoring or freight bill factoring, is commonly available throughout both the USA and Canada, and G Squared Funding, LLC can provide fast cash for truckers in as little as 24 hours.
                    </p>
                    <Col md={8}>
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
                    <Col md={4} className="my-4">
                        <ContactForm />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Transportation;
