import { Container, Row, Card, Button, Col } from 'react-bootstrap';
import { HelmetCP } from '../components/Helmet.jsx';
import { BsArrow90DegDown } from "react-icons/bs";
import { IoArrowBack } from "react-icons/io5";
import React, { useState } from 'react';
import { JobPost } from '../components/JobPost.jsx';
import { useTheme } from '../components/ThemeContext';

const jobInfo = [
    {
        title: 'Client Relations Manager',
        subtitle: 'This is an entry-level position',
        description: `As a Client Relations Manager, your role is pivotal in managing the financial interactions for G Squared Funding's diverse clientele. You will be at the forefront of overseeing both accounts payable and receivable, ensuring an efficient and effective cash flow cycle. Your key responsibilities include acting as a vital link and facilitator among various stakeholders such as carriers, brokers, shippers, and other parties, with a focus on smoothing out business transactions and promptly resolving any issues that arise.`,
        position: 'CRM'
    },
    {
        title: 'Business Development Officer',
        subtitle: 'All levels of experience',
        description: `We are seeking a highly motivated and results-driven Business Development Officer to join our team. The Business Development Officer will play a critical role in identifying and acquiring new clients, developing and maintaining strong relationships, and promoting our factoring services to businesses in need of working capital solutions.`,
        position: 'BDO'
    }
];

const JobCard = ({ job, onClick }) => (
    <Col md={6} className='my-2'>
        <Card className='glassmorphism h-100'>
            <Card.Body className='p-3 d-flex flex-column justify-content-between'>
                <div>
                    <Card.Title className='secondary-color fs-22 fw-bold my-2'>{job.title}</Card.Title>
                    <Card.Subtitle className='fs-18 mt-2 mb-4 main-color'>{job.subtitle}</Card.Subtitle>
                    <Card.Text className='main-color text-justify'>{job.description}</Card.Text>
                </div>
                <Row className='me-1 mt-auto'>
                    <Button className='text-end remove-bg bordered-text border-none hover-color fs-18' onClick={() => onClick(job.position)}>Read More</Button>
                </Row>
            </Card.Body>
        </Card>
    </Col>
);

const Careers = () => {
    const { theme } = useTheme();

    const classNames = (...classes) => classes.filter(Boolean).join(' ');

    const [jobPosition, setJobPosition] = useState('');
    const [cardsVisibility, setCardsVisibility] = useState(true);

    const handleJobClick = (position) => {
        setJobPosition(position);
        setCardsVisibility(false);
    };

    return (
        <>
            <HelmetCP
                pageTitle={'Join our Team | Careers at GSF'}
                pageDescription={'Join Our Dynamic Team in the Transportation and Trucking Industry! Explore Exciting Career Opportunities with a Company Committed to Your Success. Apply Today and Drive Your Future Forward!'}
                pageKeywords={'Factoring job opportunities; Transportation industry careers; Trucking employment; Logistics job openings; Supply chain career opportunities; Join our team in transportation; Career growth in the trucking industry; Client relations manager; CRM job opportunity; Business Development Officer; factoring companies; factoring company in Atlanta; factoring company in Georgia; truck factors; best factoring companies; factoring solutions; financial services; factoring services for trucking companies; invoice factoring'}
                canonicalURL={'careers'}
            />
            <Container fluid className="mb-4 p-4">
                <p className="fw-bold text-justify mb-3 fs-40">Careers</p>
                <Row className="me-2 mb-4">
                    <p className="fs-26">To excel in our industry, we actively seek dynamic, driven individuals to join our team.</p>
                    <p className="text-justify my-3 fs-20">As a rapidly expanding Asset Based Lending (ABL)/Factoring firm in Atlanta, we specialize in the transportation sector, offering financial solutions to transportation and staffing companies.</p>
                    <p className="text-justify my-2 fs-20">Our services are designed to provide swift financial access for both emerging and established businesses, aiding their day-to-day operations. We're not just about setting high standards; we're about surpassing them. Our workplace is vibrant and engaging, fostering an environment where great careers are built.</p>
                    <p className="text-justify my-3 fs-20">We embrace team members from all backgrounds and levels of experience.</p>
                </Row>
            </Container>

            {cardsVisibility ? (
                <>
                    <svg id="curveUpColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" className={classNames(theme === 'Light Mode' ? 'secondary-fill' : 'dark-accent-fill', '')} />
                    </svg>
                    <Container fluid className={classNames(theme === 'Light Mode' ? 'secondary-bg' : 'bg-dark-accent', 'p-4')}>
                        <Container fluid className='d-flex align-items-center text-justify'>
                            <BsArrow90DegDown className='icon-color icon-80 icon-desktop-only' />
                            <p className="text-justify my-5 secondary-color fs-26">Step into our team today and help us transform the factoring experience into a seamless, stress-free journey!</p>
                        </Container>
                        <Row className='my-5 justify-content-center pb-2 mx-2'>
                            {jobInfo.map((job) => (
                                <JobCard key={job.position} job={job} onClick={handleJobClick} />
                            ))}
                        </Row>
                    </Container>
                    <svg id="curveDownColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 0 C 50 100 80 100 100 0 Z" className={classNames(theme === 'Light Mode' ? 'secondary-fill' : 'dark-accent-fill', '')} />
                    </svg>
                </>
            ) : (
                <>
                    <Button className='text-end remove-bg border-none main-color m-1 fs-18' onClick={() => setCardsVisibility(true)}>
                        <IoArrowBack className='icon-color icon-20' /> Go Back
                    </Button>
                    <JobPost jobPosition={jobPosition} />
                </>
            )}
        </>
    );
};

export default Careers;
