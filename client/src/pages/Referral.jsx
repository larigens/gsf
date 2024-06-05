import { Container, Row, Col } from 'react-bootstrap';
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { MdOutlineAttachEmail } from "react-icons/md";
import { ContactForm } from '../components/Forms/ContactForm';
import { Link } from 'react-router-dom';
import * as React from 'react'
import { useParams } from 'react-router-dom'
import { GetReferralbyLinkID } from '../utils/helper';
import { GetApplications } from '../utils/applications';
import { GetLogos } from '../utils/logos';
import { HelmetCP } from '../components/Helmet';

export const Referral = () => {
    const { id } = useParams();
    // Pass id directly to GetReferral
    const referralbyLinkID = GetReferralbyLinkID(id);

    // Wait until application and logo are not undefinied
    const application = referralbyLinkID?.application;
    const logo = referralbyLinkID?.logo;

    // Get the correct application and logo
    const pdf = GetApplications(application)
    const png = GetLogos(logo)

    return (
        <>
            <HelmetCP pageTitle={`Factoring Services | ${referralbyLinkID.company}`}
                pageDescription={'Ready to Accelerate Your Cash Flow? Apply Now to Factor with Us and Experience Tailored Solutions for Your Transportation or Trucking Business. Unlock Financial Flexibility and Drive Your Success Today!'}
                pageKeywords={'Apply now for transportation factoring; Factoring application for trucking companies; Transportation invoice factoring application; Apply for freight bill factoring; Trucking industry funding application; Apply for cash flow solutions; Transportation factoring services application; Invoice financing for transportation companies; Apply for trucking industry financing; Quick funding for transportation businesses; factoring companies; factoring company in Atlanta; factoring company in Georgia; truck factors; best factoring companies; factoring solutions; financial services; factoring services for trucking companies; invoice factoring'} />

            <Container fluid className="mb-4 p-4">
                <Row className="d-flex align-items-center">
                    <Col md={6}>
                        <p className="fw-bold text-justify mb-3 fs-40">Factoring Application</p>
                        <p className="text-justify my-3 tracking-in-expand fst-italic fs-26">Referred by <span className='secondary-color'>{referralbyLinkID.company}</span></p>
                    </Col>
                    <Col md={5} className="d-flex justify-content-end">
                        {/* if they don't have a logo, the placeholder is jpg, so it will not display */}
                        {png && png.endsWith(".png") ? (
                            <img className="img-fluid h-auto" src={png} alt="logo" width="150" />
                        ) : null}
                    </Col>
                </Row>
                <p className="text-justify mt-3 mb-2 fs-24 pe-4">You can
                    <Link to='/contact-us' className='fs-24 link-color hover-link-color me-1 pe-1'> contact us</Link>
                    if you have any inquiries regarding factoring or need assistance with the signup process. Please kindly mention that you were referred to us by our esteemed partner, {referralbyLinkID.company}!</p>
                <p className="text-justify mb-5 mt-1 fs-24">Or simply fill out and submit your application to us, and we will respond to you as soon as possible!</p>
                <Row>
                    <Col md={4} className="mb-2 me-3">
                        <ContactForm referralLink={true} referralName={referralbyLinkID.company} />
                    </Col>
                    <Col md={7}>
                        <div className="ml-3 pl-4">
                            <h1 className="text-justify fw-bold">OR</h1>
                            <p className="mt-4 fs-24 fw-semibold">1. Download and Fill out the application</p>

                            <a href={pdf} download='gsf_application.pdf' className="d-flex align-items-center mt-3 link-color hover-link-color">
                                <HiOutlineDocumentDownload className='ms-3 icon-80 img-fluid' />
                                <p className="fs-22 mx-3">Download</p>
                            </a>

                            <p className="mt-4 fs-24 fw-semibold">2. Submit your application</p>

                            <Link to="mailto:contact@gsquaredfunding.com?subject=New%20Factoring%20Application" className="d-flex align-items-center mt-3 link-color hover-link-color">
                                <MdOutlineAttachEmail className='ms-4 icon-80 img-fluid' />
                                <p className="fs-22 mx-3">Submit</p>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}