import { Row, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import broker from '../../assets/icons/broker.png';
import carrier from '../../assets/icons/carrier.png';
import staff from '../../assets/icons/staff.png';
import { useEffect, useState } from 'react';

export const FlipCards = ({ title, subtitle, image, link }) => {
    const [src, setSrc] = useState(null);

    useEffect(() => {
        if (image && Array.isArray(image) && image.length > 0) {
            image.forEach(element => {
                if (element === 'carrier') {
                    setSrc(carrier);
                } else if (element === 'broker') {
                    setSrc(broker);
                }
            });
        } else if (typeof image === 'string') {
            setSrc(staff);
        }
    }, [image, setSrc]);

    return (
        <Container className="flip-card">
            <Container className="flip-card-inner">
                <Container className="flip-card-front">
                    <Container className='glassmorphism p-3 text-center radius-20'>
                        {image && Array.isArray(image) && image.length > 0 ?
                            image.map((img, index) => (
                                <Image key={index} className="img-fluid mb-1 me-3 icon-color icon-80" src={img === 'carrier' ? carrier : broker} alt={`${img} icon`} />
                            ))
                            :
                            (typeof image === 'string' ?
                                <Image className="img-fluid mb-1 icon-color icon-80" src={src} alt={`${src} icon`} />
                                :
                                null
                            )
                        }
                        <Row className="border-top my-2"></Row>
                        <h5 className="secondary-color mt-4 mb-2 text-center fs-22">{title}</h5>
                        <p className="mb-3 text-center fs-18">{subtitle}</p>
                    </Container>
                </Container>
                <Container className="flip-card-back glassmorphism p-3 text-center radius-20">
                    <Link to={link} className="secondary-color text-center fs-18 my-3">Learn more</Link>
                </Container>
            </Container>
        </Container>
    )

};
