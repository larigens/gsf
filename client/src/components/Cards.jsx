import { Row, Col, Image } from 'react-bootstrap';
import collection from '../assets/icons/collection.png';
import creditScore from '../assets/icons/credit-score.png';
import recourse from '../assets/icons/recourse.png';
import nonRecourse from '../assets/icons/non-recourse.png';
import clientCentric from '../assets/icons/client_centric.png';
import reliability from '../assets/icons/reliability.png';
import innovation from '../assets/icons/innovation.png';
import flexibility from '../assets/icons/flexibility.png';
import { useEffect, useState } from 'react';

export const Cards = ({ cardInfo }) => {
    const [imageSrcs, setImageSrcs] = useState([]);
    console.log(cardInfo);

    useEffect(() => {
        if (cardInfo && cardInfo.length > 0) {
            const images = cardInfo.map(info => {
                switch (info.image) {
                    case 'nonRecourse':
                        return nonRecourse;
                    case 'recourse':
                        return recourse;
                    case 'creditScore':
                        return creditScore;
                    case 'collection':
                        return collection;
                    case 'clientCentric':
                        return clientCentric;
                    case 'reliability':
                        return reliability;
                    case 'innovation':
                        return innovation;
                    case 'flexibility':
                        return flexibility;
                    default:
                        return '';
                }
            });
            setImageSrcs(images);
        }
    }, [cardInfo]);


    return (
        <Row className="my-5 justify-content-center">
            {cardInfo && cardInfo.map((info, index) => (
                <Col key={index} md={5} className="text-center m-3 p-3 glassmorphism">
                    <Image className="img-fluid my-2 icon-color icon-80" src={imageSrcs[index]} alt={`${info.image} icon`} />
                    <p className="mb-3 text-center secondary-color fs-22">{info.title}</p>
                    <p className="text-justify fs-17">{info.description}</p>
                </Col>
            ))}
        </Row>
    )
}
