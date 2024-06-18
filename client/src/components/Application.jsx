import React from 'react';
import { Container, Col } from 'react-bootstrap';
import { AiOutlineCloudDownload } from "react-icons/ai";
import { BsSendCheck } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Application = ({ pdf }) => {
    return (
        <>
            <Col md={4}>
                <Container fluid className='mb-4 d-flex flex-column'>
                    <h1 className="text-justify fw-bold">OR</h1>
                    <p className="mt-4 fs-24 fw-semibold">1. Download and Fill out the application</p>
                    <a href={pdf} download='gsf_application.pdf' className="d-flex align-items-center text-center justify-content-center text-center mt-3 button button--naira button--round-s button--border-thin">
                        <AiOutlineCloudDownload className='icon-80 img-fluid button__icon icon' />
                        <span className="fs-22 mx-3">Download</span>
                    </a>
                    <p className="mt-4 fs-24 fw-semibold">2. Submit your application</p>
                    <Link to="mailto:contact@gsquaredfunding.com?subject=New%20Factoring%20Application" className="d-flex align-items-center text-center justify-content-center text-center mt-3 button button--naira button--round-s button--border-thin">
                        <BsSendCheck className='icon-80 img-fluid button__icon icon' />
                        <span className="fs-22 mx-3">Submit</span>
                    </Link>
                </Container>
            </Col>
            <Col md={4}>
                <Container className='mb-4'>
                    <h1 className="text-justify fw-bold">OR</h1>
                    <p className="mt-4 fs-24 fw-semibold">1. Fill out the application online</p>

                    <Link to='/application' className="d-flex align-items-center text-center justify-content-center text-center mt-3 button button--naira button--round-s button--border-thin">
                        <FaPencilAlt className='icon-80 img-fluid button__icon icon' />
                        <span className="fs-22 mx-3">Fill out now</span>
                    </Link>
                </Container>
            </Col>
        </>

    );
};
