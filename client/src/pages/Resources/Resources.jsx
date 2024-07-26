import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Image, Button } from 'react-bootstrap';
import { HelmetCP } from '../../components/Helmet';
import { Link } from 'react-router-dom';
import { BsFillFuelPumpDieselFill } from 'react-icons/bs';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import { FaReadme, FaUser } from 'react-icons/fa';
import { MdOutlinePriceCheck } from 'react-icons/md';
import { FuelForm } from '../../components/Forms/FuelForm';
import { FMCSA } from '../../components/FMCSA';
import line from '../../assets/icons/line.png';
import afi from '../../assets/AFIEagle.png';
import cw from '../../assets/cw.png';
import forward from '../../assets/icons/forward.png';
import instructions from '../../assets/instructions.pdf';
import { useTheme } from '../../components/ThemeContext';

export const Resources = () => {
    const { theme } = useTheme();
    const classNames = (...classes) => classes.filter(Boolean).join(' ');

    const [fuelData, setFuelData] = useState([]);
    const [fuelInfo, setFuelInfo] = useState('');
    const [areaInfo, setAreaInfo] = useState('');

    const getDateMinus7Days = () => {
        const date = new Date();
        date.setDate(date.getDate() - 7);
        return date.toISOString().split('T')[0];
    };

    const startDate = getDateMinus7Days();

    const otherLinks = [
        {
            name: 'FMCSA - Federal Motor Carrier Safety Administration',
            link: 'http://li-public.fmcsa.dot.gov/LIVIEW/pkg_carrquery.prc_carrlist'
        },
        {
            name: 'SAFER - Safety & Fitness Electronic Records System',
            link: 'http://safer.fmcsa.dot.gov/companysnapshot.aspx'
        },
        {
            name: 'CVSA - Commercial Vehicle Safety Alliance',
            link: 'http://www.cvsa.org/'
        },
        {
            name: 'FHWA - The Federal Highway Administration',
            link: 'http://www.fhwa.dot.gov/'
        },
        {
            name: 'OOIDA - The Owner-Operator Independent Drivers Association',
            link: 'http://www.ooida.com/'
        },
        {
            name: 'Fuel Updates',
            link: 'http://www.eia.gov/petroleum/gasdiesel/'
        },
        {
            name: 'Fuel Surcharge Index',
            link: 'http://www.fuelsurchargeindex.org/'
        },
        {
            name: 'Fuel Surcharge Calculator',
            link: 'https://www.ooida.com/trucking-tools/fuel-surcharge-calculator/'
        }
    ];

    useEffect(() => {
        const fetchFuelData = async () => {
            try {
                const response = await fetch(
                    `https://api.eia.gov/v2/petroleum/pri/gnd/data/?api_key=${process.env.REACT_APP_EIA_API_KEY}&frequency=weekly&data[0]=value&facets[duoarea][]=${fuelInfo}&start=${startDate}&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000`
                );
                const json = await response.json();
                setFuelData(json.response.data);
            } catch (error) {
                console.error('Error fetching fuel data:', error);
            }
        };

        if (fuelInfo) {
            fetchFuelData();
        }
    }, [fuelInfo, startDate]);

    console.log(fuelData);

    return (
        <>
            <HelmetCP
                pageTitle={'Resources | Tools for Carriers'}
                pageDescription={`Explore Valuable Resources Tailored for Transportation and Trucking Professionals on Our Dedicated Page. From Industry Insights to Useful Tools, Access Everything You Need to Drive Success in Your Business.`}
                pageKeywords={'Transportation industry resources; Trucking business tools; Logistics industry insights; Freight management resources; Trucking industry guides; Transportation business articles; Logistics industry reports; Trucking industry tips; Freight management tools; Transportation industry news; factoring companies; factoring company in Atlanta; factoring company in Georgia; truck factors; best factoring companies; factoring solutions; financial services; factoring services for trucking companies; invoice factoring'}
                canonicalURL={'resources'}
            />
            <Container fluid className="mx-auto p-4">
                <p className="fw-bold text-justify mb-4 fs-40">Resources</p>
                <Row>
                    <Col md={7} className='my-2'>
                        <p className="fs-26 mb-2">American Fleet Insurance An Agent of Cover Whale</p>
                        <p className="secondary-color fs-22 fw-bold">Need down payment assistance?</p>
                        <p className="fs-18 mb-2">
                            We have an insurance department that specializes in business/commercial insurance for trucking and transportation companies.
                        </p>
                        <p className="fs-18 mb-2">
                            American Fleet Insurance is an independent agency specializing in Trucking &amp; Transportation. Our goal is to help protect your business
                            and allow you to focus on the road ahead.
                        </p>
                        <Link to="https://gsquaredquotes.com/" className="secondary-color fs-19 my-3">
                            Learn More
                        </Link>
                    </Col>
                    <Col md={1}>
                        <svg id="bigHalfCircleLeft" xmlns="http://www.w3.org/2000/svg" version="1.1" width="117%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className='radius-20 ms-1'>
                            <path d="M100 0 C0 40 0 60 100 100 Z" className='secondary-fill' />
                        </svg>
                    </Col>
                    <Col md={4} className='d-flex flex-column align-items-center secondary-bg text-center my-0 p-1 radius-20'>
                        <Image src={afi} className="img-fluid my-2 p-1 radius-20" width={400} />
                        <Image src={cw} className="img-fluid my-2 p-1 radius-20" width={400} />
                    </Col>
                </Row>
            </Container>
            <Container fluid className="mb-2 p-4">
                <Row className="mb-4">
                    <Col md={7}>
                        <p className="fs-26 mb-2">Load Board</p>
                        <p className="secondary-color fs-22 fw-bold">Seeking help to find loads?</p>
                        <p className="fs-18 mb-2">Access our free load board to book your next load!</p>
                        <Button className="my-3 contact-btn px-2 py-1 radius-20 border-none" href="https://getloadsnow.com/" target="_blank" rel="noopener noreferrer">
                            <span className="contact-btn-span px-3 fs-24">
                                Get Loads Now
                                <Image className="img-fluid ms-2 px-1 arrow-icon icon-color btn-icon" src={forward} alt="truck icon" width="45" loading="lazy" />
                            </span>
                        </Button>
                        <p className="fs-18 mt-3">Your go-to platform for load board and freight management.</p>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="my-0 p-0">
                <svg id="curveUpColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" className='mt-5' preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" className={classNames(theme === 'Light Mode' ? 'secondary-fill' : 'dark-accent-fill', '')} />
                </svg>
                <Row className={classNames(theme === 'Light Mode' ? 'secondary-bg' : 'bg-dark-accent', 'px-3 py-4 d-flex align-items-middle')}>
                    <p className="fs-32 mb-2">Fuel Updates</p>
                    <p className="secondary-color fs-24 fw-semibold">Want to stay informed on fuel prices?</p>
                    <Col sm={12} md={7} className='mb-2'>
                        <FuelForm setFuelInfo={setFuelInfo} setAreaInfo={setAreaInfo} />
                    </Col>
                    <Col sm={12} md={5}>
                        <div className='iframe-container radius-20'>
                            <iframe
                                id="diesel-price-per-gallon"
                                title="diesel-price-per-gallon"
                                src='https://www.eia.gov/petroleum/gasdiesel/images/gasoline_prices_map.png'
                                scrolling='no'
                            ></iframe>
                            <Link
                                to="https://www.eia.gov/petroleum/gasdiesel/gas_geographies.php#statesmap"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>Go to diesel price per gallon page</span>
                            </Link>
                        </div>
                    </Col>
                </Row>
                {fuelInfo && fuelData ?
                    <Container fluid className='p-3'>
                        <Row className='m-3'>
                            <p className="fw-bold text-justify m-3 fs-22">{areaInfo}</p>
                        </Row>
                        <Row className='p-4 mx-2'>
                            {fuelData
                                .filter(product => product['product-name'] === 'Regular Gasoline' || product['product-name'] === 'No 2 Diesel')
                                .map((product, index) => (
                                    <Col key={index} md={6} className="d-flex align-items-center m-2 p-2 glassmorphism mobile-column">
                                        <p className="secondary-color text-center fs-20 nowrap-text my-2">{product['product-name']}</p>
                                        <Container className='d-flex align-items-center justify-content-end text-end mobile-column'>
                                            <BsFillFuelPumpDieselFill className="img-fluid mx-2 icon-color icon-40 mobile-column-icon" />
                                            <p className="text-justify fs-17 mt-3">${product['value']}/GAL </p>
                                        </Container>
                                    </Col>
                                ))}
                        </Row>
                    </Container>
                    : null}

                {/* add fuel surchage calculator */}

                <svg id="curveDownColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none" className='mb-4'>
                    <path d="M0 0 C 50 100 80 100 100 0 Z" className={classNames(theme === 'Light Mode' ? 'secondary-fill' : 'dark-accent-fill', '')} />
                </svg>
            </Container>
            <Container fluid className="mx-auto p-4 my-5 text-center">
                <Row className='text-center d-flex justify-content-center'>
                    <p className="fs-34 mb-2">Client Tools</p>
                    <p className="secondary-color fs-26">Need access to check credit or view your account online?</p>
                    <Col md={2} className="my-4">
                        <Link to="/resources/client-portal" className="link-color hover-link-color">
                            <Container className="glassmorphism p-3 text-center radius-20">
                                <FaUser className="img-fluid text-center mb-1 icon-80" />
                                <Row className="border-top m-2"></Row>
                                <h5 className="mt-4 mb-2 text-center fs-22">Client Portal</h5>
                            </Container>
                        </Link>
                    </Col>
                    <Col md={2} className="my-4">
                        <Link to="/resources/credit-services" className="link-color hover-link-color">
                            <Container className="glassmorphism p-3 text-center radius-20">
                                <MdOutlinePriceCheck className="img-fluid text-center mb-1 icon-80" />
                                <Row className="border-top m-2"></Row>
                                <h5 className="mt-4 mb-2 text-center fs-22">Credit Services</h5>
                            </Container>
                        </Link>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='mt-5 pt-5'>

            </Container>
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
            <Container fluid className={classNames(theme === 'Light Mode' ? 'secondary-bg' : 'bg-dark-accent', 'mx-auto p-4')}>
                <Row className='my-3 d-flex justify-content-center mx-auto'>
                    <p className="fs-34 mb-2 text-center">Working with GSF</p>
                    <p className="secondary-color fs-26 fw-bold text-center">Need assistance with the factoring process?</p>
                    <Col md={6} className='ps-5 mt-3'>
                        <Row className="ms-2 ps-2 d-flex align-items-center justify-content-center">
                            <Col md={6} className='me-1'>
                                <p className="mt-4 fs-24 fw-semibold">Download our instructions</p>
                                <a href={instructions} download="gsf_instructions.pdf" className="d-flex align-items-center mt-3 link-color hover-link-color">
                                    <HiOutlineDocumentDownload className="ms-3 icon-80 img-fluid" />
                                    <p className="fs-22 mx-3">Download</p>
                                </a>
                            </Col>
                            <Col md={5}>
                                <p className="mt-4 fs-24 fw-semibold">Read it online</p>
                                <Link to="/resources/working-gsf" className="d-flex align-items-center mt-3 link-color hover-link-color">
                                    <FaReadme className="ms-4 icon-80 img-fluid" />
                                    <p className="fs-22 mx-3">Click Here</p>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <svg id="bigTriangleShadow" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path id="trianglePath1" d="M0 0 L50 100 L100 0 Z" className={classNames(theme === 'Light Mode' ? 'secondary-fill' : 'dark-accent-fill', '')} />
                <path id="trianglePath2" d="M50 100 L100 40 L100 0 Z" className={classNames(theme === 'Light Mode' ? 'secondary-fill' : 'dark-accent-fill', '')} />
            </svg>
            <Container fluid className="my-5 p-4">
                <Row className="my-5">
                    <Col>
                        <p className="fs-26 mb-2">Phone Apps</p>
                        <p className="mb-4 fs-18">
                            If you are out on the road and don’t have access to a fax or scanner to send documents, we recommend Adobe Scan, DriveAxle App or CamScanner App. These are free apps and easy to use!
                        </p>

                        <AppLink
                            name="Adobe Scan"
                            appStoreLink="https://apps.apple.com/us/app/adobe-scan-pdf-scanner-ocr/id1199564834"
                            playStoreLink="https://play.google.com/store/apps/details?id=com.adobe.scan.android&hl=en_US&gl=US"
                        />

                        <AppLink
                            name="DriveAxle"
                            appStoreLink="https://itunes.apple.com/us/app/drive-axle/id455526813?mt=8"
                            playStoreLink="https://play.google.com/store/apps/details?id=com.eleostech.driveaxle"
                        />

                        <AppLink
                            name="CamScanner"
                            appStoreLink="https://itunes.apple.com/us/app/camscanner-free-pdf-document/id388627783?mt=8"
                            playStoreLink="https://play.google.com/store/apps/details?id=com.intsig.camscanner&hl=en"
                        />
                    </Col>
                </Row>
            </Container>

            <Container fluid className="mt-4 p-1">
                <p className="fs-30 my-4 ms-3 ps-2">FMCSA</p>
                <FMCSA />
            </Container>

            <Container fluid className="mt-5 p-2">
                <Row className={`${theme === 'Light Mode' ? 'secondary-bg' : ''} mx-4 p-4 border`}>
                    <p className="fw-bold text-justify mb-3 fs-22">Other Links</p>
                    <ul className="list-unstyled fs-18">
                        {otherLinks.map((item, index) => (
                            <li key={index} className="d-flex align-items-center mb-2">
                                <Image src={line} alt="lines" className="img-fluid me-2 icon-20" />
                                <a href={item.link} className="fs-18 link-color hover-link-color" target="_blank" rel="noopener noreferrer">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </Row>
            </Container>
        </>
    );

    function AppLink({ name, appStoreLink, playStoreLink }) {
        return (
            <div className="my-3">
                <p className="my-2 secondary-color fs-19">{name}</p>
                <Row>
                    <Col>
                        <a tabIndex="0" href={appStoreLink} target="_blank" rel="noopener noreferrer">
                            <Image className="img-fluid me-2 icon-150 m-2" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" />
                        </a>
                        <a tabIndex="0" href={playStoreLink} target="_blank" rel="noopener noreferrer">
                            <Image className="img-fluid me-2 icon-150 m-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="Get it on Google Play" />
                        </a>
                    </Col>
                </Row>
            </div>
        );
    }
}

export const AppLink = ({ name, appStoreLink, playStoreLink }) => {
    return (
        <div className="my-3">
            <p className="my-2 secondary-color fs-19">{name}</p>
            <Row>
                <Col>
                    <a tabIndex="0" href={appStoreLink} target="_blank" rel="noopener noreferrer">
                        <Image className="img-fluid me-2 icon-150 m-2" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" />
                    </a>
                    <a tabIndex="0" href={playStoreLink} target="_blank" rel="noopener noreferrer">
                        <Image className="img-fluid me-2 icon-150 m-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="Get it on Google Play" />
                    </a>
                </Col>
            </Row>
        </div>
    );
}