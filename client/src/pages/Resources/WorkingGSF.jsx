import { Container, Image, Col, Row } from 'react-bootstrap';
import { HelmetCP } from '../../components/Helmet';
import line from '../../assets/icons/line.png';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import postage from '../../assets/icons/postage-stamp.png';
import stamp from '../../assets/icons/stamp.png';

export const WorkingGSF = () => {
    const instructions = [
        {
            title: 'Is It Factorable?',
            description: `First, you need to ensure that the broker is approved for factoring. There are several methods to check credit and verify that the load you are planning to book is factorable. Here's how you can check credit:`,
            listItems: [
                <>
                    Call <Link className='link-color hover-link-color' to="tel:+18889427253">1-888-942-7253.</Link>
                </>,
                <>
                    Check on <Link className='link-color hover-link-color' to="https://www.factorsnetwork.com/login">Factors Network.</Link>
                </>,
                'Email your Client Relations Manager the Broker MC #.'
            ]
        },
        {
            title: 'Bill of Lading Instructions',
            description: `The BOL is an important document as it serves as a receipt for the goods shipped, provides details about the nature and quantity of the goods, and acts as a key document for the transportation and handling of the cargo.`,
            listItems: [
                'Always ensure that your company name is legible on the BOL.',
                'Make sure the Bill of Lading is signed by all parties.',
                'Ensure that you have all the pages.',
                'And more importantly, keep a copy! Keeping a copy is crucial for resolving disputes.'
            ]
        },
        {
            title: 'Submit the Bill of Lading and Load Confirmation',
            description: `Once you have delivered the load, scan the documents (Rate Confirmation, Bill of Lading, any receipts - if applicable, scale tickets, etc.) and send them to us. Please ensure that you send us everything you received from both the shipper and the receiver.`,
            listItems: [
                <>
                    Scan your documents! You can use a <Link className='link-color hover-link-color' to="/resources/#phone-apps">Phone App</Link> for this purpose.
                </>,
                <>
                    Upload documents to your account using the <Link className='link-color hover-link-color' to="https://gsquared.winfactor.com/login/">Client Portal.</Link>
                </>,
                'Need to mail originals? Use our FedEx overnight shipping option.',
                'Sending through regular mail? Send ORIGINAL Bill of Lading and Load Confirmation to:',
                <Row className="text-center fs-19">
                    <span className='fs-16 text-start ms-4 mb-3'>*Make sure to include your company name on all correspondence.</span>
                    <Container fluid className='letter my-3 w-40 radius-10'>
                        <Row fluid className='text-start'>
                            <Col xs={6} md={8} className='my-2'>
                                <p className="my-1 fw-bold fs-17"> ABC Trucking, LLC</p>
                                <p className="mt-1 mb-0 fs-16">123 Main Street</p>
                                <p className="mb-2 fs-16">Anytown, NY 10010</p>
                            </Col>
                            <Col xs={6} md={4} className='d-flex align-items-center text-end mb-2'>
                                <Image className='icon-60 img-fluid icon-color mx-2' src={stamp} />
                                <Image className='icon-60 img-fluid icon-color' src={postage} />
                            </Col>
                        </Row>
                        <Row className='my-3 text-center'>
                            <p className="mt-2 mb-1 fw-bold fs-22">G Squared Funding, LLC</p>
                            <p className="mt-1 mb-0">8215 Roswell Rd Building 600</p>
                            <p className="mb-2">Atlanta, GA 30350</p>
                        </Row>
                    </Container>
                </Row>
            ]
        },
        {
            title: 'Select Your Payment Option',
            description: `The funds will be sent to your virtual wallet, where you can select how you would like to receive the payment and how much. You can also add the driver's bank account so you can transfer the payment directly from your virtual wallet.`,
            listItems: [
                'Check by Snail Mail',
                'Next-Day ACH Transfer',
                'Same-Day ACH Transfer',
                'Wire Transfer',
                'Fuel Card'
            ]
        }
    ];

    return (
        <>
            <HelmetCP
                pageTitle={'Working with GSF | Simple Freight Factoring'}
                pageDescription={`Discover How Our Streamlined Factoring Process Empowers Transportation and Trucking Businesses. From Application to Funding, Explore the Effortless Steps to Unlock Working Capital and Drive Financial Success.`}
                pageKeywords={'Factoring process for transportation companies; Trucking industry funding steps; Transportation invoice factoring process; Freight bill factoring explained; Trucking company cash flow solutions; Factoring application to funding; Transportation industry financing process; Invoice financing for logistics companies; Trucking factoring step-by-step; Factoring process for freight carriers; factoring companies; factoring company in Atlanta; factoring company in Georgia; truck factors; best factoring companies; factoring solutions; financial services; factoring services for trucking companies; invoice factoring'}
                canonicalURL={'resources/working-gsf'}
            />
            <Container fluid className="mb-4 p-4">
                <p className="fw-bold text-justify mb-4 fs-40">Working with GSF</p>
                <Row className="text-justify mb-5">
                    <Col md={8}>
                        <p className="fw-bold fs-26">Our Instructions</p>
                        {instructions.map((instruction, index) => (
                            <Container fluid key={index} className='my-3'>
                                <p className="secondary-color fw-bold fs-22">{instruction.title}</p>
                                <p className="text-justify mb-3 fs-18">{instruction.description}</p>
                                <ul className="list-unstyled">
                                    {instruction.listItems.map((item, index) => (
                                        <li key={index} className="d-flex align-items-center mb-3">
                                            {!item.props?.className?.includes('text-center') && (
                                                <Image className='icon-20 img-fluid mx-2' src={line} alt="lines" />
                                            )}
                                            <p className="mb-1 fs-18">{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </Container>
                        ))}
                    </Col>
                    <Col md={4} className="text-center">
                        <Image className='img-fluid icon-color mx-2' src={logo} alt="gsf logo" />
                    </Col>
                </Row>
                <Row className="text-center mt-5">
                    <Link className='bordered-text fs-19 mb-2' to="/apply-now">Sign Up Today!</Link>
                    <p className='text-center fs-18'>If you have any questions, please feel free to call us at <Link className='link-color hover-link-color' to="tel:+18889427253">+1-888-942-7253</Link></p>
                </Row>
            </Container>
        </>
    );
};