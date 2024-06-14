import { Container, Row, Col, Image } from 'react-bootstrap';
import { HelmetCP } from '../../components/Helmet';
import line from '../../assets/icons/line.png';
import potential from '../../assets/potential.png';
import roadmap from '../../assets/roadmap.png';
import { ContactForm } from '../../components/Forms/ContactForm';
import { Cards } from '../../components/Cards/Cards';
import { LinkCards } from '../../components/Cards/LinkCards';

export const Services = () => {
    const services = [
        'Swift Same-Day or 24 to 48-Hour Funding',
        'No Minimum Volume Requirements',
        'Complimentary Credit Review for Your Accounts',
        'Administrative Support and Comprehensive Billing Services',
        'User-Friendly Online Account Management',
        'Comprehensive Collections Service',
        'Exclusive FedEx Overnight Discount Program',
        'Secure Wire and ACH Transfers for All Accounts',
        'EFS Transfers',
        'Attractive Referral Fees',
        'Flexible Open and Short-Term Contract Options',
        'Specialized Transportation Freight Bill Factoring Services',
        'Expert Broker Factoring Services',
        'Tailored Financing and Payroll Funding for Staffing Companies',
        'Accessible Business Lines of Credit for All Industries'
    ];

    const servicesInfo = [
        {
            title: 'Non-Recourse Factoring',
            image: 'nonRecourse',
            description: `Experience the ease and simplicity of Non-Recourse Factoring. Say goodbye to concerns about reserve accounts or buybacks; once you've entrusted us with your invoice, it becomes our responsibility, offering peace of mind.`
        },
        {
            title: 'Recourse Factoring',
            image: 'recourse',
            description: `Enjoy lower rates with Recourse Factoring while shouldering the credit risk. We establish a reserve account, and buybacks may apply. This option is ideal for businesses with fast-paying accounts.`
        },
        {
            title: 'Free Customer Credit Reports',
            image: 'creditScore',
            description: `In today's uncertain economy, securing timely payments is challenging. We offer free credit checks to all our factoring clients, enabling you to assess customer creditworthiness and make informed business decisions.`
        },
        {
            title: 'Beyond Factoring',
            image: 'collection',
            description: `Why handle the hassle of invoices? Leave the administrative work to us, allowing you to concentrate on business growth and your well-being. We manage all the invoicing and paperwork, ensuring your success.`
        }
    ]

    const items = [
        {
            title: "Improved Cash Flow",
            text: "Instant access to funds ensures that you have the liquidity needed to cover operating expenses, purchase inventory, and expand your business."
        },
        {
            title: "Debt-Free Financing",
            text: "Factoring is not a loan, so you won't incur debt or interest payments. You're simply leveraging your existing assets—your outstanding invoices."
        },
        {
            title: "Credit Protection",
            text: "Factoring companies often provide credit checks on your customers, reducing the risk of non-payment and bad debt."
        },
        {
            title: "Simplified Accounting",
            text: "Factoring simplifies your financial record-keeping, as you're essentially converting accounts receivable into cash."
        },
        {
            title: "Flexible Solution",
            text: "Factoring can be tailored to your business needs, whether you need occasional support during busy seasons or ongoing assistance with your receivables."
        }
    ];

    const industries = [
        {
            title: 'Transportation Factoring',
            subtitle: 'Trucking Companies and Freight Brokers',
            image: ['carrier', 'broker'],
            link: '/services/transportation'
        },
        {
            title: 'Staffing Factoring',
            subtitle: 'Capital for your Staffing Agency',
            image: 'staff',
            link: '/services/staffing'
        }
    ]

    return (
        <>
            <HelmetCP pageTitle={'Services | Factoring Solutions'}
                pageDescription={`Discover Our Comprehensive Range of Tailored Services Designed to Meet the Diverse Needs of Transportation and Trucking Companies. From Freight Factoring to Logistics Support, We've Got You Covered!`}
                pageKeywords={'Trucking industry services; Transportation solutions; Freight factoring services; Logistics support for trucking; Trucking company offerings; Transportation service provider; Freight invoice financing; Trucking industry support; Logistics services for transportation; Trucking business solutions; Factoring services in Georgia; factoring companies; factoring company in Atlanta; factoring company in Georgia; truck factors; best factoring companies; factoring solutions; financial services; factoring services for trucking companies; invoice factoring'} />
            <Container fluid className="mb-4 p-4">
                <p className="fw-bold text-justify mb-3 fs-40">Our Services</p>
                <p className="text-justify my-3 fs-24">We offer a seamless and cost-effective solution to boost your business's cash flow, accompanied by a wide array of valuable features, including:</p>
                <Row className="justify-content-between">
                    <Col md={6}>
                        <ul className="list-unstyled fs-18">
                            {services.map((service, index) => (
                                <li key={index} className="d-flex align-items-center mb-2">
                                    <Image src={line} alt="lines" className="img-fluid me-2 icon-20" />
                                    <p className="mb-1 fs-18">{service}</p>
                                </li>
                            ))}
                        </ul>
                    </Col>
                    <Col md={6} className="mt-3 mx-auto">
                        <Image src={potential} alt="financial services" className="img-fluid align-items-center radius-20" />
                    </Col>
                </Row>
                <Cards cardInfo={servicesInfo} />
                <Row className="p-1 me-3 my-4">
                    <h2 className="fw-bold secondary-color mb-3 fs-32">Unlocking Your Cash Flow: How Factoring Works</h2>
                    <p className=" mb-4 text-justify fs-22">Running a business comes with its fair share of challenges, and managing cash flow can often be a daunting task. That's where factoring steps in as a powerful financial solution.</p>
                    <h3 className="secondary-color mb-3 fs-22 fw-bold"> What is Factoring?</h3>
                    <p className="mb-4 text-justify fs-18">Factoring, also known as accounts receivable financing, is a flexible and efficient way for businesses to secure immediate access to their outstanding invoices. Instead of waiting for customers to pay, you can convert your accounts receivable into working capital, helping you meet ongoing operational needs, seize growth opportunities, and maintain a healthy financial position.</p>
                    <h3 className="secondary-color mb-3 fs-22 fw-bold" >How Does Factoring Work?</h3>
                    <Image className="img-fluid align-items-center radius-20 w-60" src={roadmap} alt="factoring process diagram" />
                    <h3 className="secondary-color mb-3 mt-5 fs-22 fw-bold">The Benefits of Factoring:</h3>
                    <ul className="list-unstyled">
                        {items.map((item, index) => (
                            <li key={index} className="d-flex align-items-center mb-3">
                                <Image src={line} alt="lines" className="img-fluid me-2 icon-20" />
                                <p className="mb-0 text-justify fs-18">
                                    <span className='fw-bold'>{item.title}:</span> {item.text}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <p className="mb-3 text-justify fs-18 line-25 me-2">At G Squared Funding, we specialize in providing factoring solutions tailored to your unique requirements. Our goal is to help you unlock your business's full potential by providing the working capital you need when you need it. Explore the benefits of factoring with us and experience the financial freedom that can take your business to new heights.</p>
                </Row>
                <Row>
                    <h2 className="fw-bold secondary-color fs-32 my-4">Ready to get started?</h2>
                    <Col md={4} className="mt-2 mb-5 me-2">
                        <ContactForm />
                    </Col>
                    <Col md={7} className="ms-2">
                        <h2 className="secondary-color mb-4 mt-1 fs-32">Industries Served</h2>
                        <Row>
                            {industries.map((industry, index) => (
                                <Col key={index} md={5} className="mb-3">
                                    <LinkCards title={industry.title} subtitle={industry.subtitle} image={industry.image} link={industry.link} />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

