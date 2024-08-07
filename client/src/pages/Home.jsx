import { Container, Row, Col, Image, Button, Carousel, Card } from 'react-bootstrap';


import { motion } from "framer-motion";
import { HelmetCP } from '../components/Helmet';
import { useTheme } from '../components/ThemeContext';
import { Layout } from '../components/Layout';
import { ContactForm } from '../components/Forms/ContactForm';
import { Link } from 'react-router-dom';
import { IoStarSharp } from "react-icons/io5";
import { BiHappyAlt } from "react-icons/bi";
import { BiHappyHeartEyes } from "react-icons/bi";
import { BiHappyBeaming } from "react-icons/bi";
import { BiHappy } from "react-icons/bi";

import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { RiUserSearchFill } from "react-icons/ri";

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
  const variant = (...variants) => variants.filter(Boolean).join(' ');

  return (
    <>
      <HelmetCP
        pageTitle="G Squared Funding, LLC | Factoring Services for Trucking Companies"
        pageDescription="Accelerate Your Cash Flow with Our Expert Factoring Services for Transportation and Trucking Companies. Unlock Working Capital and Fuel Your Business Growth Today!"
        pageKeywords="Trucking company factoring; Transportation invoice factoring; Transportation factoring; Freight factoring services; Freight bill factoring; Trucking industry funding; Cash flow solutions for trucking businesses; Transportation factoring experts; Quick funding for trucking companies; Invoice financing for logistics companies; Fueling growth with factoring for truckers; factoring companies; factoring company in Atlanta; factoring company in Georgia; truck factors; best factoring companies; factoring solutions; financial services; factoring services for trucking companies; invoice factoring; factoring for transportation"
        canonicalURL={''}
      />
      <Layout>
        <HeroSection />
        <IndustriesSection theme={theme} classNames={classNames} />
        <BenefitsSection theme={theme} classNames={classNames} />
        <TestimonialsSection theme={theme} classNames={classNames} variant={variant} />
        <TransitionSection theme={theme} classNames={classNames} />
        <MissionSection theme={theme} classNames={classNames} />
        <CareerSection theme={theme} classNames={classNames} />
      </Layout >
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
        <path d="M0 100 C 20 0 50 0 100 100 Z" className={classNames(theme === 'Light Mode' ? 'secondary-fill' : 'dark-accent-fill', '')} />
      </svg>
      <Container fluid className={classNames(theme === 'Light Mode' ? 'secondary-bg' : 'bg-dark-accent', 'my-0 ms-auto pt-5')} style={{ minHeight: '70vh' }}>
        <h2 className="fw-bold mt-1 mb-4 secondary-color text-center fs-40">Grow your business with us</h2>
        <Row className="mt-5 d-flex justify-content-center">
          {industries.map((item, index) => (
            <Col xs={12} md={3} className="my-4 mx-3 border-right" key={index}>
              <Container className="d-flex align-items-center flex-column mt-2">
                <Image className="img-fluid icon-color icon-80" src={item.src} alt={item.text.toLowerCase().replace(/\s/g, '-')} loading="lazy" />
                <p className="ms-1 my-1 fs-28 fw-bold secondary-color">{item.name}</p>
                <p className="ms-1 mb-2 fs-20 text-justify">{item.text}</p>
              </Container>
              <Row className="ms-auto text-end mt-2 mb-4">
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
        <path d="M0 0 C 50 100 80 100 100 0 Z" className={classNames(theme === 'Light Mode' ? 'secondary-fill' : 'dark-accent-fill', '')} />
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

const TestimonialCarousel = ({ theme, classNames, variant }) => {
  const testimonials = [
    {
      icon: (<BiHappyHeartEyes className={classNames(theme === 'Light Mode' ? 'secondary-color' : 'main-color', 'text-center mt-3 mb-0')} style={{ height: 'auto', width: '110px' }} />),
      title: 'Kadyn Hernandez',
      review: 'G Squared Funding set a standard of excellence in the factoring industry. Their dedication to client satisfaction, coupled with their expertise in financial solutions, makes them a standout choice for any business seeking funding support. I would highly recommend G Squared Funding to anyone looking for a reliable partner in achieving their financial goals. Five stars all around for their outstanding service and commitment to excellence!'
    },
    {
      icon: (<BiHappyAlt className={classNames(theme === 'Light Mode' ? 'secondary-color' : 'main-color', 'text-center mt-3 mb-0')} style={{ height: 'auto', width: '110px' }} />),
      title: 'Corina Munteanu',
      review: 'Partnering up with G Squared Finding was my best decision ever! Customer service is great, true professionals gathered all in one place. They deliver a highly adaptable service. All of my questions were answered in a professional manner and all my issues were solved in no time. On the top of that, I have got all the support I needed as a start up. I highly recommend this guys!'
    },
    {
      icon: (<BiHappyBeaming className={classNames(theme === 'Light Mode' ? 'secondary-color' : 'main-color', 'text-center mt-3 mb-0')} style={{ height: 'auto', width: '110px' }} />),
      title: 'Darren Gilbert',
      review: 'I was very pleased with my BDO. He was very professional and through. He was able to get my contract done, inspite of unexpected challenges. I would highly recommend this company for future business opportunities. Thank you, for all your hard work.'
    },
    {
      icon: (<BiHappy className={classNames(theme === 'Light Mode' ? 'secondary-color' : 'main-color', 'text-center mt-3 mb-0')} style={{ height: 'auto', width: '110px' }} />),
      title: 'Steve Fischer',
      review: 'Awesome people to work with'
    },
    {
      icon: (<BiHappyHeartEyes className={classNames(theme === 'Light Mode' ? 'secondary-color' : 'main-color', 'text-center mt-3 mb-0')} style={{ height: 'auto', width: '110px' }} />),
      title: 'Kingori Trucking LLC',
      review: 'They have served me for over for 4 years and no issues. No doubt this is the best factoring company in the country.'
    },
    {
      icon: (<BiHappyAlt className={classNames(theme === 'Light Mode' ? 'secondary-color' : 'main-color', 'text-center mt-3 mb-0')} style={{ height: 'auto', width: '110px' }} />),
      title: 'Rodney Smith',
      review: 'Great Funding Company. Affordable rates, Great CR reps!'
    },
    {
      icon: (<BiHappyBeaming className={classNames(theme === 'Light Mode' ? 'secondary-color' : 'main-color', 'text-center mt-3 mb-0')} style={{ height: 'auto', width: '110px' }} />),
      title: 'Keith Mims',
      review: 'Great Great Company!! I consider all these guys like "Family"!'
    },
    {
      icon: (<BiHappy className={classNames(theme === 'Light Mode' ? 'secondary-color' : 'main-color', 'text-center mt-3 mb-0')} style={{ height: 'auto', width: '110px' }} />),
      title: 'Martha Ortegon',
      review: 'I would not change or go with another factoring company, they are the best. I am really happy with their service.'
    },
    {
      icon: (<BiHappyHeartEyes className={classNames(theme === 'Light Mode' ? 'secondary-color' : 'main-color', 'text-center mt-3 mb-0')} style={{ height: 'auto', width: '110px' }} />),
      title: 'Eddie Oliver',
      review: 'Great company, great service, never had an issue in 5 years, there process is super easy and efficient!'
    },
    {
      icon: (<BiHappyAlt className={classNames(theme === 'Light Mode' ? 'secondary-color' : 'main-color', 'text-center mt-3 mb-0')} style={{ height: 'auto', width: '110px' }} />),
      title: 'Anonymous',
      review: 'The G Squared Funding team is the best factoring company when it comes to efficiency, profissionalism and customer service. Our funding is always on time without issues. I can always get someone on the phone that speaks clearly and is easy to understand. G Squared Funding customer service is not outsourced and not automated. In this highly stressful industry, the staff are always calm and professional and extremely knowledgeable.'
    },
    {
      icon: (<BiHappyBeaming className={classNames(theme === 'Light Mode' ? 'secondary-color' : 'main-color', 'text-center mt-3 mb-0')} style={{ height: 'auto', width: '110px' }} />),
      title: 'Wayne Crockett',
      review: 'Absolutely the best and most professional factoring company out there! We have used G2 for over a year now and have not had any problems. Our agent is hands down top notch. The rates are outstanding and funding is extremely fast. The funding reports are always sent over quickly as well. If you are reading this review save yourself a lot of TIME and MONEY and go with G2. I guarantee you will be on here giving them a great review as well!'
    },

  ]
  return (
    <Carousel data-bs-theme={variant(theme === 'Light Mode' ? 'dark' : 'light', '')} className='mt-2 mb-5'>
      {testimonials.map((testimonial, index) => (
        <Carousel.Item key={index} interval={10000} className='radius-20'>
          <Card className='text-center background'>
            <Card.Header className='border-none'>
              {testimonial.icon}
            </Card.Header>
            <Card.Body className='d-flex justify-content-center flex-column text-center'>
              <Card.Title className='secondary-color mb-3 mt-0 fs-28'>{testimonial.title}</Card.Title>
              <div className='d-flex flex-row justify-content-center mb-3'>
                <IoStarSharp className='icon-star me-1' />
                <IoStarSharp className='icon-star me-1' />
                <IoStarSharp className='icon-star me-1' />
                <IoStarSharp className='icon-star me-1' />
                <IoStarSharp className='icon-star me-1' />
              </div>
              <Card.Text className='main-color mx-4 mt-2 mb-5 px-4 pt-2  text-center fs-19'>
                <RiDoubleQuotesL className='mb-2 me-2 icon-30 secondary-color' />
                {testimonial.review}
                <RiDoubleQuotesR className='ms-2 mt-0 icon-30 secondary-color' />
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

const TestimonialsSection = ({ theme, classNames, variant }) => {
  return (
    <>
      <svg id="clouds" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M-5 100 Q 0 20 5 100 Z
						 M0 100 Q 5 0 10 100
						 M5 100 Q 10 30 15 100
						 M10 100 Q 15 10 20 100
						 M15 100 Q 20 30 25 100
						 M20 100 Q 25 -10 30 100
						 M25 100 Q 30 10 35 100
						 M30 100 Q 35 30 40 100
						 M35 100 Q 40 10 45 100
						 M40 100 Q 45 50 50 100
						 M45 100 Q 50 20 55 100
						 M50 100 Q 55 40 60 100
						 M55 100 Q 60 60 65 100
						 M60 100 Q 65 50 70 100
						 M65 100 Q 70 20 75 100
						 M70 100 Q 75 45 80 100
						 M75 100 Q 80 30 85 100
						 M80 100 Q 85 20 90 100
						 M85 100 Q 90 50 95 100
						 M90 100 Q 95 25 100 100
						 M95 100 Q 100 15 105 100 Z"
          className={classNames(theme === 'Light Mode' ? 'secondary-fill' : 'dark-accent-fill', '')}
        >
        </path>
      </svg>
      <Container fluid className={classNames(theme === 'Light Mode' ? 'secondary-bg' : 'bg-dark-accent', 'my-0 ms-auto pt-5')}>
        <h2 className="fw-bold py-2 mb-2 secondary-color text-center fs-34">What Clients Say?</h2>
        <p className="mb-4 fs-22 text-center">We place huge value on strong relationships and have seen the benefit they bring to our business. Client feedback is vital in helping us to get it right!</p>
        <Container fluid className='d-flex justify-content-center text-center carousel'>
          <TestimonialCarousel theme={theme} classNames={classNames} variant={variant} />
        </Container>
      </Container>
    </>
  );
};

const TransitionSection = ({ theme, classNames }) => {
  return (
    <>
      <svg id="bigTriangleShadow" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path id="trianglePath1" d="M0 0 L50 100 L100 0 Z" className={classNames(theme === 'Light Mode' ? 'secondary-fill' : 'dark-accent-fill', '')} />
        <path id="trianglePath2" d="M50 100 L100 40 L100 0 Z" className={classNames(theme === 'Light Mode' ? 'secondary-fill' : 'dark-accent-fill', '')} />
      </svg>
      <Container fluid className='py-5 mx-auto mt-3 mb-2'>
        <h2 className="fw-bold py-2 mb-2 secondary-color text-center fs-34">How can we tailor our factoring services to meet your unique needs?</h2>
        <Row className="d-flex align-items-center radius-20 my-3 text-center justify-content-center">
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
      <svg id="bigHalfCircle" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 100 C40 0 60 0 100 100 Z" className={classNames(theme === 'Light Mode' ? 'secondary-fill' : 'dark-accent-fill', 'p-1')} />
      </svg>
      <Container fluid className={classNames(theme === 'Light Mode' ? 'secondary-bg' : 'bg-dark-accent', 'ms-auto pb-3 mt-0')}>
        <Row className='p-4 mb-2'></Row>
        <Row className="my-3 mx-auto">
          <Col xs={12} sm={6} className="mt-2 mb-4 me-auto">
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
            <Container className="d-flex align-items-center mt-4 p-2 pb-0 mb-0">
              <p className="me-2 mt-2 mb-0 fs-28">Let's drive your business forward together!</p>
              <motion.div className="forward" animate={{ x: [0, 100], transition: { duration: 2, ease: "linear", loop: Infinity } }}>
                <Image className="img-fluid icon-color" src={forward} alt="truck icon" width="60" height="60" loading="lazy" />
              </motion.div>
            </Container>
            {/* Change that to a road? */}

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

const CareerSection = ({ theme, classNames }) => {
  return (
    <Container className='border my-3 p-3 d-flex justify-content-center'>
      <Container className={classNames(theme === 'Light Mode' ? 'secondary-bg' : 'bg-dark-accent', 'py-5 mx-2 my-2 border')}>
        <Container className='d-flex align-items-center text-center justify-content-center'>
          <h2 className="fw-bold py-2 my-2 secondary-color fs-36">WE'RE HIRING!</h2>
          <RiUserSearchFill className="secondary-color icon-40 ms-3" />
        </Container>
        <Row className="d-flex align-items-center radius-20 my-3 text-center justify-content-center">
          <p className="mt-2 fs-24">Join our dynamic team and be a part of an innovative and growing company! We are looking for talented individuals who are passionate about making a difference. <Link to='careers' className='link-color hover-link-color'>Explore our open positions </Link>and start your journey with us today. Your next career move could be just a click away!</p>
          <Link to='/careers/application' className='bordered-text hover-link-color fs-26'>Apply now!</Link>
        </Row>
      </Container>
    </Container>
  );
};

export default Home;