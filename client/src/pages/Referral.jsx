import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { GetReferralbyLinkID } from '../utils/helper';
import { GetApplications } from '../utils/applications';
import { GetLogos } from '../utils/logos';
import { HelmetCP } from '../components/Helmet';
import { ContactForm } from '../components/Forms/ContactForm';
import { Application } from '../components/Application';

const Referral = () => {
    const { id } = useParams();
    const referralbyLinkID = GetReferralbyLinkID(id);

    const application = referralbyLinkID?.application;
    const logo = referralbyLinkID?.logo;

    const pdf = GetApplications(application);
    const png = GetLogos(logo);

    return (
        <>
            <HelmetCP
                pageTitle={`Factoring Services | ${referralbyLinkID.company}`}
                pageDescription={'Ready to Accelerate Your Cash Flow? Apply Now to Factor with Us and Experience Tailored Solutions for Your Transportation or Trucking Business. Unlock Financial Flexibility and Drive Your Success Today!'}
                pageKeywords={'Apply now for transportation factoring; Factoring application for trucking companies; Transportation invoice factoring application; Apply for freight bill factoring; Trucking industry funding application; Apply for cash flow solutions; Transportation factoring services application; Invoice financing for transportation companies; Apply for trucking industry financing; Quick funding for transportation businesses; factoring companies; factoring company in Atlanta; factoring company in Georgia; truck factors; best factoring companies; factoring solutions; financial services; factoring services for trucking companies; invoice factoring'}
            />

            <Container fluid className="mb-4 p-4">
                <Row className="d-flex align-items-center">
                    <Col md={6}>
                        <p className="fw-bold text-justify mb-3 fs-40">Factoring Application</p>
                        <p className="text-justify my-3 tracking-in-expand fst-italic fs-26">
                            Referred by <span className='secondary-color'>{referralbyLinkID.company}</span>
                        </p>
                    </Col>
                    <Col md={5} className="d-flex referral-logo">
                        {png && png.endsWith(".png") && (
                            <img className="img-fluid h-auto" src={png} alt="logo" width="150" />
                        )}
                    </Col>
                </Row>
                <p className="text-justify mt-3 mb-2 fs-24 pe-4">
                    You can <Link to='/contact-us' className='fs-24 link-color hover-link-color me-1 pe-1'>contact us</Link> if you have any inquiries regarding factoring or need assistance with the signup process. Please kindly mention that you were referred to us by our esteemed partner, {referralbyLinkID.company}!
                </p>
                <p className="text-justify mb-5 mt-1 fs-24">Or simply fill out and submit your application to us, and we will respond to you as soon as possible!</p>
                <Row>
                    <Col md={4} className="mb-4">
                        <ContactForm referralLink={true} referralName={referralbyLinkID.company} />
                    </Col>
                    <Application pdf={pdf} />
                </Row>
            </Container>
        </>
    );
};

export default Referral;
