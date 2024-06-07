import { Container, Row, Card, Button, Col } from 'react-bootstrap';
import { HelmetCP } from '../components/Helmet.jsx';
import { BsArrow90DegDown } from "react-icons/bs";
import { IoArrowBack } from "react-icons/io5";
import React, { useState } from 'react';
import { JobPost } from '../components/JobPost.jsx';

export const Careers = () => {
    const [jobPosition, setJobPosition] = useState('');
    const [cardsVisibility, setCardsVisibility] = useState(true);
    const [backIconVisibility, setBackIconVisibility] = useState(false);

    return (
        <>
            <HelmetCP pageTitle={'Join our Team | Careers at GSF'}
                pageDescription={'Join Our Dynamic Team in the Transportation and Trucking Industry! Explore Exciting Career Opportunities with a Company Committed to Your Success. Apply Today and Drive Your Future Forward!'}
                pageKeywords={'Factoring job opportunities; Transportation industry careers; Trucking employment; Logistics job openings;  Supply chain career opportunities; Join our team in transportation;  Career growth in the trucking industry;  Client relations manager; CRM job opportunity; Business Development Officer; factoring companies; factoring company in Atlanta; factoring company in Georgia; truck factors; best factoring companies; factoring solutions; financial services; factoring services for trucking companies; invoice factoring'} />
            <Container fluid className="mb-4 p-4">
                <p className="fw-bold text-justify mb-3 fs-40">Careers</p>
                <Row className="me-2 mb-4">
                    <p className="fs-26">To excel in our industry, we actively seek dynamic, driven individuals to join our team.</p>
                    <p className="text-justify my-3 fs-20">As a rapidly expanding Asset Based Lending (ABL)/Factoring firm in Atlanta, we specialize in the transportation sector, offering financial solutions to transportation and staffing companies.</p>
                    <p className="text-justify my-2 fs-20">Our services are designed to provide swift financial access for both emerging and established businesses, aiding their day-to-day operations. We're not just about setting high standards; we're about surpassing them. Our workplace is vibrant and engaging, fostering an environment where great careers are built.</p>
                    <p className="text-justify my-3 fs-20">We embrace team members from all backgrounds and levels of experience.</p>
                </Row>
                {cardsVisibility ?
                    <>
                        <Container fluid className='d-flex align-items-center text-justify'>
                            <BsArrow90DegDown className='icon-color icon-80' />
                            <p className="text-justify my-5 gradient-text fs-26">Step into our team today and help us transform the factoring experience into a seamless, stress-free journey!</p>
                        </Container>

                        <Row className="ms-2 my-5 justify-content-center">
                            <Col md={6}>
                                <Card className='glassmorphism'>
                                    <Card.Body className='p-4'>
                                        <Card.Title className='secondary-color fs-22 fw-bold my-2'>Client Relations Manager</Card.Title>
                                        <Card.Subtitle className='fs-18 mt-2 mb-4 main-color'>This is an entry-level position</Card.Subtitle>
                                        <Card.Text className='main-color text-justify'>
                                            As a Client Relations Manager, your role is pivotal in managing the financial interactions for G Squared Funding's diverse clientele. You will be at the forefront of overseeing both accounts payable and receivable, ensuring an efficient and effective cash flow cycle. Your key responsibilities include acting as a vital link and facilitator among various stakeholders such as carriers, brokers, shippers, and other parties, with a focus on smoothing out business transactions and promptly resolving any issues that arise.
                                        </Card.Text>
                                        <Row className='me-1'>
                                            <Button className='text-end remove-bg bordered-text border-none hover-color fs-18' onClick={() => { setJobPosition('CRM'); setCardsVisibility(false); setBackIconVisibility(true) }}>Read More</Button>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className='glassmorphism'>
                                    <Card.Body className='p-4'>
                                        <Card.Title className='secondary-color fw-bold fs-22 my-2'>Business Development Officer</Card.Title>
                                        <Card.Subtitle className='fs-18 mt-2 mb-4 main-color'>All levels of experience</Card.Subtitle>
                                        <Card.Text className='text-justify main-color'>
                                            We are seeking a highly motivated and results-driven Business Development Officer to join our team. The Business Development Officer will play a critical role in identifying and acquiring new clients, developing and maintaining strong relationships, and promoting our factoring services to businesses in need of working capital solutions.
                                        </Card.Text>
                                        <Row className='mt-4 pt-3 me-1'>
                                            <Button className='text-end remove-bg bordered-text border-none hover-color fs-18' onClick={() => { setJobPosition('BDO'); setCardsVisibility(false); setBackIconVisibility(true) }}>Read More</Button>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </> : null
                }
                {backIconVisibility ?
                    <>
                        <Button className='text-end remove-bg border-none main-color ms-4 fs-18' onClick={() => { setJobPosition(''); setCardsVisibility(true); setBackIconVisibility(false) }}>
                            <IoArrowBack className='icon-color icon-20' /> Go Back
                        </Button>
                        <JobPost jobPosition={jobPosition} backIconVisibility={backIconVisibility} />
                    </>
                    : null
                }
            </Container>
        </>
    );
}




