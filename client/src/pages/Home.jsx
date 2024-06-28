import { Container, Row, Col, Image, Button } from 'react-bootstrap';


import { motion } from "framer-motion";
import { HelmetCP } from '../components/Helmet';
import { useTheme } from '../components/ThemeContext';
import { Layout } from '../components/Layout';
import { ContactForm } from '../components/Forms/ContactForm';
import { Link } from 'react-router-dom';

import wallet from '../assets/icons/wallet.png';
import rightArrow from '../assets/icons/right-arrow.png';
import fastFunding from '../assets/icons/fast_funding.png';
import referralFee from '../assets/icons/referral_fee.png';
import lineCredit from '../assets/icons/line_credit.png';
import overnight from '../assets/icons/overnight.png';
import line from '../assets/icons/line.png';
import forward from '../assets/icons/forward.png';
import logo from '../assets/logo.png';
import broker from '../assets/icons/broker.png';
import carrier from '../assets/icons/carrier.png';
import staff from '../assets/icons/staff.png';

const Home = () => {
  const { theme } = useTheme();

  const classNames = (...classes) => classes.filter(Boolean).join(' ');

  return (
    <>
      <HelmetCP
        pageTitle="G Squared Funding, LLC | Factoring Services for Trucking Companies"
        pageDescription="Accelerate Your Cash Flow with Our Expert Factoring Services for Transportation and Trucking Companies. Unlock Working Capital and Fuel Your Business Growth Today!"
        pageKeywords="Trucking company factoring; Transportation invoice factoring; Transportation factoring; Freight factoring services; Freight bill factoring; Trucking industry funding; Cash flow solutions for trucking businesses; Transportation factoring experts; Quick funding for trucking companies; Invoice financing for logistics companies; Fueling growth with factoring for truckers; factoring companies; factoring company in Atlanta; factoring company in Georgia; truck factors; best factoring companies; factoring solutions; financial services; factoring services for trucking companies; invoice factoring; factoring for transportation"
      />
      <Layout>
        <HeroSection />
        <IndustriesSection theme={theme} classNames={classNames} />
        <BenefitsSection theme={theme} classNames={classNames} />
        <TransitionSection theme={theme} classNames={classNames} />
        <MissionSection theme={theme} classNames={classNames} />
      </Layout>
    </>
  );
};

const HeroSection = () => {
  return (
    <Container fluid className="d-flex align-items-center my-5 py-3">
      <Row>
        <Col xs={12} md={6} lg={7} className="mx-auto mb-2">
          <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ ease: "easeOut", duration: 1 }}>
            <Row className="mb-1">
              <h1 className="bordered-text">Your Trusted Factoring Partner in Transportation</h1>
            </Row>
            <Row className="my-4 pe-2">
              <p className="text-justify fs-19" style={{ lineHeight: '1.7' }}>At G Squared Funding, we understand the challenges that transportation companies face when it comes to managing cash flow and maintaining steady operations. That's why we're here to provide tailored factoring solutions designed specifically for you.</p>
            </Row>
            <Row className="ms-1 mb-4">
              <Button className="my-2 contact-btn px-2 py-1 radius-20 border-none" role="button" href="/contact-us">
                <span className="contact-btn-span px-3 fs-24">
                  Contact us today
                  <Image className="img-fluid ms-2 px-1 arrow-icon icon-color btn-icon" src={rightArrow} alt="right arrow icon" width="30" loading="lazy" />
                </span>
              </Button>
            </Row>
          </motion.div>
        </Col>
        <Col xs={12} md={5} lg={4}>
          <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ ease: 'easeIn', duration: 1.5 }}>
            <QuickStatsSection />
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

