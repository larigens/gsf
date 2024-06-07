import { Container, Image } from 'react-bootstrap';
import { HelmetCP } from '../../components/Helmet';
import line from '../../assets/icons/line.png';
import { Link } from 'react-router-dom';

export const Resources = () => {

    const otherLinks = [
        {
            name: 'FMCSA - Federal Motor Carrier Safety Administration',
            link: 'http://li-public.fmcsa.dot.gov/LIVIEW/pkg_carrquery.prc_carrlist'
        },
        {
            name: 'SAFER - Safety &amp; Fitness Electronic Records System',
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
    return (
        <>
            <HelmetCP pageTitle={'Resources | Tools for Carriers'}
                pageDescription={`Explore Valuable Resources Tailored for Transportation and Trucking Professionals on Our Dedicated Page. From Industry Insights to Useful Tools, Access Everything You Need to Drive Success in Your Business.`}
                pageKeywords={'Transportation industry resources; Trucking business tools; Logistics industry insights; Freight management resources; Trucking industry guides; Transportation business articles; Logistics industry reports; Trucking industry tips; Freight management tools; Transportation industry news; factoring companies; factoring company in Atlanta; factoring company in Georgia; truck factors; best factoring companies; factoring solutions; financial services; factoring services for trucking companies; invoice factoring'} />
            <Container fluid className="mb-4 p-4">
                <p className="fw-bold text-justify mb-3 fs-40">Resources</p>
                {/* add api with gas price */}
                <p className="fw-bold text-justify mb-3 fs-22">Other Links</p>
                <ul className="list-unstyled fs-18">
                    {otherLinks.map((item, index) => (
                        <li key={index} className="d-flex align-items-center mb-2">
                            <Image src={line} alt="lines" className="img-fluid me-2 icon-20" />
                            <Link to={item.link} className="fs-18 link-color hover-link-color">{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </Container>
        </>
    )
}