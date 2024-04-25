import { Container, Row, Col } from 'react-bootstrap';
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FormCP } from '../components/Form';
import application from '../assets/transportation_application.pdf'
import { Link } from 'react-router-dom';

export const ApplyNow = () => {
    return (
        <Container fluid className="mb-4 p-5">
            <p className="fw-bold text-justify my-3 fs-36">Get Approved</p>
            <p className="text-justify mt-3 mb-4 fs-24 pe-4">You can
                <Link to='/contact-us' className='fs-24 link-color hover-link-color me-1 pe-1'> contact us
                </Link>
                or take the initiative and get ahead! Simply fill out and submit your application to us, and we will respond to you as soon as possible!</p>
            <Row>
                <Col md={4} className="mb-2 me-3">
                    <FormCP />
                </Col>
                <Col md={7}>
                    <div className="ml-3 pl-4">
                        <h1 className="text-justify fw-bold">OR</h1>
                        <p className="mt-4 fs-24 fw-semibold">1. Download and Fill out the application</p>

                        <Link to={application} download={application} className="d-flex align-items-center mt-3 link-color hover-link-color">
                            <HiOutlineDocumentDownload className='ms-3 icon-80 img-fluid' />
                            <p className="fs-22 mx-3">Download</p>
                        </Link>

                        <p className="mt-4 fs-24 fw-semibold">2. Submit your application</p>

                        <Link to="mailto:dramirez@gsquaredfunding.com?subject=New%20Factoring%20Application" className="d-flex align-items-center mt-3 link-color hover-link-color">
                            <MdOutlineAttachEmail className='ms-4 icon-80 img-fluid' />
                            <p className="fs-22 mx-3">Submit</p>
                        </Link>

                    </div>
                </Col>
            </Row>
        </Container>
    );
}