import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HelmetCP } from '../components/Helmet';
import { ContactForm } from '../components/Forms/ContactForm';
import { Application } from '../components/Application';
import pdf from '../assets/transportation_application.pdf';

const ApplyNow = () => {
    return (
        <>
            <HelmetCP
                pageTitle={'Apply Now | Unlock Working Capital'}
                pageDescription={'Ready to Accelerate Your Cash Flow? Apply Now to Factor with Us and Experience Tailored Solutions for Your Transportation or Trucking Business. Unlock Financial Flexibility and Drive Your Success Today!'}
                pageKeywords={'Apply now for transportation factoring; Factoring application for trucking companies; Transportation invoice factoring application; Apply for freight bill factoring; Trucking industry funding application; Apply for cash flow solutions; Transportation factoring services application; Invoice financing for transportation companies; Apply for trucking industry financing; Quick funding for transportation businesses; factoring companies; factoring company in Atlanta; factoring company in Georgia; truck factors; best factoring companies; factoring solutions; financial services; factoring services for trucking companies; invoice factoring'}
                canonicalURL={'apply-now'}
           />
            <Container fluid className="mb-4 p-4">
                <p className="fw-bold text-justify mb-3 fs-40">Get Approved</p>
                <p className="text-justify mt-3 mb-5 fs-24 pe-4">
                    You can <Link to='/contact-us' className='fs-24 link-color hover-link-color me-1 pe-1'>contact us</Link> or take the initiative and get ahead! Simply fill out and submit your application to us, and we will respond to you as soon as possible!
                </p>
                <Row>
                    <Col md={4} className="mb-4">
                        <ContactForm />
                    </Col>
                    <Application pdf={pdf} />
                </Row>
            </Container>
        </>
    );
};

export default ApplyNow;