// <div id="crm" class="p-1 pr-3">
// <p class="font-weight-bold light-accent mt-4" style="font-size: 26px;">Client Relations Manager</p>
// <p class="light-shades text-justify my-3" style="font-size: 18px;">This is an entry level position at a growing company with lots of room for growth. A Bachelor's degree is a plus. <strong>Team player is a must</strong>.</p>
// <p class="light-shades text-justify my-2" style="font-size: 18px;">As a Client Relations Manager, your role is pivotal in managing the financial interactions for G Squared Funding's diverse clientele. You will be at the forefront of overseeing both accounts payable and receivable, ensuring an efficient and effective cash flow cycle. Your key responsibilities include acting as a vital link and facilitator among various stakeholders such as carriers, brokers, shippers, and other parties, with a focus on smoothing out business transactions and promptly resolving any issues that arise.</p>
// <p class="light-shades text-justify my-3" style="font-size: 18px;">Your expertise and skills in managing these relationships are key to maintaining the financial health and client satisfaction that are central to our business.</p>
// <p class="font-weight-bold light-accent text-justify my-2" style="font-size: 19px;">Responsibilities:</p>
// <ul class="list-unstyled">
// <li class="d-flex align-items-center light-shades  mb-2 text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Handling the daily needs of a set group of clients.</li>
// <li class="d-flex align-items-center mb-2 light-shades  text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Reviewing accounts receivable invoices to purchase.</li>
// <li class="d-flex align-items-center mb-2 light-shades  text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Reviewing business credit reports.</li>
// <li class="d-flex align-items-center mb-2 light-shades  text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Maintaining a diversified accounts receivable portfolio of assets.</li>
// <li class="d-flex align-items-center mb-2 light-shades text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Entering and maintaining data in an accounts payable software.</li>
// <li class="d-flex align-items-center mb-2 light-shades  text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Interacting with clients on a daily basis.</li>
// <li class="d-flex align-items-center mb-2 light-shades text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Interacting with the accounts payable departments of large corporations.</li>
// </ul>
// <p class="font-weight-bold my-2 light-accent text-justify" style="font-size: 19px;">Qualifications:</p>
// <ul class="list-unstyled">
// <li class="d-flex align-items-center mb-2 light-shades text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Previous experience in customer service, sales, or other related fields.</li>
// <li class="d-flex align-items-center mb-2 light-shades text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Ability to build and maintain rapport with clients.</li>
// <li class="d-flex align-items-center mb-2 light-shades text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Ability to prioritize and multitask.</li>
// <li class="d-flex align-items-center mb-2 light-shades text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Positive and professional demeanor.</li>
// <li class="d-flex align-items-center mb-2 light-shades text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Attention to detail.</li>
// <li class="d-flex align-items-center mb-2 light-shades text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Excellent written and verbal communication skills.</li>
// </ul>
// <p class="font-weight-bold my-2 light-accent text-justify" style="font-size: 19px;">Salary/Benefit Package:</p>
// <ul class="list-unstyled">
// <li class="d-flex align-items-center mb-2 light-shades text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Starting Salary of $18/hour.</li>
// <li class="d-flex align-items-center mb-2 light-shades text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Monthly &amp; Yearly Bonuses.</li>
// <li class="d-flex align-items-center mb-2 light-shades text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> 401K plan with company match.</li>
// <li class="d-flex align-items-center mb-2 light-shades text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Medical, Dental and Vision Insurances.</li>
// <li class="d-flex align-items-center mb-2 light-shades text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Paid Time Off &amp; Holidays.</li>
// </ul>
// <p class="text-justify light-shades my-3" style="font-size: 19px;">We provide comprehensive training to ensure your success in your role.</p>
// <p class="text-justify light-shades mb-4" style="font-size: 19px;"><strong>Don't miss this opportunity – <a class="light-accent" style="font-size: 19px; text-decoration: none;" href="#apply">Apply Now!</a></strong></p>
// </div>
// <div id="bdo" class="p-1 pr-3 my-5">
// <p class="font-weight-bold light-accent" style="font-size: 26px;">Business Development Officer</p>
// <p class="light-shades text-justify my-3" style="font-size: 18px;">Are you a competitive person that thrives under pressure, wants to make a difference on a daily basis and be well compensated for your excellence? This is the company for you. We pay a base salary (not a draw) and a rich unlimited bonus structure. OUR TOP NOTCH TRAINING PROGRAM PRODUCES VERY SUCCESSFUL BDOs. All you need is the desire to succeed and we'll take care of the rest!</p>
// <p class="light-shades text-justify my-3" style="font-size: 18px;">We are seeking a highly motivated and results-driven Business Development Officer to join our team. The Business Development Officer will play a critical role in identifying and acquiring new clients, developing and maintaining strong relationships, and promoting our factoring services to businesses in need of working capital solutions. </p>
// <p class="font-weight-bold light-accent text-justify my-2" style="font-size: 19px;">Responsibilities:</p>
// <ul class="list-unstyled">
// <li class="d-flex align-items-center light-shades  mb-2 text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Generate new leads with the aim of creating more sales by explaining our factoring services to the transportation industry.</li>
// <li class="d-flex align-items-center mb-2 light-shades  text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Prospect for new clients by networking, cold calling and other means of generating interest from potential clients.</li>
// <li class="d-flex align-items-center mb-2 light-shades  text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Develop rapport with new clients, set target for sales and provide support that will continually improve and maintain the relationship.</li>
// <li class="d-flex align-items-center mb-2 light-shades  text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Create a strategic plan to develop a sales pipeline.</li>
// <li class="d-flex align-items-center mb-2 light-shades text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Research and build relationships with new clients.</li>
// <li class="d-flex align-items-center mb-2 light-shades  text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Work with Client Relations Managers to meet customer needs.</li>
// <li class="d-flex align-items-center mb-2 light-shades text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Arrange and participate in internal and external client debriefs.</li>
// <li class="d-flex align-items-center mb-2 light-shades text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Submit progress reports and ensure data is accurate.</li>
// <li class="d-flex align-items-center mb-2 light-shades text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Provide exceptional customer service.</li>
// </ul>
// <p class="font-weight-bold my-2 light-accent text-justify" style="font-size: 19px;">Qualifications:</p>
// <ul class="list-unstyled">
// <li class="d-flex align-items-center mb-2 light-shades text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> 0-5 years work experience.</li>
// <li class="d-flex align-items-center mb-2 light-shades text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Strong communication, negotiation and problem solving skills.</li>
// <li class="d-flex align-items-center mb-2 light-shades text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Strong phone skills including being comfortable with cold calling.</li>
// <li class="d-flex align-items-center mb-2 light-shades text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Competitive nature with a strong desire to exceed expectations.</li>
// <li class="d-flex align-items-center mb-2 light-shades text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Prior experience in the financial/banking industry a plus.</li>
// <li class="d-flex align-items-center mb-2 light-shades text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Multilingual is a plus.</li>
// <li class="d-flex align-items-center mb-2 light-shades text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Team player with a customer comes first mentality.</li>
// <li class="d-flex align-items-center mb-2 light-shades text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Must be local in Atlanta; company will not relocate.</li>
// </ul>
// <p class="font-weight-bold my-2 light-accent text-justify" style="font-size: 19px;">Salary/Benefit Package:</p>
// <ul class="list-unstyled">
// <li class="d-flex align-items-center mb-2 light-shades text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Salary + uncapped bonus - 1st year compensation should be between $45k-$60k. 2nd year $60k-$90K. 3rd year $100k+</li>
// <li class="d-flex align-items-center mb-2 light-shades text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> 401K plan with company match.</li>
// <li class="d-flex align-items-center mb-2 light-shades text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Medical, Dental and Vision Insurances.</li>
// <li class="d-flex align-items-center mb-2 light-shades text-justify" style="font-size: 18px;"><img class="img-fluid mr-2" src="images/icons/line.png" alt="lines" width="20" height="20"> Paid Time Off &amp; Holidays.</li>
// </ul>
// <p class="text-justify light-shades my-3" style="font-size: 19px;">We provide comprehensive training to ensure your success in your role.</p>
// <p class="text-justify light-shades mb-4" style="font-size: 19px;"><strong>Don't miss this opportunity – <a class="light-accent" style="font-size: 19px; text-decoration: none;" href="#apply">Apply Now!</a></strong></p>
// </div>
// <div id="apply" class="mt-5 p-2" style="border-top: 1px solid #034078;">
// <h2 class=" font-weight-bold my-3 light-accent">Apply Now!</h2>
// <div>{convertforms 3}</div>
// </div>
// </div> */}