const QuickStatsSection = () => {
  return (
    <>
      <Container className="mt-2 p-2 glassmorphism radius-20 w-80">
        <Row className="d-flex justify-content-between align-items-center mx-1 border-bottom">
          <Col xs={7} md={5} className="d-flex align-items-center">
            <Image className="img-fluid icon-color" src={wallet} alt="wallet" width="40px" height="40px" />
            <p className="ms-2 mt-4 fs-19">WALLET</p>
          </Col>
          <Col xs={5} md={3}>
            <p className="mt-4 fs-15 text-end">2 sec.</p>
          </Col>
        </Row>
        <Row className="mt-3 px-1">
          <p className="ms-2 font-weight-bold fs-20">You just got paid</p>
        </Row>
        <Row className="mb-1 px-1">
          <p className="ms-2 fs-20">$10,856.52</p>
        </Row>
      </Container>
      <Container className="my-2 p-1 glassmorphism radius-20 w-80 text-center">
        <Row className="p-2 mx-1 border-bottom">
          <p className="m-1 mb-2 fs-20">Open</p>
        </Row>
        <Row className="p-2 mx-1">
          <p className="m-1 mt-2 fs-20">Dismiss</p>
        </Row>
      </Container>
    </>
  );
};

const IndustriesSection = ({ theme, classNames }) => {
  const industries = [
    { name: 'Carriers', href: '/services/transportation', src: carrier, text: 'We understand the challenges carriers face in managing cash flow while keeping their fleet on the road. Our services are designed to provide you with immediate access to the funds you need, without the long waits and uncertainty of traditional invoicing.' },
    { name: 'Brokers', href: '/services/transportation', src: broker, text: 'We know that efficient cash flow management is vital for brokers to maintain strong relationships with carriers and shippers. Our services are tailored to provide brokers with fast, reliable funding, helping you keep your operations running smoothly and your partners happy.' },
    { name: 'Staffing Agency', href: '/services/staffing', src: staff, text: 'We understand the unique financial challenges that staffing agencies face in today’s difficult economy. Our factoring services are designed to provide you with immediate funding, ensuring you can pay your staff on time and focus on growing your business.' },
  ];

  return (
    <>
      <svg id="curveUpColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" className='mt-5' preserveAspectRatio="none">
        <path d="M0 100 C 20 0 50 0 100 100 Z" className={classNames(theme === 'Light Mode' ? 'secondary-fill' : 'dark-accent-fill', 'p-1')} />
      </svg>
      <Container fluid className={classNames(theme === 'Light Mode' ? 'secondary-bg' : 'bg-dark-accent', 'my-0 ms-auto pt-5')} style={{ minHeight: '77vh' }}>
        <h2 className="fw-bold mt-1 mb-4 secondary-color text-center fs-40">Grow your business with us</h2>
        <Row className="my-5 d-flex justify-content-center">
          {industries.map((item, index) => (
            <Col xs={12} md={3} className="my-4 mx-3 border-right" key={index}>
              <Container className="d-flex align-items-center flex-column mt-2">
                <Image className="img-fluid icon-color icon-80" src={item.src} alt={item.text.toLowerCase().replace(/\s/g, '-')} loading="lazy" />
                <p className="ms-1 my-1 fs-28 fw-bold secondary-color">{item.name}</p>
                <p className="ms-1 mb-2 fs-20 text-justify">{item.text}</p>
              </Container>
              <Row className="ms-auto text-end my-2">
                <Link className="link-color hover-link-color fs-22" to={item.href}>Discover More Now!</Link>
              </Row>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};


const BenefitsSection = ({ theme, classNames }) => {
  const benefits = [
    { src: fastFunding, text: 'Fast Same Day Funding' },
    { src: referralFee, text: 'Referral Fees' },
    { src: lineCredit, text: 'Business Lines of Credit Available' },
    { src: overnight, text: 'Fed Ex Overnight Discount Program' }
  ];

  return (
    <>
      <svg id="curveDownColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 0 C 50 100 80 100 100 0 Z" className={classNames(theme === 'Light Mode' ? 'secondary-fill' : 'dark-accent-fill', 'p-1')} />
      </svg>
      <Container fluid className='my-0 ms-auto pt-5' style={{ minHeight: '77vh' }}>
        <h2 className="fw-bold my-3 secondary-color">Unlock Your Transportation Company's Financial Potential Today!</h2>
        <h3 className="mb-4 fw-light">Explore Our Expert Factoring Services and Drive Your Business Forward.</h3>
        <Row className="my-5">
          {benefits.map((item, index) => (
            <Col xs={12} md={6} className="my-4" key={index}>
              <Container className="d-flex align-items-center">
                <Image className="img-fluid icon-color icon-80" src={item.src} alt={item.text.toLowerCase().replace(/\s/g, '-')} loading="lazy" />
                <p className="ms-1 mb-0 fs-22">{item.text}</p>
              </Container>
            </Col>
          ))}
        </Row>
        <Row className="ms-auto">
          <p className="mb-3 fs-24">Join the ranks of satisfied clients who have experienced the benefits of partnering with us.</p>
          <a className="hover-gradient secondary-color fs-22" href="/services">Discover More Now!</a>
        </Row>
      </Container>
    </>
  );
};

const TransitionSection = ({ theme, classNames }) => {
  return (
    <>
      <Container fluid className='py-5 mx-auto glassmorphism my-2'>
        <h2 className="fw-bold py-2 mb-2 secondary-color text-center fs-34">How can we tailor our factoring services to meet your unique needs?</h2>
        <Row className="d-flex align-items-center radius-20 mt-3 text-center justify-content-center">
          <p className="mt-2 fs-22">With years of experience and expertise in the field, we have been helping businesses like yours thrive by offering fast and flexible financing options.</p>
          <Image className="img-fluid icon-color icon-80 pt-1 mt-2" src={logo} alt="logo" loading="lazy" />
        </Row>
      </Container>
    </>
  );
};

const MissionSection = ({ theme, classNames }) => {
  return (
    <>
      <Container fluid className={classNames(theme === 'Light Mode' ? 'secondary-bg' : 'bg-dark-accent', 'ms-auto pb-3 mt-2')}>
        <Row className='p-4 my-2'></Row>
        <Row className="my-3 mx-auto">
          <Col xs={12} sm={6} className="mt-2 me-auto">
            <Container className="p-2 mt-2 text-center">
              <p className="font-weight-bold text-center fs-28">Our mission is simple:</p>
            </Container>
            <Container className="p-2 text-end">
              <p className="fs-22 text-end fst-italic">To empower transportation companies to focus on what they do best - delivering goods and services - while we take care of the financial aspects.</p>
            </Container>
            <Container className="p-2 mb-4">
              <p className="text-justify my-4 mb-2 fs-22">Our commitment to:</p>
              {['Transparency', 'Competitive Rates', 'Exceptional Customer Service'].map((item, index) => (
                <Container className="d-flex align-items-center my-2" key={index}>
                  <Image className="w-20 h-20" src={line} alt="line" loading="lazy" />
                  <p className="font-weight-bold mb-0 mx-2 fs-20">{item}</p>
                </Container>
              ))}
              <p className="text-justify my-4 mx-3 fs-18">has earned us the trust of countless clients in the transportation sector. Whether you're a trucking company, freight broker, or staffing agency, we have the financial solutions to support your growth and success.</p>
            </Container>
            <Container className="d-flex align-items-center my-4 p-2">
              <p className="me-2 fs-28">Let's drive your business forward together!</p>
              <motion.div className="forward" animate={{ x: [0, 100], transition: { duration: 2, ease: "linear", loop: Infinity } }}>
                <Image className="img-fluid icon-color mb-3" src={forward} alt="truck icon" width="60" height="60" loading="lazy" />
              </motion.div>
            </Container>
          </Col>
          <Col xs={12} sm={6} md={4} className="my-auto mx-auto">
            <ContactForm />
          </Col>
        </Row>
      </Container>
      <svg id="curveDownColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 0 C 50 100 80 100 100 0 Z" className={classNames(theme === 'Light Mode' ? 'secondary-fill' : 'dark-accent-fill', 'p-1')} />
      </svg>
    </>
  );
};

export default Home;