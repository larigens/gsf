import React, { useState } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import line from '../assets/icons/line.png';
import { CareerForm } from '../components/Forms/CareerForm';
import { useTheme } from '../components/ThemeContext.jsx';

const jobData = {
    CRM: {
        title: 'Client Relations Manager',
        initials: 'CRM',
        description: [
            `This is an entry level position at a growing company with lots of room for growth. A Bachelor's degree is a plus. Team player is a must.`,
            `As a Client Relations Manager, your role is pivotal in managing the financial interactions for G Squared Funding's diverse clientele. You will be at the forefront of overseeing both accounts payable and receivable, ensuring an efficient and effective cash flow cycle. Your key responsibilities include acting as a vital link and facilitator among various stakeholders such as carriers, brokers, shippers, and other parties, with a focus on smoothing out business transactions and promptly resolving any issues that arise.`,
            `Your expertise and skills in managing these relationships are key to maintaining the financial health and client satisfaction that are central to our business.`
        ],
        responsibilities: [
            "Handling the daily needs of a set group of clients.",
            "Reviewing accounts receivable invoices to purchase.",
            "Reviewing business credit reports.",
            "Maintaining a diversified accounts receivable portfolio of assets.",
            "Entering and maintaining data in an accounts payable software.",
            "Interacting with clients on a daily basis.",
            "Interacting with the accounts payable departments of large corporations."
        ],
        qualifications: [
            "Previous experience in customer service, sales, or other related fields.",
            "Ability to build and maintain rapport with clients.",
            "Ability to prioritize and multitask.",
            "Positive and professional demeanor.",
            "Attention to detail.",
            "Excellent written and verbal communication skills."
        ],
        benefits: [
            "Starting Salary of $18/hour.",
            "Monthly & Yearly Bonuses.",
            "401K plan with company match.",
            "Medical, Dental and Vision Insurances.",
            "Paid Time Off & Holidays."
        ]
    },
    BDO: {
        title: 'Business Development Officer',
        initials: 'BDO',
        description: [
            `Are you a competitive person that thrives under pressure, wants to make a difference on a daily basis and be well compensated for your excellence? This is the company for you. We pay a base salary (not a draw) and a rich unlimited bonus structure. OUR TOP NOTCH TRAINING PROGRAM PRODUCES VERY SUCCESSFUL BDOs. All you need is the desire to succeed and we'll take care of the rest!`,
            `We are seeking a highly motivated and results-driven Business Development Officer to join our team. The Business Development Officer will play a critical role in identifying and acquiring new clients, developing and maintaining strong relationships, and promoting our factoring services to businesses in need of working capital solutions. `,
        ],
        responsibilities: [
            "Generate new leads with the aim of creating more sales by explaining our factoring services to the transportation industry.",
            "Prospect for new clients by networking, cold calling and other means of generating interest from potential clients.",
            "Develop rapport with new clients, set target for sales and provide support that will continually improve and maintain the relationship.",
            "Create a strategic plan to develop a sales pipeline.",
            "Research and build relationships with new clients.",
            "Work with Client Relations Managers to meet customer needs.",
            "Arrange and participate in internal and external client debriefs.",
            "Submit progress reports and ensure data is accurate.",
            "Provide exceptional customer service."
        ],
        qualifications: [
            "0-5 years work experience.",
            "Strong communication, negotiation and problem solving skills.",
            "Strong phone skills including being comfortable with cold calling.",
            "Competitive nature with a strong desire to exceed expectations.",
            "Prior experience in the financial/banking industry a plus.",
            "Multilingual is a plus.",
            "Team player with a customer comes first mentality.",
            "Must be local in Atlanta; company will not relocate."
        ],
        benefits: [
            "Salary + uncapped bonus - 1st year compensation should be between $45k-$60k. 2nd year $60k-$90K. 3rd year $100k+.",
            "401K plan with company match.",
            "Medical, Dental and Vision Insurances.",
            "Paid Time Off & Holidays."
        ]
    }
};

const JobDetails = ({ title, description, responsibilities, qualifications, benefits }) => (
    <>
        <p className="fw-bold secondary-color mt-4 fs-28">{title}</p>
        {description.map((item, index) => (
            <p key={index} className="text-justify my-3 fs-18">{item}</p>
        ))}
        <Section title="Responsibilities" items={responsibilities} />
        <Section title="Qualifications" items={qualifications} />
        <Section title="Salary/Benefit Package" items={benefits} />
        <p className="text-justify my-3 fs-19">We provide comprehensive training to ensure your success in your role.</p>
    </>
);

const Section = ({ title, items }) => (
    <>
        <p className="fw-bold secondary-color text-justify my-2 fs-22">{title}:</p>
        <ul className="list-unstyled">
            {items.map((item, index) => (
                <li key={index} className="d-flex align-items-center mb-2 text-justify fs-18">
                    <Image className="img-fluid me-2" src={line} alt="line" width="20" height="20" />
                    {item}
                </li>
            ))}
        </ul>
    </>
);

export const JobPost = ({ jobPosition }) => {
    const [formVisibility, setFormVisibility] = useState(false);
    const { theme } = useTheme();
    const jobDetails = jobData[jobPosition] || {};
    return (
        <>
            {jobPosition && (
                <Container className={`${theme === 'Light Mode' ? 'secondary-bg' : 'border-light'} p-2 mb-4`}>
                    <Row className='p-3'>
                        <Col>
                            <JobDetails {...jobDetails} />
                            <p className="text-justify mb-4">
                                <span className='fs-20 fw-bold'>Don't miss this opportunity –</span>
                                <Button className='text-end remove-bg bordered-text border-none hover-color fs-20 mb-2' onClick={() => setFormVisibility(true)}>Apply Now</Button>
                            </p>
                        </Col>
                    </Row>
                </Container>
            )}
            {formVisibility && <CareerForm jobTitle={jobDetails.title} jobPosition={jobPosition} />}
        </>
    );
};
