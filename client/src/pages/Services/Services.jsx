import { Container, Row, Col, Image } from 'react-bootstrap';
import { HelmetCP } from '../../components/Helmet';
import line from '../../assets/icons/line.png';
import potential from '../../assets/potential.png';
import roadmap from '../../assets/roadmap.png';
import { ContactForm } from '../../components/Forms/ContactForm';
import { Cards } from '../../components/Cards/Cards';
import { LinkCards } from '../../components/Cards/LinkCards';
import { useTheme } from '../../components/ThemeContext';
import logo from '../../assets/logo.png';

const Services = () => {
    const { theme } = useTheme();
    const classNames = (...classes) => classes.filter(Boolean).join(' ');

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
    ];

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
    ];

    return (
        <>
            <HelmetCP
                pageTitle={'Services | Factoring Solutions'}
                pageDescription={`Discover Our Comprehensive Range of Tailored Services Designed to Meet the Diverse Needs of Transportation and Trucking Companies. From Freight Factoring to Logistics Support, We've Got You Covered!`}
                pageKeywords={'Trucking industry services; Transportation solutions; Freight factoring services; Logistics support for trucking; Trucking company offerings; Transportation service provider; Freight invoice financing; Trucking industry support; Logistics services for transportation; Trucking business solutions; Factoring services in Georgia; factoring companies; factoring company in Atlanta; factoring company in Georgia; truck factors; best factoring companies; factoring solutions; financial services; factoring services for trucking companies; invoice factoring'}
                canonicalURL={'services'}
            />
            <Container fluid className="p-4">
                <p className="fw-bold text-justify mb-3 fs-40">Our Services</p>
                <p className="text-justify my-3 fs-24">We offer a seamless and cost-effective solution to boost your business's cash flow, accompanied by a wide array of valuable features, including:</p>
                <Row className={classNames(theme === 'Light Mode' ? 'secondary-bg' : 'bg-dark-accent', 'mt-4 mb-5 mx-1 radius-right')}>
                    <Col md={5} className='mt-4 mb-2 me-auto'>
                        <ul className="list-unstyled fs-18">
                            {services.map((service, index) => (
                                <li key={index} className="d-flex align-items-center mb-2">
                                    <Image src={line} alt="lines" className="img-fluid me-2 icon-20" />
                                    <p className="mb-1 fs-18">{service}</p>
                                </li>
                            ))}
                        </ul>
                    </Col>
                    <Col md={1}>
                        <svg id="bigHalfCircleLeft" xmlns="http://www.w3.org/2000/svg" version="1.1" width="114.5%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className='radius-20 ms-1'>
                            <path d="M100 0 C0 40 0 60 100 100 Z" className={classNames(theme === 'Light Mode' ? 'accent-fill' : 'main-fill', '')} />
                        </svg>
                    </Col>
                    <Col md={6} className={classNames(theme === 'Light Mode' ? 'background-light' : 'bg-main-brand', 'd-flex align-items-center text-center my-0 p-3 radius-20')}>
                        <Image id='potential' src={potential} alt="financial services - elevate your potential with GSF" className="img-fluid radius-20 p-4" />
                    </Col>
                </Row>

                <Cards cardInfo={servicesInfo} />
            </Container>
            <Container fluid className="mb-2 p-2 mx-1">
                <Row className="p-1 my-5">
                    <Container fluid className='py-3 pe-5 radius-top'>
                        <h2 className="fw-bold secondary-color mb-3 fs-32">Unlocking Your Cash Flow: How Factoring Works</h2>
                        <p className=" mb-4 text-justify fs-22">Running a business comes with its fair share of challenges, and managing cash flow can often be a daunting task. That's where factoring steps in as a powerful financial solution.</p>
                        <h3 className="secondary-color mb-3 fs-22 fw-bold"> What is Factoring?</h3>
                        <p className="mb-4 text-justify fs-18">Factoring, also known as accounts receivable financing, is a flexible and efficient way for businesses to secure immediate access to their outstanding invoices. Instead of waiting for customers to pay, you can convert your accounts receivable into working capital, helping you meet ongoing operational needs, seize growth opportunities, and maintain a healthy financial position.</p>
                    </Container>
                    <h3 className="secondary-color mb-3 fs-22 fw-bold">How Does Factoring Work?</h3>
                    <Image id='roadmap' className="img-fluid align-items-center radius-20 w-40 mb-5" src={roadmap} alt="factoring process diagram" />
                    <Container fluid className={`py-3 mt-4 radius-top ${theme === 'Light Mode' ? 'secondary-bg' : 'bg-dark-accent'}`}>
                        <h3 className="secondary-color mb-3 mt-3 fs-22 fw-bold">The Benefits of Factoring:</h3>
                        <ul className="list-unstyled">
                            {items.map((item, index) => (
                                <li key={index} className="d-flex align-items-center mb-3 pe-3">
                                    <Image src={line} alt="lines" className="img-fluid me-2 icon-20" />
                                    <p className="mb-0 text-justify fs-18">
                                        <span className='fw-bold'>{item.title}:</span> {item.text}
                                    </p>
                                </li>
                            ))}
                        </ul>
                        <p className="my-3 px-2 text-justify fs-18 line-25 me-2">At G Squared Funding, we specialize in providing factoring solutions tailored to your unique requirements. Our goal is to help you unlock your business's full potential by providing the working capital you need when you need it. Explore the benefits of factoring with us and experience the financial freedom that can take your business to new heights.</p>
                    </Container>
                    <svg id="bigTriangleShadow" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none" className='p-0'>
                        <path id="trianglePath1" d="M0 0 L50 100 L100 0 Z" className={classNames(theme === 'Light Mode' ? 'secondary-fill' : 'dark-accent-fill', '')} />
                        <path id="trianglePath2" d="M50 100 L100 40 L100 0 Z" className={classNames(theme === 'Light Mode' ? 'secondary-fill' : 'dark-accent-fill', '')} />
                    </svg>
                </Row>
            </Container>
            <Container fluid className="mb-2 mx-0 px-0">
                <Container fluid className='d-flex flex-column align-items-center justify-content-center text-center'>
                    <Image className="img-fluid icon-color icon-80 pt-1 my-2 " src={logo} alt="logo" loading="lazy" />
                    <h2 className="fw-bold fs-36 mt-2 mb-5 ps-3">Ready to get started?</h2>
                </Container>
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
                <Row className={`py-2 px-3 mx-0 ${theme === 'Light Mode' ? 'secondary-bg' : 'bg-dark-accent'}`} >
                    <Col md={4} className="mt-3 mb-5">
                        <ContactForm />
                    </Col>
                    <Col md={1} className='mx-0'></Col>
                    <Col id='industries-served' md={4} className={classNames(theme === 'Light Mode' ? 'background-light' : 'bg-main-brand', 'px-2 pb-3 mt-3 mb-5 w-55 h-50 radius-20')}>
                        <h2 className="my-4 fs-32 light-color text-center">Industries Served</h2>
                        <Row className='d-flex justify-content-center'>
                            {industries.map((industry, index) => (
                                <Col key={index} md={5} className="mb-3">
                                    <LinkCards title={industry.title} subtitle={industry.subtitle} image={industry.image} link={industry.link} />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
                <svg id="curveDownColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 0 C 50 100 80 100 100 0 Z" className={classNames(theme === 'Light Mode' ? 'secondary-fill' : 'dark-accent-fill', '')} />
                </svg>
            </Container >
        </>
    );
};

export default Services;
