import facebook from '../assets/icons/facebook.png';
import linkedin from '../assets/icons/linkedin.png';
import youtube from '../assets/icons/youtube.png';
import instagram from '../assets/icons/instagram.png';
import award from '../assets/award2024.png';

import {  Row, Col, Image } from 'react-bootstrap';

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
                            <a href="https://www.facebook.com/gsquaredfunding/" className='my-1 mx-3'>
                                <Image src={facebook} alt="footerfacebook" width={30} />
                            </a>
                            <a href="https://www.linkedin.com/company/g-squared-financial-llc" className='my-1 mx-3'>
                                <Image src={linkedin} alt="footerlinkedin" width={30} />
                            </a>
                            <a href="https://www.youtube.com/channel/UCUoJF4U2GWf7JLX6-a7GDRA" className='my-1 mx-3'>
                                <Image src={youtube} alt="footertwitter" width={30} />
                            </a>
                            <a href="https://www.instagram.com/gsquaredfunding/" className='my-1 mx-3'>
                                <Image src={instagram} alt="footerinstagram" width={30} />
                            </a>
                        </Col>
                    </Row>
                    <Row className='mt-3 text-center'>
                        <p className='fs-15'>
                            Copyright ©{currentYear} G Squared Funding, LLC. All rights reserved.
                        </p>
                    </Row>
                </Col>

            </Row>
        </footer>
    );
};