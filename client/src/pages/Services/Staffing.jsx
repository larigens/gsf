import { Container, Row, Col, Image } from 'react-bootstrap';
import { HelmetCP } from '../../components/Helmet';
import line from '../../assets/icons/line.png';
import { ContactForm } from '../../components/Forms/ContactForm';
import { useTheme } from '../../components/ThemeContext';

const Staffing = () => {
    const { theme } = useTheme();

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    const staffingItems = [
        {
            title: 'Benefits',
            listItems: [
                `Free up hours spent invoicing and collecting payments - we'll take care of it.`,
                'Put debt-free working capital into your business.',
                'No long-term loans or monthly payments of any type.',
                'Cover payroll, overhead, and cost of goods sold.',
                'Expand operations and be able to fill large orders.'
            ]
        },
        {
            title: 'What kind of staffing companies come to us for help?',
            listItems: [
                'Young companies experiencing growth that need cash today.',
                'Mature companies that have capped their working capital/credit and need more leverage.',
                'Companies dissatisfied with their current factoring company.'
            ]
        }
    ];

    return (
        <>
            <HelmetCP
                pageTitle={'Factoring for Staffing Agencies'}
                pageDescription={`Elevate Your Staffing Agency's Cash Flow with Our Specialized Factoring Solutions. Unlock Funds Quickly and Securely to Support Your Growth and Operations. Partner with Us Today!`}
                pageKeywords={'Staffing agency factoring; Invoice factoring for staffing companies; Cash flow solutions for staffing agencies; Temp agency funding; Staffing industry financing; Payroll factoring for staffing firms; Invoice financing for recruiters; Staffing company funding options; Temporary staffing invoice factoring; Staffing agency cash flow management; factoring companies; factoring company in Atlanta; factoring company in Georgia; truck factors; best factoring companies; factoring solutions; financial services; factoring services for trucking companies; invoice factoring'}
            />
            <Container fluid className="mb-4 p-4">
                <p className="fw-bold text-justify mb-3 fs-40"> Staffing Factoring</p>
                <Row className="me-2 d-flex align-items-center">
                    <p className="mb-3 text-justify fs-20">
                        Collecting payment for your staffing invoices quickly and reliably has never been more important than in today’s difficult economy. While there are numerous staffing factoring companies, only a select few provide safe, reliable, and immediate cash for staffing companies.
                    </p>
                    <p className="text-justify underline fs-18 line-30">
                        The procedure is straightforward:
                    </p>
                    <ul className="list-unstyled">
                        <li className="d-flex align-items-start mb-3">
                            <Image src={line} alt="lines" className="img-fluid me-2 icon-20" />
                            <p className="mb-0 text-justify fs-18">Submit your staffing invoice to a factoring company, which then buys your invoice at a reduced rate.</p>
                        </li>
                        <li className="d-flex align-items-start mb-3">
                            <Image src={line} alt="lines" className="img-fluid me-2 icon-20" />
                            <p className="mb-0 text-justify fs-18">Subsequently, the factoring company takes on the responsibility of collecting the payment from your client.</p>
                        </li>
                    </ul>
                    <p className="text-justify fs-18 mb-3">
                        The primary advantage for you is the immediate receipt of payment upon invoice submission, eliminating the typical wait of 30 to 60 days or longer for client payment. This approach not only enhances your cash flow but also streamlines your financial management, allowing you to focus more on growing your business.
                    </p>
                    <Container fluid className={classNames(
                        theme === 'Light Mode' ? 'secondary-bg' : 'border',
                        'p-3 m-2',
                    )}>
                        <p className='secondary-color fs-22 my-2 fw-bold'>
                            Increasing Cash Flow with Staffing Funding
                        </p>
                        <p className='mb-3 text-justify fs-18'>
                            Unfortunately, cash flow problems are common in the staffing industry. Utilizing a staffing factoring company can significantly relieve those concerns by providing immediate cash. The staffing funding company will take care of collecting the funds so you can focus solely on your business. They take on the burden of waiting and collecting payments on invoices which will no longer be your problem.
                        </p>
                        <p className='secondary-color fs-22 my-2 fw-bold'>
                            Avoiding the Pitfalls of Bank Loans / Non Recourse Factoring
                        </p>
                        <p className='mb-3 text-justify fs-18'>
                            A major benefit of factoring staffing invoices is that you gain access to cash without incurring any debt. Loans may be available to generate cash flow, as well, but that option comes with a cost. Using bank loans to pay your receivables may prevent you from getting other loans to for your business. Or, you may have credit issues that limit your ability to qualify for bank loans at all. At G Squared Funding we may allow you to benefit from nonrecourse factoring in which we focus on the credit profile of your customers, not your own credit which is a major benefit of staffing factoring and staffing funding.                            </p>
                    </Container>
                    <Row className='mt-4 mx-0'>
                        <Col sm={12} md={8}>
                            {staffingItems.map((item, index) => (
                                <div key={index} className="mb-4">
                                    <h3 className="secondary-color fs-24 mb-3 mt-5">{item.title}</h3>
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
                        <Col sm={12} md={4} className="my-3">
                            <ContactForm />
                        </Col>
                    </Row>
                </Row>
            </Container>
        </>
    );
};

export default Staffing;
