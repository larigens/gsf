import { Container, Row, Col } from 'react-bootstrap';
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { MdOutlineAttachEmail } from "react-icons/md";
import { ContactForm } from '../components/Forms/ContactForm';
import application from '../assets/transportation_application.pdf'
import { Link } from 'react-router-dom';
import { HelmetCP } from '../components/Helmet';

export const ApplyNow = () => {
    return (
        <>
            <HelmetCP pageTitle={'Apply Now | Unlock Working Capital'} pageDescription={'Ready to Accelerate Your Cash Flow? Apply Now to Factor with Us and Experience Tailored Solutions for Your Transportation or Trucking Business. Unlock Financial Flexibility and Drive Your Success Today!'} pageKeywords={'Apply now for transportation factoring; Factoring application for trucking companies; Transportation invoice factoring application; Apply for freight bill factoring; Trucking industry funding application; Apply for cash flow solutions; Transportation factoring services application; Invoice financing for transportation companies; Apply for trucking industry financing; Quick funding for transportation businesses; factoring companies; factoring company in Atlanta; factoring company in Georgia; truck factors; best factoring companies; factoring solutions; financial services; factoring services for trucking companies; invoice factoring'} />
            <Container fluid className="mb-4 p-4">
                <p className="fw-bold text-justify mb-3 fs-40">Get Approved</p>
                <p className="text-justify mt-3 mb-5 fs-24 pe-4">You can
                    <Link to='/contact-us' className='fs-24 link-color hover-link-color me-1 pe-1'> contact us
                    </Link>
                    or take the initiative and get ahead! Simply fill out and submit your application to us, and we will respond to you as soon as possible!</p>
                <Row>
                    <Col md={4} className="mb-2 me-3">
                        <ContactForm />
                    </Col>
                    <Col md={7}>
                        <Container className="ms-3 ps-4">
                            <h1 className="text-justify fw-bold">OR</h1>
                            <p className="mt-4 fs-24 fw-semibold">1. Download and Fill out the application</p>

                            <a href={application} download='gsf_application.pdf' className="d-flex align-items-center mt-3 link-color hover-link-color">
                                <HiOutlineDocumentDownload className='ms-3 icon-80 img-fluid' />
                                <p className="fs-22 mx-3">Download</p>
                            </a>

                            <p className="mt-4 fs-24 fw-semibold">2. Submit your application</p>

                            <Link to="mailto:contact@gsquaredfunding.com?subject=New%20Factoring%20Application" className="d-flex align-items-center mt-3 link-color hover-link-color">
                                <MdOutlineAttachEmail className='ms-4 icon-80 img-fluid' />
                                <p className="fs-22 mx-3">Submit</p>
                            </Link>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
}