import React, { useEffect, useState } from 'react';
import { Row, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import broker from '../../assets/icons/broker.png';
import carrier from '../../assets/icons/carrier.png';
import staff from '../../assets/icons/staff.png';

export const LinkCards = ({ title, subtitle, image, link }) => {
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
        <Link to={link} className="text-decoration-none">
            <Container className='glassmorphism p-3 text-center radius-20'>
                {image && Array.isArray(image) && image.length > 0 ?
                    image.map((img, index) => (
                        <Image key={index} className="img-fluid mb-1 icon-color icon-80" src={img === 'carrier' ? carrier : (img === 'broker' ? broker : '')} alt={`${img} icon`} />
                    ))
                    :
                    (typeof image === 'string' && src ?
                        <Image className="img-fluid mb-1 icon-color icon-80" src={src} alt={`${src} icon`} />
                        :
                        null
                    )
                }
                <Row className="border-top m-2"></Row>
                <h5 className="secondary-color mt-4 mb-2 text-center fs-22">{title}</h5>
                <p className="mb-3 text-center fs-18 main-color">{subtitle}</p>
                <Row className="justify-content-end">
                    <Link to={link} className="secondary-color fs-18 my-2">Learn more</Link>
                </Row>
            </Container>
        </Link>
    );
};
