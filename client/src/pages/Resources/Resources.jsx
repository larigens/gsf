import { Container, Image, Col, Row, Button } from 'react-bootstrap';
import { HelmetCP } from '../../components/Helmet';
import line from '../../assets/icons/line.png';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { FuelForm } from '../../components/Forms/FuelForm';
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import afi from '../../assets/AFIEagle.png';
import cw from '../../assets/cw.png';
import forward from '../../assets/icons/forward.png';
import { FMCSA } from '../FMCSA.jsx';
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { FaReadme } from "react-icons/fa";
import instructions from '../../assets/instructions.pdf'

export const Resources = () => {
    const [fuelData, setFuelData] = useState([]);
    const [fuelInfo, setFuelInfo] = useState('');
    const [areaInfo, setAreaInfo] = useState('');

    // Function to get today's date minus 7 days
    const getDateMinus7Days = () => {
        const date = new Date();
        date.setDate(date.getDate() - 7);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
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
    ]

    useEffect(() => {
        if (fuelInfo) {
            const fetchFuelData = async () => {
                try {
                    const response = await fetch(`https://api.eia.gov/v2/petroleum/pri/gnd/data/?api_key=${process.env.REACT_APP_EIA_API_KEY}&frequency=weekly&data[0]=value&facets[duoarea][]=${fuelInfo}&start=${startDate}&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000`);
                    const json = await response.json();
                    setFuelData(json.response.data);
                }
                catch (error) {
                    console.error('Error fetching carrier data:', error);
                }
            };
            fetchFuelData();
        }
    }, [fuelInfo, startDate])

    console.log(areaInfo);

    return (
        <>
            <HelmetCP pageTitle={'Resources | Tools for Carriers'}
                pageDescription={`Explore Valuable Resources Tailored for Transportation and Trucking Professionals on Our Dedicated Page. From Industry Insights to Useful Tools, Access Everything You Need to Drive Success in Your Business.`}
                pageKeywords={'Transportation industry resources; Trucking business tools; Logistics industry insights; Freight management resources; Trucking industry guides; Transportation business articles; Logistics industry reports; Trucking industry tips; Freight management tools; Transportation industry news; factoring companies; factoring company in Atlanta; factoring company in Georgia; truck factors; best factoring companies; factoring solutions; financial services; factoring services for trucking companies; invoice factoring'} />
            <Container fluid className="mb-4 p-4">
                <p className="fw-bold text-justify mb-4 fs-40">Resources</p>
                <Row>
                    <Col md={7}>
                        <p className="fs-26 mb-2">American Fleet Insurance An Agent of Cover Whale</p>
                        <p className="secondary-color fs-22 fw-bold">Need down payment assistance?</p>
                        <p className="fs-18 mb-1">We have an insurance department that specializes in business/commercial insurance for trucking and transportation companies.</p>
                        <p className="fs-18 mb-1">American Fleet Insurance is an independent agency specializing in Trucking &amp; Transportation. Our goal is to help protect your business and allow you to focus on the road ahead.</p>
                        <Link to="https://gsquaredquotes.com/" className="secondary-color fs-19">Learn More</Link>
                    </Col>
                    <Col md={5} className='d-flex flex-column align-items-center'>
                        <Image src={afi} className='img-fluid my-2 p-2 radius-20' width={400} />
                        <Image src={cw} className='img-fluid my-2 p-2 radius-20' width={400} />
                    </Col>
                </Row>

                <Row className='my-5'>
                    <p className="fs-26 mb-2">Load Board</p>
                    <p className="secondary-color fs-22 fw-bold">Seeking help to find loads?</p>
                    <p className="fs-18 mb-1">Access our free load board to book your next load!</p>
                    <Row className="ms-1 mb-4">
                        <Button className="my-2 contact-btn px-2 py-1 radius-20 border-none" role="button" href="https://getloadsnow.com/">
                            <span className="contact-btn-span px-3 fs-24">
                                Get Loads Now
                                <Image className="img-fluid ms-2 px-1 arrow-icon icon-color btn-icon" src={forward} alt="truck icon" width="45" loading="lazy" />
                            </span>
                        </Button>
                    </Row>
                    <p className="fs-18 mb-1">Your go-to platform for load board and freight management.</p>
                </Row>

                <Row className='my-5'>
                    <p className="fs-26 mb-2">Fuel Updates</p>
                    <p className="secondary-color fs-22 fw-bold">Want to stay informed on fuel prices?</p>
                    <Col md={7}>
                        <FuelForm setFuelInfo={setFuelInfo} setAreaInfo={setAreaInfo} />
                    </Col>
                    <Col md={5} >
                        <div className='radius-20 mb-1' style={{ position: 'relative', width: '100%', height: '560px' }}>
                            <iframe
                                id="diesel-price-per-gallon"
                                title="diesel-price-per-gallon"
                                style={{ width: '100%', height: '100%' }}
                                src='https://www.eia.gov/petroleum/gasdiesel/images/gasoline_prices_map.png'
                                scrolling='no'
                                className='radius-20 text-center'
                            ></iframe>
                            <Link
                                to="https://www.eia.gov/petroleum/gasdiesel/gas_geographies.php#statesmap"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    zIndex: 10,
                                    backgroundColor: 'transparent'
                                }}
                            >
                                <span style={{
                                    position: 'absolute',
                                    width: '1px',
                                    height: '1px',
                                    margin: '-1px',
                                    padding: 0,
                                    overflow: 'hidden',
                                    clip: 'rect(0, 0, 0, 0)',
                                    border: 0
                                }}>Go to diesel price per gallon page</span>
                            </Link>
                        </div>
                    </Col>
                    {fuelInfo && fuelData ?
                        <Container fluid className='p-3'>
                            <Row className='mt-3 ms-2'>
                                <p className="fw-bold text-justify m-3 fs-22">{areaInfo}</p>
                            </Row>
                            <Row className='p-4 mx-2'>
                                {fuelData.map((product, index) => (
                                    <Col key={index} md={4} className="d-flex align-items-center m-2 p-2 glassmorphism">
                                        <p className="secondary-color text-center fs-20 nowrap-text my-2">{product['product-name']}</p>
                                        <Container className='d-flex align-items-center justify-content-end text-end'>
                                            <BsFillFuelPumpDieselFill className="img-fluid mx-2 icon-color icon-40" />
                                            <p className="text-justify fs-17 mt-3">${product['value']}/GAL </p>
                                        </Container>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                        : null}
                </Row>
                {/* add fuel surchage calculator */}


                <Row className='my-5'>
                    <p className="fs-26 mb-2">Login Access</p>
                    <p className="secondary-color fs-22 fw-bold">Need access to check credit or view your account online?</p>
                    <ul className="list-unstyled">
                        <li className="d-flex align-items-center mb-3">
                            <Image src={line} alt="lines" className="img-fluid me-2 icon-20" />
                            <p className="mb-0 text-justify fs-18">
                                Request Login for <Link to='mailto:dramirez@gsquaredfunding.com?subject=Login%20Request%20for%20WinFactor%20Client%20Portal%20-%20MC%23' className='link-color hover-link-color'>Client Portal</Link> – Include your company name and MC number.
                            </p>
                        </li>
                        <li className="d-flex align-items-center mb-3">
                            <Image src={line} alt="lines" className="img-fluid me-2 icon-20" />
                            <p className="mb-0 text-justify fs-18">
                                Request Login for <Link to='mailto:dramirez@gsquaredfunding.com?subject=Login%20Request%20for%20Factors%20Network%20-%20MC%23' className='link-color hover-link-color'>Credit Checks</Link> – Include your company name, MC Number and business email address for setup.
                            </p>
                        </li>
                    </ul>
                </Row>

                <Row className='my-5'>
                    <p className="fs-26 mb-2">Working with GSF</p>
                    <p className="secondary-color fs-22 fw-bold">Need assistance with the factoring process?</p>
                    <Row className="ms-3 ps-4 d-flex align-items-center">
                        <Col md={4}>
                            <p className="mt-4 fs-24 fw-semibold">1. Download our instructions</p>
                            {/* Add updated pdf of the instructions */}
                            <a href={instructions} download='gsf_instructions.pdf' className="d-flex align-items-center mt-3 link-color hover-link-color">
                                <HiOutlineDocumentDownload className='ms-3 icon-80 img-fluid' />
                                <p className="fs-22 mx-3">Download</p>
                            </a>
                        </Col>
                        <Col md={2}>
                            <h1 className="text-justify fw-bold">OR</h1>
                        </Col>
                        <Col md={6}>
                            <p className="mt-4 fs-24 fw-semibold">2. Read it online</p>
                            <Link to="/resources/working-gsf" className="d-flex align-items-center mt-3 link-color hover-link-color">
                                <FaReadme className='ms-4 icon-80 img-fluid' />
                                <p className="fs-22 mx-3">Click Here</p>
                            </Link>
                        </Col>
                    </Row>
                </Row>

                <Row className='my-5'>
                    <p id='phone-apps' className="fs-26 mb-2">Phone Apps</p>
                    <p className="mb-4 fs-18">
                        If you are out on the road and don’t have access to a fax or scanner to send documents, we recommend Adobe Scan, DriveAxle App or CamScanner App. These are free apps and easy to use!
                    </p>

                    <p className="my-2 secondary-color fs-19">Adobe Scan</p>
                    <Row>
                        <Col>
                            <Link tabIndex="0" to="https://apps.apple.com/us/app/adobe-scan-pdf-scanner-ocr/id1199564834">
                                <Image className="img-fluid me-2 icon-150 m-2" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" />
                            </Link>
                            <Link tabIndex="0" to="https://play.google.com/store/apps/details?id=com.adobe.scan.android&hl=en_US&gl=US">
                                <Image className="img-fluid me-2 icon-150 m-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="Get it on Google Play" />
                            </Link>
                        </Col>
                    </Row>

                    <p className="my-2 secondary-color fs-19">DriveAxle</p>
                    <Row>
                        <Col>
                            <Link tabIndex="0" to="https://itunes.apple.com/us/app/drive-axle/id455526813?mt=8">
                                <Image className="img-fluid me-2 icon-150 m-2" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" />
                            </Link>
                            <Link tabIndex="0" to="https://play.google.com/store/apps/details?id=com.eleostech.driveaxle">
                                <Image className="img-fluid me-2 icon-150 m-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="Get it on Google Play" />
                            </Link>
                        </Col>
                    </Row>

                    <p className="my-2 secondary-color fs-19">CamScanner</p>
                    <Row>
                        <Col>
                            <Link tabIndex="0" to="https://itunes.apple.com/us/app/camscanner-free-pdf-document/id388627783?mt=8">
                                <Image className="img-fluid me-2 icon-150 m-2" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" />
                            </Link>
                            <Link tabIndex="0" to="https://play.google.com/store/apps/details?id=com.intsig.camscanner&hl=en">
                                <Image className="img-fluid me-2 icon-150 m-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="Get it on Google Play" />
                            </Link>
                        </Col>
                    </Row>
                </Row>

                <Row className='my-5'>
                    <p className="fs-26 mb-2">FMCSA</p>
                    <Row className="mx-1 mt-3 mb-4">
                        <FMCSA />
                    </Row>
                </Row>

                <p className="fw-bold text-justify mb-3 fs-22">Other Links</p>
                <ul className="list-unstyled fs-18">
                    {otherLinks.map((item, index) => (
                        <li key={index} className="d-flex align-items-center mb-2">
                            <Image src={line} alt="lines" className="img-fluid me-2 icon-20" />
                            <Link to={item.link} className="fs-18 link-color hover-link-color">{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </Container >
        </>
    )
}