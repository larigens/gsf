import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import facebook from '../assets/icons/facebook.png';
import linkedin from '../assets/icons/linkedin.png';
import youtube from '../assets/icons/youtube.png';
import instagram from '../assets/icons/instagram.png';
import award from '../assets/award2024.png';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='d-flex flex-column align-items-center mt-3 main-color' style={{ minHeight: '18vh' }}>
            <Row className="w-100">
                <Col md={2} className='d-flex justify-content-center mt-3'>
                    <Image src={award} alt="footeraward" width={120} />
                </Col>
                <Col md={8} className='mt-5'>
                    <Row className='d-flex justify-content-center'>
                        <Col md={12} className='text-center'>
                            <FooterLink href="https://www.facebook.com/gsquaredfunding/" image={facebook} alt="footerfacebook" />
                            <FooterLink href="https://www.linkedin.com/company/g-squared-financial-llc" image={linkedin} alt="footerlinkedin" />
                            <FooterLink href="https://www.youtube.com/channel/UCUoJF4U2GWf7JLX6-a7GDRA" image={youtube} alt="footertwitter" />
                            <FooterLink href="https://www.instagram.com/gsquaredfunding/" image={instagram} alt="footerinstagram" />
                        </Col>
                    </Row>
                    <Row className='mt-3 text-center'>
                        <p className='fs-15'>
                            &copy;{currentYear} G Squared Funding, LLC. All rights reserved.
                        </p>
                    </Row>
                </Col>
            </Row>
        </footer>
    );
};

const FooterLink = ({ href, image, alt }) => (
    <a href={href} className='my-1 mx-3'>
        <Image src={image} alt={alt} width={30} />
    </a>
);
